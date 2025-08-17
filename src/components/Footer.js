import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-6 mt-12 text-center text-white text-sm bg-gray-900">
      <div>
        &copy; {new Date().getFullYear()} Mel Portfolio. All rights reserved.
      </div>
      <div className="mt-2">
        Built with <span className="text-tertiary">React</span> &amp;{" "}
        <span className="text-tertiary">Tailwind CSS</span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tertiary transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tertiary transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tertiary transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          className="hover:text-tertiary transition"
        >
          <Mail size={20} />
        </a>
        <a href="tel:+639123456789" className="hover:text-tertiary transition">
          <Phone size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
