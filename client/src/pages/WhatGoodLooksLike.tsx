import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Users, Clock, ShieldCheck, Zap, TrendingUp, ArrowRight } from "lucide-react";

export default function WhatGoodLooksLike() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-6">
              Operational Excellence
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary mb-8 leading-tight">
              What Good <br />
              <span className="text-muted-foreground">Looks Like.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A structured handbook for achieving world-class manufacturing standards. 
              This framework defines the gold standard for People, Process, and Performance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <Tabs defaultValue="people" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto p-1 bg-secondary/50">
              <TabsTrigger value="people" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">People & Stability</TabsTrigger>
              <TabsTrigger value="jit" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Just-In-Time</TabsTrigger>
              <TabsTrigger value="quality" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Built-In Quality</TabsTrigger>
              <TabsTrigger value="efficiency" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Efficiency</TabsTrigger>
              <TabsTrigger value="improvement" className="py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm">Improvement</TabsTrigger>
            </TabsList>

            {/* 1. People Development & Stable Conditions */}
            <TabsContent value="people" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <Users size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">People Development & Stable Conditions</h2>
                  <p className="text-muted-foreground">
                    The foundation of any production system is its people. We ensure stability through rigorous training, 
                    standardized workstations, and a clean, organized environment.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">1.13 Mastery of Workstations</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Ensuring every operator has the skills and knowledge to perform their tasks safely and correctly.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Polyvalence qualification for all workstations</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Check current process flow and list all operations</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> DOJO room adapted for HSE, Quality, and technical training</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">1.14 5S & Workplace Organization</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>A place for everything and everything in its place. 5S is not just cleaning; it's about discipline and efficiency.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Sort, Set in order, Shine, Standardize, Sustain</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Visual management standards applied</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Regular audits to maintain standards</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">1.05 Training Plan</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Structured development paths for all employees to ensure growth and capability.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Identification of training needs (Oct-Nov)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Gap analysis and definition of training plans</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> On-boarding process for new hires</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 2. Just-In-Time */}
            <TabsContent value="jit" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <Clock size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Just-In-Time (JIT)</h2>
                  <p className="text-muted-foreground">
                    Producing only what is needed, when it is needed, and in the amount needed. 
                    We control production through Takt Time and Pull Systems.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">2.03 Pull Line at Takt Time</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Production pace is synchronized with customer demand (Takt Time).</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Takt time is the metronome of the production system</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Resources aligned with speed - not more, not less</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Avoid changing takt time to recover delays</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">2.05 Pull System / Kanban</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Downstream processes signal upstream processes what to produce.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Kanban loops give appropriate signals</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Shop stock associated with information flow</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Regular Kanban label audits</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-medium">2.01 SIOP & JIT Window</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Sales, Inventory, and Operations Planning (SIOP) aligns demand with supply.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> JIT Window analysis for sequenced orders</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Comparison of customer flow vs. internal capability</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Detailed calculation of available JIT Window</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 3. Built-In Quality */}
            <TabsContent value="quality" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <ShieldCheck size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Built-In Quality</h2>
                  <p className="text-muted-foreground">
                    Quality is not inspected in; it is built in. We use Poka-Yoke and rigorous standards 
                    to prevent defects from ever passing to the next station.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">3.02 Poka-Yoke (Error Proofing)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Mechanisms that prevent mistakes from becoming defects.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Best Poka-Yoke is a design Poka-Yoke (full proof)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Simple, cheap, reliable, and no added work</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Systematically tested every shift</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">7 Quality Basics</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Fundamental practices that ensure consistent quality output.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> OK First Part validation</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Rework under control</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Management of Non-Conformance</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Final Inspection protocols</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 4. Efficiency */}
            <TabsContent value="efficiency" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <Zap size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Efficiency</h2>
                  <p className="text-muted-foreground">
                    Maximizing value by eliminating waste. We focus on OEE and quick changeovers (SMED) 
                    to ensure our assets are productive.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">4.02 SMED (Changeover Reduction)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Single Minute Exchange of Die - reducing setup times to enable smaller batches.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Convert internal setup to external setup</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Standardize functions, not just parts</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Enable "Every Part Every Interval" (EPEI)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">4.01 OEE Structure</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Overall Equipment Effectiveness - the gold standard for measuring manufacturing productivity.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Availability x Performance x Quality</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Clear identification of losses</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Data-driven improvement actions</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* 5. Drive Improvement */}
            <TabsContent value="improvement" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-6">
                  <div className="w-16 h-16 bg-secondary rounded-sm flex items-center justify-center text-primary mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <h2 className="font-serif text-3xl text-primary">Drive Improvement</h2>
                  <p className="text-muted-foreground">
                    Continuous improvement is not an event; it's a culture. We use structured plans 
                    and clear KPIs to drive performance forward every day.
                  </p>
                </div>
                <div className="md:col-span-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-medium">5.09 Plant Improvement Plan (PIP)</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>A strategic roadmap for the plant's development over time.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Linked to business objectives</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Clear ownership and timelines</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Regular review and adjustment</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-medium">KPI & Maturity Models</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>Measuring what matters and understanding where we stand.</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> SQCDP KPI Framework (Safety, Quality, Cost, Delivery, People)</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> KPI Cascading from plant to shop floor</li>
                          <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-1 text-accent" /> Maturity levels: GOOD / BETTER / BEST</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-secondary/30">
        <div className="container max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-primary mb-6">Ready to Implement?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            This framework is not just theory—it's a proven operating system that I have deployed 
            across multiple global sites to drive double-digit improvements in efficiency and quality.
          </p>
          <a href="/production" className="inline-flex items-center justify-center h-12 px-8 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-base font-medium">
            View Production Roadmap <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
