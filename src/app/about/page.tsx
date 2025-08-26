import Image from "next/image";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Zap, Users, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Making payroll effortless for every business</h1>
              <p className="text-xl text-muted-foreground">So you can focus on what matters most: growing your team and your vision.</p>
            </div>
          </div>
        </div>

        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Image 
                  src="https://placehold.co/600x400.png" 
                  alt="PayFlow Team" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-xl"
                  data-ai-hint="diverse team working"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Who We Are</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  PayFlow was built by HR and finance experts who’ve lived the payroll pain. We combined deep industry knowledge with modern cloud technology to create a platform that’s powerful, simple, and secure. We're passionate about removing administrative hurdles so that businesses can thrive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-headline text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Simplicity First</h3>
                <p className="text-muted-foreground">We believe powerful tools don't have to be complicated.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Customer Obsessed</h3>
                <p className="text-muted-foreground">Your success is our success. We're here to support you.</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Uncompromising Security</h3>
                <p className="text-muted-foreground">We protect your data with enterprise-grade security.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-headline mb-4">Our Tech Stack</h2>
              <p className="text-lg text-muted-foreground">
                Built on Firebase and Google Cloud, PayFlow delivers unmatched reliability, speed, and scalability — without the need for complex infrastructure. We leverage the best of modern web technologies to bring you a fast and secure experience.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
