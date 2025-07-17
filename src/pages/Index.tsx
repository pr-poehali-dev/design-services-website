import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Palette",
      title: "Дизайн",
      description: "Фирменный стиль, логотипы, веб-дизайн для бизнеса и ресторанов",
      features: ["Логотипы", "Фирменный стиль", "Веб-дизайн", "Баннеры"]
    },
    {
      icon: "Megaphone",
      title: "Реклама",
      description: "Таргетированная реклама и SMM для эффективного продвижения",
      features: ["Таргет", "SMM", "Ведение соцсетей", "Контекстная реклама"]
    },
    {
      icon: "Bot",
      title: "Боты",
      description: "Телеграм-боты и чат-боты для автоматизации бизнеса",
      features: ["Telegram боты", "Чат-боты", "Автоматизация", "Интеграции"]
    },
    {
      icon: "Globe",
      title: "Веб-разработка",
      description: "Современные сайты и веб-приложения под ключ",
      features: ["Сайты", "Веб-приложения", "Лендинги", "Интернет-магазины"]
    }
  ];

  const portfolioItems = [
    {
      title: "Ресторан 'Мамина паста'",
      description: "Полный ребрендинг с логотипом, меню и SMM-стратегией",
      category: "Ресторан",
      image: "/img/6070fb0f-bd37-4453-9238-26d39f47f489.jpg"
    },
    {
      title: "Стартап FinanceApp",
      description: "Дизайн мобильного приложения и лендинг",
      category: "Стартап",
      image: "/img/524bccb8-2888-4b10-86f6-84a109002770.jpg"
    },
    {
      title: "Корпорация TechCorp",
      description: "Корпоративный сайт и система автоматизации",
      category: "Корпорация",
      image: "/img/fc3a335c-72c0-4a46-bcf6-2e6f6d5427cb.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">DigitalStudio</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              Дизайн • Реклама • Разработка
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Создаем цифровые решения для вашего бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полный цикл digital-услуг: от дизайна до продвижения. Работаем с бизнесом, корпорациями и стартапами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексные digital-решения для роста вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ для различных типов бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашем агентстве</h2>
                <p className="text-muted-foreground mb-6">
                  Мы — команда экспертов в области цифрового дизайна и маркетинга. Специализируемся на создании 
                  комплексных решений для бизнеса любого масштаба.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm">Опытная команда</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm">Качественный результат</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm">Соблюдение сроков</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Handshake" size={16} className="text-primary" />
                    </div>
                    <span className="text-sm">Индивидуальный подход</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                  <Icon name="Building" size={80} className="text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-muted-foreground mb-8">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">hello@digitalstudio.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Send" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@digitalstudio</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold">DigitalStudio</h3>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Создаем цифровые решения для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Дизайн</li>
                <li>Реклама</li>
                <li>Разработка ботов</li>
                <li>Веб-разработка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Контакты</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>+7 (999) 123-45-67</li>
                <li>hello@digitalstudio.com</li>
                <li>@digitalstudio</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© 2024 DigitalStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;