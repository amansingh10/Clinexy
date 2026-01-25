import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Search, Layout, MousePointerClick, 
  Smartphone, UserCheck, Server, Shield, 
  CheckCircle, ArrowRight, Zap, DollarSign, Calculator
} from 'lucide-react';
import { Button } from '../components/Button';

export const FeaturesDoctorWebsite: React.FC = () => {
  // Calculator State
  const [appointmentsPerMonth, setAppointmentsPerMonth] = useState(100);
  const [consultFee, setConsultFee] = useState(500);
  const [marketplaceCommission, setMarketplaceCommission] = useState(15); // Percentage

  const totalRevenue = appointmentsPerMonth * consultFee;
  const commissionPaid = totalRevenue * (marketplaceCommission / 100);
  const yearlySavings = commissionPaid * 12;

  const features = [
    {
      title: "Your Website, Not a Marketplace Profile",
      desc: "Most platforms show your profile next to other doctors. Clinexy is different.",
      points: [
        "You get your own doctor website, focused only on you",
        "Your name and credentials",
        "Your consultation approach",
        "Your appointment booking system"
      ],
      result: "Patients focus on you, not comparisons.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Everything Patients Need, in One Place",
      desc: "Your Clinexy website works as your digital clinic front desk.",
      points: [
        "Online appointment booking",
        "Clinic location and map",
        "Consultation timings",
        "Patient login for prescriptions and reports",
        "Teleconsultation access"
      ],
      result: "Fewer questions, fewer calls, smoother bookings.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Built to Convert Visitors Into Appointments",
      desc: "Clinexy doctor websites are designed to help patients take action.",
      points: [
        "Clear appointment buttons",
        "Simple booking flow",
        "Mobile-friendly design",
        "Fast loading pages"
      ],
      result: "More direct bookings without follow-ups.",
      icon: MousePointerClick,
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Patient Login for Ongoing Care",
      desc: "Your website is not just for new patients.",
      points: [
        "Existing patients can log in securely",
        "View appointment history",
        "Download prescriptions",
        "Upload reports"
      ],
      result: "Better patient experience and fewer repeat requests.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Globe className="h-4 w-4" />
            <span>Your Digital Clinic Identity</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            Personal Website for Doctors <br/>
            <span className="text-blue-600">That Builds Trust & Bookings</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Patients Search Your Name Before They Visit. Clinexy gives you a professional personal doctor website that builds trust and converts searches into appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rishabhkumar.clinexy.com/signup">
              <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 shadow-blue-200">Start Free Trial</Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* The Search Reality */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">When patients hear about you, the first thing they do is search your name.</h2>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-inner">
            <p className="text-lg text-slate-600 mb-6">What they see in those few seconds decides whether they:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-3">
                  <Smartphone className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-800">Call your clinic</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center ring-2 ring-blue-500 ring-offset-2">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                  <MousePointerClick className="h-5 w-5" />
                </div>
                <span className="font-bold text-slate-800">Book an appointment</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center opacity-60">
                <div className="w-10 h-10 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-3">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <span className="font-medium text-slate-500">Move on to another</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="flex-1">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-6">
                       <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-slate-600 mb-6">{feature.desc}</p>
                    <ul className="space-y-3 mb-6">
                       {feature.points.map((pt, pIdx) => (
                         <li key={pIdx} className="flex items-start gap-3 text-slate-700">
                           <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                           <span>{pt}</span>
                         </li>
                       ))}
                    </ul>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                       <p className="font-bold text-slate-800">Result: {feature.result}</p>
                    </div>
                 </div>
                 <div className="flex-1 w-full">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="rounded-2xl shadow-xl w-full h-[350px] object-cover border-4 border-white transform hover:scale-[1.02] transition-transform duration-500" 
                    />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Calculator */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-xl mb-4 text-blue-400">
               <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Direct Booking Savings Calculator
            </h2>
            <p className="text-slate-400">
              Calculate how much you save by owning your website instead of paying commissions to marketplaces.
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Appointments Per Month: <span className="text-blue-400 font-bold text-lg">{appointmentsPerMonth}</span>
                  </label>
                  <input 
                    type="range" min="10" max="500" 
                    value={appointmentsPerMonth}
                    onChange={(e) => setAppointmentsPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Avg Consultation Fee: <span className="text-green-400 font-bold text-lg">${consultFee}</span>
                  </label>
                  <input 
                    type="number" 
                    value={consultFee}
                    onChange={(e) => setConsultFee(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Typical Marketplace Commission: <span className="text-red-400 font-bold text-lg">{marketplaceCommission}%</span>
                  </label>
                  <input 
                    type="range" min="0" max="40" 
                    value={marketplaceCommission}
                    onChange={(e) => setMarketplaceCommission(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center bg-blue-900/30 rounded-2xl p-8 border border-blue-500/30 text-center">
                 <div className="mb-6">
                    <div className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Commission Saved Per Month</div>
                    <div className="text-4xl font-bold text-white">${Math.round(commissionPaid).toLocaleString()}</div>
                 </div>
                 <div>
                    <div className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">Commission Saved Per Year</div>
                    <div className="text-5xl font-bold text-green-400">${Math.round(yearlySavings).toLocaleString()}</div>
                 </div>
                 <p className="text-xs text-slate-400 mt-6">
                   With Clinexy, you pay $0 commission. You keep 100% of your fee.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Technical */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Search-Friendly & Google-Ready</h2>
              <p className="text-slate-600 mb-6">
                Your website is optimised so patients can find you easily.
              </p>
              <ul className="space-y-4">
                {[
                  "SEO-friendly structure",
                  "Google indexing",
                  "Accurate clinic information",
                  "Better visibility when patients search for doctors like you"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-blue-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Image Without Technical Work</h2>
              <p className="text-slate-600 mb-6">
                You don’t need to manage hosting, design, or updates.
              </p>
              <ul className="space-y-4">
                {[
                  "Clinexy handles Setup & Maintenance",
                  "Security included",
                  "Automatic updates",
                  "A professional online presence with zero effort from you"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-blue-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-10">Why Solo Doctors Prefer Clinexy Websites</h2>
           <div className="grid sm:grid-cols-2 gap-6">
              {[
                "No ads or competitor listings",
                "No commissions",
                "Full control over your profile",
                "Works seamlessly with appointments"
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 font-bold text-slate-700 flex items-center justify-center gap-3">
                   <CheckCircle className="h-5 w-5 text-blue-500" />
                   {item}
                </div>
              ))}
           </div>
           <p className="mt-8 text-slate-600 italic">"Your website supports your practice instead of competing with it."</p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block p-4 rounded-full bg-yellow-100 mb-6">
               <Zap className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Included in the Solo Doctor Plan</h2>
            <p className="text-slate-600 text-lg">Your personal doctor website is included. No extra charges. No hidden fees.</p>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Ready to Be Found & Trusted Online?</h2>
           <p className="text-blue-100 text-lg mb-8">
             Your clinic deserves a professional online presence.
           </p>
           <a href="https://rishabhkumar.clinexy.com/signup">
             <Button size="lg" className="bg-white text-blue-800 hover:bg-slate-100 px-10">Start Your Free Trial</Button>
           </a>
           <p className="mt-4 text-sm text-blue-200">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};