export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "grill" | "burgers" | "appetizers" | "dessert" | "drinks";
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: "burger-1",
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce",
    price: 14.99,
    image: "/images/stones-food/2022-10-14.jpg",
    category: "burgers",
    popular: true,
  },
  {
    id: "burger-2",
    name: "Spicy Jalapeño Burger",
    description: "Beef patty topped with jalapeños, pepper jack cheese, and spicy mayo",
    price: 16.99,
    image: "/images/stones-food/2021-12-08-4.jpg",
    category: "burgers",
    spicy: true,
  },
  {
    id: "burger-3",
    name: "Mushroom Swiss Burger",
    description: "Beef patty with sautéed mushrooms and melted Swiss cheese",
    price: 17.99,
    image: "/images/stones-food/2024-12-07.jpg",
    category: "burgers",
  },
  {
    id: "burger-4",
    name: "BBQ Bacon Burger",
    description: "Beef patty with crispy bacon, cheddar cheese, onion rings, and tangy BBQ sauce",
    price: 18.99,
    image: "/images/stones-food/2022-10-11.jpg",
    category: "burgers",
  },
  {
    id: "grill-1",
    name: "Grilled Ribeye Steak",
    description: "12oz aged ribeye steak grilled to perfection with herb butter",
    price: 26.99,
    image: "/images/stones-food/2025-01-29.jpg",
    category: "grill",
    popular: true,
  },
  {
    id: "grill-2",
    name: "BBQ Ribs",
    description: "Slow-cooked pork ribs with our house BBQ sauce and coleslaw",
    price: 22.99,
    image: "/images/stones-food/2021-12-23.jpg",
    category: "grill",
    popular: true,
  },
  {
    id: "grill-3",
    name: "Grilled Chicken",
    description: "Marinated chicken breast grilled with herbs and served with roasted vegetables",
    price: 18.99,
    image: "/images/stones-food/2022-03-17.jpg",
    category: "grill",
  },
  {
    id: "grill-4",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon fillet with lemon herb sauce and seasonal vegetables",
    price: 24.99,
    image: "/images/stones-food/2025-01-05.jpg",
    category: "grill",
  },
  {
    id: "grill-5",
    name: "Mixed Grill Platter",
    description: "Selection of grilled meats including steak, chicken, and sausage with grilled vegetables",
    price: 28.99,
    image: "/images/stones-food/2025-02-18.jpg",
    category: "grill",
  },
  {
    id: "appetizer-1",
    name: "Loaded Nachos",
    description: "Crispy tortilla chips loaded with cheese, jalapeños, salsa, guacamole, and sour cream",
    price: 12.99,
    image: "/images/stones-food/unnamed-5.jpg",
    category: "appetizers",
    vegetarian: true,
  },
  {
    id: "appetizer-2",
    name: "Buffalo Wings",
    description: "Crispy chicken wings tossed in spicy buffalo sauce with blue cheese dip",
    price: 14.99,
    image: "/images/stones-food/2022-10-11-1.jpg",
    category: "appetizers",
    spicy: true,
    popular: true,
  },
  {
    id: "appetizer-3",
    name: "Mozzarella Sticks",
    description: "Golden-fried mozzarella sticks with marinara dipping sauce",
    price: 10.99,
    image: "/images/stones-food/2021-10-04.jpg",
    category: "appetizers",
    vegetarian: true,
  },
  {
    id: "appetizer-4",
    name: "Loaded Potato Skins",
    description: "Crispy potato skins filled with cheese, bacon bits, and green onions with sour cream",
    price: 11.99,
    image: "/images/stones-food/2022-10-11-2.jpg",
    category: "appetizers",
  },
  {
    id: "appetizer-5",
    name: "Onion Rings Tower",
    description: "Golden and crispy beer-battered onion rings served with our special sauce",
    price: 9.99,
    image: "/images/stones-food/2023-05-05.jpg",
    category: "appetizers",
    vegetarian: true,
  },
  {
    id: "dessert-1",
    name: "Chocolate Brownie Sundae",
    description: "Warm chocolate brownie topped with vanilla ice cream and chocolate sauce",
    price: 9.99,
    image: "/images/stones-food/unnamed-1.jpg",
    category: "dessert",
    popular: true,
    vegetarian: true,
  },
  {
    id: "dessert-2",
    name: "New York Cheesecake",
    description: "Creamy New York style cheesecake with berry compote",
    price: 8.99,
    image: "/images/stones-food/2021-12-08-2.jpg",
    category: "dessert",
    vegetarian: true,
  },
  {
    id: "dessert-3",
    name: "Apple Pie à la Mode",
    description: "Warm apple pie with a scoop of vanilla ice cream and caramel drizzle",
    price: 9.99,
    image: "/images/stones-food/unnamed-2.jpg",
    category: "dessert",
    vegetarian: true,
  },
  {
    id: "drinks-1",
    name: "Craft Beer Selection",
    description: "Selection of local and imported craft beers",
    price: 7.99,
    image: "/images/stones-food/unnamed.jpg",
    category: "drinks",
  },
  {
    id: "drinks-2",
    name: "Signature Cocktails",
    description: "Handcrafted cocktails made with premium spirits",
    price: 11.99,
    image: "/images/stones-food/unnamed-3.jpg",
    category: "drinks",
  },
  {
    id: "drinks-3",
    name: "Premium Wine Selection",
    description: "Curated selection of red, white, and rosé wines by the glass",
    price: 9.99,
    image: "/images/stones-food/unnamed-4.jpg",
    category: "drinks",
  },
  {
    id: "drinks-4",
    name: "Specialty Milkshakes",
    description: "Thick and creamy milkshakes in various flavors, topped with whipped cream",
    price: 8.99,
    image: "/images/stones-food/2024-12-07-1.jpg",
    category: "drinks",
    vegetarian: true,
  }
];

export const categories = [
  { id: "all", name: "All" },
  { id: "burgers", name: "Burgers" },
  { id: "grill", name: "From the Grill" },
  { id: "appetizers", name: "Appetizers" },
  { id: "dessert", name: "Dessert" },
  { id: "drinks", name: "Drinks" },
];
