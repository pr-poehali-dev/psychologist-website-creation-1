import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-secondary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-secondary transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-6">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Психологическая</span>
                <span className="block text-primary mt-2">поддержка и помощь</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Профессиональная психологическая помощь в решении личных проблем, 
                кризисных ситуаций и поиске внутренней гармонии. 
                Индивидуальный подход к каждому клиенту.
              </p>
              <div className="mt-8 sm:mt-8">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 md:py-4 md:text-lg md:px-10">
                    <Calendar className="w-5 h-5 mr-2" />
                    Записаться на консультацию
                  </Button>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-3">
                  <p className="text-sm text-gray-500">
                    Первая ознакомительная консультация – бесплатно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Психолог"
        />
      </div>
    </div>
  );
};

export default HeroSection;
