const LOG999_SYSTEMS = [
  { id: "sys1", name: "EYE OF THE VOID", x: 320, y: 350 },
  { id: "sys2", name: "TOI-2", x: 230, y: 580 },
  { id: "sys3", name: "IOTA PEGASI", x: 580, y: 450 },
  { id: "sys4", name: "51 ARIETIS", x: 860, y: 530 },
  { id: "sys5", name: "NU4 CETI", x: 160, y: 840 },
  { id: "sys6", name: "81 INF", x: 420, y: 770 },
  { id: "sys7", name: "GYF-4", x: 250, y: 1060 },
  { id: "sys8", name: "MP-212", x: 620, y: 870 },
  { id: "sys9", name: "LF-122", x: 1000, y: 780 },
  { id: "sys10", name: "BETA TARSONI", x: 1230, y: 630 },
  { id: "sys11", name: "HODEUS-B", x: 1230, y: 950 },
  { id: "sys12", name: "GJ 1164", x: 820, y: 980 },
  { id: "sys13", name: "K3-569", x: 1040, y: 1150 },
  { id: "sys14", name: "KEPLER 831", x: 440, y: 1120 },
  { id: "sys15", name: "LCS-17", x: 630, y: 1190 },
  { id: "sys16", name: "12 LEONIS", x: 320, y: 1290 },
  { id: "sys17", name: "MU LIBRAE", x: 810, y: 1260 },
  { id: "sys18", name: "KELU-8", x: 1200, y: 1300 },
  { id: "sys19", name: "GLIESE 368-2", x: 530, y: 1350 },
  { id: "sys20", name: "HR 5730", x: 160, y: 1230 },
  { id: "sys21", name: "UPSILON BOREALIS", x: 220, y: 1370 },
];

const LOG999_CONNECTIONS = [
  { from: "sys1", to: "sys2" },
  { from: "sys1", to: "sys10" },
  { from: "sys2", to: "sys5" },
  { from: "sys2", to: "sys6" },
  { from: "sys3", to: "sys4" },
  { from: "sys3", to: "sys6" },
  { from: "sys3", to: "sys8" },
  { from: "sys4", to: "sys9" },
  { from: "sys4", to: "sys15" },
  { from: "sys5", to: "sys7" },
  { from: "sys6", to: "sys7" },
  { from: "sys6", to: "sys8" },
  { from: "sys7", to: "sys8" },
  { from: "sys9", to: "sys10" },
  { from: "sys9", to: "sys11" },
  { from: "sys9", to: "sys12" },
  { from: "sys10", to: "sys11" },
  { from: "sys11", to: "sys13" },
  { from: "sys11", to: "sys9" },
  { from: "sys11", to: "sys12" },
  { from: "sys12", to: "sys15" },
  { from: "sys12", to: "sys17" },
  { from: "sys13", to: "sys18" },
  { from: "sys14", to: "sys15" },
  { from: "sys14", to: "sys16" },
  { from: "sys14", to: "sys8" },
  { from: "sys15", to: "sys19" },
  { from: "sys15", to: "sys17" },
  { from: "sys16", to: "sys19" },
  { from: "sys16", to: "sys20" },
  { from: "sys17", to: "sys18" },
  { from: "sys17", to: "sys21" },
  { from: "sys19", to: "sys21" },
  { from: "sys20", to: "sys21" },
];

const LOG1599_SYSTEMS = [
  { id: "lf1", name: "S 195", x: 280, y: 310 },
  { id: "lf2", name: "CTB 11", x: 600, y: 190 },
  { id: "lf3", name: "HD 1019", x: 1000, y: 290 },
  { id: "lf4", name: "WASP-14", x: 600, y: 550 },
  { id: "lf5", name: "DOVE NEBULA", x: 210, y: 770 },
  { id: "lf6", name: "ETA CASSIOPEIAE", x: 900, y: 720 },
  { id: "lf7", name: "OMEGA PERSEI", x: 1220, y: 600 },
  { id: "lf8", name: "TAU CEPHEI", x: 520, y: 1020 },
  { id: "lf9", name: "3C61", x: 1120, y: 1080 },
];

const LOG1599_CONNECTIONS = [
  { from: "lf1", to: "lf2" },
  { from: "lf1", to: "lf4" },
  { from: "lf2", to: "lf3", dashed: true },
  { from: "lf2", to: "lf4" },
  { from: "lf4", to: "lf5", dashed: true },
  { from: "lf3", to: "lf6" },
  { from: "lf3", to: "lf7" },
  { from: "lf6", to: "lf5", dashed: true },
  { from: "lf6", to: "lf7" },
  { from: "lf6", to: "lf9" },
  { from: "lf5", to: "lf8", dashed: true },
  { from: "lf7", to: "lf9" },
  { from: "lf8", to: "lf9", dashed: true },
];

