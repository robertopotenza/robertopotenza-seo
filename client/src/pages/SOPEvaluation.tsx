import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload, Loader2, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

export default function SOPEvaluation() {
  const [, setLocation] = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    sopTitle: "",
    facility: "",
    systemOrProcess: "",
    revision: "",
    effectiveDate: "",
    reviewerName: "",
    reviewDate: "",
    sopContent: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (!validTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload PDF, DOCX, or TXT files.");
        return;
      }
      setSelectedFile(file);
      setFormData(prev => ({ ...prev, sopContent: "" }));
    }
  };

  const extractTextFromFile = async (file: File): Promise<string> => {
    if (file.type === 'text/plain') {
      return await file.text();
    }
    // For demo purposes, we'll simulate extraction for other types
    return `[Simulated content extraction for ${file.name}]`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.sopTitle.trim()) {
      toast.error("SOP Title is required");
      return;
    }

    setIsSubmitting(true);
    setUploadProgress("Initializing system...");

    try {
      // Simulate API delays
      await new Promise(resolve => setTimeout(resolve, 800));

      let finalContent = formData.sopContent;

      if (selectedFile) {
        setUploadProgress("Uploading file...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUploadProgress("Extracting text from document...");
        finalContent = await extractTextFromFile(selectedFile);
      }

      if (!finalContent.trim() && !selectedFile) {
        toast.error("Please provide SOP content either by uploading a file or pasting text");
        setIsSubmitting(false);
        return;
      }

      setUploadProgress("Creating evaluation...");
      await new Promise(resolve => setTimeout(resolve, 800));

      setUploadProgress("Starting analysis...");
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast.success("Evaluation started successfully!");
      // In a real app, this would redirect to results. For now, we'll just show success.
      // setLocation(`/evaluation/123`); 
      
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit evaluation");
    } finally {
      setIsSubmitting(false);
      setUploadProgress("");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-slate-50">
        <header className="border-b bg-white">
          <div className="container py-4 flex items-center gap-4">
            <Link href="/what-good-looks-like">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold">New SOP Evaluation</h1>
            </div>
          </div>
        </header>

        <main className="container py-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Document Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle>Document Upload</CardTitle>
                <CardDescription>
                  Upload your SOP document in PDF, DOCX, or TXT format, or paste the text directly below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="file-upload">Upload File</Label>
                  <div className="mt-2">
                    <input
                      ref={fileInputRef}
                      id="file-upload"
                      type="file"
                      accept=".pdf,.docx,.txt"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {selectedFile ? selectedFile.name : "Choose File"}
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground">Or paste text</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="sopContent">SOP Content (Text)</Label>
                  <Textarea
                    id="sopContent"
                    value={formData.sopContent}
                    onChange={(e) => setFormData(prev => ({ ...prev, sopContent: e.target.value }))}
                    placeholder="Paste your SOP content here..."
                    rows={8}
                    disabled={!!selectedFile || isSubmitting}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Metadata Section */}
            <Card>
              <CardHeader>
                <CardTitle>SOP Metadata</CardTitle>
                <CardDescription>
                  Provide identifying information for this SOP evaluation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="sopTitle">SOP Title *</Label>
                  <Input
                    id="sopTitle"
                    value={formData.sopTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, sopTitle: e.target.value }))}
                    placeholder="e.g., Compressor Startup Procedure"
                    required
                    disabled={isSubmitting}
                    className="mt-2"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="facility">Facility / Site</Label>
                    <Input
                      id="facility"
                      value={formData.facility}
                      onChange={(e) => setFormData(prev => ({ ...prev, facility: e.target.value }))}
                      placeholder="e.g., Plant A"
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="systemOrProcess">System or Process Name</Label>
                    <Input
                      id="systemOrProcess"
                      value={formData.systemOrProcess}
                      onChange={(e) => setFormData(prev => ({ ...prev, systemOrProcess: e.target.value }))}
                      placeholder="e.g., Compression System"
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="revision">Revision</Label>
                    <Input
                      id="revision"
                      value={formData.revision}
                      onChange={(e) => setFormData(prev => ({ ...prev, revision: e.target.value }))}
                      placeholder="e.g., Rev 3.0"
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="effectiveDate">Effective Date</Label>
                    <Input
                      id="effectiveDate"
                      type="date"
                      value={formData.effectiveDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, effectiveDate: e.target.value }))}
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reviewerName">Reviewer Name</Label>
                    <Input
                      id="reviewerName"
                      value={formData.reviewerName}
                      onChange={(e) => setFormData(prev => ({ ...prev, reviewerName: e.target.value }))}
                      placeholder="e.g., John Doe"
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="reviewDate">Review Date</Label>
                    <Input
                      id="reviewDate"
                      type="date"
                      value={formData.reviewDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, reviewDate: e.target.value }))}
                      disabled={isSubmitting}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Link href="/what-good-looks-like">
                <Button type="button" variant="outline" disabled={isSubmitting}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {uploadProgress || "Processing..."}
                  </>
                ) : (
                  "Start Evaluation"
                )}
              </Button>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
}
