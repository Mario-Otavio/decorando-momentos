"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMensagemSaudacao } from "@/hooks/mensagem-saudacao"

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Temas", href: "#temas" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Pacotes", href: "#pacotes" },
  { name: "Doces", href: "#doces" },
  { name: "Contato", href: "#contato" },
  { name: "Sobre", href: "#sobre" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { obterMensagemWhatsApp } = useMensagemSaudacao()
  const numeroWhatsApp = "5565996697167"
  const mensagemBase = "gostaria de solicitar um orçamento para uma decoração."
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${obterMensagemWhatsApp(mensagemBase)}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/treats/Logo-v2.png"
                alt="Decorando Momentos"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
            <span className="font-display text-primary text-xl font-bold">
              Decorando Momentos
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button
                  asChild
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground cursor-pointer w-full mt-2"
                >
                  <a href={urlWhatsApp} target="_blank" onClick={() => setIsOpen(false)}>
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
