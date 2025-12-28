import { useState } from 'react';
import { todayTasks } from '../data/mockData';
import { Card, CardContent } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { Clock, CheckCircle2, Video } from 'lucide-react';

export default function TodayPage() {
  const [tasks, setTasks] = useState(todayTasks);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
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

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Today</h1>
        <p className="text-muted-foreground">
          {completedCount} of {tasks.length} tasks completed
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${(completedCount / tasks.length) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              {Math.round((completedCount / tasks.length) * 100)}%
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {tasks.map((task) => {
          const Icon = getIcon(task.type);
          return (
            <Card
              key={task.id}
              className={`transition-all ${task.completed ? 'opacity-60' : 'hover:shadow-md'
                }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                  </div>

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
                      className={`mb-1 ${task.completed ? 'line-through text-muted-foreground' : ''
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

      {completedCount === tasks.length && (
        <Card className="mt-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6 text-center">
            <p className="text-2xl mb-2">🎉 All done for today!</p>
            <p className="text-muted-foreground">
              You've completed all your tasks. Great work on staying consistent!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}