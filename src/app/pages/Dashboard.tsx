import { Link } from 'react-router-dom';
import { currentUser, courses, todayTasks } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Flame, Clock, CheckCircle2, ArrowRight, Coins } from 'lucide-react';

export default function Dashboard() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">{getGreeting()}, {currentUser.name}</h1>
        <p className="text-muted-foreground">
          Ready to continue your learning journey today?
        </p>
      </div>

      {/* Daily Focus Section */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Today's Focus</CardTitle>
            <CardDescription>Complete these tasks to stay on track</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayTasks.slice(0, 2).map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  {task.type === 'lesson' ? (
                    <Clock className="w-5 h-5 text-primary" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm mb-1">{task.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {task.time} • {task.duration}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Start
                </Button>
              </div>
            ))}
            <Link to="/app/today">
              <Button variant="outline" className="w-full">
                View all tasks <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Weekly Progress</span>
                <span className="text-sm">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Flame className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-primary">Learning Streak</p>
                <p className="text-xs text-primary/70">
                  {currentUser.learningStreak} days
                </p>
              </div>
            </div>

            <Link to="/app/pointshop">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer hover:shadow-md transition-shadow">
                <Coins className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-primary">Your Points</p>
                  <p className="text-xs text-primary/70">
                    {currentUser.points.toLocaleString()} points
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Course Cards */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl">Your Courses</h2>
          <Link to="/app/courses">
            <Button variant="ghost" size="sm">
              View all <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} to={`/app/courses/${course.id}`}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={course.color} variant="secondary">
                      {course.progress}% Complete
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>
                    {course.completedModules} of {course.modules} modules
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Progress value={course.progress} className="h-2" />
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Next: {course.nextLesson}</p>
                    <p>Mentor: {course.mentor}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Motivational Message */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-2">Keep going! 🌟</p>
          <p>
            You're making great progress. Complete today's tasks to maintain your learning streak.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}