const DEADLY_FRONTIER_CARDS = [
  { id: "df2", num: "2", title: "" },
  { id: "df3", num: "3", title: "" },
  { id: "df10", num: "10", title: "" },
  { id: "df11", num: "11", title: "" },
  { id: "df12", num: "12", title: "" },
  { id: "df5", num: "5", title: "" },
  { id: "df6", num: "6", title: "" },
  { id: "df13", num: "13", title: "WASP-14" },
  { id: "df14", num: "14", title: "" },
  { id: "df15", num: "15", title: "" },
  { id: "df8", num: "8", title: "" },
  { id: "df9", num: "9", title: "" },
  { id: "df16", num: "16", title: "" },
  { id: "df17", num: "17", title: "" },
  { id: "df18", num: "18", title: "" },
];

let db = { campaigns: [] };
try {
  const savedDb = localStorage.getItem("iss_vanguard_db");
  if (savedDb) db = JSON.parse(savedDb);
} catch (e) {
  console.error("Failed to load database from localStorage", e);
}

let currentCampaignId = null;
let editingPlanetId = null;

function saveData() {
  try {
    localStorage.setItem("iss_vanguard_db", JSON.stringify(db));
  } catch (e) {
    console.error("Failed to save database to localStorage", e);
  }
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  const targetView = document.getElementById(viewId);
  if (targetView) targetView.classList.add("active");
  window.scrollTo(0, 0);
  if (viewId === "campaign-view") {
    updateDashboardLogCount();
  }
}

function showModal({ title, icon = "fa-circle-info", htmlContent, buttons, isFullscreen = false, hideTitle = false }) {
  const modal = document.getElementById("custom-modal");
  const boxWrapper = document.getElementById("modal-box-wrapper");
  if (!modal || !boxWrapper) return;

  boxWrapper.className = `modal-box ${isFullscreen ? "modal-fullscreen" : ""}`;
  const titleEl = document.getElementById("modal-title");

  if (hideTitle) {
    if (titleEl) titleEl.style.display = "none";
  } else {
    if (titleEl) {
      titleEl.style.display = "flex";
      titleEl.innerHTML = `<i class="fa-solid ${icon}"></i> ${title}`;
    }
  }

  const contentEl = document.getElementById("modal-content");
  if (contentEl) {
    contentEl.innerHTML = isFullscreen ? `<div class="modal-content-scroll">${htmlContent}</div>` : htmlContent;
  }

  const btnContainer = document.getElementById("modal-buttons");
  if (btnContainer) {
    btnContainer.innerHTML = "";
    buttons.forEach((b) => {
      const btn = document.createElement("button");
      btn.className = `btn ${b.className || ""}`;
      btn.innerHTML = b.text;
      btn.onclick = () => {
        if (!b.onClick || b.onClick() !== false) {
          if (!b.keepOpen) closeModal();
        }
      };
      btnContainer.appendChild(btn);
    });
  }

  modal.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("custom-modal");
  if (modal) modal.classList.remove("active");
}

function buildPoiRows() {
  const container = document.getElementById("poi-rows-container");
  if (!container) return;
  let rowsHtml = "";
  for (let i = 1; i <= 10; i++) {
    rowsHtml += `
      <div class="poi-row">
          <span class="index-label">${i}</span>
          <input type="text" class="poi-sec-input" data-index="${i}" placeholder="POI No.">
          <input type="text" class="poi-name-input" data-index="${i}" placeholder="POI Name">
      </div>
    `;
  }
  container.innerHTML = rowsHtml;
}
buildPoiRows();

function getCampaignTypeLabel(type) {
  if (type === "lost_fleet") return "Lost Fleet";
  if (type === "deadly_frontier") return "Deadly Frontier";
  return "Base Game";
}

function getActiveSystemsConfig(campaign) {
  if (campaign && campaign.type === "lost_fleet") {
    return { type: "map", systems: LOG1599_SYSTEMS, connections: LOG1599_CONNECTIONS, title: "Log 1599" };
  }
  if (campaign && campaign.type === "deadly_frontier") {
    return { type: "cards", cards: DEADLY_FRONTIER_CARDS, title: "Frontier Logs" };
  }
  return { type: "map", systems: LOG999_SYSTEMS, connections: LOG999_CONNECTIONS, title: "Log 999" };
}

