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
    { 
      name: "Ручной инструмент", 
      icon: "Wrench", 
      items: ["Отвёртки", "Плоскогубцы / Пассатижи", "Бокорезы", "Кусачки", "Ножницы по металлу"]
    },
    { 
      name: "Измерительный инструмент", 
      icon: "Ruler", 
      items: ["Уровни / Линейки / Угольники", "Рулетки и измерительные инструменты"]
    },
    { 
      name: "Электроинструмент", 
      icon: "Drill", 
      items: ["Дрели / Свёрла / Буры", "Миксеры для растворов"]
    },
    { 
      name: "Крепёж", 
      icon: "Bolt", 
      items: ["Болты", "Винты", "Шурупы", "Саморезы", "Шайбы"]
    },
    { 
      name: "Фурнитура", 
      icon: "Lock", 
      items: ["Замки", "Направляющие", "Засовы / Шпингалеты", "Крючки / Рымы / Проушины", "Пластины соединительные"]
    },
    { 
      name: "Расходные материалы", 
      icon: "PaintBucket", 
      items: ["Кисти", "Валики малярные", "Абразивные круги, диски", "Пилки / Лезвия", "Клей, смазки, маркеры"]
    },
    { 
      name: "Инструменты для зажима", 
      icon: "Grip", 
      items: ["Струбцины и зажимы", "Хомуты", "Скобы"]
    },
    { 
      name: "Оснастка и аксессуары", 
      icon: "Settings", 
      items: ["Разводные ключи", "Газовые ключи", "Наборы бит и головок", "Шланги и катушки", "Колёса и тележечная оснастка"]
    }
  ];

  const advantages = [
    { number: "25 000+", title: "позиций", subtitle: "в наличии", icon: "Package" },
    { number: "Крепёж по DIN,", title: "ISO и ГОСТ", subtitle: "", icon: "FileCheck" },
    { number: "Входной контроль", title: "качества", subtitle: "", icon: "ShieldCheck" },
    { number: "Изготовление крепежа", title: "под нестандартные", subtitle: "технические параметры", icon: "Settings2" }
  ];

  const brands = ["SPAX", "INFIX", "CERTEX", "SORMAT", "ESSVE"];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/8a6c889f-3596-4ac7-9d44-78f562a7905f.png" 
                alt="ЖЕСТЬ" 
                className="h-8 md:h-10"
              />
              <span className="text-sm text-muted-foreground hidden md:inline">в Москве</span>
            </div>

            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Input placeholder="Поиск" className="pr-10" />
                <Icon name="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="text-right">
                <div className="font-bold">8 800 333 44 55</div>
                <div className="text-sm text-muted-foreground">Москва, Санкт-Петербург</div>
              </div>
              <Button className="bg-[#00bfa5] hover:bg-[#00a896]">
                Заказать звонок
              </Button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8 py-4 border-t text-sm">
            <a href="#" className="hover:text-primary transition-colors">Главная</a>
            <a href="#categories" className="hover:text-primary transition-colors">Категории</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#brands" className="hover:text-primary transition-colors">Бренды</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4 border-t">
              <a href="#" className="block hover:text-primary transition-colors">Главная</a>
              <a href="#categories" className="block hover:text-primary transition-colors">Категории</a>
              <a href="#advantages" className="block hover:text-primary transition-colors">Преимущества</a>
              <a href="#brands" className="block hover:text-primary transition-colors">Бренды</a>
              <a href="#about" className="block hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Контакты</a>
            </nav>
          )}
        </div>
      </header>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative overflow-hidden rounded-lg bg-gray-300">
              <div 
                className="h-[400px] bg-cover bg-center flex items-center relative"
                style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/aa3dba31-9412-4eb4-bcb6-4b5acfe13ece/files/b5bef3da-bb23-498e-b91c-43008794bb5a.jpg')` }}
              >
                <div className="absolute inset-0 bg-gray-200/80"></div>
                <div className="relative z-10 p-12 max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                    Надежные крепежи<br/>
                    <span className="text-[#00bfa5]">— залог ваших проектов!</span>
                  </h2>
                  <p className="text-gray-900 mb-6 text-base leading-relaxed">
                    От прочных болтов до универсальных саморезов —<br/>
                    у нас есть всё, чтобы ваши идеи держались крепко.
                  </p>
                  <Button size="lg" className="bg-[#00bfa5] hover:bg-[#00a896] text-white px-10 h-12">
                    Сделать заказ
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div 
                className="relative overflow-hidden rounded-lg h-[185px] bg-cover bg-center"
                style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/aa3dba31-9412-4eb4-bcb6-4b5acfe13ece/files/d32869b9-3107-45e2-a94b-958d373023e9.jpg')` }}
              >
                <div className="absolute inset-0 bg-[#00bfa5]/90"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-white mb-1">Доставка от 2 часов</h3>
                  <p className="text-white/90">по всей России</p>
                </div>
              </div>

              <div 
                className="relative overflow-hidden rounded-lg h-[185px] bg-cover bg-center"
                style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/aa3dba31-9412-4eb4-bcb6-4b5acfe13ece/files/0c0b6180-b762-458e-b2c1-93181c135b6d.jpg')` }}
              >
                <div className="absolute inset-0 bg-gray-800/85"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-white mb-1">90 000+ клиентов</h3>
                  <p className="text-white/90">выбирают нас</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Категории изделий</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <Card 
                key={idx}
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Icon name={category.icon} size={28} className="text-gray-700" />
                  </div>
                  <h3 className="font-bold text-lg ml-3">{category.name}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Icon name="ChevronRight" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                      <span className="ml-1">{item}</span>
                    </li>
                  ))}
                  {category.items.length > 5 && (
                    <li className="text-primary font-medium pt-2">
                      +{category.items.length - 5} ещё
                    </li>
                  )}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-20 relative"
        style={{ 
          backgroundImage: `url('https://cdn.poehali.dev/projects/aa3dba31-9412-4eb4-bcb6-4b5acfe13ece/files/b555a182-405e-4333-b6e8-84d9877a31c7.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Не нашли нужного инструмента?<br/>Отправьте заявку, скорее всего он у нас есть!</h2>
            <p className="text-primary text-lg mb-8">
              Менеджер проконсультирует вас в течение 5 минут<br/>
              и проконсультирует по наличию и стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="+7 999 999 99 99" className="h-14 text-lg" />
              <Button size="lg" className="h-14 px-8 bg-[#00bfa5] hover:bg-[#00a896] whitespace-nowrap">
                Получить консультацию
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Нажимая кнопку, вы соглашаетесь с Политикой<br/>
              конфиденциальности и обработкой персональных данных
            </p>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className={`p-8 ${idx === 0 ? 'bg-white text-gray-800' : idx === 1 ? 'bg-[#00bfa5] text-white' : 'bg-gray-700 text-white'}`}>
                <div className={`mb-4 ${idx === 0 ? 'text-primary' : 'text-current opacity-80'}`}>
                  <Icon name={adv.icon} size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 leading-tight">{adv.number}</div>
                <div className="font-semibold text-lg">{adv.title}</div>
                {adv.subtitle && <div className="text-sm opacity-80">{adv.subtitle}</div>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Бренды</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span className="text-2xl font-bold">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">О компании</h2>
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg mb-6">
                Мы разрабатываем для вас максимально качественную, крепежную продукцию, 
                широкого и узкого профилей.
              </p>
              <p className="text-muted-foreground mb-6">
                Вы всегда можете обратиться к нам за рекомендательной консультацией и быстрой 
                доставкой проверенных материалов. Выбирая нас, вы получаете широкую 
                номенклатуру товаров с гибкой системой и благоприятной системой расчётов. 
                Поставляемое оборудование, отличающееся высоким качеством, при разумной 
                стоимости, идеально подойдет для промышленного и бытового применения.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-6">
                Наши эксперты социально решения, которые делают ваш проект простым. 
                Мы обеспечиваем неукоснительное соблюдение действующих критериев ГОСТов, 
                строгий контроль качества в соответствии с требованиями. Поставляемая 
                продукция не уступает по качеству и решению ассортиментного стандарта 
                отечественного и зарубежного производителей.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="MapPin" size={24} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Инициативная улица 57/1, Кемерово</p>
                    <p className="text-muted-foreground">2 этаж</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-3 flex-shrink-0" />
                  <a href="tel:+73842901122" className="font-semibold text-lg hover:text-primary transition-colors">
                    +7 (3842) 90-11-22
                  </a>
                </div>
              </div>
            </Card>

            <div className="rounded-lg overflow-hidden h-[300px] lg:h-auto">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=86.025974%2C55.400711&z=16&pt=86.025974,55.400711,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="min-h-[300px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/8a6c889f-3596-4ac7-9d44-78f562a7905f.png" 
                alt="ЖЕСТЬ" 
                className="h-8 mb-4 brightness-0 invert"
              />
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Пн–Пт: 9:00–18:00
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Преимущества</a></li>
                <li><a href="#" className="hover:opacity-100">Доставка</a></li>
                <li><a href="#" className="hover:opacity-100">О компании</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Крепёж и метизы</a></li>
                <li><a href="#" className="hover:opacity-100">Инструменты</a></li>
                <li><a href="#" className="hover:opacity-100">Дополнительные товары</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <div>8 800 333 44 55</div>
                <div className="opacity-80">info@zhest.ru</div>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-gray-800 mt-4">
                  Написать нам
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>Жесть ©2017</p>
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