import { calendarEvents } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Video, Clock, Users } from 'lucide-react';

export default function CalendarPage() {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'live':
        return Video;
      case 'deadline':
        return Clock;
      case 'meeting':
        return Users;
      default:
        return Clock;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'lesson':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'deadline':
        return 'bg-primary/5 text-primary border-primary/15';
      case 'meeting':
        return 'bg-white text-primary border-primary/10';
      default:
        return 'bg-white text-primary border-primary/10';
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Calendar</h1>
        <p className="text-muted-foreground">
          Upcoming deadlines, live sessions, and meetings
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {calendarEvents.map((event) => {
              const Icon = getEventIcon(event.type);
              return (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getEventColor(event.type)}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })} at {event.time}
                    </p>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {event.type}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}