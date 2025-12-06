import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Perry Hawkins",
      role: "Business Owner",
      company: "ZERO: Sustainable By Design",
      text: "Roberto is fantastic to work with. He is a strong leader who is passionate about Safety and the Wellbeing of his employees. Roberto is a fiery, passionate leader who knows how to get the best out of his team. He thinks outside the box and is willing to pushback when necessary. I believe he would be a great asset to any organization."
    },
    {
      name: "Paul Reiff",
      role: "Retired Manufacturing and Supply Chain Executive",
      company: "Self-employed",
      text: "Roberto is a plant turnaround specialist. He's able to quickly evaluate talent, stabilize processes, and develop strategies for improvement. Roberto establishes a cadence for metrics and reviews to continuously improve the business. The project I worked on Roberto required driving significant transformation with associated risk. His consistent, steady approach offered stability in times of change."
    },
    {
      name: "Jana Lenartova, CPSM",
      role: "Director of Supply Management",
      company: "Chromalox",
      text: "His energy immediately challenged the team, disrupted established ways of working, and activated the change we needed. He delivered on a challenging task, navigating the team through complex improvements and culminating in a record-breaking quarter of sales. Roberto is a perfect fit for any result-driven organization that needs the job done."
    },
    {
      name: "Johnny Sepulveda",
      role: "Director - Global Services and Project Management",
      company: "Chromalox",
      text: "Roberto has special skills that help him to capture the reality and develop action plans directed to achieve the business objective. He demonstrated High level of ethics, energy and organization implementing dashboard with key metrics to manage the business."
    },
    {
      name: "Tim Martersteck",
      role: "Project Manager",
      company: "Jedson Engineering",
      text: "Roberto set a new direction for the operations team in order to create a culture of improvement. He worked cross-functionally to make operations key performance indicators visual in order to drive accountability across the organization. His direction began the course correction required for Chromalox to embark on its path to world class."
    },
    {
      name: "Fabiano Duarte",
      role: "South America Regional Sales Manager",
      company: "IPG Photonics",
      text: "A highly qualified professional... I had the opportunity to learn a lot from him about dynamism in administration and the constant and healthy pursuit of achieving goals for operational growth."
    },
    {
      name: "Fernando Glz. Torres",
      role: "Chief Development Officer",
      company: "Catalyxx",
      text: "Roberto is a resourceful and versatile head of technical teams. In my years working with Roberto, I saw him solving complex situations, engaging large teams of hundreds of people reporting to him and developing business to a high level of excellence."
    },
    {
      name: "Caio Roque de Toledo",
      role: "Environmental Manager",
      company: "Ligga",
      text: "I learned a lot observing Roberto's attitudes. An objective, bold professional who makes difficult decisions with security and quick reasoning. Roberto values communication between different areas in an industrial plant... motivating constant information exchange."
    }
  ];

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-widest uppercase rounded-sm mb-4">
            Endorsements
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">
            Feedback from colleagues, partners, and team members across 20+ years of operations leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-background border-border/40 hover:shadow-md transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <Quote className="text-accent h-8 w-8 opacity-50" />
                <p className="text-muted-foreground italic leading-relaxed text-sm">
                  "{item.text}"
                </p>
                <div className="pt-4 border-t border-border/40">
                  <div className="font-serif text-primary font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{item.role}</div>
                  <div className="text-xs text-accent mt-1">{item.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
