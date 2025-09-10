"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, XCircle, Download, Share2, RefreshCw, TrendingUp, Users, Target } from "lucide-react"

export function ResultsScreen() {
  const [activeTab, setActiveTab] = useState("overview")

  const userProfile = {
    name: "John Doe",
    mbtiType: "INTJ",
    title: "The Architect",
    strengths: ["Strategic Thinking", "Independent", "Analytical", "Visionary"],
    compatibility: 87,
  }

  const blueprint = {
    greenFlags: [
      "Thrives in autonomous work environments",
      "Excellent at long-term strategic planning",
      "Strong analytical and problem-solving skills",
      "Natural leadership in technical domains",
    ],
    redFlags: [
      "May struggle with excessive micromanagement",
      "Needs clear goals and minimal interruptions",
      "Prefers written communication over frequent meetings",
      "Requires time to process before making decisions",
    ],
    idealTraits: [
      "Values competence and expertise",
      "Appreciates direct, honest feedback",
      "Motivated by challenging, meaningful work",
      "Works best with clear expectations",
    ],
  }

  const questionsToAsk = [
    "How do you prefer to receive feedback on your work?",
    "What type of work environment helps you be most productive?",
    "How do you like to collaborate with team members?",
    "What motivates you most in your professional work?",
    "How do you prefer to handle conflicts or disagreements?",
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 md:pb-8">
      {/* Profile Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-2">
          <Card className="glass-panel border-white/10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="w-24 h-24 md:w-32 md:h-32">
                  <AvatarImage src="/placeholder-user.jpg" alt={userProfile.name} />
                  <AvatarFallback className="bg-[#4FD1C5] text-black text-2xl font-bold">
                    {userProfile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{userProfile.name}</h1>
                    <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                      <Badge className="bg-[#4FD1C5] text-black font-bold text-xl px-4 py-2">
                        {userProfile.mbtiType}
                      </Badge>
                      <span className="text-xl text-white/70">{userProfile.title}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {userProfile.strengths.map((strength, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-white px-3 py-1">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card className="glass-panel border-white/10">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-white">Compatibility Score</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4FD1C5"
                    strokeWidth="2"
                    strokeDasharray={`${userProfile.compatibility}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#4FD1C5]">{userProfile.compatibility}%</span>
                </div>
              </div>
              <p className="text-white/70 text-sm">Team Compatibility</p>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3">
            <Button className="teal-accent mobile-tap-target">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button
              variant="outline"
              className="glass-button border-white/20 text-white hover:text-white mobile-tap-target"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 glass-panel border-white/10 h-12">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-black text-white font-medium"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="blueprint"
            className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-black text-white font-medium"
          >
            Blueprint
          </TabsTrigger>
          <TabsTrigger
            value="questions"
            className="data-[state=active]:bg-[#4FD1C5] data-[state=active]:text-black text-white font-medium"
          >
            Questions to Ask
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#4FD1C5]" />
                  Key Strengths
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {userProfile.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] flex-shrink-0" />
                    <span className="text-white font-medium">{strength}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4FD1C5]" />
                  Work Style
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80 leading-relaxed">
                  As an INTJ, you're naturally strategic and independent. You excel at seeing the big picture and
                  creating long-term plans. You prefer working autonomously and value competence highly.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <TrendingUp className="w-6 h-6 text-[#4FD1C5] mx-auto mb-2" />
                    <div className="text-sm text-white/70">Focus Style</div>
                    <div className="text-white font-medium">Deep Work</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <Users className="w-6 h-6 text-[#4FD1C5] mx-auto mb-2" />
                    <div className="text-sm text-white/70">Team Role</div>
                    <div className="text-white font-medium">Strategist</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="blueprint" className="space-y-8 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Green Flags
                </CardTitle>
                <CardDescription className="text-white/70">Conditions where you thrive</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {blueprint.greenFlags.map((flag, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  Red Flags
                </CardTitle>
                <CardDescription className="text-white/70">Situations that may cause friction</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {blueprint.redFlags.map((flag, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                    >
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{flag}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-panel border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Ideal Team Traits</CardTitle>
              <CardDescription className="text-white/70">
                What to look for in teammates and work environment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blueprint.idealTraits.map((trait, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#4FD1C5]/10 border border-[#4FD1C5]/20"
                  >
                    <CheckCircle className="w-5 h-5 text-[#4FD1C5] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{trait}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-8 mt-8">
          <Card className="glass-panel border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Questions to Ask Potential Teammates</CardTitle>
              <CardDescription className="text-white/70">
                Use these questions to assess compatibility and working style alignment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {questionsToAsk.map((question, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#4FD1C5] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-white/90 leading-relaxed">{question}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          className="glass-button border-white/20 text-white hover:text-white mobile-tap-target px-8"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retake Assessment
        </Button>
        <Button className="teal-accent mobile-tap-target px-8">Find Compatible Teammates</Button>
      </div>
    </div>
  )
}
