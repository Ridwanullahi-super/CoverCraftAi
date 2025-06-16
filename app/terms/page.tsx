"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Sparkles,
  Phone,
  Lock,
} from "lucide-react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Link href="/">
              <Image
                src="https://i.ibb.co/F4wy3k6G/Chat-GPT-Image-Jun-15-2025-12-15-24-PM-removebg-preview.png"
                alt="CoverCraftAI Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link> */}
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
                <Link
                  href="/terms"
                  className="flex items-center gap-2 text-blue-600"
                >
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
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/generator"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Generator
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Contact Us
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/privacy"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
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
          <div className="mb-8 space-y-4 pb-20">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
              Welcome to CraftCoverAI - an AI-powered tool for generating
              personalized cover letters. These Terms of Service (Terms) govern
              your access to and use of our platform, products, and services. By
              using CraftCoverAI, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              By accessing or using CraftCoverAI, you confirm that you have
              read, understood, and agree to comply with these Terms of Service.
              If you do not agree with any part of the Terms, you must not use
              the platform.
            </p>

            <h2 className="text-lg font-bold mb-4">2. Use of Services</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4"> </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Use CraftCoverAI only for lawful purposes.</li>
              <li>
                Provide accurate and truthful information when using our
                services.
              </li>
              <li>
                Refrain from misusing, reverse-engineering, or exploiting any
                part of the service.
              </li>
              <li>
                Not use the service to generate harmful, misleading, or
                inappropriate content.
              </li>
              <li>
                Abide by all applicable local, national, and international laws,
                regulations, and ethical standards.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to suspend or terminate your access if we
              believe you are misusing the service or violating these Terms.
            </p>

            <h2 className="text-lg font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All content, design, code, text, graphics, trademarks, logos, and
              technologies used in CraftCoverAI are the property of CraftCoverAI
              or its licensors and are protected by copyright, trademark, and
              other intellectual property laws.
            </p>

            <p>You may not:</p>

            <p className="list-disc pl-6 space-y-2">
              <li>
                Reproduce, modify, or distribute any content from CraftCoverAI
                without our written permission.
              </li>
              <li>Use our branding or logos without prior authorization.</li>
            </p>

            <h2 className="text-lg font-bold mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              CraftCoverAI is provided as is and as available without any
              warranties or guarantees, either express or implied. We do not
              warrant that the service will be uninterrupted, error-free, or
              secure. To the fullest extent permitted by law, CraftCoverAI, its
              developers, partners, or affiliates will not be held liable for
              any direct, indirect, incidental, special, or consequential
              damages resulting from your use of or inability to use the
              service, including but not limited to data loss, content errors,
              or service outages.{" "}
            </p>

            <h2 className="text-lg font-bold mb-4">5. Changes to Terms</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may update or modify these Terms of Service at any time.
              Changes will be effective immediately upon posting on the
              platform. Your continued use of CraftCoverAI after any changes
              constitutes your acceptance of the new Terms. We encourage you to
              review these Terms periodically to stay informed of updates.{" "}
            </p>
          </div>
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
