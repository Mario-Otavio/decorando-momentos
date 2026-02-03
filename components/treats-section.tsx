"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cake } from "lucide-react"

const treats = [
  {
    image: "/images/treats/cento_salgado.jpg",
    name: "Cento de Salgados",
    description: "Coxinha, bolinha de queijo, risole, empada e muito mais!",
    price: "A partir de R$ 100",
    color: "#f6a40e",
  },
  {
    image: "/images/treats/cento_brigadeiro.jpeg",
    name: "Brigadeiros e Beijinhos",
    description: "Cento de docinhos tradicionais feitos com ingredientes de qualidade",
    price: "A partir de R$ 100",
    color: "#ee52b1",
  },
  {
    image: "/images/treats/copinho_brigadeiro.jpg",
    name: "Brigadeiro no Copo",
    description: "Deliciosos copinhos de brigadeiro gourmet em diversos sabores",
    price: "A partir de R$ 5/unid.",
    color: "#8dd7be",
  },
  {
    image: "/images/treats/bolo.jpg",
    name: "Bolos Personalizados",
    description: "Bolos decorados no tema da festa, com massa e recheio à escolha",
    price: "A partir de R$ 120",
    color: "#ee52b1",
  },
]

const cakeFlavors = [
  "Chocolate com morango",
  "Brigadeiro",
  "Dois amores",
  "Doce de leite",
  "Prestígio",
  "Abacaxi com coco",
  "Chocolate",
]

export function TreatsSection() {
  return (
    <section id="doces" className="py-20 bg-background">
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
            Delícias
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Bolos, Doces e Salgados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complete sua festa com nossos deliciosos quitutes! Tudo feito com carinho e
            ingredientes selecionados.
          </p>
        </motion.div>

        {/* Treats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {treats.map((treat, index) => (
            <motion.div
              key={treat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-28 h-28 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: `${treat.color}15` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={treat.image}
                      alt={treat.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>

                  <h3 className="font-display text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {treat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{treat.description}</p>
                  <p className="font-bold" style={{ color: treat.color }}>
                    {treat.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Cake Flavors */}
        <motion.div
          className="bg-muted rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Seu próximo sabor de felicidade espera por você
              </h3>
              <p className="text-muted-foreground mb-6">
                Escolha entre nossos sabores mais amados ou solicite uma combinação especial para
                a festa!
              </p>
              <div className="flex flex-wrap gap-2">
                {cakeFlavors.map((flavor) => (
                  <Badge
                    key={flavor}
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground py-1.5 px-3"
                  >
                    {flavor}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="inline-block bg-card rounded-2xl p-6 shadow-lg">
                <Cake className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground text-sm mb-4">
                  Encomende seu bolo com pelo menos <strong>3 dias de antecedência</strong>
                </p>
                <Button
                  asChild
                  className="bg-primary rounded-full hover:bg-primary/90 text-primary-foreground cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <a href="#contato">Encomendar</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Combo */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Monte seu Combo Festa Completa!
            </h3>
            <p className="text-muted-foreground mb-4">
              Decoração + Bolo + Doces + Salgados com desconto especial
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <a href="#contato">Montar Combo</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
