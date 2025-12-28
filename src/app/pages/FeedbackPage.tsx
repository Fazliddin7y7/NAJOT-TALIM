import { feedback } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star } from 'lucide-react';

export default function FeedbackPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Feedback</h1>
        <p className="text-muted-foreground">
          Reviews and comments from your mentors
        </p>
      </div>

      <div className="space-y-4">
        {feedback.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={item.mentor.avatar} alt={item.mentor.name} />
                  <AvatarFallback>{item.mentor.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{item.mentor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.assignment}</p>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < item.rating ? 'fill-primary text-primary' : 'text-primary/20'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">{item.comment}</p>
              <p className="text-xs text-muted-foreground">{item.timestamp}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}