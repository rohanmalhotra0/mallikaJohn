import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import profilePhoto from '../../website images/MallikaPhoto/MallikaProfilePic.jpeg'
import aboutPhoto from '../../website images/MallikaPhoto/Screenshot 2026-03-16 at 9.47.51 PM.png'
import wellesleyLogo from '../../website images/MallikaPhoto/wellesley.jpeg'
import mitLogo from '../../website images/MallikaPhoto/mit_logo.jpeg'
import ucsfLogo from '../../website images/MallikaPhoto/ucsf_logo.jpeg'
import kiteLogo from '../../website images/MallikaPhoto/kite_pharma_inc__logo.jpeg'
import gileadLogo from '../../website images/MallikaPhoto/gilead_sciences_logo.jpeg'
import citiLogo from '../../website images/MallikaPhoto/CITI Program.jpeg'
import educationInActionCover from '../../website images/MallikaPhoto/EducationInAction.png'

const inter = Inter({ subsets: ['latin'] })

const quickFacts = [
  {
    icon: 'education',
    label: 'Education',
    value: "Wellesley '26",
    detail: 'Biology and Economics'
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'San Francisco Bay Area',
    detail: 'Research, health equity, and biotech'
  }
]

const highlightCards = [
  {
    title: 'About',
    body:
      'Mallika is pursuing a Bachelor of Arts in Biology and Economics at Wellesley College, with additional academic experience at Stanford University and MIT.'
  },
  {
    title: 'Current focus',
    body:
      "Her work sits at the intersection of clinical research, women's health, hepatology, entrepreneurship, and public-interest education."
  },
  {
    title: 'Recent momentum',
    body:
      'Recent milestones include research leadership at UCSF, the Albright Institute fellowship, a summer with Kite Pharma and Gilead, and continued rowing and mentoring at Wellesley.'
  }
]

const featuredInstitutions = [
  { name: 'Wellesley College', image: wellesleyLogo },
  { name: 'MIT', image: mitLogo },
  { name: 'UCSF', image: ucsfLogo },
  { name: 'Kite Pharma', image: kiteLogo },
  { name: 'Gilead Sciences', image: gileadLogo },
  { name: 'CITI Program', image: citiLogo }
]

const experience = [
  {
    org: 'University of California, San Francisco',
    role: 'Project Lead, Hepatology',
    period: 'Jun 2024 - Present',
    body:
      "Coordinates manuscript development with Dr. Sarkar's team, directs data collection, and shapes future research goals for a study on hepatocellular adenomas during pregnancies."
  },
  {
    org: 'University of California, San Francisco',
    role: 'Clinical Associate, Chan Zuckerberg Initiative',
    period: 'May 2024 - May 2025',
    body:
      'Collected and synthesized clinical trial data, interviewed participants, and supported the Advancing Access study and website for vulnerable populations.'
  },
  {
    org: 'Wellesley College',
    role: 'Researcher and Mentor, Darling Laboratory',
    period: 'Sep 2023 - Present',
    body:
      'Studies protein-protein interactions between cardiac potassium channel proteins, supports quantitative fluorescence microscopy work, and mentors new laboratory members.'
  },
  {
    org: 'Kite Pharma and Gilead Sciences',
    role: 'Clinical Operations Intern',
    period: 'Jun 2025 - Aug 2025',
    body:
      'Joined the Santa Monica team for a summer clinical operations internship connected to Kite Pharma and Gilead Sciences.'
  }
]

const leadership = [
  {
    title: 'Varsity Crew Athlete',
    meta: 'Wellesley College | Aug 2022 - Sep 2025',
    body:
      'Committed 25+ hours per week to training and competed with Wellesley Crew, including the Head of the Charles Regatta.'
  },
  {
    title: 'Executive Board Member',
    meta: 'Wellesley Reproductive Justice | Jan 2023 - Present',
    body:
      'Serves in leadership for reproductive justice programming and is returning as Events Chair.'
  },
  {
    title: 'Researcher',
    meta: 'The Educational Justice Institute at MIT | Jun 2024 - Present',
    body:
      'Supports currently incarcerated fellows by gathering data, conducting expert interviews, and writing for Education in Action implementation guidance.'
  }
]

const education = [
  {
    school: 'Wellesley College',
    credential: 'Bachelor of Arts, Biology and Economics',
    period: '2022 - 2026',
    detail:
      'Albright Fellow, NCAA DIII rower, executive board member across student organizations, and presenter at the Ruhlman and Tanner Conferences.'
  },
  {
    school: 'Massachusetts Institute of Technology',
    credential: 'Dual Enrollment, Entrepreneurship',
    period: 'May 2024 - Dec 2026',
    detail:
      'Entrepreneurship Lab student working on a healthtech go-to-market plan and UROP researcher for the Educational Justice Institute and Higher Education in Prison Program.'
  }
]

