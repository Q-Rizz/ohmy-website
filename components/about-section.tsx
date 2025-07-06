import { Cpu, Network, Code } from "lucide-react"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm border-t border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-cyan-900/30 text-cyan-400 orbitron">
            ABOUT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 orbitron">
            Pioneering <span className="gradient-text">Smart Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            OHMies is at the forefront of IoT and smart system development, creating innovative technologies that bridge
            the gap between the physical and digital worlds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-xl neon-border hover:card-glow transition-all">
            <div className="w-14 h-14 rounded-full bg-cyan-900/30 flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 orbitron">Smart Systems</h3>
            <p className="text-gray-300">
              We develop intelligent systems that automate and optimize processes, making everyday life more efficient
              and sustainable.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl neon-border hover:card-glow transition-all">
            <div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center mb-6">
              <Network className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 orbitron">IoT Solutions</h3>
            <p className="text-gray-300">
              Our IoT platforms connect devices and sensors to create smart ecosystems that gather data and enable
              intelligent decision-making.
            </p>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl neon-border hover:card-glow transition-all">
            <div className="w-14 h-14 rounded-full bg-cyan-900/30 flex items-center justify-center mb-6">
              <Code className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 orbitron">Software Development</h3>
            <p className="text-gray-300">
              We craft custom software solutions tailored to your needs, from mobile apps to enterprise systems with
              cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
