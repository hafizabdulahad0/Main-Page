
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-800 dark:text-white mb-10">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              className="w-full h-full"
              title="About Hurricanian" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae est ut nunc consequat aliquet. 
              Donec at ultrices nibh, vitae fermentum mauris. Praesent quis pharetra nulla, in vestibulum tellus. 
              Suspendisse potenti. Morbi in faucibus dui.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
              Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
            <div className="flex justify-end">
              <Button className="bg-green-600 hover:bg-green-700 transition-transform duration-300 hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
