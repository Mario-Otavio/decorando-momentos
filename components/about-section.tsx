"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Users, Rocket } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Amor pelo que fazemos",
    description: "Cada decoração é montada com carinho e dedicação",
    color: "#ee52b1",
  },
  {
    icon: Star,
    title: "Qualidade garantida",
    description: "Materiais de primeira linha e acabamento impecável",
    color: "#f6a40e",
  },
  {
    icon: Users,
    title: "Atendimento humanizado",
    description: "Tratamos cada cliente como família",
    color: "#8dd7be",
  },
  {
    icon: Rocket,
    title: "Começo promissor",
    description: "Nossa jornada está só começando, e cada evento é uma nova conquista.",
    color: "#dc2626",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-secondary text-secondary-foreground bg-secondary/20">
              Sobre Nós
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Transformando sonhos em momentos inesquecíveis
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty">
                A <strong className="text-foreground">Decorando Momentos</strong> nasceu do desejo de
                tornar as comemorações infantis ainda mais especiais. Sabemos que cada aniversário é
                único, e nosso objetivo é transformar a festa do seu filho em uma experiência mágica.
              </p>
              <p className="text-pretty">
                Somos uma empresa familiar apaixonada pelo que fazemos. Trabalhamos com temas
                variados e atualizados, sempre buscando as melhores tendências do mercado de festas
                infantis.
              </p>
              <p className="text-pretty">
                Mais do que decorar festas, nosso propósito é <strong className="text-foreground">criar memórias</strong>
                {" "}que ficarão para sempre no coração das famílias. Ver o sorriso das crianças e a
                satisfação dos pais é nossa maior recompensa!
              </p>
            </div>

            {/* Mission */}
            <motion.div
              className="mt-8 p-6 bg-muted rounded-xl border-l-4 border-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Nossa Missão</h3>
              <p className="text-muted-foreground italic">
                &quot;Proporcionar momentos de alegria e encantamento, transformando cada festa em uma
                celebração única e inesquecível para toda a família.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}15` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </motion.div>
                <h3 className="font-display font-bold text-card-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
