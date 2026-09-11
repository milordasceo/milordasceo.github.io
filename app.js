const ASSET = (() => {
  const s = document.currentScript;
  return new URL("./", s && s.src ? s.src : location.href).href;
})();
const img = (n) => new URL("images/" + n, ASSET).href;

const company = {
  name: "Синие лопасти",
  phone: "+7 (383) 209-11-40",
  phoneHref: "tel:+73832091140",
  phone2: "+7 (913) 918-40-22",
  phone2Href: "tel:+79139184022",
  email: "hello@sinielopasti.ru",
  telegram: "https://t.me/sinielopasti",
  telegramHandle: "@sinielopasti",
  address: "Новосибирск, ул. Станционная, 60А",
  addressNote: "офис 204, вход со двора",
  hours: "Пн–Сб 8:00–20:00. В сезон заливки — выезд ночью.",
  inn: "5407971840",
  ogrn: "1225400038411",
};

const nav = [
  ["/", "Главная"],
  ["/technology", "Стопинг"],
  ["/process", "Процесс"],
  ["/objects", "Объекты"],
  ["/about", "Компания"],
  ["/contacts", "Контакты"],
];

const stats = [
  ["12", "лет", "на промышленных полах"],
  ["1,2", "млн м²", "устроенных покрытий"],
  ["800+", "м²", "минимальный объект"],
  ["48", "часов", "до заезда техники*"],
];

const services = [
  ["quartz", "Кварцевый стопинг", "Основной пол склада и производства. Кварцевый заполнитель втирается в живой бетон и даёт беспыльную, истираемую поверхность.", "finished.jpg"],
  ["corundum", "Корундовый стопинг", "Для зон с высокой интенсивностью движения: пандусы, доки, комплектация. Твёрдость корунда держит колёса штабелёров.", "docks.jpg"],
  ["metal", "Металлизированный топпинг", "Цех, металлообработка, тяжёлая логистика. Металлический заполнитель — когда кварца уже мало.", "metal.jpg"],
  ["joints", "Швы и герметики", "Нарезка усадочных, устройство деформационных, заполнение полиуретаном. Пол без швов не живёт — швы надо делать правильно.", "joints.jpg"],
  ["cold", "Холодильники и фудтех", "Полы под отрицательные температуры и влажную уборку. Отдельный режим твердения и ухода.", "cold.jpg"],
  ["repair", "Ремонт расслоения", "Отслоившийся топпинг не красят. Вырезаем, переустраиваем, сдаём под ту же нагрузку. Это отдельная дисциплина.", "repair.jpg"],
];

const processSteps = [
  ["01", "Основание и расчёт", "Грунт, пирог, нагрузки от стеллажей и колёс, температурный режим. Считаем плиту, а не «на глаз 200 мм».", "aerial.jpg"],
  ["02", "Армирование", "Сетка, каркас или фибра — по расчёту. Закладные под швы, дюбели на картах. Геометрия, которую потом не исправить.", "rebar.jpg"],
  ["03", "Укладка бетона", "Непрерывная карта. Подвижность, водоцементное, виброуплотнение. Стопинг нельзя спасти, если бетон уже «ушёл».", "pour.jpg"],
  ["04", "Стопинг", "Сухая смесь высыпается на ещё живую поверхность и втирается. Кварц, корунд или металл — по зоне эксплуатации.", "stoping.jpg"],
  ["05", "Затирка лопастями", "Сначала диски, затем синие лопасти вертолётов. Поверхность закрывается, плотность растёт, появляется зеркало.", "blades.jpg"],
  ["06", "Швы и уход", "Нарезка в правильное окно, плёнка или кьюринг, набор прочности. Сдача по ровности и истираемости, не по фото.", "joints.jpg"],
];

