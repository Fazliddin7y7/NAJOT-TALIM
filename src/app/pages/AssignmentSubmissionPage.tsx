import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Upload, CheckCircle2 } from 'lucide-react';

export default function AssignmentSubmissionPage() {
  const { id } = useParams();
  const assignment = assignments.find(a => a.id === id) || assignments[0];
  const [submission, setSubmission] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Assignment submitted successfully!');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link to="/app/assignments">
        <Button variant="ghost" size="sm" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Assignments
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl mb-2">{assignment.title}</h1>
        <div className="flex items-center gap-3 text-muted-foreground">
          <span>{assignment.course}</span>
          <span>•</span>
          <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Brief</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{assignment.description}</p>
              <div className="p-4 bg-secondary rounded-lg">
                <h4 className="text-sm mb-2">Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Follow best practices</li>
                  <li>Include proper documentation</li>
                  <li>Test your implementation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {assignment.status !== 'pending' && assignment.feedback && (
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Submit Your Work</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="link">Project Link (GitHub, Live Demo)</Label>
                  <Input
                    id="link"
                    type="url"
                    placeholder="https://github.com/username/project"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="bg-secondary border-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes for Mentor</Label>
                  <Textarea
                    id="notes"
                    placeholder="Add any notes or explanations..."
                    value={submission}
                    onChange={(e) => setSubmission(e.target.value)}
                    className="bg-secondary border-0 min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Upload className="w-4 h-4" /> Submit Assignment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="capitalize">{assignment.status}</Badge>
              <p className="text-sm text-muted-foreground mt-3">
                {assignment.status === 'pending' && 'Not yet submitted'}
                {assignment.status === 'reviewed' && 'Under review by mentor'}
                {assignment.status === 'approved' && 'Assignment approved!'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Double-check requirements</p>
              <p>• Test thoroughly</p>
              <p>• Write clear documentation</p>
              <p>• Submit before deadline</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}