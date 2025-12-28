import { certificates } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Award, Lock, Download } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function CertificatesPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Certificates</h1>
        <p className="text-muted-foreground">
          Track your achievements and download completed certificates
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <Card
            key={certificate.id}
            className={
              certificate.status === 'locked'
                ? 'opacity-75'
                : 'border-primary/30 shadow-md'
            }
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    certificate.status === 'unlocked'
                      ? 'bg-primary/10'
                      : 'bg-muted'
                  }`}
                >
                  {certificate.status === 'unlocked' ? (
                    <Award className="w-6 h-6 text-primary" />
                  ) : (
                    <Lock className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <Badge
                  variant={
                    certificate.status === 'unlocked' ? 'default' : 'secondary'
                  }
                >
                  {certificate.status === 'unlocked' ? 'Earned' : 'Locked'}
                </Badge>
              </div>
              <CardTitle className="text-lg">{certificate.title}</CardTitle>
              <CardDescription>{certificate.course}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {certificate.status === 'unlocked' ? (
                <>
                  <p className="text-sm text-muted-foreground">
                    Earned on {certificate.date}
                  </p>
                  <Button className="w-full" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Certificate
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{certificate.progress}%</span>
                    </div>
                    <Progress value={certificate.progress} className="h-2" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete all course modules to earn this certificate
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Card */}
      <Card className="mt-8 bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-2">About Certificates</h3>
              <p className="text-sm text-muted-foreground">
                Najot Ta'lim certificates are recognized by leading tech companies in Uzbekistan.
                Each certificate verifies your completion of comprehensive coursework and practical projects.
                Download your certificates in PDF format to include in your professional portfolio.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
