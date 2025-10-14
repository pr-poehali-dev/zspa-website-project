import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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

      <section className="py-8 bg-muted/30">
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
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Продукция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
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
