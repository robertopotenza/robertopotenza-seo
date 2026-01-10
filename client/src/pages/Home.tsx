import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Users, Target, Zap, Layers, ShieldCheck } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Craftsmanship detail" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm">
              Executive Portfolio
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-primary leading-tight">
              Built Right. <br />
              <span className="text-muted-foreground">Scaling Smart.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Bringing 20+ years of operational excellence to build system-driven, predictive energy operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/vision">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-12 text-base">
                  View Strategic Vision
                </Button>
              </Link>
              <Link href="/experience">
                <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 rounded-none px-8 h-12 text-base">
                  Explore Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Value Prop */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl text-primary mb-6">
                Operational Excellence <br />
                <span className="text-muted-foreground italic">at Scale</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-6" />
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nopetro is entering a critical growth phase—expanding RNG production assets while scaling a rapidly growing fueling network. This growth brings complexity that cannot be managed with fragmented tools, spreadsheets, or reactive maintenance.
              </p>
              <p>
                The vision is to establish a unified operations systems architecture that enables disciplined scale, protects uptime, and gives leadership real-time visibility across production, maintenance, and distribution.
              </p>
              <p className="font-medium text-primary">
                This is not an IT project. It is an operational control system designed to support predictable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Content - Card Grid Layout */}
      <section className="py-24 bg-secondary border-y border-border/40">
        <div className="container">
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-primary mb-4">Information Management Objectives</h3>
            <p className="text-lg text-muted-foreground max-w-3xl">
              The operations systems strategy is built around four core needs to flatten the complexity curve and enable repeatable, low-risk expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Layers size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">Single Source of Truth</h3>
              <p className="text-muted-foreground mb-6">
                One consistent view of production, maintenance, cost, and performance across all sites.
              </p>
            </div>

            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">Predictive Maintenance</h3>
              <p className="text-muted-foreground mb-6">
                Shift from breakdown response to condition-based and predictive maintenance on critical assets.
              </p>
            </div>

            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">Real-Time Visibility</h3>
              <p className="text-muted-foreground mb-6">
                Executives and operators see the same facts, updated continuously, with role-based dashboards.
              </p>
            </div>

            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">Scalable by Design</h3>
              <p className="text-muted-foreground mb-6">
                Systems and templates that deploy quickly to new facilities without reinventing processes.
              </p>
            </div>
          </div>

          {/* Bottom Section: Outcomes */}
          <div className="mt-16 pt-16 border-t border-border/40">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-primary mb-4">What the Unified Platform Delivers</h3>
                <p className="text-muted-foreground">
                  A fully integrated ERP, CMMS, predictive maintenance, and BI layer enables:
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="flex gap-4">
                    <div className="text-4xl font-light text-primary">95%</div>
                    <div className="text-sm text-muted-foreground pt-2">Target production uptime reliability</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-4xl font-light text-primary">30%</div>
                    <div className="text-sm text-muted-foreground pt-2">Reduction in unplanned downtime</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-4xl font-light text-primary">10+</div>
                    <div className="text-sm text-muted-foreground pt-2">Scalable to multiple facilities</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-4xl font-light text-primary">$$$</div>
                    <div className="text-sm text-muted-foreground pt-2">Lower O&M cost per facility</div>
                  </div>
                </div>
                
                <div className="bg-primary text-primary-foreground p-8 rounded-sm">
                  <h4 className="font-serif text-xl mb-4 text-accent">Strategic Outcome</h4>
                  <p className="text-lg leading-relaxed opacity-90">
                    The result is an operations platform that turns growth from a risk into a competitive advantage. Instead of scaling chaos, Nopetro scales discipline, visibility, and reliability—protecting capital, supporting teams, and enabling leadership to manage the business with confidence as asset count grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-serif font-light text-accent">20+</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif font-light text-accent">74%</div>
              <div className="text-sm uppercase tracking-widest opacity-80">OEE Achievement</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif font-light text-accent">$1B+</div>
              <div className="text-sm uppercase tracking-widest opacity-80">P&L Responsibility</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif font-light text-accent">34%</div>
              <div className="text-sm uppercase tracking-widest opacity-80">Output Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-background flex items-center justify-center">
        <div className="container max-w-4xl text-center space-y-8">
          <blockquote className="font-serif text-3xl md:text-4xl text-primary leading-tight italic">
            "We're not doing that for the title, we're doing that because that's the right thing to do."
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <cite className="not-italic font-medium text-primary">Roberto Potenza</cite>
            <span className="text-sm text-muted-foreground">On Sustainability & Leadership</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
