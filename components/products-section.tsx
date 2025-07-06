"use client"

import Image from "next/image"
import { CheckCircle, ArrowRight, Home, Factory, Building } from "lucide-react"

export function ProductsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 orbitron">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 orbitron">
            Innovative <span className="gradient-text">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Discover our flagship products designed to revolutionize urban living and business operations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-20">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-purple-600 filter blur-3xl opacity-20"></div>
              <div className="relative neon-border rounded-2xl overflow-hidden card-glow">
                <Image
                  src="/pictures/Neo Ftont view.png"
                  alt="NeoPark"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400">
              FLAGSHIP PRODUCT
            </span>
            <h3 className="text-3xl font-bold mt-4 mb-4 orbitron">
              NeoPark <span className="gradient-text">System</span>
            </h3>
            <p className="text-gray-300 mb-6">
              NeoPark is our revolutionary smart parking platform that combines hardware and software to solve urban
              parking challenges. The system consists of:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Neo Sensors:</strong> Smart parking detectors installed in each parking slot
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Mobile App:</strong> Real-time parking availability and navigation
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Dashboard:</strong> Comprehensive management system for parking operators
                </span>
              </li>
            </ul>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all inline-flex items-center"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-xl neon-border hover:card-glow transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
              <Home className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 orbitron">Smart Home Hub</h3>
            <p className="text-gray-300 mb-4">
              Centralized control system for all your smart home devices with AI-powered automation.
            </p>
            <span className="text-sm text-cyan-400">Coming Soon</span>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-xl neon-border hover:card-glow transition-all">
            <div className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mb-4">
              <Factory className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 orbitron">Industrial IoT</h3>
            <p className="text-gray-300 mb-4">
              Monitoring and optimization solutions for manufacturing and industrial processes.
            </p>
            <span className="text-sm text-cyan-400">In Development</span>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-xl neon-border hover:card-glow transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 orbitron">Smart City Suite</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive platform for urban management including traffic, utilities, and public services.
            </p>
            <span className="text-sm text-cyan-400">In Development</span>
          </div>
        </div>
      </div>
    </section>
  )
}
