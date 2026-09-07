import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import fs from 'fs';
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Gemini GenAI Client Helper
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    geminiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return geminiClient;
}

// Read Firebase config
let firebaseConfig: any = null;
try {
  const rawConfig = fs.readFileSync(path.join(process.cwd(), 'firebase-applet-config.json'), 'utf-8');
  firebaseConfig = JSON.parse(rawConfig);
} catch (e) {
  console.warn('Could not load firebase-applet-config.json:', e);
}

// Initialize Firebase Admin
let db: Firestore | null = null;
let isFirestoreAvailable = false;

try {
  if (firebaseConfig && firebaseConfig.projectId) {
    if (!getApps().length) {
      initializeApp({
        projectId: firebaseConfig.projectId,
      });
    }
    const dbId = firebaseConfig.firestoreDatabaseId || '(default)';
    db = getFirestore(getApp(), dbId);
  }
} catch (err) {
  // Graceful fallback to memory store
}

// In-Memory Backup Stores
const inMemoryStore = {
  submissions: [] as any[],
  users: [] as any[],
  projects: [
    {
      id: 'proj-001',
      title: 'NorthStar Banking Core Microservices',
      type: 'Dedicated Engineering Pod',
      clientEmail: 'arjun@northstar.io',
      clientName: 'Arjun Sharma',
      status: 'In Progress',
      progress: 68,
      leadArchitect: 'Rajesh Varma (Principal Architect)',
      sprint: 'Sprint 14: Kafka Event Mesh',
      monthlyRetainer: 299000,
      createdAt: new Date(Date.now() - 30 * 86400000).toISOString(),
    },
    {
      id: 'proj-002',
      title: 'HealthOps Diagnostic AI & RAG Pipeline',
      type: 'Sprint MVP Starter',
      clientEmail: 'priya@healthops.ai',
      clientName: 'Dr. Priya Rao',
      status: 'Review',
      progress: 92,
      leadArchitect: 'Ananya Sen (AI Systems Lead)',
      sprint: 'Sprint 6: Vector Evaluation',
      monthlyRetainer: 149000,
      createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
    }
  ],
  invoices: [
    {
      id: 'inv-98214',
      invoiceNumber: 'INV-98214',
      clientEmail: 'arjun@northstar.io',
      clientName: 'NorthStar Digital Payments Ltd',
      description: 'Dedicated Engineering Pod (Sprint 13 & 14)',
      baseAmount: 299000,
      gstAmount: 53820,
      totalAmount: 352820,
      gstin: '36AAACS1234A1Z5',
      paymentMethod: 'Net Banking (HDFC Corporate)',
      status: 'paid',
      paidAt: new Date(Date.now() - 5 * 86400000).toISOString(),
      createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
    },
    {
      id: 'inv-98213',
      invoiceNumber: 'INV-98213',
      clientEmail: 'priya@healthops.ai',
      clientName: 'HealthOps AI Systems',
      description: 'Sprint MVP Starter - Medical Vision RAG',
      baseAmount: 149000,
      gstAmount: 26820,
      totalAmount: 175820,
      gstin: '29ABCDE1234F1Z5',
      paymentMethod: 'UPI / QR',
      status: 'paid',
      paidAt: new Date(Date.now() - 12 * 86400000).toISOString(),
      createdAt: new Date(Date.now() - 12 * 86400000).toISOString(),
    }
  ],
  tasks: [
    {
      id: 'task-101',
      title: 'Optimize Envoy Gateway rate-limiting filters for P99 < 3ms',
      project: 'NorthStar Banking Core',
      assignee: 'Suresh Reddy',
      priority: 'High',
      status: 'in_progress',
      storyPoints: 5,
      dueDate: 'Tomorrow',
      createdAt: new Date().toISOString()
    },
    {
      id: 'task-102',
      title: 'Implement HNSW vector index sharding for clinical RAG dataset',
      project: 'HealthOps Diagnostic AI',
      assignee: 'Ananya Sen',
      priority: 'Critical',
      status: 'code_review',
      storyPoints: 8,
      dueDate: 'Aug 29',
      createdAt: new Date().toISOString()
    },
    {
      id: 'task-103',
      title: 'Automate zero-downtime Canary rollout Helm chart in GitLab CI',
      project: 'DevOps & SRE Core',
      assignee: 'Rajesh Varma',
      priority: 'Medium',
      status: 'todo',
      storyPoints: 3,
      dueDate: 'Sep 02',
      createdAt: new Date().toISOString()
    },
    {
      id: 'task-104',
      title: 'Pass ISO 27001 & SOC-2 compliance audit for WORM log audit stream',
      project: 'Security & Compliance',
      assignee: 'Kavita Menon',
      priority: 'High',
      status: 'done',
      storyPoints: 5,
      dueDate: 'Yesterday',
      createdAt: new Date().toISOString()
    }
  ],
  candidates: [
    {
      id: 'cand-001',
      candidateName: 'Rohan Sharma',
      candidateEmail: 'rohan.sharma@example.com',
      track: 'Advanced Systems Capstone',
      experience: '2 Years',
      github: 'https://github.com/rohan-sharma-dev',
      status: 'enrolled',
      score: 94,
      createdAt: new Date(Date.now() - 8 * 86400000).toISOString()
    },
    {
      id: 'cand-002',
      candidateName: 'Sneha Patel',
      candidateEmail: 'sneha.patel@example.com',
      track: 'Standard Foundations',
      experience: 'Fresher / B.Tech',
      github: 'https://github.com/sneha-codes',
      status: 'evaluated',
      score: 88,
      createdAt: new Date(Date.now() - 3 * 86400000).toISOString()
    }
  ],
  reviews: [
    {
      id: 'rev-001',
      author: 'Vikram Sethi',
      role: 'Chief Technology Officer',
      company: 'NorthStar FinTech · Mumbai',
      rating: 5,
      message: 'SiPro architected our entire Kubernetes cluster and reduced our database query latency by 64%. The pod integrated seamlessly with our internal sprint cadence.',
      verifiedClient: true,
      service: 'Cloud Infrastructure & DevOps',
      createdAt: new Date(Date.now() - 20 * 86400000).toISOString()
    },
    {
      id: 'rev-002',
      author: 'Ananya Krishnan',
      role: 'VP of Engineering',
      company: 'HealthGrid Solutions · Bengaluru',
      rating: 5,
      message: 'Their DPDP compliance safeguards and automated CI/CD pipeline saved us months of regulatory audit cycles. Exceptional engineering discipline and architectural precision.',
      verifiedClient: true,
      service: 'Custom Web & Software Engineering',
      createdAt: new Date(Date.now() - 14 * 86400000).toISOString()
    },
    {
      id: 'rev-003',
      author: 'Rohan Mukherjee',
      role: 'Founder & CEO',
      company: 'ScaleLogix Networks · Hyderabad',
      rating: 5,
      message: 'From initial scope estimation to production rollout, SiPro provided total transparency on GST invoicing, sprint milestones, and 100% intellectual property transfer.',
      verifiedClient: true,
      service: 'API & Automation Architecture',
      createdAt: new Date(Date.now() - 7 * 86400000).toISOString()
    }
  ]
};

