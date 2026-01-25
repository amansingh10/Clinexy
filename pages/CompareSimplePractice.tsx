import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, XCircle, Minus, ArrowRight, Check,
  Users, Calendar, Globe, Star, Wallet, Calculator,
  TrendingUp, Shield, Layout, Zap, Smartphone, MapPin
} from 'lucide-react';
import { Button } from '../components/Button';

export const CompareSimplePractice: React.FC = () => {
  // Calculator State
  const [region, setRegion] = useState<'India' | 'Global'>('India');
  const [needsWebsite, setNeedsWebsite] = useState(true);
  const [needsTelehealth, setNeedsTelehealth] = useState(true);

  // Pricing Data
  const clinexyPrice = region === 'India' ? 999 : 99; // INR vs USD
  // SimplePractice pricing (Approx converted to INR for India comparison)
  // Starter: $29, Essential: $69, Plus: $99
  const spBasePriceUSD = 29;
  const spPlusPriceUSD = 99;
  
  const exchangeRate = 83; // Approx INR per USD

  // Calculate SimplePractice estimated cost based on needs
  let spEstimatedUSD = spBasePriceUSD;
  if (needsTelehealth || needsWebsite) {
    spEstimatedUSD = spPlusPriceUSD; // Features mostly in higher tiers
  }

  const spCost = region === 'India' ? spEstimatedUSD * exchangeRate : spEstimatedUSD;
  const clinexyFinalCost = clinexyPrice;
  
  const monthlySavings = spCost - clinexyFinalCost;
  const yearlySavings = monthlySavings * 12;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
             <span className="uppercase tracking-wider">Comparison Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Clinexy vs SimplePractice: <br/>
            <span className="text-teal-600">Which Fits Solo Doctors Better?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Both Clinexy and SimplePractice help manage appointments and patients. 
            But solo doctors are not running large clinics or therapy chains. 
            You need simple setup, low monthly cost, and control over your growth.
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
              <div className="text-center text-teal-300">Clinexy</div>
              <div className="text-center text-slate-400">SimplePractice</div>
            </div>

            {[
              { feature: "Built for solo doctors", clinexy: "Yes", sp: "No (therapy-first)" },
              { feature: "Pricing", clinexy: "Flat, affordable", sp: "Higher, tiered" },
              { feature: "Doctor personal website", clinexy: "Included", sp: "Limited" },
              { feature: "Marketing & growth tools", clinexy: "Included", sp: "Limited" },
              { feature: "Ease of setup", clinexy: "Very simple", sp: "Moderate" },
              { feature: "Global usability", clinexy: "Yes", sp: "Mostly US-focused" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors py-5 px-6 items-center">
                <div className="font-semibold text-slate-900">{row.feature}</div>
                <div className="text-center font-bold text-teal-700 bg-teal-50 rounded py-1 mx-4">{row.clinexy}</div>
                <div className="text-center text-slate-500">{row.sp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Value Calculator */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-teal-500/20 rounded-xl mb-4 text-teal-400">
               <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Value & Cost Calculator
            </h2>
            <p className="text-slate-400">
              See the price difference based on your location and needs.
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {/* Region Toggle */}
                <div className="bg-slate-700 p-1 rounded-lg inline-flex w-full">
                   <button 
                     onClick={() => setRegion('India')} 
                     className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${region === 'India' ? 'bg-teal-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}
                   >
                     🇮🇳 India
                   </button>
                   <button 
                     onClick={() => setRegion('Global')} 
                     className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${region === 'Global' ? 'bg-teal-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}
                   >
                     🌍 Global / Rest of World
                   </button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Select What You Need:</p>
                  
                  <label className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl border border-slate-600 cursor-pointer hover:bg-slate-700 transition-colors">
                    <span className="flex items-center gap-3">
                      <Layout className="h-5 w-5 text-teal-400" />
                      <span>Personal Doctor Website</span>
                    </span>
                    <div className={`w-6 h-6 rounded border flex items-center justify-center ${needsWebsite ? 'bg-teal-500 border-teal-500' : 'border-slate-500'}`}>
                      {needsWebsite && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={needsWebsite} onChange={() => setNeedsWebsite(!needsWebsite)} />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl border border-slate-600 cursor-pointer hover:bg-slate-700 transition-colors">
                    <span className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-teal-400" />
                      <span>Telehealth & Reminders</span>
                    </span>
                    <div className={`w-6 h-6 rounded border flex items-center justify-center ${needsTelehealth ? 'bg-teal-500 border-teal-500' : 'border-slate-500'}`}>
                      {needsTelehealth && <Check className="h-4 w-4 text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={needsTelehealth} onChange={() => setNeedsTelehealth(!needsTelehealth)} />
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                 {/* Cost Display */}
                 <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-600">
                       <div className="text-slate-400">SimplePractice Est.</div>
                       <div className="text-xl font-bold text-slate-300">
                         {region === 'India' ? '₹' : '$'}{Math.round(spCost).toLocaleString()} <span className="text-sm font-normal">/mo</span>
                       </div>
                    </div>
                    <div className="flex justify-between items-center">
                       <div className="text-white font-bold">Clinexy Cost</div>
                       <div className="text-2xl font-bold text-white">
                         {region === 'India' ? '₹' : '$'}{clinexyFinalCost} <span className="text-sm font-normal">/mo</span>
                       </div>
                    </div>
                 </div>

                 <div className="bg-teal-600 p-6 rounded-xl shadow-lg transform scale-105 text-center">
                    <div className="text-sm text-teal-100 font-bold uppercase tracking-wider mb-1">Your Yearly Savings</div>
                    <div className="text-4xl font-bold text-white">
                      {region === 'India' ? '₹' : '$'}{Math.max(0, Math.round(yearlySavings)).toLocaleString()}
                    </div>
                    <p className="text-xs text-teal-100 mt-2">
                      {region === 'India' 
                        ? "US pricing doesn't work for Indian clinics. Clinexy does."
                        : "Get more features for a simple flat price."
                      }
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Points */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          
          {/* 1. Pricing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                <h2 className="text-2xl font-bold text-slate-900">Pricing & Affordability</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Solo doctors prefer predictable, affordable pricing."</p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">SimplePractice</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Higher monthly pricing</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Multiple plans and add-ons</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Costs increase as features are added</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm">
                  <h3 className="text-teal-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> One clear plan</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Flat monthly pricing</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> No add-ons required</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Wallet className="h-64 w-64 text-slate-200" />
            </div>
          </div>

          {/* 2. Ease of Use */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="hidden md:flex justify-center">
              <Smartphone className="h-64 w-64 text-slate-200" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold text-slate-900">Ease of Use for Solo Doctors</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"You should spend time with patients, not software."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">SimplePractice</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Designed primarily for therapists</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> More configuration and setup</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Learning curve for non-therapy use cases</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm">
                  <h3 className="text-teal-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Built for everyday solo doctor workflows</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Simple screens and flows</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Works naturally with WhatsApp reminders</li>
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
                <h2 className="text-2xl font-bold text-slate-900">Personal Branding & Online Presence</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Patients trust doctors they can recognise and find online easily."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">SimplePractice</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Limited focus on doctor branding</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Website features are basic</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm">
                  <h3 className="text-teal-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Full personal doctor website included</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Online booking and patient login</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Reviews and reputation support</li>
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
                <h2 className="text-2xl font-bold text-slate-900">Growth Without Marketing Complexity</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Solo doctors want growth without marketing stress."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">SimplePractice</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Strong on administration</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Limited built-in growth features</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm">
                  <h3 className="text-teal-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Built-in visibility and trust tools</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Patient recall and follow-ups</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Growth without running ads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* 5. Global Fit */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">5</div>
                <h2 className="text-2xl font-bold text-slate-900">Global Fit for Solo Doctors</h2>
              </div>
              <p className="text-slate-600 mb-6 font-medium italic">"Clinexy adapts to how solo doctors work worldwide."</p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-500 font-bold mb-3">SimplePractice</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Best suited for US-based practices</li>
                    <li className="flex items-start gap-2"><Minus className="h-4 w-4 mt-1" /> Compliance-heavy setup (HIPAA focus)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-sm">
                  <h3 className="text-teal-700 font-bold mb-3">Clinexy</h3>
                  <ul className="space-y-2 text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Works globally</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Localised pricing (e.g. India)</li>
                    <li className="flex items-start gap-2"><Check className="h-4 w-4 mt-1 text-green-500" /> Simple onboarding across regions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Globe className="h-64 w-64 text-slate-200" />
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
              <h3 className="text-xl font-bold text-slate-700 mb-6">Choose SimplePractice if:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You run a therapy-focused practice in the US
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-5 w-5 text-slate-400" /> You need deep US insurance compliance workflows
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
              <h3 className="text-xl font-bold text-teal-700 mb-6">Choose Clinexy if:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You are a solo doctor (Medical/Specialist)
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want simplicity and affordability
                </li>
                <li className="flex items-center gap-3 text-slate-800 font-medium">
                  <CheckCircle className="h-5 w-5 text-green-500" /> You want patient ownership and growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Clinexy Risk-Free</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
            Experience a simpler way to manage and grow your practice.
          </p>
          <Link to="/free-trial">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-slate-100 px-10 py-4 h-auto text-lg shadow-2xl">
              Start Your Free Trial
            </Button>
          </Link>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-teal-200 text-sm">
             <span className="flex items-center gap-2">14-day free trial</span>
             <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
             <span className="flex items-center gap-2">No credit card required</span>
             <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
             <span className="flex items-center gap-2">Cancel anytime</span>
          </div>
        </div>
      </section>
    </div>
  );
};