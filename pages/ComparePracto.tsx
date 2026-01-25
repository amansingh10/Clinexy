import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, XCircle, Minus, ArrowRight, Check,
  Users, Calendar, Globe, Star, Wallet, Calculator,
  TrendingUp, Shield, Lock, Layout, Zap
} from 'lucide-react';
import { Button } from '../components/Button';

export const ComparePracto: React.FC = () => {
  // Calculator State
  const [appointments, setAppointments] = useState(60);
  const [fee, setFee] = useState(500);
  const [practoCommission, setPractoCommission] = useState(20); // Estimated %

  const practoCost = (appointments * fee * practoCommission) / 100;
  const clinexyCost = 999; // Standard India pricing
  const monthlySavings = practoCost - clinexyCost;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
             <span className="uppercase tracking-wider">Comparison Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Clinexy vs Practo: <br/>
            <span className="text-indigo-600">Which Is Better for Solo Doctors?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Both Clinexy and Practo help patients book appointments. But solo doctors don’t just need bookings—they need control, ownership, and predictable income without commissions.
          </p>
        </div>
      </section>

      {/* Quick Overview Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Quick Overview</h2>
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-900 text-white p-6 text-sm font-bold uppercase tracking-wider">
              <div>Feature</div>
              <div className="text-center text-indigo-300">Clinexy</div>
              <div className="text-center text-slate-400">Practo</div>
            </div>

            {[
              { feature: "Built for solo doctors", clinexy: "Yes", practo: "No (marketplace-first)" },
              { feature: "Commission on appointments", clinexy: "No", practo: "Yes" },
              { feature: "Doctor-owned website", clinexy: "Yes", practo: "No" },
              { feature: "Patient ownership", clinexy: "Doctor-owned", practo: "Platform-owned" },
              { feature: "Competing doctors shown", clinexy: "No", practo: "Yes" },
              { feature: "Growth & branding tools", clinexy: "Included", practo: "Limited" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors py-5 px-6 items-center">
                <div className="font-semibold text-slate-900">{row.feature}</div>
                <div className="text-center font-bold text-indigo-700 bg-indigo-50 rounded py-1 mx-4">{row.clinexy}</div>
                <div className="text-center text-slate-500">{row.practo}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-xl mb-4 text-indigo-400">
               <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Commission vs Subscription Calculator
            </h2>
            <p className="text-slate-400">
              See how much you could save by switching to a flat monthly fee.
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Monthly Appointments: <span className="text-indigo-400 font-bold text-lg">{appointments}</span>
                  </label>
                  <input 
                    type="range" min="10" max="300" 
                    value={appointments}
                    onChange={(e) => setAppointments(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Avg Fee (₹): <span className="text-green-400 font-bold text-lg">₹{fee}</span>
                  </label>
                  <input 
                    type="number" 
                    value={fee}
                    onChange={(e) => setFee(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Marketplace Commission: <span className="text-red-400 font-bold text-lg">{practoCommission}%</span>
                  </label>
                  <input 
                    type="range" min="0" max="40" 
                    value={practoCommission}
                    onChange={(e) => setPractoCommission(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                 <div className="flex justify-between items-center p-4 bg-slate-700 rounded-xl border border-slate-600">
                    <div className="text-sm text-slate-400">Practo Cost/Mo</div>
                    <div className="text-xl font-bold text-red-400">₹{Math.round(practoCost).toLocaleString()}</div>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-slate-700 rounded-xl border border-slate-600">
                    <div className="text-sm text-slate-400">Clinexy Cost/Mo</div>
                    <div className="text-xl font-bold text-white">₹{clinexyCost}</div>
                 </div>
                 <div className="bg-indigo-600 p-6 rounded-xl shadow-lg transform scale-105 text-center">
                    <div className="text-sm text-indigo-200 font-bold uppercase tracking-wider mb-1">Yearly Savings</div>
                    <div className="text-4xl font-bold text-white">₹{Math.max(0, Math.round(yearlySavings)).toLocaleString()}</div>
                    <p className="text-xs text-indigo-200 mt-2">More patients = More income for you.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          
          {/* 1. Ownership */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                <h2 className="text-2xl font-bold text-slate-900">Ownership of Patients</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Ownership builds long-term practice value."</p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">Practo</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Patients book through Practo app/site</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Patient data belongs to the platform</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Patients are shown multiple doctors</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm relative">
                  <h3 className="text-indigo-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Patients book directly with you</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> You own your patient data</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> No competing doctor listings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Users className="h-64 w-64 text-slate-200" />
            </div>
          </div>

          {/* 2. Pricing */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="hidden md:flex justify-center">
              <Wallet className="h-64 w-64 text-slate-200" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold text-slate-900">Pricing & Commissions</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"More patients should mean more income—not higher platform fees."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">Practo</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Charges commission per booking</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Costs increase as bookings increase</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                  <h3 className="text-indigo-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Flat monthly fee</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> No commissions, ever</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Keep 100% of your revenue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Branding */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold text-slate-900">Doctor Branding & Trust</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Patients remember doctors, not platforms."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">Practo</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Profile looks similar to other doctors</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Platform brand comes first</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                  <h3 className="text-indigo-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Your own personal doctor website</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Your brand, credentials, and reviews</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Layout className="h-64 w-64 text-slate-200" />
            </div>
          </div>

          {/* 4. Growth */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="hidden md:flex justify-center">
               <TrendingUp className="h-64 w-64 text-slate-200" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                <h2 className="text-2xl font-bold text-slate-900">Growth Without Competition</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Growth without competition is sustainable growth."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">Practo</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Patients see alternatives immediately</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Price and availability comparisons</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                  <h3 className="text-indigo-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> No competitor ads or suggestions</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Focus stays entirely on your practice</li>
                  </ul>
                </div>
              </div>
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
              <h3 className="text-xl font-bold text-slate-700 mb-6">Choose Practo if:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You want quick visibility on a marketplace
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You are okay with commissions
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You don't mind competition on your profile
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-700 mb-6">Choose Clinexy if:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want long-term patient ownership
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want predictable income
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want a personal digital clinic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Clinexy Without Risk</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Switching doesn’t have to be complicated.
          </p>
          <a href="https://rishabhkumar.clinexy.com/signup">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 px-10 py-4 h-auto text-lg shadow-2xl">
              Start Your Free Trial
            </Button>
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-indigo-200 text-sm">
             <span className="flex items-center gap-2">14-day free trial</span>
             <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
             <span className="flex items-center gap-2">No credit card required</span>
             <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
             <span className="flex items-center gap-2">No lock-in</span>
          </div>
        </div>
      </section>
    </div>
  );
};