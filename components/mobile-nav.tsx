"use client"

import { Home, FileQuestion, BarChart3, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  currentScreen: string
  onNavigate: (screen: "home" | "quiz" | "results" | "compare") => void
}

export function MobileNav({ currentScreen, onNavigate }: MobileNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "quiz", icon: FileQuestion, label: "Quiz" },
    { id: "results", icon: BarChart3, label: "Results" },
    { id: "compare", icon: Users, label: "Compare" },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-panel border-t border-white/20 rounded-t-2xl">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={cn(
                "flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-150 mobile-tap-target",
                isActive ? "bg-[#4FD1C5]/20 text-[#4FD1C5]" : "text-white/60 hover:text-white hover:bg-white/10",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
