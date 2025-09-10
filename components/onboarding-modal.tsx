"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { X, ArrowLeft, ArrowRight } from "lucide-react"

interface OnboardingModalProps {
  onClose: () => void
  onComplete: () => void
}

export function OnboardingModal({ onClose, onComplete }: OnboardingModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mbtiType: "",
    founderMode: false,
  })

  const mbtiTypes = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ]

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      onComplete()
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-md glass-panel border-white/20 animate-in fade-in-0 zoom-in-95 duration-300">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-0 top-0 text-white/60 hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </Button>
          <div className="flex items-center justify-center mb-4">
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i <= step ? "bg-[#4FD1C5]" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>
          <CardTitle className="text-center text-white">
            {step === 1 && "Create Your Account"}
            {step === 2 && "Your Personality Type"}
            {step === 3 && "Final Setup"}
          </CardTitle>
          <CardDescription className="text-center text-white/70">
            {step === 1 && "Get started with your personality assessment"}
            {step === 2 && "Help us understand your current type"}
            {step === 3 && "Customize your experience"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#4FD1C5]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#4FD1C5]"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white">Current MBTI Type (if known)</Label>
                <Select
                  value={formData.mbtiType}
                  onValueChange={(value) => setFormData({ ...formData, mbtiType: value })}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select your type or skip" />
                  </SelectTrigger>
                  <SelectContent className="glass-panel border-white/20">
                    {mbtiTypes.map((type) => (
                      <SelectItem key={type} value={type} className="text-white hover:bg-white/10">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-white/60">
                Don't worry if you're not sure - our assessment will help determine your type!
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="space-y-1">
                  <Label className="text-white font-medium">Founder Mode</Label>
                  <p className="text-sm text-white/60">Get specialized insights for entrepreneurs and team builders</p>
                </div>
                <Switch
                  checked={formData.founderMode}
                  onCheckedChange={(checked) => setFormData({ ...formData, founderMode: checked })}
                  className="data-[state=checked]:bg-[#4FD1C5]"
                />
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1 glass-button border-white/20 text-white hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button onClick={handleNext} className="flex-1 teal-accent mobile-tap-target">
              {step === 3 ? "Complete Setup" : "Next"}
              {step < 3 && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
