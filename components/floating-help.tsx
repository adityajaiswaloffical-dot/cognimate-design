import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingHelp() {
  return (
    <Button
      size="icon"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 w-12 h-12 rounded-full teal-accent shadow-2xl hover:scale-110 transition-all duration-200"
    >
      <HelpCircle className="w-6 h-6" />
    </Button>
  )
}
