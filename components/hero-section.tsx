"use client"

import Image from "next/image"

export function HeroSection() {
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
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-cyan-600 filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 orbitron glow">
              <span className="gradient-text">Connecting</span>
              <br />
              <span className="text-white">the Future</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              OHMies specializes in cutting-edge smart systems, IoT solutions, and innovative software development to
              power the cities of tomorrow.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection("products")}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-cyan-500/30"
              >
                Our Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border border-cyan-400 rounded-full font-medium hover:bg-cyan-900/30 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-600 filter blur-xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-cyan-600 filter blur-xl opacity-50"></div>
              <div className="relative neon-border rounded-2xl overflow-hidden card-glow">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart City"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-xl font-bold orbitron">NeoPark</h3>
                  <p className="text-sm text-gray-300">Our revolutionary smart parking solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
