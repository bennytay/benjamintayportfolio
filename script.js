const emailButton = document.querySelector(".email-button");
const emailStatus = document.querySelector(".email-status");

if (emailButton && emailStatus) {
  emailButton.addEventListener("click", async () => {
    const email = emailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      emailStatus.textContent = "Copied.";
    } catch {
      window.location.href = `mailto:${email}`;
      emailStatus.textContent = "Opening email.";
    }
  });
}
