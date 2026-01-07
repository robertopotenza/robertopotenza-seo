import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Box, Globe, LineChart, Settings, Truck, Users } from "lucide-react";

export default function Vision() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-6">
              Strategic Roadmap
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight">
              Scaling the Legacy of <br />
              <span className="text-muted-foreground">Craftsmanship.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Balanced Body has won on quality. The next frontier is building the scalable, predictable operating system that supports 30%+ growth while honoring Ken Endelman's 50-year legacy.
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
              <h2 className="font-serif text-3xl text-primary">The Strategic Opportunity</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  <strong className="text-primary">The Challenge:</strong> The entire Pilates equipment industry struggles with delivery reliability. Long lead times, unpredictable ETAs, and shipping flaws consistently undermine the customer experience.
                </p>
                <p>
                  <strong className="text-primary">The Vision:</strong> If Balanced Body becomes the first premium brand with truly premium logistics, we own the customer experience from checkout to setup.
                </p>
                <blockquote className="border-l-2 border-accent pl-6 italic text-primary font-serif text-xl">
                  "Logistics is not a cost center — it is our quality promise extended beyond the factory."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-serif text-3xl text-center text-primary mb-16">6-Point Strategic Plan</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Settings size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Predictable Operating System</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Implement full SIOP cycle</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Reduce end-of-line surprises</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Connect production, planning & sales</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Truck size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Global Logistics Transformation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Regional distribution hubs (EU, Asia, Americas)</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Reduce lead times: Months/Weeks → Days</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> premium product – premium logistics</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Scalable Quality Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Predictive quality dashboards</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> quality from the wood to the clients’ hands</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Protect brand reputation at scale</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 4 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Box size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Manufacturing Flow</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Redesign flow in Sacramento</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Automate repetitive tasks, not craftsmanship</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Improve throughput without compromising craft</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 5 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <LineChart size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Disciplined CapEx</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Prioritization matrices</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Multi-year capacity planning</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Invest in the right things at the right time</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 6 */}
            <Card className="border-border/40 bg-background hover:shadow-md transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center mb-4 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Users size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Leadership & Culture</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Capture tribal knowledge into repeatable systems</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Honor the legacy and traditions that built Balanced Body</li>
                  <li className="flex items-start gap-2"><ArrowRight size={14} className="mt-1 text-accent" /> Start with respect for the people who create the product</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why You */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-primary mb-8">Why This Fit Matters</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Balanced Body needs a builder, not just a manager. Someone who understands that <span className="text-primary font-medium">process serves people</span>, not the other way around. My career has been defined by stabilizing fast-growing companies and professionalizing operations while respecting the unique culture that made them successful.
          </p>
          <div className="grid grid-cols-3 gap-8 border-t border-border/40 pt-12">
            <div>
              <div className="text-4xl font-serif text-accent mb-2">Builder</div>
              <div className="text-sm text-muted-foreground">Mindset</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-accent mb-2">Global</div>
              <div className="text-sm text-muted-foreground">Perspective</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-accent mb-2">Belonging</div>
              <div className="text-sm text-muted-foreground">Leadership</div>
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
