"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-cyan-900/30 text-cyan-400 orbitron">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 orbitron">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Interested in our solutions? Reach out to discuss how we can collaborate on your next smart project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-gray-900/50 p-8 rounded-xl neon-border h-full">
              <h3 className="text-xl font-bold mb-6 orbitron">
                Contact <span className="gradient-text">Information</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center mt-1">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Jaro Iloilo City, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mt-1">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <p className="text-gray-400">ohmiesInc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center mt-1">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-200">Phone</h4>
                    <p className="text-gray-400">+63 9279288538</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="font-medium text-gray-200 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
