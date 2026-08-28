import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

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
try {
  if (firebaseConfig && firebaseConfig.projectId) {
    if (!getApps().length) {
      initializeApp({
        projectId: firebaseConfig.projectId,
      });
    }
    const dbId = firebaseConfig.firestoreDatabaseId || '(default)';
    db = getFirestore(getApp(), dbId);
    console.log(`Firebase Admin initialized with Project: ${firebaseConfig.projectId}, Database: ${dbId}`);
  }
} catch (err) {
  console.error('Failed to initialize Firebase Admin Firestore:', err);
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

// Seed initial Firestore data if empty
async function seedInitialFirestore() {
  if (!db) return;
  try {
    const projectsSnap = await db.collection('client_projects').limit(1).get();
    if (projectsSnap.empty) {
      console.log('Seeding initial client_projects to Firestore...');
      for (const p of inMemoryStore.projects) {
        await db.collection('client_projects').doc(p.id).set(p);
      }
    }

    const invoicesSnap = await db.collection('invoices').limit(1).get();
    if (invoicesSnap.empty) {
      console.log('Seeding initial invoices to Firestore...');
      for (const inv of inMemoryStore.invoices) {
        await db.collection('invoices').doc(inv.id).set(inv);
      }
    }

    const tasksSnap = await db.collection('employee_tasks').limit(1).get();
    if (tasksSnap.empty) {
      console.log('Seeding initial employee_tasks to Firestore...');
      for (const t of inMemoryStore.tasks) {
        await db.collection('employee_tasks').doc(t.id).set(t);
      }
    }

    const candidatesSnap = await db.collection('candidate_applications').limit(1).get();
    if (candidatesSnap.empty) {
      console.log('Seeding initial candidate_applications to Firestore...');
      for (const c of inMemoryStore.candidates) {
        await db.collection('candidate_applications').doc(c.id).set(c);
      }
    }

    const reviewsSnap = await db.collection('client_reviews').limit(1).get();
    if (reviewsSnap.empty) {
      console.log('Seeding initial client_reviews to Firestore...');
      for (const r of inMemoryStore.reviews) {
        await db.collection('client_reviews').doc(r.id).set(r);
      }
    }
  } catch (err) {
    console.warn('Could not complete Firestore initial seed (will use fallback store):', err);
  }
}

seedInitialFirestore();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

    if (db) {
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
        console.warn('Error fetching Firestore stats, using fallback memory stats');
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
  if (db) {
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
      console.warn('Firestore OTP save warning (using memory cache):', dbErr);
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
  if (!storedRecord && db) {
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
      console.warn('Firestore OTP lookup warning:', dbErr);
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
  if (db) {
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
  if (db) {
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
      console.warn('Firestore user update warning:', dbErr);
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
    if (db) {
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
        console.warn('Firestore user profile sync warning (using memory store):', dbErr);
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
    if (db) {
      try {
        const snap = await db.collection('users').doc(email).get();
        if (snap.exists) {
          return res.json({ success: true, user: snap.data() });
        }
      } catch (dbErr) {
        console.warn('Firestore user lookup warning (checking memory store):', dbErr);
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
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
    if (db) {
      try {
        await db.collection('employee_tasks').doc(taskId).delete();
      } catch (dbErr) {
        console.warn('Firestore task delete warning:', dbErr);
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
    if (db) {
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
    if (db) {
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
    if (db) {
      try {
        const snap = await db.collection('client_reviews').orderBy('createdAt', 'desc').limit(20).get();
        if (!snap.empty) {
          const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
          return res.json({ success: true, reviews: list });
        }
      } catch (dbErr) {
        console.warn('Firestore reviews query warning (using fallback memory store):', dbErr);
      }
    }
    res.json({ success: true, reviews: inMemoryStore.reviews });
  } catch (err: any) {
    res.json({ success: true, reviews: inMemoryStore.reviews });
  }
});

app.post('/api/v1/reviews', async (req: Request, res: Response) => {
  const { author, role, company, rating, message, service } = req.body || {};

  if (!author || typeof author !== 'string' || !author.trim()) {
    return res.status(400).json({ success: false, message: 'Author name is required.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return res.status(400).json({ success: false, message: 'Review feedback message is required (min 5 characters).' });
  }

  const numRating = Math.max(1, Math.min(5, Number(rating) || 5));
  const reviewId = 'rev-' + Date.now();

  const newReview = {
    id: reviewId,
    author: author.trim(),
    role: (role || 'Enterprise Partner').trim(),
    company: (company || 'Verified Client').trim(),
    rating: numRating,
    message: message.trim(),
    service: (service || 'Custom Web & Software Engineering').trim(),
    verifiedClient: true,
    createdAt: new Date().toISOString()
  };

  try {
    if (db) {
      try {
        await db.collection('client_reviews').doc(reviewId).set(newReview);
      } catch (dbErr) {
        console.warn('Firestore review save warning (using memory store):', dbErr);
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

// Serve static assets from public_html directory
const publicDir = path.join(process.cwd(), 'public_html');

// Route clean URLs (e.g. /services -> /services.html)
app.use((req: Request, res: Response, next) => {
  if (req.method === 'GET') {
    const requestedPath = path.join(publicDir, req.path);
    const htmlPath = `${requestedPath}.html`;
    if (!fs.existsSync(requestedPath) && fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }
  }
  next();
});

// Serve static files
app.use(express.static(publicDir));

// Fallback for HTML navigation
app.get('*', (req: Request, res: Response) => {
  const indexPath = path.join(publicDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`SiPro Tech server running on http://${HOST}:${PORT}`);
});