const objects = [
  { slug: "sever", title: "Логистический комплекс «Север»", place: "Новосибирск", year: "2025", area: 18400, topping: "Кварц, 5 кг/м²", load: "5 т/ось · FM2", image: "logistics.jpg", gallery: ["logistics.jpg", "finished.jpg", "docks.jpg"], summary: "Распределительный склад с узкопроходной техникой и высотным стеллажом.", brief: "Заказчику нужна была беспыльная плита под VNA-штабелёры и ровность, при которой не пляшет каретка на 12 метрах. Грунт слабый, карты большие, график — «вчера».", result: "Плита 180 мм, кварцевый стопинг, деформационные швы с дюбелями, нарезка в 18-часовое окно. Сдали с запасом по ровности. Через неделю заехала техника." },
  { slug: "altair", title: "Пищевое производство «Альтаир»", place: "Бердск", year: "2025", area: 6200, topping: "Корунд, влажная уборка", load: "3 т/ось · hygiene", image: "food.jpg", gallery: ["food.jpg", "texture.jpg", "walkbehind.jpg"], summary: "Цех готовых блюд. Пол под мойку, тележки и санитарные нормы.", brief: "Влажная уборка каждый цикл, органические кислоты, требования аудита сети. Обычный кварц здесь быстро «седеет» и начинает пылить в стыках.", result: "Корундовый стопинг, уплотнённые примыкания к трапам, герметик швов под пищевой допуск. Пыли нет, следы мойки не остаются пятнами." },
  { slug: "hub", title: "Распределительный центр", place: "Новосибирский район", year: "2024", area: 24100, topping: "Кварц + корунд в доках", load: "8 т/ось · FM2/FM3", image: "docks.jpg", gallery: ["docks.jpg", "aerial.jpg", "fleet.jpg"], summary: "Крупный хаб: доки, комплектация, мезонин, внешняя площадка.", brief: "Четыре зоны с разной нагрузкой в одном контуре. Нельзя было делать «средний» пол — доки бы умерли, а дальние пролёты переплатили бы за металл.", result: "Карта зон: кварц в хранении, корунд на доках и в комплектации. Один подрядчик, один набор прочности, разные смеси. Сдали без переделок." },
  { slug: "frost", title: "Холодильный склад −25 °C", place: "Томск", year: "2024", area: 4800, topping: "Кварц, морозостойкий режим", load: "4 т/ось · cold", image: "cold.jpg", gallery: ["cold.jpg", "pour.jpg", "team.jpg"], summary: "Камера глубокой заморозки. Пол, который не рвёт при выходе на режим.", brief: "Главный риск холодильника — не мороз, а градиент. Если плиту рано «посадить» на минус, стопинг отстреливает лепестками.", result: "Отдельный график набора прочности, уход, поэтапный выход на −25. Ни одного участка расслоения за первый сезон." },
  { slug: "rechnoy", title: "Паркинг «Речной»", place: "Новосибирск", year: "2023", area: 9100, topping: "Кварц, противогололёдные соли", load: "легковой · паркинг", image: "parking.jpg", gallery: ["parking.jpg", "joints.jpg", "night.jpg"], summary: "Многоуровневый паркинг. Соли, шипы, вода, нулевая отметка.", brief: "Паркинг убивает пол не нагрузкой, а химией и циклами замораживания. Нужны швы, уклоны к трапам и смесь, которая не боится хлоридов.", result: "Стопинг с повышенной химической стойкостью, уклоны 1,5%, герметичные деформационные. Через две зимы — без шелушения." },
  { slug: "steel", title: "Цех металлообработки", place: "Искитим", year: "2023", area: 7500, topping: "Металлизированный", load: "10 т/ось · oil", image: "metal.jpg", gallery: ["metal.jpg", "blades.jpg", "repair.jpg"], summary: "Тяжёлые тележки, масло, локальные удары, горячая стружка.", brief: "Кварц на таком полу живёт сезон. Нужен металлический заполнитель и понимание, где будут стоять станки — там другие закладные.", result: "Металлизированный топпинг, локальное утолщение под опорами, маслостойкий уход. Пол не блестит «для фото» — он держит цех." },
];

const faqs = [
  ["Что такое стопинг и чем он отличается от покраски бетона?", "Стопинг (топпинг, dry-shake) — сухая смесь корунда, кварца или металла с цементом. Её втирают в ещё пластичный бетон. Это не плёнка сверху, а упрочнённый верхний слой плиты. Краска и тонкий полимер стираются. Стопинг работает вместе с бетоном."],
  ["От какой площади берётесь?", "От 800 м² на одном объекте. Меньше — не сходится логистика вертолётов, смеси и смены. Исключение: ремонт расслоения на уже нашем полу."],
  ["Можно ли делать зимой?", "Да, в тёплом контуре. На открытом воздухе — только при устойчивом плюсе и закрытом уходе. Холодильник выводим на минус отдельно, после набора прочности."],
  ["Считаете плиту сами или работаете по чужому проекту?", "Можем оба варианта. Если проекта нет — считаем пирог, арматуру, швы и ровность под вашу технику. Если проект есть — читаем его до заливки: чаще всего правим карты швов."],
  ["Почему у соседнего склада топпинг отстрелило?", "Почти всегда одно из трёх: рано внесли смесь, переувлажнили бетон или поздно затёрли. Иногда — рано включили мороз. Расслоение лечится вырезкой, не шпаклёвкой."],
  ["Даёте гарантию?", "24 месяца на отслоение и сверхнормативное истирание при соблюдении режима эксплуатации. Ровность сдаём актом. Формулировки — в договоре, не в презентации."],
];

const principles = [
  ["Сначала плита, потом красота", "Зеркало без несущей способности — дорогая фотография. Мы считаем нагрузки, швы и основание, и только потом достаём лопасти."],
  ["Одна карта — одна смена", "Стопинг не любит стыки «на завтра». Льём и затираем карту целиком. Если график этого не позволяет — режем карту заранее, а не на объекте."],
  ["Синие лопасти — не декор", "Название компании — про инструмент. Финишные лопасти доводят поверхность до плотности камня. Этим мы отличаемся от тех, кто «просто залил»."],
];

