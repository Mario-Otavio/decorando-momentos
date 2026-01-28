"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Flame, Star } from "lucide-react"

const packages = [
  {
    name: "Simples",
    price: "A partir de R$ 160",
    description: "Ideal para festas menores e íntimas",
    color: "#8dd7be",
    popular: false,
    features: [
      "Painel temático",
      "Kit Cilindros",
      "Tapete",
      "Kit de Porta-doces",
      "Entrega e retirada inclusas",
      "Montagem completa no local",
    ],
  },
  {
    name: "Intermediário",
    price: "A partir de R$ 300",
    description: "O mais escolhido pelos nossos clientes",
    color: "#ee52b1",
    popular: true,
    features: [
      "Painel temático",
      "Kit Cilindros",
      "Tapete",
      "Kit de Porta-doces",
      "Estrutura de balões (arco ou torre)",
      "Plaquinhas personalizadas",
      "Entrega e retirada inclusas",
      "Montagem completa no local",
    ],
  },
  {
    name: "Completo",
    price: "A partir de R$ 480",
    description: "Para quem quer uma festa inesquecível",
    color: "#f6a40e",
    popular: false,
    features: [
      "Tudo do pacote Intermediário",
      "Cento de Doces",
      "10 balões extras decorativos",
      "Balão Personalizado com nome do aniversariante",
    ],
  },
]

export function PackagesSection() {
  return (
    <section id="pacotes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-accent text-accent-foreground bg-accent/20">
            Pacotes
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Escolha o pacote ideal para você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos opções para todos os bolsos e tipos de festa. Todos os pacotes incluem
            entrega, montagem e retirada.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={pkg.popular ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card
                className={`relative h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.popular
                  ? "border-2 shadow-lg"
                  : "border-border"
                  }`}
                style={{
                  borderColor: pkg.popular ? pkg.color : undefined,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (!pkg.popular) {
                    e.currentTarget.style.borderColor = pkg.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!pkg.popular) {
                    e.currentTarget.style.borderColor = '';
                  }
                }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div
                      className="flex items-center gap-1 px-4 py-1 text-sm font-medium text-white rounded-bl-xl"
                      style={{ backgroundColor: pkg.color }}
                    >
                      <Flame className="w-4 h-4" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${pkg.color}20` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{ backgroundColor: pkg.color }}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-card-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>

                <CardContent className="flex-1">
                  <p
                    className="text-2xl font-bold text-center mb-6"
                    style={{ color: pkg.color }}
                  >
                    {pkg.price}
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${pkg.color}20` }}
                        >
                          <Check className="w-3 h-3" style={{ color: pkg.color }} />
                        </div>
                        <span className="text-sm text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    asChild
                    className="w-full cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: pkg.color,
                      color: "#ffffff",
                    }}
                  >
                    <a href="#contato">Solicitar Orçamento</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          * Os valores podem variar de acordo com a região de entrega.
          Entre em contato para um orçamento personalizado.
        </motion.p>
      </div>
    </section>
  )
}
