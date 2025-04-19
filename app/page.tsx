"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LoginModal } from "@/components/login-modal"
import { Button } from "@/components/ui/button"
import { Categories } from "@/components/categories"

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="relative">
        <Categories />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary-dark">
              Decentralized Storage Solutions
            </h1>
            <div className="flex justify-center">
              <Button size="lg" onClick={() => setShowLoginModal(true)} className="text-lg px-8 py-6">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  )
}

