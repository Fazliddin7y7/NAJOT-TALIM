export const currentUser = {
  id: '1',
  name: 'Fazliddin',
  email: 'fazliddin@najottalim.uz',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fazliddin',
  enrolledTracks: ['Frontend Development', 'UI/UX Design'],
  learningStreak: 12,
  points: 2480,
};

export const courses = [
  {
    id: '1',
    title: 'Frontend Development',
    progress: 68,
    lastActivity: '2 hours ago',
    nextLesson: 'React Hooks Deep Dive',
    mentor: 'Jasur Mirzaev',
    modules: 12,
    completedModules: 8,
    color: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-800',
  },
  {
    id: '2',
    title: 'Backend Development',
    progress: 45,
    lastActivity: '1 day ago',
    nextLesson: 'Node.js Authentication',
    mentor: 'Sardor Karimov',
    modules: 15,
    completedModules: 7,
    color: 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    progress: 82,
    lastActivity: 'Yesterday',
    nextLesson: 'Design System Basics',
    mentor: 'Madina Ahmedova',
    modules: 10,
    completedModules: 8,
    color: 'bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-100 border border-amber-200 dark:border-amber-800',
  },
];

export const todayTasks = [
  {
    id: '1',
    title: 'Complete React Hooks lesson',
    time: '10:00 AM',
    duration: '45 min',
    type: 'lesson',
    completed: false,
  },
  {
    id: '2',
    title: 'Submit Portfolio Project',
    time: '2:00 PM',
    duration: '2 hours',
    type: 'assignment',
    completed: false,
  },
  {
    id: '3',
    title: 'Live Session: Advanced TypeScript',
    time: '5:00 PM',
    duration: '1.5 hours',
    type: 'live',
    completed: false,
  },
];

export const assignments = [
  {
    id: '1',
    title: 'Build a Todo Application',
    course: 'Frontend Development',
    dueDate: '2025-01-05',
    status: 'pending',
    description: 'Create a fully functional todo app using React and TypeScript',
  },
  {
    id: '2',
    title: 'Design System Documentation',
    course: 'UI/UX Design',
    dueDate: '2025-01-03',
    status: 'reviewed',
    description: 'Document components, colors, and typography for a design system',
    feedback: 'Great work! Consider adding more examples.',
  },
  {
    id: '3',
    title: 'API Integration Project',
    course: 'Backend Development',
    dueDate: '2024-12-30',
    status: 'approved',
    description: 'Build RESTful API with authentication',
    feedback: 'Excellent implementation of authentication flow!',
  },
];

export const lessons = [
  {
    id: '1',
    title: 'Introduction to React Hooks',
    course: 'Frontend Development',
    duration: '45 min',
    completed: false,
    objectives: [
      'Understand useState and useEffect',
      'Create custom hooks',
      'Manage component state effectively',
    ],
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    course: 'Frontend Development',
    duration: '1 hour',
    completed: true,
    objectives: [
      'Master generic types',
      'Use utility types effectively',
      'Implement type guards',
    ],
  },
];

export const feedback = [
  {
    id: '1',
    mentor: {
      name: 'Jasur Mirzaev',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasur',
    },
    assignment: 'Build a Todo Application',
    comment: 'Great job on component structure! Consider extracting the form logic into a custom hook for better reusability.',
    timestamp: '2 hours ago',
    rating: 4,
  },
  {
    id: '2',
    mentor: {
      name: 'Madina Ahmedova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Madina',
    },
    assignment: 'Design System Documentation',
    comment: 'Excellent documentation structure. Your color palette choices show good understanding of accessibility.',
    timestamp: '1 day ago',
    rating: 5,
  },
];

export const progressData = [
  { week: 'Week 1', completed: 5 },
  { week: 'Week 2', completed: 8 },
  { week: 'Week 3', completed: 12 },
  { week: 'Week 4', completed: 15 },
];

export const calendarEvents = [
  {
    id: '1',
    title: 'Live Session: React Best Practices',
    date: '2025-01-02',
    time: '5:00 PM',
    type: 'live',
  },
  {
    id: '2',
    title: 'Assignment Due: Portfolio Project',
    date: '2025-01-05',
    time: '11:59 PM',
    type: 'deadline',
  },
  {
    id: '3',
    title: 'Mentor 1-on-1 Session',
    date: '2025-01-08',
    time: '3:00 PM',
    type: 'meeting',
  },
];

export const certificates = [
  {
    id: '1',
    title: 'Frontend Development Fundamentals',
    status: 'unlocked',
    date: '2024-12-15',
    course: 'Frontend Development',
  },
  {
    id: '2',
    title: 'UI/UX Design Professional',
    status: 'locked',
    progress: 82,
    course: 'UI/UX Design',
  },
  {
    id: '3',
    title: 'Backend Development Expert',
    status: 'locked',
    progress: 45,
    course: 'Backend Development',
  },
];

export const notifications = [
  {
    id: '1',
    type: 'feedback',
    title: 'New feedback from Jasur Mirzaev',
    message: 'Your assignment has been reviewed',
    timestamp: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    type: 'deadline',
    title: 'Assignment due tomorrow',
    message: 'Portfolio Project is due on Jan 5',
    timestamp: '1 day ago',
    read: false,
  },
  {
    id: '3',
    type: 'system',
    title: 'New lesson available',
    message: 'Advanced React Patterns is now available',
    timestamp: '2 days ago',
    read: true,
  },
];

