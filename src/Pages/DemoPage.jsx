import React, { useEffect } from 'react';
import { Search, AlertTriangle, Map } from 'lucide-react';
import FadeIn from '../Components/FadeIn';

const expectations = [
  { icon: Search, text: 'We review your current tools' },
  { icon: AlertTriangle, text: 'We identify the biggest gaps' },
  { icon: Map, text: 'You leave with a clear plan' },
];

const DemoPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Book a <span className="gradient-text">free call</span></h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                See what we would build for your business. 15 minutes. No prep.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
            {/* Left — what to expect */}
            <FadeIn>
              <h2 className="text-2xl font-bold text-white mb-8">What to expect</h2>
              <div className="space-y-6">
                {expectations.map((e, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center shrink-0">
                      <e.icon className="h-5 w-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{i + 1}. {e.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer email? <a href="mailto:contact@buildrhub.io" className="text-violet-400 hover:text-violet-300 transition-colors">contact@buildrhub.io</a>
              </p>
            </FadeIn>

            {/* Right — Calendly embed */}
            <FadeIn delay={0.2}>
              <div
                className="calendly-inline-widget rounded-2xl overflow-hidden"
                data-url="https://calendly.com/alalawi-faical?background_color=0a0a1a&text_color=ffffff&primary_color=7c3aed"
                style={{ minWidth: '320px', minHeight: '700px' }}
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
