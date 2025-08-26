import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="prose lg:prose-xl max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-8">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">2. Description of Service</h2>
            <p>PayFlow Inc. provides a software-as-a-service platform for payroll management, tax filing, and related services. You are responsible for the accuracy of all information you provide.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">3. User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account. You agree to provide accurate and complete information and to update it as necessary.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">4. Limitation of Liability</h2>
            <p>PayFlow Inc. will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the service. Our total liability will not exceed the amount you have paid to us in the twelve (12) months preceding the event giving rise to the claim.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">5. Governing Law</h2>
            <p>These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
