/**
 * 2026 Project Showcase Engine
 * Filter Tabs & Architecture Deep-Dive Modal
 */

const PROJECTS_DATA = {
  'rckeyboard': {
    title: 'RCKeyBoard — Custom Android Keyboard',
    subtitle: 'High-Performance Android Input Method Engine (IME) built with Kotlin & SQLite',
    image: 'assets/images/rckeyboard.webp',
    playstore: 'https://play.google.com/store/apps/details?id=rc.keyboard',
    github: 'https://github.com/OmarShawkey13',
    tech: ['Kotlin', 'Android IME', 'SQLite', 'InputConnection API', 'Material 3', 'Clean Architecture'],
    features: [
      'Engineered privacy-first local word prediction engine using indexed on-device SQLite database with zero cloud telemetry.',
      'Built real-time dynamic math equation solver directly into the input stream for inline instant calculations.',
      'Implemented sensitive password field detection to automatically disable auto-correct, learning, and clipboard history.',
      'Integrated customizable secure clipboard manager with temporary item pinning and data sanitation.',
      'Engineered dynamic theme engine allowing real-time keyboard theme customizations and tactile vibration feedback.'
    ]
  },
  'piko': {
    title: 'Piko — Real-Time Chat App',
    subtitle: 'High-Concurrency Reactive Chat Architecture built with Flutter & Firebase',
    image: 'assets/images/piko.webp',
    playstore: '',
    github: 'https://github.com/OmarShawkey13/piko',
    tech: ['Flutter', 'Dart', 'Firebase Firestore', 'Bloc / Cubit', 'FCM Notifications', 'Clean Architecture'],
    features: [
      'Architected reactive chat state management using Clean Architecture and Bloc/Cubit reactive streams.',
      'Real-time online presence tracking, typing indicators, read receipts, and instantaneous message delivery.',
      'FCM Push Notifications integrated with deep-linking directly into active private and group chat rooms.',
      'Optimized local cache syncing to reduce Firestore read operations by over 60% and support offline message drafts.'
    ]
  },
  'checkmate-elite': {
    title: 'Checkmate Elite — Chess App',
    subtitle: 'High-Performance Chess Game Engine & Clean Architecture Application',
    image: 'assets/images/checkmate-elite.webp',
    playstore: '',
    github: 'https://github.com/OmarShawkey13/Checkmate-Elite',
    tech: ['Flutter', 'Dart', 'Bloc Pattern', 'Clean Architecture', 'Custom Painters', 'Game State Engine'],
    features: [
      'Complete Clean Architecture separation between chess rules validation, game-state engine, and presentation UI.',
      'Advanced move history replay, undo/redo buffers, customizable time controls, and interactive board flip.',
      'Custom painter rendering for board cells, highlights, move vectors, and fluid piece drag-and-drop animations.',
      'Engineered for rock-solid 60fps performance across iOS and Android devices.'
    ]
  },
  'ripple': {
    title: 'Ripple — Social Media App',
    subtitle: 'Feature-Rich Social Network with Feed Streams & Scalable Feature Architecture',
    image: 'assets/images/ripple.webp',
    playstore: '',
    github: 'https://github.com/OmarShawkey13/ripple',
    tech: ['Flutter', 'Dart', 'Firebase', 'Bloc Pattern', 'Clean Architecture', 'Cloud Storage'],
    features: [
      'Clean Architecture multi-layer codebase with repository pattern and dependency injection.',
      'Dynamic feed pagination, nested comment threads, instant like reactions, and user follow graph.',
      'Optimized image caching and lazy thumbnail rendering for smooth endless scrolling.',
      'Firebase Authentication with multi-provider login and role-based security rules.'
    ]
  },
  'wallix': {
    title: 'Wallix — Wallpaper App',
    subtitle: 'Curated Wallpaper Discovery Engine with Built-in Photo Editor',
    image: 'assets/images/wallix.webp',
    playstore: '',
    github: 'https://github.com/OmarShawkey13/wallix',
    tech: ['Flutter', 'Dart', 'Dio REST Client', 'Dartz (FP)', 'Bloc', 'Clean Architecture', 'Image Processing'],
    features: [
      'Robust Clean Architecture with Dio HTTP client, Bloc state management, and Dartz functional error handling.',
      'GitHub-powered headless CMS catalog allowing instant wallpaper updates with zero server hosting costs.',
      'Integrated on-device photo editor supporting crop, rotate, blur, and color adjustment filters before applying.',
      'Two-tier caching strategy (Memory + Disk) ensuring instantaneous image reloading and offline browsing.'
    ]
  },
  'pulse': {
    title: 'Pulse — Music Player',
    subtitle: 'Offline Audio Playback Engine with System-Level Media Integration',
    image: 'assets/images/pulse.webp',
    playstore: '',
    github: 'https://github.com/OmarShawkey13/pulse',
    tech: ['Flutter', 'Dart', 'audio_service', 'just_audio', 'Bloc', 'Reactive Streams', 'System Media Controls'],
    features: [
      'Background audio playback service engineered with audio_service and native platform channels.',
      'System-level media integration: lock screen playback widget, headphone buttons, and Android audio focus handling.',
      'Reactive audio stream synchronization with custom waveform scrubber and zero playback jank.',
      'Automatic ID3 audio tag parsing and offline playlist organizer.'
    ]
  },
  'vibe': {
    title: 'Vibe — Video Social Media App',
    subtitle: 'Short-Form Video Streaming & Social Interaction Platform',
    image: 'assets/images/vibe.webp',
    playstore: '',
    github: 'https://github.com/OmarShawkey13/vibe',
    tech: ['Flutter', 'Dart', 'Video Player', 'Firebase', 'Bloc', 'Clean Architecture', 'Pre-Caching'],
    features: [
      'Ultra-smooth vertical video feed with intelligent video pre-caching and playback recycling.',
      'Real-time interactive comments overlay, double-tap like burst animations, and user video profiles.',
      'Scalable feature-driven architecture using BLoC and Firebase Cloud Storage.',
      'Optimized network payload handling for smooth streaming on mobile networks.'
    ]
  }
};

