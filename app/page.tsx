"use client";

import { motion } from "framer-motion";
import { Mail, Shield, ExternalLink, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Aiswarya K S
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-400 mb-6"
        >
          Cybersecurity Engineer Intern | Aspiring SOC Analyst
        </motion.p>

        <a
          href="/resume.pdf"
          download
          className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
        >
          <Download size={18} /> Resume
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Shield className="text-cyan-400" /> About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I am a Cybersecurity Engineer Intern with a strong interest in SOC operations,
          threat detection, and network security. I am actively building hands-on
          experience through security labs, phishing detection projects, and learning
          tools like Nmap, Wireshark, Burp Suite, and Kali Linux. My goal is to
          become a SOC Analyst and contribute to real-world security monitoring
          and incident response.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Nmap",
            "Wireshark",
            "Burp Suite",
            "Kali Linux",
            "TCP/IP",
            "DNS",
            "HTTP/HTTPS",
            "SSL/TLS",
            "OWASP Top 10",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        {/* Project 1 */}
        <div className="bg-gray-900 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold mb-2">
            Phishing Detection Web Application
          </h3>

          <p className="text-gray-400 mb-2">
            <b>Problem:</b> Identify malicious phishing URLs
          </p>

          <p className="text-gray-400 mb-2">
            <b>Solution:</b> Used rule-based detection + machine learning
          </p>

          <p className="text-gray-400 mb-2">
            <b>Tools:</b> Python, Flask, Scikit-learn
          </p>

          <p className="text-gray-400 mb-3">
            <b>Learning:</b> Gained knowledge in phishing patterns, URL analysis,
            and feature extraction
          </p>

          <a
            href="https://github.com/ksaiswarya10/phishing-detection"
            target="_blank"
            className="text-cyan-400 flex items-center gap-1"
          >
            View Project <ExternalLink size={16} />
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Mini SOC Lab</h3>

          <p className="text-gray-400 mb-2">
            <b>Objective:</b> Understand SOC workflow and security monitoring
          </p>

          <p className="text-gray-400 mb-2">
            <b>Activities:</b> Log analysis, alert monitoring, Kali Linux practice
          </p>

          <p className="text-gray-400 mb-2">
            <b>Tools:</b> Kali Linux, basic SIEM concepts
          </p>

          <p className="text-gray-400 mb-3">
            <b>Learning:</b> Learned how security events are detected and analyzed
            in a SOC environment
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className="flex justify-center gap-6 text-cyan-400">
          <a href="mailto:ksaiswarya10@gmail.com">
            <Mail />
          </a>

          <a href="https://github.com/ksaiswarya10" target="_blank">
            GitHub
          </a>

          <a href="https://linkedin.com/in/aiswarya-k-s" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}