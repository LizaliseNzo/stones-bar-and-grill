import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { menuItems, categories } from '@/assets/data';
import MenuItem from '@/components/MenuItem';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="section container-custom" id="menu">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Menu</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our delicious dishes made with the finest ingredients and traditional recipes.
        </p>
      </motion.div>

      <div className="flex justify-center mb-8 overflow-x-auto pb-4">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category.id
                  ? "bg-terra-800 text-white"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
