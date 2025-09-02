import { Brain, Bot, Settings, TrendingUp, ClipboardList } from "lucide-react";

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: Brain,
      title: "Learning Sciences",
      description: "Evidence-based instructional design"
    },
    {
      icon: Bot,
      title: "AI in Education",
      description: "Learning engineering solutions"
    },
    {
      icon: Settings,
      title: "Product Strategy",
      description: "EdTech design & development"
    },
    {
      icon: TrendingUp,
      title: "Data Engineering",
      description: "Learning analytics systems"
    },
    {
      icon: ClipboardList,
      title: "Policy Advisory",
      description: "Educational research & strategy"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/6 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">Global Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Core Expertise</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Depth and global credibility across the learning innovation spectrum
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            const colors = ['accent', 'gold', 'red', 'accent', 'gold'];
            const colorClass = colors[index % 5];
            
            return (
              <div key={index} className="group text-center hover:-translate-y-2 transition-all duration-300">
                <div className={`w-20 h-20 bg-${colorClass}/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                  <IconComponent className={`text-${colorClass}`} size={36} />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-200">{area.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
