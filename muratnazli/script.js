// 1. ŞİFRE KONTROLÜ (Başak)
document.getElementById("unlock-btn").addEventListener("click", function() {
    const answer = document.getElementById("zodiac-input").value.trim().toLowerCase();
    
    // "başak" veya "basak" yazarsa kabul et
    if (answer === "başak" || answer === "basak") {
        document.getElementById("secret-door").style.transform = "translateY(-100%)";
        document.getElementById("main-content").style.opacity = "1";
        document.getElementById("main-content").style.pointerEvents = "all";
        
        // Site açılınca daktilo başlasın
        setTimeout(typeWriter, 1000);
        // Kalpler yağmaya başlasın
        setInterval(createHeart, 800);
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
});

// 2. MOBİL DOKUNMA EFEKTİ (4. ÖZELLİK)
document.addEventListener("touchstart", function(e) {
    const touch = e.touches[0];
    const heart = document.createElement("div");
    heart.classList.add("tap-heart");
    heart.innerHTML = "❤️";
    heart.style.left = touch.clientX - 15 + "px";
    heart.style.top = touch.clientY - 15 + "px";
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 800);
});

// 3. DİJİTAL ZARF MESAJLARI (1. ÖZELLİK)
const notes = {
    'özledim': "Sen yanımda yokken zaman hiç geçmiyor gibi... Seni her saniye daha çok özlüyorum Nazlı'm.",
    'mutlu': "Senin mutluluğun benim dünyadaki en büyük huzurum. Hep böyle gülümse sevgilim.",
    'yorgun': "Hemen dinlenmelisin, ben senin yanındayım... İstersen senin için bir şarkı açayım, sadece kapat gözlerini.",
    'seviyorum': "Sana olan aşkım her gün daha da büyüyor. Sen benim hayatımın en güzel hediyesisin."
};

function revealNote(key) {
    const box = document.getElementById("note-display");
    box.innerText = notes[key];
    box.style.display = "block";
}

// 4. SAYAÇ (10 Ekim 2025)
const startDate = new Date("October 10, 2025 00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const distance = now - startDate;
    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}
setInterval(updateCountdown, 1000);

// 5. UÇUŞAN KALPLER (Otomatik Yağmur)
function createHeart() {
    const heart = document.createElement("div");
    heart.style.position = "fixed";
    heart.style.bottom = "-5vh";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.color = "#ffb3c1";
    heart.style.fontSize = Math.random() * 1 + 1 + "rem";
    heart.innerHTML = "❤";
    heart.style.transition = "transform 5s linear, opacity 5s";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = "translateY(-105vh) rotate(360deg)";
        heart.style.opacity = "0";
    }, 100);
    setTimeout(() => { heart.remove(); }, 6000);
}

// 6. SENİ SEVİYORUM ÇÜNKÜ...
const quotes = [
    "Çünkü gülüşün günümü aydınlatıyor.",
    "Çünkü benim en huzurlu limanım sensin.",
    "Seninle her şey daha anlamlı ve güzel.",
    "Hayatımdaki en güzel detaysın."
];
document.getElementById("love-btn").addEventListener("click", () => {
    document.getElementById("love-quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
});

// 7. DAKTİLO
const text = "Seninle geçen her saniye, en güzel şarkının en sevdiğim nakaratı gibi... İyi ki varsın.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
