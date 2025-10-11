import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const priceList = [
  { service: "Топографическая съемка М 1:500", price: "от 15 000 ₽", unit: "за участок" },
  { service: "Межевание земельного участка", price: "от 12 000 ₽", unit: "за участок" },
  { service: "Уточнение границ земельного участка", price: "от 10 000 ₽", unit: "за участок" },
  { service: "Вынос точек в натуру", price: "от 8 000 ₽", unit: "за объект" },
  { service: "Технический план здания", price: "от 7 000 ₽", unit: "за объект" },
  { service: "Исполнительная съемка", price: "от 5 000 ₽", unit: "за объект" }
];

const Pricing = () => {
  const [area, setArea] = useState("");
  const [serviceType, setServiceType] = useState("surveying");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const areaNum = parseFloat(area);
    if (isNaN(areaNum) || areaNum <= 0) return;

    let basePrice = 0;
    switch (serviceType) {
      case "surveying":
        basePrice = 15000 + (areaNum > 1000 ? (areaNum - 1000) * 5 : 0);
        break;
      case "cadastral":
        basePrice = 12000 + (areaNum > 600 ? (areaNum - 600) * 8 : 0);
        break;
      case "boundary":
        basePrice = 10000 + (areaNum > 600 ? (areaNum - 600) * 6 : 0);
        break;
      default:
        basePrice = 15000;
    }
    setEstimatedPrice(Math.round(basePrice));
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Цены на Услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачное ценообразование и возможность расчета стоимости онлайн
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Price List */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Прайс-лист</h3>
            <div className="space-y-4">
              {priceList.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-soft transition-all duration-300 border-border"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.service}</CardTitle>
                    <CardDescription>{item.unit}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              * Окончательная стоимость зависит от площади участка, сложности работ и срочности выполнения
            </p>
          </div>

          {/* Calculator */}
          <div>
            <Card className="border-2 border-primary shadow-glow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
                    <CardDescription>Рассчитайте примерную стоимость услуг</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Тип услуги</Label>
                  <select
                    id="service-type"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:ring-2 focus:ring-ring"
                  >
                    <option value="surveying">Топографическая съемка</option>
                    <option value="cadastral">Межевание участка</option>
                    <option value="boundary">Уточнение границ</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Площадь участка (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Введите площадь"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="text-lg"
                  />
                </div>

                <Button 
                  onClick={calculatePrice}
                  className="w-full bg-gradient-primary text-white hover:opacity-90 text-lg py-6"
                  size="lg"
                >
                  Рассчитать стоимость
                </Button>

                {estimatedPrice !== null && (
                  <div className="bg-muted p-6 rounded-lg text-center animate-scale-in">
                    <p className="text-sm text-muted-foreground mb-2">Примерная стоимость:</p>
                    <p className="text-4xl font-bold text-primary">{estimatedPrice.toLocaleString('ru-RU')} ₽</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Точная стоимость определяется после осмотра объекта
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