function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const filterBar = document.querySelector('.projects-filter-bar');
  const results = document.getElementById('project-results');

  if (!filterBtns.length || !projectCards.length || !filterBar) return;

  function activateFilter(button) {
    const filter = button.dataset.filter || 'all';
    filterBtns.forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    if (results) results.setAttribute('aria-labelledby', button.id);
    projectCards.forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }

  filterBtns.forEach(button => {
    button.addEventListener('click', () => activateFilter(button));
  });

  filterBar.addEventListener('keydown', event => {
    const currentIndex = Array.prototype.indexOf.call(filterBtns, document.activeElement);
    if (currentIndex < 0) return;
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % filterBtns.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + filterBtns.length) % filterBtns.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = filterBtns.length - 1;
    else return;

    event.preventDefault();
    const nextTab = filterBtns[nextIndex];
    activateFilter(nextTab);
    nextTab.focus();
  });
}

function initProjectModal() {
  const modalBackdrop = document.querySelector('.project-modal-backdrop');
  if (!modalBackdrop) return;

  const closeBtn = modalBackdrop.querySelector('.modal-close-btn');
  const modalTitle = modalBackdrop.querySelector('.modal-title');
  const modalSubtitle = modalBackdrop.querySelector('.modal-subtitle');
  const modalImage = modalBackdrop.querySelector('.modal-header-image');
  const modalFeatures = modalBackdrop.querySelector('.modal-feature-list');
  const modalTechStack = modalBackdrop.querySelector('.modal-tech-stack');
  const modalActions = modalBackdrop.querySelector('.modal-actions-bar');
  const backgroundContent = document.querySelectorAll('.navbar-wrapper, main, .footer, .theme-fab');
  let previousFocus = null;
  let previousBodyOverflow = '';

  function openModal(projectId, trigger) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    previousFocus = trigger || document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalImage.src = data.image;
    modalImage.alt = data.title;

    modalTechStack.replaceChildren(...data.tech.map(technology => {
      const chip = document.createElement('span');
      chip.className = 'tech-chip';
      chip.textContent = technology;
      return chip;
    }));

    modalFeatures.replaceChildren(...data.features.map(feature => {
      const item = document.createElement('li');
      const bullet = document.createElement('span');
      const text = document.createElement('span');
      item.className = 'modal-feature-item';
      bullet.className = 'modal-feature-bullet';
      bullet.setAttribute('aria-hidden', 'true');
      bullet.textContent = '▸';
      text.textContent = feature;
      item.append(bullet, text);
      return item;
    }));

    const actionLinks = [];
    if (data.playstore) actionLinks.push(createActionLink(data.playstore, 'Get on Google Play', 'btn btn-primary'));
    if (data.github) actionLinks.push(createActionLink(data.github, 'View Source Code', 'btn btn-outline'));
    modalActions.replaceChildren(...actionLinks);

    modalBackdrop.hidden = false;
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    backgroundContent.forEach(element => { element.inert = true; });
    requestAnimationFrame(() => {
      if (modalBackdrop.hidden) return;
      modalBackdrop.classList.add('active');
      closeBtn.focus();
    });
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    modalBackdrop.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
    backgroundContent.forEach(element => { element.inert = false; });
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  function createActionLink(href, label, className) {
    const link = document.createElement('a');
    link.className = className;
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = label;
    return link;
  }

  document.querySelectorAll('[data-open-modal]').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      openModal(button.dataset.openModal, button);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', event => {
    if (event.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', event => {
    if (!modalBackdrop.classList.contains('active')) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = modalBackdrop.querySelectorAll('a[href], button:not([disabled])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) {
      event.preventDefault();
      closeBtn.focus();
    } else if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initProjects() {
  initProjectFiltering();
  initProjectModal();
}
