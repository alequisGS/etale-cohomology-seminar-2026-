(function () {
  const config = window.SEMINAR_CONFIG || {};
  const container = document.querySelector("#google-form-container");
  const openButton = document.querySelector("#open-google-form");

  function isHttpsUrl(value) {
    return typeof value === "string" && /^https:\/\//i.test(value);
  }

  function renderGoogleForm() {
    if (!container) return;

    const embedUrl = String(config.googleFormEmbedUrl || "").trim();
    const viewUrl = String(config.googleFormViewUrl || "").trim();

    container.innerHTML = "";

    if (openButton) {
      if (isHttpsUrl(viewUrl)) {
        openButton.href = viewUrl;
        openButton.hidden = false;
      } else {
        openButton.hidden = true;
      }
    }

    if (!embedUrl && !viewUrl) {
      const message = document.createElement("div");
      message.className = "form-placeholder";
      message.innerHTML = `
        <h3>Registration form setup is in progress.</h3>
        <p>The Google Form will appear here once the organizer adds the form URLs to <code>docs/config.js</code>.</p>
        <p><a class="text-link" href="https://github.com/alequisGS/etale-cohomology-seminar-2026-/blob/main/organizer/GOOGLE_FORM_SETUP.md">Organizer setup guide →</a></p>
      `;
      container.append(message);
      return;
    }

    if (isHttpsUrl(embedUrl)) {
      const iframe = document.createElement("iframe");
      iframe.className = "google-form-frame";
      iframe.src = embedUrl;
      iframe.title = "Étale Cohomology Seminar 2026 registration form";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      container.append(iframe);
      return;
    }

    const fallback = document.createElement("div");
    fallback.className = "form-placeholder";
    fallback.innerHTML = `
      <h3>Open registration in Google Forms.</h3>
      <p>The embedded form URL is not configured yet, but the public registration link is available.</p>
    `;
    container.append(fallback);
  }

  renderGoogleForm();
})();