const featuredWork = [
  {
    title: 'Moon',
    kicker: 'Project',
    body:
      'An in-development app and tech service concept designed for female athletes.'
  },
  {
    title: "Research in women's health",
    kicker: 'Publication pipeline',
    body:
      "Articles on fertility, birth control options, and women's health are currently in publication."
  },
  {
    title: 'Education in Action guide',
    kicker: 'Public-interest research',
    body:
      'Contributed to implementation guidance on remote employment and work-based learning during incarceration.'
  }
]

const recognition = [
  {
    title: 'Madeleine Korbel Albright Institute for Global Affairs',
    meta: 'Wellesley College | Jan 2025',
    body:
      'Completed the fellowship focused on global leadership, negotiation, policy analysis, and interdisciplinary problem solving.'
  },
  {
    title: 'Best Closing Presentation',
    meta: 'Issued by Frezghi Habte | Aug 2024',
    body:
      'Recognized for presentation quality and synthesis of complex material.'
  },
  {
    title: 'CITI Good Clinical Practice Course',
    meta: 'Issued May 2024 | Expires May 2027',
    body: 'Credential ID 62854478.'
  }
]

const publications = [
  {
    title: 'Exploring Remote Employment & Work-Based Learning During Incarceration',
    meta: 'Jan 1, 2025',
    body:
      'Assisted with intensive research collection through MIT UROP and supported publication development.'
  },
  {
    title: 'union of skin and water',
    meta: 'New Ulster Poetry Magazine | Jun 1, 2021',
    body:
      "A creative publication that complements Mallika's scientific and policy-oriented work."
  }
]

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

