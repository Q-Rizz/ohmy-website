import Image from "next/image"
import { Linkedin, Twitter, Github, Dribbble } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Rhea Rizz Perocho",
      role: "CEO & Co-Founder",
      description: "Visionary leader with expertise in IoT architecture and smart city solutions.",
      image: "/placeholder.svg?height=200&width=200",
      color: "cyan",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" },
      ],
    },
    {
      name: "Lance Tyrone Del Socorro",
      role: "CTO & Co-Founder",
      description: "Hardware specialist and embedded systems engineer with a passion for innovation.",
      image: "/placeholder.svg?height=200&width=200",
      color: "purple",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" },
      ],
    },
    {
      name: "Franz Samilo",
      role: "Lead Software Engineer",
      description: "Full-stack developer with expertise in cloud computing and mobile applications.",
      image: "/placeholder.svg?height=200&width=200",
      color: "cyan",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" },
      ],
    },
    {
      name: "Dale Cervera",
      role: "Product Manager",
      description: "UX specialist and product strategist focused on creating intuitive smart systems.",
      image: "/placeholder.svg?height=200&width=200",
      color: "purple",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Dribbble, href: "#" },
      ],
    },
    {
      name: "Kirsten Tordesillas",
      role: "Marketing Director",
      description: "Creative strategist specializing in digital marketing and brand development for tech companies.",
      image: "/placeholder.svg?height=200&width=200",
      color: "cyan",
      social: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" },
      ],
    },
  ]

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm border-t border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 orbitron">
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 orbitron">
            Meet The <span className="gradient-text">Minds</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            The brilliant team behind OHMies' innovative solutions and visionary projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl neon-border hover:card-glow transition-all text-center"
            >
              <div
                className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-2 ${
                  member.color === "cyan" ? "border-cyan-400/30" : "border-purple-400/30"
                } mb-6 pulse`}
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 orbitron">{member.name}</h3>
              <p className={`mb-4 ${member.color === "cyan" ? "text-cyan-400" : "text-purple-400"}`}>{member.role}</p>
              <p className="text-gray-300 text-sm mb-4">{member.description}</p>
              <div className="flex justify-center space-x-3">
                {member.social.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.href}
                    className={`text-gray-400 hover:${member.color === "cyan" ? "text-cyan-400" : "text-purple-400"} transition-all`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
