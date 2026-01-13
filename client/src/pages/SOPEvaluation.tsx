import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, AlertCircle, FileText, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function SOPEvaluation() {
  const [sopId, setSopId] = useState("");
  const [scores, setScores] = useState({
    safety: 3,
    clarity: 3,
    efficiency: 3,
    completeness: 3,
    visuals: 3
  });
  const [submitted, setSubmitted] = useState(false);

  const calculateTotal = () => {
    const sum = Object.values(scores).reduce((a, b) => a + b, 0);
    return (sum / (Object.keys(scores).length * 5)) * 100;
  };

  const totalScore = calculateTotal();

  const getGrade = (score: number) => {
    if (score >= 90) return { label: "World Class", color: "text-green-600", bg: "bg-green-100" };
    if (score >= 80) return { label: "Standard", color: "text-blue-600", bg: "bg-blue-100" };
    if (score >= 60) return { label: "Needs Improvement", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { label: "Critical Gaps", color: "text-red-600", bg: "bg-red-100" };
  };

  const grade = getGrade(totalScore);

  const handleSliderChange = (category: keyof typeof scores, value: number[]) => {
    setScores(prev => ({ ...prev, [category]: value[0] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would save to a database
  };

  return (
    <Layout>
      <div className="min-h-screen bg-secondary/10 py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <Link to="/what-good-looks-like" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to What Good Looks Like
          </Link>

          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl text-primary mb-2">SOP Scoring & Evaluation</h1>
            <p className="text-muted-foreground">
              Evaluate Standard Operating Procedures against World Class criteria to identify gaps and drive improvement.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Document Details</CardTitle>
                  <CardDescription>Enter the details of the SOP you are evaluating.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="sop-id">SOP Title or ID</Label>
                    <Input 
                      id="sop-id" 
                      placeholder="e.g., SOP-MAINT-001 Pump Overhaul" 
                      value={sopId}
                      onChange={(e) => setSopId(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Evaluation Criteria</CardTitle>
                  <CardDescription>Rate each dimension on a scale of 1 (Poor) to 5 (Excellent).</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Safety */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium">Safety Integration</Label>
                      <span className="font-bold text-primary">{scores.safety}/5</span>
                    </div>
                    <Slider 
                      value={[scores.safety]} 
                      min={1} 
                      max={5} 
                      step={1} 
                      onValueChange={(val) => handleSliderChange('safety', val)} 
                    />
                    <p className="text-sm text-muted-foreground">
                      Are hazards clearly identified? Are PPE requirements explicit? Are warnings placed at the point of risk?
                    </p>
                  </div>

                  {/* Clarity */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium">Clarity & Conciseness</Label>
                      <span className="font-bold text-primary">{scores.clarity}/5</span>
                    </div>
                    <Slider 
                      value={[scores.clarity]} 
                      min={1} 
                      max={5} 
                      step={1} 
                      onValueChange={(val) => handleSliderChange('clarity', val)} 
                    />
                    <p className="text-sm text-muted-foreground">
                      Is the language simple and direct? Are steps logical? Is jargon avoided or defined?
                    </p>
                  </div>

                  {/* Visuals */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium">Visual Standards</Label>
                      <span className="font-bold text-primary">{scores.visuals}/5</span>
                    </div>
                    <Slider 
                      value={[scores.visuals]} 
                      min={1} 
                      max={5} 
                      step={1} 
                      onValueChange={(val) => handleSliderChange('visuals', val)} 
                    />
                    <p className="text-sm text-muted-foreground">
                      Are photos/diagrams used effectively? Do visuals clearly show "Good" vs "Bad"?
                    </p>
                  </div>

                  {/* Efficiency */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium">Process Efficiency</Label>
                      <span className="font-bold text-primary">{scores.efficiency}/5</span>
                    </div>
                    <Slider 
                      value={[scores.efficiency]} 
                      min={1} 
                      max={5} 
                      step={1} 
                      onValueChange={(val) => handleSliderChange('efficiency', val)} 
                    />
                    <p className="text-sm text-muted-foreground">
                      Is the sequence optimized? Are tools/parts listed upfront? Is non-value-added motion minimized?
                    </p>
                  </div>

                  {/* Completeness */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label className="text-base font-medium">Completeness & Verification</Label>
                      <span className="font-bold text-primary">{scores.completeness}/5</span>
                    </div>
                    <Slider 
                      value={[scores.completeness]} 
                      min={1} 
                      max={5} 
                      step={1} 
                      onValueChange={(val) => handleSliderChange('completeness', val)} 
                    />
                    <p className="text-sm text-muted-foreground">
                      Are all critical steps covered? Are there clear verification points (checks/measurements)?
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="sticky bottom-4 bg-background/80 backdrop-blur-md p-4 border rounded-lg shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${grade.bg} ${grade.color}`}>
                    {Math.round(totalScore)}%
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Current Grade</div>
                    <div className={`font-bold ${grade.color}`}>{grade.label}</div>
                  </div>
                </div>
                <Button type="submit" size="lg">Submit Evaluation</Button>
              </div>
            </form>
          ) : (
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="pt-6 text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2">Evaluation Submitted</h2>
                <p className="text-muted-foreground mb-8">
                  The evaluation for <span className="font-medium text-foreground">{sopId}</span> has been recorded.
                </p>
                
                <div className="max-w-sm mx-auto bg-background rounded-lg border p-6 mb-8 shadow-sm">
                  <div className="text-sm text-muted-foreground mb-1">Final Score</div>
                  <div className="text-4xl font-bold text-primary mb-2">{Math.round(totalScore)}%</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${grade.bg} ${grade.color}`}>
                    {grade.label}
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={() => {
                    setSubmitted(false);
                    setSopId("");
                    setScores({ safety: 3, clarity: 3, efficiency: 3, completeness: 3, visuals: 3 });
                  }}>
                    Evaluate Another SOP
                  </Button>
                  <Link to="/what-good-looks-like">
                    <Button>Return to Dashboard</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