function renderCampaigns(filter = "") {
  const list = document.getElementById("campaign-list");
  if (!list) return;

  if (!db.campaigns || db.campaigns.length === 0) {
    list.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 12px; font-size: 0.8rem;">No campaigns found. Create one to begin.</p>`;
    return;
  }

  const query = filter.toLowerCase();
  const filtered = db.campaigns.filter((c) => c.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    list.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 12px; font-size: 0.8rem;">No campaigns match your search.</p>`;
    return;
  }

  let html = "";
  filtered.forEach((c) => {
    const typeLabel = getCampaignTypeLabel(c.type);
    const sysConfig = getActiveSystemsConfig(c);
    const planetCount = c.planets ? c.planets.length : 0;

    let progressText = "";
    if (sysConfig.type === "cards") {
      const loggedCards = c.log999 ? Object.values(c.log999).filter((s) => (s.notes && s.notes.trim().length > 0) || (s.title && s.title.trim().length > 0)).length : 0;
      progressText = `Logs Recorded: ${loggedCards}/${sysConfig.cards.length}`;
    } else {
      const visitedSystems = c.log999 ? Object.values(c.log999).filter((s) => s.visited).length : 0;
      progressText = `${sysConfig.title}: ${visitedSystems}/${sysConfig.systems.length}`;
    }

    html += `
      <div class="campaign-item">
          <div class="campaign-info" onclick="selectCampaign('${c.id}')">
              <div class="campaign-title-header">
                  <i class="fa-solid fa-rocket" style="color: var(--accent-red); flex-shrink: 0;"></i>
                  <span class="campaign-name-text" title="${c.name}">${c.name}</span>
                  <span class="campaign-badge">${typeLabel}</span>
              </div>
              <span>Planets Logged: ${planetCount} | ${progressText}</span>
          </div>
          <div class="campaign-actions">
              <button class="btn btn-secondary btn-sm" onclick="openCampaignModal('${c.id}')" title="Edit Campaign">
                  <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-danger btn-sm" onclick="confirmDeleteCampaign('${c.id}')" title="Delete Campaign">
                  <i class="fa-solid fa-trash"></i>
              </button>
          </div>
      </div>
    `;
  });
  list.innerHTML = html;
}

function filterCampaigns() {
  const searchInput = document.getElementById("campaign-search");
  if (searchInput) renderCampaigns(searchInput.value);
}

function openCampaignModal(campaignId) {
  const isEdit = campaignId !== null;
  let campaignName = "";
  let selectedType = "base_game";
  if (isEdit) {
    const camp = db.campaigns.find((c) => c.id === campaignId);
    if (camp) {
      campaignName = camp.name;
      selectedType = camp.type || "base_game";
    }
  }

  const typeLabels = {
    base_game: "Base Game",
    deadly_frontier: "Deadly Frontier",
    lost_fleet: "Lost Fleet",
  };

  const typeSelectHtml = isEdit
    ? ""
    : `
      <label style="margin-top: 10px;"><i class="fa-solid fa-layer-group"></i> Campaign System / Expansion</label>
      <div class="custom-dropdown" id="modal-campaign-type-dropdown">
          <div class="custom-dropdown-selected" onclick="toggleCustomDropdown(event)">
              <span id="custom-dropdown-label">${typeLabels[selectedType]}</span>
              <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="custom-dropdown-options" id="custom-dropdown-options-list">
              <div class="custom-dropdown-option ${selectedType === "base_game" ? "selected" : ""}" data-value="base_game" onclick="selectCustomDropdownOption('base_game', 'Base Game', event)">Base Game</div>
              <div class="custom-dropdown-option ${selectedType === "deadly_frontier" ? "selected" : ""}" data-value="deadly_frontier" onclick="selectCustomDropdownOption('deadly_frontier', 'Deadly Frontier', event)">Deadly Frontier</div>
              <div class="custom-dropdown-option ${selectedType === "lost_fleet" ? "selected" : ""}" data-value="lost_fleet" onclick="selectCustomDropdownOption('lost_fleet', 'Lost Fleet', event)">Lost Fleet</div>
          </div>
      </div>
      <input type="hidden" id="modal-campaign-type" value="${selectedType}">
    `;

  showModal({
    title: isEdit ? "Edit Campaign Name" : "New Campaign",
    icon: isEdit ? "fa-pen-to-square" : "fa-book-atlas",
    htmlContent: `
      <div class="modal-message">${isEdit ? "Update campaign name:" : "Configure your new ISS Vanguard campaign details:"}</div>
      <label><i class="fa-solid fa-tag"></i> Campaign Name</label>
      <input type="text" id="modal-campaign-name" value="${campaignName}" placeholder="e.g. Alpha Crew Campaign" autofocus>
      ${typeSelectHtml}
    `,
    buttons: [
      { text: "Cancel", className: "btn-secondary" },
      {
        text: isEdit ? '<i class="fa-solid fa-check"></i> Save' : '<i class="fa-solid fa-plus"></i> Create',
        className: "",
        onClick: () => {
          const nameInput = document.getElementById("modal-campaign-name");
          if (!nameInput) return false;
          const val = nameInput.value.trim();
          if (val) {
            if (isEdit) {
              const camp = db.campaigns.find((c) => c.id === campaignId);
              if (camp) {
                camp.name = val;
                if (currentCampaignId === campaignId) {
                  const titleEl = document.getElementById("current-campaign-title");
                  if (titleEl) titleEl.innerText = val;
                }
              }
            } else {
              const typeInput = document.getElementById("modal-campaign-type");
              const chosenType = typeInput ? typeInput.value : "base_game";
              const newCampaign = {
                id: "camp_" + Date.now(),
                name: val,
                type: chosenType,
                planets: [],
                log999: {},
              };
              db.campaigns.push(newCampaign);
            }
            saveData();
            const searchInput = document.getElementById("campaign-search");
            renderCampaigns(searchInput ? searchInput.value : "");
            return true;
          } else {
            showModal({
              title: "Error",
              icon: "fa-triangle-exclamation",
              htmlContent: `<div class="modal-message">Campaign name cannot be empty.</div>`,
              buttons: [{ text: "OK", className: "", onClick: () => openCampaignModal(campaignId) }],
            });
            return false;
          }
        },
      },
    ],
  });
}

