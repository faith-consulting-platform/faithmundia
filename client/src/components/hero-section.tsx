import { ArrowRight, Sparkles, Calendar, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-accent/20 to-gold/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/20 to-red/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-3 sm:px-4 py-2">
              <Sparkles className="text-accent" size={16} />
              <span className="text-xs sm:text-sm font-medium text-secondary">Redefining Learning Innovation</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Future of Learning
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-secondary mt-4 block">
                with AI, Learning Sciences & EdTech Strategy
              </span>
            </h1>
            
            <p className="text-xl leading-relaxed text-secondary max-w-2xl">
              I help institutions, EdTech startups, and global organizations design effective, scalable, 
              and future-proof learning solutions through innovative, evidence-based approaches.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center space-x-2 text-sm text-secondary">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Strategic Advisory</span>
              </div>
              <div className="inline-flex items-center space-x-2 text-sm text-secondary">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Learning Innovation</span>
              </div>
              <div className="inline-flex items-center space-x-2 text-sm text-secondary">
                <div className="w-2 h-2 bg-red rounded-full"></div>
                <span>Product Development</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group bg-gradient-to-r from-accent to-gold text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:shadow-xl transition-all duration-300 text-center">
                <Calendar className="inline mr-2" size={18} />
                Book Consultation
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
              </a>
              <a href="#packages" className="border-2 border-border text-primary px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-card hover:shadow-lg transition-all duration-300 text-center">
                View Packages
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-secondary">
              <Mail size={16} />
              <span>Direct access—no gatekeepers, no delays</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-card to-muted rounded-3xl p-8 shadow-2xl">
              <div className="h-full bg-gradient-to-br from-accent/10 to-gold/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-gold rounded-full mx-auto flex items-center justify-center">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">25,000+</div>
                    <div className="text-sm text-secondary">Global Followers</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">6,000+</div>
                    <div className="text-sm text-secondary">Newsletter Subscribers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
