import { currentUser, courses } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Mail, Flame, BookOpen, Target } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl mb-8">Profile</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="md:col-span-1">
          <CardContent className="pt-6 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl mb-1">{currentUser.name}</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Mail className="w-4 h-4" />
              {currentUser.email}
            </div>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Details */}
        <div className="md:col-span-2 space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/20 mx-auto mb-2">
                    <Flame className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <p className="text-2xl mb-1">{currentUser.learningStreak}</p>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/20 mx-auto mb-2">
                    <BookOpen className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <p className="text-2xl mb-1">{courses.length}</p>
                  <p className="text-xs text-muted-foreground">Active Courses</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/20 mx-auto mb-2">
                    <Target className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <p className="text-2xl mb-1">65%</p>
                  <p className="text-xs text-muted-foreground">Avg Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enrolled Tracks */}
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Learning Tracks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentUser.enrolledTracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <span>{track}</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personal Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Learning Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Complete 3 courses by March 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Maintain a 30-day learning streak</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Build 5 portfolio projects</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}