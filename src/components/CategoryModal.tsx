import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CategoryModalProps {
  category: {
    name: string;
    icon: string;
    items: string[];
  } | null;
  onClose: () => void;
}

const CategoryModal = ({ category, onClose }: CategoryModalProps) => {
  if (!category) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <Card 
        className="max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Icon name="X" size={24} />
        </button>

        <div className="flex items-center mb-6">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg">
            <Icon name={category.icon} size={40} />
          </div>
          <h2 className="text-3xl font-bold ml-4">{category.name}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {category.items.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            >
              <Icon name="Check" size={18} className="text-primary mr-3 flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t">
          <p className="text-muted-foreground mb-4">
            Нужна помощь в выборе? Свяжитесь с нашими специалистами
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1">
              <Icon name="Phone" className="mr-2" size={18} />
              Позвонить
            </Button>
            <Button variant="outline" className="flex-1">
              <Icon name="Mail" className="mr-2" size={18} />
              Написать
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CategoryModal;
