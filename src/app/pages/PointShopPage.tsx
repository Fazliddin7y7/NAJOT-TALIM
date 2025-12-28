import { currentUser, pointRules, rewards } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Coins, Lock, Info } from 'lucide-react';

export default function PointShopPage() {
  const groupedRewards = rewards.reduce((acc, reward) => {
    if (!acc[reward.category]) {
      acc[reward.category] = [];
    }
    acc[reward.category].push(reward);
    return acc;
  }, {} as Record<string, typeof rewards>);

  const canAfford = (points: number) => {
    return currentUser.points >= points;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Point Shop</h1>
        <p className="text-muted-foreground">
          Earn points through consistent learning and redeem them for rewards
        </p>
      </div>

      {/* Current Balance */}
      <Card className="mb-8 border-emerald-200 dark:border-emerald-800 bg-gradient-to-r from-emerald-50 to-white dark:from-emerald-950/20 dark:to-card">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                <Coins className="w-7 h-7 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Your Points</p>
                <p className="text-4xl text-emerald-700 dark:text-emerald-400">
                  {currentUser.points.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Earn Points */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            How to Earn Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pointRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary"
              >
                <span className="text-sm">{rule.action}</span>
                <Badge className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
                  +{rule.points}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rewards by Category */}
      <div className="space-y-8">
        {Object.entries(groupedRewards).map(([category, categoryRewards]) => (
          <div key={category}>
            <h2 className="text-2xl mb-4">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryRewards.map((reward) => {
                const affordable = canAfford(reward.points);
                return (
                  <Card
                    key={reward.id}
                    className={`transition-all ${
                      affordable
                        ? 'hover:shadow-lg border-emerald-200 dark:border-emerald-800'
                        : 'opacity-60'
                    }`}
                  >
                    <CardHeader className="p-0">
                      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-secondary">
                        <img
                          src={reward.image}
                          alt={reward.name}
                          className="w-full h-full object-cover"
                        />
                        {!affordable && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center">
                              <Lock className="w-6 h-6 text-muted-foreground" />
                            </div>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <CardTitle className="text-base mb-2">{reward.name}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Coins className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                          <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                            {reward.points.toLocaleString()} points
                          </span>
                        </div>
                      </div>
                      <Button
                        className="w-full"
                        disabled={!affordable}
                        variant={affordable ? 'default' : 'secondary'}
                      >
                        {affordable ? 'Redeem' : 'Locked'}
                      </Button>
                      {reward.available && (
                        <Badge variant="outline" className="w-full justify-center text-xs">
                          Available
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Card */}
      <Card className="mt-8 bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950/20 dark:to-amber-950/20 border-emerald-200 dark:border-emerald-800">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground mb-2">Your effort has real value 💎</p>
          <p>
            Keep learning consistently to earn more points. Every achievement brings you closer to
            meaningful rewards that support your educational journey.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
