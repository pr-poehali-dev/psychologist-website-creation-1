import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "Елена помогла мне разобраться с паническими атаками, от которых я страдала более года. После курса терапии я наконец почувствовала себя свободной от постоянного страха. Спасибо за профессионализм и поддержку!",
      author: "Анна К.",
      position: "менеджер, 34 года",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      content: "Семейная терапия с Еленой буквально спасла наш брак. Мы научились слышать друг друга и решать конфликты конструктивно. Теперь в нашей семье снова гармония и понимание.",
      author: "Дмитрий и Ольга С.",
      position: "семейная пара, 41 и 38 лет",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      content: "После нескольких месяцев терапии я наконец разобрался с проблемами самооценки и уверенности в себе. Благодаря Елене, я получил повышение и наладил личную жизнь. Рекомендую всем, кто хочет изменить свою жизнь к лучшему.",
      author: "Сергей М.",
      position: "инженер, 29 лет",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Истории успеха моих клиентов — лучшее подтверждение эффективности нашей совместной работы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
