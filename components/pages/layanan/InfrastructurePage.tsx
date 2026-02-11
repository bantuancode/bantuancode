import React from "react";
import Link from "next/link";
import {
  FaServer,
  FaWifi,
  FaCloud,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaNetworkWired,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiCisco,
  SiMikrotik,
  SiArduino,
  SiRaspberrypi,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiNodedotjs,
  SiMqtt,
  SiGooglecloud,
} from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";

export const InfrastructurePage = () => {
  const services = [
    {
      icon: FaServer,
      title: "Networking",
      description:
        "Design, konfigurasi, dan troubleshooting jaringan komputer menggunakan Cisco, MikroTik, dan perangkat networking lainnya.",
      features: [
        "Network Topology Design",
        "Cisco Router & Switch Configuration",
        "MikroTik RouterOS Setup",
        "VLAN Configuration",
        "Static & Dynamic Routing (RIP, OSPF, EIGRP)",
        "Network Address Translation (NAT)",
        "Access Control List (ACL)",
        "VPN Configuration (Site-to-Site, Remote Access)",
        "Network Troubleshooting & Documentation",
      ],
      techStack: [
        { icon: SiCisco, name: "Cisco Packet Tracer", color: "text-blue-400" },
        { icon: SiMikrotik, name: "MikroTik", color: "text-red-400" },
        { icon: FaNetworkWired, name: "GNS3", color: "text-green-400" },
      ],
      examples: [
        "Campus Network Design (Multi-VLAN)",
        "Small Office Network with VPN",
        "Routing Protocol Implementation (OSPF)",
        "Wireless Network Setup (Hotspot, Captive Portal)",
        "Network Monitoring & Management",
      ],
      priceStart: "250rb",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaWifi,
      title: "Internet of Things (IoT)",
      description:
        "Pengembangan sistem IoT menggunakan Arduino, Raspberry Pi, ESP32 untuk monitoring, automation, dan smart devices.",
      features: [
        "Arduino Programming (C/C++)",
        "Raspberry Pi Projects (Python)",
        "ESP32/ESP8266 WiFi Integration",
        "Sensor Integration (Temperature, Humidity, Motion, etc)",
        "Actuator Control (Relay, Motor, LED, LCD)",
        "MQTT Protocol Implementation",
        "IoT Dashboard (Web/Mobile)",
        "Cloud Integration (Firebase, ThingSpeak)",
        "Real-time Monitoring System",
      ],
      techStack: [
        { icon: SiArduino, name: "Arduino", color: "text-cyan-400" },
        { icon: SiRaspberrypi, name: "Raspberry Pi", color: "text-red-500" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
        { icon: SiMqtt, name: "MQTT", color: "text-purple-400" },
      ],
      examples: [
        "Smart Home Automation System",
        "Temperature & Humidity Monitoring",
        "Smart Garden Irrigation System",
        "Security System (Motion Detection + Camera)",
        "Environmental Monitoring Station",
      ],
      priceStart: "300rb",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaCloud,
      title: "Cloud Computing",
      description:
        "Deployment aplikasi, containerization, dan orchestration menggunakan cloud platforms dan DevOps tools modern.",
      features: [
        "AWS EC2/S3/RDS Deployment",
        "Azure Virtual Machines & App Services",
        "Google Cloud Platform Setup",
        "Docker Containerization",
        "Kubernetes Orchestration",
        "CI/CD Pipeline Setup (GitHub Actions, GitLab CI)",
        "Load Balancing & Auto Scaling",
        "Cloud Database Configuration",
        "Infrastructure as Code (Terraform basics)",
      ],
      techStack: [
        { icon: FaAws, name: "AWS", color: "text-orange-400" },
        { icon: VscAzure, name: "Azure", color: "text-blue-400" },
        { icon: SiGooglecloud, name: "GCP", color: "text-blue-500" },
        { icon: SiDocker, name: "Docker", color: "text-blue-400" },
        { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500" },
      ],
      examples: [
        "Web App Deployment on AWS EC2",
        "Dockerized Application with Multi-Container",
        "Kubernetes Cluster Setup (Minikube/K3s)",
        "CI/CD Pipeline for Auto Deployment",
        "Cloud Storage & CDN Implementation",
      ],
      priceStart: "350rb",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const benefits = [
    {
      icon: FaNetworkWired,
      title: "Hands-On Config",
      desc: "Praktik langsung dengan real configuration",
    },
    {
      icon: FaRocket,
      title: "Production Ready",
      desc: "Setup yang siap digunakan di production",
    },
    {
      icon: FaShieldAlt,
      title: "Best Practices",
      desc: "Mengikuti industry standards dan security",
    },
  ];

  const infrastructureTopics = [
    {
      title: "Network Protocols",
      items: ["TCP/IP", "HTTP/HTTPS", "DNS", "DHCP", "FTP/SFTP"],
      icon: "📡",
    },
    {
      title: "Routing Protocols",
      items: ["Static Routing", "RIP", "OSPF", "EIGRP", "BGP"],
      icon: "🛣️",
    },
    {
      title: "IoT Sensors",
      items: ["DHT11/22", "Ultrasonic", "PIR Motion", "LDR", "GPS Module"],
      icon: "📟",
    },
    {
      title: "Cloud Services",
      items: [
        "Compute (VM)",
        "Storage (S3)",
        "Database (RDS)",
        "Load Balancer",
        "Auto Scaling",
      ],
      icon: "☁️",
    },
    {
      title: "DevOps Tools",
      items: ["Docker", "Kubernetes", "Git/GitHub", "CI/CD", "Monitoring"],
      icon: "🔧",
    },
    {
      title: "Network Security",
      items: ["Firewall", "VPN", "ACL", "Port Security", "WPA/WPA2"],
      icon: "🔐",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link
              href="/layanan"
              className="hover:text-cyan-400 transition-colors"
            >
              Layanan
            </Link>
            <span>/</span>
            <span className="text-white">Infrastructure</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Infrastructure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              Layanan Networking, Internet of Things, dan Cloud Computing untuk
              tugas kuliah dan project. Dari konfigurasi router hingga
              deployment cloud infrastructure.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                  >
                    <Icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {benefit.title}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {benefit.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="text-white/80 text-sm">
                          Mulai dari{" "}
                          <span className="font-bold">
                            Rp {service.priceStart}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Apa yang Anda Dapatkan:
                        </h3>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Examples & Tech Stack */}
                      <div>
                        {/* Tech Stack */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Tools & Platform:
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {service.techStack.map((tech, idx) => {
                            const TechIcon = tech.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-lg"
                              >
                                <TechIcon className={`w-5 h-5 ${tech.color}`} />
                                <span className="text-slate-300 text-sm">
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Examples */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Contoh Project:
                        </h3>
                        <ul className="space-y-2">
                          {service.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-green-400 font-bold">
                                •
                              </span>
                              <span className="text-slate-300 text-sm">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="https://wa.me/6285182380899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-200`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Konsultasi {service.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Topics Coverage */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Infrastructure Topics Coverage
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Kami menguasai berbagai teknologi infrastructure yang umum
              dipelajari mahasiswa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {topic.title}
                </h3>
                <ul className="space-y-1.5">
                  {topic.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-slate-400 text-xs flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Pertanyaan Umum
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Apakah perlu punya perangkat fisik untuk IoT project?",
                a: "Tidak harus. Untuk tugas kuliah biasanya simulasi sudah cukup. Namun jika ingin implementasi real, kami bisa guide hardware yang dibutuhkan (Arduino, sensor, dll) dengan budget terjangkau.",
              },
              {
                q: "Untuk networking, pakai simulator atau real device?",
                a: "Kami gunakan Cisco Packet Tracer atau GNS3 untuk simulasi. Lebih praktis, tidak perlu hardware fisik, dan cukup untuk tugas kuliah. Konfigurasi sama dengan real device.",
              },
              {
                q: "Apakah cloud deployment berbayar?",
                a: "Untuk testing/demo, kami bisa gunakan AWS/Azure/GCP Free Tier yang gratis. Jika butuh production deployment, biaya hosting ditanggung client (mulai $5-10/bulan tergantung resource).",
              },
              {
                q: "Deliverable untuk infrastructure project?",
                a: "Tergantung jenis: Networking (file .pkt Packet Tracer + dokumentasi), IoT (source code + circuit diagram + video demo), Cloud (deployment script + access credentials + documentation).",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 group"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <FaArrowRight className="w-4 h-4 text-green-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-green-400 hover:text-green-300 font-medium text-sm inline-flex items-center gap-2"
            >
              <span>Lihat Semua FAQ</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Butuh Bantuan Infrastructure Project?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk diskusi topology, requirements, dan
              implementation. Dari network design hingga cloud deployment, kami
              siap membantu.
            </p>
            <Link
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat via WhatsApp Sekarang</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
