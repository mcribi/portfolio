import React from "react";
import { Github, Linkedin, Mail, FileText, User, Briefcase, GraduationCap, Award, Code2, Users2, Database, Sparkles, Brain, Compass, Globe2, Lightbulb} from "lucide-react";


/* ===================== DATA ===================== */
const PROJECTS = [
  {
    title: "TFG: Predicting Complications in Lung Biopsies",
    desc: "3D CT + clinical data · Radiomics · Grad‑CAM · multimodal fusion.",
    tags: ["Python", "PyTorch", "MONAI", "XAI"],
    link: "https://github.com/mcribi/TFG",
    img: "/projects/biopsies.png",
  },
  {
    title: "Medical Image Segmentation (3D/2D)",
    desc: "CNN pipelines for KiTS23 · training · evaluation · reports.",
    tags: ["Python", "3D", "Segmentation"],
    link: "https://github.com/mcribi/Medical-Segmentation",
    img: "/projects/segmentation.png",
  },
  {
	  title: "Educational Programming Chatbot (Telegram)",
	  desc: "Winner - GranaDev Summer of Code. Lessons, exercises and exams.",
	  tags: ["Python", "PostgreSQL", "SQLAlchemy", "Alembic", "FastAPI", "Docker", "AWS"],
	  link: "https://github.com/mcribi/Educational-programming-chatbot",
	  img: "/projects/chatbot.jpg",
	},

  {
    title: "3D Graphics & Geometric Modelling",
    desc: "OpenGL · hierarchical modelling · interaction.",
    tags: ["C++", "OpenGL"],
    link: "https://github.com/mcribi/IG",
    img: "/projects/graphics.png",
  },
];

const SKILLS = [
  // Lenguajes de mayor demanda
  "Python", "Java", "C++", "SQL", "JavaScript", "C", "C#", "Ruby", "HTML", "CSS",

  // Frameworks y librerías IA/Data Science
  "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Torchvision", "MONAI", "Pydicom",

  // Backend / APIs
  "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic",

  // Cloud / DevOps
  "Docker", "Docker Compose", "AWS",

  // Control de versiones
  "Git", "GitHub", "Bash",

  // Otros (gráficos / videojuegos)
  "OpenGL", "Unity", "Android Studio"
];





/* ===================== UI HELPERS ===================== */
function Kicker({ children }) {
  return (
    <div className="text-xs uppercase tracking-[0.18em] text-sky-700/80">
      {children}
    </div>
  );
}
function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>
        <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-purple-500 rounded-full" />
      </div>
      {children}
    </section>
  );
}

/* ===================== NAVBAR (glass + grad) ===================== */
function Nav() {
  return (
    <header
      className="
        sticky top-0 z-40
        bg-gradient-to-r from-sky-600 via-fuchsia-600 to-purple-600
        backdrop-blur-xl
        border-b border-white/20
        shadow-[0_4px_20px_-4px_rgba(0,0,0,.35)]
      "
    >
      <div className="mx-auto max-w-7xl px-6 h-24 flex items-center justify-between">
        {/* Marca */}
        <a href="#home" className="font-extrabold text-2xl md:text-3xl text-white tracking-tight">
          María's Portfolio
        </a>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-10 text-lg md:text-xl font-semibold">
          {["Projects","Skills","Languages","About","Contact"].map((x) => (
            <a
              key={x}
              href={`#${x.toLowerCase()}`}
              className="text-white hover:text-yellow-100 transition-colors"
            >
              {x}
            </a>
          ))}
        </nav>

        {/* Botón CV */}
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900
                     px-6 py-3 text-base font-semibold shadow hover:shadow-lg hover:bg-slate-50 transition"
        >
          <FileText className="h-5 w-5" /> CV
        </a>
      </div>
    </header>
  );
}




