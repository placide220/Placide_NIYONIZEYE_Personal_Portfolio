// I used this to toggle the navbar for mobile view when the menu button is clicked
document.querySelector('.nav-toggle').onclick = function() {
  document.querySelector('.nav-menu').classList.toggle('active');
};
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
  });
});

// I used this to validate the contact form before submission
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const msg = this.querySelector('.form-message');
  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    return false;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    msg.textContent = "Please enter a valid email address.";
    return false;
  }
  msg.textContent = "Thank you for your message!";
  this.reset();
  return false;
};

// I used this to enable downloading the page as a PDF and hide the contact section during the process
document.getElementById('download-pdf').addEventListener('click', function () {
  const contactSection = document.getElementById('contact');
  contactSection.style.display = 'none'; // I used this to hide the contact section temporarily

  const main = document.querySelector('main');
  html2canvas(main, { backgroundColor: getComputedStyle(document.body).getPropertyValue('--body-color') || '#232b33' }).then(function(canvas) {
    contactSection.style.display = ''; // I used this to show the contact section again after capturing the content

    const imgData = canvas.toDataURL('image/png');
    const pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('NIYONIZEYE_PLACIDE_Resume.pdf');
  });
});

// I used this to toggle dark mode and update the icon based on user preference
const darkModeBtn = document.getElementById('dark-mode-toggle');
if (darkModeBtn) {
  const darkIcon = darkModeBtn.querySelector('i');
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    if (darkIcon) darkIcon.className = 'uil uil-sun';
  } else {
    document.body.classList.remove('dark-mode');
    if (darkIcon) darkIcon.className = 'uil uil-moon';
  }
  darkModeBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
    if (darkIcon) darkIcon.className = isDark ? 'uil uil-sun' : 'uil uil-moon';
  };
}

// I used this to create a spinning words effect for the introduction section
const words = ["a Developer", "a Designer", "a Problem Solver", "a Team Player", "a Fast Learner"];
const spinning = document.getElementById('spinning-words');
let idx = 0;
function spinWords() {
  spinning.textContent = words[idx];
  idx = (idx + 1) % words.length;
}
spinWords();
setInterval(spinWords, 1800);

// I used this to show or hide the scroll-to-top button based on the scroll position
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
// I used this to scroll to the top smoothly when the button is clicked
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
