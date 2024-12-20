// Scroll-to-Top Button
document.addEventListener("DOMContentLoaded", () => {
    // Membuat tombol scroll to top
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.textContent = "⬆";
    document.body.appendChild(scrollTopBtn);

    // Menampilkan tombol saat pengguna menggulir ke bawah
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Fungsi scroll ke atas
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Animasi pada setiap artikel saat muncul di layar
const posts = document.querySelectorAll(".post");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.1 });

posts.forEach(post => {
    observer.observe(post);
});
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Inisialisasi EmailJS
    emailjs.init("b6bZmYXJTY5fGj3M6");

    // Kirim form dengan EmailJS
    emailjs.sendForm('service_p1cvjs8', 'template_d3bs9mr', this)
        .then(function () {
            alert('Message sent successfully!');
        }, function (error) {
            alert('Failed to send message: ' + error.text);
        });
});
