'use client';

import {
  ArrowDownRight,
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  Heart,
  Mail,
  Menu,
  Music2,
  PartyPopper,
  Smile,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CONTACT_EMAIL,
  FAQS,
  INSTAGRAM_URL,
  NAV_ITEMS,
  SESSIONS,
  TESTIMONIALS,
  WHATSAPP_URL,
  WHY_JHOOM,
} from './site-data';

const enquiryHref = `mailto:${CONTACT_EMAIL}?subject=Dance%20Session%20Enquiry`;

const sessionIcons = [Heart, PartyPopper, Baby, Sparkles];

function WhatsAppBrandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="13"
      height="13"
      fill="currentColor"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 8.039 0C3.53 0-.128 3.658-.128 8.168c0 1.437.376 2.84 1.091 4.078L0 16l3.822-1.003a8.146 8.146 0 0 0 4.217 1.17h.004c4.509 0 8.167-3.659 8.167-8.169a8.13 8.13 0 0 0-2.609-5.672zM8.043 14.74a6.62 6.62 0 0 1-3.372-.922l-.242-.144-2.267.595.605-2.21-.157-.248a6.61 6.61 0 0 1-1.016-3.53c0-3.66 2.978-6.638 6.64-6.638 1.773 0 3.44.69 4.693 1.943a6.593 6.593 0 0 1 1.945 4.695c-.002 3.66-2.98 6.638-6.64 6.638zm3.626-4.95c-.198-.099-1.17-.578-1.352-.643-.18-.066-.312-.099-.444.1-.132.198-.51.643-.625.775-.116.132-.23.149-.429.05-.198-.1-.836-.308-1.592-.982-.588-.523-.986-1.17-1.103-1.369-.115-.198-.012-.305.087-.404.09-.09.198-.231.297-.347.099-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.444-1.07-.609-1.466-.16-.387-.323-.334-.444-.34l-.378-.007a.725.725 0 0 0-.528.248c-.182.198-.693.677-.693 1.651 0 .975.71 1.916.81 2.049.099.132 1.4 2.136 3.394 2.995.474.205.844.327 1.132.418.476.151.909.13 1.251.079.382-.057 1.17-.478 1.336-.94.165-.462.165-.858.115-.94-.05-.083-.182-.133-.38-.232z" />
    </svg>
  );
}

function InstagramBrandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="13"
      height="13"
      fill="currentColor"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.93 3.93 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76c-.198.509-.332 1.09-.372 1.943C.01 5.556 0 5.829 0 8c0 2.171.01 2.444.048 3.297.04.853.174 1.434.372 1.943.205.527.478.974.923 1.417.444.445.89.719 1.417.923.509.198 1.09.332 1.943.372C5.556 15.99 5.829 16 8 16c2.171 0 2.444-.01 3.297-.048.853-.04 1.434-.174 1.943-.372a3.93 3.93 0 0 0 1.417-.923 3.93 3.93 0 0 0 .923-1.417c.198-.509.332-1.09.372-1.943.038-.853.048-1.126.048-3.297 0-2.171-.01-2.444-.048-3.297-.04-.853-.174-1.434-.372-1.943a3.93 3.93 0 0 0-.923-1.417A3.93 3.93 0 0 0 13.24.42c-.509-.198-1.09-.332-1.943-.372C10.444.01 10.171 0 8 0zm0 1.441c2.134 0 2.384.008 3.232.046.784.036 1.21.166 1.493.276.374.145.64.319.92.599.281.281.455.547.6.921.109.282.24.708.275 1.492.038.848.046 1.098.046 3.232s-.008 2.384-.046 3.232c-.036.784-.166 1.21-.276 1.493a2.49 2.49 0 0 1-.599.92c-.281.281-.547.455-.921.6-.282.109-.708.24-1.492.275-.848.038-1.098.046-3.232.046s-2.384-.008-3.232-.046c-.784-.036-1.21-.166-1.493-.276a2.49 2.49 0 0 1-.92-.599 2.49 2.49 0 0 1-.6-.921c-.109-.282-.24-.708-.275-1.492C1.45 10.384 1.441 10.134 1.441 8s.008-2.384.046-3.232c.036-.784.166-1.21.276-1.493.145-.374.319-.64.599-.92.281-.281.547-.455.921-.6.282-.109.708-.24 1.492-.275C5.616 1.45 5.866 1.441 8 1.441zm0 2.453A4.106 4.106 0 1 0 8 12.106 4.106 4.106 0 0 0 8 3.894zm0 6.772A2.666 2.666 0 1 1 8 5.334a2.666 2.666 0 0 1 0 5.332zm4.271-7.845a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z" />
    </svg>
  );
}

