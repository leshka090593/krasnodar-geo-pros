import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Ruler, FileText, Target, Map, Building } from "lucide-react";
import serviceTopography from "@/assets/service-topography.jpg";
import serviceCadastral from "@/assets/service-cadastral.jpg";

const services = [
  {
    icon: Map,
    title: "Топографическая съемка",
    description: "Создание топографических планов участков для проектирования и строительства",
    features: ["М 1:500, 1:1000, 1:2000", "Съемка надземных и подземных коммуникаций", "Быстрое выполнение работ"]
  },
  {
    icon: MapPin,
    title: "Межевание земельных участков",
    description: "Установление и закрепление границ земельных участков на местности",
    features: ["Полный пакет документов", "Согласование границ", "Подготовка межевого плана"]
  },
  {
    icon: Ruler,
    title: "Уточнение границ участка",
    description: "Восстановление и уточнение границ земельных участков",
    features: ["Работа с Росреестром", "Решение споров о границах", "Актуализация документов"]
  },
  {
    icon: Target,
    title: "Вынос точек в натуру",
    description: "Перенос проектных данных на местность для строительства",
    features: ["Вынос осей зданий", "Разбивка участка", "Высотная привязка"]
  },
  {
    icon: FileText,
    title: "Технический план",
    description: "Подготовка технических планов для регистрации объектов недвижимости",
    features: ["Для жилых домов", "Для нежилых зданий", "Для помещений"]
  },
  {
    icon: Building,
    title: "Кадастровые работы",
    description: "Полный спектр кадастровых услуг для физических и юридических лиц",
    features: ["Постановка на учет", "Раздел и объединение участков", "Изменение вида разрешенного использования"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Наши Услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр геодезических и кадастровых работ для физических и юридических лиц
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-glow transition-all duration-300 animate-scale-in border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-soft group">
            <img 
              src={serviceTopography} 
              alt="Топографическая съемка в Краснодаре" 
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Топографические работы</h3>
                <p>Примеры выполненных съемок участков различной площади</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-soft group">
            <img 
              src={serviceCadastral} 
              alt="Кадастровые работы в Краснодаре" 
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Кадастровые услуги</h3>
                <p>Успешно проведенные межевания и постановки на учет</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
