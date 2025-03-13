
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "pizza" | "pasta" | "antipasti" | "dessert" | "drinks";
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "pizza-1",
    name: "Margherita",
    description: "The classic pizza with tomato sauce, mozzarella, basil, and extra virgin olive oil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "pizza",
    popular: true,
    vegetarian: true,
  },
  {
    id: "pizza-2",
    name: "Diavola",
    description: "Spicy pizza with tomato sauce, mozzarella, spicy salami, and fresh chili",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "pizza",
    spicy: true,
  },
  {
    id: "pizza-3",
    name: "Quattro Formaggi",
    description: "Four cheese pizza with mozzarella, gorgonzola, fontina, and parmesan",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2550&q=80",
    category: "pizza",
    vegetarian: true,
  },
  {
    id: "pizza-4",
    name: "Prosciutto e Funghi",
    description: "Pizza with tomato sauce, mozzarella, ham, and mushrooms",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80",
    category: "pizza",
  },
  {
    id: "pasta-1",
    name: "Spaghetti Carbonara",
    description: "Classic Roman pasta with eggs, pecorino cheese, black pepper, and guanciale",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    category: "pasta",
    popular: true,
  },
  {
    id: "pasta-2",
    name: "Fettuccine Alfredo",
    description: "Fettuccine pasta in a rich and creamy parmesan sauce",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    category: "pasta",
    vegetarian: true,
  },
  {
    id: "pasta-3",
    name: "Lasagna alla Bolognese",
    description: "Traditional lasagna with layers of pasta, bolognese sauce, béchamel, and parmesan",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "pasta",
    popular: true,
  },
  {
    id: "pasta-4",
    name: "Ravioli di Ricotta e Spinaci",
    description: "Homemade ravioli filled with ricotta and spinach, served with sage butter sauce",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1587740481386-de7d08e895a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "pasta",
    vegetarian: true,
  },
  {
    id: "antipasti-1",
    name: "Bruschetta",
    description: "Toasted bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "antipasti",
    vegetarian: true,
  },
  {
    id: "antipasti-2",
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil, drizzled with olive oil and balsamic glaze",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "antipasti",
    vegetarian: true,
  },
  {
    id: "antipasti-3",
    name: "Antipasto Misto",
    description: "Selection of Italian cured meats, cheeses, olives, and marinated vegetables",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1626200926749-04eb8873e889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
    category: "antipasti",
    popular: true,
  },
  {
    id: "dessert-1",
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "dessert",
    popular: true,
    vegetarian: true,
  },
  {
    id: "dessert-2",
    name: "Panna Cotta",
    description: "Italian dessert of sweetened cream set with gelatin, topped with berry coulis",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0bfdf63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
    category: "dessert",
    vegetarian: true,
  },
  {
    id: "drinks-1",
    name: "Italian Wine Selection",
    description: "Selection of fine Italian wines - red, white, or rosé",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "drinks",
  },
  {
    id: "drinks-2",
    name: "Espresso",
    description: "Traditional Italian espresso coffee",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "drinks",
    vegetarian: true,
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "pizza", name: "Pizza" },
  { id: "pasta", name: "Pasta" },
  { id: "antipasti", name: "Antipasti" },
  { id: "dessert", name: "Dessert" },
  { id: "drinks", name: "Drinks" },
];
