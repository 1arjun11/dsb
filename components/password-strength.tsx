"use client"

import { motion } from "framer-motion"

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const calculateStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 1
    if (password.match(/[A-Z]/)) strength += 1
    if (password.match(/[0-9]/)) strength += 1
    if (password.match(/[^A-Za-z0-9]/)) strength += 1
    return strength
  }

  const strength = calculateStrength(password)
  const strengthText = ["Weak", "Fair", "Good", "Strong"]
  const strengthColor = ["bg-destructive", "bg-yellow-500", "bg-green-500", "bg-primary"]

  return (
    <div className="space-y-2">
      <div className="flex gap-1 h-1">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`h-full flex-1 rounded-full ${i < strength ? strengthColor[strength - 1] : "bg-muted"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>
      {password && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted-foreground">
          Password strength: {strengthText[strength - 1] || "Too weak"}
        </motion.p>
      )}
    </div>
  )
}

