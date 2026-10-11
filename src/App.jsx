import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Download,
  Layers3,
  Workflow,
  Database,
  Code2,
  ExternalLink,
  Phone,
  MessageCircle,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Shailendra Kumar",
  headline: "Senior Backend & AI Engineer",
  email: "shailendrakumarnirmal7524@gmail.com",
  phone: "+91 8840265502",
  whatsapp: "+91 7524091205",
  github: "https://github.com/shailendraKumar1",
  linkedin: "https://www.linkedin.com/in/shailendrakumar7524/",
};

const projects = [
  {
    number: "01",
    type: "AGENTIC AI · MCP · RAG",
    title: "Multi-Agent AI Orchestration",
    description:
      "Designed production AI workflows with supervisor-driven tool selection, parallel execution, guardrails, MCP integrations, and grounded responses across multiple business verticals.",
    stack: [
      "Python",
      "MCP / FastMCP",
      "RAG",
      "Gemini / GPT",
      "Redis Streams",
      "GCP",
    ],
    impact: "9+ business verticals supported",
    icon: Workflow,
    link: "",
    note: "Production case study · implementation details generalized",
  },
  {
    number: "02",
    type: "DISTRIBUTED SYSTEMS · STREAM PROCESSING",
    title: "Fault-Tolerant AI Job Orchestration",
    description:
      "Built asynchronous orchestration patterns using Redis Streams and consumer groups, focusing on reliable message processing, retries, recovery, and low-latency job ingestion.",
    stack: [
      "Go / Python",
      "Redis Streams",
      "Consumer Groups",
      "Retries",
      "Observability",
    ],
    impact: "Under 50 ms ingress latency target",
    icon: Workflow,
    link: "",
    note: "Production case study · implementation details generalized",
  },
  {
    number: "03",
    type: "DATA PLATFORM · BIG DATA",
    title: "Large-Scale Data Ingestion Platform",
    description:
      "Developed data-platform services integrating ingestion pipelines, event streaming, data-lake storage, and analytical querying for advertising data workloads.",
    stack: [
      "Go",
      "Python",
      "Kafka",
      "S3",
      "Apache Doris",
      "Flink",
    ],
    impact: "1TB+ daily data · 5,000+ pipelines",
    icon: Database,
    link: "",
    note: "Production case study · implementation details generalized",
  },
  {
    number: "04",
    type: "BACKEND · GRAPHQL · PERFORMANCE",
    title: "High-Performance Sports Content API",
    description:
      "Improved a Go and GraphQL backend through parallel resolvers and caching. Supported dynamic sports landing-page data and built distributed ingestion for content updates.",
    stack: [
      "Golang",
      "GraphQL",
      "DynamoDB",
      "Kafka",
      "Caching",
      "Performance Testing",
    ],
    impact: "500K+ DAU · 45% lower p95 latency · 3× throughput",
    icon: Layers3,
    link: "",
    note: "Production case study · implementation details generalized",
  },
  {
    number: "05",
    type: "EVENT-DRIVEN SYSTEMS · RELIABILITY",
    title: "High-Throughput Event Processing",
    description:
      "Built Go event-processing services and resilient Kafka workflows with retries, exponential backoff, and dead-letter queues to improve reliability at scale.",
    stack: [
      "Golang",
      "Kafka",
      "Retries",
      "Dead-Letter Queues",
      "Monitoring",
    ],
    impact: "100K RPM · 99% reduction in data loss",
    icon: Code2,
    link: "",
    note: "Production case study · implementation details generalized",
  },
  {
    number: "06",
    type: "CONNECTED VEHICLES · TWO-WHEELER PLATFORM",
    title: "Ola Electric Vehicle Platform",
    description:
      "Built backend services connecting Ola Electric two-wheelers to cloud systems, including vehicle messaging, device authentication, and fleet access controls.",
    stack: ["Java", "Spring Boot", "MQTT", "JWT", "Vehicle Cloud"],
    impact: "10M+ vehicle messages handled daily",
    icon: Database,
    link: "",
    note: "Production case study · implementation details generalized",
  },
];

