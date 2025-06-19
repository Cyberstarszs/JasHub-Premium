const platformSelect = document.getElementById('platform');
const serviceSelect = document.getElementById('service');
const pricingOptions = document.getElementById('pricingOptions');
const pricingGrid = document.getElementById('pricingGrid');
const accountLinkGroup = document.getElementById('accountLinkGroup');
const videoLinkGroup = document.getElementById('videoLinkGroup');
const accountLinkInput = document.getElementById('account-link');
const videoLinkInput = document.getElementById('video-link');
const pricingDisplay = document.getElementById('pricingDisplay');
const totalPriceElement = document.getElementById('totalPrice');
const orderBtn = document.getElementById('orderBtn');

const WHATSAPP_NUMBER = '6281324919799';

const pricingData = {
    'Instagram': {
        'Followers': [
            { quantity: 50, price: 1465 },
            { quantity: 100, price: 2930 },
            { quantity: 200, price: 5860 },
            { quantity: 300, price: 8790 },
            { quantity: 400, price: 11720 },
            { quantity: 500, price: 14650 },
            { quantity: 600, price: 17579 },
            { quantity: 700, price: 20509 },
            { quantity: 800, price: 23439 },
            { quantity: 900, price: 26368 },
            { quantity: 1000, price: 29298 },
            { quantity: 3000, price: 87893 }
        ],
        'Likes': [
            { quantity: 50, price: 1465 },
            { quantity: 100, price: 2930 },
            { quantity: 200, price: 5860 },
            { quantity: 300, price: 8790 },
            { quantity: 400, price: 11720 },
            { quantity: 500, price: 14650 },
            { quantity: 600, price: 17579 },
            { quantity: 700, price: 20509 },
            { quantity: 800, price: 23439 },
            { quantity: 900, price: 26368 },
            { quantity: 1000, price: 29298 }
        ],
        'Views': [
            { quantity: 15000, price: 7000 },
            { quantity: 20000, price: 10000 },
            { quantity: 30000, price: 12000 },
            { quantity: 40000, price: 14000 },
            { quantity: 50000, price: 16000 }
        ]
    },
    'Tiktok': {
        'Followers': [
            { quantity: 50, price: 1465 },
            { quantity: 100, price: 2930 },
            { quantity: 200, price: 5860 },
            { quantity: 300, price: 8790 },
            { quantity: 400, price: 11720 },
            { quantity: 500, price: 14650 },
            { quantity: 600, price: 17579 },
            { quantity: 700, price: 20509 }
        ],
        'Likes': [
            { quantity: 50, price: 1465 },
            { quantity: 100, price: 2930 },
            { quantity: 200, price: 5860 },
            { quantity: 300, price: 8790 },
            { quantity: 400, price: 11720 },
            { quantity: 500, price: 14650 },
            { quantity: 600, price: 17579 },
            { quantity: 700, price: 20509 },
            { quantity: 800, price: 23439 },
            { quantity: 900, price: 26368 },
            { quantity: 1000, price: 29298 }
        ],
        'Views': [
            { quantity: 15000, price: 7000 },
            { quantity: 20000, price: 10000 },
            { quantity: 30000, price: 12000 },
            { quantity: 40000, price: 14000 },
            { quantity: 50000, price: 16000 }
        ]
    }
};

function initApp() {
    setupEventListeners();
    hideLinkInputs();
}

function hideLinkInputs() {
    accountLinkGroup.classList.add('hidden');
    videoLinkGroup.classList.add('hidden');
    pricingOptions.classList.add('hidden');
    pricingDisplay.classList.remove('active');
    orderBtn.disabled = true;
}

function setupEventListeners() {
    platformSelect.addEventListener('change', function() {
        if (this.value) {
            serviceSelect.disabled = false;
            serviceSelect.value = '';
            hideLinkInputs();
        } else {
            serviceSelect.disabled = true;
            hideLinkInputs();
        }
    });

    serviceSelect.addEventListener('change', function() {
        if (this.value && platformSelect.value) {
            showPricingOptions(platformSelect.value, this.value);
        } else {
            hideLinkInputs();
        }
    });

    orderBtn.addEventListener('click', placeOrder);
}

