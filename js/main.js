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

// function initializePortfolioFilter() {
//   const grid = document.getElementById("case-studies-grid");
//   const clearButton = document.getElementById("clear-filters-btn");

//   if (!grid || !clearButton) {
//     console.error("❌ Error: Elemen #case-studies-grid atau #clear-filters-btn tidak ditemukan.");
//     return;
//   }

//   const collectedTags = {
//     Category: new Set(),
//     Product: new Set(),
//     Company: new Set()
//   };

//   const allCards = Array.from(grid.querySelectorAll(".card-hover"));
//   let filteredCards = [...allCards];
//   let currentPage = 1;
//   const itemsPerPage = 4; // jumlah card per halaman

//   // kumpulkan semua tag unik
//   allCards.forEach(card => {
//     card.querySelectorAll("[data-group]").forEach(tagElement => {
//       const group = tagElement.dataset.group;
//       const tagName = tagElement.textContent.trim();
//       if (collectedTags[group] && tagName) {
//         collectedTags[group].add(tagName);
//       }
//     });
//   });

//   // render checkbox filter
//   for (const [groupName, tags] of Object.entries(collectedTags)) {
//     const ul = document.querySelector(`ul[data-filter-group="${groupName}"]`);
//     if (ul) {
//       ul.innerHTML = "";

//       ul.appendChild(createCheckboxItem("All"));

//       [...tags].sort().forEach(tag => {
//         ul.appendChild(createCheckboxItem(tag));
//       });
//     }
//   }

//   function createCheckboxItem(value) {
//     const li = document.createElement("li");
//     const label = document.createElement("label");
//     label.className = "flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-blue-600";

//     const input = document.createElement("input");
//     input.type = "checkbox";
//     input.className = "tag-filter";
//     input.value = value;

//     const span = document.createElement("span");
//     span.textContent = value;

//     label.appendChild(input);
//     label.appendChild(span);
//     li.appendChild(label);
//     return li;
//   }

//   const checkboxes = document.querySelectorAll(".tag-filter");
//   const groups = {};
//   checkboxes.forEach(cb => {
//     const groupName = cb.closest("ul").dataset.filterGroup;
//     if (!groups[groupName]) groups[groupName] = [];
//     groups[groupName].push(cb);
//   });

//   Object.values(groups).forEach(groupCbs => {
//     const allCb = groupCbs.find(cb => cb.value === "All");
//     if (!allCb) return;

//     allCb.addEventListener("change", () => {
//       if (allCb.checked) {
//         groupCbs.forEach(cb => { if (cb !== allCb) cb.checked = false; });
//       }
//       applyFilters();
//     });

//     groupCbs.forEach(cb => {
//       if (cb !== allCb) {
//         cb.addEventListener("change", () => {
//           if (cb.checked) allCb.checked = false;
//           const anyChecked = groupCbs.some(c => c !== allCb && c.checked);
//           if (!anyChecked) allCb.checked = true;
//           applyFilters();
//         });
//       }
//     });
//   });

//   clearButton.addEventListener("click", () => {
//     checkboxes.forEach(cb => { cb.checked = cb.value === "All"; });
//     applyFilters();
//   });

//   // ======== FILTER + PAGINATION =========
//   function applyFilters() {
//     const activeFilters = {};
//     Object.entries(groups).forEach(([groupKey, cbs]) => {
//       activeFilters[groupKey] = cbs
//         .filter(cb => cb.checked && cb.value !== "All")
//         .map(cb => cb.value.toLowerCase());
//     });

//     filteredCards = allCards.filter(card => {
//       const cardTags = [...card.querySelectorAll("[data-group]")]
//         .map(span => span.textContent.trim().toLowerCase());
//       return Object.entries(activeFilters).every(([groupKey, filters]) => {
//         if (filters.length === 0) return true;
//         return filters.some(filter => cardTags.includes(filter));
//       });
//     });

//     currentPage = 1;
//     renderPage();
//   }

//   function renderPage() {
//     allCards.forEach(card => (card.style.display = "none"));

//     const start = (currentPage - 1) * itemsPerPage;
//     const end = start + itemsPerPage;

//     filteredCards.slice(start, end).forEach(card => {
//       card.style.display = "";
//     });

