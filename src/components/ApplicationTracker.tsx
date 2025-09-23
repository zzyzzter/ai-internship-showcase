import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface Application {
  id: string;
  company: string;
  position: string;
  status: "applied" | "reviewing" | "interview" | "accepted" | "rejected";
  date: string;
  progress: number;
}

const applications: Application[] = [
  {
    id: "1",
    company: "Innovatech",
    position: "Data Science Intern",
    status: "interview",
    date: "Oct 15",
    progress: 75
  },
  {
    id: "2", 
    company: "DesignFlow",
    position: "UX Designer",
    status: "reviewing",
    date: "Oct 12",
    progress: 50
  },
  {
    id: "3",
    company: "TechVenture", 
    position: "Software Dev Intern",
    status: "applied",
    date: "Oct 10",
    progress: 25
  },
  {
    id: "4",
    company: "Quantum Dynamics",
    position: "ML Engineer",
    status: "accepted",
    date: "Oct 8",
    progress: 100
  }
];

const statusConfig = {
  applied: { 
    variant: "applied" as const, 
    icon: Clock, 
    text: "Applied" 
  },
  reviewing: { 
    variant: "reviewing" as const, 
    icon: AlertCircle, 
    text: "Under Review" 
  },
  interview: { 
    variant: "interview" as const, 
    icon: CalendarDays, 
    text: "Interview Scheduled" 
  },
  accepted: { 
    variant: "interview" as const, 
    icon: CheckCircle, 
    text: "Accepted" 
  },
  rejected: { 
    variant: "applied" as const, 
    icon: AlertCircle, 
    text: "Not Selected" 
  }
};

export function ApplicationTracker() {
  return (
    <Card className="card-gradient border-border/50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          My Application Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {applications.map((application) => {
          const config = statusConfig[application.status];
          const Icon = config.icon;
          
          return (
            <div key={application.id} className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-medium text-sm text-foreground">
                    {application.position}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {application.company}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Applied {application.date}
                  </p>
                </div>
                <Badge variant={config.variant} className="text-xs">
                  <Icon className="w-3 h-3 mr-1" />
                  {config.text}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground font-medium">
                    {application.progress}%
                  </span>
                </div>
                <Progress 
                  value={application.progress} 
                  className="h-2"
                />
              </div>
              
              {application.id !== "4" && (
                <div className="border-b border-border/30 pt-2" />
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}