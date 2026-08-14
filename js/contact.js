/**
 * 2026 Contact & Interaction Module
 * 1-Click Clipboard Copy with Animated Toast Notification
 */

function initContact() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('copy-toast');
  const emailToCopy = 'omar.mohamed.flutter@gmail.com';

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for non-https or older environments
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      showToast();
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });

  let toastTimer;
  function showToast() {
    clearTimeout(toastTimer);
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}
