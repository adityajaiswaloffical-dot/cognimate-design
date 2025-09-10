"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, FileQuestion, BarChart3, Users, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DesktopSidebarProps {
  currentScreen: string
  onNavigate: (screen: "home" | "quiz" | "results" | "compare" | "settings") => void
  collapsed: boolean
  isLoggedIn: boolean
}

export function DesktopSidebar({ currentScreen, onNavigate, collapsed, isLoggedIn }: DesktopSidebarProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home", description: "Dashboard and overview" },
    { id: "quiz", icon: FileQuestion, label: "Assessment", description: "Take personality quiz" },
    { id: "results", icon: BarChart3, label: "Results", description: "View your profile" },
    { id: "compare", icon: Users, label: "Compare", description: "Team compatibility" },
    { id: "settings", icon: Settings, label: "Settings", description: "Account preferences" },
  ]

  if (!isLoggedIn) {
    return null
  }

  return (
    <TooltipProvider>
      <aside
        className={cn(
          "hidden md:flex fixed left-0 top-16 bottom-0 z-40 flex-col glass-panel border-r border-white/10 transition-all duration-300",
          collapsed ? "w-16" : "w-64",
        )}
      >
        {/* User Profile Section */}
        <div className="p-4 border-b border-white/10">
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback className="bg-[#4FD1C5] text-black text-sm">JD</AvatarFallback>
                  </Avatar>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" className="glass-panel border-white/20">
                <div className="text-center">
                  <p className="font-medium text-white">John Doe</p>
                  <p className="text-sm text-white/70">INTJ - The Architect</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback className="bg-[#4FD1C5] text-black">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">John Doe</p>
                <p className="text-xs text-white/70 truncate">INTJ - The Architect</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentScreen === item.id

            const buttonContent = (
              <Button
                key={item.id}
                onClick={() => onNavigate(item.id as any)}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-12 transition-all duration-200",
                  collapsed ? "px-3" : "px-4",
                  isActive
                    ? "bg-[#4FD1C5]/20 text-[#4FD1C5] border border-[#4FD1C5]/30"
                    : "text-white/70 hover:text-white hover:bg-white/10",
                )}
              >
                <Icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-5 h-5")} />
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </Button>
            )

            if (collapsed) {
              return (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>{buttonContent}</TooltipTrigger>
                  <TooltipContent side="right" className="glass-panel border-white/20">
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              )
            }

            return buttonContent
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-white/10">
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-full h-10 text-white/70 hover:text-white hover:bg-white/10"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="glass-panel border-white/20">
                <p className="text-white">Logout</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-10 text-white/70 hover:text-white hover:bg-white/10"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          )}
        </div>
      </aside>
    </TooltipProvider>
  )
}