function toggleCustomDropdown(e) {
  e.stopPropagation();
  const dropdown = document.getElementById("modal-campaign-type-dropdown");
  if (dropdown) {
    dropdown.classList.toggle("open");
  }
}

function selectCustomDropdownOption(value, labelText, e) {
  e.stopPropagation();
  const hiddenInput = document.getElementById("modal-campaign-type");
  const labelEl = document.getElementById("custom-dropdown-label");
  const dropdown = document.getElementById("modal-campaign-type-dropdown");

  if (hiddenInput) hiddenInput.value = value;
  if (labelEl) labelEl.innerText = labelText;

  const options = document.querySelectorAll(".custom-dropdown-option");
  options.forEach((opt) => {
    if (opt.getAttribute("data-value") === value) {
      opt.classList.add("selected");
    } else {
      opt.classList.remove("selected");
    }
  });

  if (dropdown) dropdown.classList.remove("open");
}

window.addEventListener("click", () => {
  const dropdown = document.getElementById("modal-campaign-type-dropdown");
  if (dropdown) dropdown.classList.remove("open");
});

function confirmDeleteCampaign(campaignId) {
  const camp = db.campaigns.find((c) => c.id === campaignId);
  showModal({
    title: "Delete Campaign",
    icon: "fa-triangle-exclamation",
    htmlContent: `<div class="modal-message">Are you sure you want to delete campaign <strong>"${camp ? camp.name : ""}"</strong>? All associated planet records and logs will be permanently removed.</div>`,
    buttons: [
      { text: "Cancel", className: "btn-secondary" },
      {
        text: '<i class="fa-solid fa-trash"></i> Delete',
        className: "btn-danger",
        onClick: () => {
          db.campaigns = db.campaigns.filter((c) => c.id !== campaignId);
          saveData();
          const searchInput = document.getElementById("campaign-search");
          renderCampaigns(searchInput ? searchInput.value : "");
          if (currentCampaignId === campaignId) {
            switchView("main-menu-view");
          }
        },
      },
    ],
  });
}

function selectCampaign(id) {
  currentCampaignId = id;
  const campaign = db.campaigns.find((c) => c.id === id);
  if (campaign) {
    if (!campaign.log999) campaign.log999 = {};
    const titleEl = document.getElementById("current-campaign-title");
    if (titleEl) titleEl.innerText = campaign.name;
    renderPlanets();
    updateDashboardLogCount();
    switchView("campaign-view");
  }
}

function getCurrentCampaign() {
  return db.campaigns.find((c) => c.id === currentCampaignId);
}

function updateDashboardLogCount() {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.log999) campaign.log999 = {};

  const sysConfig = getActiveSystemsConfig(campaign);
  const btnLabelEl = document.getElementById("dash-log-btn-label");
  const countEl = document.getElementById("dash-log-count");
  const descEl = document.getElementById("dash-log-desc");

  if (sysConfig.type === "cards") {
    let loggedCount = Object.values(campaign.log999).filter((s) => (s.notes && s.notes.trim().length > 0) || (s.title && s.title.trim().length > 0)).length;
    if (btnLabelEl) btnLabelEl.innerText = "Deadly Frontier Cards";
    if (countEl) countEl.innerText = `${loggedCount}/${sysConfig.cards.length}`;
    if (descEl) descEl.innerText = `Manage Deadly Frontier campaign cards and logbook notes.`;
  } else {
    let visitedCount = Object.values(campaign.log999).filter((s) => s.visited).length;
    if (btnLabelEl) btnLabelEl.innerText = sysConfig.title;
    if (countEl) countEl.innerText = `${visitedCount}/${sysConfig.systems.length}`;
    if (descEl) descEl.innerText = `Track visited star systems, jumps, and connection routes via ${sysConfig.title}.`;
  }
}

function openLogModal() {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.log999) campaign.log999 = {};
  const sysConfig = getActiveSystemsConfig(campaign);

  if (sysConfig.type === "cards") {
    openDeadlyFrontierCardsModal();
  } else {
    openFullscreenMapModal(sysConfig);
  }
}

