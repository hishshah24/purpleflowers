const waNumber = "6281515521739";
const danaNumber = "+62 856-0663-7038";
const price = 15000;
let cart = [];
let userEmail = "";

// 12 Jenis Bunga Fresh
const flowerData = [
    { name: "Tulip Lilac Dream", img: "img/bunga1.jpg" },
    { name: "Mawar Kapas Putih", img: "img/bunga2.jpg" },
    { name: "Edelweiss Abadi", img: "img/bunga3.jpg" },
    { name: "Melati Suci", img: "img/bunga4.jpg" },
    { name: "Matahari Peach", img: "img/bunga5.jpg" },
    { name: "Lavender Cold Mist", img: "img/bunga6.jpg" },
    { name: "Tulip Pink Candy", img: "img/bunga7.jpg" },
    { name: "Mawar Peach Pastel", img: "img/bunga8.jpg" },
    { name: "Orchid Purple Glow", img: "img/bunga9.jpg" },
    { name: "Daisy Creamy", img: "img/bunga10.jpg" },
    { name: "Peony Soft Lilac", img: "img/bunga11.jpg" },
    { name: "Sakura Cotton", img: "img/bunga12.jpg" }
];

// Login System
document.getElementById('login-btn').addEventListener('click', () => {
    const email = prompt("Masukkan email Gmail Anda untuk akses Purple Flowers:");
    if (email && email.includes("@gmail.com")) {
        userEmail = email;
        document.getElementById('login-overlay').classList.add('hidden');
        document.getElementById('navbar').classList.remove('hidden');
        showPage('home');
    } else {
        alert("Akses ditolak! Mohon gunakan akun Gmail yang valid ✨");
    }
});

// Navigation System
function showPage(pageId) {
    if (!userEmail) return;
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${pageId}`).classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Render 12 Produk Otomatis
function renderKatalog() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = "";
    
    flowerData.forEach((flower, index) => {
        const card = document.createElement('div');
        card.className = "product-card bg-white shadow-lg";
        card.innerHTML = `
            <div class="img-box shadow-inner">
                <img src="${flower.img}" alt="${flower.name}" onerror="this.src='https://placehold.co/400x500/f3f0ff/9d81d1?text=Fresh+Bloom'">
            </div>
            <h3 class="text-xl font-bold text-purple-900 mb-1">${flower.name}</h3>
            <p class="text-purple-400 font-bold mb-5 font-fancy text-2xl">Rp 15.000</p>
            <button onclick="addToCart('${flower.name}')" class="btn-primary w-full py-4 rounded-full text-sm font-bold uppercase tracking-widest">
                Masukkan Keranjang 🧺
            </button>
        `;
        grid.appendChild(card);
    });
}

// Cart System
function addToCart(name) {
    cart.push(name);
    const cartEl = document.getElementById('floating-cart');
    cartEl.classList.remove('translate-x-[200%]');
    document.getElementById('cart-count').innerText = `${cart.length} Pesanan`;
}

// Checkout to WA & DANA
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) return;

    const total = cart.length * price;
    const list = cart.map((item, i) => `${i + 1}. ${item}`).join('%0A');
    
    const message = `Halo Purple Flowers! 💜🌷%0A%0A` +
                `*LIST PESANAN LAPAK:*%0A${list}%0A%0A` +
                `*TOTAL TAGIHAN:* Rp ${total.toLocaleString('id-ID')}%0A` +
                `*EMAIL PEMBELI:* ${userEmail}%0A%0A` +
                `----------------------------%0A` +
                `*METODE PEMBAYARAN DANA:*%0A` +
                `NOMOR: ${danaNumber}%0A%0A` +
                `Tolong dikirim yang paling fresh ya Kak! ✨🍬`;
    
    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    location.reload();
});

renderKatalog();