const toppingRates = { quartz: ["Кварц", 2450], corundum: ["Корунд", 3150], metal: ["Металл", 4400] };
const objectCoeffs = { warehouse: ["Склад / производство", 1], docks: ["Доки и комплектация", 1.08], cold: ["Холодильник", 1.18], food: ["Пищевое производство", 1.22], parking: ["Паркинг", 1.08], repair: ["Ремонт расслоения", 1.45] };
const slabRate = 3800;

const rub = (n) => new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 }).format(n);
const meters = (n) => new Intl.NumberFormat("ru-RU").format(n) + " м²";
const path = () => {
  const h = location.hash.slice(1);
  if (!h || h === "/") return "/";
  return h.startsWith("/") ? h.split("?")[0] : "/" + h;
};
const go = (to) => {
  const next = to.startsWith("/") ? to : "/" + to;
  if (location.hash === "#" + next) render();
  else location.hash = "#" + next;
};

function logo() {
  return `<a class="logo" href="#/" data-link>
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="16.5" fill="none" stroke="currentColor" stroke-opacity="0.28"/>
      <path d="M18 7.2c4.4 2.2 7.6 6.6 7.6 10.8 0 2.6-1.2 4.6-3.2 5.4" fill="none" stroke="#3b6ee8" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M18 28.8c-4.4-2.2-7.6-6.6-7.6-10.8 0-2.6 1.2-4.6 3.2-5.4" fill="none" stroke="#3b6ee8" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="18" cy="18" r="1.6" fill="#3b6ee8"/>
    </svg>
    <span><span class="logo-name">Синие лопасти</span><span class="logo-sub meta">Стопинг полов</span></span>
  </a>`;
}

function header(p) {
  return `<header class="site" id="hdr">
    <div class="header-inner">
      ${logo()}
      <nav class="nav-desk">${nav.slice(1).map(([t,l]) => `<a href="#${t}" data-link class="${p===t?"active":""}">${l}</a>`).join("")}</nav>
      <div class="header-actions">
        <a class="btn btn-blade header-cta" href="#/contacts" data-link>Заявка</a>
        <button class="burger" type="button" aria-label="Меню" id="burger">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-nav" id="mnav">
    ${nav.map(([t,l]) => `<a class="big" href="#${t}" data-link>${l}</a>`).join("")}
    <div class="bottom">
      <a href="${company.phoneHref}">${company.phone}</a>
      <p>${company.address}</p>
      <a class="btn btn-blade btn-wide" href="#/contacts" data-link>Оставить заявку</a>
    </div>
  </div>`;
}

function footer() {
  return `<footer class="site"><div class="wrap">
    <div class="foot-grid">
      <div>${logo()}<p class="muted" style="margin-top:1.5rem;max-width:24rem;font-size:.9rem;line-height:1.6">Промышленные бетонные полы методом стопинга. Новосибирск и Сибирь. Плита, швы, ровность — затем синие лопасти.</p></div>
      <div><p class="meta">Разделы</p>${nav.map(([t,l]) => `<div style="margin-top:.5rem"><a class="muted" href="#${t}" data-link>${l}</a></div>`).join("")}</div>
      <div><p class="meta">Связь</p>
        <p style="margin:.75rem 0 0"><a href="${company.phoneHref}">${company.phone}</a></p>
        <p style="margin:.35rem 0 0"><a class="muted" href="${company.phone2Href}">${company.phone2}</a></p>
        <p style="margin:.35rem 0 0"><a class="muted" href="mailto:${company.email}">${company.email}</a></p>
        <p style="margin:.35rem 0 0"><a class="muted" href="${company.telegram}" target="_blank" rel="noreferrer">Telegram ${company.telegramHandle}</a></p>
        <p class="muted" style="margin-top:1rem">${company.address}<br>${company.addressNote}</p>
      </div>
    </div>
    <div class="foot-bar"><span>© ${new Date().getFullYear()} Синие лопасти</span><span>ИНН ${company.inn} · ОГРН ${company.ogrn}</span></div>
  </div></footer>
  <div class="cta-bar">
    <a class="btn btn-outline" href="${company.phoneHref}">Звонок</a>
    <a class="btn btn-blade" href="#/contacts" data-link>Заявка</a>
  </div>`;
}

function statsHtml() {
  return `<section class="stats">${stats.map(([v,u,l]) => `<div class="stat"><div class="num">${v}<span class="unit">${u}</span></div><p>${l}</p></div>`).join("")}</section>
  <p class="stats-note">*при готовом контуре и подтверждённом бетоне</p>`;
}

function formHtml() {
  const opts = Object.entries(objectCoeffs).map(([k,v]) => `<option value="${k}">${v[0]}</option>`).join("");
  return `<form id="lead">
    <div class="row2">
      <div class="field"><label class="meta" for="q-name">Имя</label><input id="q-name" name="name" autocomplete="name" placeholder="Иван"></div>
      <div class="field"><label class="meta" for="q-phone">Телефон</label><input id="q-phone" name="phone" type="tel" placeholder="+7 913 000-00-00"></div>
      <div class="field"><label class="meta" for="q-area">Площадь, м²</label><input id="q-area" name="area" inputmode="numeric" placeholder="2400"></div>
      <div class="field"><label class="meta" for="q-kind">Тип объекта</label><select id="q-kind">${opts}</select></div>
    </div>
    <div class="field"><label class="meta" for="q-comment">Что важно знать</label><textarea id="q-comment" placeholder="Нагрузка, холодильник, сроки, есть ли проект"></textarea></div>
    <p class="err" id="lead-err" hidden></p>
    <div style="display:flex;flex-wrap:wrap;gap:1rem;align-items:center">
      <button class="btn btn-blade" type="submit" style="min-height:3.5rem;padding:0 1.5rem">Отправить заявку</button>
      <span class="subtle" style="font-size:.75rem">Не спамим. Звонит инженер, не отдел продаж.</span>
    </div>
  </form>`;
}

