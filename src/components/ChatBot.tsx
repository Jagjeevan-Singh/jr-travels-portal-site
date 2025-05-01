
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

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

    try {
      // Process user message and get response
      const botResponse = await generateResponse(userMessage.content);
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: botResponse,
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      toast.error('Something went wrong with the chat assistant');
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced response generator with more pattern matching
  const generateResponse = async (userInput: string): Promise<string> => {
    // Simulate network delay for more realistic conversation flow
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const input = userInput.toLowerCase();
    
    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('greetings')) {
      return "Hello! How can I help you plan your next adventure with JR Travels today?";
    }
    
    // Packages
    if (input.includes('package') || input.includes('trip') || input.includes('vacation') || input.includes('holiday') || input.includes('travel')) {
      return "We have a variety of travel packages ranging from weekend getaways to multi-week international adventures. Our packages start from $499. Would you like me to recommend some popular destinations based on your interests?";
    }
    
    // Pricing
    if (input.includes('price') || input.includes('cost') || input.includes('expensive') || input.includes('cheap') || input.includes('budget') || input.includes('afford')) {
      return "Our packages range from $499 for weekend getaways to $5000+ for luxury international trips. Each package is clearly priced with no hidden fees. You can also filter by your budget in our search section. We're committed to offering options for all budgets!";
    }
    
    // Destinations
    if (input.includes('destination') || input.includes('place') || input.includes('country') || input.includes('where') || input.includes('location')) {
      return "We offer trips to over 50 destinations worldwide! Popular choices include Bali, Paris, Tokyo, New York, Cape Town, and the Maldives. Is there a specific region you're interested in exploring? We can provide tailored recommendations based on your preferences.";
    }
    
    // Booking Process
    if (input.includes('book') || input.includes('reserve') || input.includes('payment') || input.includes('booking') || input.includes('pay')) {
      return "Booking with us is easy! Simply browse our packages, select the one you love, and click 'Book Now'. You'll need to create an account if you haven't already. We accept all major credit cards and offer flexible payment options for select destinations. Need help with a specific booking? I'd be happy to assist!";
    }
    
    // Cancellation/Refund Policy
    if (input.includes('cancel') || input.includes('refund') || input.includes('policy') || input.includes('money back') || input.includes('change') || input.includes('reschedule')) {
      return "Our cancellation policy varies by package. Generally, cancellations made 60+ days before departure receive a full refund minus a small processing fee. Cancellations made 30-60 days prior receive a 50% refund, and less than 30 days may not be eligible for refunds. Travel insurance is always recommended! For specific policy details on your package, please contact our support team.";
    }
    
    // Contact Information
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('call') || input.includes('support') || input.includes('help')) {
      return "You can reach our support team by phone at +91 9910633621 or email at jagjeevan004@gmail.com. Our office hours are Monday to Friday, 9am to 6pm. We also offer 24/7 emergency support for travelers currently on a trip with us. We pride ourselves on responsive customer service!";
    }
    
    // About the Company
    if (input.includes('about') || input.includes('company') || input.includes('who') || input.includes('history') || input.includes('background')) {
      return "JR Travels is a premium travel agency founded with a passion for creating unforgettable travel experiences. We specialize in curated travel packages with personalized itineraries, local expertise, and 24/7 support. Our experienced team has collectively visited over 100 countries! Check out our About page to learn more about our story and mission.";
    }
    
    // Customization Options
    if (input.includes('custom') || input.includes('tailor') || input.includes('personalize') || input.includes('special') || input.includes('specific') || input.includes('requirement')) {
      return "Yes, we offer fully customizable travel experiences! We understand that every traveler is unique. Simply contact our team with your preferences, budget, and travel dates, and our experts will craft a personalized itinerary just for you. From dietary requirements to special celebrations, we can accommodate your needs.";
    }
    
    // Discounts and Deals
    if (input.includes('discount') || input.includes('deal') || input.includes('offer') || input.includes('sale') || input.includes('promotion') || input.includes('coupon') || input.includes('savings')) {
      return "We regularly offer seasonal promotions and early booking discounts. Sign up for our newsletter on the homepage to be the first to know about special deals. We also have a loyalty program for returning travelers! Currently, we're offering 15% off select European destinations for summer bookings made before the end of this month.";
    }
    
    // Safety and COVID
    if (input.includes('safe') || input.includes('covid') || input.includes('health') || input.includes('pandemic') || input.includes('vaccine') || input.includes('requirement') || input.includes('restriction')) {
      return "Your safety is our top priority. We closely monitor travel advisories and health guidelines for all our destinations. Our packages comply with local health protocols, and we provide up-to-date information on entry requirements, including any vaccination or testing needs. We also offer flexible booking policies during uncertain times. Feel free to ask about specific destination requirements!";
    }
    
    // Activities and Experiences
    if (input.includes('activity') || input.includes('experience') || input.includes('adventure') || input.includes('tour') || input.includes('excursion') || input.includes('attraction')) {
      return "Our packages include a wide range of activities tailored to different interests! From adrenaline-pumping adventures like zip-lining and scuba diving to cultural experiences such as cooking classes and guided historical tours. Many of our packages include exclusive experiences that aren't available to the general public. What type of activities are you interested in?";
    }

    // Accommodations
    if (input.includes('hotel') || input.includes('resort') || input.includes('stay') || input.includes('accommodation') || input.includes('room') || input.includes('lodging')) {
      return "We partner with quality accommodations ranging from boutique hotels to luxury resorts. All properties are personally vetted by our team to ensure they meet our standards for comfort, cleanliness, service, and location. Many packages include accommodation options at different price points so you can choose what suits your preferences and budget.";
    }

    // Family Travel
    if (input.includes('family') || input.includes('kid') || input.includes('child') || input.includes('baby') || input.includes('toddler')) {
      return "We offer many family-friendly packages designed with both parents and children in mind! These include accommodations with family rooms or connecting options, activities appropriate for different age groups, and often kids' clubs or childcare services. We can also help arrange special requirements like cribs, high chairs, or kid-friendly meal options.";
    }
    
    // Gratitude
    if (input.includes('thank')) {
      return "You're very welcome! It's my pleasure to help with your travel plans. Is there anything else I can assist you with regarding your next adventure with JR Travels?";
    }
    
    // Farewell
    if (input.includes('bye') || input.includes('goodbye') || input.includes('see you') || input.includes('later') || input.includes('farewell')) {
      return "Thank you for chatting with JR Travels! Feel free to return anytime you need travel assistance. Have a wonderful day, and we hope to help you plan your next adventure soon!";
    }
    
    // Default response for unmatched queries
    return "I'm here to help with all your travel questions! You can ask about our destinations, packages, booking process, or special requirements. If you're looking for something specific that I haven't addressed, you can also reach our team directly at jagjeevan004@gmail.com or +91 9910633621. How can I assist with your travel plans today?";
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
        className="fixed bottom-4 right-4 rounded-full size-12 p-0 flex items-center justify-center shadow-lg z-50 bg-primary hover:bg-primary/90"
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
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot size={18} /> JR Travel Assistant
            </CardTitle>
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
