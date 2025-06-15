"use client";




import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";

export default function PrivacyPolicyPage() {

    return (
        <main className="container min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mb-6">
                    <Button variant="ghost" size="sm" asChild className="mb-4">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        At CoverCraftAI, we value your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines the types of data we collect, how we use it, and the measures we take to ensure its security. By using our services, you agree to the practices described in this policy. If you have any questions or concerns, feel free to contact us.
                    </p>
                </div>

                <Tabs defaultValue="privacy">
                    <TabsList className="mb-6">
                        <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                    </TabsList>

                    <div className="grid gap-8">
                        <div className="container bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">

                            <h1 className="text-center p-2 text-lg">Privacy Policy</h1>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                CraftCoverAI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform to generate cover letters and job proposals using AI technology (powered by Google Gemini).
                                By using CraftCoverAI, you agree to the collection and use of information in accordance with this Privacy Policy. </p>

                            <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                <li>
                                    a. Personal Information You Provide
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        When using CraftCoverAI, you may provide:

                                        <li>Name</li>
    
                                        <li>Email address</li>
    
                                        <li>Employment history</li>
    
                                        <li>Education details</li>
    
                                        <li>Skills, qualifications, and personal profile information</li>
                                    </ul>
                                    This information is only used to generate personalized content for your cover letter or proposal.
                                </li>

                                <li>
                                    b. Usage Data
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                    We may automatically collect certain technical data, such as:
                                    <li>Device type and browser</li>
                                    <li>IP address</li>
                                    <li>Access times and referring URLs</li>
                                    <li>Interaction data within the app</li>
                                    </ul>
                                    This helps us understand how users interact with the platform and improve the experience.
                                </li>
                                <li>
                                 How We Use Your Information
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        We use the information we collect to:
                                        <li>Generate cover letters and job proposals tailored to your input</li>
                                        <li>Improve and personalize the user experience</li>
                                        <li>Provide customer support</li>
                                        <li>Monitor and analyze usage trends</li>
                                        <li>Maintain and improve system security and performance</li>
                                    </ul>
                                </li>
                                <li>
                                     Data Sharing and Disclosure
                                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                        We do not sell, rent, or share your personal information with third parties, except:
                                        <li>Service Providers: We may use third-party services (e.g., hosting or analytics providers) to support our platform. These providers are obligated to safeguard your data.</li>
                                        <li>Nobody wants to look at this.</li>
                                        <li>Legal Requirements: If required by law or a valid legal request, we may disclose your information.</li>
                                    </ul>
                                </li>
                                <li>
                                     Data Security
                                    <p className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                 We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </li>
                                <li>
                                    Data Retention
                                    <p>
                                       We only retain your personal data for as long as necessary to provide our services or comply with legal obligations. You may request deletion of your data at any time by contacting us.

                                    </p>
                                </li>

                                <li className="text-justify">
                                    Your Rights
                                    <ul>
                                    Depending on your location, you may have rights under data protection laws, including:
                                    <li>Accessing your personal data</li>
                                    <li>Correcting or updating information</li>
                                    <li>Requesting deletion of your data</li>
                                    <li>Objecting to or restricting processing</li>
                                    </ul>
                                    To exercise any of these rights, contact us at support@covercraftai.com
                                </li>
                                <li>
                                Children Privacy
                                    <ul>
                                        CraftCoverAI is not intended for children under the age of 13. We do not knowingly collect personal information from children.
                                    </ul>
                                </li>
                                <li>Changes to This Policy
                                    <ul>
                                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised effective date. Continued use of the service indicates your agreement to the updated terms.


                                    </ul>
                                </li>
                                <li>Contact us

                                    <ul>If you have any questions or concerns about this Privacy Policy or your data, please contact us at:

                                        CraftCoverAI
                                        Email:hello@craftcoverai.com</ul>
                                </li>
                            </ol>
























                            
              {/* <h2  className="p-1">1. Information We Collect</h2>
              <p  className="text-sm">
                  We may collect the following types of information:
              </p>
              <ul >
                  
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                  The information we collect is used to:
              </p>
              <ul>
                  <li>Provide and improve our services.</li>
                  <li>Personalize your experience with the application.</li>
                  <li>Communicate with you regarding updates, promotions, or support.</li>
                  <li>Ensure the security and functionality of our application.</li>
              </ul>

              <h2>Sharing Your Information</h2>
              <p>
                  We do not sell or share your personal information with third parties, except as required by law or to provide services through trusted partners who adhere to strict confidentiality agreements.
              </p>

              <h2>Data Security</h2>
              <p>
                  We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
              </p>

              <h2>Your Rights</h2>
              <p>
                  You have the right to access, update, or delete your personal information. If you have any concerns about your data, please contact us.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
              </p>

              <h2>Contact Us</h2>
              <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us at support@covercraftai.com.
              </p> */}
         
              </div>
            </div>

                        </Tabs>
                    </div>
                </main>
                );
}
