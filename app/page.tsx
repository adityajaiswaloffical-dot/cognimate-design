"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { DesktopSidebar } from "@/components/desktop-sidebar"
import { OnboardingModal } from "@/components/onboarding-modal"
import { QuizScreen } from "@/components/quiz-screen"
import { ResultsScreen } from "@/components/results-screen"
import { CompareScreen } from "@/components/compare-screen"
import { SettingsScreen } from "@/components/settings-screen"
import { HomeScreen } from "@/components/home-screen"
import { FloatingHelp } from "@/components/floating-help"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<"home" | "quiz" | "results" | "compare" | "settings">("home")
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onStartQuiz={() => setCurrentScreen("quiz")} />
      case "quiz":
        return <QuizScreen onComplete={() => setCurrentScreen("results")} />
      case "results":
        return <ResultsScreen />
      case "compare":
        return <CompareScreen />
      case "settings":
        return <SettingsScreen />
      default:
        return <HomeScreen onStartQuiz={() => setCurrentScreen("quiz")} />
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={() => setShowOnboarding(true)}
        onLogout={() => setIsLoggedIn(false)}
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <DesktopSidebar
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          collapsed={sidebarCollapsed}
          isLoggedIn={isLoggedIn}
        />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${isLoggedIn ? (sidebarCollapsed ? "md:ml-16" : "md:ml-64") : ""}`}
        >
          <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-8">{renderScreen()}</div>
        </main>
      </div>

      <Footer />

      <MobileNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />

      <FloatingHelp />

      {showOnboarding && (
        <OnboardingModal
          onClose={() => setShowOnboarding(false)}
          onComplete={() => {
            setIsLoggedIn(true)
            setShowOnboarding(false)
          }}
        />
      )}
    </div>
  )
}
