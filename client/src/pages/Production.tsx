import Layout from "@/components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Circle, Clock, TrendingUp } from "lucide-react";

export default function Production() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm">
              Methodology
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary leading-tight">
              Production <br />
              <span className="text-muted-foreground">Excellence.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A structured roadmap to transform manufacturing from reactive to predictive. This is "What Good Looks Like."
            </p>
          </div>
          <div className="relative">
            <img 
              src="/images/manufacturing-excellence.jpg" 
              alt="Modern Manufacturing" 
              className="w-full rounded-sm shadow-sm"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-6 border border-border/40 shadow-sm max-w-xs hidden md:block">
              <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Key Outcome</div>
              <p className="text-muted-foreground">"A scalable factory that honors Ken's craftsmanship philosophy."</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Roadmap Table */}
      <section className="py-20 bg-secondary/30 border-y border-border/40">
        <div className="container">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-primary mb-4">The Assessment Framework</h2>
            <p className="text-muted-foreground">
              Based on the "What Good Looks Like" roadmap, this framework assesses maturity across key operational dimensions.
            </p>
          </div>

          <div className="bg-background border border-border/40 rounded-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="w-[200px] font-serif text-primary font-semibold">Dimension</TableHead>
                  <TableHead className="font-serif text-primary font-semibold">Current State (Reactive)</TableHead>
                  <TableHead className="font-serif text-primary font-semibold">Target State (Predictive)</TableHead>
                  <TableHead className="w-[150px] font-serif text-primary font-semibold">Impact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-secondary/10">
                  <TableCell className="font-medium text-primary">Safety & Environment</TableCell>
                  <TableCell className="text-muted-foreground">Compliance-driven, reactive to incidents.</TableCell>
                  <TableCell className="text-muted-foreground">Proactive risk elimination, behavioral safety culture.</TableCell>
                  <TableCell className="text-accent font-medium">Zero Harm</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/10">
                  <TableCell className="font-medium text-primary">Quality Management</TableCell>
                  <TableCell className="text-muted-foreground">Inspection at end of line, firefighting defects.</TableCell>
                  <TableCell className="text-muted-foreground">Built-in quality, error-proofing, root cause solving.</TableCell>
                  <TableCell className="text-accent font-medium">Zero Defects</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/10">
                  <TableCell className="font-medium text-primary">Delivery & Logistics</TableCell>
                  <TableCell className="text-muted-foreground">Unpredictable lead times, manual expediting.</TableCell>
                  <TableCell className="text-muted-foreground">SIOP-driven, global hubs, automated tracking.</TableCell>
                  <TableCell className="text-accent font-medium">100% OTIF</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/10">
                  <TableCell className="font-medium text-primary">Cost & Efficiency</TableCell>
                  <TableCell className="text-muted-foreground">Hidden waste, high inventory, variance.</TableCell>
                  <TableCell className="text-muted-foreground">Standardized work, flow, continuous improvement.</TableCell>
                  <TableCell className="text-accent font-medium">Max EBITDA</TableCell>
                </TableRow>
                <TableRow className="hover:bg-secondary/10">
                  <TableCell className="font-medium text-primary">People & Culture</TableCell>
                  <TableCell className="text-muted-foreground">Siloed, dependent on tribal knowledge.</TableCell>
                  <TableCell className="text-muted-foreground">Empowered teams, multi-skilled, clear career paths.</TableCell>
                  <TableCell className="text-accent font-medium">High Retention</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Lean Principles */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="font-serif text-3xl text-primary mb-12 text-center">Lean Principles in Action</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-serif text-lg text-primary">Value Stream Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Visualizing the end-to-end flow to identify and eliminate non-value-added steps.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <h3 className="font-serif text-lg text-primary">Standardized Work</h3>
              <p className="text-sm text-muted-foreground">
                Creating the baseline for improvement and ensuring consistency across shifts.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-serif text-lg text-primary">Visual Management</h3>
              <p className="text-sm text-muted-foreground">
                Making the status of the system understood at a glance by everyone.
              </p>
            </div>

            <div className="space-y-4 p-6 border border-border/40 hover:border-accent/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <Circle size={20} />
              </div>
              <h3 className="font-serif text-lg text-primary">Gemba Walks</h3>
              <p className="text-sm text-muted-foreground">
                Go see, ask why, show respect. Leadership happens where the value is created.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
