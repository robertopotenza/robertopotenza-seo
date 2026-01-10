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
              <p>
                This is not IT. This is operational control—designed to standardize execution, impose discipline, and enable predictable scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-24bg-secondaryorder-y border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Layers size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">Disciplined Systems for Growth</h3>
              <p className="text-muted-foreground mb-6">
                Implementing unified operations systems that control risk, protect capital, and support repeatable expansion.
              </p>
              <Link href="/production">
                <a className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                  See Roadmap <ArrowRight size={16} className="ml-2" />
                </a>
              </Link>
            </div>

            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Globe size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">Operations Control Tower</h3>
              <p className="text-muted-foreground mb-6">
                Integrated ERP, CMMS, and Analytics Across Vertically Integrated Operations
              </p>
              <Link href="/vision">
                <a className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                  View Strategy <ArrowRight size={16} className="ml-2" />
                </a>
              </Link>
            </div>

            <div className="bg-background p-8 border border-border/40 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">People, Safety & Performance</h3>
              <p className="text-muted-foreground mb-6">
                Building a culture where safety, accountability, and operational excellence are non-negotiable.
              </p>
              <Link href="/experience">
                <a className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                  My Background <ArrowRight size={16} className="ml-2" />
                </a>
              </Link>
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
              <div className="text-5xl font-serif font-light text-accent">79%</div>
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
