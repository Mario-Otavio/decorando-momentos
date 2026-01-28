"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20"
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/30"
          animate={{ y: [0, 20, 0], rotate: [0, -360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-accent/25"
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-primary/15"
          animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 right-10 w-14 h-14 rounded-full bg-secondary/20"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-secondary/30 text-secondary-foreground px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Transformando festas em memórias</span>
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A festa dos sonhos do seu{" "}
              <span className="text-primary">pequeno</span> começa aqui
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Aluguel de decorações temáticas completas para festas infantis e aniversários.
              Homem-Aranha, Mundo Bita, Carros e muito mais!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer transition-all duration-300 hover:scale-105 text-lg px-8 z-10"
              >
                <a href="#temas">Ver Temas</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all duration-300 text-lg px-8 bg-transparent z-10"
              >
                <a href="#contato">Fale Conosco</a>
              </Button>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Festas Realizadas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-secondary-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Temas Disponíveis</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Inner Content */}
              <div className="absolute inset-8 rounded-full bg-card shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-12 h-12 text-primary" />
                    </div>
                  </motion.div>
                  <p className="font-display text-2xl font-bold text-foreground">Momentos</p>
                  <p className="text-muted-foreground">que ficam para sempre</p>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-4 w-14 h-14 rounded-full bg-secondary shadow-lg flex items-center justify-center"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-7 h-7 text-secondary-foreground" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -left-4 w-12 h-12 rounded-full bg-accent shadow-lg flex items-center justify-center"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-6 h-6 text-accent-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
