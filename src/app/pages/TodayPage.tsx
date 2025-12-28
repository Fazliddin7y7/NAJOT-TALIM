import { useState } from 'react';
import { todayTasks } from '../data/mockData';
import { Card, CardContent } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { Clock, CheckCircle2, Video } from 'lucide-react';
import ProgressWithBubble from '../pages/ProgressWithBubble';

export default function TodayPage() {
  const [tasks, setTasks] = useState(todayTasks);

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'lesson':
        return Clock;
      case 'assignment':
        return CheckCircle2;
      case 'live':
        return Video;
      default:
        return Clock;
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressValue = Math.round(
    (completedCount / tasks.length) * 100
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl mb-2">Today</h1>
        <p className="text-muted-foreground">
          {completedCount} of {tasks.length} tasks completed
        </p>
      </div>

      {/* Custom Progress */}
      <ProgressWithBubble value={progressValue} />

      {/* Tasks */}
      <div className="space-y-3 mt-8">
        {tasks.map(task => {
          const Icon = getIcon(task.type);

          return (
            <Card
              key={task.id}
              className={`transition-all ${
                task.completed
                  ? 'opacity-60'
                  : 'hover:shadow-md'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="mt-1"
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {task.type}
                      </Badge>
                    </div>

                    <h3
                      className={`mb-1 ${
                        task.completed
                          ? 'line-through text-muted-foreground'
                          : ''
                      }`}
                    >
                      {task.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {task.time} • {task.duration}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* All done */}
      {completedCount === tasks.length && (
        <Card className="mt-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6 text-center">
            <p className="text-2xl mb-2">🎉 All done!</p>
            <p className="text-muted-foreground">
              You’ve completed all tasks for today.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