/* ===================== HERO (gradientes + anillo foto) ===================== */
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* blobs de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-fuchsia-600 to-purple-600">
              María Cribillés Pérez
            </span>
          </h1>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            Software Engineer & AI Researcher
          </p>

          {/* descripción más grande */}
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
            Double degree in Computer Engineering & Mathematics (UGR). Focus on medical AI, Computer Vision and Deep Learning. I like learning about other fields of computer science and I am open to learning.
          </p>

          {/* botones más grandes */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-base font-medium shadow-sm hover:shadow-md"
              href="https://github.com/mcribi"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5"/> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-base font-medium shadow-sm hover:shadow-md"
              href="https://linkedin.com/in/mariacribillesperez"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5"/> LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-base font-medium shadow-sm hover:shadow-md"
              href="mailto:mariacribilled@gmail.com"
            >
              <Mail className="h-5 w-5"/> Email
            </a>
          </div>
        </div>

        {/* foto con anillo degradado */}
        <div className="flex justify-center">
          <div className="p-[4px] rounded-full bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-purple-500">
            <img
              src="/maria.jpg"
              alt="María Cribillés"
              className="w-72 h-72 md:w-88 md:h-88 rounded-full object-cover bg-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickFacts() {
  const FACTS = [
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Problem Solver & Perfectionist",
      desc: "I enjoy challenges, and if I don’t know how to solve something, I keep iterating until I find the right solution. I value precision and attention to detail.",
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Open-Minded Learner",
      desc: "Curious by nature. I love learning from other fields outside my own and gaining new perspectives.",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Traveler & Explorer",
      desc: "Passionate about traveling, meeting new people, and experiencing different cultures and ideas.",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "AI & Software Engineer",
      desc: "Building robust applications with a focus on Medical AI, Computer Vision, and Explainability (xAI).",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Research-Minded",
      desc: "Experience at DaSCI Research Institute: validation, reports, and experiments in medical AI.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Quick Facts <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-fuchsia-600 to-purple-600">About Me</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {FACTS.map((f) => (
          <div key={f.title} className="text-center">
            <div className="mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl
                            bg-gradient-to-tr from-fuchsia-500 to-purple-500 text-white shadow">
              {f.icon}
            </div>
            <h3 className="text-base md:text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm md:text-base text-slate-500">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================== PROJECT CARD (borde gradiente + overlay) ===================== */
function ProjectCard({ p, featured=false }) {
  return (
    <article className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/50 via-fuchsia-400/40 to-purple-400/40 hover:via-fuchsia-400/60 hover:to-purple-400/60 transition">
      <div className="rounded-2xl bg-white overflow-hidden shadow-sm">
        {/* Imagen */}
        <div className="relative">
          <div className="w-full h-56 md:h-60 overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          {/* overlay */}
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/0 group-hover:bg-black/30"
          >
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 shadow">
              View project →
            </span>
          </a>
          {featured && (
            <span className="absolute left-4 top-4 rounded-full bg-sky-600 text-white text-[11px] px-2.5 py-1 shadow">
              Featured
            </span>
          )}
        </div>
        {/* Texto */}
        <div className="p-5">
          <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">{p.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ===================== SECTIONS ===================== */
function Projects() {
  return (
    <Section id="projects" kicker="Work" title="Projects">
      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} p={p} featured={i===0} />
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" kicker="Toolbox" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SKILLS.map((s) => (
          <div key={s} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 p-3 shadow-sm hover:shadow-md transition">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500"></span>
            <span className="text-base font-medium">{s}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Languages() {
  const LANGS = [
    { lang: "Spanish", level: "Native", flag: "🇪🇸" },
    { lang: "English", level: "B2 First Cambridge", flag: "🇬🇧" },
    { lang: "Italian", level: "B1 PLIDA", flag: "🇮🇹" },
    { lang: "French", level: "Basic notions", flag: "🇫🇷" },
  ];

  return (
    <Section id="languages" kicker="Communication" title="Languages">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {LANGS.map((l) => (
          <div
            key={l.lang}
            className="flex flex-col items-center rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl mb-3">{l.flag}</div>
            <h3 className="text-lg font-semibold">{l.lang}</h3>
            <p className="mt-1 text-sm text-slate-600">{l.level}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}



function About() {
  return (
    <Section id="about" kicker="Background" title="About">
  <div className="grid lg:grid-cols-2 gap-10">
    {/* WHO I AM */}
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <User className="h-5 w-5 text-fuchsia-600" />
        <h3 className="text-xl font-semibold">Who I Am</h3>
      </div>
      <ul className="space-y-2 text-slate-700 leading-relaxed">
        <li>
          Double Degree in <strong>Computer Engineering (2025)</strong> and <strong>Mathematics (2026)</strong> at <strong>UGR</strong>.
        </li>
        <li>
          Erasmus at the <strong>University of Trieste</strong> (2023–2024), graduating <em>Cum Laude</em> in Intelligent Systems, ML & Metaheuristics.
        </li>
        <li>
          I love learning, I am passionate about programming, and I consider myself very perfectionist.
        </li>
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
	  {[
	    { label: "Curious Learner", emoji: "💡" },
	    { label: "Passionate Programmer", emoji: "🖥️" },
	    { label: "Perfectionist", emoji: "🎯" },
	    { label: "Open-Minded", emoji: "🌍" },
	  ].map(tag => (
	    <span
	      key={tag.label}
	      className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-100 to-fuchsia-100 px-3 py-1 text-slate-800 font-medium shadow-sm"
	    >
	      <span>{tag.emoji}</span> {tag.label}
	    </span>
	  ))}
	</div>

    </div>

    {/* EXPERIENCE */}
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Briefcase className="h-5 w-5 text-fuchsia-600" />
        <h3 className="text-xl font-semibold">Experience</h3>
      </div>
      <ul className="space-y-4 text-slate-800">
        <li>
          <div className="font-medium">DaSCI – Andalusian Inter-University Institute</div>
          <div className="text-sm text-slate-500">Sep 2025 – Feb 2026 · Part-time Researcher (Medical AI)</div>
          <p className="mt-1 text-sm text-slate-700">
            Research contract in Artificial Intelligence applied to Medicine, 
            contributing to data protocols, model design and explainability studies.
          </p>
        </li>
        <li>
          <div className="font-medium">DaSCI – Andalusian Inter-University Institute</div>
          <div className="text-sm text-slate-500">Mar 2025 – Jun 2025 · Research Internship (Medical AI)</div>
          <ul className="mt-1 text-sm text-slate-700 list-disc pl-5">
            <li>Data acquisition & preprocessing with clinicians.</li>
            <li>Protocol design and ML evaluation for lung biopsy prediction.</li>
          </ul>
        </li>
        <li>
          <div className="font-medium">Private Tutor</div>
          <div className="text-sm text-slate-500">Feb 2023 – Present</div>
          <div className="mt-1 text-sm text-slate-700">
            Mathematics & Programming (advanced & university level).
          </div>
        </li>
      </ul>
    </div>


        {/* EDUCATION */}
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="h-5 w-5 text-fuchsia-600" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <ul className="space-y-3 text-slate-800">
            <li>
		  <div className="font-medium">B.Sc. in Computer Engineering - UGR</div>
		  <div className="text-sm text-slate-500">Sep 2020 - Jul 2025</div>
		  <div className="text-sm text-slate-700">
		    AI, Deep Learning, Machine Learning, Computer Vision, Web Development, Computing and Intelligent Systems. 
		  </div>
		  <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
		    <li>
		      <strong>Cum Laude</strong> in Intelligent Systems Techniques
		    </li>
		    <li>
		      <strong>Cum Laude</strong> in Machine Learning
		    </li>
		    <li>
		      <strong>Cum Laude</strong> in Metaheuristics
		    </li>
		  </ul>
		</li>

            <li>
              <div className="font-medium">B.Sc. in Mathematics - UGR</div>
              <div className="text-sm text-slate-500">Sep 2020 - Jun 2026</div>
              <div className="text-sm text-slate-700">Algebra, Analysis, Geometry, Probability, Applied Math.</div>
            </li>
            <li>
              <div className="font-medium">Erasmus - University of Trieste</div>
              <div className="text-sm text-slate-500">Sep 2023 - Jul 2024</div>
              <div className="text-sm text-slate-700">Bachelor’s and Master’s courses. <strong>Cum Laude </strong>in Technology in Mathematics Education.</div>
            </li>
          </ul>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-5 w-5 text-fuchsia-600" />
            <h3 className="text-xl font-semibold">Achievements & Activities</h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500"></span>
              <span><strong>ADIA Lab Summer School 2025</strong> (Granada) - International school on Explainable AI.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-500"></span>
              <span><strong>Winner - GranaDev Summer of Code 2025</strong> (Best open‑source project: educational chatbot).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-500"></span>
              <span><strong>National Meeting of Mathematics Students</strong> - Participant in 2022, 2023 and 2024.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <span><strong>Selected to visit CERN</strong> (2019).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              <span><strong>Science Camp 2018</strong> - Astrophysics project at Teide Observatory.</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}




function Contact() {
  return (
    <Section id="contact" kicker="Get in touch" title="Contact">
      <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-fuchsia-500 p-1 shadow-lg">
        <div className="rounded-2xl bg-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed">
	  I’m open to internships and junior roles in AI/Software Engineering (from Feb 2026).
	</p>
          <div className="flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-xl bg-sky-500 text-white px-5 py-3 text-base font-medium hover:bg-sky-600"
               href="mailto:mariacribilled@gmail.com"><Mail className="h-5 w-5"/> Email</a>
            <a className="inline-flex items-center gap-2 rounded-xl bg-slate-800 text-white px-5 py-3 text-base font-medium hover:bg-slate-900"
               href="https://github.com/mcribi" target="_blank" rel="noreferrer"><Github className="h-5 w-5"/> GitHub</a>
            <a className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white px-5 py-3 text-base font-medium hover:bg-blue-700"
               href="https://linkedin.com/in/mariacribillesperez" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5"/> LinkedIn</a>
          </div>
        </div>
      </div>
    </Section>
  );
}



/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row justify-between">
        <div>© {new Date().getFullYear()} María Cribillés Pérez</div>
        <div className="flex gap-3">
          <a href="/CV.pdf" className="hover:text-slate-900">CV</a>
          <span>·</span>
          <a href="https://github.com/mcribi" target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
          <span>·</span>
          <a href="https://linkedin.com/in/mariacribillesperez" target="_blank" rel="noreferrer" className="hover:text-slate-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

/* ===================== PAGE ===================== */
export default function App() {
  return (
    <div className="scroll-smooth bg-[radial-gradient(1200px_600px_at_0%_0%,#ffffff_0%,#f9fbff_40%,#f5f7ff_100%)] text-slate-900">
      <Nav />
      <Hero />
      <QuickFacts />
      <Projects />
      <Skills />
      <Languages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