function estimateHtml() {
  const top = Object.entries(toppingRates).map(([k,v]) => `<option value="${k}">${v[0]}</option>`).join("");
  const kinds = Object.entries(objectCoeffs).map(([k,v]) => `<option value="${k}">${v[0]}</option>`).join("");
  return `<div class="est">
    <div class="est-head"><p class="meta" style="color:var(--blade)">Ориентир по бюджету</p><h3 class="title" style="margin-top:.5rem">Считать вслух, не «от 2 000»</h3><p class="muted" style="font-size:.9rem;margin:.5rem 0 0">Не оферта. Бетон, логистика и сложный грунт считаются после выезда.</p></div>
    <div class="est-body">
      <div>
        <div class="field"><label class="meta" for="area-range">Площадь · <span id="area-lbl">2 400 м²</span></label>
          <input id="area-range" type="range" min="800" max="40000" step="100" value="2400"></div>
        <div class="field"><label class="meta">Топпинг</label><select id="est-top">${top}</select></div>
        <div class="field"><label class="meta">Объект</label><select id="est-kind">${kinds}</select></div>
        <label style="display:flex;gap:.75rem;align-items:center;min-height:3rem"><input type="checkbox" id="est-turn" checked style="width:1.25rem;min-height:1.25rem;accent-color:var(--blade)"> Плита под ключ (бетон + стопинг)</label>
      </div>
      <div class="est-sum">
        <p class="meta">Ориентир</p>
        <p class="headline" id="est-total" style="margin-top:.75rem">—</p>
        <p class="muted" id="est-per" style="margin:.5rem 0 0;font-size:.9rem"></p>
        <p class="muted" style="margin-top:2rem;font-size:.9rem;display:flex;justify-content:space-between"><span>Стопинг</span><span id="est-top-v"></span></p>
        <p class="muted" style="margin-top:.35rem;font-size:.9rem;display:flex;justify-content:space-between"><span>Плита</span><span id="est-slab-v"></span></p>
      </div>
    </div>
  </div>`;
}

function faqHtml() {
  return `<div class="faq">${faqs.map(([q,a],i) => `<div class="item ${i===0?"open":""}"><button type="button">${q}<span>+</span></button><div class="ans">${a}</div></div>`).join("")}</div>`;
}

