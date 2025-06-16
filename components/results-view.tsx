"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Copy, Download, Edit, Check } from "lucide-react";
import { jsPDF } from "jspdf";

type ResultsViewProps = {
  result: string | null;
  isGenerating: boolean;
  type: "cover-letter" | "proposal";
};

export function ResultsView({ result, isGenerating, type }: ResultsViewProps) {
  const [editedContent, setEditedContent] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update edited content when result changes
  useState(() => {
    if (result) {
      setEditedContent(result);
    }
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(isEditing ? editedContent : (result || ""));
      setIsCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Content has been copied to your clipboard",
      });
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "There was an error copying to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    try {
      const content = isEditing ? editedContent : (result || "");
      const doc = new jsPDF();
      
      // Set title
      const title = type === "cover-letter" ? "Cover Letter" : "Job Proposal";
      
      // Format date
      const date = new Date();
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      });
      
      // Add content
      doc.setFontSize(24);
      doc.text(title, 20, 20);
      
      doc.setFontSize(12);
      doc.text(formattedDate, 20, 30);
      
      doc.setFontSize(12);
      
      // Split text into lines to fit PDF width
      const splitText = doc.splitTextToSize(content, 170);
      doc.text(splitText, 20, 40);
      
      // Save PDF
      doc.save(`${type.replace('-', '_')}_${Date.now()}.pdf`);
      
      toast({
        title: "Downloaded as PDF",
        description: "Your content has been saved as a PDF file",
      });
    } catch (error) {
      toast({
        title: "Failed to download",
        description: "There was an error creating the PDF",
        variant: "destructive",
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    if (result && !editedContent) {
      setEditedContent(result);
    }
    
    // Focus on textarea
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 100);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    toast({
      title: "Changes saved",
      description: "Your edits have been applied",
    });
  };

  return (
    <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-sm h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {type === "cover-letter" ? "Cover Letter" : "Proposal"} Preview
          </h2>
          <div className="flex gap-2">
            {result && (
              <>
                {isEditing ? (
                  <Button size="sm" onClick={handleSaveEdit} variant="outline">
                    <Check className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                ) : (
                  <Button size="sm" onClick={handleEdit} variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                )}
                <Button size="sm" onClick={handleCopy} variant="outline" disabled={isCopied}>
                  {isCopied ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
                <Button size="sm" onClick={handleDownload} variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  PDF
                </Button>
              </>
            )}
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          {isGenerating ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
              <Loader2 className="h-12 w-12 animate-spin mb-4 text-blue-500" />
              <p className="text-lg font-medium">Crafting your {type === "cover-letter" ? "cover letter" : "proposal"}...</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Our AI is analyzing your details and creating personalized content.
              </p>
            </div>
          ) : result ? (
            isEditing ? (
              <Textarea
                ref={textareaRef}
                className="flex-1 min-h-[500px] p-4 font-normal text-base leading-relaxed resize-none focus-visible:ring-1"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md flex-1 whitespace-pre-wrap font-normal text-base leading-relaxed overflow-y-auto">
                {editedContent || result}
              </div>
            )
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-md">
              <div className="mb-4">
                {type === "cover-letter" ? (
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400">
                    <path d="M21 8V21H3V8"></path>
                    <path d="M1 3H23V8H1V3Z"></path>
                    <path d="M8 13H16"></path>
                    <path d="M8 17H16"></path>
                  </svg>
                ) : (
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"></path>
                    <path d="M14 2V8H20"></path>
                    <path d="M8 13H16"></path>
                    <path d="M8 17H16"></path>
                    <path d="M8 9H10"></path>
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-medium">No Content Generated Yet</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Fill out the form and click the generate button to create your {type === "cover-letter" ? "cover letter" : "proposal"}.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}