function openDeadlyFrontierCardsModal() {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.log999) campaign.log999 = {};
  const sysConfig = getActiveSystemsConfig(campaign);

  let cardsHtml = "";
  sysConfig.cards.forEach((card) => {
    const cardData = campaign.log999[card.id] || { notes: "", title: "" };
    const displayTitle = card.id === "df13" ? "WASP-14" : cardData.title || card.title || "";
    const hasContent = (cardData.notes && cardData.notes.trim().length > 0) || (displayTitle && displayTitle.trim().length > 0);
    cardsHtml += `
      <div class="df-card-item ${hasContent ? "active-card" : ""}" onclick="openDeadlyFrontierCardDetailModal('${card.id}')">
          ${hasContent ? '<div class="df-card-notes-dot"></div>' : ""}
          <span class="df-card-number">[ ${card.num} ]</span>
          ${displayTitle ? `<span class="df-card-subtitle">${displayTitle}</span>` : ""}
      </div>
    `;
  });

  showModal({
    title: "Deadly Frontier Campaign Cards",
    icon: "fa-clone",
    isFullscreen: true,
    hideTitle: true,
    htmlContent: `
      <div style="display: flex; flex-direction: column; height: 100%;">
          <div class="modal-header-nav">
              <div class="modal-header-nav-title-group">
                  <i class="fa-solid fa-route" style="color: var(--accent-red); font-size: 1.1rem; flex-shrink: 0;"></i>
                  <div class="modal-header-nav-text">
                      <span class="modal-header-main-title">STAR SYSTEMS LOG</span>
                      <span class="modal-header-sub-title">DEADLY FRONTIER</span>
                  </div>
              </div>
              <button class="btn btn-danger btn-sm" onclick="closeModal()">
                  <i class="fa-solid fa-xmark"></i> Close
              </button>
          </div>
          <div class="df-fullscreen-viewport">
              <div style="width: 100%; max-width: 560px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                  <p style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; text-align: center;">Select a card to view and edit its notes:</p>
                  <div class="df-grid-container">
                      ${cardsHtml}
                  </div>
              </div>
          </div>
      </div>
    `,
    buttons: [],
  });
}

function openDeadlyFrontierCardDetailModal(cardId) {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  const sysConfig = getActiveSystemsConfig(campaign);
  const card = sysConfig.cards.find((c) => c.id === cardId);
  const cardData = campaign.log999[cardId] || { notes: "", title: "" };

  const isCard13 = cardId === "df13";
  const currentTitle = isCard13 ? "WASP-14" : cardData.title !== undefined ? cardData.title : card.title || "";

  showModal({
    title: "Card Log Detail",
    icon: "fa-note-sticky",
    hideTitle: true,
    htmlContent: `
      <div class="card-detail-header-banner">
          <span class="card-detail-tag">
              <i class="fa-solid fa-layer-group"></i> Deadly Frontier Card Record
          </span>
          <div class="card-detail-title-text">
              CARD [ ${card.num} ]
          </div>
      </div>
      <label style="margin-bottom: 6px;"><i class="fa-solid fa-star"></i> Star System / Card Name ${isCard13 ? '<span style="color: var(--accent-red); font-size: 0.55rem;">(Fixed)</span>' : ""}</label>
      <input type="text" id="modal-df-card-title" value="${currentTitle}" ${isCard13 ? 'readonly style="opacity: 0.7; cursor: not-allowed; margin-bottom: 14px;"' : 'placeholder="" style="margin-bottom: 14px;"'}>

      <label style="margin-bottom: 6px;"><i class="fa-solid fa-note-sticky"></i> Card Logbook & Notes</label>
      <textarea id="modal-df-card-notes" placeholder="Record discoveries, log entries, or ongoing consequences for this card..." style="min-height: 180px; font-size: 0.9rem; line-height: 1.5; padding: 12px;">${cardData.notes || ""}</textarea>
    `,
    buttons: [
      {
        text: '<i class="fa-solid fa-arrow-left"></i> Back',
        className: "btn-secondary",
        keepOpen: true,
        onClick: () => {
          openDeadlyFrontierCardsModal();
        },
      },
      {
        text: '<i class="fa-solid fa-floppy-disk"></i> Save',
        className: "",
        keepOpen: true,
        onClick: () => {
          const notesEl = document.getElementById("modal-df-card-notes");
          const titleInput = document.getElementById("modal-df-card-title");
          const notesVal = notesEl ? notesEl.value : "";
          const titleVal = isCard13 ? "WASP-14" : titleInput ? titleInput.value.trim() : "";

          if (!campaign.log999[cardId]) {
            campaign.log999[cardId] = { notes: "", title: "" };
          }
          campaign.log999[cardId].notes = notesVal;
          campaign.log999[cardId].title = titleVal;
          saveData();
          openDeadlyFrontierCardsModal();
          updateDashboardLogCount();
        },
      },
    ],
  });
}

let mapScale = 1;
let mapPanX = 0;
let mapPanY = 0;
let isDraggingMap = false;
let startDragX = 0;
let startDragY = 0;

