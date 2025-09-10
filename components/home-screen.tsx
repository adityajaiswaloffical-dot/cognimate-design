"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Target, Zap, TrendingUp, Shield, Clock } from "lucide-react"

interface HomeScreenProps {
  onStartQuiz: () => void
}

export function HomeScreen({ onStartQuiz }: HomeScreenProps) {
  const features = [
    {
      icon: Brain,
      title: "Personality Assessment",
      description: "Discover your unique personality type with our comprehensive MBTI-based assessment",
    },
    {
      icon: Users,
      title: "Team Compatibility",
      description: "Find your ideal team matches and understand relationship dynamics",
    },
    {
      icon: Target,
      title: "Detailed Blueprint",
      description: "Get actionable insights about your strengths, growth areas, and ideal work environment",
    },
    {
      icon: Zap,
      title: "Founder Mode",
      description: "Special insights for entrepreneurs and leaders building teams",
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Team Performance",
      description: "Teams using Cognimate see 40% better collaboration",
    },
    {
      icon: Shield,
      title: "Science-Based Results",
      description: "Built on validated psychological frameworks",
    },
    {
      icon: Clock,
      title: "Quick Assessment",
      description: "Complete your profile in just 10-15 minutes",
    },
  ]

  return (
    <div className="space-y-8 pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 bg-[#4FD1C5] rounded-2xl flex items-center justify-center mx-auto">
          <Brain className="w-10 h-10 text-black" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Know Yourself,
            <br />
            <span className="text-[#4FD1C5]">Build Better Teams</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Discover your personality type and find your ideal team matches with our comprehensive assessment platform.
          </p>
        </div>
        <Button onClick={onStartQuiz} size="lg" className="teal-accent text-lg px-8 py-6 mobile-tap-target">
          Start Your Assessment
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="glass-panel border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4FD1C5]/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#4FD1C5]" />
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Stats Section */}
      <Card className="glass-panel border-white/10">
        <CardContent className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#4FD1C5]">10K+</div>
              <div className="text-white/70">Assessments Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4FD1C5]">95%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#4FD1C5]">500+</div>
              <div className="text-white/70">Teams Formed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
