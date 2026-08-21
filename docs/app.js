(function () {
  const config = window.SEMINAR_CONFIG || {};
  const form = document.querySelector("#registration-form");
  const status = document.querySelector("#form-status");
  const scheduleContainer = document.querySelector("#schedule-options");
  const submitButton = document.querySelector(".submit-button");
  const githubInput = document.querySelector("#github_username");

  function renderScheduleOptions() {
    if (!scheduleContainer) return;

    const options = Array.isArray(config.scheduleOptions) ? config.scheduleOptions : [];
    scheduleContainer.innerHTML = "";

    if (options.length === 0) {
      const message = document.createElement("p");
      message.className = "schedule-empty";
      message.textContent = "Schedule options will appear here once candidate meeting times are defined. You may register now; we will ask/notify registered participants when the schedule poll opens.";
      scheduleContainer.append(message);
      return;
    }

    const prompt = document.createElement("p");
    prompt.className = "help";
    prompt.textContent = "Select every time at which you could regularly attend.";
    scheduleContainer.append(prompt);

    options.forEach((option) => {
      if (!option || !option.id || !option.label) return;

      const label = document.createElement("label");
      label.className = "checkbox-row";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "schedule_availability";
      input.value = option.id;

      const text = document.createElement("span");
      text.textContent = option.label;

      label.append(input, text);
      scheduleContainer.append(label);
    });
  }

  function setStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.dataset.type = type || "";
  }

  function normalizeGitHubUsername() {
    if (!githubInput) return;
    githubInput.value = githubInput.value.trim().replace(/^@+/, "");
  }

  async function submitForm(event) {
    event.preventDefault();
    normalizeGitHubUsername();

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete the required fields before submitting.", "error");
      return;
    }

    if (!config.registrationEndpoint) {
      setStatus("Registration submission is not yet activated. The form is available for testing, and organizers still need to configure a private form endpoint.", "error");
      return;
    }

    const endpoint = String(config.registrationEndpoint);
    if (!/^https:\/\//i.test(endpoint)) {
      setStatus("Registration is not active because the configured endpoint is not HTTPS.", "error");
      return;
    }

    const formData = new FormData(form);
    submitButton.disabled = true;
    setStatus("Submitting registration...", "pending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Registration service returned an error.");
      }

      form.reset();
      renderScheduleOptions();
      setStatus("Thank you. Your registration has been received. We will contact participants about schedule options and GitHub collaboration.", "success");
    } catch (error) {
      setStatus("Registration could not be submitted. Please try again later or contact the organizers through the GitHub repository.", "error");
    } finally {
      submitButton.disabled = false;
    }
  }

  renderScheduleOptions();
  if (form) {
    form.addEventListener("submit", submitForm);
  }
})();
