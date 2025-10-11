import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Как правильно подготовиться к межеванию земельного участка",
    excerpt: "Пошаговая инструкция для владельцев участков: какие документы нужны, как происходит процесс межевания и сколько это занимает времени.",
    date: "15 марта 2024",
    category: "Кадастр"
  },
  {
    title: "Изменения в законодательстве о кадастровом учете в 2024 году",
    excerpt: "Обзор важных новшеств в сфере кадастрового учета, которые должен знать каждый владелец земельного участка или недвижимости.",
    date: "10 марта 2024",
    category: "Законодательство"
  },
  {
    title: "Топографическая съемка: зачем она нужна при строительстве",
    excerpt: "Разбираемся, почему топографическая съемка — это обязательный этап перед началом любого строительства и какие виды съемок существуют.",
    date: "5 марта 2024",
    category: "Геодезия"
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Полезные Статьи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Актуальная информация о геодезии, кадастре и земельном законодательстве
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="ml-auto px-3 py-1 bg-muted rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn"
                >
                  Читать далее
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
