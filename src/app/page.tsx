import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, ArrowRight, PlayCircle, BarChart, FileText, Users, Lock, Milestone, ShieldCheck, DatabaseZap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const trustedByLogos = [
  { name: "TechStart Inc.", src: "https://placehold.co/140x40.png", hint: "tech startup" },
  { name: "GreenLeaf Labs", src: "https://placehold.co/140x40.png", hint: "eco friendly" },
  { name: "Urban Design Co.", src: "https://placehold.co/140x40.png", hint: "architecture firm" },
  { name: "Nexora", src: "https://placehold.co/140x40.png", hint: "futuristic corporation" },
  { name: "BrightEdge Solutions", src: "https://placehold.co/140x40.png", hint: "consulting analytics" },
];

const features = [
    { icon: <Milestone className="h-8 w-8 text-primary" />, title: "One-Click Payroll", description: "Run payroll across teams with a single click." },
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Tax Compliance & Filing", description: "We calculate, track, and file your federal and state taxes automatically." },
    { icon: <ArrowRight className="h-8 w-8 text-primary" />, title: "Direct Deposit", description: "Pay employees fast and securely, every time." },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Employee Self-Service", description: "Employees view payslips, update info, and download tax forms." },
    { icon: <DatabaseZap className="h-8 w-8 text-primary" />, title: "Firebase-Secured Data", description: "Built on Google’s secure, scalable infrastructure." },
    { icon: <BarChart className="h-8 w-8 text-primary" />, title: "Multi-State Support", description: "Compliant payroll across all 50 states." },
];

const howItWorksSteps = [
    { number: "1", title: "Import Employees", description: "Add your team manually or upload a CSV — it only takes minutes." },
    { number: "2", title: "Set Pay Schedule", description: "Choose weekly, biweekly, or monthly payroll — we’ll remind you when it’s time." },
    { number: "3", title: "Run Payroll", description: "Confirm hours and earnings, then click “Run Payroll.” Taxes, deductions, and payslips are handled automatically." },
];

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-background text-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight">Automate Payroll. Stay Compliant. <br /> Scale with Confidence.</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8">PayFlow is a secure, Firebase-powered payroll platform built for growing businesses. Run payroll in minutes, not hours — with automatic tax filing, direct deposit, and real-time reporting.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
              <Link href="/signup">Start Free 14-Day Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <Link href="#"><PlayCircle className="mr-2 h-5 w-5" />Watch Demo (60 sec)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-8">Join thousands of businesses who trust PayFlow to handle their payroll.</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {trustedByLogos.map(logo => (
              <Image key={logo.name} src={logo.src} alt={logo.name} width={140} height={40} className="opacity-60 hover:opacity-100 transition-opacity" data-ai-hint={logo.hint} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Payroll that just works.</h2>
              <p className="text-muted-foreground text-lg">From paying your people to filing taxes, PayFlow automates the hard parts so you can focus on your business.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
                {features.slice(0, 4).map(feature => (
                    <div key={feature.title} className="flex flex-col items-start text-left p-4 rounded-lg transition-all duration-300 hover:bg-secondary/50">
                        {feature.icon}
                        <h3 className="font-semibold mt-4 mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">How It Works</h2>
          <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
              <div className="grid md:grid-cols-3 gap-12 relative">
                  {howItWorksSteps.map(step => (
                    <Card key={step.number} className="text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <CardContent className="p-8">
                            <div className="mb-4 flex justify-center">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                    </Card>
                  ))}
              </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
              <Card className="max-w-4xl mx-auto shadow-xl overflow-hidden md:flex transition-all duration-300 hover:shadow-2xl">
                  <div className="md:w-1/3">
                      <Image src="https://placehold.co/400x400.png" alt="Lena Torres" width={400} height={400} className="object-cover h-full w-full" data-ai-hint="professional woman" />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                      <blockquote className="text-xl italic text-foreground mb-4">
                          "PayFlow cut our payroll time by 80%. As a 50-person startup, compliance used to be a nightmare. Now, we just click 'Run Payroll' and it’s done."
                      </blockquote>
                      <div className="flex items-center">
                          <Avatar>
                              <AvatarImage src="https://placehold.co/40x40.png" alt="Lena Torres" data-ai-hint="woman portrait"/>
                              <AvatarFallback>LT</AvatarFallback>
                          </Avatar>
                          <div className="ml-4">
                              <p className="font-semibold">Lena Torres</p>
                              <p className="text-sm text-muted-foreground">HR Director at Nexora</p>
                          </div>
                      </div>
                  </div>
              </Card>
          </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to simplify payroll?</h2>
              <p className="text-lg text-muted-foreground mb-8">Join 2,500+ businesses already using PayFlow.</p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                  <Link href="/signup">Start Your Free Trial</Link>
              </Button>
          </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
