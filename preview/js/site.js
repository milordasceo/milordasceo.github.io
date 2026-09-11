const OBJECTS = [
  { slug: "lc-sever", title: "Логистический центр «Север»", location: "Новосибирск", year: 2024, area: 18400, kind: "warehouse", kindLabel: "Склад", mixLabel: "Кварцевый стопинг", image: "images/logistics.jpg", gallery: ["images/logistics.jpg", "images/hero.jpg", "images/docks.jpg"], lead: "Ровный ход ричтрака на 18 тысяч квадратов без пыли и заплаток на швах.", body: "Класс нагрузки под интенсивный вилочный поток. Кварцевая смесь, затирка диском и лопастями в две смены, нарезка карты 6×6. Сдали с контролем нивелиром по сетке.", load: "Вилочная техника, 5 т/ось" },
  { slug: "upak-kemerovo", title: "Цех пищевой упаковки", location: "Кемерово", year: 2025, area: 6200, kind: "production", kindLabel: "Производство", mixLabel: "Корундовый стопинг", image: "images/food.jpg", gallery: ["images/food.jpg", "images/surface.jpg", "images/spread.jpg"], lead: "Гигиеничный закрытый верх, уклоны к трапам, без цементного молока на стеллажах.", body: "Пищевое производство: влажная уборка, жёсткие требования к пыли. Корунд, пропитка по швам, уклоны 1% к лоткам.", load: "Тележки, мойка, средняя абразивность" },
  { slug: "metal-tomsk", title: "Корпус металлообработки", location: "Томск", year: 2023, area: 4100, kind: "production", kindLabel: "Производство", mixLabel: "Металлический стопинг", image: "images/metal.jpg", gallery: ["images/metal.jpg", "images/trowel.jpg", "images/surface.jpg"], lead: "Удар, стружка, разворот погрузчика — металлический верх, который не садится коркой.", body: "Зоны станков и проезда 5-тонника. Металлический заполнитель, локальное утолщение в местах разворота.", load: "Удар, масло, погрузчик 5 т" },
  { slug: "parking-rechnoy", title: "Паркинг ТЦ «Речной»", location: "Красноярск", year: 2024, area: 9600, kind: "parking", kindLabel: "Паркинг", mixLabel: "Кварцевый стопинг", image: "images/parking.jpg", gallery: ["images/parking.jpg", "images/surface.jpg", "images/docks.jpg"], lead: "Два этажа подземного паркинга: закрытая поверхность, разметка легла без сколов кромки.", body: "Цикл «бетон — стопинг — швы — разметка». Кварц на основной площади, корунд на въезде из‑за соли.", load: "Легковой поток, соль на въезде" },
  { slug: "cold-barnaul", title: "Холодильный склад", location: "Барнаул", year: 2025, area: 3800, kind: "cold", kindLabel: "Холод", mixLabel: "Корундовый стопинг", image: "images/cold.jpg", gallery: ["images/cold.jpg", "images/logistics.jpg", "images/surface.jpg"], lead: "Контур +2 °C. Пол сдан до монтажа дверей — без трещин после выхода на режим.", body: "Холод требует дисциплины в уходе. Корунд, карта швов чаще обычного. После набора холода трещин по полю нет.", load: "Ричтрак, температурный цикл" },
  { slug: "plant-omsk", title: "Производственный корпус", location: "Омск", year: 2022, area: 12800, kind: "production", kindLabel: "Производство", mixLabel: "Кварцевый стопинг", image: "images/docks.jpg", gallery: ["images/docks.jpg", "images/spread.jpg", "images/hero.jpg"], lead: "Один контур, две захватки, сдача под монтаж линий без перекладки карт.", body: "Большой пролёт, доки, зона ОТК. Кварц на основной площади, корунд на доковой зоне.", load: "Смешанный: производство + доки" },
];

const MIXES = [
  { id: "quartz", name: "Кварц", price: 2400, hint: "Склады, паркинги, логистика" },
  { id: "corundum", name: "Корунд", price: 3100, hint: "Производства, абразив" },
  { id: "metal", name: "Металл", price: 3900, hint: "Удар, тяжёлая техника" },
];

const ru = new Intl.NumberFormat("ru-RU");
const rub = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
const area = (n) => `${ru.format(n)}\u00a0м²`;

const MARK = `<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><circle cx="16" cy="16" r="2.35"/><path d="M14.35 3.4h3.3c.55 0 .95.45.95 1v8.55c0 .7-.55 1.2-1.25 1.2h-2.7c-.7 0-1.25-.5-1.25-1.2V4.4c0-.55.4-1 .95-1Z"/><path d="M14.35 3.4h3.3c.55 0 .95.45.95 1v8.55c0 .7-.55 1.2-1.25 1.2h-2.7c-.7 0-1.25-.5-1.25-1.2V4.4c0-.55.4-1 .95-1Z" transform="rotate(90 16 16)"/><path d="M14.35 3.4h3.3c.55 0 .95.45.95 1v8.55c0 .7-.55 1.2-1.25 1.2h-2.7c-.7 0-1.25-.5-1.25-1.2V4.4c0-.55.4-1 .95-1Z" transform="rotate(180 16 16)"/><path d="M14.35 3.4h3.3c.55 0 .95.45.95 1v8.55c0 .7-.55 1.2-1.25 1.2h-2.7c-.7 0-1.25-.5-1.25-1.2V4.4c0-.55.4-1 .95-1Z" transform="rotate(270 16 16)"/></svg>`;

function page() {
  const p = location.pathname.split("/").pop() || "index.html";
  return p === "" ? "index.html" : p;
}

