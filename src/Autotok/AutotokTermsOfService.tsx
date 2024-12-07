const AutotokTermsOfService = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Please read these Terms of Service ("Terms") carefully before using
        Autotok ("the Application"). By using the Application, you agree to be
        bound by these Terms.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. License</h2>
        <p className="mb-2">
          The Application is provided to you under a limited, non-exclusive,
          non-transferable license for personal or business use. You may not
          modify, distribute, or reverse engineer the Application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Restrictions</h2>
        <ul className="list-disc pl-6">
          <li>
            You agree not to attempt to modify, decompile, disassemble, or
            reverse-engineer the Application.
          </li>
          <li>
            Unauthorized reproduction, duplication, or distribution of the
            Application, in whole or in part, is strictly prohibited.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Handling</h2>
        <p className="mb-2">
          The Application is designed to store all data locally on your device.
          Ellsoft is not responsible for managing or safeguarding your locally
          stored data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Updates</h2>
        <p className="mb-2">
          Ellsoft may release updates to improve functionality, security, or
          performance. It is your responsibility to ensure that the latest
          version is installed on your device to maintain optimal operation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Warranty Disclaimer</h2>
        <p className="mb-2">
          The Application is provided "as is" without any warranties, express or
          implied, including but not limited to fitness for a particular purpose
          or non-infringement. Ellsoft does not guarantee the uninterrupted or
          error-free operation of the Application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Limitation of Liability
        </h2>
        <p className="mb-2">
          In no event shall Ellsoft be liable for any direct, indirect,
          incidental, or consequential damages arising out of your use of the
          Application, including loss of data stored locally on your device.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
        <p className="mb-2">
          Ellsoft reserves the right to terminate your license to use the
          Application at any time if you violate these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
        <p>If you have questions about these Terms, please contact us at:</p>
        <ul className="list-disc pl-6">
          <li>
            Email: <a href="mailto:support@ellsoft.app">support@ellsoft.app</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AutotokTermsOfService;
