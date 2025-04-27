import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Психолог за работой" 
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
            <p className="text-gray-700 mb-6">
              Здравствуйте! Меня зовут Елена Смирнова, я дипломированный психолог с более чем 10-летним опытом
              работы в различных направлениях психологической практики. Моя миссия — помогать людям достигать
              внутренней гармонии и улучшать качество их жизни через психологическую поддержку.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Образование</h3>
                  <p className="text-gray-600">Московский Государственный Университет, факультет психологии</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Сертификации</h3>
                  <p className="text-gray-600">Когнитивно-поведенческая терапия, Гештальт-терапия, Семейная психотерапия</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Подход</h3>
                  <p className="text-gray-600">Индивидуальный подход к каждому клиенту, создание доверительной атмосферы</p>
                </div>
              </div>
            </div>
            
            <Button>Узнать больше обо мне</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
