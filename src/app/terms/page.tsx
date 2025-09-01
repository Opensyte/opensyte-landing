import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
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
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                Welcome to Opensyte. These Terms of Service
                (&ldquo;Terms&rdquo;) govern your use of our website and
                waitlist signup for our open-source business management
                platform. By accessing our website or joining our waitlist, you
                agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to these Terms, please do not use our
                website or services.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-semibold">
                2. Description of Service
              </h2>
              <p>
                Opensyte is an open-source business management platform designed
                for startups and small businesses. We are currently in
                pre-launch phase, operating a waitlist to notify interested
                users when our platform becomes available.
              </p>
              <p>Our waitlist service allows you to:</p>
              <ul>
                <li>Sign up to receive launch notifications</li>
                <li>Receive product updates and development progress</li>
                <li>Participate in beta testing opportunities</li>
                <li>Provide feedback for product development</li>
              </ul>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold">3. Eligibility</h2>
              <p>
                You must be at least 16 years old to use our services. By using
                our website, you represent and warrant that you meet this age
                requirement.
              </p>
              <p>
                If you are using our services on behalf of a company or
                organization, you represent that you have the authority to bind
                that entity to these Terms.
              </p>
            </section>

            {/* Waitlist Terms */}
            <section>
              <h2 className="text-2xl font-semibold">4. Waitlist Terms</h2>
              <p>By joining our waitlist, you understand and agree that:</p>
              <ul>
                <li>The waitlist does not guarantee access to our platform</li>
                <li>
                  We may limit the number of users who receive early access
                </li>
                <li>Launch dates and availability are subject to change</li>
                <li>
                  We may prioritize access based on various factors including
                  signup date, user profile, and business needs
                </li>
                <li>You can unsubscribe from the waitlist at any time</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-semibold">5. Acceptable Use</h2>
              <p>
                You agree to use our website and services only for lawful
                purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul>
                <li>Provide false or misleading information</li>
                <li>
                  Use automated means to access our website (bots, scrapers,
                  etc.)
                </li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the operation of our website</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold">
                6. Intellectual Property
              </h2>
              <p>
                Our website and its content, including but not limited to text,
                graphics, logos, and software, are owned by Opensyte and
                protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p>
                Our open-source platform, when released, will be governed by its
                respective open-source license. The website and marketing
                materials remain proprietary to Opensyte.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative
                works of our website content without our written permission.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-semibold">7. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our{" "}
                <Link href="/privacy" className="text-primary underline">
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your information.
              </p>
            </section>

            {/* Communications */}
            <section>
              <h2 className="text-2xl font-semibold">8. Communications</h2>
              <p>
                By joining our waitlist, you consent to receive communications
                from us, including:
              </p>
              <ul>
                <li>Launch notifications and product updates</li>
                <li>Beta testing invitations</li>
                <li>Surveys and feedback requests</li>
                <li>Important service announcements</li>
              </ul>
              <p>
                You can opt out of non-essential communications at any time by
                using the unsubscribe link in our emails or contacting us
                directly.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold">9. Disclaimers</h2>
              <p>
                Our website and waitlist service are provided &ldquo;as
                is&rdquo; and &ldquo;as available&rdquo; without warranties of
                any kind, either express or implied.
              </p>
              <p>We do not warrant that:</p>
              <ul>
                <li>Our website will be available without interruption</li>
                <li>Our platform will launch on any specific date</li>
                <li>All waitlist members will receive access</li>
                <li>Our services will meet your specific requirements</li>
                <li>Any information provided is accurate or complete</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold">
                10. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Opensyte shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly.
              </p>
              <p>
                Our total liability to you for any claims arising from these
                Terms or your use of our website shall not exceed $100.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of
                liability for consequential or incidental damages, so the above
                limitation may not apply to you.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-semibold">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Opensyte and
                its officers, directors, employees, and agents from and against
                any claims, liabilities, damages, losses, and expenses arising
                out of or in any way connected with:
              </p>
              <ul>
                <li>Your use of our website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold">12. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our
                website and remove you from our waitlist at any time, without
                prior notice, for conduct that we believe violates these Terms
                or is harmful to our business, other users, or third parties.
              </p>
              <p>
                You may terminate your participation in our waitlist at any time
                by unsubscribing from our communications or contacting us
                directly.
              </p>
              <p>
                Upon termination, your right to use our website ceases
                immediately, and we may delete your information in accordance
                with our Privacy Policy.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law provisions.
              </p>
              <p>
                Any disputes arising under these Terms shall be subject to the
                exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. When we
                make changes, we will:
              </p>
              <ul>
                <li>Update the &ldquo;Last updated&rdquo; date at the top</li>
                <li>
                  Notify active waitlist members via email if changes are
                  material
                </li>
                <li>Post a notice on our website</li>
              </ul>
              <p>
                Your continued use of our website after any changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-semibold">15. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary so that these Terms will otherwise
                remain in full force and effect.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold">
                16. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>

              <div className="bg-muted/50 mt-4 rounded-lg p-6">
                <h3 className="text-lg font-medium">Opensyte Legal Team</h3>
                <p className="mt-2">
                  <strong>Email:</strong> dagermohamed@opensyte.org
                  <br />
                  <strong>Subject Line:</strong> Terms of Service Inquiry
                  <br />
                  <strong>Response Time:</strong> Within 5 business days
                </p>
              </div>
            </section>

            {/* Effective Date */}
            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold">17. Effective Date</h2>
              <p>
                These Terms of Service are effective as of{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                and apply to all users of our website and services.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
