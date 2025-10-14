import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Все товары' },
    { id: 'fittings', label: 'Фитинги' },
    { id: 'pipes', label: 'Трубы' },
    { id: 'valves', label: 'Запорная арматура' }
  ];

  const products = [
    {
      id: 1,
      name: 'Фланцевый затвор',
      category: 'valves',
      specs: 'DN 50-600, PN 10-40',
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    },
    {
      id: 2,
      name: 'Стальные трубы',
      category: 'pipes',
      specs: 'ГОСТ 8732-78, Ø 20-530 мм',
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/98b65c63-fd02-4fd9-96af-f4a3490a9ed6.jpg'
    },
    {
      id: 3,
      name: 'Фитинги под сварку',
      category: 'fittings',
      specs: 'DN 15-100, углеродистая сталь',
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 4,
      name: 'Шаровые краны',
      category: 'valves',
      specs: 'Полнопроходные, DN 15-150',
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    },
    {
      id: 5,
      name: 'Отводы стальные',
      category: 'fittings',
      specs: '90°, 45°, DN 15-1000',
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 6,
      name: 'Трубопроводные системы',
      category: 'pipes',
      specs: 'Комплексные решения под ключ',
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/98b65c63-fd02-4fd9-96af-f4a3490a9ed6.jpg'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Нефтеперерабатывающий комплекс',
      description: 'Поставка и монтаж трубопроводной системы',
      client: 'ПАО "Газпром нефть"'
    },
    {
      id: 2,
      title: 'Теплоэнергетический узел',
      description: 'Модернизация запорной арматуры',
      client: 'ООО "Энергосеть"'
    },
    {
      id: 3,
      title: 'Промышленная водоподготовка',
      description: 'Комплексное оснащение системы фильтрации',
      client: 'АО "Водоканал"'
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Иванов С.П.',
      company: 'ПАО "Газпром нефть"',
      text: 'Высокое качество продукции и отличный сервис. Сотрудничаем более 5 лет.'
    },
    {
      id: 2,
      author: 'Петрова М.А.',
      company: 'ООО "Энергосеть"',
      text: 'Профессиональный подход к каждому проекту. Рекомендуем как надежного партнера.'
    },
    {
      id: 3,
      author: 'Сидоров К.В.',
      company: 'АО "Водоканал"',
      text: 'Быстрая доставка, конкурентные цены и техподдержка на высоком уровне.'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Factory" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">ООО "ЗСПА"</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Продукция</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Проекты</a>
            <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex">Запросить КП</Button>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-white py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Производство деталей трубопровода
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Надежные решения для промышленности. Более 15 лет опыта на рынке трубопроводной арматуры.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Каталог продукции
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Icon name="Factory" className="h-full w-full" />
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
                <p className="text-muted-foreground">
                  Сертифицированная продукция по ГОСТ и международным стандартам
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрая поставка</h3>
                <p className="text-muted-foreground">
                  Собственный склад и логистика для оперативной доставки
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Users" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Экспертная поддержка</h3>
                <p className="text-muted-foreground">
                  Техническое сопровождение на всех этапах сотрудничества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
            <p className="text-xl text-muted-foreground">
              ООО "ЗСПА" — ведущий производитель и поставщик деталей трубопровода с 2008 года
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/98b65c63-fd02-4fd9-96af-f4a3490a9ed6.jpg"
                alt="Производство"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Target" className="text-primary" />
                  Наша миссия
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Обеспечивать промышленные предприятия качественными деталями трубопровода, способствуя безопасности и эффективности производственных процессов.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Heart" className="text-primary" />
                  Наши ценности
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Безупречное качество продукции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Индивидуальный подход к каждому клиенту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Непрерывное развитие и инновации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ответственность и надежность</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог продукции</h2>
            <p className="text-xl text-muted-foreground">
              Широкий ассортимент деталей трубопровода для любых задач
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3" variant="secondary">
                    {categories.find(c => c.id === product.category)?.label}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.specs}</p>
                  <Button className="w-full">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Запросить КП
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный цикл обслуживания от консультации до постпродажной поддержки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Truck" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Доставка</h3>
              <p className="text-sm text-muted-foreground">
                Быстрая доставка по всей России собственным транспортом
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Wrench" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Монтаж</h3>
              <p className="text-sm text-muted-foreground">
                Профессиональный монтаж оборудования на объекте заказчика
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="MessageCircle" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Консультации</h3>
              <p className="text-sm text-muted-foreground">
                Техническое консультирование и подбор оптимальных решений
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Shield" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Гарантия</h3>
              <p className="text-sm text-muted-foreground">
                Расширенная гарантия и постпродажное обслуживание
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground">
              Мы гордимся доверием крупнейших промышленных предприятий
            </p>
          </div>

          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="projects">Проекты</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <Icon name="Building2" className="h-10 w-10 text-primary" />
                      <Badge>Завершен</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-sm font-medium text-primary">{project.client}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Новости компании</h2>
            <p className="text-xl text-muted-foreground">
              Будьте в курсе последних событий и новинок
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/98b65c63-fd02-4fd9-96af-f4a3490a9ed6.jpg"
                  alt="Новость"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">14.10.2025</Badge>
                <h3 className="text-xl font-semibold mb-2">Новая линия производства запущена</h3>
                <p className="text-muted-foreground">
                  Расширение производственных мощностей позволит увеличить объемы выпуска продукции на 40%
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg"
                  alt="Новость"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">10.10.2025</Badge>
                <h3 className="text-xl font-semibold mb-2">Получен сертификат ISO 9001</h3>
                <p className="text-muted-foreground">
                  Подтверждение соответствия международным стандартам качества
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg"
                  alt="Новость"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">05.10.2025</Badge>
                <h3 className="text-xl font-semibold mb-2">Участие в выставке "Нефтегаз-2025"</h3>
                <p className="text-muted-foreground">
                  Презентация новых разработок на крупнейшей отраслевой выставке
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-md mx-auto p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Подпишитесь на новости</h3>
            <div className="flex gap-2">
              <Input placeholder="Ваш email" type="email" />
              <Button>
                <Icon name="Mail" className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Опишите ваш запрос..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      115093, г. Москва, ул. Промышленная, д. 25, стр. 1
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (800) 555-00-00 (бесплатно)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@zspa.ru</p>
                    <p className="text-muted-foreground">sales@zspa.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: выходной</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" className="h-6 w-6" />
                <span className="text-xl font-bold">ООО "ЗСПА"</span>
              </div>
              <p className="text-white/80 text-sm">
                Надежный партнер в области производства и поставки деталей трубопровода
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Продукция</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Проекты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Mail" className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Icon name="Share2" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 ООО "ЗСПА". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
