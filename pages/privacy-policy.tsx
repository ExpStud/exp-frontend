import { PageLayout } from "@components";
import { NextPage } from "next";

const Projects: NextPage = () => {
  return (
    <PageLayout>
      <div className="px-10 lg:px-20 py-20 lg:py-36 text-white">
        <h1 className="text-sand/80 text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg font-light mb-6">Effective Date: May 2025</p>
        <p className="text-lg font-light mb-6">
          Sandbox Studio (“we,” “our,” or “us”) respects your privacy. This
          Privacy Policy explains how we collect, use, and safeguard information
          when you visit{" "}
          <a
            href="https://sandboxstud.io"
            className="text-blue-400 underline"
            target="_blank"
            rel="noreferrer"
          >
            https://sandboxstud.io
          </a>
          .
        </p>

        <h2 className="text-sand/70 text-xl font-semibold mb-4">
          Information We Collect
        </h2>
        <p className="text-lg font-light mb-6">
          We do not collect personal data unless you submit it voluntarily
          (e.g., via contact forms or emails). We may automatically collect
          limited technical information such as browser type, IP address, and
          pages visited—used only for analytics and performance improvements.
        </p>

        <h2 className="text-sand/70 text-xl font-semibold mb-4">
          How We Use It
        </h2>
        <p className="text-lg font-light mb-6">
          We use any data submitted solely to respond to inquiries or improve
          the experience of our website. We do not sell or share your personal
          information with third parties.
        </p>

        <h2 className="text-sand/70 text-xl font-semibold mb-4">Cookies</h2>
        <p className="text-lg font-light mb-6">
          Our site may use basic cookies for analytics and smooth user
          experience. You can adjust your browser settings to disable cookies at
          any time.
        </p>

        <h2 className="text-sand/70 text-xl font-semibold mb-4">
          Third-Party Services
        </h2>
        <p className="text-lg font-light mb-6">
          We may use services like Google Analytics or embedded media that
          follow their own data practices. We encourage reviewing their privacy
          terms.
        </p>

        <h2 className="text-sand/70 text-xl font-semibold mb-4">Your Rights</h2>
        <p className="text-lg font-light mb-6">
          You may request access to, correction of, or deletion of your personal
          data by contacting us at{" "}
          <a
            href="mailto:info@sandboxstud.io"
            className="text-blue-400 underline"
          >
            info@sandboxstud.io
          </a>
          .
        </p>

        <h2 className="text-sand/70 text-xl font-semibold mb-4">Contact</h2>
        <p className="text-lg font-light">
          For any questions about this policy, email us at{" "}
          <a
            href="mailto:info@sandboxstud.io"
            className="text-blue-400 underline"
          >
            info@sandboxstud.io
          </a>
          .
        </p>
      </div>
    </PageLayout>
  );
};
export default Projects;
