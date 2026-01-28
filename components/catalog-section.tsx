"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

const categories = [
  { id: "todos", name: "Todos" },
  { id: "herois", name: "Heróis" },
  { id: "desenhos", name: "Desenhos" },
  { id: "filmes", name: "Filmes" },
  { id: "outros", name: "Outros" },
]

const themes = [
  {
    id: 1,
    name: "Homem-Aranha",
    category: "herois",
    description: "O herói favorito de muitas crianças!",
    popular: true,
    colors: ["#e23636", "#1e3a8a"],
  },
  {
    id: 2,
    name: "Mundo Bita",
    category: "desenhos",
    description: "Músicas e cores que encantam os pequenos",
    popular: true,
    colors: ["#22c55e", "#eab308"],
  },
  {
    id: 3,
    name: "Carros (Disney)",
    category: "filmes",
    description: "Relâmpago McQueen e toda a turma!",
    popular: true,
    colors: ["#ef4444", "#f97316"],
  },
  {
    id: 4,
    name: "Frozen",
    category: "filmes",
    description: "O reino de Arendelle na sua festa",
    popular: false,
    colors: ["#06b6d4", "#a855f7"],
  },
  {
    id: 5,
    name: "Mickey e Minnie",
    category: "desenhos",
    description: "Clássicos Disney para todas as idades",
    popular: true,
    colors: ["#ef4444", "#000000"],
  },
  {
    id: 6,
    name: "Patrulha Canina",
    category: "desenhos",
    description: "Nenhum trabalho é grande demais!",
    popular: true,
    colors: ["#3b82f6", "#ef4444"],
  },
  {
    id: 7,
    name: "Unicórnio",
    category: "outros",
    description: "Magia e fantasia em tons pastel",
    popular: false,
    colors: ["#ec4899", "#a855f7"],
  },
  {
    id: 8,
    name: "Safari",
    category: "outros",
    description: "Aventura selvagem na sua festa",
    popular: false,
    colors: ["#84cc16", "#a16207"],
  },
  {
    id: 9,
    name: "Princesas Disney",
    category: "filmes",
    description: "Todas as princesas em um só lugar",
    popular: true,
    colors: ["#ec4899", "#eab308"],
  },
  {
    id: 10,
    name: "Batman",
    category: "herois",
    description: "O Cavaleiro das Trevas em ação",
    popular: false,
    colors: ["#1e293b", "#eab308"],
  },
  {
    id: 11,
    name: "Galinha Pintadinha",
    category: "desenhos",
    description: "Diversão garantida para os bebês",
    popular: true,
    colors: ["#3b82f6", "#fbbf24"],
  },
  {
    id: 12,
    name: "Fazendinha",
    category: "outros",
    description: "Animais da fazenda para sua festa",
    popular: false,
    colors: ["#22c55e", "#a16207"],
  },
]

export function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredThemes =
    activeCategory === "todos"
      ? themes
      : themes.filter((theme) => theme.category === activeCategory)

  return (
    <section id="temas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Catálogo
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Escolha o tema perfeito para a festa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Temos mais de 50 temas disponíveis para locação. Confira alguns dos mais populares e
            encontre o ideal para o seu evento!
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`cursor-pointer transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Themes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-border bg-card">
                  <CardContent className="p-0">
                    {/* Theme Visual */}
                    <div
                      className="h-40 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors[0]}20, ${theme.colors[1]}20)`,
                      }}
                    >
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                          opacity: 0.1,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-3xl font-bold text-white">
                            {theme.name.charAt(0)}
                          </span>
                        </motion.div>
                      </div>
                      {theme.popular && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-accent text-accent-foreground">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Theme Info */}
                    <div className="p-4">
                      <h3 className="font-display text-lg font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                        {theme.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{theme.description}</p>
                      <div className="mt-3 flex gap-2">
                        {theme.colors.map((color, i) => (
                          <div
                            key={`${theme.id}-color-${i}`}
                            className="w-5 h-5 rounded-full border-2 border-background shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o tema que procura? Temos muitos outros!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <a href="#contato">Ver Catálogo Completo</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
