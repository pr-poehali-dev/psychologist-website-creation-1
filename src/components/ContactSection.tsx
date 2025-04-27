import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Связаться со мной</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Если у вас есть вопросы или вы хотите записаться на консультацию, заполните форму ниже или воспользуйтесь контактной информацией.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-700">г. Москва, ул. Психологов, д. 42, офис 301</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-700">+7 (900) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-700">info@психогармония.рф</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Часы работы</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Понедельник - Пятница</span>
                  <span className="font-medium">9:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Суббота</span>
                  <span className="font-medium">10:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Воскресенье</span>
                  <span className="font-medium">Выходной</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                  <Input id="name" placeholder="Ваше имя" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                <Input id="subject" placeholder="Тема сообщения" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение..." 
                  rows={6} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">Отправить сообщение</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
