import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Moon, Sun, Bell, Mail, MessageSquare, Camera, User } from 'lucide-react';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { currentUser } from '../data/mockData';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    avatar: currentUser.avatar,
  });

  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    mentor: true,
  });

  const handleAvatarChange = () => {
    // Simulate avatar change by cycling through different seeds
    const seeds = ['Fazliddin', 'Alex', 'Sam', 'Jordan', 'Casey', 'Morgan'];
    const currentSeed = profileData.avatar.split('seed=')[1];
    const currentIndex = seeds.indexOf(currentSeed);
    const nextIndex = (currentIndex + 1) % seeds.length;
    const newAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seeds[nextIndex]}`;
    
    setProfileData({ ...profileData, avatar: newAvatar });
    toast.success('Avatar updated successfully!');
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to backend
    toast.success('Profile updated successfully!');
    setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setProfileData({
      name: currentUser.name,
      email: currentUser.email,
      avatar: currentUser.avatar,
    });
    setIsEditingProfile(false);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Toaster />
      
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and notification settings
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Update your personal information and avatar
                </CardDescription>
              </div>
              {!isEditingProfile && (
                <Button onClick={() => setIsEditingProfile(true)}>
                  Edit Profile
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profileData.avatar} alt={profileData.name} />
                  <AvatarFallback>{profileData.name[0]}</AvatarFallback>
                </Avatar>
                {isEditingProfile && (
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0"
                    onClick={handleAvatarChange}
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <div>
                <h3 className="mb-1">{profileData.name}</h3>
                <p className="text-sm text-muted-foreground">{profileData.email}</p>
                {isEditingProfile && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Click the camera icon to change avatar
                  </p>
                )}
              </div>
            </div>

            {isEditingProfile && (
              <>
                <Separator />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={handleSaveProfile}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize how Najot LMS looks on your device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                )}
                <div>
                  <p>Theme</p>
                  <p className="text-sm text-muted-foreground">
                    {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  toast.success(`Switched to ${theme === 'dark' ? 'light' : 'dark'} mode`);
                }}
              >
                Toggle
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose what updates you want to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="push-notifications" className="cursor-pointer">
                    Push Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about assignments and feedback
                  </p>
                </div>
              </div>
              <Switch 
                id="push-notifications" 
                checked={notifications.push}
                onCheckedChange={(checked) => {
                  setNotifications({ ...notifications, push: checked });
                  toast.success(checked ? 'Push notifications enabled' : 'Push notifications disabled');
                }}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="email-notifications" className="cursor-pointer">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive weekly progress summaries via email
                  </p>
                </div>
              </div>
              <Switch 
                id="email-notifications" 
                checked={notifications.email}
                onCheckedChange={(checked) => {
                  setNotifications({ ...notifications, email: checked });
                  toast.success(checked ? 'Email notifications enabled' : 'Email notifications disabled');
                }}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <MessageSquare className="w-5 h-5 text-muted-foreground" />
                <div>
                  <Label htmlFor="mentor-messages" className="cursor-pointer">
                    Mentor Messages
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when mentors send you feedback
                  </p>
                </div>
              </div>
              <Switch 
                id="mentor-messages" 
                checked={notifications.mentor}
                onCheckedChange={(checked) => {
                  setNotifications({ ...notifications, mentor: checked });
                  toast.success(checked ? 'Mentor notifications enabled' : 'Mentor notifications disabled');
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Account */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Manage your account settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p>Password</p>
                <p className="text-sm text-muted-foreground">
                  Last changed 2 months ago
                </p>
              </div>
              <Button 
                variant="outline"
                onClick={() => toast.success('Password change feature coming soon!')}
              >
                Change Password
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p>Language</p>
                <p className="text-sm text-muted-foreground">
                  English (US)
                </p>
              </div>
              <Button 
                variant="outline"
                onClick={() => toast.info('Language settings coming soon!')}
              >
                Change
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>
              Irreversible actions that affect your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p>Delete Account</p>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
              <Button 
                variant="destructive" 
                onClick={() => toast.error('This is a demo - account deletion is disabled')}
              >
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
