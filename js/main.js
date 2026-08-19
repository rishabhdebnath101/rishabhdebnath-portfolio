/**
 * Rishabh Debnath — SEO & GEO Specialist Portfolio
 * Interactive Logic: Modals, Scrollspy, Dynamic Rendering & UI Actions
 */

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initNavigation();
  initProjectsRender();
  initApproachRender();
  initSkillsRender();
  initCertificationsRender();
  initBlogRender();
  initModals();
  initContactForm();
  initCopyActions();
});

/* --------------------------------------------------------------------------
   1. Header Scroll & Glass Effect
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Scrollspy & Navigation
   -------------------------------------------------------------------------- */
function initNavigation() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const closeDrawerBtn = document.getElementById("close-drawer");

  // Scrollspy observer
  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${currentId}` || (currentId === "projects" && href === "#work")) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // Mobile Drawer Controls
  const toggleDrawer = (open) => {
    if (open) {
      mobileDrawer.classList.add("active");
      drawerBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      mobileDrawer.classList.remove("active");
      drawerBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (mobileToggle) mobileToggle.addEventListener("click", () => toggleDrawer(true));
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", () => toggleDrawer(false));
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", () => toggleDrawer(false));

  // Close mobile drawer on link click
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  // Back to Top button
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* --------------------------------------------------------------------------
   3. Render Projects / Case Studies
   -------------------------------------------------------------------------- */
function initProjectsRender() {
  const container = document.getElementById("projects-container");
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects
    .map((p) => {
      const toolsHtml = p.tools.map((t) => `<span class="tool-chip">${t}</span>`).join("");
      return `
      <article class="project-card" data-project-id="${p.id}">
        <div class="project-media-wrap">
          <img src="${p.image}" alt="${p.title} - ${p.projectType}" loading="lazy" />
          <div class="project-badge-group">
            <span class="project-category-badge">${p.category}</span>
            <span class="project-type-badge">${p.projectType}</span>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-subtitle">${p.subtitle}</p>
          <p class="project-summary">${p.summary}</p>
          <div class="project-tools">${toolsHtml}</div>
          <div class="project-footer">
            <button class="btn btn-secondary btn-sm open-case-study" data-id="${p.id}">
              <span>View Methodology</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  // Attach event listener for modal open
  container.querySelectorAll(".open-case-study").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-id");
      openCaseStudyModal(id);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Render "My Approach" Section
   -------------------------------------------------------------------------- */
function initApproachRender() {
  const container = document.getElementById("approach-container");
  if (!container || !PORTFOLIO_DATA.approach) return;

  container.innerHTML = PORTFOLIO_DATA.approach
    .map((a) => {
      const tagsHtml = a.tags.map((t) => `<span class="tool-chip">${t}</span>`).join("");
      return `
      <div class="approach-process-card">
        <div class="approach-step-num">${a.step}</div>
        <h3 class="approach-process-title">${a.title}</h3>
        <p class="approach-process-desc"><strong>${a.desc}</strong></p>
        <p class="approach-process-desc" style="font-size: 0.88rem;">${a.details}</p>
        <div class="approach-tags">${tagsHtml}</div>
      </div>
    `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   5. Render Skills (4 Categories)
   -------------------------------------------------------------------------- */
function initSkillsRender() {
  const techContainer = document.getElementById("skills-technical-container");
  const contentContainer = document.getElementById("skills-content-container");
  const geoContainer = document.getElementById("skills-geo-container");
  const toolsContainer = document.getElementById("skills-tools-container");

  const renderCards = (items) => {
    if (!items) return "";
    return items
      .map(
        (s) => `
      <div class="skill-item-card">
        <div class="skill-item-top">
          <span class="skill-name">${s.name}</span>
          <span class="skill-level-badge">${s.level}</span>
        </div>
        <p class="skill-desc">${s.desc}</p>
      </div>
    `
      )
      .join("");
  };

  if (techContainer && PORTFOLIO_DATA.skills.technical) {
    techContainer.innerHTML = renderCards(PORTFOLIO_DATA.skills.technical);
  }
  if (contentContainer && PORTFOLIO_DATA.skills.content) {
    contentContainer.innerHTML = renderCards(PORTFOLIO_DATA.skills.content);
  }
  if (geoContainer && PORTFOLIO_DATA.skills.geo) {
    geoContainer.innerHTML = renderCards(PORTFOLIO_DATA.skills.geo);
  }
  if (toolsContainer && PORTFOLIO_DATA.skills.tools) {
    toolsContainer.innerHTML = renderCards(PORTFOLIO_DATA.skills.tools);
  }
}

/* --------------------------------------------------------------------------
   6. Render Certifications
   -------------------------------------------------------------------------- */
function initCertificationsRender() {
  const container = document.getElementById("certifications-container");
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications
    .map((c) => {
      const skillsHtml = c.skills.map((s) => `<span class="tool-chip">${s}</span>`).join("");
      return `
      <div class="cert-card">
        <div class="cert-top">
          <div>
            <span class="cert-issuer">${c.issuer}</span>
            <h3 class="cert-title">${c.title}</h3>
          </div>
          <span class="cert-badge-tag">${c.badge}</span>
        </div>
        <p class="cert-summary">${c.summary}</p>
        <div class="cert-skills-list">${skillsHtml}</div>
      </div>
    `;
    })
    .join("");
}

/* --------------------------------------------------------------------------
   7. Render Blog Articles
   -------------------------------------------------------------------------- */
function initBlogRender() {
  const container = document.getElementById("blog-container");
  if (!container || !PORTFOLIO_DATA.articles) return;

  container.innerHTML = PORTFOLIO_DATA.articles
    .map(
      (a) => `
    <article class="blog-card" data-article-id="${a.id}">
      <div class="blog-meta">
        <span class="blog-category">${a.category}</span>
        <span class="blog-readtime">${a.readTime}</span>
      </div>
      <h3 class="blog-title">${a.title}</h3>
      <p class="blog-excerpt">${a.excerpt}</p>
      <div class="blog-link">
        <span>Read Note</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </article>
  `
    )
    .join("");

  container.querySelectorAll(".blog-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const id = e.currentTarget.getAttribute("data-article-id");
      openArticleModal(id);
    });
  });
}

