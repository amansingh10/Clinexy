import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneOff, Calendar, UserX, FileText, Globe, TrendingUp, 
  CheckCircle, Video, Shield, Star, Clock, Activity, ArrowRight,
  MessageSquare, Users, Layout, Zap
} from 'lucide-react';
import { Button } from '../components/Button';

export const SolutionsSoloDoctors: React.FC = () => {
  const problems = [
    { text: "Endless phone calls and WhatsApp messages for appointments", icon: PhoneOff },
    { text: "Patients forgetting appointments and not showing up", icon: UserX },
    { text: "Dependency on reception staff for basic tasks", icon: Users },
    { text: "Scattered prescriptions, reports, and patient history", icon: FileText },
    { text: "Being listed on platforms where patients don’t really belong to you", icon: Globe },
    { text: "Knowing online presence matters, but having no time for marketing", icon: TrendingUp },
  ];

  const benefits = [
    {
      title: "Appointment Management Without Chaos",
      desc: "Fewer calls, fewer mistakes, fewer interruptions.",
      points: [
        "Online appointment booking for patients",
        "Approve, reschedule, or block slots easily",
        "Clinic-wise availability management",
        "Automatic WhatsApp and email notifications"
      ],
      icon: Calendar
    },
    {
      title: "Automatic No-Show Reduction",
      desc: "Up to 30–40% fewer missed appointments.",
      points: [
        "Patients forget appointments. Clinexy reminds them.",
        "Timely WhatsApp reminders",
        "Clear appointment confirmations",
        "Easy rescheduling options"
      ],
      icon: Clock
    },
    {
      title: "Teleconsultation & Digital Prescriptions",
      desc: "Professional care, even outside the clinic.",
      points: [
        "Video consultations using Google Meet",
        "Create digital prescriptions with vitals and diagnosis",
        "PDF prescriptions for patients",
        "Secure access to reports and documents"
      ],
      icon: Video
    },
    {
      title: "Simple Patient Management",
      desc: "No lost records. Better patient experience.",
      points: [
        "Patient login with appointment history",
        "Upload and manage reports",
        "Easy access to past prescriptions"
      ],
      icon: Users
    },
    {
      title: "Your Own Personal Doctor Website",
      desc: "Patients search for you, trust you, and book directly.",
      points: [
        "Unlike marketplaces, Clinexy gives you your own doctor website",
        "Your name and brand, not a platform",
        "Online booking built-in",
        "Clinic details, timings, and location map",
        "Patient login and prescriptions"
      ],
      icon: Layout
    },
    {
      title: "Build Trust With Reviews & Reputation",
      desc: "New patients trust you even before the first visit.",
      points: [
        "Automatically request patient reviews",
        "Improve Google visibility",
        "Display real patient feedback"
      ],
      icon: Star
    },
    {
      title: "Grow Without Doing Marketing",
      desc: "Steady growth without extra effort.",
      points: [
        "You don’t need to learn digital marketing",
        "Reviews and social proof",
        "Your personal website",
        "Patient follow-up and recall reminders"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Zap className="h-4 w-4 fill-current" />
            <span>Built for Independent Doctors, Not Hospitals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            Software for Solo Doctors to <br/>
            <span className="text-primary-600">Manage & Grow Their Clinic</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            If you are a solo doctor, you don’t need complicated hospital software. You need a simple, reliable system that manages appointments without constant calls, reduces patient no-shows, keeps patient records organised, builds your personal reputation and trust, and helps patients come back again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rishabhkumar.clinexy.com/signup">
              <Button size="lg" className="w-full sm:w-auto px-8">Start Free Trial</Button>
            </a>
            <Link to="/demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">Book a Demo</Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Problem Most Solo Doctors Face</h2>
            <p className="text-lg text-slate-600">Every day, solo doctors deal with:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                  <problem.icon className="h-6 w-6" />
                </div>
                <p className="text-slate-700 font-medium">{problem.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-slate-600 font-medium italic">
            "This slows you down, costs you money, and adds unnecessary stress."
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">How Clinexy Solves This <br/><span className="text-primary-400">(Without Changing How You Work)</span></h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Clinexy works quietly in the background as your <strong>digital clinic assistant</strong>. It helps you:
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Automate appointments & reminders",
              "Reduce no-shows automatically",
              "Manage patients & prescriptions",
              "Build doctor brand online",
              "Grow without marketing effort"
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-4 rounded-lg flex items-center justify-center text-center font-medium text-sm">
                {item}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-primary-200">
            No complex setup. No technical learning curve.
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What You Get With Clinexy</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <div className="mb-4 text-sm font-bold text-primary-700 bg-primary-50 inline-block px-2 py-1 rounded">
                    Result: {benefit.desc}
                  </div>
                  <ul className="space-y-2">
                    {benefit.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle className="h-4 w-4 text-secondary-500 shrink-0 mt-1" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Why Different */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Clinexy Is Different for Solo Doctors</h2>
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
              {[
                "Built specifically for independent doctors",
                "No commissions on appointments",
                "You own your patient data",
                "Works with WhatsApp",
                "Simple to use, even without technical knowledge",
                "Affordable and transparent pricing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 text-center text-slate-600 italic">
              "Clinexy supports your practice without locking you in."
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Who Clinexy Is Perfect For</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Solo Doctors & Specialists", icon: UserX },
              { label: "Doctors Running One Clinic", icon: Layout },
              { label: "Tired of Manual Work", icon: FileText },
              { label: "Want Predictable Growth", icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center gap-4">
                <item.icon className="h-8 w-8 text-slate-400" />
                <span className="font-semibold text-slate-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing Made for Solo Doctors</h2>
            <p className="text-slate-600">No commissions. No hidden charges.</p>
          </div>
          
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary-500">
            <div className="bg-primary-600 text-white p-6 text-center">
              <h3 className="text-xl font-bold">Solo Doctor Plan</h3>
            </div>
            <div className="p-8 text-center border-b border-slate-100">
              <div className="mb-2">
                <span className="text-4xl font-bold text-slate-900">₹999</span>
                <span className="text-slate-500"> / month (India)</span>
              </div>
              <div className="text-sm text-slate-400 font-semibold">OR</div>
              <div className="mt-2">
                <span className="text-2xl font-bold text-slate-700">$99</span>
                <span className="text-slate-500"> / month (Global)</span>
              </div>
            </div>
            <div className="p-8 bg-slate-50/50">
              <ul className="space-y-4 mb-8 text-left">
                {[
                  "Appointment management & reminders",
                  "Teleconsultation",
                  "Digital prescriptions",
                  "Patient management",
                  "Personal doctor website",
                  "Reviews & reputation tools"
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="h-5 w-5 text-secondary-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://rishabhkumar.clinexy.com/signup">
                <Button className="w-full">Start Free Trial</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works steps */}
      <section className="py-20 bg-white">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Get Started in Minutes</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Sign Up", desc: "Create account" },
                { title: "Add Clinic", desc: "Set availability" },
                { title: "Share Link", desc: "Booking link" },
                { title: "Relax", desc: "We handle the rest" }
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-5 left-1/2 w-full h-0.5 bg-slate-100 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-slate-600">
               You focus on patients. Clinexy handles the rest.
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Clinic?</h2>
          <p className="text-primary-100 text-lg mb-8">
            Your clinic doesn’t need more staff or more tools. It needs a smarter system built for solo doctors.
          </p>
          <a href="https://rishabhkumar.clinexy.com/signup">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-slate-100 px-8">
              Start Your Free Trial
            </Button>
          </a>
          <p className="mt-4 text-sm text-primary-200">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};