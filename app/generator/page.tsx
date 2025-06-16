"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { GeneratorForm } from "@/components/generator-form";
import { ResultsView } from "@/components/results-view";
import {
  FileText,
  Briefcase,
  FileCheck,
  Award,
  Clock,
  Zap,
  Home,
  Sparkles,
  Phone,
  Lock,
} from "lucide-react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function GeneratorPage() {
  const [result, setResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"cover-letter" | "proposal">(
    "cover-letter"
  );

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
    <main className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold px-4">CoverCraftAI</span>
        </div>
        <nav className="flex items-center gap-4 ">
          <div className="hidden lg:flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2  text-blue-600"
            >
              <Link href="/generator">
                <Sparkles className="h-5 w-5" />
                Generator
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contact
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <Link href="/privacy">
                <Lock className="h-5 w-5" />
                Privacy Policy
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <Link href="/terms" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Terms of Service</span>
              </Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <Menu>
              <MenuButton className="p-2 rounded-md hover:bg-gray-100">
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/generator"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    Generator
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/privacy"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/terms"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100"
                  >
                    Terms of Service
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </nav>
      </div>
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

        <Tabs
          defaultValue="cover-letter"
          onValueChange={(value) =>
            setSelectedTab(value as "cover-letter" | "proposal")
          }
        >
          <TabsList className="mb-6">
            <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
            <TabsTrigger value="proposal">Job Proposal</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                <TabsContent value="cover-letter" className="mt-0">
                  <h2 className="text-xl font-semibold mb-4">
                    Cover Letter Generator
                  </h2>
                  <GeneratorForm
                    onSubmit={handleGenerate}
                    isGenerating={isGenerating}
                    type="cover-letter"
                  />
                </TabsContent>

                <TabsContent value="proposal" className="mt-0">
                  <h2 className="text-xl font-semibold mb-4">
                    Proposal Generator
                  </h2>
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
          <footer className=" dark:bg-gray-950 py-8 px-4">
              <ul className="flex justify-center space-x-6 pb-2">
                <li>
                  <Link href="/privacy" className="text-black dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-black dark:text-blue-400 hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-black dark:text-blue-400 hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <hr />
              <div className="max-w-6xl mx-auto text-center p-1">
                <p className="text-gray-600 dark:text-gray-400">
                  © {new Date().getFullYear()} CoverCraft AI. All rights reserved.
                </p>
              </div>
            </footer>
    </main>
  );
}
