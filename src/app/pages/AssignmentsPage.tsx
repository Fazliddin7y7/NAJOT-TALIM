import { Link } from 'react-router-dom';
import { useState } from 'react';
import { assignments } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

export default function AssignmentsPage() {
  const [filter, setFilter] = useState('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
      case 'reviewed':
        return <Badge variant="outline" className="bg-primary/5"><CheckCircle2 className="w-3 h-3 mr-1" /> Reviewed</Badge>;
      case 'approved':
        return <Badge className="bg-primary text-primary-foreground"><CheckCircle2 className="w-3 h-3 mr-1" /> Approved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredAssignments = filter === 'all' 
    ? assignments 
    : assignments.filter(a => a.status === filter);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Assignments</h1>
        <p className="text-muted-foreground">
          Track and submit your coursework
        </p>
      </div>

      <Tabs value={filter} onValueChange={setFilter} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All </TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <Link key={assignment.id} to={`/app/assignments/${assignment.id}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{assignment.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  </div>
                  {getStatusBadge(assignment.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{assignment.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">
                    Due: {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  {assignment.feedback && (
                    <Badge variant="secondary" className="text-xs">
                      Has Feedback
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
            <br />
          </Link>
        ))}
      </div>
      
    </div>
  );
}