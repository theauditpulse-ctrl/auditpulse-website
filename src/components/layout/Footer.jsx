function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-2xl font-bold">
          Audit Pulse
        </h2>

        <p className="mt-3 text-gray-300 max-w-xl">
          Compliance Made Simple. Growth Made Possible.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <p>📞 +91 90259 73127</p>
            <p>✉️ theauditpulse@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Working Hours</h3>

            <p>Mon–Fri : 9:00 AM – 6:00 PM</p>
            <p>Saturday : 9:00 AM – 2:00 PM</p>
            <p>Sunday : Closed</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Services</h3>

            <p>Income Tax</p>
            <p>GST</p>
            <p>Accounting</p>
            <p>Company Registration</p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2026 Audit Pulse. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;