//     renderPaginationControls();
//   }

//   function renderPaginationControls() {
//     let container = document.getElementById("pagination");
//     if (!container) {
//       container = document.createElement("div");
//       container.id = "pagination";
//       container.className = "flex justify-center mt-8 space-x-2";
//       grid.parentNode.appendChild(container);
//     }
//     container.innerHTML = "";

//     const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
//     if (totalPages <= 1) return;

//     for (let i = 1; i <= totalPages; i++) {
//       const btn = document.createElement("button");
//       btn.textContent = i;
//       btn.className =
//         `px-3 py-1 rounded ${i === currentPage ? "bg-blue-600 text-white" : "bg-gray-200"}`;
//       btn.addEventListener("click", () => {
//         currentPage = i;
//         renderPage();
//       });
//       container.appendChild(btn);
//     }
//   }

//   // jalankan awal
//   clearButton.click();
// }

function initializePortfolioFilter() {
  const grid = document.getElementById("case-studies-grid");
  const clearButton = document.getElementById("clear-filters-btn");

  if (!grid || !clearButton) {
    console.error("❌ Error: Elemen #case-studies-grid atau #clear-filters-btn tidak ditemukan.");
    return;
  }

  const collectedTags = {
    Category: new Set(),
    Product: new Set(),
    Company: new Set()
  };

  const allCards = Array.from(grid.querySelectorAll(".card-hover"));
  let filteredCards = [...allCards];
  let currentPage = 1;
  const itemsPerPage = 4;

  // kumpulkan semua tag unik
  allCards.forEach(card => {
    card.querySelectorAll("[data-group]").forEach(tagElement => {
      const group = tagElement.dataset.group;
      const tagName = tagElement.textContent.trim();
      if (collectedTags[group] && tagName) {
        collectedTags[group].add(tagName);
      }
    });
  });

  // render checkbox filter
  for (const [groupName, tags] of Object.entries(collectedTags)) {
    const ul = document.querySelector(`ul[data-filter-group="${groupName}"]`);
    if (ul) {
      ul.innerHTML = "";

      ul.appendChild(createCheckboxItem("All"));

      [...tags].sort().forEach(tag => {
        ul.appendChild(createCheckboxItem(tag));
      });
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

  // ======== FILTER + PAGINATION =========
  function applyFilters() {
    const activeFilters = {};
    Object.entries(groups).forEach(([groupKey, cbs]) => {
      activeFilters[groupKey] = cbs
        .filter(cb => cb.checked && cb.value !== "All")
        .map(cb => cb.value.toLowerCase());
    });

    filteredCards = allCards.filter(card => {
      const cardTags = [...card.querySelectorAll("[data-group]")]
        .map(span => span.textContent.trim().toLowerCase());
      return Object.entries(activeFilters).every(([groupKey, filters]) => {
        if (filters.length === 0) return true;
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
      card.style.display = "";
    });

    renderPaginationControls();
  }

  function renderPaginationControls() {
    let container = document.getElementById("pagination");
    if (!container) {
      container = document.createElement("div");
      container.id = "pagination";
      container.className = "flex justify-end mt-8 space-x-4";
      grid.parentNode.appendChild(container);
    }
    container.innerHTML = "";

    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    if (totalPages <= 1) return;

    // tombol Prev
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "⟨ Prev";
    prevBtn.className = `px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white"}`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
      }
    });
    container.appendChild(prevBtn);

    // info halaman
    const info = document.createElement("span");
    info.textContent = `Page ${currentPage} of ${totalPages}`;
    info.className = "px-2 py-2 text-gray-700 font-medium";
    container.appendChild(info);

    // tombol Next
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next ⟩";
    nextBtn.className = `px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white"}`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
      }
    });
    container.appendChild(nextBtn);
  }

  // jalankan awal
  clearButton.click();
}


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
    var hasProject = window.location.pathname.indexOf('/CSIPortofolio/') === 0;
    document.write('<base href="' + (hasProject ? '/CSIPortofolio/' : '/') + '">');
})();

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

    setTimeout(() => {
      form.reset();
    }, 500);

    // popup sweetalert
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Your message has been submitted successfully.",
      confirmButtonText: "OK",
      confirmButtonColor: "#3b82f6"
    });
  });
}




