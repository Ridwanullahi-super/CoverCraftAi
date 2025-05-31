import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai"; // Correct export name based on library documentation

// Initialize Google GenAI client
const genai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY, // IMPORTANT: Use environment variables!
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form data
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const resumeText = formData.get("resumeText") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobDescription = formData.get("jobDescription") as string;
    const companyName = formData.get("companyName") as string;
    const tone = formData.get("tone") as string;
    const type = formData.get("type") as string;

    // Validate required fields
    if (!fullName || !resumeText || !jobTitle || !jobDescription) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check for API key
    if (!process.env.GOOGLE_GENAI_API_KEY) {
      // If no API key, use a mock response for development
      return mockResponse(type, fullName, jobTitle, companyName, tone);
    }

    // Create prompt based on the type of document
    const prompt = createPrompt(
      type,
      fullName,
      email,
      phone,
      resumeText,
      jobTitle,
      jobDescription,
      companyName,
      tone
    );

    const { text } = await genai.models.generateContent({
      model: "gemini-2.0-flash", // Replace with the appropriate Google GenAI model
      contents: `${prompt} ${
        type === "cover-letter"
          ? "Must be no more than 250-300 words and formatted as a cover letter. no need to include contact information"
          : "Must be no more than 400-500 words and formatted as a job proposal."
      }`,
      config: {
        // maxOutputTokens: 200, // Adjust based on your needs
        // temperature: 0.7, // Adjust for creativity vs. accuracy
        // topP: 0.9, // Adjust for diversity in responses
      },
    });

    if (!text) {
      return NextResponse.json(
        { error: "Failed to generate content" },
        { status: 500 }
      );
    }

    // Return the result
    return NextResponse.json({ content: text });
  } catch (error: any) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate content" },
      { status: 500 }
    );
  }
}

function createPrompt(
  type: string,
  fullName: string,
  email: string | null,
  phone: string | null,
  resumeText: string,
  jobTitle: string,
  jobDescription: string,
  companyName: string | null,
  tone: string
): string {
  const company = companyName ? companyName : "the company";

  const contactInfo = [
    email ? `Email: ${email}` : "",
    phone ? `Phone: ${phone}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const toneDescription = getToneDescription(tone);

  if (type === "cover-letter") {
    return `
      Write a professional cover letter for ${fullName}${
      contactInfo ? `\n${contactInfo}` : ""
    } applying for the ${jobTitle} position at ${company}. instead of using [${contactInfo}], use the following format:
    ${fullName}
    ${email}
    ${phone}
    today's date formatted as "Month Day, Year"

  
      Resume/Experience:
      ${resumeText}

      Job Description:
      ${jobDescription}

      The cover letter should be ${toneDescription}. Include a proper greeting, introduction, Must be no more than 250-300 words and formatted as a cover letter. no need to include contact information, highlighting relevant skills and experience, and a conclusion. Format it as a proper cover letter with appropriate spacing.
    `;
  } else {
    return `
      Write a professional job proposal for ${fullName}${
      contactInfo ? `\n${contactInfo}` : ""
    } for the ${jobTitle} position at ${company}.

      Resume/Experience:
      ${resumeText}

      Job Description:
      ${jobDescription}

      The proposal should be ${toneDescription}. Include a brief introduction about yourself, explain why you're the right fit for the role by highlighting your relevant experience and skills, and describe what you can bring to ${company}. End with a call to action. Must be no more than 400-500 words and formatted as a job proposal.
    `;
  }
}

function getToneDescription(tone: string): string {
  switch (tone) {
    case "professional":
      return "professional and straightforward";
    case "conversational":
      return "conversational and approachable while maintaining professionalism";
    case "enthusiastic":
      return "enthusiastic and energetic, showing passion for the role";
    case "confident":
      return "confident and assertive, highlighting achievements directly";
    case "formal":
      return "formal and traditional in structure and language";
    default:
      return "professional and straightforward";
  }
}

function mockResponse(
  type: string,
  fullName: string,
  jobTitle: string,
  companyName: string | null,
  tone: string
): NextResponse {
  const company = companyName || "the company";
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let content = "";

  if (type === "cover-letter") {
    content = `${date}\n\n${fullName}\n\nDear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position at ${company}. After reviewing the job description, I believe that my skills and experiences make me an excellent candidate for this role.\n\nThroughout my career, I have developed strong skills in [relevant skills based on job description]. My experience in [relevant experience] has prepared me well for the challenges of this position. In my previous role, I [accomplishment relevant to job].\n\nI am particularly drawn to ${company} because of [specific reason]. I am confident that my background in [relevant field] and my passion for [industry/field] would allow me to make significant contributions to your team.\n\nThank you for considering my application. I look forward to the opportunity to further discuss how my qualifications align with your needs. Please feel free to contact me at your convenience to arrange an interview.\n\nSincerely,\n\n${fullName}`;
  } else {
    content = `${date}\n\nJob Proposal: ${jobTitle} Position\n\nDear Hiring Team at ${company},\n\nI am ${fullName}, and I am excited to submit my proposal for the ${jobTitle} position. After carefully reviewing your requirements, I am confident that my skills and approach would be valuable to your organization.\n\n## About Me\nI am a [profession] with [X years] of experience in [relevant field]. I specialize in [key skills relevant to job], with a proven track record of [key achievement].\n\n## My Approach to This Role\nBased on your job description, I understand you're looking for someone who can [main responsibilities]. My approach would be to [strategy for handling responsibilities], ensuring [key benefit to company].\n\n## Value Proposition\nIf selected for this role, I would bring:\n- [Key skill/experience 1] that would help with [company need].\n- [Key skill/experience 2] that would contribute to [company goal].\n- A commitment to [relevant value] that aligns with your company culture.\n\nI would welcome the opportunity to discuss my proposal in more detail. Please feel free to contact me to schedule a conversation.\n\nThank you for your consideration.\n\nBest regards,\n\n${fullName}`;
  }

  return NextResponse.json({ content });
}
