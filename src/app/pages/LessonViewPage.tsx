import { Link } from 'react-router-dom';
import { lessons } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft, PlayCircle } from 'lucide-react';

export default function LessonViewPage() {
  const lesson = lessons[0];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Link to="/app/courses/1">
        <Button variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Course
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl mb-2">{lesson.title}</h1>
        <p className="text-muted-foreground">
          {lesson.course} • {lesson.duration}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                <Button size="lg" variant="outline" className="gap-2">
                  <PlayCircle className="w-5 h-5" /> Play Video
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lesson Description</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                In this lesson, you'll dive deep into React Hooks and learn how to effectively manage state and side effects in functional components. We'll cover useState, useEffect, and explore how to create your own custom hooks.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {lesson.objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Checkbox id={`obj-${index}`} />
                  <label
                    htmlFor={`obj-${index}`}
                    className="text-sm leading-relaxed cursor-pointer"
                  >
                    {objective}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Button className="w-full">Mark as Complete</Button>
        </div>
      </div>
    </div>
  );
}
