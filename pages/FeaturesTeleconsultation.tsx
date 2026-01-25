import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Video, FileText, Smartphone, Shield, Calendar, 
  CheckCircle, Download, Upload, Monitor, UserCheck, 
  Wifi, Zap, DollarSign, Calculator
} from 'lucide-react';
import { Button } from '../components/Button';

export const FeaturesTeleconsultation: React.FC = () => {
  // Calculator State
  const [feePerConsult, setFeePerConsult] = useState(500);
  const [consultsPerWeek, setConsultsPerWeek] = useState(10);

  const weeklyRevenue = feePerConsult * consultsPerWeek;
  const monthlyRevenue = weeklyRevenue * 4;
  const yearlyRevenue = weeklyRevenue * 52;

  const features = [
    {
      title: "Simple, Reliable Teleconsultation",
      desc: "Clinexy makes online consultations easy for both doctors and patients.",
      points: [
        "Video consultations using Google Meet",
        "No separate software to install",
        "Works on mobile, tablet, or desktop",
        "Secure access for scheduled appointments only"
      ],
      result: "You consult confidently, patients connect easily.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1576091160550-2187d80a1830?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Built Into Your Appointment Workflow",
      desc: "Teleconsultation in Clinexy is not an add-on.",
      points: [
        "Teleconsultation appointments are scheduled like regular visits",
        "Patients receive joining details automatically",
        "You stay in control of timings and availability"
      ],
      result: "No confusion. No missed calls. No technical stress.",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Professional Digital Prescriptions",
      desc: "Replace handwritten prescriptions with clear, organised digital records.",
      points: [
        "Create, save, and issue digital prescriptions",
        "Capture patient vitals and diagnosis",
        "Reuse commonly prescribed medicines",
        "Add instructions and follow-up notes"
      ],
      result: "Accurate prescriptions that patients can always access.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-indigo-50 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Wifi className="h-4 w-4" />
            <span>Connected Care Anywhere</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            Teleconsultation & Digital Prescriptions <br/>
            <span className="text-indigo-600">for Solo Doctors</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Care Should Continue Even When Patients Are Not at the Clinic. Clinexy helps you deliver professional, secure teleconsultations and issue clear digital prescriptions—without complex systems or extra tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://rishabhkumar.clinexy.com/signup">
              <Button size="lg" className="w-full sm:w-auto px-8 bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200">
                Start Free Trial
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Context / Needs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Who Needs This?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Patients who cannot visit the clinic every time",
              "Patients needing follow-ups or quick advice",
              "Patients preferring remote consultations for convenience"
            ].map((need, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6" />
                </div>
                <p className="text-slate-700 font-medium">{need}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                  <feature.icon className="h-4 w-4" />
                  <span>Feature Spotlight</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-lg text-slate-600">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
                  <p className="font-bold text-slate-800">Result: {feature.result}</p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                   <img src={feature.image} alt={feature.title} className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 mb-6">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Easy Prescription Access for Patients</h3>
              <p className="text-slate-600 mb-6">Patients never lose their prescriptions again. Fewer follow-up calls and better patient confidence.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-4 w-4 text-indigo-500"/> Prescriptions available in PDF format</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-4 w-4 text-indigo-500"/> Downloadable anytime from patient login</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-4 w-4 text-indigo-500"/> Secure and private access</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Manage Reports & Documents Securely</h3>
              <p className="text-slate-600 mb-6">Clinexy keeps all patient documents organised for better-informed consultations.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-4 w-4 text-green-500"/> Patients upload reports before consultations</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-4 w-4 text-green-500"/> View reports during teleconsultation</li>
                <li className="flex items-center gap-2 text-slate-700"><CheckCircle className="h-4 w-4 text-green-500"/> Store documents with appointment history</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Calculator className="h-8 w-8 text-indigo-400" />
              Teleconsultation Potential Calculator
            </h2>
            <p className="text-slate-400">See how much extra revenue you could generate by offering remote consultations.</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Average Consultation Fee</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input 
                      type="number" 
                      value={feePerConsult}
                      onChange={(e) => setFeePerConsult(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Expected Online Consults per Week: <span className="text-indigo-400 font-bold">{consultsPerWeek}</span>
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={consultsPerWeek}
                    onChange={(e) => setConsultsPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-8 text-center text-white shadow-lg">
                <h4 className="text-indigo-100 font-medium mb-2">Potential Yearly Revenue</h4>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  ${yearlyRevenue.toLocaleString()}
                </div>
                <div className="text-indigo-200 text-sm mb-6">
                  That's <span className="text-white font-bold">${monthlyRevenue.toLocaleString()}</span> per month
                </div>
                <a href="https://rishabhkumar.clinexy.com/signup">
                  <Button className="w-full bg-white text-indigo-700 hover:bg-indigo-50 border-0">
                    Start Earning
                  </Button>
                </a>
              </div>
            </div>
            <p className="text-center text-xs text-slate-500 mt-8">
              *Estimates based on your inputs. Actual results may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Design Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed for Solo Doctors, Not Hospitals</h2>
              <ul className="space-y-4">
                {[
                  "No complicated EMR screens",
                  "No unnecessary data entry",
                  "Simple interface that fits solo practice needs",
                  "Minimal setup and training"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-slate-50 rounded-lg italic text-slate-600 border border-slate-100">
                "Clinexy supports your workflow instead of slowing it down."
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Doctors Trust Clinexy</h2>
              <ul className="space-y-4">
                {[
                  "Professional experience for patients",
                  "No third-party marketplace interference",
                  "Doctor-owned patient data",
                  "Integrated with appointments and records"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-indigo-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-indigo-50 rounded-lg text-indigo-800 font-bold border border-indigo-100">
                You remain in control of patient relationships.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block p-4 rounded-full bg-yellow-100 text-yellow-600 mb-6">
            <Zap className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Included in the Solo Doctor Plan</h2>
          <p className="text-slate-600 mb-0 text-lg">
            Teleconsultation and digital prescriptions are included. <br/>
            <span className="font-bold text-slate-900">No additional charges. No hidden fees.</span>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Consult Patients With Confidence</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Whether in-clinic or online, your care remains professional and organised.
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