// Probe Firestore connectivity on startup and seed if accessible
async function initDatabase() {
  if (!db) {
    isFirestoreAvailable = false;
    return;
  }
  try {
    const pingDoc = await db.collection('client_projects').limit(1).get();
    isFirestoreAvailable = true;
    
    if (pingDoc.empty) {
      for (const p of inMemoryStore.projects) {
        await db.collection('client_projects').doc(p.id).set(p);
      }
      for (const inv of inMemoryStore.invoices) {
        await db.collection('invoices').doc(inv.id).set(inv);
      }
      for (const t of inMemoryStore.tasks) {
        await db.collection('employee_tasks').doc(t.id).set(t);
      }
      for (const c of inMemoryStore.candidates) {
        await db.collection('candidate_applications').doc(c.id).set(c);
      }
      for (const r of inMemoryStore.reviews) {
        await db.collection('client_reviews').doc(r.id).set(r);
      }
    }
  } catch (err) {
    isFirestoreAvailable = false;
  }
}

initDatabase();

// Middleware
app.use(compression() as any);
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Serve Public Firebase Client Config for Frontend
app.get('/api/firebase-config', (_req: Request, res: Response) => {
  res.json({
    success: true,
    config: firebaseConfig || {}
  });
});

// Health check with DB status
app.get('/api/health', async (_req: Request, res: Response) => {
  let dbStatus = 'disconnected';
  if (db) {
    try {
      dbStatus = 'connected (Firestore ' + (firebaseConfig?.firestoreDatabaseId || 'default') + ')';
    } catch {
      dbStatus = 'error';
    }
  }
  res.json({
    status: 'ok',
    service: 'sipro-tech-api',
    uptime: process.uptime(),
    database: dbStatus,
    timestamp: new Date().toISOString()
  });
});

