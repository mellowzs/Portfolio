import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 mt-12 text-center text-white text-sm">
      <div>
        &copy; {new Date().getFullYear()} Mel Portfolio. All rights reserved.
      </div>
      <div className="mt-2">
        Built with <span className="text-tertiary">React</span> &amp; <span className="text-tertiary">Tailwind CSS</span>
      </div>
    </footer>
  );
}

export default Footer