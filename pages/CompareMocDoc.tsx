import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, XCircle, Minus, ArrowRight, Check,
  Users, Calendar, Globe, Star, Wallet, Calculator,
  Smartphone, Layout, Activity, Zap
} from 'lucide-react';
import { Button } from '../components/Button';

export const CompareMocDoc: React.FC = () => {
  // Calculator State: True Cost of Ownership
  const [mocDocBase, setMocDocBase] = useState(1500); // Est base cost
  const [websiteCost, setWebsiteCost] = useState(1000); // Est website hosting/maintenance
  const [smsCost, setSmsCost] = useState(500); // Est SMS pack costs often separate

  const totalMocDocStack = mocDocBase + websiteCost + smsCost;
  const clinexyCost = 999;
  const monthlySavings = totalMocDocStack - clinexyCost;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <span className="uppercase tracking-wider">Comparison Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Clinexy vs MocDoc: <br/>
            <span className="text-primary-600">Which Is Better for Solo Doctors?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            MocDoc is a known clinic management system in India, used by many clinics for basic operations. 
            But solo doctors today need more than scheduling and billing—they need fewer no-shows, patient ownership, and simple workflows.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Quick Comparison</h2>
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-6 text-sm font-bold uppercase tracking-wider">
              <div>Feature</div>
              <div className="text-center text-primary-300">Clinexy</div>
              <div className="text-center text-slate-400">MocDoc</div>
            </div>

            {[
              { feature: "Built specifically for solo doctors", clinexy: "Yes", mocdoc: "No (clinic-first)" },
              { feature: "Personal doctor website", clinexy: "Included", mocdoc: "Not included" },
              { feature: "WhatsApp reminders", clinexy: "Included", mocdoc: "Limited" },
              { feature: "Reviews & reputation tools", clinexy: "Included", mocdoc: "Not included" },
              { feature: "Patient ownership", clinexy: "Doctor-owned", mocdoc: "System-centric" },
              { feature: "Pricing model", clinexy: "Flat & affordable", mocdoc: "Tiered" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors py-5 px-6 items-center">
                <div className="font-semibold text-slate-900">{row.feature}</div>
                <div className="text-center font-bold text-primary-700 bg-primary-50 rounded py-1 mx-4">{row.clinexy}</div>
                <div className="text-center text-slate-500">{row.mocdoc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* True Cost Calculator */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-xl mb-4 text-blue-400">
               <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              True Cost of Ownership Calculator
            </h2>
            <p className="text-slate-400">
              To get everything Clinexy offers (Website + Reminders + Software), here is what you might pay with traditional clinic software.
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-300 mb-4 border-b border-slate-700 pb-2">Traditional Stack (MocDoc + Others)</h3>
                
                <div>
                   <label className="block text-sm text-slate-400 mb-1">Clinic Software Base Cost (₹)</label>
                   <input 
                     type="number" value={mocDocBase} 
                     onChange={(e) => setMocDocBase(Number(e.target.value))}
                     className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-white"
                   />
                </div>
                <div>
                   <label className="block text-sm text-slate-400 mb-1">Website Hosting & Domain (₹)</label>
                   <input 
                     type="number" value={websiteCost} 
                     onChange={(e) => setWebsiteCost(Number(e.target.value))}
                     className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-white"
                   />
                </div>
                <div>
                   <label className="block text-sm text-slate-400 mb-1">SMS/Notification Packs (₹)</label>
                   <input 
                     type="number" value={smsCost} 
                     onChange={(e) => setSmsCost(Number(e.target.value))}
                     className="w-full bg-slate-700 border border-slate-600 rounded-lg p-2 text-white"
                   />
                </div>
                
                <div className="pt-4 border-t border-slate-600 flex justify-between items-center text-red-300">
                   <span className="font-semibold">Est. Monthly Total</span>
                   <span className="text-2xl font-bold">₹{totalMocDocStack}</span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                 <div className="bg-primary-600 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary-500 px-3 py-1 text-xs font-bold uppercase rounded-bl-lg text-white">All Included</div>
                    <div className="text-primary-100 font-medium mb-1">Clinexy Solo Plan</div>
                    <div className="text-5xl font-bold text-white mb-4">₹{clinexyCost}</div>
                    <ul className="text-sm text-primary-100 space-y-2">
                       <li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Software & App</li>
                       <li className="flex gap-2"><CheckCircle className="h-4 w-4"/> Personal Website</li>
                       <li className="flex gap-2"><CheckCircle className="h-4 w-4"/> WhatsApp Reminders</li>
                    </ul>
                 </div>
                 
                 <div className="text-center">
                    <div className="text-slate-400 text-sm mb-1">Your Monthly Savings</div>
                    <div className="text-3xl font-bold text-green-400">₹{Math.max(0, monthlySavings)}</div>
                    <div className="text-slate-500 text-xs">That's ₹{Math.max(0, yearlySavings).toLocaleString()} per year!</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          
          {/* 1. Designed for Solo Doctors */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                <h2 className="text-2xl font-bold text-slate-900">Designed for Solo Doctors</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Solo doctors want speed and simplicity, not complexity."</p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">MocDoc</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Built for clinics with staff</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Multiple modules and workflows</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Can feel heavy for one-doctor practices</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <h3 className="text-primary-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Built specifically for solo doctors</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Clean, simple flows</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Minimal setup and learning curve</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Users className="h-64 w-64 text-slate-200" />
            </div>
          </div>

          {/* 2. Appointment Management */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="hidden md:flex justify-center">
              <Calendar className="h-64 w-64 text-slate-200" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold text-slate-900">Appointment Management & No-Shows</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Reducing no-shows directly improves clinic income."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">MocDoc</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Appointment scheduling available</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Limited automated patient reminders</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <h3 className="text-primary-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Online booking for patients</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> WhatsApp and email reminders included</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Easy rescheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Branding & Presence */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold text-slate-900">Doctor Branding & Online Presence</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Patients trust doctors they can easily find online."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">MocDoc</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-1 text-red-400" /> No personal doctor website</li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-1 text-red-400" /> No visibility or branding tools</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <h3 className="text-primary-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Personal doctor website included</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Online booking and patient login</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Google visibility support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Globe className="h-64 w-64 text-slate-200" />
            </div>
          </div>
          
           {/* 4. Reviews */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="hidden md:flex justify-center">
               <Star className="h-64 w-64 text-slate-200" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                <h2 className="text-2xl font-bold text-slate-900">Reviews & Patient Trust</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Strong reviews help patients choose you faster."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">MocDoc</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> No built-in review management</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <h3 className="text-primary-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Automatic review requests</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Reputation tracking</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Reviews displayed on doctor website</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Pricing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">5</div>
                <h2 className="text-2xl font-bold text-slate-900">Pricing & Value</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Solo doctors need predictable monthly costs."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">MocDoc</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Tiered pricing</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Costs increase with features</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
                  <h3 className="text-primary-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Simple flat pricing</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> ₹999/month for solo doctors</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> No commissions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Wallet className="h-64 w-64 text-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Which One Should You Choose?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-700 mb-6">Choose MocDoc if:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You run a multi-staff clinic
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You need extensive billing workflows
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
              <h3 className="text-xl font-bold text-primary-700 mb-6">Choose Clinexy if:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You are a solo doctor
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want simplicity, growth, and trust
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want affordable, transparent pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Clinexy Risk-Free</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Experience a clinic system built specifically for solo doctors.
          </p>
          <a href="https://rishabhkumar.clinexy.com/signup">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-slate-100 px-10 py-4 h-auto text-lg shadow-2xl">
              Start Your Free Trial
            </Button>
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
             <span className="flex items-center gap-2">14-day free trial</span>
             <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
             <span className="flex items-center gap-2">No credit card required</span>
             <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
             <span className="flex items-center gap-2">Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
};