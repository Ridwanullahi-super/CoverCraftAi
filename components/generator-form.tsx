"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { parseOffice } from "@/lib/server";

type GeneratorType = "cover-letter" | "proposal";

interface GeneratorFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  isGenerating: boolean;
  type: GeneratorType;
}

export function GeneratorForm({
  onSubmit,
  isGenerating,
  type,
}: GeneratorFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    resumeText: "",
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    tone: "professional",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.fullName ||
      !formData.resumeText ||
      !formData.jobTitle ||
      !formData.jobDescription
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("type", type);

    await onSubmit(data);
  };

  const handleResumeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a resume file to upload.",
        variant: "destructive",
      });
      return;
    }
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a resume file to upload.",
        variant: "destructive",
      });
      return;
    }
    try {
      const base64: string = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      console.log("Base64 string:", base64.split(",")[1]); // Log the base64 string without the prefix
      const result = await parseOffice(base64.split(",")[1] as string); // Remove base64 prefix
      setFormData((prev) => ({
        ...prev,
        resumeText: result || "",
      }));
      console.log(result);

      // result contains the extracted text.
    } catch (error) {
      // Handle error
      console.error("Error parsing resume file:", error);
      toast({
        title: "Error parsing file",
        description: "There was an error processing your resume file.",
        variant: "destructive",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="resumeText">Resume/Experience *</Label>
        <Input
          id="resume"
          name="resume"
          onChange={handleResumeChange}
          type="file"
          accept=".txt,.doc,.docx,.pdf"
          placeholder="Upload your resume or paste your experience"
        />

        <Textarea
          id="resumeText"
          name="resumeText"
          value={formData.resumeText}
          onChange={handleChange}
          placeholder="Paste your resume or summarize your key skills and experience"
          className="h-32"
          required
        />
      </div>

      <div>
        <Label htmlFor="jobTitle">Job Title *</Label>
        <Input
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="e.g., Software Engineer, Marketing Manager"
          required
        />
      </div>

      <div>
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="e.g., Acme Corporation"
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount / Salary</Label>
        <Input
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="e.g., $100,000"
        />
      </div>

      <div>
        <Label htmlFor="jobDescription">Job Description *</Label>
        <Textarea
          id="jobDescription"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          placeholder="Paste the job description or key requirements"
          className="h-32"
          required
        />
      </div>

      <div>
        <Label htmlFor="tone">Tone</Label>
        <Select
          value={formData.tone}
          onValueChange={(value) => handleSelectChange("tone", value)}
        >
          <SelectTrigger id="tone">
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="conversational">Conversational</SelectItem>
            <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
            <SelectItem value="confident">Confident</SelectItem>
            <SelectItem value="formal">Formal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isGenerating}>
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {type === "cover-letter"
              ? "Generating Cover Letter..."
              : "Generating Proposal..."}
          </>
        ) : type === "cover-letter" ? (
          "Generate Cover Letter"
        ) : (
          "Generate Proposal"
        )}
      </Button>
    </form>
  );
}
