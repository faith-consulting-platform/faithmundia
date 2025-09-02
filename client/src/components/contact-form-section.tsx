import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";

export default function ContactFormSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      serviceType: undefined,
      budget: "",
      timeline: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest("POST", "/api/consultation-requests", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Request Submitted Successfully!",
        description: "I'll personally review your request and respond within 48 hours at consult@faithmundia.co.ke",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-accent/5 border border-accent rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="text-accent" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">Thank You!</h2>
            <p className="text-xl text-secondary mb-8">
              Your consultation request has been submitted successfully. I'll personally review it and respond within 48 hours at consult@faithmundia.co.ke
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-accent hover:bg-green-700"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-card border border-border rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-secondary">Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Ready to Design the Future of Learning?</h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto px-2">
            Let's discuss how we can transform your learning initiatives with innovative, evidence-based solutions. I'll respond to all inquiries personally at consult@faithmundia.co.ke
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name"
                          className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Organization</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your organization name"
                          className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com"
                          className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Type of Service *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background">
                            <SelectValue placeholder="Select a service type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Individual / Educator</SelectItem>
                          <SelectItem value="startup">Startup / Small Team</SelectItem>
                          <SelectItem value="enterprise">Enterprise / Institutional</SelectItem>
                          <SelectItem value="workshop">Workshop / Speaking</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-plus-months">6+ months</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-primary">Project Description / Consulting Need *</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={5}
                        placeholder="Please describe your project, goals, and how I can help you achieve them..."
                        className="px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 bg-background resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="group bg-gradient-to-r from-accent to-gold text-white px-4 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                      Submit Request & Get Started
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-secondary mt-4">
                  I'll personally review your request and respond within 48 hours.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