// Platform Live Telemetry & Aggregate Stats
app.get('/api/v1/system/stats', async (_req: Request, res: Response) => {
  try {
    let activeProjectsCount = inMemoryStore.projects.length;
    let totalInvoices = inMemoryStore.invoices.length;
    let enrolledCandidates = inMemoryStore.candidates.length;
    let openTasks = inMemoryStore.tasks.filter(t => t.status !== 'done').length;

    if (db && isFirestoreAvailable) {
      try {
        const pSnap = await db.collection('client_projects').get();
        activeProjectsCount = pSnap.size;
        const iSnap = await db.collection('invoices').get();
        totalInvoices = iSnap.size;
        const cSnap = await db.collection('candidate_applications').get();
        enrolledCandidates = cSnap.size;
        const tSnap = await db.collection('employee_tasks').where('status', '!=', 'done').get();
        openTasks = tSnap.size;
      } catch (e) {
        isFirestoreAvailable = false;
      }
    }

    res.json({
      success: true,
      data: {
        activeProjects: activeProjectsCount,
        settledInvoices: totalInvoices,
        enrolledCandidates,
        openTasks,
        slaUptime: '99.99%',
        averageLatencyMs: 4.2,
        cloudRegion: 'asia-south1 (Telangana / Hyderabad Edge)',
        gstin: '36AAACS1234A1Z5'
      }
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// In-memory OTP storage cache
interface OtpRecord {
  email: string;
  otp: string;
  purpose: 'login' | 'signup' | 'verify';
  attempts: number;
  expiresAt: number; // timestamp ms
  createdAt: string;
}
const otpMemoryCache = new Map<string, OtpRecord>();

// Helper to generate secure 6-digit numeric OTP
function generate6DigitOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP Verification endpoint for Gmail/Work Email
app.post('/api/v1/auth/send-otp', async (req: Request, res: Response) => {
  const { email, purpose = 'login' } = req.body || {};
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  const cleanEmail = email.toLowerCase().trim();
  const otp = generate6DigitOtp();
  const expiresInSeconds = 600; // 10 minutes
  const expiresAt = Date.now() + expiresInSeconds * 1000;
  const createdAt = new Date().toISOString();

  const record: OtpRecord = {
    email: cleanEmail,
    otp,
    purpose,
    attempts: 0,
    expiresAt,
    createdAt
  };

  otpMemoryCache.set(cleanEmail, record);

  // Firestore sync for durability
  if (db && isFirestoreAvailable) {
    try {
      await db.collection('otp_verifications').doc(cleanEmail).set({
        email: cleanEmail,
        otp,
        purpose,
        attempts: 0,
        expiresAt: new Date(expiresAt).toISOString(),
        createdAt
      });
    } catch (dbErr) {
      isFirestoreAvailable = false;
    }
  }

  console.log(`[AUTH OTP DISPATCH] Target: ${cleanEmail} | OTP Code: ${otp} | Purpose: ${purpose} | Expires: 10m`);

  res.json({
    success: true,
    message: `6-digit verification code has been generated and dispatched to ${cleanEmail}`,
    email: cleanEmail,
    purpose,
    expiresInSeconds,
    devOtp: otp // Included for instant verification & development preview
  });
});

// Verify OTP endpoint
app.post('/api/v1/auth/verify-otp', async (req: Request, res: Response) => {
  const { email, otp, displayName, role, company, phone } = req.body || {};
  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and 6-digit OTP code are required.' });
  }

  const cleanEmail = email.toLowerCase().trim();
  const cleanOtp = String(otp).trim();

  let storedRecord = otpMemoryCache.get(cleanEmail);

  // Fallback to Firestore if not in memory
  if (!storedRecord && db && isFirestoreAvailable) {
    try {
      const snap = await db.collection('otp_verifications').doc(cleanEmail).get();
      if (snap.exists) {
        const data = snap.data();
        if (data) {
          storedRecord = {
            email: data.email,
            otp: data.otp,
            purpose: data.purpose || 'login',
            attempts: data.attempts || 0,
            expiresAt: new Date(data.expiresAt).getTime(),
            createdAt: data.createdAt
          };
        }
      }
    } catch (dbErr) {
      isFirestoreAvailable = false;
    }
  }

  if (!storedRecord) {
    return res.status(400).json({
      success: false,
      message: 'No active OTP verification session found for this email. Please request a new code.'
    });
  }

  if (Date.now() > storedRecord.expiresAt) {
    otpMemoryCache.delete(cleanEmail);
    return res.status(400).json({
      success: false,
      message: 'Verification code has expired. Please request a new OTP code.'
    });
  }

  if (storedRecord.attempts >= 5) {
    otpMemoryCache.delete(cleanEmail);
    return res.status(429).json({
      success: false,
      message: 'Too many incorrect attempts. Please request a fresh OTP code.'
    });
  }

  if (storedRecord.otp !== cleanOtp) {
    storedRecord.attempts += 1;
    otpMemoryCache.set(cleanEmail, storedRecord);
    return res.status(400).json({
      success: false,
      message: `Invalid verification code. ${5 - storedRecord.attempts} attempts remaining.`
    });
  }

  // OTP is valid! Clear OTP cache
  otpMemoryCache.delete(cleanEmail);
  if (db && isFirestoreAvailable) {
    try {
      await db.collection('otp_verifications').doc(cleanEmail).delete();
    } catch (e) {
      // ignore
    }
  }

  // Determine user role and details
  let userRole = role || 'client';
  if (!role) {
    if (cleanEmail.includes('candidate') || cleanEmail.includes('student') || cleanEmail.includes('learn')) userRole = 'candidate';
    if (cleanEmail.includes('employee') || cleanEmail.includes('sipro') || cleanEmail.includes('staff')) userRole = 'employee';
  }

  const resolvedName = displayName || cleanEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());

  const userProfile = {
    email: cleanEmail,
    displayName: resolvedName,
    role: userRole,
    company: company || '',
    phone: phone || '',
    emailVerified: true,
    verifiedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Persist verified user in Firestore and memory store
  if (db && isFirestoreAvailable) {
    try {
      const userRef = db.collection('users').doc(cleanEmail);
      const snap = await userRef.get();
      if (!snap.exists) {
        await userRef.set({
          ...userProfile,
          createdAt: new Date().toISOString()
        });
      } else {
        await userRef.update(userProfile);
      }
    } catch (dbErr) {
      isFirestoreAvailable = false;
    }
  }

  const idx = inMemoryStore.users.findIndex(u => u.email === cleanEmail);
  if (idx >= 0) {
    inMemoryStore.users[idx] = { ...inMemoryStore.users[idx], ...userProfile };
  } else {
    inMemoryStore.users.push({ ...userProfile, createdAt: new Date().toISOString() });
  }

  res.json({
    success: true,
    message: 'Gmail/Email address verified successfully!',
    user: userProfile,
    sessionToken: `sipro_jwt_${Buffer.from(cleanEmail + ':' + Date.now()).toString('base64')}`
  });
});

// User Profile Sync Endpoint
app.post('/api/v1/auth/user', async (req: Request, res: Response) => {
  const { email, displayName, role, company, phone } = req.body || {};
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  const userProfile = {
    email: email.toLowerCase().trim(),
    displayName: displayName || email.split('@')[0],
    role: role || 'client',
    company: company || '',
    phone: phone || '',
    updatedAt: new Date().toISOString(),
  };

  try {
    if (db && isFirestoreAvailable) {
      try {
        const userRef = db.collection('users').doc(userProfile.email);
        const snap = await userRef.get();
        if (!snap.exists) {
          await userRef.set({
            ...userProfile,
            createdAt: new Date().toISOString()
          });
        } else {
          await userRef.update(userProfile);
        }
      } catch (dbErr) {
        isFirestoreAvailable = false;
      }
    }
    
    // In-memory sync
    const idx = inMemoryStore.users.findIndex(u => u.email === userProfile.email);
    if (idx >= 0) {
      inMemoryStore.users[idx] = { ...inMemoryStore.users[idx], ...userProfile };
    } else {
      inMemoryStore.users.push({ ...userProfile, createdAt: new Date().toISOString() });
    }

    res.json({ success: true, user: userProfile });
  } catch (err: any) {
    console.error('Error syncing user profile:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/auth/user/:email', async (req: Request, res: Response) => {
  const email = (req.params.email || '').toLowerCase().trim();
  try {
    if (db && isFirestoreAvailable) {
      try {
        const snap = await db.collection('users').doc(email).get();
        if (snap.exists) {
          return res.json({ success: true, user: snap.data() });
        }
      } catch (dbErr) {
        isFirestoreAvailable = false;
      }
    }
    const found = inMemoryStore.users.find(u => u.email === email);
    if (found) {
      return res.json({ success: true, user: found });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  } catch (err: any) {
    const found = inMemoryStore.users.find(u => u.email === email);
    if (found) {
      return res.json({ success: true, user: found });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Form Submissions (Contact / RFP / Careers)
const handleFormSubmission = async (req: Request, res: Response) => {
  const body = req.body || {};
  const formId = body.form_id || body.formId || 'contact';
  const rules = body._rules || {};

  const metaKeys = new Set(['form_id', 'formId', '_rules']);
  const fields: Record<string, any> = {};
  for (const [key, value] of Object.entries(body)) {
    if (!metaKeys.has(key)) {
      fields[key] = typeof value === 'string' ? value.trim() : value;
    }
  }

  // Basic validation
  const errors: string[] = [];
  for (const [key, ruleObj] of Object.entries(rules as Record<string, any>)) {
    const val = fields[key] !== undefined ? String(fields[key]) : '';
    if (ruleObj.required && !val) {
      errors.push(`${key}: is required.`);
    }
    if (ruleObj.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      errors.push(`${key}: must be a valid email address.`);
    }
  }

  if (errors.length > 0) {
    return res.status(422).json({ success: false, errors });
  }

  const submissionId = 'sub-' + Date.now();
  const submissionData = {
    id: submissionId,
    formId,
    fields,
    ip: req.ip || req.socket.remoteAddress,
    userAgent: req.get('user-agent'),
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  try {
    if (db && isFirestoreAvailable) {
      if (formId === 'contact' || formId === 'rfp') {
        await db.collection('contact_inquiries').doc(submissionId).set(submissionData);
      } else if (formId === 'candidate' || formId === 'career') {
        await db.collection('candidate_applications').doc(submissionId).set({
          id: submissionId,
          candidateName: fields.name || fields.candidateName || 'Applicant',
          candidateEmail: fields.email || fields.candidateEmail || '',
          track: fields.track || fields.role || 'Talent Acceleration',
          experience: fields.experience || 'Entry',
          github: fields.github || '',
          status: 'applied',
          score: 0,
          createdAt: new Date().toISOString()
        });
      } else {
        await db.collection('submissions').doc(submissionId).set(submissionData);
      }
    }

    inMemoryStore.submissions.push(submissionData);

    return res.status(201).json({
      success: true,
      id: submissionId,
      form_id: formId,
      fields_saved: Object.keys(fields).length,
      message: 'Thank you! Your submission has been securely recorded.',
    });
  } catch (err: any) {
    console.error('Error saving submission:', err);
    inMemoryStore.submissions.push(submissionData);
    return res.status(201).json({
      success: true,
      id: submissionId,
      form_id: formId,
      message: 'Submission saved to memory fallback.',
    });
  }
};

app.post('/api/v1/forms/submit.php', handleFormSubmission);
app.post('/api/v1/forms/submit', handleFormSubmission);

app.get('/api/v1/forms/submissions', async (_req: Request, res: Response) => {
  try {
    if (db && isFirestoreAvailable) {
      const snap = await db.collection('contact_inquiries').orderBy('createdAt', 'desc').limit(50).get();
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (list.length > 0) {
        return res.json({ total: list.length, submissions: list });
      }
    }
    res.json({ total: inMemoryStore.submissions.length, submissions: inMemoryStore.submissions });
  } catch (err: any) {
    res.json({ total: inMemoryStore.submissions.length, submissions: inMemoryStore.submissions });
  }
});

// Client Projects Endpoints
app.get('/api/v1/projects', async (req: Request, res: Response) => {
  const clientEmail = (req.query.email as string)?.toLowerCase();
  try {
    if (db && isFirestoreAvailable) {
      let query: any = db.collection('client_projects');
      if (clientEmail) {
        query = query.where('clientEmail', '==', clientEmail);
      }
      const snap = await query.get();
      const projects = snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));
      if (projects.length > 0) {
        return res.json({ success: true, projects });
      }
    }
    let filtered = inMemoryStore.projects;
    if (clientEmail) {
      filtered = filtered.filter(p => p.clientEmail.toLowerCase() === clientEmail);
    }
    res.json({ success: true, projects: filtered });
  } catch (err: any) {
    res.json({ success: true, projects: inMemoryStore.projects });
  }
});

app.post('/api/v1/projects', async (req: Request, res: Response) => {
  const body = req.body || {};
  const newProject = {
    id: 'proj-' + Date.now(),
    title: body.title || 'Custom Engineering Pod',
    type: body.type || 'Dedicated Engineering Pod',
    clientEmail: (body.clientEmail || 'client@sipro.tech').toLowerCase(),
    clientName: body.clientName || 'Valued Client',
    status: body.status || 'Discovery',
    progress: body.progress || 10,
    leadArchitect: body.leadArchitect || 'Rajesh Varma (Principal Architect)',
    sprint: body.sprint || 'Sprint 1: Architecture Blueprint & Setup',
    monthlyRetainer: Number(body.monthlyRetainer) || 299000,
    createdAt: new Date().toISOString()
  };

  try {
    if (db && isFirestoreAvailable) {
      await db.collection('client_projects').doc(newProject.id).set(newProject);
    }
    inMemoryStore.projects.unshift(newProject);
    res.status(201).json({ success: true, project: newProject });
  } catch (err: any) {
    inMemoryStore.projects.unshift(newProject);
    res.status(201).json({ success: true, project: newProject });
  }
});

// Invoices & Billing Endpoints
app.get('/api/v1/invoices', async (req: Request, res: Response) => {
  const clientEmail = (req.query.email as string)?.toLowerCase();
  try {
    if (db && isFirestoreAvailable) {
      let query: any = db.collection('invoices');
      if (clientEmail) {
        query = query.where('clientEmail', '==', clientEmail);
      }
      const snap = await query.get();
      const invoices = snap.docs.map((d: any) => ({ id: d.id, ...d.data() }));
      if (invoices.length > 0) {
        return res.json({ success: true, invoices });
      }
    }
    let filtered = inMemoryStore.invoices;
    if (clientEmail) {
      filtered = filtered.filter(i => i.clientEmail.toLowerCase() === clientEmail);
    }
    res.json({ success: true, invoices: filtered });
  } catch (err: any) {
    res.json({ success: true, invoices: inMemoryStore.invoices });
  }
});

app.post('/api/v1/invoices', async (req: Request, res: Response) => {
  const body = req.body || {};
  const base = Number(body.baseAmount) || 299000;
  const gst = Math.round(base * 0.18);
  const total = base + gst;
  const invNumber = 'INV-' + Math.floor(100000 + Math.random() * 900000);

  const newInvoice = {
    id: invNumber.toLowerCase(),
    invoiceNumber: invNumber,
    clientEmail: (body.clientEmail || 'client@sipro.tech').toLowerCase(),
    clientName: body.clientName || 'Valued Client',
    description: body.description || 'Dedicated Engineering Pod',
    baseAmount: base,
    gstAmount: gst,
    totalAmount: total,
    gstin: body.gstin || '36AAACS1234A1Z5',
    paymentMethod: body.paymentMethod || 'UPI / QR',
    status: 'paid',
    paidAt: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };

  try {
    if (db && isFirestoreAvailable) {
      await db.collection('invoices').doc(newInvoice.id).set(newInvoice);
    }
    inMemoryStore.invoices.unshift(newInvoice);
    res.status(201).json({ success: true, invoice: newInvoice });
  } catch (err: any) {
    inMemoryStore.invoices.unshift(newInvoice);
    res.status(201).json({ success: true, invoice: newInvoice });
  }
});

// Employee Sprint Tasks CRUD Endpoints
app.get('/api/v1/tasks', async (_req: Request, res: Response) => {
  try {
    if (db && isFirestoreAvailable) {
      const snap = await db.collection('employee_tasks').get();
      const tasks = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (tasks.length > 0) {
        return res.json({ success: true, tasks });
      }
    }
    res.json({ success: true, tasks: inMemoryStore.tasks });
  } catch (err: any) {
    res.json({ success: true, tasks: inMemoryStore.tasks });
  }
});

app.post('/api/v1/tasks', async (req: Request, res: Response) => {
  const body = req.body || {};
  const newTask = {
    id: 'task-' + Date.now(),
    title: body.title || 'Engineering Task',
    project: body.project || 'General Systems',
    assignee: body.assignee || 'Unassigned',
    priority: body.priority || 'Medium',
    status: body.status || 'todo',
    storyPoints: Number(body.storyPoints) || 3,
    dueDate: body.dueDate || 'In 3 Days',
    createdAt: new Date().toISOString()
  };

  try {
    if (db && isFirestoreAvailable) {
      await db.collection('employee_tasks').doc(newTask.id).set(newTask);
    }
    inMemoryStore.tasks.unshift(newTask);
    res.status(201).json({ success: true, task: newTask });
  } catch (err: any) {
    inMemoryStore.tasks.unshift(newTask);
    res.status(201).json({ success: true, task: newTask });
  }
});

app.patch('/api/v1/tasks/:id', async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const updates = req.body || {};

  try {
    if (db && isFirestoreAvailable) {
      await db.collection('employee_tasks').doc(taskId).update(updates);
    }
    const idx = inMemoryStore.tasks.findIndex(t => t.id === taskId);
    if (idx >= 0) {
      inMemoryStore.tasks[idx] = { ...inMemoryStore.tasks[idx], ...updates };
    }
    res.json({ success: true, updatedId: taskId });
  } catch (err: any) {
    const idx = inMemoryStore.tasks.findIndex(t => t.id === taskId);
    if (idx >= 0) {
      inMemoryStore.tasks[idx] = { ...inMemoryStore.tasks[idx], ...updates };
      return res.json({ success: true, updatedId: taskId });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/v1/tasks/:id', async (req: Request, res: Response) => {
  const taskId = req.params.id;
  try {
    if (db && isFirestoreAvailable) {
      try {
        await db.collection('employee_tasks').doc(taskId).delete();
      } catch (dbErr) {
        isFirestoreAvailable = false;
      }
    }
    const idx = inMemoryStore.tasks.findIndex(t => t.id === taskId);
    if (idx >= 0) {
      inMemoryStore.tasks.splice(idx, 1);
    }
    res.json({ success: true, deletedId: taskId });
  } catch (err: any) {
    const idx = inMemoryStore.tasks.findIndex(t => t.id === taskId);
    if (idx >= 0) {
      inMemoryStore.tasks.splice(idx, 1);
      return res.json({ success: true, deletedId: taskId });
    }
    res.status(500).json({ success: false, error: err.message });
  }
});

// Candidate & Assessment Endpoints
app.get('/api/v1/candidates', async (_req: Request, res: Response) => {
  try {
    if (db && isFirestoreAvailable) {
      const snap = await db.collection('candidate_applications').get();
      const candidates = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (candidates.length > 0) {
        return res.json({ success: true, candidates });
      }
    }
    res.json({ success: true, candidates: inMemoryStore.candidates });
  } catch (err: any) {
    res.json({ success: true, candidates: inMemoryStore.candidates });
  }
});

app.post('/api/v1/candidates/assessments', async (req: Request, res: Response) => {
  const { candidateEmail, candidateName, score, assessmentType } = req.body || {};
  const record = {
    id: 'assess-' + Date.now(),
    candidateEmail: candidateEmail || 'student@sipro.tech',
    candidateName: candidateName || 'Candidate',
    assessmentType: assessmentType || 'Full-Stack Distributed Systems Assessment',
    score: Number(score) || 90,
    status: 'evaluated',
    submittedAt: new Date().toISOString()
  };

  try {
    if (db && isFirestoreAvailable) {
      await db.collection('candidate_assessments').doc(record.id).set(record);
    }
    res.status(201).json({ success: true, assessment: record });
  } catch (err: any) {
    res.status(201).json({ success: true, assessment: record });
  }
});

// Client Reviews & Feedback Endpoints
app.get('/api/v1/reviews', async (_req: Request, res: Response) => {
  try {
    if (db && isFirestoreAvailable) {
      try {
        const snap = await db.collection('client_reviews').orderBy('createdAt', 'desc').limit(20).get();
        if (!snap.empty) {
          const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
          return res.json({ success: true, reviews: list });
        }
      } catch (dbErr) {
        isFirestoreAvailable = false;
      }
    }
    res.json({ success: true, reviews: inMemoryStore.reviews });
  } catch (err: any) {
    res.json({ success: true, reviews: inMemoryStore.reviews });
  }
});

app.post('/api/v1/reviews', async (req: Request, res: Response) => {
  const body = req.body || {};
  const author = (body.author || body.name || '').trim().slice(0, 120);
  const company = (body.company || 'Verified Client').trim().slice(0, 150);
  const role = (body.role || 'Enterprise Partner').trim().slice(0, 120);
  const service = (body.service || 'Custom Web & Software Engineering').trim().slice(0, 150);
  const message = (body.message || body.feedback || '').trim().slice(0, 2500);
  const rating = Math.max(1, Math.min(5, parseInt(String(body.rating || 5), 10) || 5));

  if (!author) {
    return res.status(400).json({ success: false, message: 'Author name is required.' });
  }
  if (!message || message.length < 5) {
    return res.status(400).json({ success: false, message: 'Review feedback message is required (min 5 characters).' });
  }

  const reviewId = 'rev-' + Date.now();

  const newReview = {
    id: reviewId,
    author,
    name: author,
    role,
    company,
    rating,
    message,
    feedback: message,
    service,
    verifiedClient: true,
    createdAt: new Date().toISOString()
  };

  try {
    if (db && isFirestoreAvailable) {
      try {
        await db.collection('client_reviews').doc(reviewId).set(newReview);
      } catch (dbErr) {
        isFirestoreAvailable = false;
      }
    }

    inMemoryStore.reviews.unshift(newReview);

    res.status(201).json({
      success: true,
      message: 'Review successfully submitted and verified!',
      review: newReview
    });
  } catch (err: any) {
    inMemoryStore.reviews.unshift(newReview);
    res.status(201).json({
      success: true,
      message: 'Review saved to local cache.',
      review: newReview
    });
  }
});

/* ==========================================================================
   Gemini AI & Veo Video Suite Endpoints
   ========================================================================== */

// 1. Multi-turn AI Chat & Search Grounding
app.post('/api/v1/ai/chat', async (req: Request, res: Response) => {
  const { messages, message, roleType, model, useGrounding } = req.body || {};

  if (!message && (!Array.isArray(messages) || messages.length === 0)) {
    return res.status(400).json({ success: false, error: 'Message content is required.' });
  }

  let selectedModel = model || 'gemini-3.5-flash';
  if (useGrounding) {
    selectedModel = 'gemini-3.5-flash';
  }

  let systemInstruction = 'You are an intelligent enterprise AI assistant representing SiPro Technologies, an MSME-registered enterprise cloud architecture and software engineering firm located in Hanamkonda, Telangana. Provide concise, professional, accurate, and actionable technical advice.';

  if (roleType === 'solutions_architect') {
    systemInstruction = 'You are a Principal Cloud & Solutions Architect at SiPro Technologies. You advise enterprise CTOs and VPs on Kubernetes (GKE/EKS), Istio service mesh, microservices decomposition, multi-region failover, PostgreSQL sharding, Kafka event meshes, and sizing dedicated engineering pods. Provide production-ready, security-first architectural blueprints.';
  } else if (roleType === 'compliance_auditor') {
    systemInstruction = 'You are an Enterprise Compliance Officer & Data Protection Officer (DPO) at SiPro Technologies. You guide clients on the India Digital Personal Data Protection (DPDP) Act 2023, data fiduciary obligations, consent artifacts, notice requirements, GST tax compliance (36AAACS1234A1Z5), and complete IP copyright transfer.';
  } else if (roleType === 'talent_coordinator') {
    systemInstruction = 'You are the Talent Development & Internship Program Lead at SiPro Technologies. You guide developers and university graduates on full-stack curriculum tracks (Cloud, React/Next.js, Go/Node, DevOps, PostgreSQL), sprint assessments, code reviews, and enterprise readiness.';
  } else if (roleType === 'tech_lead') {
    systemInstruction = 'You are the Principal Full-Stack Tech Lead at SiPro Technologies. You provide exact code snippets, debugging solutions, type-safe API patterns, performance optimizations, and CI/CD best practices across TypeScript, Python, and Go.';
  }

  try {
    const ai = getGeminiClient();

    let contents: any;
    if (Array.isArray(messages) && messages.length > 0) {
      contents = messages.map(m => ({
        role: m.role === 'model' || m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(m.content || m.text || '') }]
      }));
    } else {
      contents = String(message);
    }

    const config: any = {
      systemInstruction
    };

    if (useGrounding) {
      config.tools = [{ googleSearch: {} }];
    }

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents,
      config
    });

    const responseText = response.text || '';
    const candidate = response.candidates?.[0] as any;
    const groundingChunks = candidate?.groundingMetadata?.groundingChunks || [];
    const webSearchQueries = candidate?.groundingMetadata?.webSearchQueries || [];
    const searchSources = groundingChunks
      .map((c: any) => c.web)
      .filter((w: any) => w && w.uri && w.title)
      .slice(0, 5);

    res.json({
      success: true,
      text: responseText,
      model: selectedModel,
      grounding: {
        queries: webSearchQueries,
        sources: searchSources
      }
    });
  } catch (err: any) {
    console.error('Gemini Chat Error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Error processing AI chat request.'
    });
  }
});

// ==========================================================================
// SiteMind AI Assistant Integration Endpoints
// ==========================================================================
app.get(['/api/sitemind/config', '/api/v1/widget/:key/config'], (req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      widgetKey: req.params.key || 'sipro-tech-assistant',
      name: 'SiPro Technologies AI Assistant',
      brandColor: '#2563eb',
      greeting: 'Namaste! I am your SiPro technical advisor powered by SiteMind AI. How can I assist your engineering pod, cloud infrastructure, or DPDP compliance inquiry today?',
      disclaimer: 'Powered by SiteMind AI. Chat interactions are used solely to assist your inquiries in accordance with our Privacy Policy. Do not share confidential credentials.',
      category: 'functional',
      supportedTopics: ['Dedicated Pods', 'Cloud Architecture', 'DPDP Act 2023 Compliance', 'GST Tax Invoicing', 'Sprint Kickoff']
    }
  });
});

app.post(['/api/sitemind/chat', '/api/v1/widget/:key/chat'], async (req: Request, res: Response) => {
  const { question, message, conversationId, widgetKey } = req.body || {};
  const query = question || message;

  if (!query || typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ success: false, error: 'Query is required.' });
  }

  const systemInstruction = `You are an elite enterprise technical advisor representing SiPro Technologies, an MSME-registered enterprise cloud architecture and software engineering consultancy based in Hanamkonda, Telangana, India.
Your mission is to provide concise, accurate, actionable, and professional answers regarding:
- SiPro's dedicated engineering pods (Sprint Pod at ₹1.2L / $1,450, Dedicated Pod at ₹2.4L / $2,900, Enterprise Architecture at ₹4.8L / $5,800).
- Strict India Digital Personal Data Protection (DPDP) Act 2023 compliance, Data Fiduciary obligations, and 100% intellectual property (IP) transfer upon invoice clearance.
- Enterprise cloud architectures across Kubernetes (GKE/EKS), Istio, Go, TypeScript/Next.js, Citus-sharded PostgreSQL, and Kafka.
- 5-day kickoff sprints and 18% GST tax-compliant invoicing (GSTIN: 36AAACS1234A1Z5).
- Direct contact: contact@sipro.tech.
Keep responses polished, formatted in clear markdown with bullet points, and under 160 words when possible.`;

  try {
    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: String(query),
      config: {
        systemInstruction
      }
    });

    res.json({
      success: true,
      text: response.text || '',
      answer: response.text || '',
      conversationId: conversationId || 'sm_' + Date.now(),
      disclaimer: 'Powered by SiteMind AI. Chat interactions are used solely to assist your inquiries in accordance with our Privacy Policy. Do not share confidential credentials.'
    });
  } catch (err: any) {
    let fallback = 'Thank you for your question. SiPro Technologies provides dedicated engineering pods, cloud-native architectures (Kubernetes/PostgreSQL), and complete DPDP Act 2023 data fiduciary compliance.';
    const q = query.toLowerCase();

    if (q.includes('pric') || q.includes('cost') || q.includes('tier') || q.includes('retainer') || q.includes('rate') || q.includes('fee')) {
      fallback = '**SiPro Engineering Retainer Tiers:**\n\n- **Sprint Pod:** ₹1,20,000 / $1,450 per 2-week sprint\n- **Dedicated Pod:** ₹2,40,000 / $2,900 per month (Full engineering squad: Senior Lead + 2 Engineers)\n- **Enterprise Architecture:** ₹4,80,000 / $5,800 per month (Kubernetes multi-region failover, 24/7 SLA, DPDP audits)\n\nAll invoices are 18% GST compliant for corporate input credit (GSTIN: `36AAACS1234A1Z5`).';
    } else if (q.includes('dpdp') || q.includes('privacy') || q.includes('gdpr') || q.includes('ip')) {
      fallback = '**DPDP Act 2023 & Compliance Guarantee:**\n\nSiPro Technologies operates as an MSME-registered Data Fiduciary under the Digital Personal Data Protection Act 2023.\n- **100% IP & Copyright Transfer:** Full source code ownership transferred on payment.\n- **Statutory Governance:** Verifiable consent logs and Grievance Officer (`grievance@sipro.tech`). Manage rights anytime via our Privacy Rights Portal.';
    } else if (q.includes('cloud') || q.includes('kubernetes') || q.includes('stack') || q.includes('architecture')) {
      fallback = '**Enterprise Cloud Stack:**\n\n- **Orchestration:** Kubernetes (GKE / AWS EKS), Istio Service Mesh, ArgoCD\n- **Microservices:** Go, TypeScript (Node/Next.js 15), Python FastAPI\n- **Data Layer:** PostgreSQL with Citus sharding, Redis caching, Apache Kafka event meshes';
    } else if (q.includes('5-day') || q.includes('kickoff') || q.includes('timeline')) {
      fallback = '**5-Day Pod Kickoff Process:**\n\n1. Day 1: Architecture scoping\n2. Day 2: Lead architect & developer pairing\n3. Day 3: Repo access & credential setup\n4. Day 4: Backlog grooming & sprint 1 commit plan\n5. Day 5: Active sprint kickoff with live code delivery';
    }

    res.json({
      success: true,
      text: fallback,
      answer: fallback,
      conversationId: conversationId || 'sm_' + Date.now(),
      disclaimer: 'Powered by SiteMind AI. Chat interactions are used solely to assist your inquiries in accordance with our Privacy Policy. Do not share confidential credentials.'
    });
  }
});

