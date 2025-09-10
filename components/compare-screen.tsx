"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, AlertTriangle, CheckCircle, Plus } from "lucide-react"

export function CompareScreen() {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      mbtiType: "INTJ",
      title: "The Architect",
      avatar: "/placeholder-user.jpg",
      strengths: ["Strategic", "Analytical", "Independent"],
    },
    {
      id: 2,
      name: "Sarah Chen",
      mbtiType: "ENFP",
      title: "The Campaigner",
      avatar: "/placeholder-user.jpg",
      strengths: ["Creative", "Enthusiastic", "People-focused"],
    },
  ]

  const compatibility = {
    overall: 73,
    strengths: [
      "Complementary thinking styles - strategic depth meets creative breadth",
      "Both value competence and meaningful work",
      "John's planning balances Sarah's spontaneity",
    ],
    challenges: [
      "Different communication preferences - John prefers written, Sarah prefers verbal",
      "Energy levels may clash - Sarah's high energy vs John's need for quiet focus",
      "Decision-making speed differences - John deliberates, Sarah acts quickly",
    ],
    recommendations: [
      "Schedule regular one-on-one check-ins for alignment",
      "Use collaborative tools that support both communication styles",
      "Establish clear roles that leverage each person's strengths",
    ],
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 md:pb-8">
      {/* Header */}
      <Card className="glass-panel border-white/10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
            <Users className="w-6 h-6 text-[#4FD1C5]" />
            Team Compatibility Analysis
          </CardTitle>
          <CardDescription className="text-white/70">
            Understanding how different personality types work together
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Profile Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {profiles.map((profile, index) => (
          <Card key={profile.id} className="glass-panel border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                  <AvatarFallback className="bg-[#4FD1C5] text-black font-bold">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-[#4FD1C5] text-black font-bold">{profile.mbtiType}</Badge>
                  </div>
                  <p className="text-sm text-white/70">{profile.title}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-white">Key Strengths</h4>
                <div className="flex flex-wrap gap-1">
                  {profile.strengths.map((strength, idx) => (
                    <Badge key={idx} variant="outline" className="border-white/20 text-white text-xs">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Compatibility Score */}
      <Card className="glass-panel border-white/10">
        <CardHeader className="text-center">
          <CardTitle className="text-white">Overall Compatibility</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
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
                strokeDasharray={`${compatibility.overall}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#4FD1C5]">{compatibility.overall}%</span>
            </div>
          </div>
          <p className="text-white/70">Good compatibility with some areas for growth</p>
        </CardContent>
      </Card>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card className="glass-panel border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              Collaboration Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {compatibility.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  {strength}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="glass-panel border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Potential Friction Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {compatibility.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Recommendations for Success</CardTitle>
          <CardDescription className="text-white/70">Actionable steps to improve team dynamics</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {compatibility.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-[#4FD1C5] text-black text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-white/90">{rec}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="glass-button border-white/20 text-white hover:text-white mobile-tap-target"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Another Person
        </Button>
        <Button className="teal-accent mobile-tap-target">Export Team Report</Button>
      </div>
    </div>
  )
}
