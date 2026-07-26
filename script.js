document.addEventListener('DOMContentLoaded', () => {

  // Channel default URL
  const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@SujithKumar-gaming';

  // Dynamic Navigation Switching
  const navBtns = document.querySelectorAll('.nav-btn');
  const pages = document.querySelectorAll('.page-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetPageId = btn.getAttribute('data-page') + '-page';

      // Update Active Navigation Button
      navBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.nav-btn[data-page="${btn.getAttribute('data-page')}"]`)
              .forEach(activeBtn => activeBtn.classList.add('active'));

      // Display Target Page
      pages.forEach(page => {
        if (page.id === targetPageId) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Category Tab Filters Toggle
  const filterTabs = document.querySelectorAll('.filter-tabs .tab-btn');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.parentElement;
      parent.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Global YouTube Channel & Subscribe Redirects
  const redirectBtns = document.querySelectorAll('.redirect-yt');
  redirectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(YOUTUBE_CHANNEL_URL, '_blank');
    });
  });

  // ------------------------------------------------------------------
  // CLICK ON ANY VIDEO CARD -> OPENS VIDEO DIRECTLY ON YOUTUBE
  // ------------------------------------------------------------------
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetUrl = card.getAttribute('data-video-url') || (YOUTUBE_CHANNEL_URL + '/videos');
      window.open(targetUrl, '_blank');
    });
  });

  // ------------------------------------------------------------------
  // CLICK ON ANY SHORTS CARD -> OPENS SHORT DIRECTLY ON YOUTUBE
  // ------------------------------------------------------------------
  const shortCards = document.querySelectorAll('.short-card');
  shortCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetUrl = card.getAttribute('data-short-url') || (YOUTUBE_CHANNEL_URL + '/shorts');
      window.open(targetUrl, '_blank');
    });
  });

  // Contact Form Submission Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Your message has been sent successfully.');
      contactForm.reset();
    });
  }

});
