import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Button } from '../components/ui/button';
import { 
  LayoutDashboard, 
  Clock, 
  BookOpen, 
  ClipboardList, 
  MessageSquare, 
  TrendingUp, 
  Calendar, 
  Award, 
  Bell,
  User,
  Settings,
  Moon,
  Sun,
  GraduationCap,
  Trophy,
  Store,
  Search
} from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { currentUser } from '../data/mockData';
import { Input } from '../components/ui/input';
import AIAssistant from '../components/AIAssistant';

const navigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
  { name: 'Today', href: '/app/today', icon: Clock },
  { name: 'Courses', href: '/app/courses', icon: BookOpen },
  { name: 'Assignments', href: '/app/assignments', icon: ClipboardList, badge: 3 },
  { name: 'Feedback', href: '/app/feedback', icon: MessageSquare },
  { name: 'Progress', href: '/app/progress', icon: TrendingUp },
  { name: 'Calendar', href: '/app/calendar', icon: Calendar },
  { name: 'Certificates', href: '/app/certificates', icon: Award },
  { name: 'Leaders', href: '/app/leaders', icon: Trophy },
  { name: 'Point Shop', href: '/app/pointshop', icon: Store },
];

export default function DashboardLayout() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Fixed Left Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col fixed left-0 top-0 bottom-0 z-40">
        {/* Logo */}
        <div className="h-16 border-b border-border flex items-center px-6">
          <Link to="/app/dashboard" className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-semibold">Najot LMS</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm
                    ${active 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <Badge 
                      variant={active ? "outline" : "secondary"} 
                      className={`ml-auto ${active ? 'border-primary-foreground/20 text-primary-foreground' : ''}`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Settings at Bottom */}
        <div className="border-t border-border px-3 py-3">
          <Link
            to="/app/settings"
            className={`
              flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm
              ${isActive('/app/settings')
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              }
            `}
          >
            <Settings className="w-5 h-5 flex-shrink-0" />
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Bar (Search, Notifications, Profile) */}
        <header className="h-16 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-30">
          <div className="h-full px-6 flex items-center justify-between gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Search lessons, courses..." 
                  className="pl-9 bg-secondary/50 border-none"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>

              {/* Notifications */}
              <Link to="/app/notifications">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
                </Button>
              </Link>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <p>{currentUser.name}</p>
                      <p className="text-xs text-muted-foreground">{currentUser.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/app/profile" className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/app/settings" className="cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="cursor-pointer">
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* AI Learning Assistant */}
      <AIAssistant />
    </div>
  );
}