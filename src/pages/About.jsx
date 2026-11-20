import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Lightbulb, Target, Heart, Building2, Home, Award, Search, Filter, Check } from 'lucide-react';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import Button from '../components/Button';

const values = [
  { icon: Shield, title: 'Transparency', description: 'Open, honest communication at every stage. No hidden agendas or surprises.' },
  { icon: Heart, title: 'Integrity', description: 'We do what we say. Our reputation is built on trust and delivering on promises.' },
  { icon: Users, title: 'Client-First', description: 'Your goals come first. We only succeed when you achieve your property objectives.' },
  { icon: Lightbulb, title: 'Expertise', description: 'Deep property market knowledge applied to every introduction and opportunity.' },
  { icon: Target, title: 'Results-Focused', description: 'We measure success by outcomes — successful transactions and satisfied clients.' },
  { icon: Building2, title: 'Professionalism', description: 'High standards in everything we do, from communication to compliance.' }
];

const approach = [
  { icon: Search, title: 'Listen First', description: 'We take time to understand your specific goals, constraints, and preferences before suggesting any opportunities.' },
  { icon: Filter, title: 'Curate Carefully', description: 'We pre-screen every property and opportunity, only presenting those that genuinely match your criteria.' },
  { icon: Users, title: 'Connect Thoughtfully', description: 'We facilitate introductions between the right parties, ensuring both sides are prepared and informed.' },
  { icon: Check, title: 'Support Throughout', description: 'Our involvement doesn\'t end at introduction. We\'re available through to completion and beyond.' }
];

const differentiators = [
  'We are not a traditional estate agent — we operate as a specialised intermediary',
  'No dual representation — we work for you, not both sides of a transaction',
  'Quality over quantity — we present fewer, better-matched opportunities',
  'No pressure sales — you decide when and if to proceed',
  'UK-wide network with local market expertise',
  'Transparent fee structure agreed upfront'
];

export default function About() {
  return (
    <>
      <Hero
        title="About Redbricks"
        subtitle="We're a property sourcing and investment intermediary connecting property owners, buyers, and investors across the UK."
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="section container" aria-labelledby="intro-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="intro-heading" className="heading-section mb-4">Who We Are</h2>
          </div>
          <div className="prose text-text-muted max-w-none space-y-6">
            <p>
              Redbricks was established to bridge the gap between property owners looking to sell or let their properties,
              and buyers and investors seeking quality opportunities. We operate as an intermediary — not a traditional
              estate agent — focusing on creating the right connections between the right parties.
            </p>
            <p>
              Our approach is simple: we listen to understand your goals, we curate opportunities that genuinely match
              your criteria, and we facilitate introductions with transparency and professionalism throughout the process.
            </p>
            <p>
              We don't buy or sell properties ourselves. We don't represent both sides of a transaction. We work for you,
              whether you're a property owner, a buyer, an investor, a landlord, or a property finder.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="story-heading" className="heading-section mb-4">Our Story</h2>
            <p className="text-lead">[Company history and background to be added]</p>
          </div>
          <div className="prose text-text-muted max-w-none space-y-6">
            <p>
              <strong>Note:</strong> This section is a placeholder for your company's specific history, founding story,
              and key milestones. Replace this content with your actual company background.
            </p>
            <p>
              Consider including: founding year and circumstances, key milestones and achievements, growth trajectory,
              team expansion, notable transactions or partnerships, and your evolution as a business.
            </p>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="mission-heading">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 id="mission-heading" className="heading-section mb-6">Our Mission</h2>
            <div className="prose text-text-muted max-w-none space-y-4">
              <p>
                To connect property owners with the right buyers and investors through transparent, efficient,
                and professional property sourcing — creating successful outcomes for all parties.
              </p>
              <p>
                We aim to be the trusted intermediary of choice for property transactions across the UK,
                known for our integrity, expertise, and genuine commitment to our clients' success.
              </p>
            </div>
          </div>
          <div>
            <h2 className="heading-section mb-6">Our Vision</h2>
            <div className="prose text-text-muted max-w-none space-y-4">
              <p>
                A property market where every owner finds the right buyer, every buyer finds the right property,
                and every investor finds the right opportunity — all facilitated with complete transparency and trust.
              </p>
              <p>
                We envision a future where property sourcing is seamless, data-driven, and accessible,
                removing the friction and uncertainty that traditionally characterises property transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="heading-section mb-4">Our Core Values</h2>
            <p className="text-lead">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-surface rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <value.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="approach-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="approach-heading" className="heading-section mb-4">Our Approach</h2>
            <p className="text-lead">A four-step methodology that puts your goals at the centre.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((step, index) => (
              <div key={index} className="text-center p-6 relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <step.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted">{step.description}</p>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-14 right-0 w-full h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background container" aria-labelledby="different-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="different-heading" className="heading-section mb-4">What Makes Us Different</h2>
            <p className="text-lead">We're not a traditional estate agent. Here's how we stand apart.</p>
          </div>
          <ul className="space-y-4">
            {differentiators.map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary">
                  <Check className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Want to Work With Us?"
        subtitle="Whether you're selling, buying, investing, or letting — we're ready to help."
        ctaPrimary={{ label: 'Get in Touch', href: '/contact' }}
        ctaSecondary={{ label: 'Submit Your Property', href: '/sell-property' }}
        variant="primary"
      />
    </>
  );
}