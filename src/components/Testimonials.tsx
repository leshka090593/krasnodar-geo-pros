import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Александр Петров",
    role: "Владелец участка",
    text: "Отличная работа! Провели межевание участка быстро и качественно. Все документы оформили в срок, помогли с подачей в Росреестр.",
    rating: 5
  },
  {
    name: "Марина Сидорова",
    role: "Застройщик",
    text: "Сотрудничаем уже несколько лет. Выполняют топографические съемки для наших объектов. Профессионалы своего дела!",
    rating: 5
  },
  {
    name: "Игорь Васильев",
    role: "Частный клиент",
    text: "Нужно было срочно уточнить границы участка. Ребята приехали на следующий день, все сделали четко. Рекомендую!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы Клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Нам доверяют частные лица и крупные застройщики
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-300 animate-scale-in border-border"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
