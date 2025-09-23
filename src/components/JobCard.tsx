import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Shield, MapPin, Clock, Building } from "lucide-react";

interface JobCardProps {
  company: string;
  logo: string;
  title: string;
  location: string;
  type: string;
  matchScore: number;
  description: string;
  verified?: boolean;
}

export function JobCard({ 
  company, 
  logo, 
  title, 
  location, 
  type, 
  matchScore, 
  description,
  verified = true 
}: JobCardProps) {
  return (
    <Card className="card-gradient hover:shadow-lg transition-smooth group border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
              <img 
                src={logo} 
                alt={`${company} logo`}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {company}
                </h3>
                {verified && (
                  <Badge variant="verified" className="text-xs">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Building className="w-3 h-3" />
                {type}
              </p>
            </div>
          </div>
          <Badge variant="match" className="text-xs font-bold">
            {matchScore}% Match
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="py-0">
        <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Posted 2 days ago
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          <Button className="flex-1" size="sm">
            Apply Now
          </Button>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}