function openFullscreenMapModal(sysConfig) {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.log999) campaign.log999 = {};

  let visitedCount = Object.values(campaign.log999).filter((s) => s.visited).length;

  const modal = document.getElementById("custom-modal");
  const boxWrapper = document.getElementById("modal-box-wrapper");
  const modalContent = document.getElementById("modal-content");
  const modalTitle = document.getElementById("modal-title");
  const modalButtons = document.getElementById("modal-buttons");

  if (!modal || !boxWrapper || !modalContent) return;

  boxWrapper.className = "modal-box modal-fullscreen";
  if (modalTitle) modalTitle.innerHTML = "";
  if (modalButtons) modalButtons.innerHTML = "";

  modalContent.innerHTML = `
    <div class="modal-content-scroll" style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div style="position: absolute; top: 12px; left: 12px; right: 12px; display: flex; justify-content: space-between; align-items: center; z-index: 100; pointer-events: none; gap: 6px;">
            <div style="background: rgba(10, 14, 26, 0.92); backdrop-filter: blur(8px); border: 1px solid var(--panel-border); padding: 8px 12px; border-radius: 6px; display: flex; flex-wrap: wrap; gap: 4px 8px; align-items: center; pointer-events: auto; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);">
                <span id="modal-log-counter" style="font-size: 0.7rem; color: var(--accent-red); font-weight: bold; white-space: nowrap;">${sysConfig.title}: ${visitedCount} / ${sysConfig.systems.length} Visited</span>
                <span style="font-size: 0.6rem; color: var(--text-muted); opacity: 0.8; white-space: nowrap;">Pan to Navigate</span>
            </div>
            <div style="display: flex; gap: 6px; pointer-events: auto; flex-shrink: 0;">
                <button class="btn btn-secondary btn-sm" onclick="resetMapTransform()" title="Reset View"><i class="fa-solid fa-rotate-right"></i></button>
                <button class="btn btn-danger btn-sm" id="map-close-btn" title="Close Map"><i class="fa-solid fa-xmark"></i> Close</button>
            </div>
        </div>

        <div class="log999-fullscreen-viewport" id="map-viewport" style="width: 100%; height: 100%; flex: 1; border: none; border-radius: 0;">
            <div class="log999-pan-zoom-container" id="map-canvas">
                <svg class="log999-svg-layer" id="log999-svg"></svg>
            </div>
        </div>
    </div>
  `;

  modal.classList.add("active");

  const closeBtn = document.getElementById("map-close-btn");
  if (closeBtn) {
    closeBtn.onclick = () => {
      closeModal();
      updateDashboardLogCount();
      const searchInput = document.getElementById("campaign-search");
      renderCampaigns(searchInput ? searchInput.value : "");
    };
  }

  initMapPanAndZoom();
  renderLogMapContent(sysConfig);
}

function initMapPanAndZoom() {
  const viewport = document.getElementById("map-viewport");
  const canvas = document.getElementById("map-canvas");
  if (!viewport || !canvas) return;

  mapScale = 0.85;
  mapPanX = 0;
  mapPanY = 0;
  updateMapTransform();

  viewport.onmousedown = (e) => {
    if (e.target.closest(".system-node")) return;
    e.preventDefault();
    isDraggingMap = true;
    startDragX = e.clientX - mapPanX;
    startDragY = e.clientY - mapPanY;
  };

  window.onmousemove = (e) => {
    if (!isDraggingMap) return;
    mapPanX = e.clientX - startDragX;
    mapPanY = e.clientY - startDragY;
    updateMapTransform();
  };

  window.onmouseup = () => {
    isDraggingMap = false;
  };

  viewport.addEventListener(
    "touchstart",
    (e) => {
      if (e.target.closest(".system-node")) return;
      if (e.touches.length === 1) {
        e.preventDefault();
        isDraggingMap = true;
        startDragX = e.touches[0].clientX - mapPanX;
        startDragY = e.touches[0].clientY - mapPanY;
      }
    },
    { passive: false },
  );

  viewport.addEventListener(
    "touchmove",
    (e) => {
      if (!isDraggingMap || e.touches.length !== 1) return;
      e.preventDefault();
      mapPanX = e.touches[0].clientX - startDragX;
      mapPanY = e.touches[0].clientY - startDragY;
      updateMapTransform();
    },
    { passive: false },
  );

  window.addEventListener("touchend", () => {
    isDraggingMap = false;
  });

  viewport.onwheel = (e) => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    if (e.deltaY < 0) {
      mapScale = Math.min(mapScale * (1 + zoomIntensity), 2.5);
    } else {
      mapScale = Math.max(mapScale * (1 - zoomIntensity), 0.4);
    }
    updateMapTransform();
  };
}

function updateMapTransform() {
  const canvas = document.getElementById("map-canvas");
  if (canvas) {
    canvas.style.transform = `translate(${mapPanX}px, ${mapPanY}px) scale(${mapScale})`;
  }
}

function resetMapTransform() {
  mapScale = 0.85;
  mapPanX = 0;
  mapPanY = 0;
  updateMapTransform();
}

