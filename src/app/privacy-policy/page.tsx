import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="prose lg:prose-xl max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold font-headline mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">1. Introduction</h2>
            <p>PayFlow Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect personal information that you provide to us directly, such as your name, email address, company details, and employee information required for payroll processing. We also collect data automatically as you navigate the site, like usage data and cookies.</p>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Provide, operate, and maintain our services.</li>
                <li>Process payroll and fulfill tax obligations.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Communicate with you, including for customer service and support.</li>
                <li>Prevent fraud and ensure the security of our platform.</li>
            </ul>

            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. All data is encrypted in transit and at rest, and our infrastructure is built on secure, SOC 2 compliant services provided by Google Cloud and Firebase.</p>

             <h2 className="text-2xl font-bold font-headline mt-8 mb-4">5. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Please contact us to exercise these rights.</p>
            
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@payflow.com" className="text-primary hover:underline">privacy@payflow.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
