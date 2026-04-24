// İLİŞKİ BAŞLAMA TARİHİ (10.10.2025)
// Format: "10 10, 2025 HH:MM:SS"
const startDate = new Date("October 10, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - startDate; // Geçen süre

    // Zaman hesaplamaları
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Ekrana yazdırma (sıfır ekleme)
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Sayacı her saniye güncelle
setInterval(updateCountdown, 1000);

// Sayfa yüklendiğinde hemen çalıştır
updateCountdown();