function pageHome() {
  return `<section class="hero">
    <div class="hero-photo">
      <img class="mob-only" src="${img("hero-mobile.jpg")}" alt="Затирочная машина с синими лопастями">
      <img class="desk-only" src="${img("hero.jpg")}" alt="Затирочная машина с синими лопастями">
      <div class="shade"></div>
    </div>
    <div class="hero-copy">
      <p class="meta" style="color:var(--muted)">Промышленные бетонные полы · Сибирь</p>
      <h1 class="display">Пол, о котором забывают</h1>
      <p class="lead">Стопинг — упрочнённый слой, втёртый в живой бетон. Склады, производства, холодильники и паркинги от 800 м².</p>
      <div class="actions">
        <a class="btn btn-blade" href="#/contacts" data-link style="min-height:3.5rem">Рассчитать объект</a>
        <a class="btn btn-outline" href="#/objects" data-link style="min-height:3.5rem">Смотреть объекты</a>
      </div>
    </div>
  </section>
  ${statsHtml()}
  <section class="section wrap grid-12">
    <div class="col-5"><p class="meta" style="color:var(--blade)">Название — не метафора</p><h2 class="headline" style="margin-top:1rem">Синие лопасти доводят бетон до камня</h2></div>
    <div class="col-6">
      <p class="lead">Стопинг не кладут сверху, как краску. Сухую смесь втирают в ещё живую плиту затирочными машинами — вертолётами. Сначала диски, затем финишные лопасти. Они у нас синие. Отсюда имя.</p>
      ${principles.map(([t,x]) => `<div class="principle"><h3>${t}</h3><p>${x}</p></div>`).join("")}
    </div>
  </section>
  <section class="paper section"><div class="wrap">
    <div class="flex-end"><div><p class="meta">Что устраиваем</p><h2 class="headline" style="margin-top:.75rem">Полы под работу</h2></div>
      <a class="btn btn-ink" href="#/technology" data-link>Технология стопинга</a></div>
    <div class="cards">${services.map(([,t,l,i]) => `<a class="card" href="#/technology" data-link>
      <img src="${img(i)}" alt="">
      <div class="pad"><h3>${t}</h3><p>${l}</p></div>
    </a>`).join("")}</div>
  </div></section>
  <section class="section wrap">
    <div class="flex-end"><div><p class="meta" style="color:var(--blade)">Шесть окон</p><h2 class="headline" style="margin-top:.75rem">Пока бетон живой</h2></div>
      <a class="btn btn-outline" href="#/process" data-link>Весь процесс</a></div>
    <div class="steps">${processSteps.map(([n,t,x,i]) => `<article class="step"><div class="rel"><img src="${img(i)}" alt=""><span class="badge">${n}</span></div><h3>${t}</h3><p>${x}</p></article>`).join("")}</div>
  </section>
  <section>
    <div class="band"><img class="bg" src="${img("finished.jpg")}" alt=""><div class="veil"></div>
      <div class="inner wrap"><p class="meta" style="color:rgba(237,233,225,.8)">Объекты</p>
        <h2 class="headline" style="margin-top:.75rem;max-width:20ch">Пол должен исчезнуть из разговора</h2>
        <p class="lead" style="color:rgba(237,233,225,.75);max-width:28rem">Если через год вспоминают только логистику, а не трещины — мы сделали свою работу.</p>
      </div>
    </div>
    <div class="feat wrap">${objects.slice(0,3).map((o) => `<a href="#/objects/${o.slug}" data-link>
      <p class="meta">${o.place} · ${o.year}</p><h3 class="title" style="margin-top:.75rem">${o.title}</h3>
      <p class="muted" style="margin-top:.75rem;font-size:.9rem">${o.summary}</p>
      <p style="margin-top:1.5rem">${meters(o.area)}</p>
    </a>`).join("")}</div>
    <div class="wrap" style="padding-top:2.5rem;padding-bottom:2.5rem"><a class="btn btn-outline" href="#/objects" data-link>Все объекты</a></div>
  </section>
  <section class="surface section"><div class="wrap grid-12">
    <div class="col-5"><p class="meta" style="color:var(--blade)">Заявка</p><h2 class="headline" style="margin-top:.75rem">Пришлите площадь — посчитаем карту</h2>
      <p class="muted" style="margin-top:1rem;font-size:.9rem;line-height:1.6">Нужны нагрузка, температурный режим и желаемые сроки. Выезд инженера по Новосибирску — в день обращения.</p></div>
    <div class="col-6" id="form-slot">${formHtml()}</div>
  </div>
  <div class="wrap" style="padding-bottom:5rem">${estimateHtml()}</div>
  </section>
  <section class="section wrap"><p class="meta" style="color:var(--blade)">Вопросы</p><h2 class="headline" style="margin-top:.75rem">Коротко, без презентации</h2>
    <div style="margin-top:2.5rem">${faqHtml()}</div></section>`;
}

function pageTech() {
  const specs = [["Истираемость","до класса G1, беспыльная поверхность"],["Ровность","СП 29.13330, TR 34 FM2 / FM3 под VNA"],["Нагрузка","от 3 до 10 т/ось, спецрежимы — до 50"],["Толщина плиты","от 150 мм, по расчёту основания"],["Расход смеси","3–8 кг/м² в зависимости от заполнителя"],["Окно затирки","пока бетон пластичен, не «на следующий день»"]];
  return `<section class="page-hero"><img src="${img("powder.jpg")}" alt=""><div class="shade"></div>
    <div class="inner wrap"><p class="meta">Технология</p><h1 class="display" style="margin-top:1rem">Стопинг</h1>
      <p class="lead" style="max-width:32rem;color:rgba(237,233,225,.8)">Dry-shake. Сухая смесь втирается в живой бетон. Не покрытие, не краска, не «наливной пол за день».</p></div></section>
  <section class="section wrap grid-12"><div class="col-5"><h2 class="headline">Как это работает</h2></div>
    <div class="col-6 muted" style="line-height:1.65"><p>После укладки и виброуплотнения плиты на поверхность высыпают смесь: цемент, заполнитель (кварц, корунд или металл), добавки. Затирочные машины втирают её в цементное молоко.</p>
    <p>Заполнитель становится частью верхних миллиметров бетона. Истираемость падает, пыль уходит, пол держит колёса. Если опоздать с окном — смесь ляжет коркой и отстрелит.</p>
    <p>Поэтому мы возим свои вертолёты, своих операторов и не берём объекты, где «заливает соседняя бригада, а вы только затрите».</p></div></section>
  <section class="spec">${specs.map(([k,v]) => `<div><p class="meta">${k}</p><p class="title" style="margin-top:.75rem">${v}</p></div>`).join("")}</section>
  <section class="section wrap">${services.map(([s,t,l,i], idx) => `<article id="${s}" style="display:grid;gap:2rem;margin-bottom:5rem" class="grid-12">
    <div class="col-5"><img class="cover" src="${img(i)}" alt="${t}"></div>
    <div class="col-6"><p class="meta" style="color:var(--blade)">0${idx+1}</p><h2 class="headline" style="margin-top:.75rem">${t}</h2><p class="muted" style="margin-top:1rem">${l}</p></div>
  </article>`).join("")}</section>
  <section class="paper section"><div class="wrap flex-end"><div><h2 class="headline">Нужен расчёт смеси</h2><p class="muted" style="margin-top:.75rem">Напишите нагрузку и режим — скажем, кварц или уже корунд.</p></div>
    <a class="btn btn-ink" href="#/contacts" data-link>Оставить заявку</a></div></section>`;
}

