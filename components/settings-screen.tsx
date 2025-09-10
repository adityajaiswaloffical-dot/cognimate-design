"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Bell, Shield, Download, RefreshCw, Trash2 } from "lucide-react"

export function SettingsScreen() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    mbtiType: "INTJ",
    founderMode: true,
  })

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    teamInvites: true,
    weeklyInsights: false,
  })

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 md:pb-8">
      {/* Header */}
      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center gap-2">
            <User className="w-6 h-6 text-[#4FD1C5]" />
            Account Settings
          </CardTitle>
          <CardDescription className="text-white/70">Manage your profile and preferences</CardDescription>
        </CardHeader>
      </Card>

      {/* Profile Settings */}
      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Profile Information</CardTitle>
          <CardDescription className="text-white/70">
            Update your personal information and personality type
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder-user.jpg" alt={profile.name} />
              <AvatarFallback className="bg-[#4FD1C5] text-black text-xl font-bold">
                {profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              className="glass-button border-white/20 text-white hover:text-white mobile-tap-target"
            >
              Change Photo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#4FD1C5]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#4FD1C5]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white">MBTI Type</Label>
            <Select value={profile.mbtiType} onValueChange={(value) => setProfile({ ...profile, mbtiType: value })}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-panel border-white/20">
                {[
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
                ].map((type) => (
                  <SelectItem key={type} value={type} className="text-white hover:bg-white/10">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="space-y-1">
              <Label className="text-white font-medium">Founder Mode</Label>
              <p className="text-sm text-white/60">Get specialized insights for entrepreneurs and team builders</p>
            </div>
            <Switch
              checked={profile.founderMode}
              onCheckedChange={(checked) => setProfile({ ...profile, founderMode: checked })}
              className="data-[state=checked]:bg-[#4FD1C5]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-[#4FD1C5]" />
            Notifications
          </CardTitle>
          <CardDescription className="text-white/70">Choose what updates you'd like to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="space-y-1">
              <Label className="text-white font-medium">Email Updates</Label>
              <p className="text-sm text-white/60">Receive updates about new features and improvements</p>
            </div>
            <Switch
              checked={notifications.emailUpdates}
              onCheckedChange={(checked) => setNotifications({ ...notifications, emailUpdates: checked })}
              className="data-[state=checked]:bg-[#4FD1C5]"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="space-y-1">
              <Label className="text-white font-medium">Team Invites</Label>
              <p className="text-sm text-white/60">Get notified when someone invites you to compare profiles</p>
            </div>
            <Switch
              checked={notifications.teamInvites}
              onCheckedChange={(checked) => setNotifications({ ...notifications, teamInvites: checked })}
              className="data-[state=checked]:bg-[#4FD1C5]"
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="space-y-1">
              <Label className="text-white font-medium">Weekly Insights</Label>
              <p className="text-sm text-white/60">Receive weekly personality insights and team tips</p>
            </div>
            <Switch
              checked={notifications.weeklyInsights}
              onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyInsights: checked })}
              className="data-[state=checked]:bg-[#4FD1C5]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#4FD1C5]" />
            Privacy & Security
          </CardTitle>
          <CardDescription className="text-white/70">Manage your data and account security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full glass-button border-white/20 text-white hover:text-white mobile-tap-target"
          >
            Change Password
          </Button>
          <Button
            variant="outline"
            className="w-full glass-button border-white/20 text-white hover:text-white mobile-tap-target"
          >
            <Download className="w-4 h-4 mr-2" />
            Download My Data
          </Button>
        </CardContent>
      </Card>

      {/* Assessment Actions */}
      <Card className="glass-panel border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Assessment Management</CardTitle>
          <CardDescription className="text-white/70">Manage your personality assessment and results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full teal-accent mobile-tap-target">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retake Assessment
          </Button>
          <Button
            variant="outline"
            className="w-full glass-button border-white/20 text-white hover:text-white mobile-tap-target"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Results as PDF
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="glass-panel border-red-500/20">
        <CardHeader>
          <CardTitle className="text-red-400">Danger Zone</CardTitle>
          <CardDescription className="text-white/70">
            Irreversible actions that will affect your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="w-full bg-red-600 hover:bg-red-700 mobile-tap-target">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Account
          </Button>
        </CardContent>
      </Card>

      {/* Save Changes */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="glass-button border-white/20 text-white hover:text-white mobile-tap-target"
        >
          Cancel Changes
        </Button>
        <Button className="teal-accent mobile-tap-target">Save Changes</Button>
      </div>
    </div>
  )
}
