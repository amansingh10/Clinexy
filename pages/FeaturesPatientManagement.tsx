import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Users, Search, Shield, 
  Smartphone, Database, Clock, CheckCircle, 
  Lock, Layout, UserCheck, Zap
} from 'lucide-react';
import { Button } from '../components/Button';

export const FeaturesPatientManagement: React.FC = () => {
  // Calculator State
  const [patientsPerDay, setPatientsPerDay] = useState(25);
  const [minsLostPerPatient, setMinsLostPerPatient] = useState(3); // searching files, history etc
  const [daysPerWeek, setDaysPerWeek] = useState(6);

  const minsSavedDaily = patientsPerDay * minsLostPerPatient;
  const hoursSavedMonthly = Math.round((minsSavedDaily * daysPerWeek * 4) / 60);
  const hoursSavedYearly = hoursSavedMonthly * 12;

  const painPoints = [
    { label: "Paper files", icon: FileText },
    { label: "WhatsApp messages", icon: Smartphone },
    { label: "Old prescriptions", icon: Clock },
    { label: "Different devices", icon: Database },
  ];

  const features = [
    {
      title: "One Clear Patient View, Every Time",
      desc: "Clinexy gives you a complete picture of each patient.",
      points: [
        "Patient profile with contact details",
        "Appointment history",
        "Past prescriptions",
        "Uploaded reports and documents"
      ],
      result: "You always know the patient’s background before you consult.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Easy Patient Login for Better Experience",
      desc: "Patients get their own secure login.",
      points: [
        "View upcoming and past appointments",
        "Download prescriptions anytime",
        "Upload reports before visits"
      ],
      result: "Fewer follow-up calls. More patient confidence.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Secure Document & Report Management",
      desc: "Stop searching for reports during consultations.",
      points: [
        "Patients upload reports for specific appointments",
        "All documents stay linked to the patient and visit",
        "Access reports instantly during in-clinic or online consultations"
      ],
      result: "Faster consultations and better decisions.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096654c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Digital Records Without EMR Complexity",
      desc: "Clinexy is not a heavy hospital EMR. It gives you:",
      points: [
        "Only what solo doctors need",
        "Clean, easy-to-use screens",
        "Minimal data entry"
      ],
      result: "You stay organised without slowing down.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-teal-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Database className="h-4 w-4" />
            <span>Organised Practice, Peace of Mind</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            Patient Management System <br/>
            <span className="text-teal-600">for Solo Doctors</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Keep Patient Information Organised Without Extra Effort. Clinexy brings everything together in one simple, secure patient management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rishabhkumar.clinexy.com/signup">
              <Button size="lg" className="px-8 bg-teal-600 hover:bg-teal-700 shadow-teal-200">Start Free Trial</Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* The Scatter Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">As a solo doctor, patient information often gets scattered across:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {painPoints.map((pt, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                   <pt.icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-slate-700">{pt.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="flex-1">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6">
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
                    <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500 shadow-sm">
                       <p className="font-bold text-slate-800">Result: {feature.result}</p>
                    </div>
                 </div>
                 <div className="flex-1 w-full">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="rounded-2xl shadow-xl w-full h-[350px] object-cover border-4 border-white" 
                    />
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Time Savings Calculator */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-teal-500/20 rounded-xl mb-4 text-teal-300">
               <Clock className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Admin Time Savings Calculator
            </h2>
            <p className="text-slate-400">
              How much time do you spend searching for files, reports, or history?
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Patients Per Day: <span className="text-teal-400 font-bold text-lg">{patientsPerDay}</span>
                  </label>
                  <input 
                    type="range" min="5" max="100" 
                    value={patientsPerDay}
                    onChange={(e) => setPatientsPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mins Lost Searching Per Patient: <span className="text-teal-400 font-bold text-lg">{minsLostPerPatient} min</span>
                  </label>
                  <p className="text-xs text-slate-500 mb-2">Searching files, old Rx, shuffling papers</p>
                  <input 
                    type="range" min="1" max="10" 
                    value={minsLostPerPatient}
                    onChange={(e) => setMinsLostPerPatient(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Clinic Days Per Week: <span className="text-teal-400 font-bold text-lg">{daysPerWeek}</span>
                  </label>
                  <input 
                    type="range" min="1" max="7" 
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center bg-teal-900/30 rounded-2xl p-8 border border-teal-500/30 text-center">
                 <div className="mb-6">
                    <div className="text-sm text-teal-200 uppercase tracking-wider font-semibold mb-1">Time Saved Per Month</div>
                    <div className="text-5xl font-bold text-white">{hoursSavedMonthly} <span className="text-2xl font-normal text-slate-400">hours</span></div>
                 </div>
                 <div>
                    <div className="text-sm text-teal-200 uppercase tracking-wider font-semibold mb-1">Time Saved Per Year</div>
                    <div className="text-4xl font-bold text-teal-400">{hoursSavedYearly} <span className="text-xl font-normal text-teal-200/70">hours</span></div>
                 </div>
                 <p className="text-xs text-slate-400 mt-6">
                   That's nearly {Math.round(hoursSavedYearly / 24)} full days of your life reclaimed.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Patient History That Helps You Deliver Better Care</h2>
              <ul className="space-y-4">
                {[
                  "See previous diagnoses and prescriptions",
                  "Track follow-up instructions",
                  "Understand visit patterns",
                  "Continuity of care that patients appreciate"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed With Privacy & Control</h2>
              <ul className="space-y-4">
                {[
                  "Secure access for doctors and authorised staff",
                  "Patients see only their own information",
                  "Doctor-owned patient data",
                  "Trust for you and peace of mind for patients"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-teal-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-10">Why Solo Doctors Prefer Clinexy</h2>
           <div className="grid sm:grid-cols-2 gap-6">
              {[
                "No complicated EMR setup",
                "No unnecessary fields",
                "No learning curve",
                "Built for daily solo practice"
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 font-bold text-slate-700 flex items-center justify-center gap-3">
                   <CheckCircle className="h-5 w-5 text-teal-500" />
                   {item}
                </div>
              ))}
           </div>
           <p className="mt-8 text-slate-600 italic">"Clinexy works the way solo doctors actually work."</p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block p-4 rounded-full bg-yellow-100 mb-6">
               <Zap className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Included in the Solo Doctor Plan</h2>
            <p className="text-slate-600 text-lg">Patient management is included. No add-ons. No extra fees.</p>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Ready to Simplify Patient Records?</h2>
           <p className="text-teal-100 text-lg mb-8">
             Spend less time searching. Spend more time caring.
           </p>
           <a href="https://rishabhkumar.clinexy.com/signup">
             <Button size="lg" className="bg-white text-teal-800 hover:bg-slate-100 px-10">Start Your Free Trial</Button>
           </a>
           <p className="mt-4 text-sm text-teal-200">No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
};