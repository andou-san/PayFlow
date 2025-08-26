import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Users, BarChart, Puzzle, FileLock, Layers } from "lucide-react";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const featuresList = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Automated Tax Calculations",
    description: "Never miss a tax deadline. We calculate federal, state, and local withholdings and keep records up to date."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Employee Portal",
    description: "Employees access payslips, tax forms, and personal details anytime — no admin needed."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Real-Time Reporting",
    description: "Get instant insights into payroll costs, tax liabilities, and labor expenses."
  },
  {
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    title: "Integrations",
    description: "Works seamlessly with Google Workspace, QuickBooks, Slack, and more."
  },
  {
    icon: <FileLock className="h-8 w-8 text-primary" />,
    title: "Audit Logs & Compliance",
    description: "Track every change and action for full transparency and audit readiness."
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Secure by Design",
    description: "Built on Firebase and Google Cloud — SOC 2 compliant, encrypted data, and enterprise-grade security."
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Everything You Need to Run Payroll</h1>
              <p className="text-lg text-muted-foreground">Right out of the box. PayFlow is packed with powerful features to save you time and keep you compliant.</p>
            </div>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresList.map((feature) => (
                <Card key={feature.title} className="shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    {feature.icon}
                    <CardTitle className="pt-4">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
