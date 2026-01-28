"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Send, MessageCircle, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(00) 00000-0000",
    href: "https://wa.me/5500000000000",
    color: "#25D366",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(00) 0000-0000",
    href: "tel:+550000000000",
    color: "#ee52b1",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Sua Cidade - Estado",
    href: "#",
    color: "#f6a40e",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg-Sáb: 8h às 18h",
    href: "#",
    color: "#8dd7be",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    eventDate: "",
    theme: "",
    package: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      phone: "",
      eventDate: "",
      theme: "",
      package: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary bg-primary/10">
            Contato
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Solicite seu orçamento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp. Responderemos
            em até 24 horas!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <info.icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-card-foreground">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Send className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo contato! Responderemos em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          placeholder="Seu nome"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, name: e.target.value }))
                          }
                          className="border-input focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">WhatsApp/Telefone *</Label>
                        <Input
                          id="phone"
                          placeholder="(00) 00000-0000"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, phone: e.target.value }))
                          }
                          className="border-input focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Data do Evento *</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          required
                          value={formState.eventDate}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, eventDate: e.target.value }))
                          }
                          className="border-input focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="theme">Tema Desejado</Label>
                        <Input
                          id="theme"
                          placeholder="Ex: Homem-Aranha, Frozen..."
                          value={formState.theme}
                          onChange={(e) =>
                            setFormState((prev) => ({ ...prev, theme: e.target.value }))
                          }
                          className="border-input focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="package">Pacote de Interesse</Label>
                      <Select
                        value={formState.package}
                        onValueChange={(value) =>
                          setFormState((prev) => ({ ...prev, package: value }))
                        }
                      >
                        <SelectTrigger className="border-input focus:border-primary">
                          <SelectValue placeholder="Selecione um pacote" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simples">Pacote Simples</SelectItem>
                          <SelectItem value="intermediario">Pacote Intermediário</SelectItem>
                          <SelectItem value="completo">Pacote Completo</SelectItem>
                          <SelectItem value="combo">Combo Festa Completa</SelectItem>
                          <SelectItem value="outro">Outro / Não sei ainda</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Conte mais detalhes sobre sua festa... (Local, número de convidados, preferências especiais, etc.)"
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="border-input focus:border-primary resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Enviar Solicitação
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
