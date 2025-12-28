import { useState } from 'react';
import { leaders } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Trophy, Award, Medal } from 'lucide-react';

export default function LeadersPage() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 5');

  const getRankBadge = (rank: string) => {
    switch (rank) {
      case 'gold':
        return (
          <div className="flex items-center gap-2 text-primary">
            <Trophy className="w-5 h-5" />
            <span className="text-sm font-medium">Gold</span>
          </div>
        );
      case 'silver':
        return (
          <div className="flex items-center gap-2 text-primary/70">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Silver</span>
          </div>
        );
      case 'bronze':
        return (
          <div className="flex items-center gap-2 text-primary/50">
            <Medal className="w-5 h-5" />
            <span className="text-sm font-medium">Bronze</span>
          </div>
        );
      default:
        return null;
    }
  };

  const getRankColor = (rank: string) => {
    switch (rank) {
      case 'gold':
        return 'border-primary/30 bg-gradient-to-br from-primary/10 to-white';
      case 'silver':
        return 'border-primary/20 bg-gradient-to-br from-primary/5 to-white';
      case 'bronze':
        return 'border-primary/15 bg-gradient-to-br from-primary/5 to-white';
      default:
        return '';
    }
  };

  const grades = Object.keys(leaders);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Leaders</h1>
        <p className="text-muted-foreground">
          Top-performing students across all grades
        </p>
      </div>

      <Tabs value={selectedGrade} onValueChange={setSelectedGrade}>
        <TabsList className="mb-6 flex-wrap h-auto">
          {grades.map((grade) => (
            <TabsTrigger key={grade} value={grade}>
              {grade}
            </TabsTrigger>
          ))}
        </TabsList>

        {grades.map((grade) => (
          <TabsContent key={grade} value={grade}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaders[grade as keyof typeof leaders].map((student, index) => (
                <Card
                  key={student.id}
                  className={`transition-all hover:shadow-lg ${getRankColor(student.rank)}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback>{student.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg mb-1">{student.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{student.grade}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">{index + 1}</div>
                        <p className="text-xs text-muted-foreground">Rank</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      {getRankBadge(student.rank)}
                      <div className="text-right">
                        <p className="text-2xl text-primary">
                          {student.points.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground">Total Points</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-full justify-center">
                      Selected by class mentor
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Info Card */}
      <Card className="mt-8 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-2">Selection Criteria</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Top students are carefully selected by their class teachers based on multiple factors:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Academic performance and consistency</li>
                <li>• Discipline and participation</li>
                <li>• Mentor evaluation and peer collaboration</li>
                <li>• Overall dedication to learning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}