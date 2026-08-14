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

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
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

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalImage.src = data.image;
    modalImage.alt = data.title;

    // Tech chips
    modalTechStack.innerHTML = data.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');

    // Feature items
    modalFeatures.innerHTML = data.features.map(f => `
      <li class="modal-feature-item">
        <span class="modal-feature-bullet">▸</span>
        <span>${f}</span>
      </li>
    `).join('');

    // Action links
    let actionsHtml = '';
    if (data.playstore) {
      actionsHtml += `
        <a href="${data.playstore}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg class="btn-icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5c.34 0 .67.12.94.33l13.5 8.5c.67.42.92 1.3.5 1.97c-.12.2-.29.37-.5.5l-13.5 8.5c-.27.21-.6.33-.94.33c-.83 0-1.5-.67-1.5-1.5z"/></svg>
          <span>Get on Google Play</span>
        </a>
      `;
    }
    if (data.github) {
      actionsHtml += `
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <svg class="btn-icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span>View Source Code</span>
        </a>
      `;
    }
    modalActions.innerHTML = actionsHtml;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click triggers
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-modal');
      openModal(projectId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

function initProjects() {
  initProjectFiltering();
  initProjectModal();
}