function initHeader() {
  const header = document.querySelector(".header");
  const menu = document.getElementById("menu");
  const btn = document.getElementById("menuBtn");
  if (!header) return;
  const onScroll = () => header.classList.toggle("solid", scrollY > 20 || page() !== "index.html");
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
      document.body.style.overflow = open ? "hidden" : "";
      header.classList.add("solid");
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      menu.classList.remove("open");
      document.body.style.overflow = "";
    }));
  }
}

function objCard(o) {
  return `<a class="obj-card" href="objects.html?slug=${o.slug}">
    <div class="thumb"><img src="${o.image}" alt="${o.title}"></div>
    <div class="obj-meta"><span>${o.location} · ${o.year}</span><span class="area">${area(o.area)}</span></div>
    <h3>${o.title}</h3>
    <p class="mix">${o.mixLabel}</p>
  </a>`;
}

function initObjects() {
  const grid = document.getElementById("objGrid");
  if (!grid) return;
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  if (slug) {
    const o = OBJECTS.find((x) => x.slug === slug);
    const detail = document.getElementById("objDetail");
    const list = document.getElementById("objList");
    if (o && detail && list) {
      list.classList.add("hidden");
      detail.classList.remove("hidden");
      document.title = `${o.title} — Синие лопасти`;
      detail.innerHTML = `
        <div class="hero-obj">
          <img src="${o.image}" alt="${o.title}">
          <div class="veil"></div>
          <div class="wrap copy">
            <a href="objects.html" class="muted">← Все объекты</a>
            <p class="kicker" style="margin-top:1.2rem">${o.location} · ${o.year}</p>
            <h1 class="title">${o.title}</h1>
          </div>
        </div>
        <div class="wrap" style="margin-top:2.5rem;display:grid;gap:2.5rem">
          <div class="split split-7-5">
            <div>
              <p style="font-size:1.125rem">${o.lead}</p>
              <p class="muted">${o.body}</p>
            </div>
            <dl class="spec">
              <div><dt>Площадь</dt><dd>${area(o.area)}</dd></div>
              <div><dt>Тип</dt><dd>${o.kindLabel}</dd></div>
              <div><dt>Смесь</dt><dd>${o.mixLabel}</dd></div>
              <div><dt>Нагрузка</dt><dd>${o.load}</dd></div>
              <div><dt>Год</dt><dd>${o.year}</dd></div>
            </dl>
          </div>
          <div class="gallery">${o.gallery.map((src, i) => `<img src="${src}" alt="${o.title}, кадр ${i + 1}">`).join("")}</div>
          <div>
            <h2 class="title" style="font-size:1.5rem">Ещё объекты</h2>
            <div class="obj-grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
              ${OBJECTS.filter((x) => x.slug !== o.slug).slice(0, 3).map(objCard).join("")}
            </div>
          </div>
        </div>`;
    }
    return;
  }
  const render = (kind = "all") => {
    const list = kind === "all" ? OBJECTS : OBJECTS.filter((o) => o.kind === kind);
    grid.innerHTML = list.map(objCard).join("");
  };
  render();
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("on"));
      btn.classList.add("on");
      render(btn.dataset.filter);
    });
  });
}

function initHomeObjects() {
  const grid = document.getElementById("homeObjects");
  if (grid) grid.innerHTML = OBJECTS.slice(0, 4).map(objCard).join("");
  const track = document.getElementById("marquee");
  if (track) {
    const imgs = OBJECTS.map((o) => `<img src="${o.image}" alt="">`).join("");
    track.innerHTML = imgs + imgs;
  }
}

function initQuote() {
  const form = document.getElementById("quoteForm");
  if (!form) return;
  const areaEl = document.getElementById("area");
  const areaVal = document.getElementById("areaVal");
  const est = document.getElementById("estVal");
  const mixBox = document.getElementById("mixes");
  let mix = MIXES[0];
  mixBox.innerHTML = MIXES.map((m, i) => `
    <button type="button" class="mix-btn${i === 0 ? " on" : ""}" data-mix="${m.id}">
      <span><b>${m.name}</b><br><small class="muted">${m.hint}</small></span>
      <span class="muted">${rub.format(m.price)}/м²</span>
    </button>`).join("");
  const paint = () => {
    const a = Number(areaEl.value);
    areaVal.textContent = area(a);
    const mid = a * mix.price;
    est.textContent = `${rub.format(Math.round(mid * 0.92))} – ${rub.format(Math.round(mid * 1.08))}`;
  };
  mixBox.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-mix]");
    if (!btn) return;
    mix = MIXES.find((m) => m.id === btn.dataset.mix) || mix;
    mixBox.querySelectorAll(".mix-btn").forEach((b) => b.classList.toggle("on", b === btn));
    paint();
  });
  areaEl.addEventListener("input", paint);
  paint();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (name.length < 2 || phone.length < 6) {
      alert("Укажите имя и телефон — перезвоним в рабочее время.");
      return;
    }
    form.innerHTML = `<p class="kicker">Заявка ушла</p>
      <h3>Считаем объект, не КП из шаблона.</h3>
      <p class="muted">${area(Number(areaEl.value))}, ${mix.name.toLowerCase()}. Напишем или позвоним по номеру ${phone}.</p>`;
  });
}

function initCount() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const value = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const run = () => {
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { el.textContent = ru.format(value) + suffix; return; }
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1100);
        el.textContent = ru.format(Math.round(value * (1 - (1 - t) ** 3))) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHomeObjects();
  initObjects();
  initQuote();
  initCount();
});
