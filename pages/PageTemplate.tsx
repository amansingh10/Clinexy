import React from 'react';
import { PageData, SITEMAP } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Shield, FileText, Globe } from 'lucide-react';

interface PageTemplateProps {
  data: PageData;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const isLegal = data.category === 'Legal';
  
  // Find related pages for the sidebar
  const relatedPages = SITEMAP.filter(p => 
    p.category === data.category && p.path !== data.path
  ).slice(0, 4);

  // Content generator helper
  const getContentForTopic = (topic: string, index: number) => {
    const keyword = data.keywords[index % data.keywords.length] || data.keywords[0];
    const secondaryKeyword = data.keywords[(index + 1) % data.keywords.length] || "clinic growth";
    
    const templates = [
      `When it comes to **${topic}**, efficiency and reliability are paramount. Our platform leverages advanced **${keyword}** capabilities to streamline this process, allowing solo doctors to focus more on patient care and less on administrative hurdles.`,
      `Many clinics struggle with **${topic}** due to outdated tools. Clinexy addresses this by integrating **${keyword}** directly into your workflow. This ensures that you not only manage your practice better but also see tangible improvements in **${secondaryKeyword}**.`,
      `Optimizing **${topic}** is a key step towards a modern, digital clinic. With features designed specifically for **${keyword}**, we help you reduce manual errors and save valuable time every single day.`,
      `Understand the impact of **${topic}** on your clinic's bottom line. By utilizing our **${keyword}** solutions, doctors report significantly better outcomes and a more professional patient experience.`
    ];

    return templates[index % templates.length];
  };

  if (isLegal) {
    return (
      <div className="flex flex-col min-h-screen pt-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{data.title}</h1>
          <p className="text-slate-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-slate max-w-none">
            {data.outline.map((topic, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{index + 1}. {topic}</h3>
                <p className="text-slate-700 leading-relaxed">
                  This section covers the stipulations regarding {topic.toLowerCase()}. As a provider of {data.keywords.join(', ')}, Clinexy adheres to strict standards to ensure transparency and trust. 
                  <br/><br/>
                  Please read this section carefully as it governs your use of our services related to {topic}.
                </p>
              </div>
            ))}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                If you have any questions about these {data.title}, please contact us at support@clinexy.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Dynamic Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6 capitalize">
            {data.icon && <data.icon className="h-4 w-4" />}
            {data.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            {data.metaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/free-trial">
               <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
             </Link>
             <Link to="/demo">
               <Button variant="outline" size="lg" className="w-full sm:w-auto">Book a Demo</Button>
             </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Intro Paragraph */}
              <div className="prose prose-lg max-w-none text-slate-600">
                <p>
                  Welcome to the definitive guide on <strong>{data.title}</strong>. 
                  In today's healthcare landscape, managing a clinic efficiently requires the right tools. 
                  Clinexy offers a comprehensive solution tailored for <strong>{data.keywords[0]}</strong>, ensuring you stay ahead.
                </p>
              </div>

              {/* Render Outline Items */}
              {data.outline.map((topic, index) => (
                <div key={index} className="scroll-mt-24" id={`section-${index}`}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 text-primary-600 text-sm font-bold border border-primary-100">
                      {index + 1}
                    </span>
                    {topic}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6" 
                     dangerouslySetInnerHTML={{ __html: getContentForTopic(topic, index).replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800">$1</strong>') }} 
                  />
                  
                  {/* Alternating Feature/Benefit Box */}
                  {index % 2 === 0 ? (
                    <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        Why this matters
                      </h4>
                      <p className="text-slate-700">
                        Mastering {topic} is crucial for {data.keywords[1] || 'clinic success'}. 
                        Clinexy simplifies this with automated tools designed for solo practitioners.
                      </p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700 font-medium">Reduced admin time</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700 font-medium">Improved patient satisfaction</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700 font-medium">Seamless integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-slate-700 font-medium">Data security guaranteed</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* SEO Cloud */}
              <div className="pt-10 border-t border-slate-200">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {data.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm border border-slate-200">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* CTA Box */}
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 sticky top-24">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Ready to grow your clinic?</h3>
                  <p className="text-slate-500 text-sm">Join hundreds of solo doctors using Clinexy to manage their practice.</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500" /> 14-day free trial
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500" /> No credit card required
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500" /> Cancel anytime
                  </div>
                </div>

                <Link to="/free-trial" className="block">
                  <Button className="w-full justify-between group">
                    Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                
                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-400">Trusted by 500+ Doctors</p>
                </div>
              </div>

              {/* Related Pages */}
              {relatedPages.length > 0 && (
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-slate-400" />
                    Read Next
                  </h4>
                  <ul className="space-y-4">
                    {relatedPages.map(page => (
                       <li key={page.path}>
                         <Link to={page.path} className="group block">
                           <h5 className="text-sm font-semibold text-slate-700 group-hover:text-primary-600 transition-colors mb-1">
                             {page.title}
                           </h5>
                           <p className="text-xs text-slate-500 line-clamp-2">{page.metaDescription}</p>
                         </Link>
                       </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-6">Transform Your Clinic Today</h2>
           <p className="text-slate-300 mb-8 text-lg">
             Stop struggling with administrative tasks. Start using Clinexy for <strong>{data.keywords[0]}</strong> solutions.
           </p>
           <Link to="/free-trial">
             <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Start Your Free Trial</Button>
           </Link>
        </div>
      </section>
    </div>
  );
};