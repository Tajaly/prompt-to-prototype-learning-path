// Progressive enhancement for the guide page: step navigation, copy buttons,
// collapsible long prompts, and checkpoint progress saved in this browser only.
(() => {
  'use strict';

  const STORAGE_KEY = 'idea-to-first-github-project:checkpoints:v1';
  const doc = document;
  const $ = (selector, root = doc) => root.querySelector(selector);
  const $$ = (selector, root = doc) => Array.from(root.querySelectorAll(selector));

  const announcer = $('[data-announcer]');
  function announce(message) {
    if (!announcer) return;
    announcer.textContent = '';
    window.setTimeout(() => {
      announcer.textContent = message;
    }, 50);
  }

  /* Storage: only checkpoint ids are stored, and only in this browser. */

  const storage = (() => {
    try {
      const probe = '__guide-probe__';
      window.localStorage.setItem(probe, probe);
      window.localStorage.removeItem(probe);
      return window.localStorage;
    } catch {
      return null;
    }
  })();

  function loadDone(validIds) {
    if (!storage) return [];
    try {
      const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed.filter((id) => validIds.includes(id)) : [];
    } catch {
      return [];
    }
  }

  function saveDone(ids) {
    if (!storage) return false;
    try {
      if (ids.length) storage.setItem(STORAGE_KEY, JSON.stringify(ids));
      else storage.removeItem(STORAGE_KEY);
      return true;
    } catch {
      return false;
    }
  }

  /* Checkpoints and progress */

  const inputs = $$('[data-checkpoint]');
  const ids = inputs.map((input) => input.dataset.checkpoint);
  const done = new Set(loadDone(ids));

  const countEl = $('[data-progress-count]');
  const fillEl = $('[data-progress-fill]');
  const badgeEl = $('[data-progress-badge]');
  const continueEl = $('[data-progress-continue]');
  const resetEl = $('[data-progress-reset]');
  const hintEl = $('[data-progress-hint]');
  const storageNoteEl = $('[data-storage-note]');

  function showStorageProblem() {
    if (storageNoteEl) storageNoteEl.hidden = false;
    if (hintEl) hintEl.hidden = true;
  }

  function renderProgress() {
    const total = ids.length;
    const count = done.size;

    if (countEl) countEl.textContent = String(count);
    if (fillEl) fillEl.style.transform = `scaleX(${total ? count / total : 0})`;
    if (badgeEl) badgeEl.textContent = `${count}/${total}`;

    $$('.nav-step').forEach((item) => {
      const isDone = done.has(item.dataset.step);
      item.classList.toggle('is-done', isDone);
      const label = $('[data-done-label]', item);
      if (label) label.hidden = !isDone;
    });

    inputs.forEach((input) => {
      const section = doc.getElementById(input.dataset.checkpoint);
      if (section) section.classList.toggle('is-done', done.has(input.dataset.checkpoint));
    });

    const nextId = ids.find((id) => !done.has(id));
    if (continueEl) {
      if (count > 0 && nextId) {
        const stepNumber = nextId.replace('step-', '');
        continueEl.href = `#${nextId}`;
        continueEl.textContent = `Continue with step ${stepNumber}`;
        continueEl.hidden = false;
      } else {
        continueEl.hidden = true;
      }
    }
    if (resetEl) resetEl.hidden = count === 0;
    if (hintEl && storage) hintEl.hidden = count > 0;
  }

  inputs.forEach((input) => {
    input.checked = done.has(input.dataset.checkpoint);
    input.addEventListener('change', () => {
      if (input.checked) done.add(input.dataset.checkpoint);
      else done.delete(input.dataset.checkpoint);
      if (!saveDone(ids.filter((id) => done.has(id)))) showStorageProblem();
      renderProgress();
    });
  });

  if (resetEl) {
    resetEl.addEventListener('click', () => {
      if (!window.confirm('Clear all ticked checkpoints in this browser?')) return;
      done.clear();
      inputs.forEach((input) => {
        input.checked = false;
      });
      saveDone([]);
      renderProgress();
      announce('Progress cleared.');
    });
  }

  if (!storage) showStorageProblem();
  renderProgress();

  /* Copy buttons */

  const modifierKey = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? 'Cmd' : 'Ctrl';

  function legacyCopy(text) {
    const area = doc.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '0';
    area.style.opacity = '0';
    doc.body.appendChild(area);
    area.select();
    let ok = false;
    try {
      ok = doc.execCommand('copy');
    } catch {
      ok = false;
    }
    area.remove();
    return ok;
  }

  function selectText(element) {
    const range = doc.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  $$('[data-prompt]').forEach((figure) => {
    const button = $('[data-copy]', figure);
    const code = $('pre code', figure);
    const label = $('[data-copy-label]', figure);
    if (!button || !code || !label) return;
    button.hidden = false;
    let resetTimer;

    button.addEventListener('click', async () => {
      const text = code.textContent;
      let ok = false;
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          ok = true;
        } catch {
          ok = false;
        }
      }
      if (!ok) ok = legacyCopy(text);

      window.clearTimeout(resetTimer);
      if (ok) {
        button.classList.add('is-copied');
        label.textContent = 'Copied';
        announce('Prompt copied to the clipboard.');
      } else {
        selectText(code);
        label.textContent = `Press ${modifierKey}+C`;
        announce(`Copying was blocked. The prompt is selected; press ${modifierKey} plus C to copy it.`);
      }
      resetTimer = window.setTimeout(() => {
        button.classList.remove('is-copied');
        label.textContent = 'Copy';
      }, 2400);
    });
  });

  /* Long prompts start collapsed; copying always takes the full text. */

  $$('[data-collapsible]').forEach((figure) => {
    const toggle = $('[data-prompt-toggle]', figure);
    const body = $('.prompt-body', figure);
    const label = $('[data-toggle-label]', figure);
    if (!toggle || !body || !label) return;
    const lines = toggle.dataset.lines;

    function setExpanded(expanded) {
      body.classList.toggle('is-collapsed', !expanded);
      toggle.setAttribute('aria-expanded', String(expanded));
      label.textContent = expanded ? 'Show less' : `Show the full prompt (${lines} lines)`;
    }

    toggle.hidden = false;
    setExpanded(false);
    toggle.addEventListener('click', () => {
      const expand = toggle.getAttribute('aria-expanded') !== 'true';
      setExpanded(expand);
      if (!expand && figure.getBoundingClientRect().top < 0) {
        figure.scrollIntoView({ block: 'start' });
      }
    });
  });

  /* Step list: mobile sheet */

  const toggleButton = $('[data-nav-toggle]');
  const sidebar = doc.getElementById('sidebar');
  const main = doc.getElementById('main');
  const narrow = window.matchMedia('(max-width: 63.99rem)');
  let navOpen = false;

  function setNavOpen(open) {
    navOpen = open;
    if (!toggleButton || !sidebar) return;
    toggleButton.setAttribute('aria-expanded', String(open));
    sidebar.classList.toggle('is-open', open);
    doc.body.classList.toggle('nav-open', open);
    if (main) main.inert = open;
  }

  if (toggleButton && sidebar) {
    toggleButton.hidden = false;
    toggleButton.addEventListener('click', () => setNavOpen(!navOpen));
    sidebar.addEventListener('click', (event) => {
      if (narrow.matches && event.target.closest('a')) setNavOpen(false);
    });
    doc.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navOpen) {
        setNavOpen(false);
        toggleButton.focus();
      }
    });
    narrow.addEventListener('change', () => {
      if (!narrow.matches) setNavOpen(false);
    });
  }

  /* Step list: highlight the section being read */

  const sectionItems = new Map();
  $$('.nav > .nav-item').forEach((item) => {
    const link = $(':scope > .nav-link', item);
    if (link) sectionItems.set(link.getAttribute('href').slice(1), { item, link });
  });
  const subLinks = new Map($$('.nav-sublink').map((link) => [link.getAttribute('href').slice(1), link]));
  const sections = Array.from(sectionItems.keys())
    .map((id) => doc.getElementById(id))
    .filter(Boolean);

  let activeSection = null;
  let activeLink = null;
  let ticking = false;

  function updateActive() {
    ticking = false;
    const threshold = window.innerHeight * 0.3;
    const atBottom = window.innerHeight + window.scrollY >= doc.documentElement.scrollHeight - 4;

    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    }
    if (atBottom) current = sections[sections.length - 1];

    let currentSub = null;
    if (current) {
      for (const heading of $$('h3[id]', current)) {
        if (subLinks.has(heading.id) && heading.getBoundingClientRect().top <= threshold) currentSub = heading.id;
      }
    }

    if (current && current.id !== activeSection) {
      if (activeSection && sectionItems.has(activeSection)) {
        sectionItems.get(activeSection).item.classList.remove('is-active');
      }
      activeSection = current.id;
      sectionItems.get(activeSection).item.classList.add('is-active');
    }

    const nextLink = currentSub ? subLinks.get(currentSub) : current && sectionItems.get(current.id).link;
    if (nextLink !== activeLink) {
      if (activeLink) activeLink.removeAttribute('aria-current');
      activeLink = nextLink;
      if (activeLink) activeLink.setAttribute('aria-current', 'location');
    }
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateActive);
    }
  }

  if (sections.length) {
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateActive();
  }
})();