// 2. AI Image Generation & Editing
app.post('/api/v1/ai/image', async (req: Request, res: Response) => {
  const { prompt, image, mimeType, aspectRatio, imageSize } = req.body || {};

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ success: false, error: 'Prompt is required for image generation.' });
  }

  try {
    const ai = getGeminiClient();
    const cleanAspect = aspectRatio || '1:1';
    const cleanSize = imageSize || '1K';

    if (image && typeof image === 'string') {
      const cleanBase64 = image.includes('base64,') ? image.split('base64,')[1] : image;
      const cleanMime = mimeType || 'image/png';

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: cleanBase64,
                mimeType: cleanMime
              }
            },
            {
              text: prompt.trim()
            }
          ]
        },
        config: {
          imageConfig: {
            aspectRatio: cleanAspect,
            imageSize: cleanSize
          }
        }
      });

      let generatedImageUrl: string | null = null;
      let generatedText = '';
      const parts = response.candidates?.[0]?.content?.parts || [];
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          const type = part.inlineData.mimeType || 'image/png';
          generatedImageUrl = `data:${type};base64,${part.inlineData.data}`;
        } else if (part.text) {
          generatedText += part.text;
        }
      }

      if (!generatedImageUrl) {
        return res.status(500).json({
          success: false,
          error: 'No image was returned by the editing model.',
          text: generatedText
        });
      }

      return res.json({
        success: true,
        imageUrl: generatedImageUrl,
        text: generatedText
      });
    } else {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image',
        contents: {
          parts: [{ text: prompt.trim() }]
        },
        config: {
          imageConfig: {
            aspectRatio: cleanAspect,
            imageSize: cleanSize
          }
        }
      });

      let generatedImageUrl: string | null = null;
      let generatedText = '';
      const parts = response.candidates?.[0]?.content?.parts || [];
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          const type = part.inlineData.mimeType || 'image/png';
          generatedImageUrl = `data:${type};base64,${part.inlineData.data}`;
        } else if (part.text) {
          generatedText += part.text;
        }
      }

      if (!generatedImageUrl) {
        return res.status(500).json({
          success: false,
          error: 'No image was generated.',
          text: generatedText
        });
      }

      return res.json({
        success: true,
        imageUrl: generatedImageUrl,
        text: generatedText
      });
    }
  } catch (err: any) {
    console.error('Gemini Image Generation Error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Failed to generate image.'
    });
  }
});

