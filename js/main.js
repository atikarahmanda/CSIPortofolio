const iconMap = {
  default: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>',
  rpa: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>',
  fulfillment: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>',
  notes: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>',
  reconciliation: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
  database: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>',
  monitoring: '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
  'multi-platform': '<svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
};

const categoryColorMap = {
  "Robotic Process Automation": "bg-blue-100 text-blue-800",
  "Artificial Intelligence for Automation": "bg-pink-100 text-pink-800",
  "Data Platforms & Integration": "bg-teal-100 text-teal-800",
  "Monitoring & Observability": "bg-red-100 text-red-800",
  // Tambahkan kategori dan warna lain di sini
};

const defaultCategoryColor = "bg-gray-100 text-gray-800"; // Warna default

/**
 * Fungsi untuk memuat konten HTML dari file eksternal (data-include).
 */
function loadHtmlIncludes() {
  const includeElements = document.querySelectorAll("[data-include]");
  const promises = [...includeElements].map((el) => {
    return fetch(el.getAttribute("data-include"))
      .then((res) => {
        if (!res.ok) throw new Error(`Gagal memuat: ${res.url} (${res.status})`);
        return res.text();
      })
      .then((html) => (el.innerHTML = html));
  });
  return Promise.all(promises);
}

function csvToJSON(csv) {
    const lines = csv.split('\n');
    const result = [];
    if (lines.length === 0) return result;

    const headers = lines[0].trim().split(',').map(h => h.trim());

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const obj = {};
        const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
        
        for (let j = 0; j < headers.length; j++) {
            if (values[j]) {
                obj[headers[j]] = values[j].replace(/^"|"$/g, '').trim();
            } else {
                obj[headers[j]] = '';
            }
        }
        result.push(obj);
    }
    return result;
}

async function loadPortfolioData() {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQztqai4DtS3xH6a8N9pamkPQ8bThPL8ArY1r86tQ-sLbuJVzrNXCaQD1fy31MZi0E8jUhTGsfLrOq-/pub?output=csv'; // 🔽 GANTI DENGAN URL CSV ANDA
  const grid = document.getElementById("case-studies-grid");

  if (!grid) {
    console.error("❌ Error: Elemen #case-studies-grid tidak ditemukan.");
    return;
  }

  grid.innerHTML = `<p class="text-center col-span-2">Loading portfolio...</p>`;

  try {
    const response = await fetch(csvUrl);
    if (!response.ok) throw new Error("Gagal mengambil data CSV. Pastikan URL benar dan sheet sudah dipublikasikan.");
    
    const csvText = await response.text();
    const data = csvToJSON(csvText);

    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = `<p class="text-center col-span-2">Tidak ada data portofolio untuk ditampilkan.</p>`;
        return;
    }

    data.forEach((item) => {
      if (!item.title || item.title.trim() === '') {
        return; // Lewati ke baris data selanjutnya
      }

      grid.appendChild(createPortfolioCard(item));
    });

  } catch (error) {
    console.error("Error saat memuat portofolio:", error);
    grid.innerHTML = `<p class="text-center text-red-500 col-span-2"><b>Terjadi Kesalahan:</b> ${error.message}</p>`;
  }
}

function createPortfolioCard(item) {
  const card = document.createElement("div");
  card.className = "card-hover bg-white rounded-xl shadow-lg overflow-hidden flex flex-col";

  const iconHTML = iconMap[item.icon] || iconMap.default;

  const portfolioItem = {
    title: item.title || 'Judul Tidak Tersedia',
    description: item.description || 'Deskripsi tidak tersedia.',
    categories: (item.category || '').split(",").map(cat => cat.trim()).filter(cat => cat),
    industry: item.industry || 'Industri Tidak Tersedia',
    color: item.color || 'from-gray-500 to-gray-600',
  };

  const categoryTags = portfolioItem.categories.map(cat => {
    const colorClasses = categoryColorMap[cat] || defaultCategoryColor;
    return `<span data-group="Category" class="px-3 py-1 ${colorClasses} text-xs rounded-full">${cat}</span>`;
  }).join('');

  const industryTag = `<span data-group="Company" class="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">${portfolioItem.industry}</span>`;

  card.innerHTML = `
    <div class="h-48 bg-gradient-to-br ${portfolioItem.color} flex items-center justify-center flex-shrink-0">
      ${iconHTML}
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-xl font-semibold text-gray-900 mb-3">${portfolioItem.title}</h3>
      <p class="text-gray-600 mb-4 flex-grow">${portfolioItem.description}</p>
      <div class="flex flex-wrap gap-2 mt-auto">
        ${categoryTags}
        ${industryTag}
      </div>
    </div>
  `;
  return card;
}

