// File: main.js (Versi Final Dinamis)

// Fungsi untuk memuat HTML includes
function loadHtmlIncludes() {
    const includeElements = document.querySelectorAll("[data-include]");
    const promises = [...includeElements].map(el => {
        return fetch(el.getAttribute("data-include"))
            .then(res => {
                if (!res.ok) throw new Error(`Gagal memuat: ${res.url} (${res.status})`);
                return res.text();
            })
            .then(html => el.innerHTML = html);
    });
    return Promise.all(promises);
}

// Fungsi utama untuk inisialisasi filter
function initializePortfolioFilter() {
    const grid = document.getElementById('case-studies-grid');
    const clearButton = document.getElementById('clear-filters-btn');

    if (!grid || !clearButton) {
        console.error("❌ Error: Elemen #case-studies-grid atau #clear-filters-btn tidak ditemukan.");
        return;
    }

    // --- BAGIAN BARU: MEMBACA SEMUA TAG DARI CARD ---
    const collectedTags = {
        Category: new Set(),
        Product: new Set(),
        Company: new Set()
    };

    const allCards = grid.querySelectorAll('.card-hover');
    allCards.forEach(card => {
        card.querySelectorAll('[data-group]').forEach(tagElement => {
            const group = tagElement.dataset.group;
            const tagName = tagElement.textContent.trim();
            if (collectedTags[group] && tagName) {
                collectedTags[group].add(tagName);
            }
        });
    });

    // --- BAGIAN BARU: MEMBUAT CHECKBOX SECARA DINAMIS ---
    for (const [groupName, tags] of Object.entries(collectedTags)) {
        const ul = document.querySelector(`ul[data-filter-group="${groupName}"]`);
        if (ul) {
            ul.innerHTML = ''; // Kosongkan list yang ada

            // Buat dan tambahkan checkbox "All"
            ul.appendChild(createCheckboxItem('All'));

            // Urutkan tag dan buat checkbox untuk masing-masing
            [...tags].sort().forEach(tag => {
                ul.appendChild(createCheckboxItem(tag));
            });
        }
    }

    // Fungsi untuk membuat satu item checkbox
    function createCheckboxItem(value) {
        const li = document.createElement('li');
        const label = document.createElement('label');
        label.className = 'flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'tag-filter';
        input.value = value;

        const span = document.createElement('span');
        span.textContent = value;

        label.appendChild(input);
        label.appendChild(span);
        li.appendChild(label);
        return li;
    }

    // --- Logika Filter (Sama seperti sebelumnya, tapi kini bekerja dengan checkbox dinamis) ---
    const checkboxes = document.querySelectorAll('.tag-filter');
    const groups = {};
    checkboxes.forEach(cb => {
        const groupName = cb.closest('ul').dataset.filterGroup;
        if (!groups[groupName]) groups[groupName] = [];
        groups[groupName].push(cb);
    });

    Object.values(groups).forEach(groupCbs => {
        const allCb = groupCbs.find(cb => cb.value === 'All');
        if (!allCb) return;

        allCb.addEventListener('change', () => {
            if (allCb.checked) {
                groupCbs.forEach(cb => { if (cb !== allCb) cb.checked = false; });
            }
            applyFilters();
        });

        groupCbs.forEach(cb => {
            if (cb !== allCb) {
                cb.addEventListener('change', () => {
                    if (cb.checked) allCb.checked = false;
                    const anyChecked = groupCbs.some(c => c !== allCb && c.checked);
                    if (!anyChecked) allCb.checked = true;
                    applyFilters();
                });
            }
        });
    });

    clearButton.addEventListener('click', () => {
        checkboxes.forEach(cb => { cb.checked = cb.value === 'All'; });
        applyFilters();
    });

    function applyFilters() {
        const activeFilters = {};
        Object.entries(groups).forEach(([groupKey, cbs]) => {
            activeFilters[groupKey] = cbs
                .filter(cb => cb.checked && cb.value !== 'All')
                .map(cb => cb.value.toLowerCase());
        });

        [...grid.children].forEach(card => {
            const cardTags = [...card.querySelectorAll('[data-group]')].map(span => span.textContent.trim().toLowerCase());
            const isVisible = Object.entries(activeFilters).every(([groupKey, filters]) => {
                if (filters.length === 0) return true;
                return filters.some(filter => cardTags.includes(filter));
            });
            card.style.display = isVisible ? '' : 'none';
        });
    }

    clearButton.click(); // Set kondisi awal ke "All"
}

// Fungsi smooth scroll Anda
window.scrollToSection = function (id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

// Menjalankan semuanya
document.addEventListener("DOMContentLoaded", () => {
    loadHtmlIncludes()
        .then(() => {
            initializePortfolioFilter();
        })
        .catch(error => {
            console.error("Terjadi kesalahan:", error);
        });
});

(function () {
    // Jika di GitHub Pages project, prepend '/CSIPortofolio', kalau lokal biarkan kosong
    var hasProject = window.location.pathname.indexOf('/CSIPortofolio/') === 0;
    document.write('<base href="' + (hasProject ? '/CSIPortofolio/' : '/') + '">');
})();

document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM loaded");
  console.log("Form in DOM:", document.getElementById("contact-form"));
});



document.addEventListener("DOMContentLoaded", function () {
  const observer = new MutationObserver(() => {
    const form = document.getElementById("contact-form");
    if (form) {
      initContactForm(); // panggil fungsi pasang listener
      observer.disconnect(); // stop observer setelah ketemu
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

function initContactForm() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // kirim form ke Google Form / Apps Script
    form.submit();

    // reset input setelah 0.5 detik
    setTimeout(() => {
      form.reset();
    }, 500);

    // popup sweetalert
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been submitted successfully.",
      confirmButtonText: "OK",
      confirmButtonColor: "#3b82f6" // biru biar serasi
    });
  });
}




