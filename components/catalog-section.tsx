"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Sparkles } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useMensagemSaudacao } from "@/hooks/mensagem-saudacao"

const categories = [
  { id: "todos", name: "Todos" },
  { id: "herois", name: "Heróis" },
  { id: "desenhos", name: "Desenhos" },
  { id: "filmes", name: "Filmes" },
]

const themes = [
  {
    id: 1,
    name: "Homem-Aranha",
    category: "herois",
    description: "O herói favorito de muitas crianças!",
    popular: true,
    image: "/images/treats/homem-aranha.webp",
  },
  {
    id: 2,
    name: "Mundo Bita",
    category: "desenhos",
    description: "Músicas e cores que encantam os pequenos",
    popular: true,
    image: "/images/treats/mundo-bita.webp",
  },
  {
    id: 3,
    name: "Carros (Disney)",
    category: "filmes",
    description: "Relâmpago McQueen e toda a turma!",
    popular: true,
    image: "/images/treats/carros.webp",
  },
  {
    id: 4,
    name: "Frozen",
    category: "filmes",
    description: "O reino de Arendelle na sua festa",
    popular: false,
    image: "/images/treats/frozen.webp",
  },
  {
    id: 5,
    name: "Minnie",
    category: "desenhos",
    description: "Clássicos Disney para todas as idades",
    popular: true,
    image: "/images/treats/minnie.webp",
  },
  {
    id: 6,
    name: "Patrulha Canina",
    category: "desenhos",
    description: "Nenhum trabalho é grande demais!",
    popular: true,
    image: "/images/treats/patrulha-canina.webp",
  },
  {
    id: 7,
    name: "Barbie",
    category: "filmes",
    description: "Um mundo cor-de-rosa cheio de magia",
    popular: true,
    image: "/images/treats/barbie.webp",
  },
  {
    id: 8,
    name: "Lilo & Stitch",
    category: "filmes",
    description: "Ohana quer dizer família!",
    popular: true,
    image: "/images/treats/lilo-stitch.webp",
  },
  {
    id: 9,
    name: "Moana",
    category: "filmes",
    description: "Aventure-se pelo mar como Moana",
    popular: false,
    image: "/images/treats/moana.webp",
  },
  {
    id: 10,
    name: "Pequena Sereia",
    category: "filmes",
    description: "Submarino: um mundo de encantos",
    popular: true,
    image: "/images/treats/pequena-sereia.webp",
  },
]

export function CatalogSection() {
  const { obterMensagemWhatsApp } = useMensagemSaudacao()
  const numeroWhatsApp = "5565996697167"
  const [activeCategory, setActiveCategory] = useState("todos")
  const [selectedTheme, setSelectedTheme] = useState<(typeof themes)[number] | null>(null)

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
            Confira os temas disponíveis para locação e encontre o ideal para o seu evento!
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
              className={`cursor-pointer transition-all duration-300 ${activeCategory === category.id
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
                <Card
                  className="group overflow-hidden cursor-pointer transition-all p-0! duration-300 hover:shadow-xl hover:-translate-y-2 border-border bg-card"
                  onClick={() => setSelectedTheme(theme)}
                >
                  <CardContent className="p-0!">
                    {/* Theme Visual */}
                    <div className="h-56 relative overflow-hidden bg-muted">
                      <Image
                        src={theme.image}
                        alt={theme.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
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
                      <p className="text-sm text-muted-foreground mb-3">{theme.description}</p>
                      <a
                        href={`https://wa.me/${numeroWhatsApp}?text=${obterMensagemWhatsApp(`Gostaria de reservar o tema ${theme.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white cursor-pointer"
                        >
                          <FaWhatsapp className="w-5! h-5! mr-2" />
                          Reservar Tema
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox - Visualização da imagem */}
        <Dialog
          open={!!selectedTheme}
          onOpenChange={(open) => !open && setSelectedTheme(null)}
        >
          <DialogContent
            className="max-w-4xl w-[95vw] p-0 overflow-hidden border-0 bg-transparent shadow-none [&_[data-slot=dialog-close]]:cursor-pointer [&_[data-slot=dialog-close]]:bg-black/60 [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:hover:bg-black/80 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:p-2"
            showCloseButton={true}
          >
            {selectedTheme && (
              <div className="relative rounded-lg overflow-hidden bg-background shadow-2xl pt-8">
                <div className="relative aspect-[4/3] w-full max-h-[85vh]">
                  <Image
                    src={selectedTheme.image}
                    alt={selectedTheme.name}
                    fill
                    className="object-contain"
                    sizes="95vw"
                  />
                </div>
                <DialogHeader className="p-4 bg-background">
                  <DialogTitle className="text-center">
                    {selectedTheme.name}
                  </DialogTitle>
                </DialogHeader>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
