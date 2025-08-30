import React from "react";
import Header from "../components/Header";
import VantaBackground from "../resources/VantaBackground";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <VantaBackground />
      <div className="min-h-screen bg-primary p-8">
        <div className="grid-cols-4 gap-4 max-w-2xl mx-auto bg-primary/50 rounded-lg backdrop-blur-lg p-8 shadow-xl">
          <h2 className="text-3xl sm:text-xl font-bold text-secondary mb-8">Get in Touch</h2>
          <div className="col-span-4"></div>
          <form className="space-y-6 sm:text-xs">
            <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-secondary focus:border-secondary outline-none"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-secondary focus:border-secondary outline-none"
              placeholder="What is this about?"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-secondary focus:border-secondary outline-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-tertiary text-white rounded-lg hover:bg-opacity-80 transition-colors duration-200"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Contact;