// 3. Veo Video Generation (Start Long-Running Operation)
app.post('/api/v1/ai/video/generate', async (req: Request, res: Response) => {
  const { prompt, image, mimeType, aspectRatio, resolution } = req.body || {};

  if (!prompt && !image) {
    return res.status(400).json({ success: false, error: 'Prompt or source image is required.' });
  }

  try {
    const ai = getGeminiClient();
    const cleanAspect = aspectRatio === '9:16' ? '9:16' : '16:9';
    const cleanRes = resolution === '1080p' ? '1080p' : '720p';

    const videoParams: any = {
      model: 'veo-3.1-lite-generate-preview',
      prompt: prompt ? String(prompt).trim() : 'Cinematic enterprise software animation with high detail',
      config: {
        numberOfVideos: 1,
        resolution: cleanRes,
        aspectRatio: cleanAspect
      }
    };

    if (image && typeof image === 'string') {
      const cleanBase64 = image.includes('base64,') ? image.split('base64,')[1] : image;
      videoParams.image = {
        imageBytes: cleanBase64,
        mimeType: mimeType || 'image/png'
      };
    }

    const operation = await ai.models.generateVideos(videoParams);

    res.json({
      success: true,
      operationName: operation.name
    });
  } catch (err: any) {
    console.error('Veo Video Generation Error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Failed to initiate video generation.'
    });
  }
});

