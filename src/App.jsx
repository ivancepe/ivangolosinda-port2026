import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Download } from 'lucide-react';

/**
 * ==========================================
 * DATA LAYER
 * ==========================================
 */
const placeholderCertificate = '/image/cert-1.jpn';

const resumeData = {
  header: {
    name: 'IVAN GOLOSINDA',
    title: 'Computer Engineer',
    address: 'B9 L53 Agapeya Towns, Majada Out, 4027, Calamba City, Laguna, Philippines',
    location: 'Calamba City, Laguna, Philippines',
    phone: '+63 965 210 7968',
    email: 'ivangolosinda2@gmail.com',
    website: 'https://ivancepegolosinda.web.app',
    summary:
      'Highly skilled software developer with hands-on experience building cloud-based web systems using modern full-stack technologies. Skilled in developing scalable applications using ReactJS, TailwindCSS, NodeJS, and PostgreSQL, and deploying production systems on Google Cloud Platform. Experienced in cloud-native architecture using Cloud Run, Firebase Hosting, and Cloud SQL. Strong foundation in system design, deployment pipelines, and cross-functional collaboration.',
    image: '/images/profile-image2.png'
  },
  skills: [
    {
      label: 'Web Development',
      items: [
        'ReactJS',
        'TailwindCSS',
        'JavaScript (ES6+)',
        'NodeJS',
        'ExpressJS',
        'REST APIs',
        'PostgreSQL'
      ]
    },
    {
      label: 'Cloud & DevOps',
      items: [
        'Google Cloud Platform',
        'Cloud Run',
        'Firebase Hosting',
        'Cloud SQL',
        'IAM',
        'VPC',
        'Secret Manager',
        'CI/CD Pipelines',
        'Docker',
        'Cloud Build',
        'GitHub Actions'
      ]
    },
    {
      label: 'Tools',
      items: ['GitHub', 'Postman', 'VS Code', 'Docker Desktop']
    },
    {
      label: 'Testing & QA',
      items: ['Test Planning', 'UAT Testing', 'Smoke Testing', 'Sanity Testing']
    }
  ],
  experience: [
    {
      id: 1,
      company: 'Gunma Gohkin Ph. Corp.',
      location: 'Cabuyao City',
      role: 'System Developer',
      period: 'Jun 2025 - Present',
      bullets: [
        'Develop and maintain full-stack, cloud-native web systems using ReactJS and TailwindCSS for frontend and NodeJS with PostgreSQL for backend services.',
        'Design, deploy, and operate production systems on Google Cloud Platform, including Cloud Run, Cloud SQL (PostgreSQL), and Firebase Hosting.',
        'Build scalable, secure, and integrated enterprise systems by connecting custom web platforms with Kintone and cloud services in cross-functional teams.'
      ]
    },
    {
      id: 2,
      company: 'Caspo Incorporated',
      location: 'Makati City',
      role: 'QA Engineer & Business Analyst',
      period: 'Apr 2024 - Sept 2024',
      bullets: [
        'Developed and executed structured test plans and test cases, performed regression testing and UAT, and gathered business and system requirements.',
        'Ensured software quality, alignment with business needs, and reliable system delivery through clear documentation and stakeholder coordination.'
      ]
    },
    {
      id: 3,
      company: 'Atlas Home Products Inc.',
      location: 'Pasig City',
      role: 'IT Staff',
      period: 'Sept 2023 - March 2024',
      bullets: [
        'Provided technical support and system maintenance for company infrastructure, including installations, upgrades, and network configurations.',
        'Supported cross-departmental technical operations and user training to ensure stable, secure, and efficient business operations.'
      ]
    }
  ],
  education: [
    {
      degree: 'BS in Computer Engineering',
      school: 'STI College Calamba',
      location: 'Calamba City, Laguna',
      period: '2018 - 2022'
    }
  ],
  awards: [
    {
      label: "Dean's Honor List - 1st & 2nd Semester AY 2020-2021, STI College Calamba",
      image: placeholderCertificate
    }
  ],
  certifications: [
    {
      label: 'Coursera: React Basics (2023)',
      image: placeholderCertificate
    },
    {
      label: 'Coursera: Programming with JavaScript (2023)',
      image: placeholderCertificate
    },
    {
      label: 'Huawei HCIA - Artificial Intelligence',
      image: placeholderCertificate
    },
    {
      label: 'Huawei HCIA - Internet of Things',
      image: placeholderCertificate
    },
    {
      label: 'SPARTA (DAP): Getting Grounded on Analytics',
      image: placeholderCertificate
    }
  ],
  projects: [
    {
      title: 'GGPC Production System',
      description: 'Gunma Gohkin Ph. Corp. Production Management System built with ReactJS + NodeJS and deployed on Google Cloud Platform.',
      link: 'https://ggpc-production-system.web.app'
    },
    {
      title: 'GGPC E-Recruitment System',
      description: 'Gunma Gohkin Ph. Corp. E-Recruitment System built with ReactJS + NodeJS and Kintone integration, deployed on Netlify.',
      link: 'https://ggpcapplicationform.netlify.app/'
    },
    {
      title: 'Manaseh Photography Portfolio',
      description: 'Personal photography portfolio website built with ReactJS and deployed on Netlify',
      link: 'https://manaseh-photography.netlify.app/'
    }
  ]
};

