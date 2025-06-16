"use client";
import { stringify } from "flatted";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Sparkles, Lock, FileText, Phone } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(result.error);
      }
    } catch (error) {
      setResponseMessage("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
        <div className="container flex h-16 items-center justify-between">
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
                className="flex items-center gap-2 "
              >
                <Link href="/generator">
                  <Sparkles className="h-5 w-5" />
                  Generator
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-blue-600"
                >
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
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Contact us</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Reach out for inquiries or AI-related concerns.
          </p>
        </div>

        <Tabs defaultValue="contact-us">
          <TabsList className="mb-6">
            <TabsTrigger value="contact-us">Contact us</TabsTrigger>
          </TabsList>

          <div className="grid gap-8">
            <div className="">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
                <TabsContent value="contact-us" className="mt-0">
                  <form onSubmit={handleSubmit}>
                    <div className="lg:col-span-3">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="John"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="contact@craftcoverai.com"
                          required
                        />
                      </div>
                      <div className="">
                        <div>
                          <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Message:
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message here..."
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="py-3 bg-slate-400 my-2 rounded-lg px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        For urgent requests, email us directly at{" "}
                        <a
                          href="mailto:asimiyuridwan50@gmail.com"
                          className="text-blue-500 hover:underline"
                        >
                          asimiyuridwan50@gmail.com
                        </a>
                      </p>
                    </div>
                  </form>
                  {responseMessage && <p>{responseMessage}</p>}
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
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
    </main>
  );
}
