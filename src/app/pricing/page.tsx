import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29/month",
    employee_fee: "+ $4 per employee",
    features: [
      "Core payroll processing",
      "Automatic tax filing",
      "Direct deposit",
      "Email support"
    ],
    cta: "Start Free 14-Day Trial",
    isPopular: false,
  },
  {
    name: "Growth",
    price: "$79/month",
    employee_fee: "+ $3 per employee",
    features: [
      "Everything in Starter",
      "Time tracking integration",
      "Benefits administration",
      "Priority support",
      "Custom reporting"
    ],
    cta: "Start Free 14-Day Trial",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    employee_fee: "Contact us for pricing",
    features: [
      "Everything in Growth",
      "Full API access",
      "SSO & advanced security",
      "Dedicated account manager",
      "SLA and onboarding support"
    ],
    cta: "Contact Sales",
    isPopular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Simple, Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground mb-12">No hidden fees. All plans include unlimited payroll runs, employee self-service, and compliance monitoring.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {pricingPlans.map((plan) => (
                <Card key={plan.name} className={`shadow-md hover:shadow-xl transition-all duration-300 ${plan.isPopular ? 'border-primary border-2 hover:scale-105' : 'hover:scale-105'}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.name !== "Enterprise" && <span className="text-muted-foreground">{plan.employee_fee}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className={`w-full ${plan.isPopular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
                      <Link href="/signup">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground">All plans include a free 14-day trial. No credit card required.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
