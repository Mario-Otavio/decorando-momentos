"use client"

import { motion } from "framer-motion"
import { PartyPopper, Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useMensagemSaudacao } from "@/hooks/mensagem-saudacao"

const socialLinks = [
  // {
  //   name: "Instagram",
  //   icon: Instagram,
  //   href: "https://instagram.com/decorandomomentosoficial",
  //   color: "#E4405F",
  // },
  // {
  //   name: "Facebook",
  //   icon: Facebook,
  //   href: "https://facebook.com/decorandomomentosoficial",
  //   color: "#1877F2",
  // },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/5565996697167",
    color: "#25D366",
  },
]

const quickLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Temas", href: "#temas" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Pacotes", href: "#pacotes" },
  { name: "Doces e Salgados", href: "#doces" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  const { obterMensagemWhatsApp } = useMensagemSaudacao()
  const numeroWhatsApp = "5565996697167"
  const mensagemBase = "Gostaria de informações sobre a locação de decorações temáticas"
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${obterMensagemWhatsApp(mensagemBase)}`

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#30110e] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <PartyPopper className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">Decorando Momentos</span>
            </a>
            <p className="text-white/70 text-sm mb-6">
              Transformando festas infantis em memórias inesquecíveis. Locação de decorações
              temáticas completas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const href = social.name === "WhatsApp" ? urlWhatsApp : social.href
                return (
                  <motion.a
                    key={social.name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 text-[#25D366] hover:text-white rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: social.color }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] flex shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">WhatsApp</p>
                  <a
                    href={urlWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                  >
                    (65) 99669-7167
                  </a>
                </div>
              </li>
              {/* <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">E-mail</p>
                  <a
                    href="mailto:contato@decorandomomentosoficial.com.br"
                    className="hover:text-secondary transition-colors"
                  >
                    contato@decorandomomentosoficial.com.br
                  </a>
                </div>
              </li> */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">Localização</p>
                  <p>Cuiabá - MT</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-bold mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-white/70">
              <div className="flex justify-between">
                <span>Segunda a Sábado</span>
                <span className="text-white">8h às 18h</span>
              </div>
              {/* <div className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">8h às 14h</span>
              </div> */}
              {/* <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-white/50">Fechado</span>
              </div> */}
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-sm text-white/70">
                <strong className="text-white">Entregas aos domingos:</strong> Agendamento prévio
                necessário. Consulte disponibilidade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} Decorando Momentos. Todos os direitos reservados.</p>
            <p>
              Feito com{" "}
              <span className="text-primary" aria-label="amor">
                ♥
              </span>{" "}
              para criar memórias especiais
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
