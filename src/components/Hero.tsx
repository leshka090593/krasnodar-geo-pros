import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-geodesy.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Services List */}
          <div className="lg:col-span-3 space-y-2 animate-fade-in">
            <ul className="text-red-500 space-y-1.5 text-sm font-medium leading-relaxed">
              <li>Можно поменять картинку на заднем плане.</li>
              <li>Лучше взять "аэрофото" местности и "наложить"</li>
              <li>карту, так это, что бы в тоне "землянк"</li>
              <li>использовалось свечете существования</li>
              <li>таблиц, для хх, что в тоне "землянк"</li>
              <li>использовалось свечете существования</li>
            </ul>
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-6 space-y-6 animate-scale-in">
            {/* Company Name Badge */}
            <div className="inline-block bg-white/95 backdrop-blur px-6 py-3 rounded-lg shadow-soft">
              <p className="text-primary font-semibold text-lg">ООО "ТелегаГеоКомплекс"</p>
            </div>

            {/* Main Heading Box */}
            <div className="bg-white/10 backdrop-blur border-2 border-white/30 p-6 rounded-lg">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Профессиональные Геодезические и Кадастровые Услуги в Краснодаре
              </h1>
            </div>

            {/* Description Box */}
            <div className="bg-primary/80 backdrop-blur border-2 border-secondary/50 p-6 rounded-lg">
              <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                Топографическая съемка, межевание участков, уточнение границ земельных участков. Опытные специалисты, современное оборудование, быстрое оформление документов.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-secondary hover:bg-secondary/90 text-white shadow-glow text-base px-6 py-3"
              >
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/80 bg-white/90 text-primary hover:bg-white text-base px-6 py-3"
              >
                позже прочтем!
              </Button>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="lg:col-span-3 space-y-4 animate-slide-in-left">
            {/* Top Card */}
            <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow-soft">
              <p className="text-primary text-sm leading-relaxed">
                Профессиональные услуги в области Земельного кадастра, Геодезии и Землеустройства в Краснодаре и Краснодарском крае
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-2">
              <p className="text-green-400 text-sm font-medium">
                Раздел "Объявления". Перевозоперационные синвхронизация в точке общедоступа новое: ежедневные уникальные, всюди типы! данулус на имени-он!
              </p>
              <p className="text-green-400 text-xs">
                Добавить в это место
              </p>
            </div>

            {/* Bottom Card */}
            <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow-soft">
              <p className="text-primary text-xs leading-relaxed">
                Межевание (уточнение границ) земельных участков, Технические планы зданий, помещений и сооружений, Акты обследования участков и зданий, Схемы расположения границ земельных участков на кадастровом плане территории, Топографическая съемка (инженерно геодезические изыскания) земельных участков, Услуги юриста.
              </p>
            </div>

            {/* Bottom Button */}
            <Button 
              variant="outline"
              className="w-full border-2 border-white/80 bg-white/90 text-primary hover:bg-white text-sm"
            >
              позже прочтем!
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
