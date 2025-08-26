import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const jobOpenings = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Remote (US)",
    department: "Engineering",
    description: "Build and scale the core features of the PayFlow platform, working with modern technologies to solve complex payroll challenges."
  },
  {
    title: "Product Marketing Manager",
    location: "New York, NY",
    department: "Marketing",
    description: "Define and execute the go-to-market strategy for new features, driving adoption and growth through compelling storytelling."
  },
  {
    title: "Customer Support Specialist",
    location: "Remote (EU)",
    department: "Customer Experience",
    description: "Become a product expert and provide world-class support to our customers, helping them succeed with PayFlow."
  }
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Join Our Team</h1>
              <p className="text-xl text-muted-foreground">We're on a mission to simplify payroll for millions of businesses. If you're passionate about building great products and helping customers, we'd love to hear from you.</p>
            </div>
          </div>
        </div>
        
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-headline text-center mb-12">Current Openings</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {jobOpenings.map(job => (
                        <Card key={job.title} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                           <CardContent className="p-6 grid md:grid-cols-4 gap-6 items-center">
                                <div className="md:col-span-3 space-y-2">
                                    <h3 className="text-xl font-semibold">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4" />
                                            <span>{job.department}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground pt-2">{job.description}</p>
                                </div>
                                <div className="md:col-span-1 flex md:justify-end">
                                    <Button asChild>
                                        <Link href="#">
                                            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
