"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
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

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Link href="/">
                            <Image
                                src="@/images/https://i.ibb.co/F4wy3k6G/Chat-GPT-Image-Jun-15-2025-12-15-24-PM-removebg-preview.png"
                                alt="CoverCraftAI Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                        </Link> */}
            <span className="text-xl font-bold">CoverCraftAI</span>
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
                className="flex items-center gap-2 "
              >
                <Link href="/generator">
                  <Sparkles className="h-5 w-5" />
                  Generator
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact" className="flex items-center gap-2 ">
                  <Phone className="h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <Link href="/privacy" className="text-blue-600">
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
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/generator"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Generator
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Contact Us
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
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
              At CoverCraftAI, we value your privacy and are committed to
              safeguarding your personal information. This Privacy Policy
              outlines the types of data we collect, how we use it, and the
              measures we take to ensure its security.
            </p>
          </div>

          <Tabs defaultValue="privacy">
            <TabsList className="mb-6">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            </TabsList>
            <TabsContent value="privacy">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold mb-4">Privacy Policy</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  CraftCoverAI is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your information when you use our platform to generate cover
                  letters and job proposals using AI technology (powered by
                  Google Gemini). By using CraftCoverAI, you agree to the
                  collection and use of information in accordance with this
                  Privacy Policy.
                </p>
                <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li>
                    <strong>Personal Information You Provide</strong>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Employment history</li>
                      <li>Education details</li>
                      <li>
                        Skills, qualifications, and personal profile information
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Usage Data</strong>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>Device type and browser</li>
                      <li>IP address</li>
                      <li>Access times and referring URLs</li>
                      <li>Interaction data within the app</li>
                    </ul>
                  </li>
                  <li>
                    <strong>How We Use Your Information</strong>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>
                        Generate cover letters and job proposals tailored to
                        your input
                      </li>
                      <li>Improve and personalize the user experience</li>
                      <li>Provide customer support</li>
                      <li>Monitor and analyze usage trends</li>
                      <li>
                        Maintain and improve system security and performance
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Data Sharing and Disclosure</strong>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>
                        Service Providers: We may use third-party services
                        (e.g., hosting or analytics providers) to support our
                        platform. These providers are obligated to safeguard
                        your data.
                      </li>
                      <li>
                        Legal Requirements: If required by law or a valid legal
                        request, we may disclose your information.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Data Security</strong>
                    <p>
                      We implement industry-standard security measures to
                      protect your personal data from unauthorized access,
                      disclosure, alteration, or destruction. However, no method
                      of transmission over the internet is 100% secure, and we
                      cannot guarantee absolute security.
                    </p>
                  </li>
                  <li>
                    <strong>Data Retention</strong>
                    <p>
                      We only retain your personal data for as long as necessary
                      to provide our services or comply with legal obligations.
                      You may request deletion of your data at any time by
                      contacting us.
                    </p>
                  </li>
                  <li>
                    <strong>Your Rights</strong>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>Accessing your personal data</li>
                      <li>Correcting or updating information</li>
                      <li>Requesting deletion of your data</li>
                      <li>Objecting to or restricting processing</li>
                    </ul>
                    <p>
                      To exercise any of these rights, contact us at
                      support@covercraftai.com
                    </p>
                  </li>
                  <li>
                    <strong>Children Privacy</strong>
                    <p>
                      CraftCoverAI is not intended for children under the age of
                      13. We do not knowingly collect personal information from
                      children.
                    </p>
                  </li>
                  <li>
                    <strong>Changes to This Policy</strong>
                    <p>
                      We may update this Privacy Policy from time to time. Any
                      changes will be posted on this page with the revised
                      effective date. Continued use of the service indicates
                      your agreement to the updated terms.
                    </p>
                  </li>
                  <li>
                    <strong>Contact Us</strong>
                    <p>
                      If you have any questions or concerns about this Privacy
                      Policy or your data, please contact us at:
                      <br />
                      CraftCoverAI
                      <br />
                      Email: hello@craftcoverai.com
                    </p>
                  </li>
                </ol>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-8 px-4">
        <ul className="flex justify-center space-x-6 pb-2">
          <li>
            <Link
              href="/privacy"
              className="text-black dark:text-blue-400 hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="text-black dark:text-blue-400 hover:underline"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black dark:text-blue-400 hover:underline"
            >
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
    </div>
  );
}
