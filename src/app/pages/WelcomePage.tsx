import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { GraduationCap, BookOpen, Target, Users } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl">Najot LMS</span>
          </div>
          <Link to="/login">
            <Button variant="outline">Log in</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl mb-6">
              Your personal learning companion
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master IT skills with structured courses, expert mentors, and a supportive community.
              Built for focused, daily learning.
            </p>
            <Link to="/login">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-left">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Structured Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Follow a clear path designed by expert instructors
                </p>
              </div>
              <div className="text-left">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your achievements and stay motivated
                </p>
              </div>
              <div className="text-left">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">Mentor Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized feedback from your mentors
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Najot Ta'lim. Empowering the next generation of tech professionals.
          </p>
        </div>
      </footer>
    </div>
  );
}