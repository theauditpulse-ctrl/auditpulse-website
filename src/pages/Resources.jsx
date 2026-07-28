import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { BookOpen, Receipt, Landmark, Calculator, Briefcase, Download } from "lucide-react";

const categories=[
{icon:Receipt,title:"Income Tax",desc:"Guides, tax planning and return filing."},
{icon:Calculator,title:"GST",desc:"Registration, returns and compliance."},
{icon:BookOpen,title:"Accounting",desc:"Bookkeeping and financial reporting."},
{icon:Landmark,title:"Company Law",desc:"ROC and corporate compliance."},
{icon:Briefcase,title:"Business Advisory",desc:"Practical growth and finance advice."},
];

const articles=[
"Income Tax Return Filing Guide",
"GST Registration Process",
"Tax Saving Checklist",
"ROC Annual Filing Guide",
"Startup Compliance Checklist",
"Accounting Basics for Small Businesses"
];

function Resources(){
return(
<>
<Header/>
<main>
<section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
<div className="mx-auto max-w-7xl px-6 text-center">
<span className="font-semibold uppercase tracking-widest text-[#FF8C00]">Knowledge Centre</span>
<h1 className="mt-4 text-5xl font-bold text-[#0F3D91] lg:text-6xl">Resources & Insights</h1>
<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
Useful guides, compliance updates and practical articles to help individuals and businesses stay informed.
</p>
</div>
</section>

<section className="bg-white py-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-4xl font-bold text-[#0F3D91] text-center">Featured Categories</h2>
<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{categories.map(c=>{
const Icon=c.icon;
return(
<div key={c.title} className="rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition">
<Icon className="text-[#0F3D91]" size={38}/>
<h3 className="mt-5 text-2xl font-semibold text-[#0F3D91]">{c.title}</h3>
<p className="mt-3 text-gray-600">{c.desc}</p>
</div>);
})}
</div>
</div>
</section>

<section className="bg-slate-50 py-20">
<div className="mx-auto max-w-7xl px-6">
<h2 className="text-4xl font-bold text-[#0F3D91] text-center">Featured Guides</h2>
<div className="mt-12 grid gap-6 md:grid-cols-2">
{articles.map(a=>(
<div key={a} className="rounded-xl bg-white p-6 shadow">
<h3 className="font-semibold text-[#0F3D91]">{a}</h3>
<p className="mt-2 text-gray-600">Coming soon. This guide will provide practical information and compliance tips.</p>
</div>
))}
</div>
</div>
</section>

<section className="bg-white py-20">
<div className="mx-auto max-w-7xl px-6 text-center">
<Download className="mx-auto text-[#FF8C00]" size={48}/>
<h2 className="mt-6 text-4xl font-bold text-[#0F3D91]">Download Centre</h2>
<p className="mt-4 text-gray-600">Tax checklists, compliance calendars and useful templates will be available here soon.</p>
<a href="/contact" className="mt-8 inline-block rounded-xl bg-[#0F3D91] px-8 py-4 font-semibold text-white hover:bg-blue-900">Request Professional Assistance</a>
</div>
</section>
</main>
<Footer/>
</>
);}
export default Resources;