function showPricingOptions(platform, service) {
    pricingOptions.classList.remove('hidden');
    pricingGrid.innerHTML = '';

    const pricingData = {
        'Instagram': {
            'Followers': [
                { quantity: 50, price: 4000 },
                { quantity: 100, price: 7000 },
                { quantity: 200, price: 9000 },
                { quantity: 300, price: 12000 },
                { quantity: 400, price: 15000 },
                { quantity: 500, price: 18000 },
                { quantity: 600, price: 21000 },
                { quantity: 700, price: 24000 },
                { quantity: 800, price: 27000 },
                { quantity: 900, price: 30000 },
                { quantity: 1000, price: 33000 },
                { quantity: 3000, price: 92000 }
            ],
            'Likes': [
                { quantity: 150, price: 6000 },
                { quantity: 200, price: 8000 },
                { quantity: 300, price: 10000 },
                { quantity: 400, price: 12000 },
                { quantity: 500, price: 14000 },
                { quantity: 600, price: 16000 },
                { quantity: 700, price: 18000 },
                { quantity: 800, price: 20000 },
                { quantity: 900, price: 22000 },
                { quantity: 1000, price: 24000 }
            ],
            'Views': [
                { quantity: 15000, price: 7000 },
                { quantity: 20000, price: 10000 },
                { quantity: 30000, price: 12000 },
                { quantity: 40000, price: 14000 },
                { quantity: 50000, price: 16000 }
            ]
        },
        'Tiktok': {
            'Followers': [
                { quantity: 100, price: 8000 },
                { quantity: 200, price: 12000 },
                { quantity: 300, price: 17000 },
                { quantity: 400, price: 21000 },
                { quantity: 500, price: 26000 },
                { quantity: 600, price: 30000 },
                { quantity: 700, price: 35000 }
            ],
            'Likes': [
                { quantity: 150, price: 6000 },
                { quantity: 200, price: 8000 },
                { quantity: 300, price: 10000 },
                { quantity: 400, price: 12000 },
                { quantity: 500, price: 14000 },
                { quantity: 600, price: 16000 },
                { quantity: 700, price: 18000 },
                { quantity: 800, price: 20000 },
                { quantity: 900, price: 22000 },
                { quantity: 1000, price: 24000 }
            ],
            'Views': [
                { quantity: 15000, price: 7000 },
                { quantity: 20000, price: 10000 },
                { quantity: 30000, price: 12000 },
                { quantity: 40000, price: 14000 },
                { quantity: 50000, price: 16000 }
            ]
        }
    };

    const packages = pricingData[platform][service];

    packages.forEach(pkg => {
        const option = document.createElement('div');
        option.className = 'pricing-option';
        option.dataset.price = pkg.price;
        option.dataset.service = service;
        option.innerHTML = `
            <div class="quantity">${pkg.quantity.toLocaleString('id-ID')}</div>
            <div class="price">Rp${pkg.price.toLocaleString('id-ID')}</div>
        `;

        option.addEventListener('click', function() {
            document.querySelectorAll('.pricing-option').forEach(el => el.classList.remove('selected'));
            this.classList.add('selected');

            totalPriceElement.textContent = `Rp${pkg.price.toLocaleString('id-ID')}`;
            pricingDisplay.classList.add('active');

            // Logic tampilkan input sesuai layanan
            accountLinkGroup.classList.add('hidden');
            videoLinkGroup.classList.add('hidden');

            if (service === 'Followers') {
                accountLinkGroup.classList.remove('hidden');
            } else if (service === 'Likes' || service === 'Views') {
                videoLinkGroup.classList.remove('hidden');
            }

            orderBtn.disabled = false;
        });

        pricingGrid.appendChild(option);
    });

    // Tambah gaya keren pada select
    platformSelect.style.background = 'linear-gradient(135deg, #2563eb, #1d4ed8)';
    platformSelect.style.color = '#fff';
    platformSelect.style.border = 'none';
    platformSelect.style.padding = '12px 16px';
    platformSelect.style.borderRadius = '12px';
    platformSelect.style.fontWeight = '600';
    platformSelect.style.fontSize = '1rem';
    platformSelect.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    platformSelect.style.cursor = 'pointer';
}




function formatIndonesianDate(date) {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
}

function placeOrder() {
    if (!validateForm()) {
        alert('Silakan lengkapi semua data pemesanan terlebih dahulu');
        return;
    }

    const platform = platformSelect.options[platformSelect.selectedIndex].text;
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;
    const selectedOption = document.querySelector('.pricing-option.selected');
    const price = selectedOption.dataset.price;
    const quantity = selectedOption.querySelector('.quantity').textContent;
    const accountLink = accountLinkInput.value;
    const videoLink = videoLinkInput.value;
    const currentDate = formatIndonesianDate(new Date());

    let message = `✅ *PENGISIAN DATA PESANAN*\n\n`;
    message += `${currentDate}\n\n`;
    message += `*Jenis Pesanan:* ${service} ${platform}\n`;
    message += `*Jumlah:* ${quantity}\n`;
    message += `*Total:* Rp${price}\n\n`;
    message += `*Target Akun:*\n\n`;
    message += `🔗: ${accountLink}\n`;

    if (service === 'Likes' || service === 'Views') {
        message += `📹: ${videoLink || 'Tidak diisi'}\n`;
    }

    message += `\n📣: Pastikan akun tidak private selama proses berlangsung\n\n`;
    message += `*Grup Garansi & Layanan Lain:*\n`;
    message += `https://chat.whatsapp.com/Js1OixDAAsUA8ZqHQvP84P\n\n`;
    message += `Terima kasih telah menggunakan layanan kami!\n`;
    message += `❓ Butuh bantuan atau kendala? Silakan hubungi admin via grup garansi.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

function validateForm() {
    return (
        platformSelect.value &&
        serviceSelect.value &&
        document.querySelector('.pricing-option.selected') &&
        accountLinkInput.value
    );
}

document.addEventListener('DOMContentLoaded', initApp);