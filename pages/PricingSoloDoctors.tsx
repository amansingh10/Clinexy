import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Calendar, Video, Users, Layout, Star, TrendingUp, 
  HelpCircle, Zap, Calculator, ArrowRight, Shield, Globe, MapPin,
  Check, X
} from 'lucide-react';
import { Button } from '../components/Button';

export const PricingSoloDoctors: React.FC = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [appointments, setAppointments] = useState(30);
  const [fee, setFee] = useState(currency === 'INR' ? 500 : 50);
  const [commission, setCommission] = useState(20);

  const clinexyCost = currency === 'INR' ? 999 : 99;
  const platformCost = (appointments * fee * commission) / 100;
  const monthlySavings = platformCost - clinexyCost;
  const yearlySavings = monthlySavings * 12;

  const featuresList = [
    {
      title: "Appointments & Reminders",
      icon: Calendar,
      items: [
        "Online appointment booking",
        "Appointment approval & rescheduling",
        "Clinic-wise availability & slot management",
        "WhatsApp and email reminders",
        "Reduced patient no-shows"
      ]
    },
    {
      title: "Teleconsultation & Digital Prescriptions",
      icon: Video,
      items: [
        "Video consultations (Google Meet)",
        "Digital prescriptions with vitals & diagnosis",
        "Downloadable PDF prescriptions",
        "Secure access for patients"
      ]
    },
    {
      title: "Patient Management",
      icon: Users,
      items: [
        "Patient login & appointment history",
        "Secure document & report uploads",
        "Access to past prescriptions",
        "Organised patient records"
      ]
    },
    {
      title: "Personal Doctor Website",
      icon: Layout,
      items: [
        "Your own doctor website (not a marketplace profile)",
        "Online booking built-in",
        "Clinic details, timings & location map",
        "Patient login for prescriptions & reports",
        "Mobile-friendly & SEO-ready"
      ]
    },
    {
      title: "Reviews & Reputation",
      icon: Star,
      items: [
        "Automatic review requests",
        "Google review integration",
        "Patient feedback tracking",
        "Display reviews on your website"
      ]
    },
    {
      title: "Doctor Branding & Growth",
      icon: TrendingUp,
      items: [
        "Build your personal doctor brand",
        "Improve online visibility",
        "Patient follow-up & recall reminders",
        "Growth without marketing effort"
      ]
    }
  ];

  const faqs = [
    {
      q: "Is the pricing really the same worldwide?",
      a: "Yes. Clinexy uses a simple global pricing model. Pricing is shown in INR for India and USD for the rest of the world."
    },
    {
      q: "Are there any setup fees?",
      a: "No. There are no setup fees."
    },
    {
      q: "Do you take a commission on appointments?",
      a: "No. Clinexy never takes commissions. You keep 100% of your consultation fees."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. You can cancel your subscription anytime."
    },
    {
      q: "Is support included?",
      a: "Yes. Support is included for all customers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            One Plan. <br/><span className="text-primary-600">Everything a Solo Doctor Needs.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Solo doctors don’t want complicated pricing, hidden charges, or commissions. 
            Clinexy offers one clear plan, designed specifically for independent doctors—whether you practice in India or anywhere else in the world.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative z-10">
            <div className="bg-slate-900 text-white p-6 text-center">
              <h2 className="text-2xl font-bold tracking-wide">Solo Doctor Plan</h2>
            </div>
            
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* India Pricing */}
              <div className="p-10 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 mb-6">
                  <span className="text-lg">🇮🇳</span> India Pricing
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-slate-900">₹999</span>
                  <span className="text-slate-500 font-medium">/ month</span>
                </div>
                <p className="text-sm text-slate-500 mb-8">(Billed monthly)</p>
                <a href="https://rishabhkumar.clinexy.com/signup">
                  <Button className="w-full">Start Free Trial</Button>
                </a>
              </div>

              {/* Global Pricing */}
              <div className="p-10 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 mb-6">
                  <span className="text-lg">🌍</span> Global Pricing
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-slate-900">$99</span>
                  <span className="text-slate-500 font-medium">/ month</span>
                </div>
                <p className="text-sm text-slate-500 mb-8">(Billed monthly)</p>
                <a href="https://rishabhkumar.clinexy.com/signup">
                  <Button variant="outline" className="w-full">Start Free Trial</Button>
                </a>
              </div>
            </div>

            <div className="bg-green-50 p-4 text-center border-t border-green-100">
              <p className="text-green-800 font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                No commissions • No hidden fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 bg-slate-900 text-white">
         <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center p-3 bg-primary-500/20 rounded-xl mb-4 text-primary-400">
               <Calculator className="h-8 w-8" />
             </div>
             <h2 className="text-3xl font-bold mb-4">Commission Savings Calculator</h2>
             <p className="text-slate-400">
               See how much you save by using Clinexy vs. commission-based platforms.
             </p>
           </div>
           
           <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
             <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <div className="flex bg-slate-700 rounded-lg p-1 w-fit mb-4">
                      <button onClick={() => setCurrency('INR')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${currency === 'INR' ? 'bg-primary-600 text-white' : 'text-slate-300 hover:text-white'}`}>INR (₹)</button>
                      <button onClick={() => setCurrency('USD')} className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${currency === 'USD' ? 'bg-primary-600 text-white' : 'text-slate-300 hover:text-white'}`}>USD ($)</button>
                   </div>
                   
                   <div>
                      <label className="block text-sm text-slate-400 mb-2">Monthly Appointments (Online)</label>
                      <input type="range" min="10" max="200" value={appointments} onChange={(e) => setAppointments(Number(e.target.value))} className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-primary-500" />
                      <div className="text-right text-primary-400 font-bold mt-1">{appointments}</div>
                   </div>

                   <div>
                      <label className="block text-sm text-slate-400 mb-2">Avg Fee per Consultation</label>
                      <div className="relative">
                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{currency === 'INR' ? '₹' : '$'}</span>
                         <input type="number" value={fee} onChange={(e) => setFee(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg py-2 pl-8 pr-4 text-white" />
                      </div>
                   </div>

                   <div>
                      <label className="block text-sm text-slate-400 mb-2">Platform Commission</label>
                      <div className="flex items-center gap-4">
                        <input type="range" min="0" max="50" value={commission} onChange={(e) => setCommission(Number(e.target.value))} className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-red-500" />
                        <span className="text-red-400 font-bold w-12">{commission}%</span>
                      </div>
                   </div>
                </div>

                <div className="flex flex-col justify-center gap-4">
                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                      <div className="text-sm text-slate-400 mb-1">Platform Cost per Month</div>
                      <div className="text-2xl font-bold text-red-400">
                        {currency === 'INR' ? '₹' : '$'}{Math.round(platformCost).toLocaleString()}
                      </div>
                   </div>
                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                      <div className="text-sm text-slate-400 mb-1">Clinexy Cost per Month</div>
                      <div className="text-2xl font-bold text-white">
                        {currency === 'INR' ? '₹' : '$'}{clinexyCost}
                      </div>
                   </div>
                   <div className="bg-primary-600 p-6 rounded-xl shadow-lg transform scale-105">
                      <div className="text-sm text-primary-200 mb-1 font-bold uppercase tracking-wider">Your Monthly Savings</div>
                      <div className="text-4xl font-bold text-white">
                        {currency === 'INR' ? '₹' : '$'}{Math.max(0, Math.round(monthlySavings)).toLocaleString()}
                      </div>
                      <div className="text-xs text-primary-200 mt-2">
                        Save <span className="font-bold text-white">{currency === 'INR' ? '₹' : '$'}{Math.max(0, Math.round(yearlySavings)).toLocaleString()}</span> per year!
                      </div>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What’s Included in the Solo Doctor Plan</h2>
            <p className="text-lg text-slate-600">Everything you need to manage, consult, and grow your clinic.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why This Pricing Works for Solo Doctors</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Costs less than one missed appointment",
                "No commission on bookings",
                "No dependency on marketplaces",
                "No need to hire marketing agencies"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-300 italic text-lg">
              "Clinexy pays for itself by saving time and reducing no-shows."
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Compare With Other Options</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200 text-sm font-bold text-slate-500 uppercase tracking-wider">
              <div className="p-4">Option</div>
              <div className="p-4">What You Pay</div>
              <div className="p-4">What You Get</div>
            </div>

            <div className="grid grid-cols-3 border-b border-slate-100 items-center">
              <div className="p-6 font-semibold text-slate-900">Marketplace Platforms</div>
              <div className="p-6 text-red-600 font-medium">Commission per booking</div>
              <div className="p-6 text-slate-600">Patient ownership lost</div>
            </div>

            <div className="grid grid-cols-3 border-b border-slate-100 items-center bg-slate-50/50">
              <div className="p-6 font-semibold text-slate-900">Multiple Tools</div>
              <div className="p-6 text-red-600 font-medium">High monthly cost</div>
              <div className="p-6 text-slate-600">Fragmented systems</div>
            </div>

            <div className="grid grid-cols-3 bg-primary-50 items-center relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600"></div>
              <div className="p-6 font-bold text-primary-900">Clinexy</div>
              <div className="p-6 text-primary-700 font-bold">₹999 / $99 flat</div>
              <div className="p-6 text-primary-800 font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                All-in-one digital clinic
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Mini-Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block p-4 rounded-full bg-green-100 text-green-600 mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Free Trial – No Risk</h2>
          <p className="text-lg text-slate-600 mb-8">Try Clinexy before you commit.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-700 font-medium">
             <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> 14-day free trial</span>
             <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> No credit card required</span>
             <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Full access to all features</span>
          </div>
          <a href="https://rishabhkumar.clinexy.com/signup">
            <Button size="lg" className="px-8 shadow-xl shadow-primary-500/20">Start Free Trial</Button>
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-primary-200 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary-500 mt-1 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Clinic?</h2>
          <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
            Your clinic doesn’t need more tools. It needs one system that just works.
          </p>
          <a href="https://rishabhkumar.clinexy.com/signup">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-slate-100 px-10 py-4 h-auto text-lg shadow-2xl">
              Start Your Free Trial
            </Button>
          </a>
          <p className="mt-6 text-sm text-primary-200 font-medium">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};