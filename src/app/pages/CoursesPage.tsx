import { Link } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

export default function CoursesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Courses</h1>
        <p className="text-muted-foreground">
          All your enrolled courses and learning paths
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} to={`/app/courses/${course.id}`}>
            <Card className="hover:shadow-lg transition-all h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={course.color} variant="secondary">
                    {course.progress}%
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Active
                  </Badge>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>
                  {course.completedModules} of {course.modules} modules completed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={course.progress} className="h-2" />

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Next lesson:</span>
                    <span className="text-right">{course.nextLesson}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Mentor:</span>
                    <span>{course.mentor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last activity:</span>
                    <span>{course.lastActivity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
