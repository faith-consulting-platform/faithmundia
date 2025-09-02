import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const services = [
    { name: "Individual Consulting", href: "#packages" },
    { name: "Startup Advisory", href: "#packages" },
    { name: "Enterprise Solutions", href: "#packages" },
    { name: "Speaking & Workshops", href: "#packages" }
  ];

  const links = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Fay Institute", href: "https://fayinstitute.co.ke" },
    { name: "Newsletter", href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7083044175432007680" }
  ];

  return (
    <footer className="bg-primary text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="sm:col-span-2 md:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-gold rounded-full"></div>
              <h3 className="text-3xl font-bold">Faith Mundia</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg max-w-md">
              EdTech Strategy & AI Learning Consultant helping organizations worldwide 
              design the future of learning through innovative, evidence-based solutions.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/faithmundia/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110">
                <Linkedin className="group-hover:text-white transition-colors duration-200" size={20} />
              </a>
              <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7083044175432007680" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center hover:bg-gold transition-all duration-300 hover:scale-110">
                <Twitter className="group-hover:text-primary transition-colors duration-200" size={20} />
              </a>
              <a href="mailto:consult@faithmundia.co.ke" className="group w-12 h-12 bg-red/20 rounded-2xl flex items-center justify-center hover:bg-red transition-all duration-300 hover:scale-110">
                <Mail className="group-hover:text-white transition-colors duration-200" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-200 hover:text-accent transition-colors duration-200 group flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></div>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-gray-200 hover:text-gold transition-colors duration-200 group flex items-center"
                  >
                    <div className="w-1 h-1 bg-gold rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-200">&copy; 2025 Faith Mundia Consulting. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-200">
              <span>Designed with excellence</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <div className="w-2 h-2 bg-red rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
