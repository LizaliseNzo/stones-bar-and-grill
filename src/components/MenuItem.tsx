import { useState } from "react";
import { motion } from "framer-motion";
import { type MenuItem as MenuItemType } from "@/assets/data";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  
  // Choose a fallback image if the original image fails to load
  const fallbackImage = "/stons bar and grill images/2025-01-27.jpg";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="card group overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageError ? fallbackImage : item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.popular && (
            <Badge variant="default" className="bg-terra-700 hover:bg-terra-800">
              Popular
            </Badge>
          )}
          {item.vegetarian && (
            <Badge variant="outline" className="bg-olive-100/80 text-olive-800 hover:bg-olive-200 backdrop-blur-sm">
              Vegetarian
            </Badge>
          )}
          {item.spicy && (
            <Badge variant="outline" className="bg-terra-100/80 text-terra-700 hover:bg-terra-200 backdrop-blur-sm">
              Spicy
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif font-medium">{item.name}</h3>
          <span className="font-medium text-terra-800">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-2 text-muted-foreground text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
