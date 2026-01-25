import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MegaphoneOff, Star, Globe, RefreshCcw, Layout, 
  CheckCircle, XCircle, TrendingUp, Shield, ArrowRight,
  Zap, Award
} from 'lucide-react';
import { Button } from '../components/Button';

export const FeaturesDoctorBranding: React.FC = () => {
  const challenges = [
    "Depend on word-of-mouth, but can’t scale it",
    "Are listed on platforms that promote other doctors next to them",
    "Have low or unmanaged Google reviews",
    "Know visibility matters, but don’t have time to post or promote",
    "Want growth, not marketing work"
  ];

  const features = [
    {
      title: "Your Personal Doctor Website",
      subtitle: "Foundation of Trust",
      desc: "Every Clinexy doctor gets a personal doctor website.",
      points: [
        "Your name and credentials",
        "Your clinic details and timings",
        "Online appointment booking",
        "Patient login and prescriptions",
        "Mobile-friendly and SEO-ready"
      ],
      impact: "Patients search your name on Google. Your website builds confidence before they book.",
      icon: Layout
    },
    {
      title: "Google Visibility That Works in the Background",
      subtitle: "Visibility",
      desc: "Clinexy helps your clinic stay visible where patients actually search.",
      points: [
        "Google profile optimisation",
        "Accurate clinic information",
        "Consistent presence"
      ],
      impact: "Doctors with strong Google visibility get more calls and bookings.",
      icon: Globe
    },
    {
      title: "Reviews That Build Instant Trust",
      subtitle: "Instant Trust",
      desc: "Patients trust other patients. Clinexy helps you:",
      points: [
        "Automatically request reviews after visits",
        "Collect genuine feedback",
        "Display reviews on your website"
      ],
      impact: "Doctors with more positive reviews are chosen faster.",
      icon: Star
    },
    {
      title: "Patient Recall & Repeat Visits",
      subtitle: "Retention",
      desc: "Growth doesn’t only come from new patients. Clinexy helps you stay connected with existing patients through:",
      points: [
        "Follow-up reminders",
        "Recall for check-ups",
        "Ongoing patient relationships"
      ],
      impact: "Repeat patients are easier, faster, and more reliable.",
      icon: RefreshCcw
    },
    {
      title: "Social Proof Without Social Media Effort",
      subtitle: "Credibility",
      desc: "You don’t need to be active on social media to look credible. Clinexy creates social proof through:",
      points: [
        "Reviews",
        "A professional website",
        "Consistent patient communication"
      ],
      impact: "Your clinic looks active, trusted, and professional—even if you never post.",
      icon: Shield
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-blue-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <MegaphoneOff className="h-4 w-4" />
            <span>Grow Your Practice Without Doing Marketing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            Doctor Branding & Clinic Growth <br/>
            <span className="text-indigo-600">Software for Solo Doctors</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            As a solo doctor, your reputation matters more than advertising. Patients choose doctors they recognise, trust, and feel confident about. Clinexy helps you build that trust automatically—without learning marketing, hiring agencies, or spending time on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rishabhkumar.clinexy.com/signup">
              <Button size="lg" className="w-full sm:w-auto px-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 shadow-indigo-200">
                Start Free Trial
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Real Challenge for Solo Doctors</h2>
              <p className="text-lg text-slate-600">Most solo doctors:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {challenges.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-1">
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center font-bold text-indigo-600 text-lg">
              Clinexy solves this differently.
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Clinexy Is Not Marketing Software</h2>
          <p className="text-xl text-indigo-100 mb-12">
            Clinexy is a <strong>doctor-first growth system</strong>. It focuses on what actually brings patients to solo doctors:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Trust", icon: Shield },
              { label: "Visibility", icon: Globe },
              { label: "Familiarity", icon: Star },
              { label: "Consistency", icon: RefreshCcw }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <item.icon className="h-8 w-8 text-indigo-300" />
                <span className="font-bold text-lg">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-indigo-200 text-sm font-medium tracking-wide uppercase">
            No ads • No posting schedules • No complicated tools
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Doctor Branding Means Inside Clinexy</h2>
          </div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-4 bg-indigo-50 px-3 py-1 rounded-lg text-sm">
                    <feature.icon className="h-4 w-4" />
                    {feature.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-slate-600 mb-6">{feature.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {feature.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-50 border-l-4 border-indigo-500 p-5 rounded-r-lg">
                    <p className="text-sm font-bold text-slate-900 uppercase mb-1">Why it matters</p>
                    <p className="text-slate-600">{feature.impact}</p>
                  </div>
                </div>
                
                {/* Visual Representation (Abstract Card) */}
                <div className="flex-1 w-full bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-center justify-center min-h-[320px]">
                  <div className="text-center space-y-4 max-w-xs">
                     <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 text-indigo-600">
                       <feature.icon className="h-10 w-10" />
                     </div>
                     <h4 className="font-bold text-xl text-slate-800">{feature.title}</h4>
                     <p className="text-sm text-slate-500">Automated by Clinexy</p>
                     <div className="flex justify-center gap-1 mt-2">
                       {[1,2,3].map(d => <div key={d} className="w-2 h-2 rounded-full bg-slate-200"></div>)}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why This Works Better Than Traditional Marketing</h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="grid grid-cols-2 bg-slate-900 text-white p-4 text-center font-bold text-lg">
              <div className="border-r border-slate-700">Traditional Marketing</div>
              <div className="text-indigo-300">Clinexy Growth</div>
            </div>
            
            {[
              { traditional: "Requires time & effort", clinexy: "Works automatically" },
              { traditional: "Needs agencies", clinexy: "Built-in system" },
              { traditional: "Expensive ads", clinexy: "Organic trust" },
              { traditional: "Short-term results", clinexy: "Long-term credibility" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="p-5 text-center text-slate-500 border-r border-slate-100">{row.traditional}</div>
                <div className="p-5 text-center font-bold text-indigo-700 bg-indigo-50/30">{row.clinexy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience & Pricing Note */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed Specifically for Solo Doctors</h2>
               <div className="space-y-4">
                 {[
                   "No competitor ads on your profile",
                   "You own your patients and data",
                   "No commissions on appointments",
                   "Simple setup, no learning curve"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle className="h-5 w-5 text-green-500" />
                     <span className="text-slate-700 font-medium">{item}</span>
                   </div>
                 ))}
               </div>
               
               <p className="mt-6 text-slate-600 italic font-medium">
                 "Clinexy supports your reputation instead of competing with it."
               </p>
               
               <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-100 flex gap-4">
                 <Award className="h-8 w-8 text-yellow-600 shrink-0" />
                 <div>
                   <h4 className="font-bold text-yellow-800">Part of the Solo Doctor Plan</h4>
                   <p className="text-sm text-yellow-700 mt-1">Doctor Branding & Growth is included in the Solo Doctor Plan. No extra charges. No add-ons required.</p>
                 </div>
               </div>
             </div>

             <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl text-center">
               <h3 className="text-2xl font-bold mb-6">Real Outcomes You Can Expect</h3>
               <div className="space-y-4">
                 {[
                   { label: "More Direct Bookings", val: "↑" },
                   { label: "Higher Patient Trust", val: "⭐⭐⭐⭐⭐" },
                   { label: "Better Google Visibility", val: "Top 3" },
                   { label: "Stronger Local Reputation", val: "Verified" },
                   { label: "Steady Clinic Growth", val: "Trending Up" },
                 ].map((stat, i) => (
                   <div key={i} className="bg-white/10 p-4 rounded-lg flex justify-between items-center">
                     <span className="text-slate-300 font-medium">{stat.label}</span>
                     <span className="font-bold text-indigo-300">{stat.val}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Without Marketing Stress?</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Your clinic doesn’t need promotions. It needs <span className="font-bold text-white">trust, visibility, and consistency</span>.
          </p>
          <a href="https://rishabhkumar.clinexy.com/signup">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-slate-100 px-8">
              Start Your Free Trial
            </Button>
          </a>
          <p className="mt-4 text-sm text-indigo-200">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};