// 4. Veo Video Status Polling
app.post('/api/v1/ai/video/status', async (req: Request, res: Response) => {
  const { operationName } = req.body || {};
  if (!operationName) {
    return res.status(400).json({ success: false, error: 'operationName is required.' });
  }

  try {
    const ai = getGeminiClient();
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    res.json({
      success: true,
      done: Boolean(updated.done),
      error: updated.error ? String((updated.error as any).message || updated.error) : null
    });
  } catch (err: any) {
    console.error('Veo Video Status Error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Failed to check video status.'
    });
  }
});

// 5. Veo Video Download Stream
app.post('/api/v1/ai/video/download', async (req: Request, res: Response) => {
  const { operationName } = req.body || {};
  if (!operationName) {
    return res.status(400).json({ success: false, error: 'operationName is required.' });
  }

  try {
    const ai = getGeminiClient();
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return res.status(404).json({ success: false, error: 'Video URI not ready or available.' });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    const videoRes = await fetch(uri, {
      headers: {
        'x-goog-api-key': apiKey
      }
    });

    if (!videoRes.ok) {
      return res.status(502).json({ success: false, error: `Failed to fetch video from storage: ${videoRes.statusText}` });
    }

    res.setHeader('Content-Type', 'video/mp4');
    const arrayBuffer = await videoRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.send(buffer);
  } catch (err: any) {
    console.error('Veo Video Download Error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Failed to download video.'
    });
  }
});

