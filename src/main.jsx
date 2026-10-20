import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import heroImage from '../hero.jpg';

const navItems = ['Home', 'About Us', 'Products', 'Why ariviyaa', 'Expo & Events', 'Resources', 'Contact Us'];

const images = {
  hero: heroImage,
  heroCow: heroImage,
  lab: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=700&q=80',
  cows: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
  rangeFarm: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=420&q=80',
  rangePet: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=420&q=80',
  rangePoultry: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=420&q=80',
  rangePersonal: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=420&q=80',
  eventOne: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=500&q=80',
  eventTwo: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=500&q=80',
  eventThree: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80',
  landscape: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
  sprout: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80',
  meadow: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=70',
};

const iconShapes = {
  beaker: ['M9 3h6', 'M10 3v5l-4 7a4 4 0 0 0 3.5 6h5a4 4 0 0 0 3.5-6l-4-7V3', 'M8 15h8'],
  shield: ['M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z', 'M9 12l2 2 4-5'],
  users: ['M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M3 20c1-4 4-6 8-6s7 2 8 6'],
  globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M3 12h18', 'M12 3c3 3 3 15 0 18', 'M12 3c-3 3-3 15 0 18'],
  heart: ['M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z', 'M8 12h3l1-3 2 6 1-3h2'],
  sprout: ['M12 21V9', 'M12 12c-4 0-6-2-7-6 4 0 7 2 7 6z', 'M12 10c4 0 6-2 7-6-4 0-7 2-7 6z'],
  milk: ['M9 3h6l1 4v13H8V7l1-4z', 'M9 7h7', 'M10 12h4'],
  flask: ['M10 3h4', 'M11 3v6l-5 8a3 3 0 0 0 3 4h6a3 3 0 0 0 3-4l-5-8V3', 'M8 16h8'],
  target: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
  trend: ['M4 17l5-5 4 4 7-8', 'M15 8h5v5'],
  trophy: ['M8 4h8v5a4 4 0 0 1-8 0V4z', 'M8 6H5a3 3 0 0 0 3 5', 'M16 6h3a3 3 0 0 1-3 5', 'M12 13v5', 'M8 21h8'],
  hand: ['M7 13l3 3a3 3 0 0 0 4 0l5-5', 'M2 12l5-5 4 4', 'M22 12l-5-5-4 4'],
  coin: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v10', 'M9 10c0-2 6-2 6 0s-6 2-6 4 6 2 6 0'],
  phone: ['M6 4l4 4-2 2c1 3 3 5 6 6l2-2 4 4-2 3c-8 0-15-7-15-15l3-2z'],
  mail: ['M3 5h18v14H3z', 'M3 7l9 7 9-7'],
  pin: ['M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z', 'M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
  social: ['M5 19L19 5', 'M8 5h11v11'],
  left: ['M15 6l-6 6 6 6'],
  right: ['M9 6l6 6-6 6'],
  cube: ['M12 2l8 4.5v9L12 22l-8-6.5v-9L12 2z', 'M4 6.5l8 4.5 8-4.5', 'M12 11v11'],
  calendar: ['M4 6h16v14H4z', 'M4 10h16', 'M8 3v4', 'M16 3v4'],
  drop: ['M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z', 'M9 14a3 3 0 0 0 3 3'],
  spray: ['M8 9h6v12H8z', 'M10 9V5h4l3-2', 'M14 5h2', 'M18 7h2', 'M18 10h2'],
  box: ['M3 8l9-5 9 5v8l-9 5-9-5V8z', 'M3 8l9 5 9-5', 'M12 13v8'],
};

function LineIcon({ name, className = '', ...props }) {
  return (
    <svg className={`icon-svg ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {iconShapes[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const icon = (name) => function IconComponent(props) {
  return <LineIcon name={name} {...props} />;
};

iconShapes.check = ['M5 12.5l4.5 4.5L19 7'];

const asset = (name) => `/assets/site/${name}`;

/* ---------- Content (from contend.txt) ---------- */
const productRanges = [
  { name: 'Farm Product', image: images.rangeFarm, icon: 'drop' },
  { name: 'Pet Product', image: images.rangePet, icon: 'heart' },
  { name: 'Poultry & Farm', image: images.rangePoultry, icon: 'shield' },
  { name: 'Personal Health Care', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=420&q=80', icon: 'sprout' },
];

const aboutFacts = [
  ['Founded', '2021, Thanjavur', icon('sprout')],
  ['Incubated at', 'Periyar TBI', icon('flask')],
  ['Indian Patent', 'Granted 2024', icon('shield')],
  ['Recognised by', 'DPIIT, Govt. of India', icon('trophy')],
];

const team = [
  { name: 'Dr. M. Sivakumar', role: 'Director / CTO', bio: 'Ph.D in Polymer Technology. Worked in Singapore and Japan; 25 years in research and product development.', image: asset('team-sivakumar.jpg') },
  { name: 'Dr. Chinnadurai', role: 'Director & VP', bio: 'B.V.Sc, farm veterinarian. Worked in Singapore, Malaysia and Africa; 20 years in farm animal health care.', image: asset('team-chinnadurai.jpg') },
  { name: 'Swami', role: 'Mentor', bio: 'B.E Instrumentation, working in Silicon Valley (CISCO, California). Founder of several startups.', image: asset('team-swami.jpg') },
];

const events = [
  { title: 'Vanakkam Startups', place: 'Tamil Nadu startup showcase', badge: 'SHOWCASE', image: asset('event-vanakkam-startups.jpg') },
  { title: 'Startup India – Dettol Pitching Session', place: 'Invest India & RB Health', badge: 'WINNER', image: asset('event-dettol-pitch.jpg') },
  { title: 'Young Indians (Yi) – CII Startup Award', place: 'Confederation of Indian Industry', badge: 'AWARD', image: asset('event-yi-cii-award.jpg') },
];

const awards = [
  { year: '2025', highlight: '₹19 Lakh', title: 'SBI Foundation – C-CAMP AMR #2', detail: 'Compulsory convertible debentures, Bengaluru', icon: 'coin' },
  { year: '2025', highlight: '₹20 Lakh', title: 'Silverline Broilers', detail: 'Equity-based fund', icon: 'trend' },
  { year: '2022', highlight: '₹10 Lakh', title: 'StartupTN TANSEED 3.0', detail: 'Seed grant, Govt. of Tamil Nadu — 1 of 31 winners from 1,600+ applicants', icon: 'sprout' },
  { year: '2021', highlight: 'Top 500', title: "Kuberan's House", detail: "Recognised among India's top startups at the biggest startup show", icon: 'trophy' },
  { year: '2020', highlight: 'Winner', title: "Dettol's Innovate With Purpose", detail: 'Innovative disinfectant challenge — Invest India, £3,000', icon: 'shield' },
];

const awardSummary = [
  ['₹49L+', 'Funding & grants'],
  ['5', 'National recognitions'],
  ['1 of 31', 'TANSEED 3.0 winners'],
];

const certificates = [
  { title: 'Dettol Innovate With Purpose – Winner', image: asset('cert-dettol-winner.jpg') },
  { title: "Kuberan's House – Top 500 Startups", image: asset('cert-kuberans-house.jpg') },
  { title: 'TANSEED 3.0 – Agribusiness Winner', image: asset('award-tanseed.jpg') },
];

const reasons = [
  ['Deep-Tech NaxPoly Platform', 'Proprietary bio-nanotechnology delivering targeted hygiene and biosecurity for dairy, pet and poultry.', icon('flask')],
  ['Non-Antibiotic & AMR-Safe', 'Fights broad-spectrum pathogens without driving antimicrobial resistance or leaving toxic residues.', icon('shield')],
  ['Eco-Friendly & Biodegradable', 'Plant-derived, bio-based formulations that degrade naturally without polluting soil, water or farms.', icon('sprout')],
  ['Cost-Effective Prevention', 'Reduces losses from mastitis, flock infections and chronic wounds by preventing rather than treating.', icon('coin')],
  ['Tested Safe on OECD Protocols', 'Non-irritating and non-corrosive — free of chlorhexidine, parabens and toxic heavy metals.', icon('beaker')],
  ['Proven Institutional Backing', 'Funded by TANSEED and SBI Foundation–C-CAMP, incubated at Periyar TBI.', icon('trophy')],
];

const trustPoints = [
  ['Batch consistency', 'Every batch is quality- and stability-tested for identical potency and safety.'],
  ['Dedicated support', 'Technical guidance, product training and responsive customer service.'],
  ['Field-driven', 'Refined with field observations, veterinary validation and customer insights.'],
  ['Long-term safety', 'Chemical-free, AMR-safe formulations that protect animals and livelihoods.'],
];

const badges = [
  ['NABL', asset('badge-nabl.jpg')],
  ['GMP Certified', asset('badge-gmp.jpg')],
  ['Patented', asset('badge-patented.jpg')],
  ['TANUVAS', asset('badge-tanuvas.jpg')],
];

const usps = ['Naturally extracted collagen', 'Eco-friendly', 'Biodegradable', 'Biocompatible', 'User friendly', 'Easily washable', 'Non-toxic'];

const valuePoints = [
  'Instant film formation over the teat after every milking',
  'Improves teat score by clearing cracks, fissures and lesions',
  'Chemical-free and washable — safe for clean milk production',
  'No harm to the cow, calf, handler or farm environment',
  'Cost-effective protection against bovine mastitis',
];

const categories = [
  ['MammaryO Teat Dip', 'drop'],
  ['Teat Dip Cup', 'milk'],
  ['AnimaSpray Pet', 'spray'],
  ['Dermisward Skin Care', 'heart'],
  ['Petsha Shampoo', 'sprout'],
  ['Tick & Flea Defense', 'shield'],
  ['Surface Disinfectant', 'box'],
  ['Cleanida Floor Cleaner', 'beaker'],
];

const customerTypes = ['Dairy Farmer', 'FPO / Farmer Cluster', 'Co-operative Milk Supplier', 'Distributor / Dealer', 'Veterinary Clinic', 'Poultry Farm', 'Pet Owner', 'Other'];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ariviyaa home">
        <img src="/ariviyaa-logo.svg" alt="ariviyaa" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className={item === 'Home' ? 'active' : undefined}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-phone" href="tel:+917010105831"><LineIcon name="phone" />7010105831</a>
      <a className="header-cta" href="#partner">Partner With Us</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" style={{ '--hero-bg': `url(${images.hero})` }}>
      <div className="hero-copy">
        <h1>
          Bovine Udder Care for<br />
          Clean Milk Production (CMP)
        </h1>
        <p className="hero-text">
          Advanced &amp; effective hygiene and care solutions designed for mastitis control, udder
          health and higher milk quality.
        </p>


        <div className="actions">
          <a className="btn primary" href="#products">Explore Products</a>
          <a className="btn ghost" href="#partner">Partner With Us</a>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ icon = 'sprout', title, text, eyebrow, center = false, iconTone = 'leaf' }) {
  return (
    <div className={`section-title${center ? ' center' : ''}`}>
      {icon && <span className={`title-icon ${iconTone}`}><LineIcon name={icon} /></span>}
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p className="title-sub">{text}</p>}
      </div>
    </div>
  );
}

function ProductRange() {
  return (
    <section className="section lavender" id="resources">
      <div className="container">
        <div className="title-row">
          <SectionTitle icon="cube" iconTone="solid" title="Our Product Range" text="Targeted hygiene & biosecurity for dairy, pets, poultry and homes" />
          <a className="link-pill" href="#products">Explore All <LineIcon name="right" /></a>
        </div>
        <div className="range-grid">
          {productRanges.map((item) => (
            <a className="range-card" key={item.name} href="#products">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="range-pill">
                <span className="range-icon"><LineIcon name={item.icon} /></span>
                <span className="range-label">
                  <strong>{item.name}</strong>
                </span>
                <span className="range-arrow"><LineIcon name="right" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about-us">
      <div className="container split">
        <div>
          <SectionTitle
            eyebrow="About Us"
            title={<>Science From Thanjavur.<br /><span className="accent">Care For Every Farm.</span></>}
            text="Ariviya Deep Tech Pvt. Ltd. — a deep-tech biotechnology startup"
          />
          <p className="body-text">
            Founded in 2021 by scientists and entrepreneurs, Ariviya translates locally developed
            scientific innovation into affordable, sustainable animal healthcare. We integrate
            nanotechnology, biotechnology and polymer science to build products for animal health,
            wound management and antimicrobial protection.
          </p>
          <div className="icon-row">
            {aboutFacts.map(([label, value, Icon]) => (
              <div className="icon-item" key={label}>
                <span className="icon-circle"><Icon aria-hidden="true" /></span>
                <span><small>{label}</small>{value}</span>
              </div>
            ))}
          </div>
          <a className="btn-pill" href="#contact-us">Talk To Our Team</a>
        </div>
        <div className="about-image">
          <img className="about-photo" src={asset('products-range.jpg')} alt="Ariviyaa product range" loading="lazy" />
          <div className="mission">
            <span className="icon-circle"><LineIcon name="target" /></span>
            <div>
              <strong>Our Mission</strong>
              <p>Protect animals, improve farmers' livelihoods and support clean milk production through NaxPoly technology.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container team-block">
        <SectionTitle center icon={null} eyebrow="Leadership" title="The Team Behind Ariviyaa" />
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <img src={member.image} alt={member.name} loading="lazy" />
              <div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardTile({ award, tone = '', className = '' }) {
  return (
    <article className={`ab-tile ${tone} ${className}`}>
      <div className="ab-tile-top">
        <span className="ab-icon"><LineIcon name={award.icon} /></span>
        <span className="ab-year">{award.year}</span>
      </div>
      <strong className="ab-highlight">{award.highlight}</strong>
      <h4>{award.title}</h4>
      <p>{award.detail}</p>
    </article>
  );
}

function CertTile({ cert, className = '' }) {
  return (
    <figure className={`ab-cert ${className}`}>
      <img src={cert.image} alt={cert.title} loading="lazy" />
      <figcaption><LineIcon name="check" />{cert.title}</figcaption>
    </figure>
  );
}

function Events() {
  return (
    <section className="section lavender" id="expo-&-events">
      <div className="container events-layout">
        <div>
          <SectionTitle eyebrow="Expo & Events" title={<>Where Our Science<br /><span className="accent">Gets Recognised</span></>} />
          <p className="body-text">
            From startup showcases to national innovation challenges, Ariviya has earned industry
            credibility as a deep-tech nano-biotechnology enterprise for veterinary hygiene and biosecurity.
          </p>
          <a className="btn-pill" href="#contact-us">Meet Us At An Event</a>
        </div>
        <div className="event-cards">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-media">
                <img className="event-thumb" src={event.image} alt={event.title} loading="lazy" />
                <span className="event-badge">{event.badge}</span>
              </div>
              <h3>{event.title}</h3>
              <p><LineIcon name="pin" />{event.place}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Recognition Achievements & Awards - commented out */}
      {false && (
      <div className="wof-section">
        {/* Header */}
        <div className="container">
          <div className="wof-header">
            <div>
              <span className="wof-eyebrow"><LineIcon name="trophy" />Recognition</span>
              <h3 className="wof-title">Achievements <span>&amp; Awards</span></h3>
              <p className="wof-sub">Backed by national innovation programmes, investors and industry leaders.</p>
            </div>
            <div className="wof-stats">
              {awardSummary.map(([value, label]) => (
                <div className="wof-stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Award cards row */}
        <div className="container">
          <div className="wof-cards">
            {awards.map((award, i) => (
              <article className={`wof-card wof-card--${i}`} key={award.title}>
                <div className="wof-card-icon"><LineIcon name={award.icon} /></div>
                <span className="wof-card-year">{award.year}</span>
                <strong className="wof-card-amt">{award.highlight}</strong>
                <h4 className="wof-card-title">{award.title}</h4>
                <p className="wof-card-detail">{award.detail}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Certificates polaroid row */}
        <div className="container">
          <div className="wof-certs">
            {certificates.map((cert, i) => (
              <figure className={`wof-cert wof-cert--${i}`} key={cert.title}>
                <div className="wof-cert-frame">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </div>
                <figcaption>
                  <span className="wof-cert-check"><LineIcon name="check" /></span>
                  {cert.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      )}
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="why-section" id="why-ariviyaa">
      <div className="why-image">
        <img src={images.sprout} alt="Hands caring for young plants" loading="lazy" />
      </div>
      <div className="why-content">
        <SectionTitle
          title={<>Why Choose <span className="accent">Ariviyaa?</span></>}
          text="Advanced science, natural ingredients and animal safety in every formulation."
        />
        <div className="why-grid">
          {reasons.map(([title, description, Icon]) => (
            <article className="why-item" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="trust-row">
          <h3>Why partners &amp; customers trust us</h3>
          <ul>
            {trustPoints.map(([title, text]) => (
              <li key={title}>
                <span className="check"><LineIcon name="check" /></span>
                <div><strong>{title}</strong><p>{text}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="badge-row">
          <span>Recognitions &amp; Standards</span>
          {badges.map(([label, image]) => (
            <img key={label} src={image} alt={label} title={label} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section className="categories" id="products" style={{ '--meadow': `url(${images.meadow})` }}>
      <div className="container">
        <SectionTitle center icon={null} eyebrow="Our Products" title={<>Flagship Innovation: <span className="accent">MammaryO</span></>} text="A nano-bio post-milking teat dip that helps prevent bovine mastitis" />

        <div className="flagship">
          <img className="flagship-img" src={asset('mammaryo-poster.jpg')} alt="MammaryO post teat dip solution" loading="lazy" />
          <div className="flagship-body">
            <span className="flagship-tag">Invented with NaxPoly nano-biotechnology</span>
            <h3>Clean milk production, naturally.</h3>
            <p>
              MammaryO forms a protective physical and antimicrobial barrier rich in organic compounds
              and amino acids — mitigating pathogen invasion without contributing to antimicrobial resistance.
            </p>
            <ul className="value-list">
              {valuePoints.map((point) => (
                <li key={point}><span className="check"><LineIcon name="check" /></span>{point}</li>
              ))}
            </ul>
            <div className="usp-chips">
              {usps.map((usp) => <span key={usp}>{usp}</span>)}
            </div>
          </div>
        </div>

        {/* Our Product Line - commented out */}
        {false && (
        <>
        <h3 className="block-title center">Our Product Line</h3>
        <div className="category-row">
          {categories.map(([category, iconName]) => (
            <a className="category" key={category} href="#contact-us">
              <span className="icon-circle"><LineIcon name={iconName} /></span>
              <span>{category}</span>
            </a>
          ))}
        </div>
        </>
        )}
      </div>
    </section>
  );
}

const videoId = 'iSGUtgIoEhg';

function ProductVideo() {
  return (
    <section className="section" id="product-video">
      <div className="container split video-split">
        <div>
          <SectionTitle
            eyebrow="Product Intro"
            title={<>See MammaryO <span className="accent">In Action</span></>}
            text="Bovine udder care, explained in under a minute."
          />
          <p className="body-text">
            Watch how our post-milking teat dip fits into everyday milking routines — protecting
            teats after every milking for cleaner milk and healthier herds.
          </p>
          <ul className="tick-list">
            <li><span className="icon-circle sm"><LineIcon name="shield" /></span>Prevents bacterial infection</li>
            <li><span className="icon-circle sm"><LineIcon name="drop" /></span>Maintains udder health &amp; hygiene</li>
            <li><span className="icon-circle sm"><LineIcon name="trend" /></span>Improves milk quality &amp; productivity</li>
          </ul>
        </div>
        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title="Ariviyaa MammaryO product introduction video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: connect to backend / email service
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section className="section lavender" id="contact-us">
      <div className="container split form-split">
        <div>
          <SectionTitle
            eyebrow="Get In Touch"
            title={<>Send Us an <span className="accent">Enquiry</span></>}
            text="For dairy farms, FPOs, co-operatives, distributors and dealers."
          />
          <p className="body-text">
            Looking for MammaryO, pet care or farm biosecurity products — or a partnership? Share your
            details and our team will get back to you.
          </p>
          <ul className="contact-list">
            <li><span className="icon-circle"><LineIcon name="phone" /></span><div><small>Call us</small>+91 70101 05831</div></li>
            <li><span className="icon-circle"><LineIcon name="globe" /></span><div><small>Website</small>www.ariviya.com</div></li>
            <li><span className="icon-circle"><LineIcon name="pin" /></span><div><small>Visit</small>Periyar TBI, Vallam, Thanjavur, Tamil Nadu</div></li>
          </ul>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label>
            <span>Full Name *</span>
            <input name="name" type="text" required placeholder="Your name" />
          </label>
          <label>
            <span>Farm / Organisation</span>
            <input name="company" type="text" placeholder="Farm, FPO or company name" />
          </label>
          <label>
            <span>Phone *</span>
            <input name="phone" type="tel" required placeholder="+91" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>I am a</span>
            <select name="type" defaultValue="">
              <option value="" disabled>Select one</option>
              {customerTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
          </label>
          <label>
            <span>Product Interest</span>
            <select name="product" defaultValue="">
              <option value="" disabled>Select a product</option>
              {categories.map(([category]) => <option key={category}>{category}</option>)}
            </select>
          </label>
          <label className="full">
            <span>Message</span>
            <textarea name="message" rows="4" placeholder="Herd size, location or what you need" />
          </label>
          <div className="form-footer full">
            <button className="btn-pill" type="submit">Submit Enquiry</button>
            {sent && <p className="form-success" role="status">Thank you! We'll contact you shortly.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="cta-band" id="partner" style={{ '--cta-bg': `url(${images.landscape})` }}>
      <div className="container cta-inner">
        <h2>Prevention Is Better Than Cure</h2>
        <p>Partner with Ariviyaa to bring non-antibiotic, eco-friendly mastitis prevention to more dairy farms.</p>
        <div className="cta-actions">
          <a className="btn-pill" href="#contact-us">Become a Partner</a>
          <a className="btn-pill outline-light" href="tel:+917010105831">Call Our Team</a>
        </div>
        <div className="stats">
          <div><LineIcon name="sprout" /><strong>2021</strong><span>Founded in Thanjavur</span></div>
          <div><LineIcon name="shield" /><strong>2024</strong><span>Indian patent granted</span></div>
          <div><LineIcon name="trophy" /><strong>1 of 31</strong><span>TANSEED 3.0 winners</span></div>
          <div><LineIcon name="coin" /><strong>₹49L+</strong><span>Grants &amp; funding</span></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home" aria-label="Ariviyaa home">
            <img src="/ariviyaa-logo.svg" alt="ariviyaa" />
          </a>
          <p>Innovating for Animal Health. Inspired by Nature.</p>
          <a className="footer-phone" href="tel:+917010105831"><LineIcon name="phone" />7010105831</a>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}
        </div>
        <div>
          <h3>Our Products</h3>
          {categories.slice(0, 6).map(([category]) => <a key={category} href="#products">{category}</a>)}
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><LineIcon name="globe" />www.ariviya.com</p>
          <p><LineIcon name="pin" />Ariviya Deep Tech Pvt. Ltd., Periyar TBI, Vallam, Thanjavur, Tamil Nadu, India</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <a className="social-link" href="#footer"><span className="social-dot"><LineIcon name="social" /></span>ariviyaa_deeptech</a>
          <a className="social-link" href="#footer"><span className="social-dot"><LineIcon name="social" /></span>Ariviyaa</a>
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="footer-links" aria-label="Footer navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}
        </nav>
        <span>© {new Date().getFullYear()} Ariviya Deep Tech Pvt. Ltd. All rights reserved.</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductRange />
        <About />
        <Events />
        <WhyChoose />
        <ProductCategories />
        <ProductVideo />
        <EnquiryForm />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
