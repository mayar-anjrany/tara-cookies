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
import { useEffect, useRef, useState } from "react";
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

type MenuItem = { name: string; price: { sy: string; usd: string }; image: string };
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
      { name: "كوكيز شوكولاتة كلاسيك", price: { sy: "25,000", usd: "1.5" }, image: cookieClassic },
      { name: "M&M's", price: { sy: "30,000", usd: "1.8" }, image: cookieClassic },
      { name: "لوتس", price: { sy: "30,000", usd: "1.8" }, image: cookieLotus },
      { name: "دوبل شوكو", price: { sy: "30,000", usd: "1.8" }, image: cookieClassic },
      { name: "ريد فيلفت", price: { sy: "30,000", usd: "1.8" }, image: cookieRedVelvet },
      { name: "شوفان", price: { sy: "28,000", usd: "1.7" }, image: cookieClassic },
      { name: "بستاشيو", price: { sy: "35,000", usd: "2.1" }, image: cookiePistachio },
      { name: "بيرث داي", price: { sy: "35,000", usd: "2.1" }, image: cookieRedVelvet },
      { name: "أوريو", price: { sy: "30,000", usd: "1.8" }, image: cookieClassic },
      { name: "سمورز", price: { sy: "32,000", usd: "1.9" }, image: cookieLotus },
      { name: "شوكو البندق", price: { sy: "32,000", usd: "1.9" }, image: cookiePistachio },
      { name: "كراميل", price: { sy: "30,000", usd: "1.8" }, image: cookieLotus },
      { name: "كندر", price: { sy: "35,000", usd: "2.1" }, image: cookieClassic },
      { name: "فراولة", price: { sy: "30,000", usd: "1.8" }, image: cookieRedVelvet },
      { name: "مونستر", price: { sy: "38,000", usd: "2.3" }, image: cookiePistachio },
    ],
  },
  {
    id: "cold-drinks",
    title: "مشروبات باردة",
    icon: CupSoda,
    tint: "bg-baby-blue",
    chip: "bg-baby-blue-deep",
    items: [
      { name: "لاتيه فراولة", price: { sy: "30,000", usd: "1.8" }, image: coldFrappe },
      { name: "ماتشا كوكب الأرض", price: { sy: "35,000", usd: "2.1" }, image: coldIceLatte },
      { name: "لاتيه ماتشا", price: { sy: "32,000", usd: "1.9" }, image: coldIceLatte },
      { name: "لاتيه بستاشيو", price: { sy: "35,000", usd: "2.1" }, image: coldIceMocha },
      { name: "لاتيه فانيليا", price: { sy: "30,000", usd: "1.8" }, image: coldIceLatte },
      { name: "كراميل ماكياتو", price: { sy: "32,000", usd: "1.9" }, image: coldIceMocha },
      { name: "سبانيش لاتيه", price: { sy: "32,000", usd: "1.9" }, image: coldIceLatte },
      { name: "لاتيه تيراميسو", price: { sy: "35,000", usd: "2.1" }, image: coldIceMocha },
      { name: "لاتيه الموز", price: { sy: "32,000", usd: "1.9" }, image: coldFrappe },
      { name: "لاتيه ماتشا بالفراولة", price: { sy: "35,000", usd: "2.1" }, image: coldFrappe },
    ],
  },
  {
    id: "hot-drinks",
    title: "مشروبات ساخنة",
    icon: Coffee,
    tint: "bg-soft-green",
    chip: "bg-soft-green-deep",
    items: [
      { name: "لاتيه بستاشيو", price: { sy: "32,000", usd: "1.9" }, image: hotLatte },
      { name: "لاتيه", price: { sy: "26,000", usd: "1.6" }, image: hotLatte },
      { name: "موكا", price: { sy: "28,000", usd: "1.7" }, image: hotChocolate },
      { name: "لاتيه فانيليا", price: { sy: "28,000", usd: "1.7" }, image: hotLatte },
      { name: "لاتيه ماتشا", price: { sy: "30,000", usd: "1.8" }, image: hotLatte },
      { name: "هوت شوكلت", price: { sy: "28,000", usd: "1.7" }, image: hotChocolate },
      { name: "كابتشينو", price: { sy: "26,000", usd: "1.6" }, image: hotCappuccino },
      { name: "إسبريسو", price: { sy: "22,000", usd: "1.3" }, image: hotCappuccino },
      { name: "أمريكانو", price: { sy: "24,000", usd: "1.4" }, image: hotCappuccino },
    ],
  },
  {
    id: "mojito",
    title: "موهيتو",
    icon: Citrus,
    tint: "bg-pastel-pink",
    chip: "bg-pastel-pink-deep",
    items: [
      { name: "بلوبيري موهيتو", price: { sy: "33,000", usd: "2.0" }, image: mojitoBlue },
      { name: "ستروبيري موهيتو", price: { sy: "33,000", usd: "2.0" }, image: mojitoStrawberry },
      { name: "رمان موهيتو", price: { sy: "33,000", usd: "2.0" }, image: mojitoStrawberry },
      { name: "بلو كوكونت موهيتو", price: { sy: "35,000", usd: "2.1" }, image: mojitoBlue },
      { name: "توت موهيتو", price: { sy: "33,000", usd: "2.0" }, image: mojitoStrawberry },
      { name: "ليمون موهيتو", price: { sy: "30,000", usd: "1.8" }, image: mojitoClassic },
      { name: "باشن فروت موهيتو", price: { sy: "35,000", usd: "2.1" }, image: mojitoClassic },
      { name: "أناناس موهيتو", price: { sy: "33,000", usd: "2.0" }, image: mojitoClassic },
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

function useActiveSection() {
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        // Section becomes active only once its top passes ~45% of the viewport,
        // so nothing is highlighted while the visitor is still in the hero.
        const marker = window.scrollY + window.innerHeight * 0.45;
        let current = "top";

        for (const section of SECTIONS) {
          const element = document.getElementById(section.id);
          if (!element) continue;
          // Distance from the top of the document, not the offset parent
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (top <= marker) current = section.id;
        }

        setActiveId(current);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return [activeId, setActiveId] as const;
}

function Header() {
  const [activeId, setActiveId] = useActiveSection();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLElement>(`[data-section="${activeId}"]`);
    activeLink?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  return (
    <>
      {/* Top bar: brand only */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
        <a
          href="#top"
          onClick={() => setActiveId("top")}
          aria-label="Tara — العودة للأعلى"
          className="flex items-center gap-2.5 rounded-full border border-soft-green-deep/10 bg-card/85 py-1.5 pl-6 pr-1.5 shadow-pink backdrop-blur-xl"
        >
          <img
            src={logoAsset.url}
            alt="شعار كافيه Tara"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-pastel-pink"
            width={40}
            height={40}
          />
          <span className="font-display text-xl font-bold text-soft-green-deep">Tara</span>
        </a>
      </header>

      {/* Bottom navigation bar */}
      <nav
        ref={navRef}
        aria-label="أقسام المنيو"
        className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-around gap-1 rounded-[1.6rem] border border-soft-green-deep/10 bg-card/90 p-1.5 shadow-pink-strong backdrop-blur-xl sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:gap-1.5 sm:px-2"
      >
        {SECTIONS.map((s) => {
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-section={s.id}
              aria-current={isActive ? "location" : undefined}
              aria-label={s.title}
              title={s.title}
              onClick={() => setActiveId(s.id)}
              className={`flex min-h-12 min-w-12 items-center justify-center gap-1.5 rounded-2xl px-3 py-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pastel-pink-deep/40 sm:min-h-11 ${
                isActive
                  ? "bg-pastel-pink text-pastel-pink-deep shadow-pink"
                  : "text-soft-green-deep/70 hover:bg-soft-green/55 hover:text-soft-green-deep"
              }`}
            >
              <s.icon className="h-5 w-5 shrink-0" strokeWidth={2.2} aria-hidden />
              <span className="hidden font-card text-sm font-bold leading-none sm:inline">{s.title}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

/* ----------------------------------- Hero ----------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-hero-bg pb-24 pt-20 sm:min-h-screen sm:pb-20 sm:pt-16">
      {/* Soft radial glow */}
      <div className="hero-glow pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2" />
      {/* Mint + pink ambient washes inspired by the cafe's soft lighting */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-soft-green/50 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pastel-pink/60 blur-3xl" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        {/* Content column — appears on the right in RTL */}
        <Reveal className="flex flex-col items-center text-center md:items-start md:text-right">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-pastel-pink-deep/40" aria-hidden />
            <span className="font-hero-ui text-xs font-medium uppercase tracking-[0.3em] text-pastel-pink-deep">
              Tara Café
            </span>
            <span className="h-px w-10 bg-pastel-pink-deep/40" aria-hidden />
          </div>

          <div className="mt-6 space-y-4">
            <h1 className="font-hero-display text-7xl font-bold leading-none text-soft-green-deep sm:text-8xl md:text-9xl">
              تارا
            </h1>
            <p className="font-hero-serif text-2xl italic leading-relaxed text-muted-rose sm:text-3xl" dir="ltr">
              One bite is never enough
            </p>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-foreground/70 sm:text-base md:mx-0">
              كوكيز طازجة تُخبز يومياً، وقهوة وموهيتو بأجواء وردية ناعمة — أهلاً وسهلاً فيكم.
            </p>
          </div>

          <Reveal delay={150}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#cookies"
                className="font-hero-ui rounded-full bg-soft-green-deep px-10 py-4 text-sm font-medium tracking-widest text-white shadow-cocoa transition-all duration-500 hover:-translate-y-0.5 hover:bg-soft-green-deep/90"
              >
                اكتشف المنيو
              </a>
              <a
                href="#visit-us"
                className="font-hero-ui rounded-full border border-pastel-pink-deep/25 bg-white/60 px-10 py-4 text-sm font-medium tracking-widest text-pastel-pink-deep backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/85"
              >
                زورونا
              </a>
            </div>
          </Reveal>
        </Reveal>

        {/* Image column — appears on the left in RTL */}
        <Reveal delay={120} className="relative flex items-center justify-center">
          {/* Decorative blurred orbs */}
          <div className="absolute h-72 w-72 rounded-full bg-pastel-pink opacity-60 blur-3xl md:h-[500px] md:w-[500px]" aria-hidden />
          <div className="absolute h-64 w-64 rounded-full border border-soft-green-deep/10 md:h-[420px] md:w-[420px]" aria-hidden />

          <div className="group relative">
            <div className="absolute inset-0 scale-90 rounded-full bg-white/30 blur-2xl" aria-hidden />
            <div className="relative w-72 md:w-[420px] lg:w-[450px]">
              <img
                src={cookieClassic}
                alt="كوكيز Tara الطازجة"
                width={1024}
                height={768}
                className="aspect-[4/5] w-full rotate-3 rounded-3xl border-8 border-white bg-card object-cover shadow-cocoa transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.02]"
              />
              {/* Floating glass badge */}
              <div className="absolute -bottom-8 -left-6 max-w-[220px] -rotate-3 rounded-2xl border border-white/40 bg-white/70 p-5 shadow-pink-strong backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 md:-left-12 md:p-6">
                <h3 className="font-hero-display text-2xl text-soft-green-deep">تارا كافيه</h3>
                <p className="font-hero-serif mt-1.5 text-lg leading-snug text-muted-rose">
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
    <section
      id={section.id}
      className={`relative scroll-mt-24 overflow-hidden py-12 sm:py-24 ${
        section.id === "cold-drinks" || section.id === "mojito" ? `${section.tint} section-tint` : "section-cream"
      }`}
    >
      <div className="cookie-crumbs pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="section-head relative mb-7 overflow-hidden rounded-[1.5rem] border border-soft-green-deep/10 bg-card/85 px-3.5 py-4 shadow-pink backdrop-blur-sm sm:mb-10 sm:rounded-2xl sm:px-6 sm:py-6">
            <div className="absolute inset-y-0 right-0 w-1.5 bg-pastel-pink-deep" aria-hidden />
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-soft-green text-soft-green-deep ring-4 ring-pastel-pink/45 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="mb-0.5 font-card text-[0.7rem] font-bold text-pastel-pink-deep sm:text-sm">اختيارات Tara</p>
                  <h2 className="truncate font-display text-xl font-bold text-cocoa sm:text-4xl">{section.title}</h2>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-soft-green-deep/10 bg-soft-green/60 px-2.5 py-1 font-card text-[0.7rem] font-bold text-soft-green-deep sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm">
                <span className="text-sm leading-none text-pastel-pink-deep sm:text-base">{section.items.length}</span>
                <span>صنف</span>
              </span>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {section.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 6) * 65} className="h-full">
              <article className="menu-card card-gloss group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-2.5 card-shadow transition-all duration-500 hover:-translate-y-2 hover:card-shadow-hover sm:rounded-[2rem] sm:p-4">
                {/* Image container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.2rem] bg-pastel-pink/30 sm:rounded-[1.5rem]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/12 via-transparent to-white/25" aria-hidden />
                </div>

                {/* Content */}
                <div className="flex min-w-0 flex-1 flex-col items-center justify-start px-0.5 pb-1 pt-3 text-center sm:px-2 sm:pt-5">
                  <h3 className="font-card text-[0.95rem] font-bold leading-snug text-cocoa sm:text-lg md:text-xl">
                    {item.name}
                  </h3>

                  {/* Prices */}
                  <div className="mt-auto flex w-full flex-wrap items-center justify-center gap-1.5 pt-2.5 sm:gap-2 sm:pt-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-pastel-pink/60 px-2 py-1 text-[0.7rem] font-bold text-pastel-pink-deep sm:px-2.5 sm:text-sm">
                      <span className="font-normal opacity-75">ل.س</span>
                      {item.price.sy}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-soft-green/60 px-2 py-1 text-[0.7rem] font-bold text-soft-green-deep sm:px-2.5 sm:text-sm">
                      <span className="font-normal opacity-75">$</span>
                      {item.price.usd}
                    </span>
                  </div>

                  <div className="mt-2 hidden items-center justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                    <div className="h-1 w-1 rounded-full bg-pastel-pink-deep/40" />
                    <span className="text-xs font-semibold text-pastel-pink-deep/60">Tara Special</span>
                    <div className="h-1 w-1 rounded-full bg-pastel-pink-deep/40" />
                  </div>
                </div>

                {/* Decorative hover glow */}
                <div className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-pastel-pink/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/50" />
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
    <footer id="visit-us" className="cookie-dots scroll-mt-20 border-t border-soft-green-deep/10 bg-soft-green pb-32 pt-16 sm:pb-36 sm:pt-20">
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
