"use client";

import {
  ArrowDownRight,
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  Flower2,
  Heart,
  Mail,
  Menu,
  Music2,
  PartyPopper,
  Smile,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  CONTACT_EMAIL,
  FAQS,
  NAV_ITEMS,
  SESSIONS,
  TESTIMONIALS,
  WHY_JHOOM,
} from "./site-data";

const enquiryHref = `mailto:${CONTACT_EMAIL}?subject=Dance%20Session%20Enquiry`;

const sessionIcons = [Heart, Users, PartyPopper, Baby, Sparkles, Flower2];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jhoom Curations home">
          <span className="brand-mark" aria-hidden="true">J</span>
          <span>Jhoom <em>Curations</em></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="button button-small header-cta" href={enquiryHref}>
          Let&apos;s Dance <ArrowDownRight size={17} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button" href={enquiryHref}>Let&apos;s Dance <ArrowRight size={17} /></a>
          </nav>
        )}
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Dance for every body. Every age. Every mood.</p>
          <h1>Anybody Can Dance <span>Their Heart Out</span></h1>
          <p className="hero-intro">
            At Jhoom Curations by AmiLohith, dance is not about being perfectly
            flexible or professionally trained. It is about expressing yourself,
            leaving your stress behind, and finding joy in every movement.
          </p>
          <div className="hero-actions">
            <a className="button" href={enquiryHref}>Start Your Dance Journey <ArrowRight size={19} /></a>
            <a className="text-link" href="#about">Discover Jhoom <ArrowDownRight size={18} /></a>
          </div>
          <ul className="trust-list" aria-label="Jhoom session highlights">
            {["Beginner friendly", "All age groups", "Personalised sessions"].map((item) => (
              <li key={item}><Check size={15} /> {item}</li>
            ))}
          </ul>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of joyful dance and movement" role="img">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <div className="dance-card card-coral">
            <span className="mini-label">No steps to prove.</span>
            <strong>Just joy<br />to find.</strong>
            <Smile size={40} strokeWidth={1.5} />
          </div>
          <div className="dancer-shape" aria-hidden="true">
            <span className="head" />
            <span className="body" />
            <span className="arm arm-left" />
            <span className="arm arm-right" />
            <span className="leg leg-left" />
            <span className="leg leg-right" />
          </div>
          <div className="dance-card card-saffron">
            <Music2 size={22} />
            <span>Move in your<br /><strong>own language.</strong></span>
          </div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✺</span>
        </div>
      </section>

      <section className="welcome section" aria-labelledby="welcome-heading">
        <div className="section-heading split-heading">
          <div><p className="kicker">Come as you are</p><h2 id="welcome-heading">Dance Has No<br /><em>Entry Requirements</em></h2></div>
          <p>Perfection can wait outside. This is a space to move, breathe, laugh, and feel like yourself.</p>
        </div>
        <div className="welcome-grid">
          {[
            ["01", "Never danced before?", "You are welcome."],
            ["02", "Think you are too stiff?", "You are welcome."],
            ["03", "Want to release stress?", "You are welcome."],
            ["04", "Young, old, shy, expressive, trained or completely new?", "You are welcome."],
          ].map(([number, title, copy]) => (
            <article className="welcome-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="rhythm-line"><Music2 /> You bring yourself. We&apos;ll help you find your rhythm.</p>
      </section>

      <section className="about section" id="about">
        <div className="portrait-placeholder">
          {/* Replace this placeholder with AmiLohith's photograph before publishing. */}
          <div className="portrait-art" role="img" aria-label="Placeholder for a future photograph of AmiLohith">
            <span className="portrait-initial">A</span>
            <span className="portrait-caption">Photo of AmiLohith<br />coming soon</span>
          </div>
          <span className="portrait-badge">Curated with heart <Heart size={17} fill="currentColor" /></span>
        </div>
        <div className="about-copy">
          <p className="kicker">The person behind Jhoom</p>
          <h2>Meet <em>AmiLohith</em></h2>
          <p>
            AmiLohith created Jhoom Curations with one simple belief: dance should
            belong to everyone. Every session is thoughtfully curated around the
            individual, helping students feel comfortable, expressive, confident,
            and happy.
          </p>
          <p>
            Whether you arrive after a stressful day or step into a dance class
            for the first time, the goal is for you to leave smiling.
          </p>
          <blockquote>“Expressions are mandatory.<br /><span>The smile will come naturally.</span>”</blockquote>
        </div>
      </section>

      <section className="sessions section" id="sessions">
        <div className="section-heading split-heading">
          <div><p className="kicker">Every person moves differently</p><h2>Curated <em>Around You</em></h2></div>
          <p>From a first solo step to a full family celebration, every session meets you at your pace.</p>
        </div>
        <div className="sessions-grid">
          {SESSIONS.map((session, index) => {
            const Icon = sessionIcons[index];
            return (
              <article className="session-card" key={session.title}>
                <div className="icon-box"><Icon /></div>
                <span className="card-number">0{index + 1}</span>
                <h3>{session.title}</h3>
                <p>{session.description}</p>
                <a href={enquiryHref} aria-label={`Enquire about ${session.title}`}>
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
          <h2>Why People<br /><em>Jhoom With Us</em></h2>
          <p>We make room for the person before we plan the choreography.</p>
          <div className="why-seal"><Smile /><span>Happiness<br />over perfection</span></div>
        </div>
        <div className="benefit-list">
          {WHY_JHOOM.map((benefit, index) => (
            <div className="benefit" key={benefit}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{benefit}</p>
              <Check size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="marquee" aria-hidden="true"><span>EVERYONE CAN JHOOM • EVERYONE CAN JHOOM •&nbsp;</span></div>
        <div className="statement-inner">
          <p className="kicker">One dance floor. Infinite kinds of joy.</p>
          <h2>Bacche. Bade. Beginners.<br />Dancers. Non-dancers.<br /><em>Everyone can Jhoom.</em></h2>
          <p>Hindi, Telugu or English. Flexible or stiff. Confident or nervous. There is a place for you here.</p>
          <div className="language-pills"><span>हिन्दी</span><span>తెలుగు</span><span>English</span></div>
        </div>
      </section>

      <section className="journey section">
        <div className="section-heading centered">
          <p className="kicker">Three easy steps</p>
          <h2>Your <em>Jhoom Journey</em></h2>
        </div>
        <div className="journey-grid">
          {[
            ["01", "Tell Us About Yourself", "Share what kind of session or choreography you are looking for.", Mail],
            ["02", "Get a Curated Experience", "The session is planned around your comfort, goals, ability, and personality.", Sparkles],
            ["03", "Dance, Express and Smile", "Learn the choreography, enjoy the process, and dance your heart out.", Smile],
          ].map(([number, title, copy, Icon]) => {
            const StepIcon = Icon as typeof Mail;
            return <article className="journey-step" key={number as string}>
              <span className="step-number">{number as string}</span><StepIcon />
              <h3>{title as string}</h3><p>{copy as string}</p>
            </article>;
          })}
        </div>
      </section>

      <section className="testimonials section">
        <div className="section-heading centered">
          <p className="kicker">Joy, in their words</p>
          <h2>Reasons to <em>Keep Moving</em></h2>
          <p className="placeholder-note">Sample testimonials — replace with verified customer feedback before publishing.</p>
        </div>
        {/* These placeholder testimonials must be replaced with real customer feedback before publishing. */}
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.label}>
              <div className="stars" aria-label="Decorative five stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption><span className="avatar"><Heart /></span><span><strong>{testimonial.label}</strong><small>Placeholder feedback</small></span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="faq section" aria-labelledby="faq-heading">
        <div className="faq-intro"><p className="kicker">Good to know</p><h2 id="faq-heading">Questions Before<br />You <em>Jhoom?</em></h2><p>Still curious? We would love to hear from you.</p><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Email us <ArrowRight size={18} /></a></div>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<ChevronDown aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-spark contact-spark-one">✦</span>
        <span className="contact-spark contact-spark-two">✺</span>
        <p className="kicker kicker-light">This is your sign</p>
        <h2>Ready to Dance<br /><em>Your Heart Out?</em></h2>
        <p>Tell us a little about yourself, the type of choreography you need, and what would make the experience special for you.</p>
        <a className="button button-light" href={enquiryHref}>Email Jhoom Curations <Mail size={19} /></a>
        <a className="visible-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <small><Sparkles size={14} /> No experience required. Just bring your enthusiasm.</small>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="brand brand-light" href="#home"><span className="brand-mark">J</span><span>Jhoom <em>Curations</em></span></a>
          <p>Personalised dance experiences for every body, every age, and every mood.</p>
        </div>
        <div><h3>Explore</h3>{NAV_ITEMS.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div><h3>Say hello</h3><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><a href="#" aria-label="Instagram profile placeholder">Instagram coming soon</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Jhoom Curations by AmiLohith</span><span>Made with rhythm, expression and joy. <Heart size={14} fill="currentColor" /></span></div>
      </footer>
    </main>
  );
}
