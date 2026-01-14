'use client';
import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon, Github, Linkedin, Twitter, Mail, ArrowRight, Code2, Zap, Users, Layout, Server, Smartphone, Wrench, CheckCircle, Trophy, Star, Send, Facebook, Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import AmTechy from "@/public/amtechy.png";



const Portfolio: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  // const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                AM
              </div>
              <span className="font-semibold text-lg hidden sm:block">Abdul Malik</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div> */}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Front-End & Mobile</span>
              <br />Engineer
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
              Building scalable, performance-driven applications that solve real-world problems with clean code and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6 mt-12">
              {[
                { Icon: Github, href: 'https://github.com/Ademolaadisa010' },
                { Icon: Facebook, href: 'https://web.facebook.com/base.man.304047?_rdc=1&_rdr#' },
                { Icon: Twitter, href: 'https://x.com/broskiprop94216' }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Front-End and Mobile Developer with a proven track record of building scalable, high-performance applications. My approach combines clean architecture, modern technologies, and user-centric design to deliver solutions that make a real impact. Whether it's optimizing backend systems, crafting intuitive mobile experiences, or architecting cloud infrastructure, I focus on writing maintainable code that scales with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { Icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code following industry best practices and design patterns.', bgColor: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
              { Icon: Zap, title: 'Performance', desc: 'Optimizing applications for speed, efficiency, and exceptional user experiences.', bgColor: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
              { Icon: Users, title: 'Collaboration', desc: 'Working effectively in teams, communicating clearly, and delivering results together.', bgColor: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' }
            ].map(({ Icon, title, desc, bgColor, iconColor }, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Tech Stack</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Technologies I work with to build exceptional products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Layout, title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux',], bgColor: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-600 dark:text-blue-400' },
              { Icon: Server, title: 'Backend', skills: ['Node.js', "Supabase", 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs'], bgColor: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-600 dark:text-green-400' },
              { Icon: Smartphone, title: 'Mobile', skills: ['React Native', 'Expo', 'iOS', 'Android'], bgColor: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600 dark:text-purple-400' },
              { Icon: Wrench, title: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Figma'], bgColor: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-600 dark:text-orange-400' }
            ].map(({ Icon, title, skills, bgColor, iconColor }, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Real-world applications built with modern technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AmTechy',
                desc: 'Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Built for scalability and performance.',
                tags: ['Next.js', 'Typescript', 'Tailwindcss', 'Firebase'],
                gradient: 'from-blue-500 to-purple-600',
                tagBg: 'bg-blue-100 dark:bg-blue-900/30',
                tagText: 'text-blue-600 dark:text-blue-400',
                image: "/amtechy.png",
                link: "https://am-techy.vercel.app/"
              },
              {
                title: 'SkillBridge',
                desc: 'Cross-platform mobile app with workout tracking, progress analytics, and social features. 50K+ downloads on app stores.',
                tags: ['Nextjs', 'Firebase', 'Typescript', 'Tailwindcss'],
                gradient: 'from-green-500 to-teal-600',
                tagBg: 'bg-green-100 dark:bg-green-900/30',
                tagText: 'text-green-600 dark:text-green-400',
                image: "/skillbridge.png",
                link: "https://skill-bridge-liard-nine.vercel.app/"
              },
              {
                title: 'CoachCam',
                desc: 'Real-time business intelligence platform with custom reports, data visualization, and automated insights for enterprise clients.',
                tags: ['Nextjs', 'TypeScript', 'Tailwindcss', 'Cloud'],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/coachcam.png",
                link: "https://coach-cam-nu.vercel.app/"
              },
              {
                title: 'FixMate',
                desc: 'Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Built for scalability and performance.',
                tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
                gradient: 'from-blue-500 to-purple-600',
                tagBg: 'bg-blue-100 dark:bg-blue-900/30',
                tagText: 'text-blue-600 dark:text-blue-400',
              },
              {
                title: 'AgroLink',
                desc: 'Cross-platform mobile app with workout tracking, progress analytics, and social features. 50K+ downloads on app stores.',
                tags: ['Nextjs', 'Firebase', 'Typescript', '  Tailwindcss'],
                gradient: 'from-green-500 to-teal-600',
                tagBg: 'bg-green-100 dark:bg-green-900/30',
                tagText: 'text-green-600 dark:text-green-400',
                image: "/agrolink.png",
                link: "https://agro-links.vercel.app/"
              },
              {
                title: 'Buycex',
                desc: 'Real-time business intelligence platform with custom reports, data visualization, and automated insights for enterprise clients.',
                tags: ['React', 'Javscript', 'Framee-motion'],
                gradient: 'from-orange-500 to-red-600',
                tagBg: 'bg-orange-100 dark:bg-orange-900/30',
                tagText: 'text-orange-600 dark:text-orange-400',
                image: "/buycex.png",
                link: "https://abdulmalik-buycex-14nu.vercel.app/"
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group">
                <div className={`h-48 bg-gradient-to-br bg-cover bg-center ${project.gradient} relative overflow-hidden`}>
                  <div className="w-full h-full bg-black/20 group-hover:scale-110 transition-transform duration-300">
                    <img src={`${project.image}`} alt='amtechy' />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-2 py-1 ${project.tagBg} ${project.tagText} rounded text-xs font-medium`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.link} target='_blank' className='flex-1'>
                    <button className="flex-1 w-full px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center text-sm">
                      Live Demo
                    </button></a>
                    <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience & Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Building impactful solutions across various domains</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: 'Senior Full-Stack Developer',
                company: 'TechCorp Solutions',
                period: '2022 - Present',
                Icon: CheckCircle,
                items: [
                  'Led development of microservices architecture serving 500K+ daily active users',
                  'Reduced API response time by 60% through optimization and caching strategies',
                  'Mentored 5 junior developers and established coding standards across teams'
                ]
              },
              {
                title: 'Hackathon Winner - TechCrunch Disrupt',
                company: 'Best Mobile App Award',
                period: '2023',
                Icon: Trophy,
                items: [
                  'Built AI-powered productivity app in 48 hours with React Native and GPT-4',
                  'Secured $50K in seed funding and partnership with major tech accelerator'
                ]
              },
              {
                title: 'Freelance Developer',
                company: 'Various Clients',
                period: '2020 - 2022',
                Icon: CheckCircle,
                items: [
                  'Delivered 20+ projects for startups and enterprises across e-commerce, fintech, and healthcare',
                  'Maintained 5-star rating with 100% client satisfaction and repeat business rate'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <exp.Icon className={`w-5 h-5 ${exp.Icon === Trophy ? 'text-yellow-500' : 'text-green-500'} mt-0.5 flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What People Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Feedback from clients and collaborators</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Alex delivered our mobile app ahead of schedule with exceptional quality. The code is clean, well-documented, and the app performs flawlessly. Highly recommended!",
                name: 'Sarah Johnson',
                role: 'CEO, StartupCo',
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                text: "Working with Alex was a game-changer for our project. His technical expertise and problem-solving skills helped us scale our platform to handle millions of users.",
                name: 'Michael Chen',
                role: 'CTO, TechVentures',
                gradient: 'from-green-500 to-teal-600'
              },
              {
                text: "Exceptional developer with great communication skills. Alex understood our vision and brought it to life with a beautiful, high-performance web application.",
                name: 'Emily Rodriguez',
                role: 'Founder, DesignHub',
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{testimonial.text}</p>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full`}></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Project Inquiry" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:alex@example.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>alex@example.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2024 Alex Morgan. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;