function initializePortfolioFilter() {
  const grid = document.getElementById("case-studies-grid");
  const clearButton = document.getElementById("clear-filters-btn");

  if (!grid || !clearButton) {
    return;
  }

  const collectedTags = { Category: new Set(), Company: new Set() };
  let allCards = Array.from(grid.querySelectorAll(".card-hover"));
  
  if (allCards.length === 0) {
    return;
  }

  let filteredCards = [...allCards];
  let currentPage = 1;
  const itemsPerPage = 4;

  allCards.forEach(card => {
    card.querySelectorAll("[data-group]").forEach(tagElement => {
      const group = tagElement.dataset.group;
      const tagName = tagElement.textContent.trim();
      if (collectedTags[group] && tagName) {
        collectedTags[group].add(tagName);
      }
    });
  });

  for (const [groupName, tags] of Object.entries(collectedTags)) {
    const ul = document.querySelector(`ul[data-filter-group="${groupName}"]`);
    if (ul) {
      ul.innerHTML = "";
      ul.appendChild(createCheckboxItem("All"));
      [...tags].sort().forEach(tag => ul.appendChild(createCheckboxItem(tag)));
    }
  }

  function createCheckboxItem(value) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "tag-filter";
    input.value = value;
    const span = document.createElement("span");
    span.textContent = value;
    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);
    return li;
  }

  const checkboxes = document.querySelectorAll(".tag-filter");
  const groups = {};
  checkboxes.forEach(cb => {
    const groupName = cb.closest("ul").dataset.filterGroup;
    if (!groups[groupName]) groups[groupName] = [];
    groups[groupName].push(cb);
  });

  Object.values(groups).forEach(groupCbs => {
    const allCb = groupCbs.find(cb => cb.value === "All");
    if (!allCb) return;

    allCb.addEventListener("change", () => {
      if (allCb.checked) {
        groupCbs.forEach(cb => { if (cb !== allCb) cb.checked = false; });
      }
      applyFilters();
    });

    groupCbs.forEach(cb => {
      if (cb !== allCb) {
        cb.addEventListener("change", () => {
          if (cb.checked) allCb.checked = false;
          const anyChecked = groupCbs.some(c => c !== allCb && c.checked);
          if (!anyChecked) allCb.checked = true;
          applyFilters();
        });
      }
    });
  });

  clearButton.addEventListener("click", () => {
    checkboxes.forEach(cb => { cb.checked = cb.value === "All"; });
    applyFilters();
  });

  function applyFilters() {
    const activeFilters = {};
    Object.entries(groups).forEach(([groupKey, cbs]) => {
      activeFilters[groupKey] = cbs
        .filter(cb => cb.checked && cb.value !== "All")
        .map(cb => cb.value.toLowerCase());
    });

    filteredCards = allCards.filter(card => {
      return Object.entries(activeFilters).every(([groupKey, filters]) => {
        if (filters.length === 0) return true;
        const cardTags = [...card.querySelectorAll(`[data-group="${groupKey}"]`)]
          .map(span => span.textContent.trim().toLowerCase());
        return filters.some(filter => cardTags.includes(filter));
      });
    });
    currentPage = 1;
    renderPage();
  }

  function renderPage() {
    allCards.forEach(card => (card.style.display = "none"));
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    filteredCards.slice(start, end).forEach(card => {
      card.style.display = "flex";
    });
    renderPaginationControls();
  }

  function renderPaginationControls() {
    const container = document.getElementById("pagination");
    if (!container) return;
    
    container.innerHTML = "";
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    if (totalPages <= 1) return;

    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "&laquo; Prev";
    prevBtn.className = `px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white"}`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderPage(); } };
    container.appendChild(prevBtn);

    const info = document.createElement("span");
    info.textContent = `Page ${currentPage} of ${totalPages}`;
    info.className = "px-4 py-2 text-gray-700 font-medium";
    container.appendChild(info);

    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "Next &raquo;";
    nextBtn.className = `px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white"}`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderPage(); } };
    container.appendChild(nextBtn);
  }

  clearButton.click();
}

window.scrollToSection = function (id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.submit();
    setTimeout(() => form.reset(), 500);
    if (window.Swal) {
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been submitted successfully.",
        confirmButtonText: "OK",
        confirmButtonColor: "#3b82f6"
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHtmlIncludes()
    .then(() => {
      loadPortfolioData().then(() => {
        initializePortfolioFilter();
      });
      initContactForm();
    })
    .catch(error => {
      console.error("Terjadi kesalahan saat memuat section:", error);
    });
});

(function () {
  var hasProject = window.location.pathname.indexOf('/CSIPortofolio/') === 0;
  if (document.querySelector('base') === null) {
      document.write('<base href="' + (hasProject ? '/CSIPortofolio/' : '/') + '">');
  }
})();