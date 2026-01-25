import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, MessageCircle, ThumbsUp, TrendingUp, 
  Shield, CheckCircle, Smartphone, UserCheck, 
  Zap, BarChart3, Users, Layout
} from 'lucide-react';
import { Button } from '../components/Button';

export const FeaturesReviewsReputation: React.FC = () => {
  // Calculator State
  const [patientsPerWeek, setPatientsPerWeek] = useState(40);
  // Industry standard: Manual requests get ~2-5%, Automated SMS/WhatsApp get ~15-20%
  const manualRate = 3; 
  const automatedRate = 18;

  const yearlyManual = Math.round(patientsPerWeek * 52 * (manualRate / 100));
  const yearlyAutomated = Math.round(patientsPerWeek * 52 * (automatedRate / 100));
  const difference = yearlyAutomated - yearlyManual;

  const features = [
    {
      title: "Turn Every Visit Into a Trust Signal",
      desc: "Most satisfied patients are happy to leave a review—but they forget.",
      points: [
        "Automatically requesting reviews after appointments",
        "Sending polite, timely reminders",
        "Making it easy for patients to respond"
      ],
      result: "More genuine reviews without awkward follow-ups.",
      icon: MessageCircle,
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Strong Reviews Bring Better Patients",
      desc: "Reviews don’t just increase numbers—they improve quality.",
      points: [
        "Get chosen faster by new patients",
        "Attract more serious patients",
        "Face fewer trust-related questions"
      ],
      result: "Better conversations and smoother consultations.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Manage Your Reputation From One Place",
      desc: "Clinexy gives you a clear view of your reputation.",
      points: [
        "Track patient feedback",
        "Monitor ratings over time",
        "Understand what patients appreciate"
      ],
      result: "You stay informed without spending time managing platforms.",
      icon: Layout,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Reviews That Support Your Personal Brand",
      desc: "Your reviews belong to you—not a marketplace.",
      points: [
        "Display reviews on your personal doctor website",
        "Build long-term credibility",
        "Strengthen word-of-mouth"
      ],
      result: "Patients trust you, not a platform.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return(
    <div>pending</div>
  );
}