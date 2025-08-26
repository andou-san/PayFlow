import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqItems = [
  {
    question: "How do I run my first payroll?",
    answer: "To run your first payroll, add your employees, set up your payroll schedule, and then click the 'Run Payroll' button on your dashboard. Our system will guide you through confirming hours and amounts before finalizing."
  },
  {
    question: "Can I pay both salaried and hourly employees?",
    answer: "Yes, PayFlow supports both salaried and hourly employees. You can set the pay type and rate for each employee individually in their profile."
  },
  {
    question: "How does automatic tax filing work?",
    answer: "PayFlow calculates, withholds, and files federal, state, and local payroll taxes on your behalf. We ensure your filings are on time and accurate, helping you stay compliant."
  },
  {
    question: "How do employees access their payslips?",
    answer: "Employees get access to a secure self-service portal where they can view and download all their payslips and tax forms (like W-2s) at any time."
  },
  {
    question: "What accounting software do you integrate with?",
    answer: "We integrate with popular accounting software like QuickBooks and Xero. This allows for automatic syncing of your payroll data, saving you time on manual reconciliation."
  },
];

export default function HelpCenterPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold font-headline mb-4">How can we help?</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search for answers..." className="pl-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold font-headline mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