function pageProcess() {
  return `<section class="section wrap" style="padding-top:7rem"><p class="meta" style="color:var(--blade)">Как устраиваем</p>
    <h1 class="display" style="margin-top:1rem;max-width:22ch">Шесть окон, одно из которых нельзя проспать</h1>
    <p class="lead" style="margin-top:1.5rem;max-width:36rem">Стопинг живёт в часах, не в неделях. Ниже — как идёт объект, если считать честно, а не по презентации подрядчика.</p></section>
  <div class="wrap"><img class="cover-wide" src="${img("fleet.jpg")}" alt=""></div>
  <section class="wrap">${processSteps.map(([n,t,x,i]) => `<article class="process-row"><p class="n-big">${n}</p>
    <div><h2 class="headline">${t}</h2><p class="muted" style="margin-top:1rem">${x}</p></div>
    <img class="cover" src="${img(i)}" alt="${t}"></article>`).join("")}</section>
  <section class="section" style="border-top:1px solid var(--border)"><div class="wrap">
    <h2 class="headline">Что нужно от вас до заезда</h2>
    <div class="cards" style="grid-template-columns:1fr">${["Закрытый контур или погода без минуса","Подтверждённый бетон и непрерывная подача","Понимание техники: стеллаж, VNA, доки, холод"].map((t) => `<div style="border:1px solid var(--border);background:var(--surface);padding:1.25rem;color:var(--muted);font-size:.9rem">${t}</div>`).join("")}</div>
    <a class="btn btn-blade" href="#/contacts" data-link style="margin-top:2.5rem">Запросить график заливки</a>
  </div></section>`;
}

function pageObjects() {
  return `<section class="section wrap" style="padding-top:7rem"><p class="meta" style="color:var(--blade)">Портфолио</p>
    <h1 class="display" style="margin-top:1rem">Объекты</h1>
    <p class="lead" style="margin-top:1.25rem;max-width:32rem">Склады, пища, холод, паркинги, цеха. Разные смеси, одна дисциплина окна затирки.</p></section>
  <section class="wrap" style="padding-bottom:5rem"><div class="obj-grid">${objects.map((o,i) => `<a class="${i===0?"span2":""}" href="#/objects/${o.slug}" data-link>
    <img src="${img(o.image)}" alt="${o.title}" style="aspect-ratio:${i===0?"16/8":"16/10"};width:100%;object-fit:cover">
    <p class="meta" style="margin-top:1rem">${o.place} · ${o.year}</p>
    <h2 class="title" style="margin-top:.25rem">${o.title}</h2>
    <p class="muted" style="margin-top:.35rem;font-size:.9rem">${meters(o.area)}</p>
  </a>`).join("")}</div></section>`;
}

function pageObject(slug) {
  const o = objects.find((x) => x.slug === slug);
  if (!o) return page404();
  const others = objects.filter((x) => x.slug !== slug).slice(0, 3);
  return `<section class="page-hero"><img src="${img(o.image)}" alt=""><div class="shade"></div>
    <div class="inner wrap"><a class="meta" href="#/objects" data-link>← Все объекты</a>
      <h1 class="display" style="margin-top:1rem;max-width:20ch">${o.title}</h1>
      <p style="margin-top:1rem;opacity:.85">${o.place} · ${o.year} · ${meters(o.area)}</p></div></section>
  <section class="section wrap grid-12">
    <dl class="dl col-5">
      <div><dt class="meta">Площадь</dt><dd class="title" style="margin-top:.5rem">${meters(o.area)}</dd></div>
      <div><dt class="meta">Топпинг</dt><dd class="title" style="margin-top:.5rem">${o.topping}</dd></div>
      <div style="grid-column:1/-1"><dt class="meta">Нагрузка</dt><dd class="title" style="margin-top:.5rem">${o.load}</dd></div>
    </dl>
    <div class="col-7"><p class="lead" style="color:var(--fg)">${o.summary}</p><p class="muted" style="margin-top:1.25rem">${o.brief}</p><p class="muted" style="margin-top:1.25rem">${o.result}</p></div>
  </section>
  <section class="wrap gallery" style="padding-bottom:4rem">${o.gallery.map((g) => `<img class="cover" src="${img(g)}" alt="">`).join("")}</section>
  <section class="section" style="border-top:1px solid var(--border)"><div class="wrap">
    <div class="flex-end"><h2 class="headline">Ещё объекты</h2><a class="btn btn-outline" href="#/contacts" data-link>Похожий объект</a></div>
    <div class="cards" style="margin-top:2rem">${others.map((x) => `<a href="#/objects/${x.slug}" data-link>
      <img class="cover" src="${img(x.image)}" alt=""><h3 class="title" style="margin-top:.75rem">${x.title}</h3>
      <p class="muted" style="margin-top:.35rem;font-size:.9rem">${meters(x.area)}</p></a>`).join("")}</div>
  </div></section>`;
}

