import React from "react";
import { Facebook, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full py-6 text-white text-sm bg-gray-900 border-tertiary border-t-2 sm:text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-8">
          {/* Contact Info (Left Column) */}
          <div className="space-y-4 sm:col-span-2">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-tertiary" />
              <span>Iriga City, Camarines Sur, Philippines</span>
            </div>
            <div className="space-y-2 ">
              <a
                href="mailto:melportanova@gmail.com"
                className="flex items-center gap-2 hover:text-tertiary transition"
              >
                <Mail size={18} className="sm:size-3" /> melportanova@gmail.com
              </a>
              <div className="space-y-1">
                <a
                  href="tel:+639474578813"
                  className="flex items-center gap-2 hover:text-tertiary transition"
                >
                  <Phone size={18} className="sm:size-3" /> +63 947 457 8813
                </a>
                <a
                  href="tel:+639153235631"
                  className="flex items-center gap-2 hover:text-tertiary transition"
                >
                  <Phone size={18} className="sm:size-3"/> +63 915 323 5631
                </a>
              </div>
            </div>
          </div>

          {/* Social Links and Copyright (Middle Column) */}
          <div className="flex flex-col items-center space-y-4 sm:col-span-3">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/SHYzy.Melu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tertiary transition"
              >
                <Facebook size={24} className="sm:size-3"/>
              </a>
              <a
                href="https://github.com/mellowzs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tertiary transition"
              >
                <Github size={24} className="sm:size-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/mel-portz81/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tertiary transition"
              >
                <Linkedin size={24} className="sm:size-3"/>
              </a>
            </div>
            <div className="text-center">
              &copy; {new Date().getFullYear()} Mel Portfolio. All rights reserved.
              <br />
              Built with <span className="text-tertiary">React</span> &amp;{" "}
              <span className="text-tertiary">Tailwind CSS</span>
            </div>
          </div>

          {/* Empty Right Column */}
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
