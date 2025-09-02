import { useState, useEffect } from "react";
import { GraduationCap, Rocket, Building, ArrowUpRight, X, Users, Target, Lightbulb, TrendingUp, BookOpen, Zap, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ClientTypesSection() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedClient(null);
      }
    };

    if (selectedClient !== null) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedClient]);

  const clientDetails = [
    {
      // Individual Educators
      challenges: [
        "Keeping up with rapidly evolving AI tools and educational technology",
        "Designing effective online and hybrid learning experiences", 
        "Balancing innovation with proven pedagogical principles",
        "Building engaging content that drives real learning outcomes"
      ],
      solutions: [
        "AI-powered course design workshops and personalized coaching",
        "Evidence-based instructional design frameworks and templates",
        "Career development strategies for the modern educator",
        "Hands-on training with cutting-edge EdTech tools"
      ],
      outcomes: [
        "Increased student engagement and learning outcomes",
        "Enhanced professional credibility and career opportunities", 
        "Streamlined content creation with AI-assisted workflows",
        "Deeper understanding of learning science principles"
      ],
      whyThisIsForYou: {
        title: "Why This Program is Perfect for You",
        description: "As an educator, you're at the forefront of a learning revolution. The tools and strategies you implement today will shape how students learn for years to come.",
        reasons: [
          "Stay ahead of the curve with cutting-edge AI integration techniques",
          "Transform your teaching approach with evidence-based methodologies", 
          "Build a competitive advantage in the evolving education landscape",
          "Create more engaging, personalized learning experiences for your students"
        ]
      }
    },
    {
      // Startups & Teams  
      challenges: [
        "Validating product-market fit in the competitive EdTech landscape",
        "Designing scalable learning products that actually work",
        "Building credible go-to-market strategies with limited resources",
        "Navigating complex educational procurement and adoption cycles"
      ],
      solutions: [
        "Strategic product roadmapping with learning science integration",
        "Market validation frameworks and user research methodologies", 
        "Go-to-market strategy development and partnership facilitation",
        "Investor pitch preparation and funding strategy consultation"
      ],
      outcomes: [
        "Clear product-market fit validation and strategic direction",
        "Increased funding success and investor confidence",
        "Accelerated user adoption and market penetration",
        "Sustainable business models aligned with educational impact"
      ],
      whyThisIsForYou: {
        title: "Why This is Your Competitive Advantage",
        description: "The EdTech market is crowded, but success belongs to those who understand both technology and learning science. This is your differentiator.",
        reasons: [
          "Validate your concept with proven frameworks before heavy investment",
          "Build products that educators actually want and students need",
          "Position your startup for funding success with solid educational foundations", 
          "Scale efficiently with strategies tested in real educational environments"
        ]
      }
    },
    {
      // Enterprises
      challenges: [
        "Implementing large-scale digital transformation initiatives",
        "Navigating complex organizational change and stakeholder alignment", 
        "Ensuring AI adoption complies with regulatory requirements",
        "Measuring ROI and impact of learning technology investments"
      ],
      solutions: [
        "Comprehensive digital transformation roadmapping and execution",
        "Change management strategies and stakeholder engagement frameworks",
        "Policy development and regulatory compliance consultation",
        "Impact measurement systems and ROI optimization strategies"
      ],
      outcomes: [
        "Successful organization-wide technology adoption and culture shift",
        "Measurable improvements in learning outcomes and operational efficiency",
        "Regulatory compliance and risk mitigation strategies", 
        "Sustainable competitive advantage through learning innovation"
      ],
      whyThisIsForYou: {
        title: "Why This Partnership is Strategic",
        description: "Enterprise transformation requires both vision and execution expertise. The organizations that move first will lead their industries.",
        reasons: [
          "Navigate complex change management with proven strategies",
          "Implement AI solutions that comply with institutional requirements",
          "Build sustainable competitive advantages through learning innovation",
          "Transform organizational culture while managing stakeholder expectations"
        ]
      }
    }
  ];

  const clientTypes = [
    {
      icon: GraduationCap,
      title: "Individual Educators",
      description: "Teachers, instructional designers, and creators looking to leverage AI and effective pedagogy.",
      features: ["AI Integration", "Course Design", "Career Development"],
      color: "accent",
      detailIcon: Users
    },
    {
      icon: Rocket,
      title: "Startups & Teams", 
      description: "Early-stage EdTech companies and NGOs designing impactful learning products.",
      features: ["Product Strategy", "Market Validation", "Go-to-Market"],
      color: "gold",
      detailIcon: Target
    },
    {
      icon: Building,
      title: "Enterprises",
      description: "Governments, universities, and global organizations seeking scalable AI-powered solutions.",
      features: ["Transformation", "Policy Advisory", "Implementation"],
      color: "red",
      detailIcon: Globe
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block bg-card border border-border rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-secondary">Partnership Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Who I Work With</h2>
          <p className="text-base sm:text-lg text-secondary max-w-2xl mx-auto px-2">
            From individual educators to global institutions, I provide tailored solutions 
            for every stage of your learning innovation journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientTypes.map((client, index) => {
            const IconComponent = client.icon;
            const colorClass = client.color === 'accent' ? 'accent' : 
                              client.color === 'gold' ? 'gold' : 'red';
            
            return (
              <div key={index} className="group relative bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-muted/20 rounded-2xl"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-${colorClass}/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`text-${colorClass}`} size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-200">
                    {client.title}
                  </h3>
                  
                  <p className="text-secondary leading-relaxed mb-8">
                    {client.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {client.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className={`inline-block bg-${colorClass}/10 text-${colorClass} px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedClient(index)}
                    className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200 group"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Portal */}
      {selectedClient !== null && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedClient(null);
            }
          }}
        >
          <div className="bg-background border border-border rounded-xl sm:rounded-2xl md:rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative mx-4 sm:mx-auto w-full sm:w-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-card hover:bg-muted border border-border rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <X size={20} className="text-secondary" />
            </button>

            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Header */}
              <div className="flex items-center space-x-6 mb-12">
                <div className={`w-20 h-20 bg-${clientTypes[selectedClient].color}/10 rounded-3xl flex items-center justify-center`}>
                  {(() => {
                    const IconComponent = clientTypes[selectedClient].icon;
                    return <IconComponent className={`text-${clientTypes[selectedClient].color}`} size={36} />;
                  })()}
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-2">{clientTypes[selectedClient].title}</h2>
                  <p className="text-lg text-secondary">{clientTypes[selectedClient].description}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-10">
                  {/* Challenges */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-red/10 rounded-2xl flex items-center justify-center">
                        <Zap className="text-red" size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Key Challenges</h3>
                    </div>
                    <ul className="space-y-4">
                      {clientDetails[selectedClient].challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-secondary">
                          <div className="w-2 h-2 bg-red/60 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <Lightbulb className="text-accent" size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">My Solutions</h3>
                    </div>
                    <ul className="space-y-4">
                      {clientDetails[selectedClient].solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-secondary">
                          <div className="w-2 h-2 bg-accent/60 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {/* Outcomes */}
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gold/10 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="text-gold" size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-primary">Expected Outcomes</h3>
                    </div>
                    <ul className="space-y-4">
                      {clientDetails[selectedClient].outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-secondary">
                          <div className="w-2 h-2 bg-gold/60 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why This is For You */}
                  <div className="bg-gradient-to-br from-card to-muted/30 border border-border rounded-2xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <Target className="text-accent" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{clientDetails[selectedClient].whyThisIsForYou.title}</h3>
                    </div>
                    
                    <p className="text-secondary leading-relaxed mb-6">
                      {clientDetails[selectedClient].whyThisIsForYou.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {clientDetails[selectedClient].whyThisIsForYou.reasons.map((reason, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-secondary">
                          <div className="w-2 h-2 bg-accent/60 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed font-medium">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-border text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Started?</h3>
                <p className="text-secondary mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help transform your learning initiatives with proven strategies and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setSelectedClient(null);
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-accent to-gold text-white px-8 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedClient(null)}
                    className="border border-border px-8 py-3 rounded-2xl hover:bg-muted transition-all duration-300"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
