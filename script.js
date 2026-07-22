// ======================================
// Dark Mode Toggle
// ======================================

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Cek tema yang tersimpan
if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
} else {
    html.classList.remove("dark");
}

// Ketika tombol diklik
themeToggle.addEventListener("click", () => {

    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});


// ======================================
// EmailJS
// ======================================

// Inisialisasi EmailJS
emailjs.init({
    publicKey: "Z6yBd6lMa1MyZm64j",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.innerHTML = "Mengirim...";

    emailjs.sendForm(
        "service_9l0z0kn",
        "template_6j7mlio",
        form
    )
    .then(() => {

        alert("✅ Pesan berhasil dikirim!");

        form.reset();

    })
    .catch((error) => {

        console.error(error);

        alert("❌ Gagal mengirim pesan.");

    })
    .finally(() => {

        button.disabled = false;
        button.innerHTML = `
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Kirim Pesan
        `;

    });

});