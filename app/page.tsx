import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Briefcase, FileCheck, Award, Clock, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            CoverCraft AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate professional cover letters and job proposals in seconds with advanced AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/generator">
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CoverCraft AI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-blue-500" />}
              title="AI-Powered Generation"
              description="Leverage advanced AI to create tailored content that highlights your skills and experience."
            />
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-blue-500" />}
              title="Save Time"
              description="Generate professional-quality cover letters in seconds, not hours."
            />
            <FeatureCard 
              icon={<FileCheck className="h-8 w-8 text-blue-500" />}
              title="Fully Customizable"
              description="Edit and refine AI-generated content to match your personal voice."
            />
            <FeatureCard 
              icon={<FileText className="h-8 w-8 text-blue-500" />}
              title="Multiple Formats"
              description="Create cover letters, job proposals, and more with specialized templates."
            />
            <FeatureCard 
              icon={<Briefcase className="h-8 w-8 text-blue-500" />}
              title="Industry Specific"
              description="Tailor your application to specific industries and job requirements."
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-blue-500" />}
              title="Professional Results"
              description="Stand out from the crowd with polished, professional application materials."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="space-y-12">
            <Step 
              number="1"
              title="Enter Your Information"
              description="Provide details about your resume and the job you're applying for."
            />
            <Step 
              number="2"
              title="Select Your Tone"
              description="Choose the writing style that best represents your personality and the position."
            />
            <Step 
              number="3"
              title="Generate & Customize"
              description="Our AI creates a draft that you can edit and refine to perfection."
            />
            <Step 
              number="4"
              title="Download & Apply"
              description="Save your finished cover letter as a PDF or copy directly to your clipboard."
            />
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/generator">
                Create Your Cover Letter Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-8 px-4">
        <ul className="">
          <li className="text-left mb-4">
            <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li className="text-left mb-4">
            <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
              Terms of Service
            </Link>
          </li>
          <li className="text-left mb-4">
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CoverCraft AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-800 transition-all">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0 bg-blue-600 text-white dark:bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}