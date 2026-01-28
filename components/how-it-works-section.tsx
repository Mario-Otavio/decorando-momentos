"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Package, Truck, PartyPopper } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

const steps = [
  {
    icon: FaWhatsapp,
    title: "Entre em Contato",
    description:
      "Fale conosco pelo WhatsApp. Conte sobre a data, tema desejado e local da festa.",
    color: "#ee52b1",
  },
  {
    icon: Package,
    title: "Escolha o Tema ou Pacote",
    description:
      "Apresentamos as opções de decoração e você escolhe o pacote ideal para o seu orçamento.",
    color: "#8dd7be",
  },
  {
    icon: Truck,
    title: "Entrega e Montagem",
    description:
      "Nossa equipe entrega e monta toda a decoração no local da festa com antecedência.",
    color: "#f6a40e",
  },
  {
    icon: PartyPopper,
    title: "Aproveite a Festa!",
    description:
      "É só curtir o momento! Após a festa, retiramos tudo. Você não precisa se preocupar com nada.",
    color: "#ee52b1",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-secondary text-secondary-foreground bg-secondary/20">
            Processo
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Como funciona a locação?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Nosso processo é simples e descomplicado. Em apenas 4 passos, sua festa estará pronta
            para acontecer!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-lg transition-shadow duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center mt-4"
                  style={{ backgroundColor: `${step.color}15` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-10 h-10" style={{ color: step.color }} />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 bg-muted rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-2">
            Precisa de ajuda para escolher?
          </h3>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para ajudar você a encontrar a decoração perfeita!
          </p>
          <a
            href="https://wa.me/5565996697167?text=Olá, gostaria de saber mais sobre a locação de decorações temáticas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <FaWhatsapp className="w-6 h-6" />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
