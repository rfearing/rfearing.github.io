/**
 * ricardofearing.com
 * Vanilla JS — no dependencies
 */
(function () {
  'use strict';

  // 1. Remove is-loading class after page loads (triggers banner animation)
  document.body.classList.add('is-loading');
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.body.classList.remove('is-loading');
    }, 100);
  });

  // 2. Set background images from data-bg attribute
  document.querySelectorAll('.bg-img').forEach(function (el) {
    var bg = el.getAttribute('data-bg');
    if (bg) {
      el.style.backgroundImage = 'url(images/' + bg + ')';
    }
  });

  // 3. Fade in .post sections when scrolled into view
  var posts = document.querySelectorAll('.post');

  if (posts.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var inner = entry.target.querySelector('.inner');
          if (!inner) return;
          if (entry.isIntersecting) {
            inner.classList.add('current');
          } else {
            inner.classList.remove('current');
          }
        });
      },
      { threshold: 0.3 }
    );

    posts.forEach(function (post) {
      observer.observe(post);
    });
  } else {
    // Fallback: just show everything
    posts.forEach(function (post) {
      var inner = post.querySelector('.inner');
      if (inner) inner.classList.add('current');
    });
  }
})();