document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("flowerIntro");
  const petals = document.getElementById("floatingPetals");
  const phone = "6285717558503";
  const messageTemplate = (name) => `Halo ka aku mau pesan bucket bunga ${name} 1 yaa`;

  setTimeout(() => intro.classList.add("hide"), 1900);

  function createPetal() {
    const petal = document.createElement("span");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${(Math.random() - .5) * 260}px`);
    petal.style.animationDuration = `${7 + Math.random() * 7}s`;
    petals.appendChild(petal);
    setTimeout(() => petal.remove(), 16000);
  }
  for (let i = 0; i < 12; i++) setTimeout(createPetal, i * 280);
  setInterval(createPetal, 1800);

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:.14});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const visual = document.querySelector(".hero-visual");
  document.querySelector(".hero").addEventListener("mousemove", e => {
    if (innerWidth < 850) return;
    const x = (e.clientX / innerWidth - .5) * 10;
    const y = (e.clientY / innerHeight - .5) * 8;
    visual.style.transform = `translate(${x}px,${y}px)`;
  });
  document.querySelector(".hero").addEventListener("mouseleave", () => visual.style.transform = "");

  // Language
  const translations = {
    id: {
      nav_home:"Home",nav_shop:"Shop",nav_about:"About",nav_promo:"Promo",nav_journal:"Journal",nav_contact:"Contact",
      nav_cta:"Shop Bunga",hero_eyebrow:"FLOWERS WITH FEELING",
      hero_title:'Let every <em>petal</em><br>tell a story.',
      hero_text:"Bouquet yang dirangkai dengan hati untuk perayaan kecil, momen bermakna, dan segala hal di antaranya.",
      hero_cta:"Lihat Koleksi",hero_link:"Cerita kami",hero_note:'Dirangkai dengan cinta<br><small>Bunga segar • Setiap hari</small>',
      slider_eyebrow:"FLOWER INSPIRATION",slider_title:'Meet the flowers<br><em>behind every bouquet.</em>',
      slider_text:"Geser untuk menemukan bunga favoritmu dan pilih bouquet yang paling cocok untuk momenmu.",
      collection_eyebrow:"OUR COLLECTION",collection_title:'Made for your<br><em>beautiful moments.</em>',
      collection_text:"Rangkaian sederhana dan elegan untuk membuat hari biasa terasa sedikit lebih istimewa.",
      promo_title:'A little more love<br><em>for your first bouquet.</em>',promo_text:"Dapatkan 10% off untuk first order dengan kode PETALIA10.",promo_cta:"Ambil Promo",
      story_eyebrow:"THE PETALIA STORY",story_title:'Flowers are a quiet way of saying <em>“I care.”</em>',
      story_text:"Petalia lahir dari satu ide sederhana: bunga tidak harus berlebihan untuk menjadi tak terlupakan. Kami memadukan bunga segar dengan desain yang hangat, natural, dan personal.",
      story_link:"Kenal Aura",journal_title:'Little notes about<br><em>flowers & feelings.</em>',journal_text:"Inspirasi singkat tentang bunga, cara merawatnya, dan ide memberi bunga untuk orang tersayang.",
      quote:'Where flowers bloom,<br><em>beautiful things begin.</em>',contact_title:'Let’s make<br><em>something bloom.</em>',
      contact_text:"Punya momen spesial yang ingin dibuat lebih berkesan?",wa_tooltip:"Chat Petalia di WhatsApp",
      search_label:"SEARCH PETALIA",search_title:"Find your perfect bloom.",search_placeholder:"Cari bunga, bouquet, atau koleksi...",
      cart_title:"Keranjang Belanja",cart_empty:"Keranjangmu masih kosong.",cart_total:"Total",checkout:"Pesan via WhatsApp",add_cart:"+ Tambah ke keranjang",footer:"Made with flowers & feeling ✿"
    },
    en: {
      nav_home:"Home",nav_shop:"Shop",nav_about:"About",nav_promo:"Promo",nav_journal:"Journal",nav_contact:"Contact",
      nav_cta:"Shop Flowers",hero_eyebrow:"FLOWERS WITH FEELING",
      hero_title:'Let every <em>petal</em><br>tell a story.',
      hero_text:"Thoughtfully arranged bouquets for little celebrations, meaningful moments, and everything in between.",
      hero_cta:"Discover Collection",hero_link:"Our story",hero_note:'Handcrafted with love<br><small>Fresh blooms • Every day</small>',
      slider_eyebrow:"FLOWER INSPIRATION",slider_title:'Meet the flowers<br><em>behind every bouquet.</em>',
      slider_text:"Swipe through our favorite blooms and find the bouquet that fits your moment.",
      collection_eyebrow:"OUR COLLECTION",collection_title:'Made for your<br><em>beautiful moments.</em>',
      collection_text:"Simple, elegant arrangements designed to make ordinary days feel a little more special.",
      promo_title:'A little more love<br><em>for your first bouquet.</em>',promo_text:"Get 10% off your first order with code PETALIA10.",promo_cta:"Shop the promo",
      story_eyebrow:"THE PETALIA STORY",story_title:'Flowers are a quiet way of saying <em>“I care.”</em>',
      story_text:"Petalia began with one simple idea: flowers don't need to be extravagant to be unforgettable. We pair fresh blooms with warm, natural, personal design.",
      story_link:"Meet Aura",journal_title:'Little notes about<br><em>flowers & feelings.</em>',journal_text:"Small notes about flowers, care tips, and thoughtful ideas for giving blooms to someone you love.",
      quote:'Where flowers bloom,<br><em>beautiful things begin.</em>',contact_title:'Let’s make<br><em>something bloom.</em>',
      contact_text:"Have a special moment you'd like to make more memorable?",wa_tooltip:"Chat with Aura on WhatsApp",
      search_label:"SEARCH PETALIA",search_title:"Find your perfect bloom.",search_placeholder:"Search flowers, bouquets, or collections...",
      cart_title:"Shopping Cart",cart_empty:"Your cart is empty.",cart_total:"Total",checkout:"Order via WhatsApp",add_cart:"+ Add to cart",footer:"Made with flowers & feeling ✿"
    }
  };
  let currentLang = "id";
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "id" ? "id" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
    renderCart();
    updateSearchResults();
  }
  document.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

  // Slider
  const slider = document.getElementById("flowerSlider");
  const slides = [...document.querySelectorAll(".flower-slide")];
  const dots = document.getElementById("sliderDots");
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Go to slide ${i+1}`);
    dot.addEventListener("click", () => slider.scrollTo({left: slides[i].offsetLeft - slider.offsetLeft - 8, behavior:"smooth"}));
    dots.appendChild(dot);
  });
  function updateDots() {
    const index = Math.round(slider.scrollLeft / Math.max(1, slides[0].offsetWidth + 18));
    [...dots.children].forEach((d,i) => d.classList.toggle("active", i === Math.min(index, dots.children.length-1)));
  }
  slider.addEventListener("scroll", updateDots);
  document.getElementById("sliderNext").addEventListener("click", () => slider.scrollBy({left: slides[0].offsetWidth + 18, behavior:"smooth"}));
  document.getElementById("sliderPrev").addEventListener("click", () => slider.scrollBy({left: -(slides[0].offsetWidth + 18), behavior:"smooth"}));

  // Search
  const searchPanel = document.getElementById("searchPanel");
  const searchInput = document.getElementById("searchInput");
  document.getElementById("searchOpen").addEventListener("click", () => { searchPanel.classList.add("open"); searchInput.focus(); });
  document.getElementById("searchClose").addEventListener("click", () => searchPanel.classList.remove("open"));
  searchPanel.addEventListener("click", e => { if (e.target === searchPanel) searchPanel.classList.remove("open"); });
  const products = [...document.querySelectorAll(".product-card")];
  function updateSearchResults() {
    const q = searchInput.value.trim().toLowerCase();
    const results = document.getElementById("searchResults");
    if (!q) {
      results.innerHTML = `<div class="search-result"><span>${currentLang === "id" ? "Ketik nama bunga atau bouquet untuk mencari." : "Type a flower or bouquet name to search."}</span></div>`;
      return;
    }
    const found = products.filter(p => p.dataset.name.toLowerCase().includes(q));
    results.innerHTML = found.length
      ? found.map(p => `<a class="search-result" href="#shop" data-close-search><span>${p.querySelector("h3").textContent}</span><small>$${p.dataset.price}</small></a>`).join("")
      : `<div class="search-result"><span>${currentLang === "id" ? "Belum menemukan koleksi itu." : "No collection found."}</span></div>`;
    results.querySelectorAll("[data-close-search]").forEach(a => a.addEventListener("click", () => searchPanel.classList.remove("open")));
  }
  searchInput.addEventListener("input", updateSearchResults);

  // Cart
  let cart = [];
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("drawerOverlay");
  function openCart() { drawer.classList.add("open"); overlay.classList.add("open"); }
  function closeCart() { drawer.classList.remove("open"); overlay.classList.remove("open"); }
  document.getElementById("cartOpen").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);

  document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.product, price = Number(btn.dataset.price);
      cart.push({name, price});
      renderCart();
      openCart();
    });
  });
  function renderCart() {
    document.getElementById("cartCount").textContent = cart.length;
    const box = document.getElementById("cartItems");
    if (!cart.length) {
      box.innerHTML = `<div class="empty-cart">${translations[currentLang].cart_empty}</div>`;
    } else {
      box.innerHTML = cart.map((item,i) => `
        <div class="cart-row">
          <div><h4>${item.name}</h4><p>1 ${currentLang === "id" ? "bucket" : "bouquet"}</p><button class="remove-item" data-remove="${i}">${currentLang === "id" ? "Hapus" : "Remove"}</button></div>
          <strong>$${item.price}</strong>
        </div>`).join("");
      box.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => { cart.splice(Number(btn.dataset.remove),1); renderCart(); }));
    }
    const total = cart.reduce((sum,item) => sum + item.price, 0);
    document.getElementById("cartTotal").textContent = `$${total}`;
    const names = cart.map(x => x.name).join(", ");
    const text = cart.length
      ? `Halo ka aku mau pesan bucket bunga ${names} ${cart.length} yaa`
      : messageTemplate(".......");
    document.getElementById("checkoutBtn").href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  setLanguage("id");
  renderCart();
});
