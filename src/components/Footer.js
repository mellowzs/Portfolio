import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full py-6 mt-12 text-center text-white text-sm">
      <div>
        &copy; {new Date().getFullYear()} Mel Portfolio. All rights reserved.
      </div>
      <div className="mt-2">
        Built with <span className="text-tertiary">React</span> &amp;{" "}
        <span className="text-tertiary">Tailwind CSS</span>
      </div>

      {/* Social Links */}
      <div className="flex flex-row justify-center gap-6 mt-4">
        <a
          href="https://www.facebook.com/SHYzy.Melu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tertiary transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://github.com/mellowzs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tertiary transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mel-portz81/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tertiary transition"
        >
          <Linkedin size={20} />
        </a>

      {/* Contact Info */}
        <p className="flex items-center justify-center gap-2 hover:text-tertiary transition">
          <Mail size={18} /> melportanova@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2 hover:text-tertiary transition">
          <Phone size={18} /> +63 947 457 8813 / +63 915 323 5631
        </p>
      </div>
    </footer>
  );
}

export default Footer;
