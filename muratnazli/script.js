// 1. SAYAÇ (10 Ekim 2025)
const startDate = new Date("October 10, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// 2. UÇUŞAN KALPLER
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4-7 saniye arası sürer
    heart.style.fontSize = Math.random() * 1 + 1 + "rem"; // Boyutlar farklı olsun
    
    document.getElementById("hearts-container").appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 7000);
}
setInterval(createHeart, 800); // Her 0.8 saniyede bir yeni kalp üret

// 3. NEDEN SENİ SEVİYORUM BUTONU
const quotes = [
    "Çünkü gülüşün günümü aydınlatıyor.",
    "Çünkü benim en huzurlu limanım sensin.",
    "Seninle her şey daha anlamlı ve güzel.",
    "Bana dünyadaki en özel insan olduğumu hissettiriyorsun.",
    "İçimi ısıtan o bakışlarını çok seviyorum.",
    "Hayatımdaki en güzel detaysın."
];

document.getElementById("love-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("love-quote").innerText = quotes[randomIndex];
});

// 4. DAKTİLO EFEKTİ
const text = "Seninle geçen her saniye, en güzel şarkının en sevdiğim nakaratı gibi... İyi ki varsın.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Yazma hızı (50ms)
    }
}
// Sayfa yüklendikten biraz sonra daktilo başlasın
setTimeout(typeWriter, 1500);
