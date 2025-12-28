import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Circle, ArrowLeft } from 'lucide-react';

const modules = [
  { id: 1, title: 'Introduction to the Course', lessons: 5, completed: 5 },
  { id: 2, title: 'Fundamentals', lessons: 8, completed: 8 },
  { id: 3, title: 'Intermediate Concepts', lessons: 10, completed: 7 },
  { id: 4, title: 'Advanced Topics', lessons: 12, completed: 0 },
];

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id) || courses[0];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Link to="/app/courses">
        <Button variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Courses
        </Button>
      </Link>

      <div className="mb-8">
        <Badge className={`${course.color} mb-3`} variant="secondary">
          {course.progress}% Complete
        </Badge>
        <h1 className="text-4xl mb-2">{course.title}</h1>
        <p className="text-muted-foreground">
          Mentor: {course.mentor} • {course.completedModules} of {course.modules} modules completed
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={course.progress} className="h-3 mb-4" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl mb-1">{course.completedModules}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
              <div>
                <p className="text-2xl mb-1">{course.modules - course.completedModules}</p>
                <p className="text-xs text-muted-foreground">Remaining</p>
              </div>
              <div>
                <p className="text-2xl mb-1">{course.modules}</p>
                <p className="text-xs text-muted-foreground">Total Modules</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• Master core concepts</p>
            <p>• Build real projects</p>
            <p>• Gain industry skills</p>
            <p>• Earn certificate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Modules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {modules.map((module) => {
            const isCompleted = module.completed === module.lessons;
            return (
              <div
                key={module.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="mb-1">{module.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {module.completed} / {module.lessons} lessons
                  </p>
                </div>
                <div className="w-32">
                  <Progress value={(module.completed / module.lessons) * 100} className="h-2" />
                </div>
                <Button variant={isCompleted ? "outline" : "default"} size="sm">
                  {isCompleted ? 'Review' : 'Continue'}
                </Button>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}