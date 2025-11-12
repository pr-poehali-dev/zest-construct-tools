import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import CategoryModal from "@/components/CategoryModal";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    icon: string;
    items: string[];
  } | null>(null);

  const categories = [
    { name: "Ручной инструмент", icon: "Wrench", items: ["Отвёртки", "Плоскогубцы / Пассатижи", "Бокорезы", "Кусачки", "Ножницы по металлу", "Ножовки по дереву и металлу", "Напильники", "Молотки / Киянки", "Топоры", "Шпатели, терки, мастерки"] },
    { name: "Измерительный инструмент", icon: "Ruler", items: ["Уровни / Линейки / Угольники", "Рулетки и измерительные инструменты"] },
    { name: "Электроинструмент", icon: "Drill", items: ["Дрели / Свёрла / Буры", "Миксеры для растворов"] },
    { name: "Крепёж", icon: "Bolt", items: ["Болты", "Винты", "Шурупы", "Саморезы", "Шайбы", "Гайки", "Анкеры"] },
    { name: "Фурнитура", icon: "Lock", items: ["Замки", "Направляющие", "Засовы / Шпингалеты", "Крючки / Рымы / Проушины", "Пластины соединительные", "Защёлки / Фиксаторы", "Уголки монтажные", "Шпильки", "Петли"] },
    { name: "Расходные материалы", icon: "PaintBucket", items: ["Кисти", "Валики малярные", "Абразивные круги, диски", "Пилки / Лезвия", "Клей, смазки, маркеры", "Батарейки"] },
    { name: "Инструменты для зажима", icon: "Grip", items: ["Струбцины и зажимы", "Хомуты", "Скобы"] },
    { name: "Оснастка и аксессуары", icon: "Settings", items: ["Разводные ключи", "Газовые ключи", "Наборы бит и головок", "Шланги и катушки", "Колёса и тележечная оснастка", "Контейнеры и кассеты для метизов"] }
  ];

  const advantages = [
    { icon: "Award", title: "Качество", description: "Только проверенные бренды и надёжные производители" },
    { icon: "TrendingDown", title: "Низкие цены", description: "Прямые поставки от производителей без наценок" },
    { icon: "Truck", title: "Быстрая доставка", description: "Доставка по всей России в кратчайшие сроки" },
    { icon: "Shield", title: "Гарантия", description: "Официальная гарантия на весь ассортимент" }
  ];

  const brands = [
    "Makita", "Bosch", "DeWalt", "Stanley", "Kraftool", "Зубр", "Энкор", "Интерскол"
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                <h1 className="text-2xl font-bold tracking-tight">ЖЕСТЬ</h1>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#brands" className="text-foreground hover:text-primary transition-colors font-medium">Бренды</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
            </nav>

            <Button className="hidden md:flex" size="lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться
            </Button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4 animate-fade-in">
              <a href="#categories" className="block text-foreground hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#advantages" className="block text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
              <a href="#brands" className="block text-foreground hover:text-primary transition-colors font-medium">Бренды</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
              <Button className="w-full" size="lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться
              </Button>
            </nav>
          )}
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональный инструмент для любых задач
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
              Широкий ассортимент строительных и монтажных инструментов от ведущих производителей. Качество, проверенное временем.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Hammer" className="mr-2" size={20} />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-primary/20 rounded-tl-[100px] hidden lg:block"></div>
      </section>

      <section id="categories" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Каталог продукции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Весь необходимый инструмент для профессионалов и любителей, разделённый по категориям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={category.icon} size={28} />
                  </div>
                  <h3 className="font-bold text-lg ml-3">{category.name}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.items.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                      <span className="ml-1">{item}</span>
                    </li>
                  ))}
                  {category.items.length > 5 && (
                    <li className="text-primary font-medium">+{category.items.length - 5} ещё</li>
                  )}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему тысячи клиентов выбирают нас для покупки инструментов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                  <Icon name={advantage.icon} size={36} />
                </div>
                <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Бренды</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем с ведущими производителями инструмента
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand, idx) => (
              <Card key={idx} className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <span className="font-semibold text-lg text-center">{brand}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Связаться с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и наши менеджеры свяжутся с вами в ближайшее время
              </p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea placeholder="Напишите ваше сообщение..." rows={5} />
                </div>
                <Button size="lg" className="w-full text-lg h-14">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">ЖЕСТЬ</h3>
              <p className="opacity-90">Профессиональный инструмент для профессионалов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Ручной инструмент</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Электроинструмент</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Крепёж</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 opacity-90">
                <li><a href="#" className="hover:opacity-100 transition-opacity">О компании</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Доставка</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 opacity-90">
                <li className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-2" />
                  info@zhest-tools.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={18} className="mr-2" />
                  Москва, ул. Строителей, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
            <p>&copy; 2025 ЖЕСТЬ. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <CategoryModal 
        category={selectedCategory} 
        onClose={() => setSelectedCategory(null)} 
      />
    </div>
  );
};

export default Index;