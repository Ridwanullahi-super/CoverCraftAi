const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 dark:bg-gray-950 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <p>
            Welcome to CraftCoverAI! By accessing or using our services, you agree
            to comply with the following terms and conditions. These terms govern
            your use of our application, which utilizes Gemini AI technology to
            enhance functionality and user experience.
          </p>
        </div>
      </header>

      <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using CraftCoverAI, you acknowledge that you have read,
        understood, and agree to be bound by these Terms of Service. If you do
        not agree to these terms, you must refrain from using our services.
      </p>

      <h2 className="text-2xl font-semibold mb-3">2. Use of Services</h2>
      <p className="mb-4">
        You agree to use CraftCoverAI responsibly and in compliance with all
        applicable laws, regulations, and ethical guidelines. You must not
        misuse the Gemini AI-powered features or engage in activities that could
        harm the application, its users, or third parties.
      </p>

      <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
      <p className="mb-4">
        All content, features, and technology within CraftCoverAI, including
        those powered by Gemini AI, are protected by intellectual property laws.
        You may not reproduce, distribute, or modify any part of the application
        without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        4. Limitation of Liability
      </h2>
      <p className="mb-4">
        CraftCoverAI and its Gemini AI-powered features are provided as is
        without warranties of any kind. We are not liable for any damages
        arising from your use of the application, including but not limited to
        data loss or unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mb-3">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms of Service at any
        time. Continued use of CraftCoverAI after changes are made constitutes
        your acceptance of the revised terms.
      </p>
    </div>
  );
};

export default TermsOfService;
