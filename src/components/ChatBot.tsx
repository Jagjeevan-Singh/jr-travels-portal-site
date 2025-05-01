
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hi there! I\'m your JR Travel assistant. How can I help you with your travel plans today?',
    isBot: true,
  },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isBot: false,
    };
    
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        default: "I'm here to help with your travel questions! You can ask about destinations, packages, or travel tips.",
        hello: "Hello! How can I assist with your travel plans today?",
        hi: "Hi there! Looking to plan a trip? I can help with that!",
        packages: "We offer a variety of travel packages ranging from adventure trips to relaxing beach getaways. You can browse all our packages in the Packages section.",
        price: "Our packages start from $499 for weekend getaways and range up to $5000 for luxury international trips. You can use filters on our search page to find packages within your budget.",
        destinations: "We offer trips to over 50 destinations worldwide including Europe, Asia, Africa, North and South America. Popular destinations include Bali, Paris, New York, and Cape Town.",
        booking: "You can book a trip by browsing our packages, selecting one that interests you, and clicking the 'Book Now' button. You'll need to create an account if you haven't already.",
        contact: "You can reach our customer service team at support@jrtravels.com or by phone at +1-800-555-1234. Our office hours are Monday to Friday, 9am to 6pm EST."
      };

      const lowercaseInput = userMessage.content.toLowerCase();
      let responseText = botResponses.default;
      
      // Check if any keywords match
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(keyword)) {
          responseText = response;
          break;
        }
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        content: responseText,
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full size-12 p-0 flex items-center justify-center shadow-md z-50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X /> : <Bot />}
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-20 right-4 w-80 md:w-96 transition-all duration-300 ease-in-out z-50",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <Card className="shadow-lg border-2">
          <CardHeader className="p-4 bg-primary text-primary-foreground">
            <CardTitle className="text-lg">JR Travel Assistant</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex flex-col max-w-[75%] rounded-lg p-3",
                    message.isBot
                      ? "bg-muted self-start rounded-bl-none"
                      : "bg-primary text-primary-foreground self-end rounded-br-none"
                  )}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && (
                <div className="flex flex-col max-w-[75%] rounded-lg p-3 bg-muted self-start rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <div className="flex w-full gap-2">
              <Input
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                <Send className="size-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default ChatBot;
