import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";

export default function SocialProofSection() {
  const achievements = [
    {
      icon: Linkedin,
      number: "25,000+",
      description: "LinkedIn Followers"
    },
    {
      icon: Mail,
      number: "6,000+",
      description: "Newsletter Subscribers"
    },
    {
      icon: Award,
      title: "Featured Expert",
      description: "Global EdTech conversations & Leading African woman in technology"
    },
    {
      icon: GraduationCap,
      title: "Fay Institute Founder",
      description: "Creator Studio, Marketplace, and LMS initiatives"
    }
  ];

  const expertiseTags = [
    "Learning Sciences Expert",
    "AI in Education Pioneer", 
    "EdTech Strategist",
    "Global Speaker"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-card border border-border rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-secondary">Global Recognition</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Trusted by Global Leaders</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Recognized expertise with a proven track record of impact in education technology and learning innovation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-card to-muted/50 rounded-3xl p-8 shadow-2xl border border-border">
              <div className="h-full bg-gradient-to-br from-accent/5 to-gold/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10 rounded-2xl"></div>
                <div className="relative text-center space-y-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent to-gold rounded-full mx-auto flex items-center justify-center">
                    <Award className="text-white" size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">Global Impact</h3>
                    <p className="text-secondary">Transforming Education Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const colors = ['accent', 'gold', 'red', 'accent'];
              const colorClass = colors[index % 4];
              
              return (
                <div key={index} className="group flex items-center space-x-6 hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-20 h-20 bg-${colorClass}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`text-${colorClass}`} size={28} />
                  </div>
                  <div className="space-y-1">
                    {achievement.number && <h4 className="text-3xl font-bold text-primary">{achievement.number}</h4>}
                    {achievement.title && <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">{achievement.title}</h4>}
                    <p className="text-secondary leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Published research & thought leadership on learning, AI, and technology with global recognition 
            for innovative approaches to education transformation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseTags.map((tag, index) => {
              const colors = ['accent', 'gold', 'red', 'accent'];
              const colorClass = colors[index % 4];
              
              return (
                <span key={index} className={`bg-${colorClass}/10 text-${colorClass} px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 border border-${colorClass}/20`}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