function pageAbout() {
  return `<section class="section wrap" style="padding-top:7rem"><p class="meta" style="color:var(--blade)">Компания</p>
    <h1 class="display" style="margin-top:1rem;max-width:22ch">Подрядчик, у которого есть свои вертолёты</h1>
    <p class="lead" style="margin-top:1.5rem;max-width:36rem">Мы не «нашли бригаду на Авито». Свой парк затирочных машин, свои операторы, свой инженерный расчёт плиты и швов. Работаем из Новосибирска по Сибири.</p></section>
  <div class="wrap" style="display:grid;gap:.75rem">${""}<img class="cover" src="${img("team.jpg")}" alt=""><img class="cover" src="${img("walkbehind.jpg")}" alt=""></div>
  <section class="section wrap grid-12"><div class="col-5"><h2 class="headline">Кто мы</h2></div>
    <div class="col-6 muted" style="line-height:1.65"><p>Компания собралась из людей, которые несколько лет устраивали промышленные полы «в чужой каске» и устали сдавать чужие ошибки. Название выбрали буквально: финишные лопасти затирочных машин у нас синие.</p>
    <p>Берём объекты от 800 м². География — Новосибирск, Барнаул, Кемерово, Томск, Красноярск, Омск. Ремонт расслоения делаем. Это отдельная смета: отстрел не «подшпаклёвывают».</p></div></section>
  ${statsHtml()}
  <section class="section wrap"><h2 class="headline">Парк и люди</h2>
    <div class="cards" style="margin-top:2.5rem">
      <figure><img class="cover" src="${img("fleet.jpg")}" alt=""><figcaption class="muted" style="margin-top:.75rem;font-size:.9rem">Ride-on вертолёты и ручные машины. Финишные лопасти — синие.</figcaption></figure>
      <figure><img class="cover" src="${img("blades.jpg")}" alt=""><figcaption class="muted" style="margin-top:.75rem;font-size:.9rem">Ими закрывают поверхность. Это не декор логотипа.</figcaption></figure>
      <figure><img class="cover" src="${img("night.jpg")}" alt=""><figcaption class="muted" style="margin-top:.75rem;font-size:.9rem">В сезон заливки работаем ночью. Бетон не ждёт утра.</figcaption></figure>
    </div>
  </section>
  <section class="paper section"><div class="wrap"><p class="meta">Реквизиты</p>
    <p class="title" style="margin-top:1rem">${company.address}</p>
    <p class="muted" style="margin-top:.5rem">${company.addressNote}<br>ИНН ${company.inn} · ОГРН ${company.ogrn}</p>
    <a class="btn btn-ink" href="#/contacts" data-link style="margin-top:2rem">Связаться</a></div></section>`;
}

function pageContacts() {
  const rows = [["Телефон", company.phone, company.phoneHref],["Второй", company.phone2, company.phone2Href],["Почта", company.email, "mailto:"+company.email],["Telegram", company.telegramHandle, company.telegram]];
  return `<section class="page-hero short"><img src="${img("night.jpg")}" alt=""><div class="shade"></div>
    <div class="inner wrap"><p class="meta">Контакты</p><h1 class="display" style="margin-top:1rem">Свяжитесь с инженером</h1></div></section>
  <section class="section wrap grid-12">
    <div class="col-5"><h2 class="headline">Связь</h2>
      <p class="muted" style="margin-top:1rem">${company.address}<br>${company.addressNote}</p>
      <p class="subtle" style="margin-top:.75rem;font-size:.9rem">${company.hours}</p>
      <ul style="list-style:none;padding:0;margin:2rem 0 0;border-block:1px solid var(--border)">
        ${rows.map(([k,v,h]) => `<li style="display:flex;justify-content:space-between;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--border)"><span class="meta">${k}</span><a href="${h}">${v}</a></li>`).join("")}
      </ul>
      <p class="muted" style="margin-top:1.5rem;font-size:.9rem">Новосибирск, Барнаул, Кемерово, Томск, Красноярск, Омск. Выезд инженера по городу — в день обращения.</p>
    </div>
    <div class="col-6"><div class="ok-box"><p class="meta" style="color:var(--blade)">Заявка</p><h2 class="title" style="margin-top:.75rem">Расскажите про объект</h2>
      <div id="form-slot" style="margin-top:1.5rem">${formHtml()}</div></div></div>
  </section>
  <section class="wrap" style="padding-bottom:2rem">${estimateHtml()}</section>
  <section class="wrap section"><div class="rel"><img class="cover-wide" src="${img("aerial.jpg")}" alt="">
    <div style="position:absolute;inset:auto 0 0 0;padding:2rem;background:linear-gradient(to top,rgba(9,10,12,.8),transparent)"><p class="title" style="max-width:28rem">Новосибирск и Сибирь. Офис на Станционной, объекты — по всей плите региона.</p></div>
  </div></section>`;
}

