import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SocialShareLinks from '@/components/SocialShareLinks';

export default function NotJustHelloPage() {
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for dynamic background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate dynamic background gradient based on mouse position
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                 rgba(240, 249, 255, 0.6) 0%, 
                 rgba(245, 250, 255, 0.3) 20%, 
                 rgba(255, 255, 255, 1) 70%)`,
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="min-h-screen text-gray-800 px-4 py-16 transition-colors duration-300" style={gradientStyle}>
      {/* Small text on top left saying Not Just Hello */}
      <div className="absolute top-4 left-4 z-10">
        <h4 className="text-md font-medium text-gray-700">Not Just Hello</h4>
      </div>
      
      {/* Social Share Links - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <SocialShareLinks size="sm" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent animate-in fade-in duration-1000">
            Not Just Hello
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Please don't say just <span className="font-bold text-red-600">"Hello"</span> in chat and then wait.
          </p>
          
          {/* GIF Animations Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Good Examples GIF */}
            <div className="flex flex-col space-y-4 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
              <h3 className="text-xl font-medium text-emerald-600">Prefer ✓</h3>
              <div className="bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-lg aspect-video flex items-center justify-center overflow-hidden shadow-md">
                <div className="text-center p-4">
                  <div className="space-y-3 text-left text-sm">
                    <div className="bg-emerald-50 p-3 rounded-md border border-emerald-100">
                      <p className="text-emerald-700">"Hi, could you help me with the login issue I'm having? It keeps saying 'invalid credentials'."</p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-md border border-emerald-100">
                      <p className="text-emerald-700">"Morning team! Just wanted to share that I completed the Q3 report. You can find it in the shared folder."</p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-md border border-emerald-100">
                      <p className="text-emerald-700">"Hey Sarah, do you have 10 minutes today to discuss the client presentation? I need some input on slides 5-8."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bad Examples GIF */}
            <div className="flex flex-col space-y-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <h3 className="text-xl font-medium text-red-600">Avoid ✗</h3>
              <div className="bg-white/90 backdrop-blur-sm border border-red-200 rounded-lg aspect-video flex items-center justify-center overflow-hidden shadow-md">
                <div className="text-center p-4">
                  <div className="space-y-3 text-left text-sm">
                    <div className="bg-red-50 p-3 rounded-md border border-red-100">
                      <p className="text-red-700">"Hello"</p>
                      <p className="text-xs text-gray-500">[8 minutes later]</p>
                      <p className="text-red-700">"Are you there?"</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md border border-red-100">
                      <p className="text-red-700">"Hi"</p>
                      <p className="text-xs text-gray-500">[5 minutes later]</p>
                      <p className="text-red-700">"I have a question about the project"</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md border border-red-100">
                      <p className="text-red-700">"Hey"</p>
                      <p className="text-xs text-gray-500">[waits for response]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Efficient vs Inefficient - Stacked with Inefficient first */}
          <div className="space-y-6 mt-8">
            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-red-100 text-red-600 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Inefficient</h3>
                    <div className="space-y-4 text-gray-700">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">2:00 pm</p>
                        <p><span className="font-medium">Person A:</span> Hi</p>
                        <p className="text-sm text-gray-500">2:05 pm</p>
                        <p><span className="font-medium">Person B:</span> Hello</p>
                        <p className="text-sm text-gray-500">2:10 pm</p>
                        <p><span className="font-medium">Person A:</span> I'm having trouble accessing the shared drive</p>
                        <p className="text-sm text-gray-500">2:15 pm</p>
                        <p><span className="font-medium">Person B:</span> What error are you seeing?</p>
                      </div>
                      <p>15 minutes wasted, and the conversation has barely started.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Efficient</h3>
                    <div className="space-y-4 text-gray-700">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">2:00 pm</p>
                        <p><span className="font-medium">Person A:</span> Hi, I'm having trouble accessing the shared drive. It's showing "access denied" when I try to open it.</p>
                        <p className="text-sm text-gray-500">2:05 pm</p>
                        <p><span className="font-medium">Person B:</span> Hi! Let me check the permissions for you. Which folder specifically are you trying to access?</p>
                      </div>
                      <p>Conversation started immediately, problem solving in progress.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-gray-200" />

        {/* Information Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
          <h2 className="text-3xl font-bold text-center text-gray-800">Why "Not Just Hello" Matters</h2>
          
          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger value="problem">The Problem</TabsTrigger>
              <TabsTrigger value="solution">The Solution</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
            </TabsList>
            <TabsContent value="problem" className="p-4 bg-white/90 rounded-b-lg mt-2 space-y-4 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800">The "Hello" Problem</h3>
              <p className="text-gray-700">
                When you send a chat message with just "Hello" or "Hi" and wait for a response, you're essentially saying:
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                "I want to interrupt you and make you wait for me to type my actual message."
              </blockquote>
              <p className="text-gray-700">
                In a remote work environment, this creates unnecessary delays and disrupts productivity. The person receiving your message has to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Stop what they're doing to acknowledge your greeting</li>
                <li>Wait (potentially minutes) for your actual question</li>
                <li>Context switch again when your real message arrives</li>
              </ul>
            </TabsContent>
            <TabsContent value="solution" className="p-4 bg-white/90 rounded-b-lg mt-2 space-y-4 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800">Start with Context</h3>
              <p className="text-gray-700">
                Instead of just saying "Hello," include your full question or information in the first message:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-medium text-emerald-600">✓ Do this:</p>
                <p className="pl-4 text-gray-700">"Hi Alex, do you have the latest version of the project report? I need it for the client meeting at 3pm."</p>
                
                <div className="mt-4">
                  <p className="font-medium text-red-600">✗ Not this:</p>
                  <p className="pl-4 text-gray-700">"Hi Alex"</p>
                  <p className="pl-4 text-gray-500 text-sm">[waiting for response]</p>
                  <p className="pl-4 text-gray-700">"Do you have the latest project report?"</p>
                  <p className="pl-4 text-gray-500 text-sm">[waiting for response]</p>
                  <p className="pl-4 text-gray-700">"I need it for the client meeting at 3pm."</p>
                </div>
              </div>
              <p className="text-gray-700">
                This approach respects everyone's time and allows for asynchronous communication to work effectively.
              </p>
            </TabsContent>
            <TabsContent value="tips" className="p-4 bg-white/90 rounded-b-lg mt-2 space-y-4 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800">Communication Best Practices</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Be clear and concise while providing necessary context</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Format longer messages with bullet points or numbered lists</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Use screenshots or links when relevant</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>It's okay to include pleasantries, just don't make them a separate message</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>Consider the urgency and choose appropriate communication channels</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>

        {/* Share Section */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h2 className="text-3xl font-bold text-center text-gray-800">Spread the Word</h2>
          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-4 text-gray-800">Copy and paste this:</h3>
              <div className="bg-gray-100 p-4 rounded-lg relative group">
                <p className="whitespace-pre-wrap text-gray-700">
                  Not Just Hello, please say more!! notjusthello.com
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="absolute top-2 right-2 opacity-50 group-hover:opacity-100"
                  onClick={() => copyToClipboard("Not Just Hello, please say more!! notjusthello.com")}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer with Social Share Links */}
        <footer className="text-center pt-8">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-600 font-medium">Share this site</p>
            <SocialShareLinks size="md" className="mb-6" />
            
            <div className="text-sm text-gray-500 pt-4 border-t border-gray-200 w-full mt-4">
              <p>Inspired by <a href="https://nohello.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">nohello.net</a> and similar sites.</p>
              <p className="mt-2">This website is dedicated to more efficient online communication.</p>
              
              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600 text-left">
                <p className="font-medium mb-2">Disclaimer</p>
                <p>This site is intended for informational purposes only and not to make anyone look bad. These guidelines may not apply to all situations or cultural contexts. Some conversations benefit from different approaches, and the relationship between participants always matters. Use these suggestions as helpful guidelines rather than rigid rules, adapting your communication style to each specific context and relationship.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}