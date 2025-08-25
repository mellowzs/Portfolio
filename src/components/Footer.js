import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full py-6 text-white text-sm bg-gray-900 border-tertiary border-t-2">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Location */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={18} className="text-tertiary" />
          <span>Iriga City, Camarines Sur, Philippines</span>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Left: Contact Info */}
          <div className="space-y-2 text-left">
            <a
              href="mailto:melportanova@gmail.com"
              className="flex items-center gap-2 hover:text-tertiary transition"
            >
              <Mail size={18} /> melportanova@gmail.com
            </a>
            <div className="flex flex-col">
              <a
                href="tel:+639474578813"
                className="flex items-center gap-2 hover:text-tertiary transition"
              >
                <Phone size={18} /> +63 947 457 8813
              </a>
              <a
                href="tel:+639153235631"
                className="flex items-center gap-2 hover:text-tertiary transition"
              >
                <Phone size={18} /> +63 915 323 5631
              </a>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0">
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
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center mt-6">
          &copy; {new Date().getFullYear()} Mel Portfolio. All rights reserved.
          <br />
          Built with <span className="text-tertiary">React</span> &amp;{" "}
          <span className="text-tertiary">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
