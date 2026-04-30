"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Download, ExternalLink, Terminal } from "lucide-react";

export default function Home() {
  const skills = [
    "Nmap",
    "Wireshark",
    "Burp Suite",
    "Kali Linux",
    "TCP/IP",
    "DNS",
    "HTTP/HTTPS",
    "SSL/TLS",
    "OWASP Top 10",
    "Python",
    "SQL",
    "Firewall Basics",
  ];

  const projects = [
    {
      title: "Phishing Detection Web Application",
      description:
        "A cybersecurity web application that detects phishing URLs using rule-based checks and machine learning techniques.",
      tech: "Python, Flask, Scikit-learn, HTML, CSS",
      link: "https://github.com/ksaiswarya10/phishing-detection",
    },
    {
      title: "Mini SOC Lab",
      description:
        "A beginner-friendly SOC practice lab built to understand logs, alerts, Kali Linux, SIEM basics, and incident analysis workflow.",
      tech: "Kali Linux, Logs, SIEM Basics, Network Security",
      link: "#",
    },
  ];

  const terminalLines = [
    "> whoami",
    "Aiswarya K S",
    "> role",
    "Cybersecurity Engineer Intern",
    "> focus",
    "SOC Analysis | Threat Detection | Network Security",
    "> tools",
    "Nmap | Wireshark | Burp Suite | Kali Linux",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#0891b250,transparent_35%),radial-gradient(circle_at_bottom_left,#22c55e40,transparent_35%)]" />

      {/* HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="text-center md:text-left md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-400 mb-4 font-semibold"
          >
            Cybersecurity Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Aiswarya K S
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Cybersecurity Engineer Intern aspiring to become a SOC Analyst.
            Interested in threat detection, phishing analysis, network security,
            firewall basics, and hands-on security labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="https://github.com/ksaiswarya10"
              target="_blank"
              className="inline-flex items-center gap-2 border border-cyan-500 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              <ExternalLink size={18} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* TERMINAL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:w-1/2 w-full max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-gray-950 border border-cyan-700 rounded-2xl shadow-2xl shadow-cyan-900/40 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 py-4 bg-gray-900 border-b border-cyan-900">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
                <Terminal size={15} />
                aiswarya@security-lab
              </span>
            </div>

            <div className="p-6 font-mono text-sm text-green-400 space-y-3">
              {terminalLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.25 }}
                >
                  {line}
                </motion.p>
              ))}

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-3 h-5 bg-green-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="text-cyan-400" />
          About Me
        </h2>

        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 text-gray-300 leading-relaxed">
          I am a Computer Science graduate and Cybersecurity Engineer Intern.
          I am building strong hands-on skills through cybersecurity labs,
          networking practice, phishing detection projects, and security tool
          learning. My goal is to grow into a SOC Analyst / Cybersecurity
          Analyst role.
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-200 hover:border-cyan-400 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-cyan-300 mb-5">{project.tech}</p>

              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
              >
                View Project <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-5">Contact</h2>

        <p className="text-gray-400 mb-7">
          Open to SOC Analyst, Cybersecurity Analyst, and security internship
          opportunities.
        </p>

        <div className="flex justify-center flex-wrap gap-5 text-cyan-400">
          <a
            href="mailto:ksaiswarya10@gmail.com"
            className="inline-flex items-center gap-2 hover:text-cyan-300"
          >
            <Mail size={18} />
            Email
          </a>

          <a
            href="https://github.com/ksaiswarya10"
            target="_blank"
            className="hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aiswarya-k-s"
            target="_blank"
            className="hover:text-cyan-300"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}