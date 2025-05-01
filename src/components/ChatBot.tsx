
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

    // Process user message and get response
    const botResponse = generateResponse(userMessage.content);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  // Function to generate responses based on user input
  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Define response patterns
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I help you plan your next adventure with JR Travels today?";
    }
    
    if (input.includes('package') || input.includes('trip') || input.includes('vacation')) {
      return "We have a variety of travel packages ranging from weekend getaways to multi-week international adventures. Our packages start from $499. Would you like me to recommend some popular destinations?";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('expensive')) {
      return "Our packages range from $499 for weekend getaways to $5000+ for luxury international trips. Each package is clearly priced with no hidden fees. You can also filter by your budget in our search section.";
    }
    
    if (input.includes('destination') || input.includes('place') || input.includes('country') || input.includes('where')) {
      return "We offer trips to over 50 destinations worldwide! Popular choices include Bali, Paris, Tokyo, New York, Cape Town, and the Maldives. Is there a specific region you're interested in exploring?";
    }
    
    if (input.includes('book') || input.includes('reserve') || input.includes('payment')) {
      return "Booking with us is easy! Simply browse our packages, select the one you love, and click 'Book Now'. You'll need to create an account if you haven't already. We accept all major credit cards and offer flexible payment options for select destinations.";
    }
    
    if (input.includes('cancel') || input.includes('refund') || input.includes('policy')) {
      return "Our cancellation policy varies by package. Generally, cancellations made 60+ days before departure receive a full refund minus a small processing fee. Cancellations made 30-60 days prior receive a 50% refund, and less than 30 days may not be eligible for refunds. Travel insurance is always recommended!";
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('call')) {
      return "You can reach our support team by phone at +91 9910633621 or email at jagjeevan004@gmail.com. Our office hours are Monday to Friday, 9am to 6pm. We also offer 24/7 emergency support for travelers currently on a trip with us.";
    }
    
    if (input.includes('about') || input.includes('company') || input.includes('who')) {
      return "JR Travels is a premium travel agency founded with a passion for creating unforgettable travel experiences. We specialize in curated travel packages with personalized itineraries, local expertise, and 24/7 support. Check out our About page to learn more about our story!";
    }
    
    if (input.includes('custom') || input.includes('tailor') || input.includes('personalize')) {
      return "Yes, we offer fully customizable travel experiences! Simply contact our team with your preferences, budget, and travel dates, and our experts will craft a personalized itinerary just for you.";
    }
    
    if (input.includes('discount') || input.includes('deal') || input.includes('offer') || input.includes('sale')) {
      return "We regularly offer seasonal promotions and early booking discounts. Sign up for our newsletter on the homepage to be the first to know about special deals. We also have a loyalty program for returning travelers!";
    }
    
    if (input.includes('thank')) {
      return "You're very welcome! Is there anything else I can help you with regarding your travel plans?";
    }
    
    if (input.includes('bye') || input.includes('goodbye')) {
      return "Thank you for chatting with JR Travels! Feel free to return anytime you need travel assistance. Have a wonderful day!";
    }
    
    // Default response
    return "I'm here to help with all your travel questions! You can ask about our destinations, packages, booking process, or special requirements. How can I assist you with your travel plans today?";
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
