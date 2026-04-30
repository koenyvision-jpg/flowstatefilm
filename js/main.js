(function () {
  'use strict';

  /* ─── Nav scroll ─────────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav && !nav.classList.contains('always-frosted')) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ─── Mobile menu ────────────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Hero carousel ──────────────────────────────────────── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-counter-dot');

  if (slides.length > 0) {
    let current = 0;
    let timer   = null;

    const show = (index) => {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
    };

    const advance = () => show((current + 1) % slides.length);

    const startTimer = () => {
      clearInterval(timer);
      timer = setInterval(advance, 5000);
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        show(i);
        startTimer(); // reset timer on manual dot click
      });
    });

    // init
    show(0);
    startTimer();
  }

  /* ─── Specialisms accordion ─────────────────────────────── */
  const specSection = document.querySelector('.spec');
  const specItems   = document.querySelectorAll('.spec-item');

  if (specSection && specItems.length > 0) {
    const count = specItems.length;
    const equalCols = Array(count).fill('1fr').join(' ');
    let insideSection = false;

    specItems.forEach((item, idx) => {
      item.addEventListener('mouseenter', () => {
        specItems.forEach(si => si.classList.remove('hovered'));
        item.classList.add('hovered');

        if (!insideSection) {
          // Entering from outside: paint the equal state first so the
          // browser has an explicit "from" value to transition from.
          specSection.style.gridTemplateColumns = equalCols;
          specSection.getBoundingClientRect(); // force reflow
          insideSection = true;
        }

        const cols = Array.from({ length: count }, (_, i) =>
          i === idx ? '1.52fr' : '0.83fr'
        ).join(' ');
        specSection.style.gridTemplateColumns = cols;
      });
    });

    specSection.addEventListener('mouseleave', () => {
      insideSection = false;
      specItems.forEach(si => si.classList.remove('hovered'));
      specSection.style.gridTemplateColumns = equalCols;
    });
  }

  /* ─── Video facades (click-to-play) ─────────────────────── */
  document.querySelectorAll('.video-facade').forEach(facade => {
    facade.addEventListener('click', () => {
      const wrap = document.createElement('div');
      wrap.className = 'video-embed';
      wrap.innerHTML = `<iframe src="${facade.dataset.src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Video"></iframe>`;
      facade.replaceWith(wrap);
    });
  });

  /* ─── Work page filter ───────────────────────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const workTiles   = document.querySelectorAll('.work-tile[data-cat]');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.filter;

        workTiles.forEach(tile => {
          if (cat === 'All' || tile.dataset.cat === cat) {
            tile.removeAttribute('hidden');
          } else {
            tile.setAttribute('hidden', '');
          }
        });
      });
    });
  }

})();
