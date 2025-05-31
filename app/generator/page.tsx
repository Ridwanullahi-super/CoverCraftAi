"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { GeneratorForm } from "@/components/generator-form";
import { ResultsView } from "@/components/results-view";

export default function GeneratorPage() {
  const [result, setResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"cover-letter" | "proposal">("cover-letter");
  
  const handleGenerate = async (formData: FormData) => {
    setIsGenerating(true);
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Failed to generate content");
      }
      
      const data = await response.json();
      setResult(data.content || null);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Generate Your Application</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Create a professional cover letter or job proposal in seconds
          </p>
        </div>
        
        <Tabs defaultValue="cover-letter" onValueChange={(value) => setSelectedTab(value as "cover-letter" | "proposal")}>
          <TabsList className="mb-6">
            <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
            <TabsTrigger value="proposal">Job Proposal</TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                <TabsContent value="cover-letter" className="mt-0">
                  <h2 className="text-xl font-semibold mb-4">Cover Letter Generator</h2>
                  <GeneratorForm 
                    onSubmit={handleGenerate} 
                    isGenerating={isGenerating}
                    type="cover-letter"
                  />
                </TabsContent>
                
                <TabsContent value="proposal" className="mt-0">
                  <h2 className="text-xl font-semibold mb-4">Proposal Generator</h2>
                  <GeneratorForm 
                    onSubmit={handleGenerate} 
                    isGenerating={isGenerating}
                    type="proposal"
                  />
                </TabsContent>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <ResultsView 
                result={result} 
                isGenerating={isGenerating} 
                type={selectedTab}
              />
            </div>
          </div>
        </Tabs>
      </div>
    </main>
  );
}