const experience = [
  {
    period: "APR 2026 — PRESENT",
    company: "Reliance Intelligence (Jio)",
    role: "AI/ML Engineer (Consultant)",
    points: [
      "Built production agentic AI experiences using MCP, LLM tool-calling, RAG, and workflow state.",
      "Designed orchestration and resumable workflow patterns with Redis Streams, Bigtable, and Pub/Sub.",
      "Worked on trust-and-safety fact-checking and grounded financial-answering tools.",
    ],
  },
  {
    period: "NOV 2025 — APR 2026",
    company: "Proximity Works · JioHotstar",
    role: "Senior Software Engineer — Backend",
    points: [
      "Scaled a Go GraphQL backend powering sports landing-page data for 500K+ daily active users.",
      "Reduced p95 latency by 45% and improved throughput by 3x through parallel resolvers and caching.",
      "Built a distributed ingestion service processing 1M+ records per day.",
    ],
  },
  {
    period: "JUL 2023 — NOV 2025",
    company: "Pixis",
    role: "Senior Software Engineer",
    points: [
      "Built data infrastructure processing 1TB+ daily across 5,000+ pipelines.",
      "Developed event processing with Kafka, retries, exponential backoff, and dead-letter queues.",
      "Built a Java Spring Boot workflow orchestrator handling 100K+ requests per day.",
    ],
  },
  {
    period: "MAR 2022 — JUL 2023",
    company: "Threedots",
    role: "Software Engineer",
    points: [
      "Built low-latency Go services, authentication flows, and user activity systems.",
      "Developed notification APIs and features that improved engagement and retention.",
    ],
  },
  {
    period: "JAN 2020 — MAR 2022",
    company: "Ola Electric",
    role: "Software Engineer",
    points: [
      "Contributed to MQTT-based communication services carrying 10M+ messages daily between vehicles and cloud infrastructure.",
      "Built device authentication services with JWT access and refresh tokens, reducing unauthorized login attempts by 40%.",
      "Developed authentication and SSO services supporting 50K RPM, plus device whitelist and management services with 95% validation accuracy.",
    ],
  },
];

const achievements = [
  { award: "The Spotlight Award", organization: "Ola Electric" },
  { award: "The Warthog of Backend Award", organization: "Threedots" },
  { award: "Employee of the Month", organization: "Pixis" },
  {
    award: "Best Cloud Project · AdTech",
    organization: "India DevOps Show 2025",
    link: "https://www.linkedin.com/posts/adtech-pixisai-devopsexcellence-share-7297989760147472384-V9t0/",
  },
];

