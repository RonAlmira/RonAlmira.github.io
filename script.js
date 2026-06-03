const header = document.querySelector(".site-header");
const year = document.querySelector("[data-year]");
const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector(".copy-status");
const email = "ronsbusiness20@gmail.com";

if (year) {
  year.textContent = new Date().getFullYear();
}

const setHeaderState = () => {
  if (!header) return;
  header.dataset.elevated = window.scrollY > 12 ? "true" : "false";
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Email copied.";
    } catch {
      copyStatus.textContent = email;
    }
  });
}