function SiteIcon({ name }) {
  if (name === 'education') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4 3 8.5 12 13l7-3.5V16h2V8.5L12 4Zm-5 8.4V16c0 1.7 2.7 3 5 3s5-1.3 5-3v-3.6l-5 2.5-5-2.5Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Zm0-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7.04 2.02 2.02 0 0 0 5.25 3Zm15.19 9.86c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.1-3.37 1.87V8.5H9.39V20h3.38v-6.23c0-1.64.31-3.22 2.34-3.22 2 0 2.03 1.87 2.03 3.33V20h3.38v-7.14Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.6A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6Zm0 1.8A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2 8 5 8-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return null
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Mallika John | Portfolio</title>
        <meta
          name="description"
          content="Portfolio site for Mallika John featuring her research, leadership, education, publications, and health-focused work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f1ea" />
        <link rel="icon" type="image/png" href={`${basePath}/mg-favicon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
      </Head>

      <main className={`${styles.page} ${inter.className}`}>
        <nav className={styles.navbar} aria-label="Primary">
          <a className={styles.navBrand} href="#top">
            Mallika John
          </a>
          <div className={styles.navLinks}>
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className={styles.hero} id="top">
          <div className={styles.heroLayout}>
            <div className={styles.heroIntro}>
              <div className={styles.heroHeadshotFrame}>
                <Image
                  src={profilePhoto}
                  alt="Headshot of Mallika John"
                  className={styles.heroHeadshot}
                  priority
                />
              </div>

              <div className={styles.heroCopy}>
                
                <h1 className={styles.heroTitle}>Welcome to my website, I&apos;m Mallika.</h1>
                <p className={styles.heroBody}>
                  I&apos;m a Wellesley College senior studying Biology and Economics,
                  with experience across clinical research, women&apos;s health,
                  biotech, and public-interest education.
                </p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryAction} href="#experience">
                    Explore experience
                  </a>
                  <a
                    className={styles.secondaryAction}
                    href={`${basePath}/MallikaJohnResume2026.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.bioPanel}>
              <div className={styles.bioCopy}>
                <p className={styles.sectionLabel}>Biography</p>
                <p>
                  Currently pursuing a Bachelor of Arts in Biology and Economics at
                  Wellesley College, with additional academic experience at Stanford
                  University and MIT.
                </p>
                <p>
                  Across research labs, clinical operations, fellowship work, and
                  student leadership, Mallika is focused on building thoughtful,
                  human-centered systems that improve health access and opportunity.
                </p>
              
              <p>
                Beyond academics, she brings the same energy to leadership roles in
                reproductive justice, conference presentations, and varsity crew.
              </p>
              </div>

              <div className={styles.photoFrame}>
                <Image
                  src={aboutPhoto}
                  alt="Mallika John with a Wellesley teammate"
                  className={styles.profileImage}
                />
              </div>

              <div className={styles.statsColumn}>
                {quickFacts.map((fact) => (
                  <article className={styles.statCard} key={fact.label}>
                    <div className={styles.statHeader}>
                      <span className={styles.iconBadge} aria-hidden="true">
                        <SiteIcon name={fact.icon} />
                      </span>
                      <p className={styles.statLabel}>{fact.label}</p>
                    </div>
                    <p className={styles.statValue}>{fact.value}</p>
                    <p className={styles.statDetail}>{fact.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Highlights</p>
            <h2 className={styles.sectionTitle}>
              A profile shaped by science, service, and momentum.
            </h2>
          </div>
          <div className={styles.cardGrid}>
            {highlightCards.map((card) => (
              <article className={styles.infoCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Institutions</p>
            <h2 className={styles.sectionTitle}>
              Communities and organizations behind the work.
            </h2>
          </div>
          <div className={styles.logoGrid}>
            {featuredInstitutions.map((institution) => (
              <article className={styles.logoCard} key={institution.name}>
                <div className={styles.logoWrap}>
                  <Image
                    src={institution.image}
                    alt={institution.name}
                    className={styles.logoImage}
                  />
                </div>
                <p>{institution.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="experience">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Experience</p>
            <h2 className={styles.sectionTitle}>
              Research, clinical work, and operational leadership.
            </h2>
          </div>
          <div className={styles.timeline}>
            {experience.map((item) => (
              <article
                className={styles.timelineCard}
                key={`${item.org}-${item.role}`}
              >
                <div className={styles.timelineMeta}>
                  <p className={styles.timelinePeriod}>{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className={styles.timelineOrg}>{item.org}</p>
                </div>
                <p className={styles.timelineBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.dualSection}>
          <div className={styles.column}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Education</p>
              <h2 className={styles.sectionTitle}>
                Academic training across science, entrepreneurship, and policy.
              </h2>
            </div>
            <div className={styles.stack}>
              {education.map((item) => (
                <article className={styles.stackCard} key={item.school}>
                  <p className={styles.stackMeta}>{item.period}</p>
                  <h3>{item.school}</h3>
                  <p className={styles.stackSubhead}>{item.credential}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Leadership and service</p>
              <h2 className={styles.sectionTitle}>
                Commitments beyond the lab.
              </h2>
            </div>
            <div className={styles.stack}>
              {leadership.map((item) => (
                <article className={styles.stackCard} key={item.title}>
                  <p className={styles.stackMeta}>{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureCard}>
            <div className={styles.featureCopy}>
              <p className={styles.sectionLabel}>Featured publication</p>
              <h2 className={styles.sectionTitle}>
                Education in Action research with MIT and prison education
                partners.
              </h2>
              <p className={styles.featureBody}>
                Mallika contributed to research, stakeholder interviews, and
                writing for the publication{' '}
                <em>
                  Exploring Remote Employment &amp; Work-Based Learning During
                  Incarceration
                </em>
                , extending her work into education access and civil rights.
              </p>
            </div>
            <div className={styles.featureImageWrap}>
              <Image
                src={educationInActionCover}
                alt="Education in Action publication cover"
                className={styles.featureImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.dualSection}>
          <div className={styles.column}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Projects and focus areas</p>
              <h2 className={styles.sectionTitle}>
                Ideas in development and active research themes.
              </h2>
            </div>
            <div className={styles.stack}>
              {featuredWork.map((item) => (
                <article className={styles.stackCard} key={item.title}>
                  <p className={styles.stackMeta}>{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Awards and credentials</p>
              <h2 className={styles.sectionTitle}>
                Recognition that supports the work.
              </h2>
            </div>
            <div className={styles.stack}>
              {recognition.map((item) => (
                <article className={styles.stackCard} key={item.title}>
                  <p className={styles.stackMeta}>{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="publications">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Publications</p>
            <h2 className={styles.sectionTitle}>Research and creative work.</h2>
          </div>
          <div className={styles.cardGrid}>
            {publications.map((item) => (
              <article className={styles.infoCard} key={item.title}>
                <p className={styles.stackMeta}>{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactCard}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Contact Me</p>
              <h2 className={styles.sectionTitle}>Reach out and connect.</h2>
            </div>
            <div className={styles.contactLinks}>
              <a href="mailto:mj106@wellesley.edu">
                <span className={styles.inlineIcon} aria-hidden="true">
                  <SiteIcon name="mail" />
                </span>
                mj106@wellesley.edu
              </a>
              <a
                href="https://www.linkedin.com/in/mallika-john/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.inlineIcon} aria-hidden="true">
                  <SiteIcon name="linkedin" />
                </span>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/mallikaforprez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.inlineIcon} aria-hidden="true">
                  <SiteIcon name="instagram" />
                </span>
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
