document.addEventListener('DOMContentLoaded', () => {
  // 1. Mentimeter Signature Interactive Poll
  const pollOptions = document.querySelectorAll('.poll-option');
  const voterCountEl = document.getElementById('live-voter-count');
  const pollToast = document.getElementById('poll-toast');
  let userVoted = false;

  pollOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const currentVotes = parseInt(opt.getAttribute('data-votes') || '0', 10);
      
      if (!userVoted) {
        opt.setAttribute('data-votes', String(currentVotes + 1));
        userVoted = true;
        if (voterCountEl) {
          const currentTotal = parseInt(voterCountEl.textContent?.replace(/,/g, '') || '1482', 10);
          voterCountEl.textContent = (currentTotal + 1).toLocaleString();
        }
      }

      // Recalculate percentages
      let total = 0;
      pollOptions.forEach(o => {
        total += parseInt(o.getAttribute('data-votes') || '0', 10);
      });

      pollOptions.forEach(o => {
        const v = parseInt(o.getAttribute('data-votes') || '0', 10);
        const pct = total > 0 ? Math.round((v / total) * 100) : 0;
        const bar = o.querySelector('.poll-bar');
        const pctLabel = o.querySelector('.poll-pct');
        const check = o.querySelector('.poll-check');

        if (bar) (bar as HTMLElement).style.width = pct + '%';
        if (pctLabel) pctLabel.textContent = pct + '%';

        if (o === opt) {
          o.classList.add('border-brand-accent');
          if (check) check.classList.remove('hidden');
        } else {
          o.classList.remove('border-brand-accent');
          if (check) check.classList.add('hidden');
        }
      });

      if (pollToast) {
        pollToast.textContent = '✓ Live vote recorded! Stakeholder consensus updated.';
        pollToast.classList.add('bg-brand-100', 'text-brand-900');
      }
    });
  });

  // 2. Interactive Reactions
  const reactionBtns = document.querySelectorAll('.reaction-btn');
  reactionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const countSpan = btn.querySelector('.reaction-count');
      if (countSpan) {
        let current = parseInt(btn.getAttribute('data-count') || '0', 10);
        current += 1;
        btn.setAttribute('data-count', String(current));
        countSpan.textContent = String(current);
        btn.classList.add('border-brand-accent');
      }
    });
  });

  // 3. Capability Tabs
  const tabs = document.querySelectorAll('.cap-tab');
  const panes = document.querySelectorAll('.cap-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      
      tabs.forEach(t => {
        t.classList.remove('active');
      });

      tab.classList.add('active');

      panes.forEach(p => {
        if (p.id === `pane-${target}`) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });

  // 4. Interactive Scope & Retainer Calculator
  let activeTrackMult = 1.2;
  const trackBtns = document.querySelectorAll('.calc-track');
  const cadenceBtns = document.querySelectorAll('.calc-cadence');
  const slider = document.getElementById('calc-engineers-slider') as HTMLInputElement | null;
  const engLabel = document.getElementById('calc-engineers-label');
  const priceDisplay = document.getElementById('calc-price-display');
  const velocityDisplay = document.getElementById('calc-velocity');

  function updateCalculator() {
    const engCount = slider ? parseInt(slider.value, 10) : 4;
    if (engLabel) {
      engLabel.textContent = `${engCount} Engineers (${engCount <= 2 ? 'Starter Pod' : engCount <= 5 ? 'Balanced Squad' : 'Enterprise Pod'})`;
    }

    const baseMonthlyPerEng = 60000;
    const totalINR = Math.round(engCount * baseMonthlyPerEng * activeTrackMult);
    
    if (priceDisplay) {
      priceDisplay.innerHTML = `₹${totalINR.toLocaleString('en-IN')}<span class="text-sm font-medium opacity-70"> / month</span>`;
    }

    if (velocityDisplay) {
      const points = engCount * 10;
      velocityDisplay.textContent = `~${points} Story Points / sprint`;
    }
  }

  trackBtns.forEach(b => {
    b.addEventListener('click', () => {
      trackBtns.forEach(t => {
        t.classList.remove('border-brand-accent');
      });
      b.classList.add('border-brand-accent');
      activeTrackMult = parseFloat(b.getAttribute('data-mult') || '1.0');
      updateCalculator();
    });
  });

  cadenceBtns.forEach(c => {
    c.addEventListener('click', () => {
      cadenceBtns.forEach(t => {
        t.classList.remove('border-brand-accent');
      });
      c.classList.add('border-brand-accent');
    });
  });

  if (slider) {
    slider.addEventListener('input', updateCalculator);
  }
  updateCalculator();

  // 5. FAQ Accordion
  const faqBtns = document.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        if (icon) {
          icon.textContent = isHidden ? '−' : '+';
        }
      }
    });
  });
});