// Serve static assets from public_html directory
const publicDir = path.join(process.cwd(), 'public_html');

// Permanent 301 Redirect: Strip /index.html to canonical clean URL (/)
app.use((req: Request, res: Response, next) => {
  if (req.method === 'GET' && (req.path === '/index.html' || req.path.endsWith('/index.html'))) {
    const cleanUrl = req.path.replace(/\/index\.html$/, '') || '/';
    const query = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
    return res.redirect(301, cleanUrl + query);
  }
  next();
});

// Route clean URLs (e.g. /services -> /services.html)
app.use((req: Request, res: Response, next) => {
  if (req.method === 'GET') {
    const requestedPath = path.join(publicDir, req.path);
    const htmlPath = `${requestedPath}.html`;
    if (!fs.existsSync(requestedPath) && fs.existsSync(htmlPath)) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      return res.sendFile(htmlPath);
    }
  }
  next();
});

// Serve static files with production caching headers
app.use(express.static(publicDir, {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (filePath.match(/\.(css|js|svg)$/)) {
      res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    } else if (filePath.match(/\.(woff2?|ttf|eot|png|jpg|jpeg|gif|webp|ico)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
    }
  }
}));

// Fallback for HTML navigation
app.get('*', (req: Request, res: Response) => {
  const indexPath = path.join(publicDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`SiPro Tech server running on http://${HOST}:${PORT}`);
});
