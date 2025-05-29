"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type GeneratorType = "cover-letter" | "proposal";

interface GeneratorFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  isGenerating: boolean;
  type: GeneratorType;
}

export function GeneratorForm({ onSubmit, isGenerating, type }: GeneratorFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resumeText: "",
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    tone: "professional"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.resumeText || !formData.jobTitle || !formData.jobDescription) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
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
        <Label htmlFor="resumeText">Resume/Experience Summary *</Label>
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
            {type === "cover-letter" ? "Generating Cover Letter..." : "Generating Proposal..."}
          </>
        ) : (
          type === "cover-letter" ? "Generate Cover Letter" : "Generate Proposal"
        )}
      </Button>
    </form>
  );
}