import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Phone, Mail, MapPin, Clock3, MessageCircle } from "lucide-react";
console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({name:"",mobile:"",email:"",service:"",message:""});

  const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value});

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {name:form.name,mobile:form.mobile,email:form.email,service:form.service,message:form.message},
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Thank you! Your enquiry has been sent successfully.");
      setForm({name:"",mobile:"",email:"",service:"",message:""});
    } catch (err) {
  console.log("Full Error:", err);
  console.log("Status:", err.status);
  console.log("Text:", err.text);

  alert("Failed to send enquiry. Please try again.");
} finally {
  setLoading(false);
}
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">Contact Audit Pulse</span>
            <h1 className="mt-4 text-5xl font-bold text-[#0F3D91]">Let's Talk About Your Business</h1>
          </div>
        </section>
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-[#0F3D91]">Get in Touch</h2>
              <div className="mt-10 space-y-6">
                <div className="flex gap-3"><Phone/><p>+91 90259 73127</p></div>
                <div className="flex gap-3"><MessageCircle/><p>WhatsApp: +91 90259 73127</p></div>
                <div className="flex gap-3"><Mail/><p>theauditpulse@gmail.com</p></div>
                <div className="flex gap-3"><MapPin/><p>Chennai, Tamil Nadu</p></div>
                <div className="flex gap-3"><Clock3/><p>Mon–Fri 9 AM–6 PM</p></div>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input className="w-full rounded-xl border p-4" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
                <input className="w-full rounded-xl border p-4" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required />
                <input className="w-full rounded-xl border p-4" type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                <select className="w-full rounded-xl border p-4" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a Service</option>
                  <option>Income Tax Return Filing</option>
                  <option>GST Registration & Returns</option>
                  <option>Accounting & Bookkeeping</option>
                  <option>Business Registration</option>
                  <option>ROC Compliance</option>
                  <option>Business Advisory</option>
                  <option>Other</option>
                </select>
                <textarea className="w-full rounded-xl border p-4" rows="5" name="message" placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} required />
                <button type="submit" disabled={loading} className="w-full rounded-xl bg-[#0F3D91] py-4 font-semibold text-white disabled:opacity-60">
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