/**
 * ==========================================
 * COMPONENT LAYER
 * ==========================================
 */
const Section = ({ title, children, className = '' }) => (
  <section className={`mt-16 ${className}`}>
    <div className="mb-6 flex items-center gap-4">
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#18223b]">
        + {title}
      </span>
      <div className="h-px flex-1 bg-[#18223b]/20" />
    </div>
    {children}
  </section>
);

const ContactRow = ({ icon, label, sublabel, href, newTab = false }) => {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? {
        href,
        target: newTab ? '_blank' : undefined,
        rel: newTab ? 'noreferrer' : undefined
      }
    : {};

  return (
    <Wrapper
      className="group flex items-start gap-3 border-b border-[#18223b]/15 py-3 transition hover:bg-[#18223b]/5 last:border-b-0"
      {...wrapperProps}
    >
      <span className="mt-0.5 flex h-9 w-9 items-center justify-center border border-[#18223b]/15 bg-white text-[#18223b] transition group-hover:scale-[1.03]">
        {icon ? React.createElement(icon, { size: 18 }) : null}
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-800 group-hover:text-[#18223b]">
          {label}
        </p>
        {sublabel && <p className="text-xs text-slate-500">{sublabel}</p>}
      </div>
    </Wrapper>
  );
};

const SkillGroup = ({ label, items, delay = 0 }) => (
  <div
    className="fade-up border border-[#18223b]/20 border-l-2 border-l-[#18223b] bg-white p-6"
    style={{ animationDelay: `${delay}ms` }}
  >
    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#18223b]">
      {label}
    </h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="border border-[#18223b]/20 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-[#18223b]/50 hover:text-[#18223b]"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceItem = ({ role, company, location, period, bullets, index }) => (
  <article
    className="fade-up border border-[#18223b]/20 border-l-2 border-l-[#18223b] bg-white p-6"
    style={{ animationDelay: `${index * 120}ms` }}
  >
    <div className="grid gap-4 md:grid-cols-[180px_1fr]">
      <div>
        <span className="text-sm font-semibold text-[#18223b]">{period}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{role}</h3>
        <p className="text-sm text-slate-500">
          {company} - {location}
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-slate-600">
          {bullets.map((item, bulletIndex) => (
            <li
              key={bulletIndex}
              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#18223b]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

const HighlightCard = ({ title, items, delay = 0, onItemClick }) => (
  <div
    className="fade-up border border-[#18223b]/20 border-l-2 border-l-[#18223b] bg-white p-6"
    style={{ animationDelay: `${delay}ms` }}
  >
    <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#18223b]">
      {title}
    </h3>
    <ul className="mt-4 grid gap-2 text-sm text-slate-600">
      {items.map((item, index) => {
        const label = typeof item === 'string' ? item : item.label;
        const image = typeof item === 'string' ? null : item.image;
        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => (image ? onItemClick({ src: image, title: label }) : null)}
              className="group relative w-full pl-5 text-left transition hover:text-[#18223b]"
            >
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#18223b]" />
              <span className="underline decoration-transparent underline-offset-4 group-hover:decoration-[#18223b]/40">
                {label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

/**
 * ==========================================
 * MAIN APPLICATION
 * ==========================================
 */
export default function DigitalResume() {
  const [lightbox, setLightbox] = useState(null);
  const { header, skills, experience, education, awards, certifications, projects } = resumeData;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#18223b] selection:text-white">
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up {
            opacity: 0;
            animation: fadeUp 0.7s ease forwards;
          }
        `}
      </style>

      <div className="relative font-['Manrope']">
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 border border-[#18223b]/30 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#18223b] transition hover:border-[#18223b]"
              >
                Close
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[75vh] w-full object-contain"
              />
              <p className="mt-3 text-center text-sm text-[#18223b]">{lightbox.title}</p>
            </div>
          </div>
        )}

        <main className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <header className="grid gap-12 border-b border-[#18223b]/20 pb-12 lg:grid-cols-[1.45fr_1fr] lg:items-start">
            <div className="fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#18223b]">
                {header.title}
              </p>
              <h1 className="mt-4 font-['Fraunces'] text-5xl font-semibold uppercase tracking-tight text-[#18223b] md:text-6xl">
                {header.name}
              </h1>
              <p className="mt-4 max-w-2xl text-md leading-relaxed text-slate-600">
                {header.summary}
              </p>

              <div className="mt-10 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18223b]">
                    Based In
                  </p>
                  <p className="mt-2 font-semibold text-slate-700">{header.location}</p>
                  <p className="text-xs text-slate-500">{header.address}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18223b]">
                    Focus
                  </p>
                  <p className="mt-2 font-semibold text-slate-700">
                    Cloud-native projects, full-stack delivery, QA
                  </p>
                  <p className="text-xs text-slate-500">
                    ReactJS - NodeJS - GCP - PostgreSQL
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-up border border-[#18223b]/25 bg-white p-6">
              <div className="flex flex-col gap-6">
                <div className="relative overflow-hidden border border-[#18223b]/20">
                  <img
                    src={header.image}
                    alt="Ivan Golosinda portrait"
                    className="h-64 w-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18223b]">
                      Contact
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-700">
                      Available for full-stack roles
                    </p>
                  </div>
                  <a
                    href="/Golosinda Resume 2026.pdf"
                    download
                    className="inline-flex items-center gap-2 border border-[#18223b]/40 bg-[#18223b]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#18223b] transition hover:border-[#18223b] hover:bg-[#18223b]/10"
                  >
                    Download CV
                    <Download size={14} />
                  </a>
                </div>

                <div className="grid gap-2">
                  <ContactRow icon={Mail} label={header.email} href={`mailto:${header.email}`} />
                  <ContactRow
                    icon={Phone}
                    label={header.phone}
                    href={`tel:${header.phone.replace(/\s/g, '')}`}
                  />
                  <ContactRow icon={Globe} label="Portfolio Website" sublabel={header.website} href={header.website} newTab />
                  <ContactRow icon={MapPin} label={header.location} sublabel="Philippines" />
                </div>
              </div>
            </div>
          </header>

          <Section title="Technical Skills">
            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((group, index) => (
                <SkillGroup key={group.label} {...group} delay={index * 120} />
              ))}
            </div>
          </Section>

          <Section title="Professional Experience">
            <div className="grid gap-6">
              {experience.map((role, index) => (
                <ExperienceItem key={role.id} {...role} index={index} />
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <div className="grid gap-6">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="fade-up border border-[#18223b]/20 border-l-2 border-l-[#18223b] bg-white p-6 transition hover:border-[#18223b]/50"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#18223b] underline decoration-[#18223b]/30 underline-offset-4">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600">{project.description}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#18223b]">
                      Open
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Section>

          <Section title="Education & Credentials">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
              <div
                className="fade-up border border-[#18223b]/20 border-l-2 border-l-[#18223b] bg-white p-7"
                style={{ animationDelay: '120ms' }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#18223b]">
                  Education
                </h3>
                {education.map((item) => (
                  <div key={item.degree} className="mt-5">
                    <p className="text-lg font-semibold text-slate-900">{item.degree}</p>
                    <p className="text-sm text-slate-600">{item.school}</p>
                    <p className="text-sm text-slate-500">{item.location}</p>
                    <p className="mt-2 text-sm font-semibold text-[#18223b]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6">
                <HighlightCard
                  title="Certifications"
                  items={certifications}
                  delay={180}
                  onItemClick={setLightbox}
                />
                <HighlightCard
                  title="Awards"
                  items={awards}
                  delay={240}
                  onItemClick={setLightbox}
                />
              </div>
            </div>
          </Section>

          <footer className="mt-20 border-t border-[#18223b]/20 pt-8 text-xs uppercase tracking-[0.4em] text-[#18223b]">
            Designed & Built by Ivan Golosinda - React - Tailwind
          </footer>
        </main>
      </div>
    </div>
  );
}