/* --------------------------------------------------------------------------
   8. Modals (Case Study, Resume, Article)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalCloseBtns = document.querySelectorAll(".close-modal-trigger");

  const closeModal = () => {
    document.querySelectorAll(".modal-overlay").forEach((m) => m.classList.remove("active"));
    document.body.style.overflow = "";
  };

  modalCloseBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Resume Modal Trigger
  const resumeTriggers = document.querySelectorAll(".trigger-resume-modal");
  resumeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });
}

function openCaseStudyModal(id) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
  if (!project) return;

  const modal = document.getElementById("case-study-modal");
  const titleEl = document.getElementById("case-modal-title");
  const subtitleEl = document.getElementById("case-modal-subtitle");
  const bodyEl = document.getElementById("case-modal-body");

  titleEl.textContent = project.title;
  subtitleEl.textContent = `${project.projectType} • ${project.category}`;

  const d = project.details;

  const problemsList = d.problemsIdentified.map((i) => `<li>${i}</li>`).join("");
  const keywordList = d.keywordStrategy.map((i) => `<li>${i}</li>`).join("");
  const geoList = d.geoStrategy.map((i) => `<li>${i}</li>`).join("");
  const techList = d.technicalImprovements.map((i) => `<li>${i}</li>`).join("");

  const metricsHtml = d.outcomesPlaceholder.metrics
    .map(
      (m) => `
    <div class="modal-metric-card">
      <div class="modal-metric-val">${m.value}</div>
      <div class="modal-metric-lbl">${m.label}</div>
    </div>
  `
    )
    .join("");

  bodyEl.innerHTML = `
    <div class="case-section-block">
      <h4 class="case-block-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        Scenario & Problem Diagnostics
      </h4>
      <p>${d.overview}</p>
      <ul class="case-list">${problemsList}</ul>
    </div>

    <div class="case-section-block">
      <h4 class="case-block-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        Keyword & Intent Strategy
      </h4>
      <ul class="case-list">${keywordList}</ul>
    </div>

    <div class="case-section-block">
      <h4 class="case-block-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>
        GEO & Entity Schema Architecture
      </h4>
      <ul class="case-list">${geoList}</ul>
    </div>

    <div class="case-section-block">
      <h4 class="case-block-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        Technical Implementation & Performance
      </h4>
      <ul class="case-list">${techList}</ul>
    </div>

    <div class="case-section-block">
      <h4 class="case-block-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Demonstration Learnings & Target Benchmarks
      </h4>
      <div class="modal-metrics-grid">${metricsHtml}</div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function openArticleModal(id) {
  const article = PORTFOLIO_DATA.articles.find((a) => a.id === id);
  if (!article) return;

  const modal = document.getElementById("article-modal");
  const titleEl = document.getElementById("article-modal-title");
  const subtitleEl = document.getElementById("article-modal-subtitle");
  const bodyEl = document.getElementById("article-modal-body");

  titleEl.textContent = article.title;
  subtitleEl.textContent = `${article.category} • ${article.readTime}`;

  const takeawaysHtml = article.keyTakeaways.map((t) => `<li>${t}</li>`).join("");

  bodyEl.innerHTML = `
    <div class="takeaways-box">
      <h4>Key Takeaways</h4>
      <ul>${takeawaysHtml}</ul>
    </div>
    ${article.fullContent}
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* --------------------------------------------------------------------------
   9. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contact-name").value.trim();
    const email = form.querySelector("#contact-email").value.trim();
    const subject = form.querySelector("#contact-subject").value.trim();
    const message = form.querySelector("#contact-message").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.");
      return;
    }

    const mailtoLink = `mailto:contact@rishabhdebnath.com?subject=${encodeURIComponent(
      subject || "SEO / GEO Opportunity Inquiry"
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    showToast("Message prepared! Opening your email client...", "success");
    setTimeout(() => {
      window.location.href = mailtoLink;
      form.reset();
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   10. Copy & Clipboard Actions
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyEmailBtns = document.querySelectorAll(".copy-email-trigger");
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = "contact@rishabhdebnath.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast("Email address copied to clipboard!");
        })
        .catch(() => {
          showToast("contact@rishabhdebnath.com");
        });
    });
  });
}

/* --------------------------------------------------------------------------
   11. Toast Notification System
   -------------------------------------------------------------------------- */
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 20);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}
