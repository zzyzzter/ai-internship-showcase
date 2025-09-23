import { JobCard } from "./JobCard";
import innovatechLogo from "@/assets/innovatech-logo.png";
import quantumLogo from "@/assets/quantum-logo.png";
import designflowLogo from "@/assets/designflow-logo.png";
import techventureLogo from "@/assets/techventure-logo.png";

const recommendedJobs = [
  {
    company: "Innovatech",
    logo: innovatechLogo,
    title: "Data Science Intern",
    location: "San Francisco, CA",
    type: "Technology",
    matchScore: 95,
    description: "Join our AI team to work on cutting-edge machine learning projects. You'll analyze large datasets and build predictive models for real-world applications."
  },
  {
    company: "Quantum Dynamics", 
    logo: quantumLogo,
    title: "ML Engineer Intern",
    location: "Boston, MA",
    type: "Research",
    matchScore: 92,
    description: "Develop quantum computing algorithms and work with state-of-the-art quantum systems. Perfect for students passionate about the future of computing."
  },
  {
    company: "DesignFlow",
    logo: designflowLogo,
    title: "UX Designer Intern",
    location: "New York, NY",
    type: "Design",
    matchScore: 88,
    description: "Create user-centered designs for mobile and web applications. Work directly with product teams to improve user experiences across our platform."
  },
  {
    company: "TechVenture",
    logo: techventureLogo,
    title: "Software Developer Intern",
    location: "Austin, TX",
    type: "Software",
    matchScore: 85,
    description: "Build scalable web applications using modern frameworks. Collaborate with senior developers on projects that impact millions of users daily."
  }
];

export function RecommendationsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Recommended Opportunities
          </h2>
          <p className="text-muted-foreground mt-1">
            Personalized matches based on your profile and preferences
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          Showing 4 of 12 matches
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendedJobs.map((job, index) => (
          <JobCard
            key={index}
            company={job.company}
            logo={job.logo}
            title={job.title}
            location={job.location}
            type={job.type}
            matchScore={job.matchScore}
            description={job.description}
            verified={true}
          />
        ))}
      </div>
    </div>
  );
}