const skills = [
  ["LANGUAGES", "Golang", "Python", "Java"],
  ["BACKEND", "FastAPI", "Gin", "Spring Boot", "GraphQL", "Microservices"],
  ["AI SYSTEMS", "Agentic AI", "MCP / FastMCP", "RAG", "LLM Tool Calling", "LangChain"],
  ["DATA & MESSAGING", "Kafka", "Redis Streams", "Pub/Sub", "MQTT", "Flink"],
  ["CLOUD & PLATFORM", "Google Cloud", "AWS", "Docker", "Kubernetes", "Helm"],
  ["DATABASES", "PostgreSQL", "MySQL", "DynamoDB", "Bigtable", "Apache Doris"],
  ["PRODUCTION ENGINEERING", "Protobuf", "JWT", "TLS", "Unit Testing", "New Relic"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          SK<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#achievements" onClick={closeMenu}>Awards</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              BACKEND ENGINEERING · AGENTIC AI
            </div>
            <h1>
              Building reliable systems for an <span>intelligent</span> world.
            </h1>
            <p className="hero-lede">
              I'm <strong>Shailendra Kumar</strong> — an engineer working
              across distributed systems, data infrastructure, and production
              AI agents.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore selected work <ArrowDownRight size={17} />
              </a>
              <a
                className="button button-quiet"
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> View resume
              </a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Code2 size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Code2 size={17} /> LinkedIn <ArrowUpRight size={13} />
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} /> Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-frame">
              <img
                className="profile-photo"
                src={`${import.meta.env.BASE_URL}shailendra-profile.jpeg`}
                alt="Shailendra Kumar"
              />
              <div className="profile-badge">
                <span className="availability-dot" />
                BENGALURU, INDIA
              </div>
            </div>

            <span className="orbit-label label-top">SYSTEMS</span>
            <span className="orbit-label label-right">AI / ML</span>
            <span className="orbit-label label-bottom">DISTRIBUTED</span>
            <span className="orbit-label label-left">DATA</span>

            <div className="visual-caption">
              <span /> BUILD · MEASURE · IMPROVE
            </div>
          </div>

          <div className="hero-footnote">
            <span>BASED IN BENGALURU, INDIA</span>
            <a href="#about">
              SCROLL TO EXPLORE <ArrowDownRight size={14} />
            </a>
          </div>
        </section>

        <section className="metrics" aria-label="Selected engineering impact">
          <div>
            <strong>500K<span>+</span></strong>
            <p>Daily active users supported</p>
          </div>
          <div>
            <strong>1TB<span>+</span></strong>
            <p>Data processed per day</p>
          </div>
          <div>
            <strong>45<span>%</span></strong>
            <p>Lower p95 latency</p>
          </div>
          <div>
            <strong>3<span>×</span></strong>
            <p>Throughput improvement</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            eyebrow="01 — ABOUT"
            title={
              <>
                Engineering at the intersection of <em>scale</em> and
                intelligence.
              </>
            }
          />
          <div className="about-grid">
            <p className="about-lead">
              I enjoy turning complex backend and AI problems into systems
              that are observable, resilient, and useful in production.
            </p>
            <div className="about-detail">
              <p>
                My work spans high-throughput APIs, event-driven data
                platforms, workflow orchestration, and agentic AI systems
                using tools, retrieval, and grounded generation.
              </p>
              <p>
                I graduated from IIIT Allahabad with a B.Tech in Electronics
                and Communication Engineering. I value clear system
                boundaries, pragmatic architecture, and measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            eyebrow="02 — EXPERIENCE"
            title="A track record of building."
            description="Selected roles and contributions across backend engineering, data platforms, and AI systems."
          />
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-content">
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="03 — SELECTED WORK"
            title="Systems, not just side projects."
            description="Selected work across AI orchestration, connected vehicles, distributed systems, data platforms, and high-performance APIs."
          />
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span>
                      {project.number} / {project.type}
                    </span>
                    <Icon size={23} strokeWidth={1.5} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.impact && (
                    <div className="project-impact">
                      <span className="project-impact-label">SELECTED IMPACT</span>
                      <strong>{project.impact}</strong>
                    </div>
                  )}
                  <div className="tag-list">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="project-note">{project.note}</span>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="section achievements-section" id="achievements">
          <SectionHeading
            eyebrow="04 — ACHIEVEMENTS & AWARDS"
            title="Work recognized by the teams around me."
            description="Awards earned across engineering teams and the wider developer community."
          />
          <div className="achievement-grid">
            {achievements.map((item, index) => (
              <article className="achievement-card" key={item.award}>
                <span className="achievement-number">0{index + 1}</span>
                <div>
                  <h3>{item.award}</h3>
                  <p>{item.organization}</p>
                  {item.link && (
                    <a className="achievement-source" href={item.link} target="_blank" rel="noreferrer">
                      View LinkedIn post <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            eyebrow="05 — TOOLKIT"
            title="Tools I work with."
            description="A selection of technologies across application engineering, data, cloud, and AI."
          />
          <div className="skills-grid">
            {skills.map(([category, ...items]) => (
              <div className="skill-group" key={category}>
                <p>{category}</p>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">06 — CONTACT</p>
          <h2>
            Have a hard problem
            <br />
            worth <em>solving?</em>
          </h2>
          <p>
            I'm open to conversations about backend engineering, distributed
            systems, and production AI.
          </p>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Get in touch <ArrowUpRight size={17} />
          </a>
          <div className="contact-links">
            <a href="tel:+918840265502">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href="https://wa.me/917524091205" target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> WhatsApp {profile.whatsapp}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Code2 size={16} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Code2 size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> Email
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home">
          SK<span>.</span>
        </a>
        <span>Designed & built by Shailendra Kumar</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
