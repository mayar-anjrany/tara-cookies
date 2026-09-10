import { createFileRoute } from "@tanstack/react-router";
import {
  Cookie,
  CupSoda,
  Coffee,
  Citrus,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "../components/Reveal";

import logoAsset from "../assets/tara-logo.jpg.asset.json";
import cookieClassic from "../assets/menu/cookie-classic.jpg";
import cookieRedVelvet from "../assets/menu/cookie-redvelvet.jpg";
import cookiePistachio from "../assets/menu/cookie-pistachio.jpg";
import cookieLotus from "../assets/menu/cookie-lotus.jpg";
import coldIceLatte from "../assets/menu/cold-icelatte.jpg";
import coldIceMocha from "../assets/menu/cold-icemocha.jpg";
import coldFrappe from "../assets/menu/cold-frappe.jpg";
import hotChocolate from "../assets/menu/hot-chocolate.jpg";
import hotLatte from "../assets/menu/hot-latte.jpg";
import hotCappuccino from "../assets/menu/hot-cappuccino.jpg";
import mojitoClassic from "../assets/menu/mojito-classic.jpg";
import mojitoStrawberry from "../assets/menu/mojito-strawberry.jpg";
import mojitoBlue from "../assets/menu/mojito-blue.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tara Café | منيو الكوكيز والمشروبات" },
      {
        name: "description",
        content:
          "كافيه Tara المختص بالكوكيز — تصفح منيو الكوكيز والمشروبات الباردة والساخنة والموهيتو. One bite is never enough!",
      },
      { property: "og:title", content: "Tara Café | منيو الكوكيز والمشروبات" },
      {
        property: "og:description",
        content: "منيو كافيه Tara — كوكيز، مشروبات باردة وساخنة، وموهيتو. One bite is never enough!",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/* بيانات مؤقتة — تُستبدل بالأسعار والأصناف الأصلية عند توفرها          */
/* ------------------------------------------------------------------ */

type MenuItem = { name: string; price: string; image: string };
type MenuSection = {
  id: string;
  title: string;
  icon: typeof Cookie;
  tint: string;
  chip: string;
  items: MenuItem[];
};

const SECTIONS: MenuSection[] = [
  {
    id: "cookies",
    title: "كوكيز",
    icon: Cookie,
    tint: "bg-pastel-pink",
    chip: "bg-pastel-pink-deep",
    items: [
      { name: "كوكيز شوكولاتة كلاسيك", price: "25,000", image: cookieClassic },
      { name: "M&M's", price: "30,000", image: cookieClassic },
      { name: "لوتس", price: "30,000", image: cookieLotus },
      { name: "دوبل شوكو", price: "30,000", image: cookieClassic },
      { name: "ريد فيلفت", price: "30,000", image: cookieRedVelvet },
      { name: "شوفان", price: "28,000", image: cookieClassic },
      { name: "بستاشيو", price: "35,000", image: cookiePistachio },
      { name: "بيرث داي", price: "35,000", image: cookieRedVelvet },
      { name: "أوريو", price: "30,000", image: cookieClassic },
      { name: "سمورز", price: "32,000", image: cookieLotus },
      { name: "شوكو البندق", price: "32,000", image: cookiePistachio },
      { name: "كراميل", price: "30,000", image: cookieLotus },
      { name: "كندر", price: "35,000", image: cookieClassic },
      { name: "فراولة", price: "30,000", image: cookieRedVelvet },
      { name: "مونستر", price: "38,000", image: cookiePistachio },
    ],
  },
  {
    id: "cold-drinks",
    title: "مشروبات باردة",
    icon: CupSoda,
    tint: "bg-baby-blue",
    chip: "bg-baby-blue-deep",
    items: [
      { name: "لاتيه فراولة", price: "30,000", image: coldFrappe },
      { name: "ماتشا كوكب الأرض", price: "35,000", image: coldIceLatte },
      { name: "لاتيه ماتشا", price: "32,000", image: coldIceLatte },
      { name: "لاتيه بستاشيو", price: "35,000", image: coldIceMocha },
      { name: "لاتيه فانيليا", price: "30,000", image: coldIceLatte },
      { name: "كراميل ماكياتو", price: "32,000", image: coldIceMocha },
      { name: "سبانيش لاتيه", price: "32,000", image: coldIceLatte },
      { name: "لاتيه تيراميسو", price: "35,000", image: coldIceMocha },
      { name: "لاتيه الموز", price: "32,000", image: coldFrappe },
      { name: "لاتيه ماتشا بالفراولة", price: "35,000", image: coldFrappe },
    ],
  },
  {
    id: "hot-drinks",
    title: "مشروبات ساخنة",
    icon: Coffee,
    tint: "bg-soft-green",
    chip: "bg-soft-green-deep",
    items: [
      { name: "لاتيه بستاشيو", price: "32,000", image: hotLatte },
      { name: "لاتيه", price: "26,000", image: hotLatte },
      { name: "موكا", price: "28,000", image: hotChocolate },
      { name: "لاتيه فانيليا", price: "28,000", image: hotLatte },
      { name: "لاتيه ماتشا", price: "30,000", image: hotLatte },
      { name: "هوت شوكلت", price: "28,000", image: hotChocolate },
      { name: "كابتشينو", price: "26,000", image: hotCappuccino },
      { name: "إسبريسو", price: "22,000", image: hotCappuccino },
      { name: "أمريكانو", price: "24,000", image: hotCappuccino },
    ],
  },
  {
    id: "mojito",
    title: "موهيتو",
    icon: Citrus,
    tint: "bg-pastel-pink",
    chip: "bg-pastel-pink-deep",
    items: [
      { name: "بلوبيري موهيتو", price: "33,000", image: mojitoBlue },
      { name: "ستروبيري موهيتو", price: "33,000", image: mojitoStrawberry },
      { name: "رمان موهيتو", price: "33,000", image: mojitoStrawberry },
      { name: "بلو كوكونت موهيتو", price: "35,000", image: mojitoBlue },
      { name: "توت موهيتو", price: "33,000", image: mojitoStrawberry },
      { name: "ليمون موهيتو", price: "30,000", image: mojitoClassic },
      { name: "باشن فروت موهيتو", price: "35,000", image: mojitoClassic },
      { name: "أناناس موهيتو", price: "33,000", image: mojitoClassic },
    ],
  },
];

const CONTACT = {
  instagram: "https://instagram.com/tara_cookies",
  whatsapp: "https://wa.me/963900000000",
  phone: "tel:+963900000000",
  email: "mailto:hello@tara-cafe.com",
  maps: "https://maps.google.com/?q=Tara+Cookies",
};

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Header />
      <Hero />
      <main className="relative">
        {SECTIONS.map((section) => (
          <MenuSectionBlock key={section.id} section={section} />
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Header ---------------------------------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-card/80 bg-card/85 px-3 py-2 shadow-pink backdrop-blur-xl sm:px-5">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="شعار كافيه Tara"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-pastel-pink sm:h-11 sm:w-11"
            width={44}
            height={44}
          />
          <span className="font-display text-xl font-bold text-cocoa sm:text-2xl">Tara</span>
        </a>
        <nav aria-label="أقسام المنيو" className="flex items-center gap-0.5 overflow-x-auto sm:gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex shrink-0 items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:bg-pastel-pink hover:text-cocoa sm:px-3"
            >
              <s.icon className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">{s.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ----------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-bg pt-24 sm:pt-28">
      {/* Soft radial glow */}
      <div className="hero-glow pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        {/* Content column — appears on the right in RTL */}
        <Reveal className="flex flex-col items-center text-center md:items-start md:text-right">
          <div className="space-y-3">
            <span className="font-hero-ui block text-xs font-medium uppercase tracking-[0.3em] text-muted-rose">
              Est. 2024
            </span>
            <div className="h-px w-12 bg-pastel-pink-deep/30 mx-auto md:mx-0" />
          </div>

          <div className="mt-8 space-y-5">
            <div className="relative">
              <h1 className="font-hero-display text-7xl font-bold leading-none text-cocoa sm:text-8xl md:text-9xl">
                تارا
              </h1>
              <div className="pointer-events-none absolute -top-4 -right-6 opacity-15 md:-right-8">
                <div className="h-20 w-20 rounded-full border-2 border-cocoa md:h-24 md:w-24" />
              </div>
            </div>
            <p className="font-hero-serif text-2xl italic leading-relaxed text-muted-rose sm:text-3xl" dir="ltr">
              One bite is never enough
            </p>
          </div>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cookies"
                className="font-hero-ui rounded-full bg-cocoa px-10 py-4 text-sm font-medium tracking-widest text-white shadow-cocoa transition-all duration-500 hover:bg-cocoa/90 hover:-translate-y-0.5"
              >
                اكتشف المنيو
              </a>
              <a
                href="#visit-us"
                className="font-hero-ui rounded-full border border-cocoa/20 bg-white/50 px-10 py-4 text-sm font-medium tracking-widest text-cocoa backdrop-blur-sm transition-all duration-500 hover:bg-white/80 hover:-translate-y-0.5"
              >
                زورونا
              </a>
            </div>
          </Reveal>
        </Reveal>

        {/* Image column — appears on the left in RTL */}
        <Reveal delay={120} className="relative flex items-center justify-center">
          {/* Decorative blurred orbs */}
          <div className="absolute h-72 w-72 rounded-full bg-pastel-pink blur-3xl opacity-60 md:h-[500px] md:w-[500px]" />
          <div className="absolute h-64 w-64 rounded-full border border-cocoa/5 md:h-[420px] md:w-[420px]" />

          <div className="relative group">
            {/* Soft glow behind the cookie */}
            <div className="absolute inset-0 scale-90 rounded-full bg-white/30 blur-2xl" />

            <div className="relative w-72 md:w-[420px] lg:w-[450px]">
              <img
                src={cookieClassic}
                alt="كوكيز Tara الطازجة"
                width={1024}
                height={768}
                className="aspect-[4/5] w-full rotate-3 rounded-3xl border-8 border-white bg-card object-cover shadow-cocoa transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.02]"
              />

              {/* Floating glass badge */}
              <div className="absolute -bottom-8 -left-8 max-w-[220px] -rotate-3 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-pink-strong backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 md:-left-12">
                <h3 className="font-hero-display text-2xl text-cocoa">تارا كافيه</h3>
                <p className="font-hero-serif mt-2 text-lg leading-snug text-muted-rose">
                  كوكيز طازجة لأحلى لحظاتك
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Menu sections ------------------------------ */

function MenuSectionBlock({ section }: { section: MenuSection }) {
  const Icon = section.icon;
  return (
    <section id={section.id} className={`scroll-mt-28 py-16 sm:py-24 ${section.id === "cold-drinks" || section.id === "mojito" ? section.tint : ""}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4 border-b border-foreground/10 pb-5">
            <div className="flex items-center gap-3">
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-card text-pastel-pink-deep shadow-pink`}
            >
              <Icon className="h-6 w-6" aria-hidden />
            </span>
              <div>
                <p className="text-xs font-bold text-pastel-pink-deep">منيو Tara</p>
                <h2 className="font-display text-3xl font-bold text-cocoa sm:text-4xl">{section.title}</h2>
              </div>
            </div>
            <span className="hidden text-sm font-semibold text-foreground/55 sm:block">{section.items.length} أصناف</span>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {section.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 6) * 65} className="h-full">
              <article className="menu-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-card p-3 card-shadow transition-all duration-500 hover:-translate-y-2 hover:card-shadow-hover sm:p-4">
                {/* Image container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-pastel-pink/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Price badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-pastel-pink-deep/90 px-3 py-1.5 text-sm font-bold text-white shadow-pink backdrop-blur-md">
                      <span className="text-[10px] font-normal opacity-90">ل.س</span>
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-1 pb-1 pt-5 text-center sm:px-2">
                  <h3 className="font-card text-lg font-bold leading-tight text-cocoa sm:text-xl md:text-2xl">
                    {item.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="h-1 w-1 rounded-full bg-pastel-pink-deep/40" />
                    <span className="text-xs font-semibold text-pastel-pink-deep/60">Tara Special</span>
                    <div className="h-1 w-1 rounded-full bg-pastel-pink-deep/40" />
                  </div>
                </div>

                {/* Decorative hover glow */}
                <div className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-pastel-pink/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/50" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

function SiteFooter() {
  return (
    <footer id="visit-us" className="cookie-dots scroll-mt-20 border-t border-soft-green-deep/10 bg-soft-green py-16 sm:py-20">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
          <p className="mb-4 text-xs font-bold text-soft-green-deep">ننتظركم في Tara</p>
          <img
            src={logoAsset.url}
            alt="شعار Tara"
            className="h-28 w-28 rounded-full object-cover shadow-pink-strong ring-4 ring-card"
            loading="lazy"
            width={96}
            height={96}
          />
          <h2 className="mt-5 font-display text-4xl font-bold text-cocoa">Tara</h2>
          <p className="mt-1 text-sm text-foreground/70" dir="ltr">
            One bite is never enough
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="footer-link">
              <MapPin className="h-5 w-5" aria-hidden />
              موقعنا
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="footer-link">
              <Instagram className="h-5 w-5" aria-hidden />
              Instagram
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="footer-link">
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp
            </a>
          </div>
          <p className="mt-9 text-xs text-foreground/55">جميع الحقوق محفوظة © Tara Café</p>
        </div>
      </Reveal>
    </footer>
  );
}