function BrandLogo() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="brand-logo"
        src="/logo.png"
        alt=""
        width="1200"
        height="1200"
      />
      <span className="brand-lockup">
        <span>
          Jhoom <em>Curations</em>
        </span>
        <small>By Amilohit</small>
      </span>
    </>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reducedMotion) return;

    const targets = document.querySelectorAll<HTMLElement>(
      '.section-heading, .welcome-card, .about-visual, .about-copy, .session-card, .why-intro, .benefit, .statement-inner, .journey-step, .testimonial-grid figure, .faq-intro, .faq-list, .contact > *, footer > *',
    );

    document.documentElement.classList.add('motion-ready');
    targets.forEach((target, index) => {
      target.dataset.reveal = '';
      target.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jhoom Curations home">
          <BrandLogo />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="button button-small header-cta" href={enquiryHref}>
          Let&apos;s Dance <ArrowDownRight size={17} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && (
        <div
          className="mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="mobile-panel-head">
            <a
              className="brand"
              href="#home"
              aria-label="Jhoom Curations home"
              onClick={() => setMenuOpen(false)}
            >
              <BrandLogo />
            </a>
            <button
              className="panel-close"
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X />
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>
                  <small>0{index + 1}</small>
                  {item.label}
                </span>
                <ChevronDown size={18} />
              </a>
            ))}
          </nav>
          <a className="button mobile-dance-cta" href={enquiryHref}>
            Let&apos;s Dance <ArrowRight size={17} />
          </a>
          <div className="mobile-founder-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="founder-photo"
              src="/amilohit.png"
              alt="Amilohit, founder of Jhoom Curations"
            />
            <div>
              <span>The person behind Jhoom Curations</span>
              <strong>Meet Amilohit</strong>
            </div>
          </div>
        </div>
      )}

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={16} /> Dance for every body. Every age. Every mood.
          </p>
          <h1 className="hero-title">
            <span className="hero-small">aapka</span>
            <span className="hero-main">Har Rasam</span>
            <span className="hero-main">Har Rishta</span>
            <span className="hero-main">Har Jhoom</span>
            <span className="hero-small hero-closing">hamaare saath</span>
          </h1>
          <p className="hero-intro">
            At Jhoom Curations by Amilohit, dance is not about being perfectly
            flexible or professionally trained. It is about expressing yourself,
            leaving your stress behind, and finding joy in every movement.
          </p>
          <div className="hero-actions">
            <a className="button" href={enquiryHref}>
              Start Your Dance Journey <ArrowRight size={19} />
            </a>
            <a className="text-link" href="#about">
              Discover Jhoom <ArrowDownRight size={18} />
            </a>
          </div>
          <ul className="trust-list" aria-label="Jhoom session highlights">
            {[
              'Beginner friendly',
              'All age groups',
              'Personalised sessions',
            ].map((item) => (
              <li key={item}>
                <Check size={15} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-art" aria-label="Jhoom Curations logo" role="img">
          <img
            className="hero-art-logo-shadow"
            src="/logo-outline.png"
            alt=""
            aria-hidden="true"
          />
          <img
            className="hero-art-logo"
            src="/logo-outline.png"
            alt="Jhoom Curations logo"
          />
        </div>
      </section>

      <section className="welcome section" aria-labelledby="welcome-heading">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Come as you are</p>
            <h2 id="welcome-heading">
              Dance Has No
              <br />
              <em>Entry Requirements</em>
            </h2>
          </div>
          <p>
            Perfection can wait outside. This is a space to move, breathe,
            laugh, and feel like yourself.
          </p>
        </div>
        <div className="welcome-grid">
          {[
            ['01', 'Never danced before?', 'You are welcome.'],
            ['02', 'Think you are too stiff?', 'You are welcome.'],
            ['03', 'Want to release stress?', 'You are welcome.'],
            [
              '04',
              'Young, old, shy, expressive, trained or completely new?',
              'You are welcome.',
            ],
          ].map(([number, title, copy], index) => (
            <details
              className="welcome-card"
              key={number}
              open={index === 0 ? true : undefined}
            >
              <summary>
                <span>{number}</span>
                <h3>{title}</h3>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{copy}</p>
            </details>
          ))}
        </div>
        <p className="rhythm-line">
          <Music2 /> You bring yourself. We&apos;ll help you find your rhythm.
        </p>
      </section>

      <section className="about section" id="about">
        <div className="about-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/amilohit.png"
            alt="Amilohit, founder of Jhoom Curations"
            width="1024"
            height="1536"
          />
          <div className="about-image-shade" aria-hidden="true" />
          <span className="portrait-badge">
            Curated with heart <Heart size={17} fill="currentColor" />
          </span>
        </div>
        <div className="about-copy">
          <p className="kicker">The Person Behind Jhoom Curations</p>
          <h2>
            Meet <em>Amilohit</em>
          </h2>
          <p>
            Amilohit is an experienced dance educator who curates choreography
            for students across all age groups and experience levels. His work
            has taken shape in schools, colleges, communities, studios, and
            other learning environments—always guided by the belief that dance
            should feel accessible to everyone.
          </p>
          <p>
            Each experience is shaped around the individual: their pace,
            comfort, personality, and goals. With a warm focus on confidence,
            expression, and enjoyment, he helps dancers and non-dancers alike
            discover movement without pressure or judgement.
          </p>
          <blockquote>
            &quot;Expressions come with confidence.{' '}
            <span>The smile will come naturally.&quot;</span>
          </blockquote>
        </div>
      </section>

      <section className="sessions section" id="sessions">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Every person moves differently</p>
            <h2>
              Curated <em>Around You</em>
            </h2>
          </div>
          <p>
            From a first solo step to a full family celebration, every session
            meets you at your pace.
          </p>
        </div>
        <div className="sessions-grid">
          {SESSIONS.map((session, index) => {
            const Icon = sessionIcons[index];
            return (
              <article className="session-card" key={session.title}>
                <div className="icon-box">
                  <Icon />
                </div>
                <span className="card-number">0{index + 1}</span>
                <h3>{session.title}</h3>
                <p>{session.description}</p>
                {session.levels && (
                  <div className="session-levels">
                    {session.levels.map((level) => (
                      <div className="session-level" key={level.label}>
                        <span>{level.label}</span>
                        <small>{level.detail}</small>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href={enquiryHref}
                  aria-label={`Enquire about ${session.title}`}
                >
                  Enquire by email <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="why section" id="why-jhoom">
        <div className="why-intro">
          <p className="kicker kicker-light">Space to be yourself</p>
          <h2>
            Why People
            <br />
            <em>Jhoom With Us</em>
          </h2>
          <p>We make room for the person before we plan the choreography.</p>
          <div className="why-seal">
            <Smile />
            <span>
              Happiness
              <br />
              over perfection
            </span>
          </div>
        </div>
        <div className="benefit-list">
          {WHY_JHOOM.map((benefit, index) => (
            <div className="benefit" key={benefit}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{benefit}</p>
              <Check size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div className="marquee-group" key={group}>
                {Array.from({ length: 4 }, (_, item) => (
                  <span key={item}>
                    let us be a part of your memories <b>•</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="statement-inner">
          <p className="kicker">One dance floor. Infinite kinds of joy.</p>
          <h2>
            Bacche. Bade. Beginners.
            <br />
            Dancers. Non-dancers.
            <br />
            <em>Everyone can Jhoom.</em>
          </h2>
        </div>
      </section>

      <section className="journey section">
        <div className="section-heading centered">
          <p className="kicker">Three easy steps</p>
          <h2>
            Your <em>Jhoom Journey</em>
          </h2>
        </div>
        <div className="journey-grid">
          {[
            [
              '01',
              'Tell Us About Yourself',
              'Share what kind of session or choreography you are looking for.',
              Mail,
            ],
            [
              '02',
              'Get a Curated Experience',
              'The session is planned around your comfort, goals, ability, and personality.',
              Sparkles,
            ],
            [
              '03',
              'Dance, Express and Smile',
              'Learn the choreography, enjoy the process, and dance your heart out.',
              Smile,
            ],
          ].map(([number, title, copy, Icon]) => {
            const StepIcon = Icon as typeof Mail;
            return (
              <article className="journey-step" key={number as string}>
                <span className="step-number">{number as string}</span>
                <StepIcon />
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="testimonials section">
        <div className="section-heading centered">
          <p className="kicker">Joy, in their words</p>
          <h2>
            Reasons to <em>Keep Moving</em>
          </h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.label}>
              <div className="stars" aria-label="Decorative five stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
              <figcaption>
                <span className="avatar">
                  <Heart />
                </span>
                <span>
                  <strong>{testimonial.label}</strong>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="faq section" aria-labelledby="faq-heading">
        <div className="faq-intro">
          <p className="kicker">Good to know</p>
          <h2 id="faq-heading">
            Questions Before
            <br />
            You <em>Jhoom?</em>
          </h2>
          <p>Still curious? We would love to hear from you.</p>
          <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
            Email us <ArrowRight size={18} />
          </a>
        </div>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-spark contact-spark-one">✦</span>
        <span className="contact-spark contact-spark-two">✺</span>
        <p className="kicker kicker-light">This is your sign</p>
        <h2>
          Ready to Dance
          <br />
          <em>Your Heart Out?</em>
        </h2>
        <p>
          Tell us a little about yourself, the type of choreography you need,
          and what would make the experience special for you.
        </p>
        <a className="button button-light" href={enquiryHref}>
          Email Jhoom Curations <Mail size={19} />
        </a>
        <a className="visible-email" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <small>
          <Sparkles size={14} /> No experience required. Just bring your
          enthusiasm.
        </small>
      </section>

      <footer>
        <div className="footer-brand">
          <a
            className="brand brand-light"
            href="#home"
            aria-label="Jhoom Curations home"
          >
            <BrandLogo />
          </a>
          <p>
            Personalised dance experiences for every body, every age, and every
            mood.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Say hello</h3>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            <Mail size={13} /> {CONTACT_EMAIL}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppBrandIcon /> WhatsApp
          </a>
          <a href={INSTAGRAM_URL} aria-label="Jhoom Curations on Instagram">
            <InstagramBrandIcon /> Instagram
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jhoom Curations by Amilohit</span>
          <span>
            Made with rhythm, expression and joy.{' '}
            <Heart size={14} fill="currentColor" />
          </span>
        </div>
      </footer>
    </main>
  );
}