function renderLogMapContent(sysConfig) {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.log999) campaign.log999 = {};

  const canvas = document.getElementById("map-canvas");
  const svgLayer = document.getElementById("log999-svg");
  if (!canvas || !svgLayer) return;

  canvas.querySelectorAll(".system-node").forEach((n) => n.remove());
  svgLayer.innerHTML = "";

  let visitedCount = 0;

  sysConfig.connections.forEach((conn) => {
    const sysA = sysConfig.systems.find((s) => s.id === conn.from);
    const sysB = sysConfig.systems.find((s) => s.id === conn.to);
    if (!sysA || !sysB) return;

    const isAVisited = campaign.log999[conn.from]?.visited;
    const isBVisited = campaign.log999[conn.to]?.visited;
    const isBothVisited = isAVisited && isBVisited;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", `${sysA.x}`);
    line.setAttribute("y1", `${sysA.y}`);
    line.setAttribute("x2", `${sysB.x}`);
    line.setAttribute("y2", `${sysB.y}`);

    if (conn.dashed) line.classList.add("dashed-line");
    if (isBothVisited) line.classList.add("active-connection");

    svgLayer.appendChild(line);
  });

  sysConfig.systems.forEach((sys) => {
    const sysData = campaign.log999[sys.id] || { visited: false, notes: "" };
    if (sysData.visited) visitedCount++;

    const node = document.createElement("div");
    node.className = `system-node ${sysData.visited ? "visited" : ""}`;
    node.style.left = `${sys.x}px`;
    node.style.top = `${sys.y}px`;

    const hasNotes = sysData.notes && sysData.notes.trim().length > 0;

    node.innerHTML = `
      ${hasNotes ? '<div class="notes-indicator"><i class="fa-solid fa-pencil"></i></div>' : ""}
      <span class="node-name">${sys.name}</span>
      <span class="node-status">
          <i class="fa-solid ${sysData.visited ? "fa-flag" : "fa-location-dot"}"></i>
          ${sysData.visited ? "VISITED" : "UNMAPPED"}
      </span>
    `;

    node.onclick = (e) => {
      e.stopPropagation();
      openSystemDetailModal(sys.id, sysConfig);
    };
    canvas.appendChild(node);
  });

  const counterEl = document.getElementById("modal-log-counter");
  if (counterEl) {
    counterEl.innerText = `${sysConfig.title}: ${visitedCount} / ${sysConfig.systems.length} Visited`;
  }
}

function openSystemDetailModal(systemId, sysConfig) {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  const sys = sysConfig.systems.find((s) => s.id === systemId);
  const sysData = campaign.log999[systemId] || { visited: false, notes: "" };

  showModal({
    title: sys.name,
    icon: "fa-location-dot",
    htmlContent: `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; background: var(--input-bg); padding: 10px; border-radius: 6px;">
          <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-main);">Status: ${sysData.visited ? '<span style="color: #fca5a5;"><i class="fa-solid fa-flag"></i> Visited</span>' : '<span style="color: var(--text-muted);">Unmapped</span>'}</span>
          <button class="btn btn-sm ${sysData.visited ? "btn-secondary" : "btn-success"}" onclick="toggleSystemVisitedAndRefresh('${systemId}')">
              <i class="fa-solid ${sysData.visited ? "fa-xmark" : "fa-flag"}"></i> ${sysData.visited ? "Unmark" : "Mark Visited"}
          </button>
      </div>
      <label><i class="fa-solid fa-note-sticky"></i> Outbound System Notes</label>
      <textarea id="modal-system-notes" placeholder="Log system conditions, coordinates, or hazards..." style="min-height: 140px;">${sysData.notes || ""}</textarea>
    `,
    buttons: [
      {
        text: '<i class="fa-solid fa-arrow-left"></i> Back',
        className: "btn-secondary",
        keepOpen: true,
        onClick: () => {
          openFullscreenMapModal(sysConfig);
        },
      },
      {
        text: '<i class="fa-solid fa-floppy-disk"></i> Save',
        className: "",
        keepOpen: true,
        onClick: () => {
          const notesEl = document.getElementById("modal-system-notes");
          const notesVal = notesEl ? notesEl.value : "";
          if (!campaign.log999[systemId]) {
            campaign.log999[systemId] = { visited: false, notes: "" };
          }
          campaign.log999[systemId].notes = notesVal;
          saveData();
          openFullscreenMapModal(sysConfig);
        },
      },
    ],
  });
}

function toggleSystemVisitedAndRefresh(systemId) {
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.log999[systemId]) {
    campaign.log999[systemId] = { visited: false, notes: "" };
  }
  campaign.log999[systemId].visited = !campaign.log999[systemId].visited;
  saveData();
  const sysConfig = getActiveSystemsConfig(campaign);
  openSystemDetailModal(systemId, sysConfig);
}

function renderPlanets(filter = "") {
  const campaign = getCurrentCampaign();
  const list = document.getElementById("planet-list");
  if (!campaign || !list) return;

  const planets = campaign.planets || [];
  const query = filter.toLowerCase();
  const filtered = planets.filter((p) => p.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    list.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 12px; font-size: 0.75rem;">No planet records match your search.</p>`;
    return;
  }

  let html = "";
  filtered.forEach((p) => {
    html += `
      <div class="planet-card-item">
          <div class="planet-info" onclick="openPlanetForm('${p.id}')">
              <h3 style="font-size: 0.9rem; color: var(--text-main);"><i class="fa-solid fa-globe" style="color: var(--accent-red); margin-right: 6px;"></i> ${p.name}</h3>
              <span style="font-size: 0.62rem; color: var(--text-muted);">Threats: ${p.threats ? p.threats.filter((t) => t.name).length : 0} | POIs: ${p.pois ? p.pois.filter((pObj) => pObj.name).length : 0}</span>
          </div>
          <div class="planet-actions">
              <button class="btn btn-secondary btn-sm" onclick="openPlanetForm('${p.id}')" title="Edit Planet Log">
                  <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-danger btn-sm" onclick="confirmDeletePlanet('${p.id}')" title="Delete Planet Log">
                  <i class="fa-solid fa-trash"></i>
              </button>
          </div>
      </div>
    `;
  });
  list.innerHTML = html;
}

