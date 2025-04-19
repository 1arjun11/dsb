"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Shield, Zap } from "lucide-react"

const categories = [
  {
    icon: Database,
    title: "Decentralized",
    description: "Distributed across the blockchain network",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "End-to-end encryption for your data",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Lightning-quick access and retrieval",
  },
  {
    icon: Cloud,
    title: "Scalable",
    description: "Grow your storage as needed",
  },
]

export function Categories() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-card p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-4">
              <div className="inline-block p-3 rounded-xl bg-primary/10">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

