import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneOff, MessageSquare, Bell, CheckCircle, 
  Sliders, Smartphone, Zap, UserCheck,
  CalendarCheck, RefreshCcw, Calculator, TrendingUp
} from 'lucide-react';
import { Button } from '../components/Button';

export const FeaturesAppointmentsReminders: React.FC = () => {
  // Calculator State
  const [consultFee, setConsultFee] = useState(500);
  const [appointmentsPerWeek, setAppointmentsPerWeek] = useState(30);
  const [noShowRate, setNoShowRate] = useState(20);

  const revenuePerWeek = consultFee * appointmentsPerWeek;
  const lostRevenueWeekly = revenuePerWeek * (noShowRate / 100);
  const lostRevenueYearly = lostRevenueWeekly * 52;
  const savedWithClinexy = lostRevenueYearly * 0.40; // Assuming 40% reduction

  const painPoints = [
    "Phone calls",
    "WhatsApp messages",
    "Manual registers",
    "Staff coordination"
  ];

  const features = [
    {
      title: "Online Appointment Booking That Just Works",
      desc: "Result: Fewer interruptions. Better control.",
      points: [
        "Online booking from your doctor website",
        "Clinic-wise availability",
        "Real-time slot visibility",
        "Controlled appointment requests",
        "You decide when to approve, reschedule, or block slots"
      ],
      icon: CalendarCheck,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart Appointment Approval & Control",
      desc: "Result: Your schedule works around you—not the other way around.",
      points: [
        "You remain fully in charge of your schedule",
        "View appointments by clinic and date",
        "Filter by confirmation status",
        "Approve or reject appointment requests",
        "Block or open slots anytime"
      ],
      icon: Sliders,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Automatic Patient Reminders (Biggest No-Show Reducer)",
      desc: "Result: Up to 30–40% reduction in no-shows.",
      points: [
        "Patients forget appointments. Systems don’t.",
        "Clinexy automatically sends: Appointment confirmations",
        "WhatsApp reminders",
        "Email notifications",
        "Patients are reminded clearly and on time"
      ],
      icon: Bell,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Easy Rescheduling Without Confusion",
      desc: "No back-and-forth calls. No missed messages.",
      points: [
        "Patients can request rescheduling",
        "You approve with one click",
        "Patients get instant confirmation"
      ],
      icon: RefreshCcw,
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Manage Availability Without Staff Dependency",
      desc: "Even if your receptionist is absent, your clinic runs smoothly.",
      points: [
        "Set clinic-wise schedules",
        "Add or block time slots",
        "Adjust availability by date"
      ],
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
             <PhoneOff className="h-4 w-4" />
             <span>Appointments Should Not Interrupt Your Day</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            Appointment Booking & Patient Reminders <br/>
            <span className="text-primary-600">for Solo Doctors</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            As a solo doctor, every phone call during consultations breaks focus and slows you down. 
            Clinexy replaces the chaos of manual booking with a simple, organised system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://rishabhkumar.clinexy.com/signup">
               <Button size="lg" className="px-8">Start Free Trial</Button>
             </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Most Clinics Still Manage Appointments Through:</h2>
          <div className="grid sm:grid-cols-4 gap-4 mb-12">
            {painPoints.map((pt, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100 font-medium text-slate-600">
                 {pt}
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-700 font-medium italic">
            "This leads to confusion, errors, and missed appointments."
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                 <div className="flex-1">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary-600 mb-6">
                       <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <ul className="space-y-3 mb-6">
                       {feature.points.map((pt, pIdx) => (
                         <li key={pIdx} className="flex items-start gap-3 text-slate-700">
                           <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                           <span>{pt}</span>
                         </li>
                       ))}
                    </ul>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-primary-500 shadow-sm">
                       <p className="font-bold text-slate-800">{feature.desc}</p>
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

      {/* No-Show Revenue Calculator */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-500/20 rounded-xl mb-4 text-red-400">
               <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Lost Revenue Calculator
            </h2>
            <p className="text-slate-400">
              See how much money "no-shows" are costing your clinic every year.
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Consultation Fee: <span className="text-green-400 font-bold text-lg">${consultFee}</span>
                  </label>
                  <input 
                    type="number" 
                    value={consultFee}
                    onChange={(e) => setConsultFee(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Appointments Per Week: <span className="text-primary-400 font-bold text-lg">{appointmentsPerWeek}</span>
                  </label>
                  <input 
                    type="range" min="5" max="200" 
                    value={appointmentsPerWeek}
                    onChange={(e) => setAppointmentsPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Current No-Show Rate: <span className="text-red-400 font-bold text-lg">{noShowRate}%</span>
                  </label>
                  <input 
                    type="range" min="0" max="50" 
                    value={noShowRate}
                    onChange={(e) => setNoShowRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                 <div className="bg-red-900/30 rounded-2xl p-6 border border-red-500/30 text-center">
                    <div className="text-sm text-red-200 uppercase tracking-wider font-semibold mb-1">Money Lost Per Year</div>
                    <div className="text-3xl md:text-4xl font-bold text-red-400">${lostRevenueYearly.toLocaleString()}</div>
                    <p className="text-xs text-red-300 mt-2">Due to missed appointments</p>
                 </div>
                 
                 <div className="bg-green-900/30 rounded-2xl p-6 border border-green-500/30 text-center relative overflow-hidden">
                    <div className="text-sm text-green-200 uppercase tracking-wider font-semibold mb-1">Recoverable with Clinexy</div>
                    <div className="text-3xl md:text-4xl font-bold text-green-400">${savedWithClinexy.toLocaleString()}</div>
                    <p className="text-xs text-green-300 mt-2">By reducing no-shows by ~40%</p>
                    <div className="absolute top-4 right-4">
                       <TrendingUp className="h-6 w-6 text-green-500 opacity-50" />
                    </div>
                 </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="https://rishabhkumar.clinexy.com/signup">
                <Button className="bg-white text-slate-900 hover:bg-slate-100">Stop Losing Revenue</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Usability & Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
             {/* Usability */}
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Works the Way Solo Doctors Work</h2>
                <div className="space-y-4">
                  {[
                    "Simple interface", 
                    "Mobile-friendly", 
                    "WhatsApp-first reminders", 
                    "No technical learning curve"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <Smartphone className="h-5 w-5 text-slate-400" />
                       <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                   <p className="font-bold text-slate-800 italic">"If you can use WhatsApp, you can use Clinexy."</p>
                </div>
             </div>

             {/* Comparison */}
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Clinexy Appointments Are Better</h2>
                <div className="space-y-4">
                   {[
                     "No commission on bookings",
                     "No marketplace competition",
                     "You own your patient list",
                     "Built for one-doctor clinics"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-slate-700 font-medium">{item}</span>
                     </div>
                   ))}
                </div>
                <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
                   <p className="font-bold text-green-800">Clinexy supports your practice instead of competing with it.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white border-t border-slate-100 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block p-4 rounded-full bg-yellow-100 mb-6">
               <Zap className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate-900">Included in the Solo Doctor Plan</h2>
            <p className="text-slate-600 mb-8">Appointments & reminders are included. No add-ons. No hidden charges.</p>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Ready to Reduce Appointment Stress?</h2>
           <p className="text-primary-100 text-lg mb-8">
             Let patients book easily. Let Clinexy handle reminders. You focus on consultations.
           </p>
           <a href="https://rishabhkumar.clinexy.com/signup">
             <Button size="lg" className="bg-white text-primary-600 hover:bg-slate-100 px-10">Start Your Free Trial</Button>
           </a>
           <p className="mt-4 text-sm text-primary-200">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};