// Point earning rules
export const pointRules = [
  { action: 'Assignment completed on time', points: 10 },
  { action: 'High-quality submission', points: 20 },
  { action: 'Helping classmates', points: 15 },
  { action: 'Weekly learning streak', points: 25 },
  { action: 'Mentor recognition', points: 30 },
  { action: 'Outstanding achievement', points: 50 },
];

// Leaders by grade
export const leaders = {
  'Grade 5': [
    {
      id: '1',
      name: 'Aziza Karimova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aziza',
      grade: 'Grade 5',
      points: 3850,
      rank: 'gold',
    },
    {
      id: '2',
      name: 'Doston Rahimov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Doston',
      grade: 'Grade 5',
      points: 3420,
      rank: 'silver',
    },
    {
      id: '3',
      name: 'Malika Tursunova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Malika',
      grade: 'Grade 5',
      points: 3180,
      rank: 'bronze',
    },
  ],
  'Grade 6': [
    {
      id: '4',
      name: 'Sardor Alimov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sardor',
      grade: 'Grade 6',
      points: 4120,
      rank: 'gold',
    },
    {
      id: '5',
      name: 'Nilufar Khasanova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nilufar',
      grade: 'Grade 6',
      points: 3890,
      rank: 'silver',
    },
    {
      id: '6',
      name: 'Jamshid Umarov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jamshid',
      grade: 'Grade 6',
      points: 3650,
      rank: 'bronze',
    },
  ],
  'Grade 7': [
    {
      id: '7',
      name: 'Dinara Yusupova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dinara',
      grade: 'Grade 7',
      points: 4580,
      rank: 'gold',
    },
    {
      id: '8',
      name: 'Rustam Abdullayev',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rustam',
      grade: 'Grade 7',
      points: 4320,
      rank: 'silver',
    },
    {
      id: '9',
      name: 'Shahzoda Ismailova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shahzoda',
      grade: 'Grade 7',
      points: 4050,
      rank: 'bronze',
    },
  ],
  'Grade 8': [
    {
      id: '10',
      name: 'Bobur Zakirov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bobur',
      grade: 'Grade 8',
      points: 5210,
      rank: 'gold',
    },
    {
      id: '11',
      name: 'Gulnora Saidova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gulnora',
      grade: 'Grade 8',
      points: 4880,
      rank: 'silver',
    },
    {
      id: '12',
      name: 'Akmal Nurmatov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Akmal',
      grade: 'Grade 8',
      points: 4620,
      rank: 'bronze',
    },
  ],
  'Grade 9': [
    {
      id: '13',
      name: 'Kamila Rashidova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kamila',
      grade: 'Grade 9',
      points: 5840,
      rank: 'gold',
    },
    {
      id: '14',
      name: 'Timur Ergashev',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Timur',
      grade: 'Grade 9',
      points: 5520,
      rank: 'silver',
    },
    {
      id: '15',
      name: 'Madina Safarova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MadinaS',
      grade: 'Grade 9',
      points: 5280,
      rank: 'bronze',
    },
  ],
  'Grade 10': [
    {
      id: '16',
      name: 'Jasur Toshmatov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JasurT',
      grade: 'Grade 10',
      points: 6450,
      rank: 'gold',
    },
    {
      id: '17',
      name: 'Feruza Normatova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Feruza',
      grade: 'Grade 10',
      points: 6180,
      rank: 'silver',
    },
    {
      id: '18',
      name: 'Dilshod Komilov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dilshod',
      grade: 'Grade 10',
      points: 5920,
      rank: 'bronze',
    },
  ],
  'Grade 11': [
    {
      id: '19',
      name: 'Shohruh Mahmudov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shohruh',
      grade: 'Grade 11',
      points: 7320,
      rank: 'gold',
    },
    {
      id: '20',
      name: 'Zarina Nasriddinova',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zarina',
      grade: 'Grade 11',
      points: 7050,
      rank: 'silver',
    },
    {
      id: '21',
      name: 'Otabek Sultonov',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Otabek',
      grade: 'Grade 11',
      points: 6780,
      rank: 'bronze',
    },
  ],
};

// Point shop rewards
export const rewards = [
  // Tech Rewards
  {
    id: '1',
    name: 'MacBook Pro',
    category: 'Tech Rewards',
    points: 50000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    available: true,
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    category: 'Tech Rewards',
    points: 8000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    available: true,
  },
  {
    id: '3',
    name: 'Mechanical Keyboard',
    category: 'Tech Rewards',
    points: 5000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    available: true,
  },
  {
    id: '4',
    name: 'Wireless Mouse',
    category: 'Tech Rewards',
    points: 3000,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    available: true,
  },
  // Learning Rewards
  {
    id: '5',
    name: 'Clean Code Book',
    category: 'Learning Rewards',
    points: 2000,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400',
    available: true,
  },
  {
    id: '6',
    name: 'Design Patterns Book',
    category: 'Learning Rewards',
    points: 2000,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    available: true,
  },
  {
    id: '7',
    name: 'Online Resource Access',
    category: 'Learning Rewards',
    points: 1500,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
    available: true,
  },
  // Educational Benefits
  {
    id: '8',
    name: 'Free Advanced Course',
    category: 'Educational Benefits',
    points: 10000,
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400',
    available: true,
  },
  {
    id: '9',
    name: '50% Course Discount',
    category: 'Educational Benefits',
    points: 5000,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
    available: true,
  },
  {
    id: '10',
    name: '1-on-1 Mentor Session',
    category: 'Educational Benefits',
    points: 3000,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    available: true,
  },
];