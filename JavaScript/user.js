document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.com-content-categories__item').forEach(function(item) {
    var a = item.querySelector('.com-content-categories__item-title a');
    if (a && !item.querySelector('.box-link')) {
      var overlay = document.createElement('a');
      overlay.href = a.href;
      overlay.className = 'box-link';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.tabIndex = -1;
      item.appendChild(overlay);
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.com-content-category-blog__item').forEach(function (item) {
    const link = item.querySelector('figure a');
    if (link && !item.querySelector('.box-link')) {
      const href = link.getAttribute('href');
      const overlay = document.createElement('a');
      overlay.href = href;
      overlay.className = 'box-link';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.style.position = 'absolute';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.zIndex = 10;

      item.style.position = 'relative';
      item.appendChild(overlay);
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.mod-articles-item').forEach(function (item) {
    const link = item.querySelector('figure a');
    if (link && !item.querySelector('.box-link')) {
      const href = link.getAttribute('href');
      const overlay = document.createElement('a');
      overlay.href = href;
      overlay.className = 'box-link';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.style.position = 'absolute';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.zIndex = 10;

      item.style.position = 'relative';
      item.appendChild(overlay);
    }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  // Popup-Container erzeugen
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay"; // 👈 wichtig!
  overlay.innerHTML = `
    <div class="popup-inner">
      <span class="popup-close">✖</span>
      <img src="" alt="Vergrößertes Bild">
    </div>
  `;

  document.body.appendChild(overlay);

  const popupImg = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".popup-close");

  // Automatisch alle Bilder im Joomla-Artikel aktivieren
  document.querySelectorAll(".com-content-article.item-page img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      popupImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  // Klick auf Hintergrund oder X schließt Popup
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target === closeBtn || e.target === popupImg) {
      overlay.style.display = "none";
      popupImg.src = "";
    }
  });

  // ESC-Taste schließt Popup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      overlay.style.display = "none";
      popupImg.src = "";
    }
  });
});
