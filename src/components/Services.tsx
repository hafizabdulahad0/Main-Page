
import { useState } from 'react';
import { Globe, Diamond, Briefcase, FileSpreadsheet, UtensilsCrossed, Store, Tv, Dog, Building, Smartphone, MessageCircle, Car, Package, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const availableServices = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "HURRICANIAN DOMAINS",
      description: "BUY/SELL DOMAIN & HOSTING (BOOK YOUR DOMAIN & SUPER FAST HOSTING TODAY)"
    },
    {
      icon: <Diamond className="w-10 h-10" />,
      title: "HURRICANIAN GEMS",
      description: "BUY/SELL GEMSTONES"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "HURRICANIAN TRAVELS",
      description: "GET YOUR VISA (VISIT - WORK - STUDY - IMMIGRATION)"
    },
    {
      icon: <FileSpreadsheet className="w-10 h-10" />,
      title: "HURRICANIAN ADS",
      description: "UPLOAD FREE AD BUY/SELL EVERYTHING ONLINE CLASSIFIED STORE"
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" />,
      title: "HURRICANIAN FOODS",
      description: "BUY/SELL FOOD PRODUCTS"
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "HURRICANIAN STORE",
      description: "ONLINE E-COMMERCE STORE"
    },
    {
      icon: <Tv className="w-10 h-10" />,
      title: "HURRICANIAN NEWS",
      description: "DAILY NEWS ONLINE"
    },
    {
      icon: <Dog className="w-10 h-10" />,
      title: "HURRICANIAN LIVESTOCKS",
      description: "BUY/SELL ANIMALS"
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "HURRICANIAN ENTERPRISES",
      description: "BUY/SELL PROPERTY"
    }
  ];

  const comingSoonServices = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "SOCIAL MEDIA APP",
      description: "COMING SOON!"
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "MESSENGER",
      description: "COMING SOON!"
    },
    {
      icon: <Car className="w-10 h-10" />,
      title: "DRIVER APP",
      description: "COMING SOON!"
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "DELIVERY APP",
      description: "COMING SOON!"
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "MOBILE BANKING APP",
      description: "COMING SOON!"
    }
  ];

  const displayedServices = showAllServices ? availableServices : availableServices.slice(0, 5);
  const displayedComingSoon = showAllServices ? comingSoonServices : comingSoonServices.slice(0, 5);

  return (
    <section id="services" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white">OUR SERVICES</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {displayedServices.map((service, index) => (
            <div key={index} className="service-card border-2 border-green-600 dark:border-green-500">
              <div className="service-icon text-green-600 dark:text-green-400">
                {service.icon}
              </div>
              <h3 className="service-title text-gray-800 dark:text-white">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        
        {!showAllServices && availableServices.length > 5 && (
          <div className="text-center mb-16">
            <Button 
              onClick={() => setShowAllServices(true)}
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-110 transform"
            >
              See More Services
            </Button>
          </div>
        )}
        
        <h2 className="section-title text-gray-800 dark:text-white">Coming Soon</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayedComingSoon.map((service, index) => (
            <div key={index} className="coming-soon-card border-2 border-green-600 dark:border-green-500">
              <div className="service-icon text-green-600 dark:text-green-400">
                {service.icon}
              </div>
              <h3 className="service-title text-gray-800 dark:text-white">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {!showAllServices && comingSoonServices.length > 5 && (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setShowAllServices(true)}
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-110 transform"
            >
              See More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
