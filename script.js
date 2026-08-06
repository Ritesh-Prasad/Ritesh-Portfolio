 // Dynamic year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Scroll reveal
      const reveals = document.querySelectorAll(".reveal");
      const onScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        reveals.forEach((el) => {
          const boxTop = el.getBoundingClientRect().top;
          if (boxTop < triggerBottom) {
            el.classList.add("visible");
          }
        });
      };
      window.addEventListener("scroll", onScroll);
      onScroll();

      // Mobile menu toggle
      const hamburger = document.querySelector(".hamburger");
      const mobileMenu = document.getElementById("mobile-menu");
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        const isOpen = hamburger.classList.contains("active");
        mobileMenu.style.display = isOpen ? "flex" : "none";
      });

      // Close mobile menu on link click
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          mobileMenu.style.display = "none";
        });
      });

      // Certificate modal
      const certificateModal = document.getElementById("certificateModal");
      const certificateModalImage = document.getElementById(
        "certificateModalImage",
      );
      const certificateModalTitle = document.getElementById(
        "certificateModalTitle",
      );
      const certificateModalDownload = document.getElementById(
        "certificateModalDownload",
      );
      const certificateModalClose = document.getElementById(
        "certificateModalClose",
      );

      const openCertificateModal = (src, title, downloadName) => {
        certificateModalImage.src = src;
        certificateModalImage.alt = title;
        certificateModalTitle.textContent = title;
        certificateModalDownload.href = src;
        certificateModalDownload.setAttribute(
          "download",
          downloadName || title.replace(/\s+/g, "-") + ".jpg",
        );
        certificateModal.classList.add("active");
        certificateModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      };

      const closeCertificateModal = () => {
        certificateModal.classList.remove("active");
        certificateModal.setAttribute("aria-hidden", "true");
        certificateModalImage.src = "";
        document.body.style.overflow = "";
      };

      document.querySelectorAll("[data-cert-src]").forEach((item) => {
        item.addEventListener("click", () => {
          openCertificateModal(
            item.getAttribute("data-cert-src"),
            item.getAttribute("data-cert-title"),
            item.getAttribute("data-cert-download"),
          );
        });
      });

      certificateModalClose.addEventListener("click", closeCertificateModal);

      certificateModal
        .querySelectorAll("[data-close-modal]")
        .forEach((item) => {
          item.addEventListener("click", closeCertificateModal);
        });

      document.addEventListener("keydown", (e) => {
        if (
          e.key === "Escape" &&
          certificateModal.classList.contains("active")
        ) {
          closeCertificateModal();
        }
      });