import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, HeartHandshake, Users, Video } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "Индивидуальная терапия",
      description: "Персональные консультации для решения ваших психологических проблем и личностного роста.",
      icon: <Brain className="h-12 w-12 text-primary" />,
    },
    {
      title: "Семейная терапия",
      description: "Помощь семьям и парам в улучшении взаимоотношений и разрешении конфликтов.",
      icon: <HeartHandshake className="h-12 w-12 text-primary" />,
    },
    {
      title: "Групповые сессии",
      description: "Терапевтические группы для совместного преодоления схожих проблем в поддерживающей среде.",
      icon: <Users className="h-12 w-12 text-primary" />,
    },
    {
      title: "Онлайн консультации",
      description: "Удаленные консультации через видеосвязь для вашего удобства и экономии времени.",
      icon: <Video className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Мои услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Я предлагаю широкий спектр психологических услуг, направленных на улучшение вашего эмоционального благополучия и качества жизни.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
