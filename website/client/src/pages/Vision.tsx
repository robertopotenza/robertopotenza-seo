import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Box, Globe, LineChart, Settings, Truck, Users } from "lucide-react";

export default function Vision() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary -skew-x-12 translate-x-1/4 z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-6">
              Nopetro Energy
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight">
              Integrated Operations <br />
              <span className="text-muted-foreground">Systems Strategy.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Defining and implementing a scalable, unified operations systems strategy that supports Nopetro’s rapid growth across RNG production and fuel distribution.
            </p>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 border-y border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/images/logistics-global.jpg" 
                alt="Global Logistics Network" 
                className="w-full rounded-sm shadow-sm"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-3xl text-primary">Executive Overview</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong className="text-primary">The Context:</strong> Nopetro Energy is at a critical inflection point, transitioning from early operational success into a phase of accelerated, multi-site scale-up across both RNG production and fueling distribution.
                </p>
                <p>
                  <strong className="text-primary">The Challenge:</strong> Rapid growth in both production and distribution, capital-intensive assets with tight uptime requirements, and increasing interdependency between plants, compressors, pipelines, and fueling stations.
                </p>
                <p>
                  <strong className="text-primary">The Solution:</strong> A unified ERP + CMMS + predictive maintenance + Power BI architecture must be established now to enable disciplined, repeatable growth.
                </p>
                <blockquote className="border-l-2 border-accent pl-6 italic text-primary font-serif text-xl">
                  "Implementing systems now flattens the complexity curve and enables controlled scale."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="font-serif text-3xl text-center text-primary mb-16">Strategic Pillars & Roadmap</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Settings size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Predictable Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> KCF Technologies for critical assets</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Reduce unplanned downtime 20-30%</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Institutionalize predictive maintenance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Truck size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Unified ERP Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Phase 1: Odoo (cost-controlled, modular)</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Phase 2: Microsoft Dynamics 365</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Single source of truth across divisions</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Power BI Control Tower</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Executive & Operational Dashboards</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Real-time visibility: Production to Fueling</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Mobile-ready role-based views</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 4 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Box size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Success Metrics</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Uptime ≥ 95%</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> PM Compliance ≥ 95%</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> 5-10x ROI on Predictive Maintenance</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 5 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <LineChart size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Implementation Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Months 1-2: Assessment</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Months 3-4: Pilot (Vero + Stations)</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Months 5-8: Full Rollout</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 6 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Users size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Strategic Value</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Margin capture & Supply security</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Faster scaling & decisions</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Reduced operational risk</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why You */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-primary mb-8">Final Recommendation</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Proceed immediately with a phased, unified operations systems rollout. This approach converts Nopetro’s growth trajectory from high-risk acceleration into <span className="text-primary font-medium">disciplined, repeatable scale</span>.
          </p>
          <div className="grid grid-cols-3 gap-8 border-t border-border/40 pt-12">
            <div>
              <div className="text-4xl font-serif text-accent mb-2">95%+</div>
              <div className="text-sm text-muted-foreground">Target Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-accent mb-2">10x</div>
              <div className="text-sm text-muted-foreground">ROI Potential</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-accent mb-2">Unified</div>
              <div className="text-sm text-muted-foreground">Operations Platform</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ShieldCheck({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
