import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Icon from '@/components/ui/icon';

interface Category {
  id: string;
  label: string;
  icon: string;
  subcategories: { id: string; label: string; }[];
}

interface HeaderProps {
  catalogOpen: boolean;
  setCatalogOpen: (open: boolean) => void;
  catalogCategories: Category[];
  setActiveCategory: (id: string) => void;
  setActiveSubcategory: (id: string | null) => void;
}

export const Header = ({ 
  catalogOpen, 
  setCatalogOpen, 
  catalogCategories, 
  setActiveCategory, 
  setActiveSubcategory 
}: HeaderProps) => {
  return (
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
  );
};
