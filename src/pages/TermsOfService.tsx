import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Effective Date: 15 May 2025</p>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Welcome to Sasabot™! These Terms of Service ("Terms") govern your access to and use of the Sasabot™ website, platform, mobile applications, APIs, and related services ("Services") operated by African Phoenix Ltd ("Sasabot™," "we," "our," or "us").
              </p>

              <p className="mb-8">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility</h2>
              <p className="mb-6">
                You must be at least 18 years old (or the legal age of majority in your jurisdiction) and have the legal capacity to enter into a binding contract to use Sasabot™. You represent and warrant that the information you provide is accurate and complete.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Account Registration</h2>
              <p className="mb-4">
                To access certain features, you must create an account and provide accurate registration information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="mb-6">You agree to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Keep your password confidential</li>
                <li>Notify us immediately of unauthorized access or security breaches</li>
                <li>Not impersonate another person or entity</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Acceptable Use</h2>
              <p className="mb-4">You agree not to misuse the Services. You shall not:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use the Services for unlawful or fraudulent purposes</li>
                <li>Interfere with or disrupt the integrity of our systems</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Upload harmful content, including viruses or malicious code</li>
                <li>Use the Services to transmit spam or unsolicited messages</li>
                <li>Violate applicable laws or regulations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Subscription and Billing</h2>
              <p className="mb-6">
                Some features of Sasabot™ are provided on a subscription basis. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Pay all applicable fees stated at the time of subscription</li>
                <li>Allow us or our payment processors to charge your payment method on a recurring basis</li>
                <li>Comply with the selected billing plan's terms (monthly, annual, etc.)</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Trial and Beta Access</h2>
              <p className="mb-6">
                If you're participating in a free trial or beta test, the Services are provided "as-is," without warranties. We may modify or discontinue access at any time without notice. Beta users agree to provide feedback that may be used to improve the platform.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
              <p className="mb-6">
                All content, branding, software, documentation, and other elements of Sasabot™ are the property of African Phoenix Ltd or its licensors and are protected by intellectual property laws.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Services</h2>
              <p className="mb-6">
                Sasabot™ may integrate with third-party services such as WhatsApp Business API, payment processors (e.g., MPESA, Airtel Money), or CRMs. Your use of such services is governed by their own terms and policies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Privacy</h2>
              <p className="mb-6">
                Your use of the Services is subject to our Privacy Policy. By using Sasabot™, you consent to the collection, use, and sharing of data as described in our policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Service Availability and Updates</h2>
              <p className="mb-6">
                We aim to provide reliable, secure, and performant Services, but we do not guarantee uninterrupted access. We may perform updates, maintenance, or modify features without prior notice.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Termination</h2>
              <p className="mb-6">
                You may cancel your account at any time. We may suspend or terminate your access if you breach these Terms, fail to pay applicable fees, or if required by law.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="list-none mb-6">
                <li>📧 legal@sasabot.ai</li>
                <li>🌐 https://www.sasabot.ai</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;