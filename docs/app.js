// Progressive enhancement for the guide page: step navigation, copy buttons,
// collapsible prompts, language, German address, theme, and locally saved progress.
(() => {
  'use strict';

  const STORAGE_KEY = 'idea-to-first-github-project:checkpoints:v1';
  const THEME_KEY = 'idea-to-first-github-project:theme:v1';
  const LANGUAGE_KEY = 'idea-to-first-github-project:language:v1';
  const ADDRESS_KEY = 'idea-to-first-github-project:german-address:v1';
  const THEMES = { light: '#ffffff', dark: '#101317', pixel: '#eaf6ff' };
  const doc = document;
  const root = doc.documentElement;
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

  /* Storage stays local; changing preferences never clears checkpoints. */

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

  const englishMessages = {
    themeLegend: 'Color theme',
    lightChoice: 'Light',
    darkChoice: 'Dark',
    pixelChoice: 'Pixel',
    lightEnabled: 'Light mode on.',
    darkEnabled: 'Dark mode on.',
    pixelEnabled: 'Pixel theme on.',
    languageChanged: 'The guide is now in English.',
    addressChanged: 'Form of address changed.',
    preferencesProblem: 'This browser cannot save your theme, language, or form of address. Your choices work for this visit, but may reset when you reload.',
    translationProblem: 'The German translation could not be loaded. Reload the page to try again.',
    progressTotal: ' of {total} checkpoints done',
    continueStep: 'Continue with step {step}',
    resetProgress: 'Reset progress',
    resetConfirm: 'Clear all ticked checkpoints in this browser?',
    progressCleared: 'Progress cleared.',
    copyPrompt: 'Copy prompt: {title}',
    copy: 'Copy',
    copied: 'Copied',
    promptCopied: 'Prompt copied to the clipboard.',
    manualCopy: 'Press {key}+C',
    copyBlocked: 'Copying was blocked. The prompt is selected; press {key} plus C to copy it.',
    showLess: 'Show less',
    showFull: 'Show the full prompt ({lines} lines)',
  };
  const german = window.guideGerman;
  let language = 'en';
  let germanAddress = 'du';
  let preferencesProblem = !storage || root.dataset.preferencesUnavailable === 'true';
  let translationProblem = false;
  const preferencesNote = $('[data-preferences-note]');

  function t(key, values = {}) {
    const message = language === 'de' ? german[germanAddress].messages[key] : englishMessages[key];
    return message.replace(/\{(\w+)\}/g, (match, name) => String(values[name] ?? match));
  }

  function renderPreferenceNotice() {
    if (!preferencesNote) return;
    preferencesNote.textContent = [
      preferencesProblem && t('preferencesProblem'),
      translationProblem && t('translationProblem'),
    ].filter(Boolean).join(' ');
    preferencesNote.hidden = !preferencesProblem && !translationProblem;
  }

  function showPreferenceProblem() {
    preferencesProblem = true;
    renderPreferenceNotice();
    announce(t('preferencesProblem'));
  }

  function loadPreference(key, allowed, fallback) {
    if (!storage) return fallback;
    try {
      const value = storage.getItem(key);
      if (value === null) return fallback;
      if (allowed.includes(value)) return value;
      console.warn(`Ignoring an invalid saved guide preference: ${key}`);
    } catch {
      showPreferenceProblem();
    }
    return fallback;
  }

  function savePreference(key, value) {
    try {
      if (!storage) {
        showPreferenceProblem();
        return;
      }
      storage.setItem(key, value);
    } catch {
      showPreferenceProblem();
    }
  }

  const localizedContent = $$('[data-i18n]').map((element) => ({
    element,
    key: element.dataset.i18n,
    english: element.innerHTML,
  }));
  const localizedAttributes = ['aria-label', 'alt', 'content'].flatMap((attribute) =>
    $$(`[data-i18n-${attribute}]`).map((element) => ({
      element,
      attribute,
      key: element.getAttribute(`data-i18n-${attribute}`),
      english: element.getAttribute(attribute),
    })));
  function hasGermanTranslation(address) {
    const catalog = german?.[address];
    return catalog
      && [...localizedContent, ...localizedAttributes].every(({ key }) => typeof catalog.content?.[key] === 'string')
      && Object.keys(englishMessages).every((key) => typeof catalog.messages?.[key] === 'string');
  }

  function applyLanguage(nextLanguage, nextAddress = germanAddress) {
    if (nextLanguage === 'de' && !hasGermanTranslation(nextAddress)) {
      translationProblem = true;
      console.error('The guide German translation is missing or incomplete.');
      renderPreferenceNotice();
      announce(t('translationProblem'));
      return false;
    }
    language = nextLanguage;
    germanAddress = nextAddress;
    translationProblem = false;
    const catalog = german?.[germanAddress];
    localizedContent.forEach(({ element, key, english }) => {
      // Only bundled, author-owned markup is used here, never input or remote HTML.
      element.innerHTML = language === 'de' ? catalog.content[key] : english;
    });
    localizedAttributes.forEach(({ element, attribute, key, english }) => {
      element.setAttribute(attribute, language === 'de' ? catalog.content[key] : english);
    });
    root.lang = language;
    return true;
  }

  germanAddress = loadPreference(ADDRESS_KEY, ['du', 'sie'], 'du');
  applyLanguage(loadPreference(LANGUAGE_KEY, ['en', 'de'], 'en'));

  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  let themePreference = loadPreference(THEME_KEY, Object.keys(THEMES), null);
  const themeOptions = $('[data-theme-options]');
  const themeLegend = $('[data-theme-legend]');
  const themeChoices = $$('[data-theme-choice]');
  const languageToggle = $('[data-language-toggle]');
  const addressOptions = $('[data-address-options]');
  const addressChoices = $$('[data-address-choice]');

  function renderTheme() {
    const theme = themePreference || (systemDark.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    if (themeLegend) themeLegend.textContent = t('themeLegend');
    themeChoices.forEach((choice) => {
      choice.checked = choice.value === theme;
      const label = $('[data-theme-label]', choice.closest('label'));
      if (label) label.textContent = t(`${choice.value}Choice`);
    });
    $$('meta[name="theme-color"]').forEach((meta) => {
      meta.content = THEMES[theme];
    });
  }

  if (themeOptions) themeOptions.hidden = false;
  themeChoices.forEach((choice) => {
    choice.addEventListener('change', () => {
      if (!choice.checked) return;
      keepReadingPosition(() => {
        themePreference = choice.value;
        renderTheme();
      });
      announce(t(`${themePreference}Enabled`));
      savePreference(THEME_KEY, themePreference);
    });
  });
  systemDark.addEventListener('change', () => {
    if (!themePreference) renderTheme();
  });
  renderTheme();

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
  const totalEl = $('[data-progress-total]');
  const fillEl = $('[data-progress-fill]');
  const badgeEl = $('[data-progress-badge]');
  const continueEl = $('[data-progress-continue]');
  const resetEl = $('[data-progress-reset]');
  const hintEl = $('[data-progress-hint]');
  const storageNoteEl = $('[data-storage-note]');
  let progressStorageProblem = false;

  function showStorageProblem() {
    progressStorageProblem = true;
    if (storageNoteEl) storageNoteEl.hidden = false;
    if (hintEl) hintEl.hidden = true;
  }

  function renderProgress() {
    const total = ids.length;
    const count = done.size;

    if (countEl) countEl.textContent = String(count);
    if (totalEl) totalEl.textContent = t('progressTotal', { total });
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
        continueEl.textContent = t('continueStep', { step: stepNumber });
        continueEl.hidden = false;
      } else {
        continueEl.hidden = true;
      }
    }
    if (resetEl) {
      resetEl.hidden = count === 0;
      resetEl.textContent = t('resetProgress');
    }
    if (hintEl) hintEl.hidden = progressStorageProblem || count > 0;
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
      if (!window.confirm(t('resetConfirm'))) return;
      done.clear();
      inputs.forEach((input) => {
        input.checked = false;
      });
      if (!saveDone([])) showStorageProblem();
      renderProgress();
      announce(t('progressCleared'));
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
        label.textContent = t('copied');
        announce(t('promptCopied'));
      } else {
        selectText(code);
        label.textContent = t('manualCopy', { key: modifierKey });
        announce(t('copyBlocked', { key: modifierKey }));
      }
      resetTimer = window.setTimeout(() => {
        button.classList.remove('is-copied');
        label.textContent = t('copy');
      }, 2400);
    });
  });

  /* Long prompts start collapsed; copying always takes the full text. */

  function renderPromptToggle(figure) {
    const toggle = $('[data-prompt-toggle]', figure);
    const label = $('[data-toggle-label]', figure);
    const code = $('pre code', figure);
    if (!toggle || !label || !code) return;
    label.textContent = toggle.getAttribute('aria-expanded') === 'true'
      ? t('showLess')
      : t('showFull', { lines: code.textContent.split('\n').length });
  }

  $$('[data-collapsible]').forEach((figure) => {
    const toggle = $('[data-prompt-toggle]', figure);
    const body = $('.prompt-body', figure);
    const label = $('[data-toggle-label]', figure);
    if (!toggle || !body || !label) return;
    function setExpanded(expanded) {
      body.classList.toggle('is-collapsed', !expanded);
      toggle.setAttribute('aria-expanded', String(expanded));
      renderPromptToggle(figure);
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

  function keepReadingPosition(update) {
    const topbarBottom = $('.topbar').getBoundingClientRect().bottom;
    const anchor = $$('[data-spy]').filter((element) => element.getBoundingClientRect().top <= topbarBottom + 24).pop();
    const anchorId = anchor?.id;
    const anchorTop = anchor?.getBoundingClientRect().top;
    if (update() === false) return false;
    if (anchorId) {
      const newAnchor = doc.getElementById(anchorId);
      if (newAnchor) window.scrollBy({ top: newAnchor.getBoundingClientRect().top - anchorTop, behavior: 'instant' });
    }
    requestUpdate();
    return true;
  }

  function renderLanguageControls() {
    if (languageToggle) {
      const isEnglish = language === 'en';
      languageToggle.textContent = isEnglish ? 'Deutsch' : 'English';
      languageToggle.lang = isEnglish ? 'de' : 'en';
      const label = isEnglish ? 'Auf Deutsch lesen' : 'Read in English';
      languageToggle.setAttribute('aria-label', label);
      languageToggle.title = label;
    }
    if (addressOptions) addressOptions.hidden = language !== 'de';
    addressChoices.forEach((choice) => {
      choice.checked = choice.value === germanAddress;
    });
    $$('[data-prompt]').forEach((figure) => {
      const button = $('[data-copy]', figure);
      const label = $('[data-copy-label]', figure);
      const title = $('.prompt-title', figure);
      if (button && title) {
        button.setAttribute('aria-label', t('copyPrompt', { title: title.textContent }));
        button.classList.remove('is-copied');
      }
      if (label) label.textContent = t('copy');
      renderPromptToggle(figure);
    });
    renderProgress();
    renderTheme();
    renderPreferenceNotice();
  }

  if (languageToggle) {
    languageToggle.hidden = false;
    languageToggle.addEventListener('click', () => {
      if (!keepReadingPosition(() => {
        if (!applyLanguage(language === 'en' ? 'de' : 'en')) return false;
        renderLanguageControls();
      })) return;
      announce(t('languageChanged'));
      savePreference(LANGUAGE_KEY, language);
    });
  }
  addressChoices.forEach((choice) => {
    choice.addEventListener('change', () => {
      if (language !== 'de' || !choice.checked || choice.value === germanAddress) return;
      if (!keepReadingPosition(() => {
        if (!applyLanguage(language, choice.value)) return false;
        renderLanguageControls();
      })) {
        renderLanguageControls();
        return;
      }
      announce(t('addressChanged'));
      savePreference(ADDRESS_KEY, germanAddress);
    });
  });
  renderLanguageControls();

  if (sections.length) {
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateActive();
  }
})();
