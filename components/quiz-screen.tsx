"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, SkipForward } from "lucide-react"

interface QuizScreenProps {
  onComplete: () => void
}

const quizQuestions = [
  {
    id: 1,
    category: "Energy & Focus",
    question: "When working on a challenging project, you prefer to:",
    options: [
      { id: "a", text: "Work alone to maintain deep focus", icon: "🎯" },
      { id: "b", text: "Collaborate with others for diverse perspectives", icon: "👥" },
      { id: "c", text: "Switch between solo work and team discussions", icon: "🔄" },
      { id: "d", text: "Lead a team while maintaining oversight", icon: "👑" },
    ],
  },
  {
    id: 2,
    category: "Decision Making",
    question: "When making important decisions, you typically:",
    options: [
      { id: "a", text: "Analyze all available data thoroughly", icon: "📊" },
      { id: "b", text: "Trust your intuition and gut feeling", icon: "💭" },
      { id: "c", text: "Seek input from trusted advisors", icon: "🤝" },
      { id: "d", text: "Consider the impact on team morale", icon: "❤️" },
    ],
  },
  {
    id: 3,
    category: "Communication Style",
    question: "In team meetings, you're most likely to:",
    options: [
      { id: "a", text: "Listen carefully and speak when you have something valuable to add", icon: "👂" },
      { id: "b", text: "Actively participate and share ideas frequently", icon: "💬" },
      { id: "c", text: "Ask probing questions to understand different viewpoints", icon: "❓" },
      { id: "d", text: "Guide the conversation toward actionable outcomes", icon: "🎯" },
    ],
  },
  {
    id: 4,
    category: "Work Environment",
    question: "Your ideal work environment includes:",
    options: [
      { id: "a", text: "Quiet spaces for deep, uninterrupted work", icon: "🤫" },
      { id: "b", text: "Open collaboration areas with easy team access", icon: "🏢" },
      { id: "c", text: "Flexible spaces that adapt to different work modes", icon: "🔧" },
      { id: "d", text: "Private office with scheduled team interaction times", icon: "🚪" },
    ],
  },
  {
    id: 5,
    category: "Problem Solving",
    question: "When facing a complex problem, you:",
    options: [
      { id: "a", text: "Break it down into smaller, manageable parts", icon: "🧩" },
      { id: "b", text: "Look for creative, unconventional solutions", icon: "💡" },
      { id: "c", text: "Research how others have solved similar problems", icon: "📚" },
      { id: "d", text: "Brainstorm with your team for diverse perspectives", icon: "🌟" },
    ],
  },
]

export function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string>("")

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleNext = () => {
    if (selectedOption) {
      setAnswers({ ...answers, [question.id]: selectedOption })
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption("")
    } else {
      onComplete()
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || "")
    }
  }

  const handleSkip = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption("")
    } else {
      onComplete()
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20 md:pb-8">
      {/* Progress Header */}
      <Card className="glass-panel border-white/10">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="space-y-2">
              <div className="text-sm text-white/60">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
              <div className="text-lg md:text-xl text-[#4FD1C5] font-medium">{question.category}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl font-bold text-white">{Math.round(progress)}%</div>
              <div className="text-sm text-white/60">Complete</div>
            </div>
          </div>
          <Progress value={progress} className="h-3 bg-white/10">
            <div
              className="h-full bg-[#4FD1C5] transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="glass-panel border-white/10">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl md:text-3xl text-white leading-relaxed">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 text-left mobile-tap-target group hover:scale-[1.02] ${
                  selectedOption === option.id
                    ? "border-[#4FD1C5] bg-[#4FD1C5]/10 shadow-lg shadow-[#4FD1C5]/20"
                    : "border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl flex-shrink-0">{option.icon}</span>
                  <div className="space-y-1">
                    <span className="text-white font-medium text-lg leading-relaxed block">{option.text}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="glass-button border-white/20 text-white hover:text-white mobile-tap-target px-6 py-3"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-white/60 hover:text-white hover:bg-white/10 mobile-tap-target px-6 py-3"
          >
            <SkipForward className="w-4 h-4 mr-2" />
            Skip
          </Button>

          <Button
            onClick={handleNext}
            className="teal-accent mobile-tap-target px-8 py-3"
            disabled={!selectedOption && currentQuestion < quizQuestions.length - 1}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
