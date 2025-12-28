import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { X, Send, Sparkles } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hi, I'm your learning companion. How can I help you right now?",
    timestamp: new Date(),
  },
];

const suggestedPrompts = [
  "Explain this lesson to me",
  "Help with my assignment",
  "What should I study next?",
  "Review my progress",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  const getAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('lesson') || lowerInput.includes('explain')) {
      return "I can help you understand the lesson better! Could you tell me which specific topic or concept you'd like me to explain? I'll break it down into simple steps.";
    }
    if (lowerInput.includes('assignment') || lowerInput.includes('help')) {
      return "I'm here to help with your assignment! Share what you're working on, and I'll guide you through it step by step. Remember, I'm here to help you learn, not do the work for you.";
    }
    if (lowerInput.includes('next') || lowerInput.includes('study')) {
      return "Based on your current progress, I recommend focusing on your next scheduled lesson. You're doing great with consistency! Would you like me to show you what's coming up today?";
    }
    if (lowerInput.includes('progress')) {
      return "Your learning streak is strong! You've completed 68% of Frontend Development and 82% of UI/UX Design. Keep up the excellent work! What area would you like to focus on improving?";
    }
    
    return "I'm here to support your learning journey. I can help explain lessons, guide you through assignments, or suggest what to study next. What would you like to work on?";
  };

  return (
    <>
      {/* Floating AI Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Sparkles className="w-6 h-6" />
        )}
      </Button>

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white border-l border-border z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          boxShadow: '-20px 0 40px rgba(0, 0, 0, 0.1), -10px 0 20px rgba(0, 0, 0, 0.05), -5px 0 10px rgba(0, 0, 0, 0.03)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-16 border-b border-border px-6 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">AI Learning Assistant</h3>
                <Badge variant="outline" className="text-xs">Always here to help</Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-6 py-4 bg-white">
            <div className="space-y-4" ref={scrollRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-primary/20 bg-white text-primary'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="border border-primary/20 bg-white rounded-lg px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Suggested Prompts */}
          {messages.length === 1 && (
            <div className="px-6 py-3 border-t border-border bg-white">
              <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handlePromptClick(prompt)}
                    className="text-xs"
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border bg-white">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              AI assistance to support your learning journey
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop - Removed for cleaner look */}
    </>
  );
}