import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-border/40 bg-background/95 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="mt-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p>
                Welcome to Opensyte (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;). We are committed to protecting your privacy
                and handling your personal information with care and
                transparency. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website and join our waitlist for our open-source business
                management platform.
              </p>
              <p>
                Opensyte is an open-source business management platform designed
                for startups and small businesses. We are currently in our
                pre-launch phase, collecting email addresses for our waitlist to
                notify interested users when our platform becomes available.
              </p>
              <p>
                By using our website or providing your information to us, you
                agree to the collection and use of information in accordance
                with this Privacy Policy.
              </p>
            </section>

            {/* Data We Collect */}
            <section>
              <h2 className="text-2xl font-semibold">
                2. Information We Collect
              </h2>

              <h3 className="mt-4 text-xl font-medium">
                2.1 Information You Provide Directly
              </h3>
              <p>When you join our waitlist, we collect:</p>
              <ul>
                <li>
                  <strong>Email Address:</strong> Required for waitlist signup
                  and communications
                </li>
                <li>
                  <strong>Name:</strong> Optional, if provided during signup
                </li>
                <li>
                  <strong>Company Information:</strong> Optional, if you choose
                  to share your company name or role
                </li>
                <li>
                  <strong>Additional Information:</strong> Any other information
                  you voluntarily provide in forms or communications
                </li>
              </ul>

              <h3 className="mt-4 text-xl font-medium">
                2.2 Information Collected Automatically
              </h3>
              <p>
                When you visit our website, we automatically collect certain
                technical information:
              </p>
              <ul>
                <li>
                  <strong>IP Address:</strong> For security, analytics, and
                  geographic insights
                </li>
                <li>
                  <strong>Browser Information:</strong> Browser type, version,
                  and settings
                </li>
                <li>
                  <strong>Device Information:</strong> Operating system, device
                  type, and screen resolution
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent, and
                  interaction patterns
                </li>
                <li>
                  <strong>Referral Information:</strong> How you found our
                  website
                </li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold">
                3. How We Use Your Information
              </h2>

              <h3 className="mt-4 text-xl font-medium">3.1 Primary Purposes</h3>
              <ul>
                <li>
                  <strong>Waitlist Management:</strong> To notify you when
                  Opensyte launches
                </li>
                <li>
                  <strong>Platform Updates:</strong> To inform you about product
                  development progress
                </li>
                <li>
                  <strong>Early Access:</strong> To provide priority access to
                  beta versions or early features
                </li>
              </ul>

              <h3 className="mt-4 text-xl font-medium">
                3.2 Secondary Purposes
              </h3>
              <ul>
                <li>
                  <strong>Product Development:</strong> To gather feedback and
                  improve our platform
                </li>
                <li>
                  <strong>Market Research:</strong> To understand user needs and
                  preferences
                </li>
                <li>
                  <strong>Community Building:</strong> To engage with our user
                  community
                </li>
                <li>
                  <strong>Technical Operations:</strong> To maintain and improve
                  our website performance
                </li>
                <li>
                  <strong>Security:</strong> To protect against fraud, abuse,
                  and security threats
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable
                  laws and regulations
                </li>
              </ul>

              <h3 className="mt-4 text-xl font-medium">
                3.3 Communication Frequency
              </h3>
              <p>
                We will contact waitlist members sparingly and only for
                meaningful updates. You can expect:
              </p>
              <ul>
                <li>
                  Launch notification (when the platform becomes available)
                </li>
                <li>Major milestone updates (monthly at most)</li>
                <li>Occasional feedback requests for product development</li>
                <li>Early access opportunities</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section>
              <h2 className="text-2xl font-semibold">
                4. Legal Basis for Processing (GDPR)
              </h2>
              <p>
                Under the General Data Protection Regulation (GDPR), we process
                your personal data based on the following legal grounds:
              </p>
              <ul>
                <li>
                  <strong>Consent:</strong> For waitlist signup and marketing
                  communications (Article 6(1)(a))
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> For website analytics,
                  security, and product development (Article 6(1)(f))
                </li>
                <li>
                  <strong>Legal Obligation:</strong> For compliance with
                  applicable laws (Article 6(1)(c))
                </li>
              </ul>
              <p>
                You have the right to withdraw your consent at any time without
                affecting the lawfulness of processing based on consent before
                its withdrawal.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold">
                5. How We Share Your Information
              </h2>

              <h3 className="mt-4 text-xl font-medium">
                5.1 Third-Party Service Providers
              </h3>
              <p>
                We may share your information with trusted third-party service
                providers who assist us in:
              </p>
              <ul>
                <li>
                  <strong>Email Services:</strong> For sending waitlist
                  notifications and updates
                </li>
                <li>
                  <strong>Analytics Providers:</strong> For website performance
                  and user behavior analysis
                </li>
                <li>
                  <strong>Cloud Hosting:</strong> For secure data storage and
                  website hosting
                </li>
                <li>
                  <strong>Security Services:</strong> For fraud prevention and
                  security monitoring
                </li>
              </ul>
              <p>
                These service providers are contractually bound to protect your
                information and use it only for the specified purposes.
              </p>

              <h3 className="mt-4 text-xl font-medium">
                5.2 Legal Requirements
              </h3>
              <p>
                We may disclose your information if required by law or in
                response to:
              </p>
              <ul>
                <li>Valid legal process (subpoenas, court orders)</li>
                <li>Government investigations</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Protection of users or the public</li>
              </ul>

              <h3 className="mt-4 text-xl font-medium">
                5.3 Business Transfers
              </h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred as part of that transaction. We
                will notify you via email and/or website notice of any such
                change in ownership.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information:
              </p>
              <ul>
                <li>
                  <strong>Encryption:</strong> Data transmission and storage
                  encryption
                </li>
                <li>
                  <strong>Access Controls:</strong> Restricted access to
                  personal data
                </li>
                <li>
                  <strong>Regular Security Audits:</strong> Ongoing security
                  assessments
                </li>
                <li>
                  <strong>Secure Infrastructure:</strong> Industry-standard
                  hosting and security practices
                </li>
                <li>
                  <strong>Employee Training:</strong> Privacy and security
                  awareness for our team
                </li>
              </ul>
              <p>
                While we strive to protect your personal information, no method
                of transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security but commit to
                notifying you of any breaches as required by law.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold">7. Data Retention</h2>
              <p>
                We retain your personal information for different periods
                depending on the purpose:
              </p>
              <ul>
                <li>
                  <strong>Waitlist Data:</strong> Until platform launch + 2
                  years, or until you opt out
                </li>
                <li>
                  <strong>Marketing Communications:</strong> Until you
                  unsubscribe or request deletion
                </li>
                <li>
                  <strong>Website Analytics:</strong> Up to 24 months
                </li>
                <li>
                  <strong>Security Logs:</strong> Up to 12 months
                </li>
                <li>
                  <strong>Legal Compliance:</strong> As required by applicable
                  laws
                </li>
              </ul>
              <p>
                We will delete or anonymize your personal information when it is
                no longer needed for the purposes outlined in this Privacy
                Policy.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold">
                8. Your Rights and Choices
              </h2>

              <h3 className="mt-4 text-xl font-medium">
                8.1 GDPR Rights (EU Residents)
              </h3>
              <p>
                If you are located in the European Union, you have the following
                rights:
              </p>
              <ul>
                <li>
                  <strong>Right of Access:</strong> Request copies of your
                  personal data
                </li>
                <li>
                  <strong>Right of Rectification:</strong> Request correction of
                  inaccurate data
                </li>
                <li>
                  <strong>Right of Erasure:</strong> Request deletion of your
                  personal data
                </li>
                <li>
                  <strong>Right of Restriction:</strong> Request limitation of
                  processing
                </li>
                <li>
                  <strong>Right of Data Portability:</strong> Request transfer
                  of your data
                </li>
                <li>
                  <strong>Right to Object:</strong> Object to processing based
                  on legitimate interests
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent
                  for consent-based processing
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> File a complaint
                  with your local data protection authority
                </li>
              </ul>

              <h3 className="mt-4 text-xl font-medium">
                8.2 CCPA Rights (California Residents)
              </h3>
              <p>
                If you are a California resident, you have the following rights
                under the California Consumer Privacy Act (CCPA):
              </p>
              <ul>
                <li>
                  <strong>Right to Know:</strong> Request information about data
                  collection and use
                </li>
                <li>
                  <strong>Right to Delete:</strong> Request deletion of personal
                  information
                </li>
                <li>
                  <strong>Right to Opt-Out:</strong> Opt-out of the sale of
                  personal information (we do not sell personal information)
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> Equal treatment
                  regardless of privacy choices
                </li>
              </ul>

              <h3 className="mt-4 text-xl font-medium">
                8.3 How to Exercise Your Rights
              </h3>
              <p>To exercise any of these rights, please contact us at:</p>
              <ul>
                <li>Email: dagermohamed@opensyte.org</li>
                <li>Subject Line: &ldquo;Privacy Rights Request&rdquo;</li>
                <li>Include: Your email address and specific request</li>
              </ul>
              <p>
                We will respond to your request within 30 days (or as required
                by applicable law). We may need to verify your identity before
                processing your request.
              </p>

              <h3 className="mt-4 text-xl font-medium">8.4 Opt-Out Options</h3>
              <p>You can opt out of our communications at any time by:</p>
              <ul>
                <li>
                  Clicking the &ldquo;unsubscribe&rdquo; link in any email
                </li>
                <li>Contacting us directly at dagermohamed@opensyte.org</li>
                <li>
                  Updating your preferences through our website (when available)
                </li>
              </ul>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold">
                9. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in
                countries other than your country of residence. These countries
                may have different data protection laws than your country.
              </p>
              <p>
                When we transfer personal data outside the European Economic
                Area (EEA), we ensure appropriate safeguards are in place:
              </p>
              <ul>
                <li>Adequacy decisions by the European Commission</li>
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Binding Corporate Rules</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold">
                10. Children&rsquo;s Privacy
              </h2>
              <p>
                Our service is not directed to children under the age of 16. We
                do not knowingly collect personal information from children
                under 16. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us
                immediately.
              </p>
              <p>
                If we become aware that we have collected personal information
                from children under 16 without verification of parental consent,
                we will take steps to remove that information from our servers.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-semibold">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. When we make changes, we will:
              </p>
              <ul>
                <li>
                  Update the &ldquo;Last updated&rdquo; date at the top of this
                  policy
                </li>
                <li>Notify you via email if the changes are material</li>
                <li>Post a notice on our website homepage</li>
                <li>Provide a summary of key changes</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your information.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold">12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>

              <div className="bg-muted/50 mt-4 rounded-lg p-6">
                <h3 className="text-lg font-medium">Opensyte Privacy Team</h3>
                <p className="mt-2">
                  <strong>Email:</strong> dagermohamed@opensyte.org
                  <br />
                  <strong>Subject Line:</strong> Privacy Policy Inquiry
                  <br />
                  <strong>Response Time:</strong> Within 3 business days
                </p>

                <p className="text-muted-foreground mt-4 text-sm">
                  For GDPR-related inquiries from EU residents, please include
                  &ldquo;GDPR Request&rdquo; in your subject line.
                  <br />
                  For CCPA-related inquiries from California residents, please
                  include &ldquo;CCPA Request&rdquo; in your subject line.
                </p>
              </div>

              <p className="mt-4">
                You can also reach out to us through our GitHub repository or
                community forums for general questions about our open-source
                project and data practices.
              </p>
            </section>

            {/* Effective Date */}
            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold">13. Effective Date</h2>
              <p>
                This Privacy Policy is effective as of{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                and applies to all information collected on or after this date.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
