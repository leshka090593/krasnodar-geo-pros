import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ лет опыта",
    description: "Успешно выполнено более 2000 проектов"
  },
  {
    icon: Shield,
    title: "Лицензии и допуски",
    description: "Все необходимые разрешения и сертификаты СРО"
  },
  {
    icon: Clock,
    title: "Быстрые сроки",
    description: "Выполнение работ от 1 дня, срочные заказы"
  },
  {
    icon: Users,
    title: "Опытные специалисты",
    description: "Квалифицированные кадастровые инженеры"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl font-bold text-foreground mb-6">О Компании</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы — профессиональная компания, специализирующаяся на геодезических и кадастровых 
              работах в Краснодаре и Краснодарском крае. Наши специалисты имеют многолетний опыт 
              и используют современное высокоточное оборудование.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Мы предоставляем полный спектр услуг: от топографической съемки до оформления всех 
              необходимых документов в Росреестре. Наша цель — сделать процесс получения 
              кадастровых услуг максимально простым и быстрым для наших клиентов.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></div>
                <p className="text-muted-foreground">Лицензии и допуски СРО для проведения кадастровых работ</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></div>
                <p className="text-muted-foreground">Современное геодезическое оборудование (GPS/ГЛОНАСС приемники, тахеометры)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></div>
                <p className="text-muted-foreground">Гарантия качества выполненных работ</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-soft transition-all duration-300 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
