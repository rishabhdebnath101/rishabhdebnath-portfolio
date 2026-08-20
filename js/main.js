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
      const projectUrl = p.url || `work/${p.slug || p.id}/`;
      const toolsHtml = p.tools.map((t) => `<span class="tool-chip">${t}</span>`).join("");
      return `
      <article class="project-card" data-project-id="${p.id || p.slug}">
        <a href="${projectUrl}" class="project-card-link-overlay" aria-label="View case study on ${p.title}"></a>
        <div class="project-media-wrap">
          <img src="${p.image}" alt="${p.title} - ${p.projectType}" loading="lazy" />
          <div class="project-badge-group">
            <span class="project-category-badge">${p.category}</span>
            <span class="project-type-badge">${p.projectType}</span>
          </div>
        </div>
        <div class="project-body">
          <h3 class="project-title">
            <a href="${projectUrl}">${p.title}</a>
          </h3>
          <p class="project-subtitle">${p.subtitle}</p>
          <p class="project-summary">${p.summary}</p>
          <div class="project-tools">${toolsHtml}</div>
          <div class="project-footer">
            <a href="${projectUrl}" class="btn btn-secondary btn-sm">
              <span>View Case Study</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
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
  const articlesList = (typeof BLOG_DATA !== "undefined" && BLOG_DATA.articles) 
    ? BLOG_DATA.articles 
    : (PORTFOLIO_DATA.articles || []);

  if (!container || !articlesList.length) return;

  container.innerHTML = articlesList
    .map(
      (a) => `
    <article class="blog-card" data-article-slug="${a.slug}">
      <a href="${a.url || `blog/${a.slug}/`}" class="blog-card-link-overlay" aria-label="Read analysis on ${a.title}"></a>
      <div class="blog-meta">
        <span class="blog-category">${a.category}</span>
        <span class="blog-readtime">${a.readTime}</span>
      </div>
      <h3 class="blog-title">
        <a href="${a.url || `blog/${a.slug}/`}">${a.title}</a>
      </h3>
      <p class="blog-excerpt">${a.excerpt || a.description}</p>
      <div class="blog-link">
        <span>Read Analysis</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </article>
  `
    )
    .join("");
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

/* Resume Modal Function */
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

/* --------------------------------------------------------------------------
   9. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const btnSpan = submitBtn ? submitBtn.querySelector("span") : null;
  const originalBtnText = btnSpan ? btnSpan.textContent : "Send Message";
  const statusDiv = document.getElementById("form-status");

  let isSubmitting = false;

  function setStatus(message, type) {
    if (!statusDiv) return;
    statusDiv.textContent = message;
    statusDiv.className = `form-status ${type}`;
    statusDiv.style.display = "flex";
  }

  function clearStatus() {
    if (!statusDiv) return;
    statusDiv.textContent = "";
    statusDiv.className = "form-status";
    statusDiv.style.display = "none";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;

    clearStatus();

    const nameInput = form.querySelector("#contact-name");
    const emailInput = form.querySelector("#contact-email");
    const messageInput = form.querySelector("#contact-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    // Client-side validation
    if (!name || !email || !message) {
      setStatus("Please fill in all required fields.", "error");
      showToast("Please fill in all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus("Please enter a valid email address.", "error");
      showToast("Please enter a valid email address.");
      return;
    }

    // Set submitting state
    isSubmitting = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      if (btnSpan) btnSpan.textContent = "Sending...";
    }

    try {
      const endpoint = form.action || "https://formspree.io/f/YOUR_FORM_ID";
      const formData = new FormData(form);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("Message sent successfully. I'll get back to you soon.", "success");
        showToast("Message sent successfully!");
      } else {
        setStatus(
          "Something went wrong. Please try again or email me directly at rishabhdebnath101@gmail.com.",
          "error"
        );
        showToast("Unable to send message.");
      }
    } catch (err) {
      setStatus(
        "Something went wrong. Please try again or email me directly at rishabhdebnath101@gmail.com.",
        "error"
      );
      showToast("Network error. Please try again.");
    } finally {
      isSubmitting = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        if (btnSpan) btnSpan.textContent = originalBtnText;
      }
    }
  });
}

/* --------------------------------------------------------------------------
   10. Copy & Clipboard Actions
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyEmailBtns = document.querySelectorAll(".copy-email-trigger");
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const email = "rishabhdebnath101@gmail.com";
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast("Email address copied to clipboard!");
        })
        .catch(() => {
          showToast("rishabhdebnath101@gmail.com");
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