function page404() {
  return `<section class="section wrap" style="min-height:80svh;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:6rem">
    <p class="meta" style="color:var(--blade)">404</p>
    <h1 class="display" style="margin-top:1rem">Такой карты нет</h1>
    <p class="muted" style="margin-top:1.5rem;max-width:24rem">Страница не найдена. Пол на месте — просто не тот пролёт.</p>
    <a class="btn btn-blade" href="#/" data-link style="margin-top:2.5rem;align-self:flex-start">На главную</a>
  </section>`;
}

function bind() {
  document.querySelectorAll("[data-link]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      e.preventDefault();
      document.getElementById("mnav")?.classList.remove("show");
      document.documentElement.classList.remove("nav-open");
      go(href.slice(1) || "/");
      window.scrollTo(0, 0);
    });
  });
  const burger = document.getElementById("burger");
  const mnav = document.getElementById("mnav");
  burger?.addEventListener("click", () => {
    const open = !mnav.classList.contains("show");
    mnav.classList.toggle("show", open);
    document.getElementById("hdr")?.classList.toggle("open", open);
    document.documentElement.classList.toggle("nav-open", open);
    burger.setAttribute("aria-label", open ? "Закрыть" : "Меню");
  });
  const onScroll = () => document.getElementById("hdr")?.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  document.querySelectorAll(".faq .item button").forEach((b) => {
    b.addEventListener("click", () => b.parentElement.classList.toggle("open"));
  });
  const form = document.getElementById("lead");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("q-name").value.trim();
    const phone = document.getElementById("q-phone").value.replace(/[\s()-]/g, "");
    const err = document.getElementById("lead-err");
    if (!name) { err.hidden = false; err.textContent = "Напишите, как к вам обращаться."; return; }
    if (!/^\+?[78]?\d{10}$/.test(phone)) { err.hidden = false; err.textContent = "Нужен российский телефон, чтобы перезвонить."; return; }
    const area = document.getElementById("q-area").value;
    localStorage.setItem("sinie-lopasti-lead", JSON.stringify({ name, phone, area, at: new Date().toISOString() }));
    const slot = document.getElementById("form-slot");
    slot.innerHTML = `<div class="ok-box"><p class="meta" style="color:var(--blade)">Заявка принята</p>
      <h3 class="title" style="margin-top:.75rem">Перезвоним в рабочее время</h3>
      <p class="muted" style="margin-top:.75rem">${name}, заявка по объекту ${area || "без площади"} м² сохранена. Если срочно — звоните, в сезон мы на связи ночью.</p></div>`;
  });
  const area = document.getElementById("area-range");
  const recalc = () => {
    if (!area) return;
    const a = Number(area.value);
    const top = toppingRates[document.getElementById("est-top").value][1];
    const k = objectCoeffs[document.getElementById("est-kind").value][1];
    const turn = document.getElementById("est-turn").checked;
    const t = Math.round(top * k);
    const s = turn ? Math.round(slabRate * k) : 0;
    const per = t + s;
    document.getElementById("area-lbl").textContent = meters(a);
    document.getElementById("est-total").textContent = rub(per * a);
    document.getElementById("est-per").textContent = `${rub(per)} за м² · ${meters(a)}`;
    document.getElementById("est-top-v").textContent = rub(t) + "/м²";
    document.getElementById("est-slab-v").textContent = turn ? rub(s) + "/м²" : "ваша";
  };
  ["area-range", "est-top", "est-kind", "est-turn"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", recalc);
    document.getElementById(id)?.addEventListener("change", recalc);
  });
  recalc();
}

function render() {
  document.documentElement.classList.remove("nav-open", "no-cta");
  const p = path();
  const matchObj = p.match(/^\/objects\/([^/]+)$/);
  let title = "Синие лопасти";
  let body = "";
  if (p === "/" || p === "") { body = pageHome(); }
  else if (p === "/technology") { body = pageTech(); title = "Стопинг — Синие лопасти"; }
  else if (p === "/process") { body = pageProcess(); title = "Процесс — Синие лопасти"; }
  else if (p === "/objects") { body = pageObjects(); title = "Объекты — Синие лопасти"; }
  else if (matchObj) { const o = objects.find((x) => x.slug === matchObj[1]); body = pageObject(matchObj[1]); title = `${o ? o.title : "Объект"} — Синие лопасти`; }
  else if (p === "/about") { body = pageAbout(); title = "Компания — Синие лопасти"; }
  else if (p === "/contacts") { body = pageContacts(); title = "Контакты — Синие лопасти"; document.documentElement.classList.add("no-cta"); }
  else { body = page404(); title = "Нет страницы — Синие лопасти"; }
  document.title = title;
  document.getElementById("app").innerHTML = header(p) + `<main>${body}</main>` + footer();
  bind();
  const hash = location.hash.slice(1);
  if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView(), 40);
}

window.addEventListener("hashchange", () => {
  window.scrollTo(0, 0);
  render();
});
render();
