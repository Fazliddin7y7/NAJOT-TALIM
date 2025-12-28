import { notifications } from '../data/mockData';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MessageSquare, Clock, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotificationsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'feedback':
        return <MessageSquare className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
      case 'deadline':
        return <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Bell className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with your learning progress
          </p>
        </div>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={!notification.read ? 'bg-primary/5' : ''}
          >
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="mb-1">{notification.title}</h3>
                    {!notification.read && (
                      <Badge variant="default">New</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.timestamp}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}