import { Users, Rocket, Building2, Presentation, Mic, Handshake } from "lucide-react";

export default function PackagesSection() {
  const packages = [
    {
      title: "Individual / Educator",
      subtitle: "For teachers, creators, and early-stage professionals",
      services: [
        {
          name: "1:1 Strategy Session",
          price: "$300",
          description: "60-90 minutes of personalized consultation on AI in course creation and instructional design"
        },
        {
          name: "Course/Product Audit",
          price: "$800",
          description: "In-depth review with practical recommendations for improvement"
        }
      ],
      outcome: "Clarity, actionable strategies, and expert direction for your learning initiatives",
      highlight: false
    },
    {
      title: "Startup / Small Team",
      subtitle: "For EdTech startups, NGOs, and small L&D teams",
      services: [
        {
          name: "EdTech Strategy Sprint",
          price: "$7,500",
          description: "4-6 weeks: Market fit analysis, product roadmap, AI integration strategy"
        },
        {
          name: "Learning Design Package",
          price: "$10,000+",
          description: "Creating pedagogy-aligned products, courses, or platforms"
        }
      ],
      outcome: "A clear, validated path to launch or scale your product with confidence",
      highlight: true
    },
    {
      title: "Enterprise / Institutional",
      subtitle: "For universities, governments, NGOs, corporate L&D",
      services: [
        {
          name: "AI Education Advisory",
          price: "$40K-$75K",
          description: "3-6 months: Strategic guidance, executive workshops, AI adoption roadmap"
        },
        {
          name: "Learning Ecosystem Design",
          price: "$50K-$100K+",
          description: "End-to-end consulting on curriculum, platforms, data strategy"
        }
      ],
      outcome: "Large-scale, future-ready learning ecosystems designed for global impact",
      highlight: false
    }
  ];

  const additionalServices = [
    {
      icon: Presentation,
      title: "Workshops & Masterclasses",
      description: "Virtual or in-person sessions",
      price: "$3,000 - $10,000"
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description: "Keynotes, panels, summits",
      price: "$5,000 - $15,000"
    },
    {
      icon: Handshake,
      title: "Advisory Board Roles",
      description: "Annual retainers or equity",
      price: "$25,000 - $50,000"
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block bg-card border border-border rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-secondary">Investment Options</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Consulting Packages</h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto px-4">
            Choose the right level of engagement for your needs, from individual sessions to enterprise transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`group relative bg-card border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                pkg.highlight 
                  ? 'border-accent bg-gradient-to-br from-accent/5 to-gold/5' 
                  : 'border-border hover:border-muted'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent to-gold text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${pkg.highlight ? 'bg-accent' : 'bg-gold'}`}></div>
                  <h3 className="text-2xl font-bold text-primary">{pkg.title}</h3>
                </div>
                <p className="text-secondary leading-relaxed">{pkg.subtitle}</p>
              </div>
              
              <div className="space-y-8 mb-10">
                {pkg.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-primary text-lg">{service.name}</h4>
                      <span className={`text-2xl font-bold ${pkg.highlight ? 'text-accent' : 'text-gold'}`}>
                        {service.price}
                      </span>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
                    <div className={`w-full h-px bg-gradient-to-r ${
                      pkg.highlight ? 'from-accent/20 to-transparent' : 'from-border to-transparent'
                    }`}></div>
                  </div>
                ))}
              </div>
              
              <div className={`rounded-2xl p-6 mb-8 ${pkg.highlight ? 'bg-card/50' : 'bg-muted/30'}`}>
                <h5 className="font-semibold text-primary mb-3 flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${pkg.highlight ? 'bg-accent' : 'bg-gold'}`}></div>
                  Outcome
                </h5>
                <p className="text-sm text-secondary leading-relaxed">{pkg.outcome}</p>
              </div>
              
              <a 
                href="#contact" 
                className={`group/btn block w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-accent to-gold text-white hover:shadow-lg hover:scale-105'
                    : 'bg-primary text-white hover:bg-secondary hover:shadow-lg hover:scale-105'
                }`}
              >
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200 inline-block">
                  Get Started
                </span>
              </a>
            </div>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-3xl p-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Additional Services</h3>
            <p className="text-secondary max-w-2xl mx-auto">
              Expand your reach with workshops, speaking engagements, and ongoing advisory partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              const colors = ['accent', 'gold', 'red'];
              const colorClass = colors[index % 3];
              
              return (
                <div key={index} className="group text-center hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-20 h-20 bg-${colorClass}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`text-${colorClass}`} size={36} />
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-3">{service.title}</h4>
                  <p className="text-secondary text-sm mb-4 leading-relaxed">{service.description}</p>
                  <p className={`text-${colorClass} font-bold text-lg`}>{service.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
