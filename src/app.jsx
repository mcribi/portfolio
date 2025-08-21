import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Award, Cpu, BookOpen, Globe, ExternalLink, GraduationCap, Layers, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ✨ Single-file React portfolio starter (ready for Next.js/React). Tailwind classes included.
// Replace links & content inline. Later, split into components/pages as needed.

const projects = [
  {
    title: "TFG: Predicting Complications in Lung Biopsies",
    description:
      "AI system using 3D CT volumes + clinical data to predict post-biopsy complications. Cross-validation, Grad-CAM, and multimodal fusion.",
    tags: ["Python", "PyTorch", "MONAI", "Radiomics", "XAI"],
    link: "https://github.com/mcribi/TFG",
  },
  {
    title: "Medical Image Segmentation (3D/2D)",
    description:
      "Volumetric and planar segmentation with CNNs (KiTS23). Data pipelines, training scripts, and evaluation.",
    tags: ["Python", "CNN", "3D", "Segmentation"],
    link: "https://github.com/mcribi/Medical-Segmentation",
  },
  {
    title: "Educational Programming Chatbot (Telegram)",
    description:
      "Awarded best idea (GranaDev SoC). Teaches programming with lessons, exercises, and exams.",
    tags: ["Python", "SQLite", "Telegram API", "AWS"],
    link: "https://github.com/mcribi/Educational-programming-chatbot",
  },
  {
    title: "3D Graphics & Geometric Modelling",
    description:
      "OpenGL project with hierarchical modelling, animation and interactive controls.",
    tags: ["C++", "OpenGL", "Graphics"],
    link: "https://github.com/mcribi/IG",
  },
];

const skills = [
  { group: "Languages", items: ["Python", "C++", "Java", "C", "C#", "SQL", "JavaScript", "Ruby"] },
  { group: "AI/ML", items: ["PyTorch", "MONAI", "scikit-learn", "Radiomics", "Grad-CAM", "XAI"] },
  { group: "Tools", items: ["Git", "Linux", "OpenGL", "Unity", "SQLite", "AWS"] },
  { group: "Web", items: ["HTML", "CSS", "ES6", "Tailwind", "Vite/Next (planned)"] },
];

const awards = [
  {
    title: "GranaDev Summer of Code – Winner",
    org: "GranaDev",
    year: "2025",
    note: "Best open-source idea (Educational chatbot).",
  },
  {
    title: "ADIA Lab International Summer School – Explainable AI",
    org: "DaSCI / ADIA Lab",
    year: "2025",
    note: "Selected participant (xAI).",
  },
  {
    title: "Science Camp – Astrophysics",
    org: "Spanish Ministry of Education",
    year: "2018",
    note: "Scholarship recipient.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-sky-500/20 border border-sky-400/30 grid place-content-center">
              <span className="font-black text-sky-300">MC</span>
            </div>
            <span className="font-semibold tracking-wide">María Cribillés · AI & Software Engineer</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#awards" className="hover:text-white">Awards</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex gap-2">
            <Button asChild className="rounded-2xl">
              <a href="/CV.pdf" target="_blank" rel="noreferrer">
                <FileText className="mr-2 h-4 w-4" /> CV (EN)
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-6 items-center"
        >
          <div className="md:col-span-3">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Building <span className="text-sky-300">explainable AI</span> & robust
              software to solve real problems.
            </h1>
            <p className="mt-5 text-slate-300 md:text-lg max-w-2xl">
              Double degree in Computer Engineering & Mathematics (UGR). Research experience at DaSCI.
              Passionate about medical AI, computer vision, and human‑centred engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="https://github.com/mcribi" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 mr-2"/> GitHub
                </a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="https://linkedin.com/in/mariacribillesperez" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4 mr-2"/> LinkedIn
                </a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="mailto:mariacribilled@gmail.com">
                  <Mail className="h-4 w-4 mr-2"/> Email
                </a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 p-3 bg-white/5 flex items-center gap-2"><Brain className="h-4 w-4"/>AI</div>
              <div className="rounded-2xl border border-white/10 p-3 bg-white/5 flex items-center gap-2"><Cpu className="h-4 w-4"/>Systems</div>
              <div className="rounded-2xl border border-white/10 p-3 bg-white/5 flex items-center gap-2"><Layers className="h-4 w-4"/>3D CV</div>
              <div className="rounded-2xl border border-white/10 p-3 bg-white/5 flex items-center gap-2"><Globe className="h-4 w-4"/>Web</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/10 to-fuchsia-400/10 p-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 grid place-content-center">
                  <GraduationCap className="text-sky-300"/>
                </div>
                <div>
                  <div className="font-semibold">University of Granada</div>
                  <div className="text-slate-300 text-sm">B.Sc. Computer Engineering (2025) · B.Sc. Mathematics (2026)</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-300">
                Erasmus @ University of Trieste (2023–2024) · Cum Laude in Intelligent Systems, Machine Learning & Metaheuristics.
              </div>
              <div className="mt-4 rounded-xl bg-black/30 p-4 text-sm border border-white/10">
                <div className="font-semibold mb-2">Recent highlights</div>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li>Research internship @ DaSCI (medical AI protocol & data pipelines).</li>
                  <li>Winner – GranaDev Summer of Code (education chatbot).</li>
                  <li>Participant – ADIA Lab xAI Summer School.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="rounded-2xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline inline-flex items-center gap-1">
                    View <ExternalLink className="h-4 w-4"/>
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1">{t}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5"/>
                <h3 className="font-semibold">{s.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-slate-300">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-white/10 bg-black/30 px-3 py-1">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Awards & Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a) => (
            <div key={a.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-amber-400/15 border border-amber-300/20 grid place-content-center">
                  <Award className="text-amber-300"/>
                </div>
                <div>
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-sm text-slate-300">{a.org} · {a.year}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-300">{a.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-slate-300 mb-6 max-w-2xl">
          I’m open to internships and junior roles in AI/Software Engineering after Feb 2026. Based in Spain · Available for relocation.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary" className="rounded-2xl">
            <a href="mailto:mariacribilled@gmail.com"><Mail className="h-4 w-4 mr-2"/> Email</a>
          </Button>
          <Button asChild variant="secondary" className="rounded-2xl">
            <a href="https://github.com/mcribi" target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2"/> GitHub</a>
          </Button>
          <Button asChild variant="secondary" className="rounded-2xl">
            <a href="https://linkedin.com/in/mariacribillesperez" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2"/> LinkedIn</a>
          </Button>
          <Button asChild className="rounded-2xl">
            <a href="/CV.pdf" target="_blank" rel="noreferrer"><FileText className="h-4 w-4 mr-2"/> Download CV</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-4">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} María Cribillés. Built with React + Tailwind.</div>
          <div className="flex items-center gap-3">
            <a className="hover:text-white" href="/CV.pdf">CV</a>
            <span>·</span>
            <a className="hover:text-white" href="https://github.com/mcribi" target="_blank" rel="noreferrer">GitHub</a>
            <span>·</span>
            <a className="hover:text-white" href="https://linkedin.com/in/mariacribillesperez" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

