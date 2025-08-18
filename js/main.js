// Load HTML includes
document.querySelectorAll("[data-include]").forEach(el => {
    fetch(el.getAttribute("data-include"))
        .then(res => res.text())
        .then(html => el.innerHTML = html);
});

// Smooth scroll
window.scrollToSection = function(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

// AJAX form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        messageDiv.textContent = '✅ Your message has been sent successfully!';
        messageDiv.className = 'block text-green-700 bg-green-100 border border-green-300 rounded-md p-3';
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      messageDiv.textContent = '❌ Something went wrong. Please try again.';
      messageDiv.className = 'block text-red-700 bg-red-100 border border-red-300 rounded-md p-3';
    }

    messageDiv.classList.remove('hidden');
    setTimeout(() => {
      messageDiv.classList.add('hidden');
    }, 5000);
  });
});