function filterPlanets() {
  const searchInput = document.getElementById("planet-search");
  if (searchInput) renderPlanets(searchInput.value);
}

function openPlanetForm(planetId) {
  editingPlanetId = planetId;
  const form = document.getElementById("planet-record-form");
  if (form) form.reset();
  buildPoiRows();

  const deleteBtn = document.getElementById("delete-planet-btn");
  const planetIdInput = document.getElementById("planet-id");

  if (planetId) {
    if (deleteBtn) deleteBtn.style.display = "inline-flex";
    const campaign = getCurrentCampaign();
    const planet = campaign ? campaign.planets.find((p) => p.id === planetId) : null;

    if (planet) {
      if (planetIdInput) planetIdInput.value = planet.id;
      const nameInput = document.getElementById("planet-name");
      const notesInput = document.getElementById("planet-notes");
      if (nameInput) nameInput.value = planet.name;
      if (notesInput) notesInput.value = planet.notes || "";

      const discInputs = document.querySelectorAll(".disc-slot");
      if (planet.discoveries) {
        planet.discoveries.forEach((val, idx) => {
          if (discInputs[idx]) discInputs[idx].value = val;
        });
      }

      const threatSecs = document.querySelectorAll(".threat-sec");
      const threatNams = document.querySelectorAll(".threat-nam");
      if (planet.threats) {
        planet.threats.forEach((t, idx) => {
          if (threatSecs[idx]) threatSecs[idx].value = t.sec || "";
          if (threatNams[idx]) threatNams[idx].value = t.name || "";
        });
      }

      const poiSecInputs = document.querySelectorAll(".poi-sec-input");
      const poiNameInputs = document.querySelectorAll(".poi-name-input");
      if (planet.pois) {
        planet.pois.forEach((pObj, idx) => {
          if (poiSecInputs[idx]) poiSecInputs[idx].value = pObj.sec || "";
          if (poiNameInputs[idx]) poiNameInputs[idx].value = pObj.name || "";
        });
      }
    }
  } else {
    if (deleteBtn) deleteBtn.style.display = "none";
    if (planetIdInput) planetIdInput.value = "";
  }

  switchView("planet-form-view");
}

function savePlanetRecord(e) {
  e.preventDefault();
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  if (!campaign.planets) campaign.planets = [];

  const planetIdInput = document.getElementById("planet-id");
  const nameInput = document.getElementById("planet-name");
  const notesInput = document.getElementById("planet-notes");

  const id = planetIdInput && planetIdInput.value ? planetIdInput.value : "planet_" + Date.now();
  const name = nameInput ? nameInput.value.trim() : "";
  const notes = notesInput ? notesInput.value : "";

  const discoveries = Array.from(document.querySelectorAll(".disc-slot")).map((i) => i.value);

  const threatSecs = document.querySelectorAll(".threat-sec");
  const threatNams = document.querySelectorAll(".threat-nam");
  let threats = [];
  for (let i = 0; i < threatSecs.length; i++) {
    threats.push({ sec: threatSecs[i].value, name: threatNams[i].value });
  }

  const poiSecInputs = document.querySelectorAll(".poi-sec-input");
  const poiNameInputs = document.querySelectorAll(".poi-name-input");
  let pois = [];
  for (let i = 0; i < poiSecInputs.length; i++) {
    pois.push({
      sec: poiSecInputs[i].value,
      name: poiNameInputs[i].value,
    });
  }

  const planetData = { id, name, discoveries, threats, pois, notes };

  if (editingPlanetId) {
    const index = campaign.planets.findIndex((p) => p.id === editingPlanetId);
    if (index !== -1) campaign.planets[index] = planetData;
  } else {
    campaign.planets.push(planetData);
  }

  saveData();
  renderPlanets();
  switchView("campaign-view");
}

function confirmDeletePlanet(targetId = null) {
  const idToDelete = targetId || editingPlanetId;
  const campaign = getCurrentCampaign();
  if (!campaign) return;
  const planet = campaign.planets.find((p) => p.id === idToDelete);

  showModal({
    title: "Confirm Deletion",
    icon: "fa-triangle-exclamation",
    htmlContent: `<div class="modal-message">Are you sure you want to delete the planet log for <strong>"${planet ? planet.name : ""}"</strong>? This action cannot be undone.</div>`,
    buttons: [
      { text: "Cancel", className: "btn-secondary" },
      {
        text: '<i class="fa-solid fa-trash"></i> Delete',
        className: "btn-danger",
        onClick: () => {
          campaign.planets = campaign.planets.filter((p) => p.id !== idToDelete);
          saveData();
          renderPlanets();
          switchView("campaign-view");
        },
      },
    ],
  });
}

renderCampaigns();
