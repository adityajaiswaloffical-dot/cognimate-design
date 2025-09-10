"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Brain, Settings, User, LogOut, Menu } from "lucide-react"

interface HeaderProps {
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
  sidebarCollapsed?: boolean
  onToggleSidebar?: () => void
}

export function Header({ isLoggedIn, onLogin, onLogout, sidebarCollapsed, onToggleSidebar }: HeaderProps) {
  return (
    <header className="w-full border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle for Desktop */}
          {isLoggedIn && onToggleSidebar && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              className="hidden md:flex text-white/60 hover:text-white hover:bg-white/10"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#4FD1C5] rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-xl font-bold text-white">Cognimate</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback className="bg-[#4FD1C5] text-black">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-panel border-white/20" align="end">
                <DropdownMenuItem className="hover:bg-white/10">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/10">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem onClick={onLogout} className="hover:bg-white/10">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={onLogin} className="teal-accent mobile-tap-target">
              Login / Signup
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
