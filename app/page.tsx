"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Download, ExternalLink, Terminal, Radar } from "lucide-react";

export default function Home() {
  const skills = [
    "Nmap", "Wireshark", "Burp Suite", "Kali Linux",
    "TCP/IP", "DNS", "HTTP/HTTPS", "SSL/TLS",
    "OWASP Top 10", "Python", "SQL", "Firewall Basics",
  ];

  const projects = [
    {
      title: "Phishing Detection Web Application",
      description:
        "Detects phishing URLs using rule-based checks and machine learning techniques.",
      tech: "Python, Flask, Scikit-learn, HTML, CSS",
      link: "https://github.com/ksaiswarya10/phishing-detection",
    },
    {
      title: "Mini SOC Lab",
      description:
        "A beginner SOC practice lab to understand logs, alerts, SIEM basics, Kali Linux, and incident analysis workflow.",
      tech: "Kali Linux, Logs, SIEM Basics, Network Security",
      link: "#",
    },
  ];

  const terminalLines = [
    "> initializing security profile...",
    "> loading tools: nmap, wireshark, burp suite",
    "> role: Cybersecurity Engineer Intern",
    "> target: SOC Analyst",
    "> status: learning | practicing | improving",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 overflow-hidden relative">
      {/* Animated background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="fixed top-[-100px] right-[-100px] w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl -z-10"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="fixed bottom-[-100px] left-[-100px] w-96 h-96 bg-green-500/30 rounded-full blur-3xl -z-10"
      />

      {/* HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left md:w-1/2"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-400 mb-4 font-semibold"
          >
            Cybersecurity Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-5"
          >
            Aiswarya K S
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Cybersecurity Engineer Intern aspiring to become a SOC Analyst.
            Focused on threat detection, phishing analysis, networking,
            firewall basics, and hands-on security labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/30"
            >
              <Download size={18} />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ksaiswarya10"
              target="_blank"
              className="inline-flex items-center gap-2 border border-cyan-500 px-5 py-3 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              <ExternalLink size={18} />
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated terminal */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9 }}
          className="md:w-1/2 w-full max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-gray-950 border border-cyan-700 rounded-2xl shadow-2xl shadow-cyan-900/50 overflow-hidden"
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.35 }}
                >
                  {line}
                </motion.p>
              ))}

              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-3 h-5 bg-green-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="text-cyan-400" />
          About Me
        </h2>

        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 text-gray-300 leading-relaxed hover:border-cyan-500 transition">
          I am a Computer Science graduate and Cybersecurity Engineer Intern.
          I am building hands-on skills through cybersecurity labs, networking
          practice, phishing detection projects, and security tool learning.
          My goal is to grow into a SOC Analyst / Cybersecurity Analyst role.
        </div>
      </motion.section>

      {/* SKILLS */}
      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.12, y: -4 }}
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-200 hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Radar className="text-cyan-400" />
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-900/30 transition"
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
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 text-center max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-5">Contact</h2>

        <p className="text-gray-400 mb-7">
          Open to SOC Analyst, Cybersecurity Analyst, and security internship opportunities.
        </p>

        <div className="flex justify-center flex-wrap gap-5 text-cyan-400">
          <a href="mailto:ksaiswarya10@gmail.com" className="inline-flex items-center gap-2 hover:text-cyan-300">
            <Mail size={18} />
            Email
          </a>

          <a href="https://github.com/ksaiswarya10" target="_blank" className="hover:text-cyan-300">
            GitHub
          </a>

          <a href="https://linkedin.com/in/aiswarya-k-s" target="_blank" className="hover:text-cyan-300">
            LinkedIn
          </a>
        </div>
      </motion.section>
    </div>
  );
}