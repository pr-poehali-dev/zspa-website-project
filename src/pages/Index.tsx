import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const catalogCategories = [
    {
      id: 'pipeline-parts',
      label: 'Детали трубопровода',
      icon: 'Settings',
      subcategories: [
        { id: 'flanges', label: 'Фланцы' },
        { id: 'elbows', label: 'Отводы' },
        { id: 'transitions', label: 'Переходы' },
        { id: 'tees', label: 'Тройники' },
        { id: 'plugs', label: 'Заглушки' },
        { id: 'press-flanges', label: 'Фланцы прижимные для ПЭ труб' },
        { id: 'spigot-sleeves', label: 'Втулки «спигот» под фланцы прижимные' }
      ]
    },
    {
      id: 'valves',
      label: 'Задвижки',
      icon: 'Gauge',
      subcategories: []
    },
    {
      id: 'dampers',
      label: 'Затворы',
      icon: 'Disc',
      subcategories: []
    },
    {
      id: 'ball-valves',
      label: 'Краны шаровые',
      icon: 'Circle',
      subcategories: [
        { id: 'steel-ball-valves', label: 'Краны шаровые стальные' },
        { id: 'brass-ball-valves', label: 'Краны шаровые латунные' }
      ]
    },
    {
      id: 'check-valves',
      label: 'Клапаны запорные',
      icon: 'CircleDot',
      subcategories: []
    },
    {
      id: 'threaded-fittings',
      label: 'Фитинги резьбовые',
      icon: 'Wrench',
      subcategories: []
    },
    {
      id: 'fasteners',
      label: 'Крепеж',
      icon: 'Bolt',
      subcategories: []
    }
  ];

  const products = [
    {
      id: 1,
      article: '00-00124691',
      name: 'Фланец 020х025 ст.09Г2с для ПЭ Ру-16',
      category: 'pipeline-parts',
      subcategory: 'flanges',
      price: 266.85,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['steel', 'gost'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    },
    {
      id: 2,
      article: 'ЦО000079088',
      name: 'Фланец 020х025 стальной для ПЭ Ру-10',
      category: 'pipeline-parts',
      subcategory: 'flanges',
      price: 280.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['steel'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    },
    {
      id: 3,
      article: 'ЦО000075206',
      name: 'Фланец 040х050 стальной для ПЭ Ру-16',
      category: 'pipeline-parts',
      subcategory: 'flanges',
      price: 412.35,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['steel', 'gost'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    },
    {
      id: 4,
      article: '00-00135397',
      name: 'Отвод 45-1-60,3х5,6 ст.20 ГОСТ 17375',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 495.75,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['45-degrees', 'gost', 'steel'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 5,
      article: '00-00235764',
      name: 'Отвод 90 градусов',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 320.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['90-degrees', 'steel'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 6,
      article: '09Г2С-01',
      name: 'Отводы 09Г2С',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 380.50,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['09g2s'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 7,
      article: 'MOLDED-10X17',
      name: 'Отводы молибденовые 10Х17Н13М2Т',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 1250.00,
      priceUnit: '₽/шт',
      inStock: false,
      filters: ['molybdenum'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 8,
      article: 'GOST-90',
      name: 'Отводы ГОСТ',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 295.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['gost', '90-degrees'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 9,
      article: '12X18H10T-45',
      name: 'Отвод 12х18н10т',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 890.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['stainless'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 10,
      article: 'STAINLESS-ELBOW',
      name: 'Отвод стальной',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 340.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['steel', '90-degrees'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 11,
      article: 'NON-RUST-ELBOW',
      name: 'Отвод нержавеющий',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 920.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['stainless'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 12,
      article: 'ZINC-ELBOW',
      name: 'Отводы оцинкованные',
      category: 'pipeline-parts',
      subcategory: 'elbows',
      price: 410.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['zinc'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/f7d4c966-a7b5-40d3-bef4-a14aff349640.jpg'
    },
    {
      id: 13,
      article: 'TEE-DN50',
      name: 'Тройник ДН50',
      category: 'pipeline-parts',
      subcategory: 'tees',
      price: 520.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['steel'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/98b65c63-fd02-4fd9-96af-f4a3490a9ed6.jpg'
    },
    {
      id: 14,
      article: 'BALL-VALVE-STEEL',
      name: 'Кран шаровый стальной DN50',
      category: 'ball-valves',
      subcategory: 'steel-ball-valves',
      price: 1580.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['steel', 'full-bore'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    },
    {
      id: 15,
      article: 'BALL-VALVE-BRASS',
      name: 'Кран шаровый латунный 1/2"',
      category: 'ball-valves',
      subcategory: 'brass-ball-valves',
      price: 285.00,
      priceUnit: '₽/шт',
      inStock: true,
      filters: ['brass'],
      image: 'https://cdn.poehali.dev/projects/fea1ecb1-7733-485b-9aa2-0032f4476c6a/files/8164dacd-ef84-4cac-b4c9-866140ab5ab0.jpg'
    }
  ];

  const filterOptions = [
    { id: 'molybdenum', label: 'Отводы молибденовые 10Х17Н13М2Т' },
    { id: '09g2s', label: 'Отводы 09Г2С' },
    { id: '90-degrees', label: 'Отводы 90 градусов' },
    { id: 'zinc', label: 'Отводы оцинкованные' },
    { id: 'gost', label: 'Отводы ГОСТ' },
    { id: '12x18h10t', label: 'Отвод 12х18н10т' },
    { id: 'stainless', label: 'Отвод нержавеющий' },
    { id: 'steel', label: 'Отвод стальной' }
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

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = !activeCategory || product.category === activeCategory;
    const subcategoryMatch = !activeSubcategory || product.subcategory === activeSubcategory;
    const filterMatch = selectedFilters.length === 0 || 
      selectedFilters.some(filter => product.filters.includes(filter));
    return categoryMatch && subcategoryMatch && filterMatch;
  });

  const totalProducts = filteredProducts.length;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-[#0066CC] text-white">
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet open={catalogOpen} onOpenChange={setCatalogOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Icon name="Menu" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[400px] p-0 overflow-y-auto">
                <div className="bg-[#2C3E50] text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Каталог товаров</h2>
                    <Button variant="ghost" size="icon" onClick={() => setCatalogOpen(false)} className="text-white hover:bg-white/10">
                      <Icon name="X" className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  {catalogCategories.map((category) => (
                    <Collapsible key={category.id} className="mb-2">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-3 hover:bg-muted rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <Icon name={category.icon as any} className="h-5 w-5 text-[#0066CC]" />
                          <span className="font-medium">{category.label}</span>
                        </div>
                        <Icon name="ChevronDown" className="h-4 w-4" />
                      </CollapsibleTrigger>
                      {category.subcategories.length > 0 && (
                        <CollapsibleContent className="pl-11 pt-2 space-y-1">
                          {category.subcategories.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setActiveCategory(category.id);
                                setActiveSubcategory(sub.id);
                                setCatalogOpen(false);
                              }}
                              className="block w-full text-left p-2 text-sm hover:bg-muted rounded transition-colors"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </CollapsibleContent>
                      )}
                      {category.subcategories.length === 0 && (
                        <div className="pl-11 pt-2">
                          <button
                            onClick={() => {
                              setActiveCategory(category.id);
                              setActiveSubcategory(null);
                              setCatalogOpen(false);
                            }}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Показать все
                          </button>
                        </div>
                      )}
                    </Collapsible>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <Icon name="Factory" className="h-8 w-8" />
            <span className="text-xl font-bold">ООО "ЗСПА"</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm hover:text-white/80 transition-colors">Главная</a>
            <a href="#about" className="text-sm hover:text-white/80 transition-colors">О компании</a>
            <a href="#products" className="text-sm hover:text-white/80 transition-colors">Продукция</a>
            <a href="#contacts" className="text-sm hover:text-white/80 transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon name="Phone" className="h-5 w-5" />
            </Button>
            <Button variant="secondary" className="hidden md:flex">
              Отправить заявку
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-24">
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Производство деталей трубопровода
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Надежные решения для промышленности. Более 15 лет опыта на рынке трубопроводной арматуры.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="text-lg" onClick={() => setCatalogOpen(true)}>
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0066CC]/10 mb-4">
                  <Icon name="Award" className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
                <p className="text-muted-foreground">
                  Сертифицированная продукция по ГОСТ и международным стандартам
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0066CC]/10 mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-[#0066CC]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрая поставка</h3>
                <p className="text-muted-foreground">
                  Собственный склад и логистика для оперативной доставки
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0066CC]/10 mb-4">
                  <Icon name="Users" className="h-8 w-8 text-[#0066CC]" />
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
                  <Icon name="Target" className="text-[#0066CC]" />
                  Наша миссия
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Обеспечивать промышленные предприятия качественными деталями трубопровода, способствуя безопасности и эффективности производственных процессов.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Heart" className="text-[#0066CC]" />
                  Наши ценности
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span>Безупречное качество продукции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span>Индивидуальный подход к каждому клиенту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span>Непрерывное развитие и инновации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="h-5 w-5 text-[#0066CC] mt-0.5 flex-shrink-0" />
                    <span>Ответственность и надежность</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-8 bg-muted/30">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              {activeSubcategory 
                ? catalogCategories
                    .find(c => c.id === activeCategory)?.subcategories
                    .find(s => s.id === activeSubcategory)?.label
                : activeCategory
                  ? catalogCategories.find(c => c.id === activeCategory)?.label
                  : 'Каталог продукции'}
            </h1>
            <div className="text-sm text-muted-foreground">
              Главная » Продукция »
              {activeCategory && (
                <span> {catalogCategories.find(c => c.id === activeCategory)?.label}</span>
              )}
              {activeSubcategory && (
                <span> » {catalogCategories
                  .find(c => c.id === activeCategory)?.subcategories
                  .find(s => s.id === activeSubcategory)?.label}</span>
              )}
            </div>
          </div>

          {activeSubcategory === 'elbows' && (
            <div className="mb-6">
              <Button variant="outline" size="sm" className="mb-4">
                <Icon name="SlidersHorizontal" className="mr-2 h-4 w-4" />
                Фильтр
              </Button>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilters.includes(filter.id) ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleFilter(filter.id)}
                    className="text-xs"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Всего наименований: <strong>{totalProducts}</strong>
            </p>
            <p className="text-xs text-green-600 font-medium">
              Прайс-лист обновлен 14.10.2025
            </p>
          </div>

          {totalProducts === 0 ? (
            <Card className="p-12 text-center">
              <Icon name="Package" className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
              <p className="text-muted-foreground mb-4">Попробуйте изменить фильтры или выбрать другую категорию</p>
              <Button onClick={() => { setActiveCategory(null); setActiveSubcategory(null); setSelectedFilters([]); }}>
                Сбросить фильтры
              </Button>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 flex-shrink-0 bg-muted rounded overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-1">{product.article}</p>
                        <h3 className="font-semibold mb-2 hover:text-[#0066CC] cursor-pointer">{product.name}</h3>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="text-2xl font-bold text-[#0066CC]">{product.price.toFixed(2)} {product.priceUnit}</p>
                          </div>
                          {product.inStock && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                              в наличии
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button size="lg" className="bg-[#0066CC] hover:bg-[#0052A3]">
                          <Icon name="ShoppingCart" className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Card className="inline-block p-6 bg-gray-50">
              <p className="text-sm font-semibold mb-2">Цены и сроки поставки на заказной товар уточняйте у Вашего менеджера.</p>
            </Card>
          </div>
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
                  <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      Московская область, г. Щелково, ул. Советская 1/2, к2
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 877-37-83</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-6 w-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">zakaz2@elbows.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-[#0066CC]" />
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

          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7b8f2c8e8f9e8f8f8f8f8f8f8f8f8f8f&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ minHeight: '400px' }}
                  title="Карта офиса ООО ЗСПА"
                  className="border-0"
                ></iframe>
              </div>
              <CardContent className="p-6 bg-white">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-6 w-6 text-[#0066CC]" />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес офиса</h4>
                    <p className="text-muted-foreground">Московская область, г. Щелково, ул. Советская 1/2, к2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C3E50] text-white py-12">
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
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@zspa.ru</p>
                <p>г. Москва, ул. Промышленная, д. 25</p>
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