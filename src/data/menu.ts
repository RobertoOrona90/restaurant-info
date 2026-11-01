// Edita este archivo para actualizar la información y el menú del restaurante.

export type Category = {
  id: string;
  name: string;
  emoji: string;
};

export type Dish = {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  prepTime: number; // minutos
  calories: number;
  ingredients: string[];
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

export const restaurant = {
  name: "Sabor de Casa",
  tagline: "Cocina casera con sabor latino",
  address: "1234 Main St, Houston, TX 77002",
  phone: "(713) 555-0123",
  email: "hola@sabordecasa.com",
  coverImage: img("1517248135467-4c7edcad34c4"),
  hours: [
    { days: "Lunes a Jueves", time: "11:00 am – 9:00 pm" },
    { days: "Viernes y Sábado", time: "11:00 am – 11:00 pm" },
    { days: "Domingo", time: "10:00 am – 8:00 pm" },
  ],
  promo: {
    title: "Martes de Tacos",
    text: "2x1 en todos nuestros tacos cada martes.",
    image: img("1599974579688-8dbdd335c77f"),
  },
};

export const categories: Category[] = [
  { id: "all", name: "Todo", emoji: "🍽️" },
  { id: "tacos", name: "Tacos", emoji: "🌮" },
  { id: "burgers", name: "Hamburguesas", emoji: "🍔" },
  { id: "pizza", name: "Pizza", emoji: "🍕" },
  { id: "pasta", name: "Pastas", emoji: "🍝" },
  { id: "healthy", name: "Saludable", emoji: "🥗" },
  { id: "mains", name: "Platos fuertes", emoji: "🥩" },
  { id: "breakfast", name: "Desayunos", emoji: "🥞" },
  { id: "desserts", name: "Postres", emoji: "🍰" },
  { id: "drinks", name: "Bebidas", emoji: "🥤" },
];

export const dishes: Dish[] = [
  {
    slug: "tacos-al-pastor",
    name: "Tacos al Pastor",
    category: "tacos",
    description:
      "Tres tacos de cerdo marinado al pastor con piña, cebolla y cilantro en tortilla de maíz hecha a mano.",
    price: 11.5,
    image: img("1599974579688-8dbdd335c77f"),
    rating: 4.9,
    prepTime: 15,
    calories: 520,
    ingredients: ["Cerdo al pastor", "Piña", "Cebolla", "Cilantro", "Tortilla de maíz"],
    popular: true,
    spicy: true,
  },
  {
    slug: "tacos-mixtos",
    name: "Tacos Mixtos",
    category: "tacos",
    description:
      "Selección de tacos de pollo, carne asada y vegetales con pico de gallo y aguacate.",
    price: 12.9,
    image: img("1551504734-5ee1c4a1479b"),
    rating: 4.7,
    prepTime: 15,
    calories: 610,
    ingredients: ["Pollo", "Carne asada", "Pico de gallo", "Aguacate", "Limón"],
  },
  {
    slug: "hamburguesa-clasica",
    name: "Hamburguesa Clásica",
    category: "burgers",
    description:
      "Carne de res de 200 g, queso cheddar, lechuga, tomate y nuestra salsa especial en pan brioche.",
    price: 13.5,
    image: img("1568901346375-23c9450c58cd"),
    rating: 4.8,
    prepTime: 20,
    calories: 780,
    ingredients: ["Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Pan brioche"],
    popular: true,
  },
  {
    slug: "pizza-margarita",
    name: "Pizza Margarita",
    category: "pizza",
    description:
      "Masa artesanal, salsa de tomate natural, mozzarella fresca y albahaca.",
    price: 14.0,
    image: img("1565299624946-b28f40a0ae38"),
    rating: 4.6,
    prepTime: 25,
    calories: 850,
    ingredients: ["Masa artesanal", "Tomate", "Mozzarella", "Albahaca", "Aceite de oliva"],
    vegetarian: true,
  },
  {
    slug: "pasta-con-camarones",
    name: "Pasta con Camarones",
    category: "pasta",
    description:
      "Espagueti salteado con camarones, tomates cherry, ajo y un toque de chile.",
    price: 16.5,
    image: img("1563379926898-05f4575a45d8"),
    rating: 4.8,
    prepTime: 20,
    calories: 690,
    ingredients: ["Espagueti", "Camarones", "Tomate cherry", "Ajo", "Perejil"],
    popular: true,
    spicy: true,
  },
  {
    slug: "pasta-pomodoro",
    name: "Pasta Pomodoro",
    category: "pasta",
    description: "Pasta con salsa de tomate casera, albahaca fresca y queso parmesano.",
    price: 12.0,
    image: img("1621996346565-e3dbc646d9a9"),
    rating: 4.5,
    prepTime: 18,
    calories: 560,
    ingredients: ["Pasta", "Tomate", "Albahaca", "Parmesano", "Ajo"],
    vegetarian: true,
  },
  {
    slug: "bowl-saludable",
    name: "Bowl Saludable",
    category: "healthy",
    description:
      "Quinoa, garbanzos, aguacate, vegetales frescos y aderezo de limón.",
    price: 11.0,
    image: img("1546069901-ba9599a7e63c"),
    rating: 4.7,
    prepTime: 10,
    calories: 430,
    ingredients: ["Quinoa", "Garbanzos", "Aguacate", "Pepino", "Aderezo de limón"],
    vegetarian: true,
  },
  {
    slug: "ensalada-fresca",
    name: "Ensalada Fresca",
    category: "healthy",
    description: "Mezcla de hojas verdes, tomate, pepino, nueces y vinagreta de la casa.",
    price: 9.5,
    image: img("1512621776951-a57141f2eefd"),
    rating: 4.4,
    prepTime: 10,
    calories: 320,
    ingredients: ["Hojas verdes", "Tomate", "Pepino", "Nueces", "Vinagreta"],
    vegetarian: true,
  },
  {
    slug: "filete-a-la-parrilla",
    name: "Filete a la Parrilla",
    category: "mains",
    description:
      "Corte de res de 300 g a la parrilla con papas rostizadas y chimichurri.",
    price: 24.0,
    image: img("1600891964092-4316c288032e"),
    rating: 4.9,
    prepTime: 30,
    calories: 950,
    ingredients: ["Corte de res", "Papas", "Chimichurri", "Romero", "Sal de mar"],
    popular: true,
  },
  {
    slug: "salmon-al-horno",
    name: "Salmón al Horno",
    category: "mains",
    description: "Filete de salmón con vegetales asados y salsa de limón y eneldo.",
    price: 21.5,
    image: img("1467003909585-2f8a72700288"),
    rating: 4.7,
    prepTime: 25,
    calories: 620,
    ingredients: ["Salmón", "Espárragos", "Limón", "Eneldo", "Mantequilla"],
  },
  {
    slug: "pan-frances",
    name: "Pan Francés",
    category: "breakfast",
    description: "Pan brioche dorado con plátano, moras azules y miel de maple.",
    price: 9.0,
    image: img("1484723091739-30a097e8f929"),
    rating: 4.6,
    prepTime: 15,
    calories: 540,
    ingredients: ["Pan brioche", "Huevo", "Plátano", "Moras azules", "Miel de maple"],
    vegetarian: true,
  },
  {
    slug: "tiramisu",
    name: "Tiramisú",
    category: "desserts",
    description: "Postre clásico con café, mascarpone y cacao.",
    price: 7.5,
    image: img("1571877227200-a0d98ea607e9"),
    rating: 4.8,
    prepTime: 5,
    calories: 450,
    ingredients: ["Mascarpone", "Café", "Bizcocho", "Cacao"],
    vegetarian: true,
  },
  {
    slug: "pastel-de-frutos-rojos",
    name: "Pastel de Frutos Rojos",
    category: "desserts",
    description: "Pastel suave con crema y frutos rojos frescos de temporada.",
    price: 6.5,
    image: img("1565958011703-44f9829ba187"),
    rating: 4.5,
    prepTime: 5,
    calories: 410,
    ingredients: ["Bizcocho", "Crema", "Fresas", "Frambuesas"],
    vegetarian: true,
  },
  {
    slug: "donas-glaseadas",
    name: "Donas Glaseadas",
    category: "desserts",
    description: "Donas esponjosas con glaseado de chocolate y chispas de colores.",
    price: 5.0,
    image: img("1551024601-bec78aea704b"),
    rating: 4.3,
    prepTime: 5,
    calories: 380,
    ingredients: ["Masa", "Chocolate", "Chispas de colores"],
    vegetarian: true,
  },
  {
    slug: "agua-fresca-de-fresa",
    name: "Agua Fresca de Fresa",
    category: "drinks",
    description: "Refrescante agua de fresa con limón y hierbabuena.",
    price: 4.0,
    image: img("1497534446932-c925b458314e"),
    rating: 4.7,
    prepTime: 5,
    calories: 120,
    ingredients: ["Fresa", "Limón", "Hierbabuena", "Agua"],
    popular: true,
    vegetarian: true,
  },
  {
    slug: "te-helado",
    name: "Té Helado",
    category: "drinks",
    description: "Té negro frío con limón, preparado en casa cada día.",
    price: 3.5,
    image: img("1556679343-c7306c1976bc"),
    rating: 4.4,
    prepTime: 3,
    calories: 90,
    ingredients: ["Té negro", "Limón", "Hielo"],
    vegetarian: true,
  },
  {
    slug: "coctel-de-la-casa",
    name: "Coctel de la Casa",
    category: "drinks",
    description: "Bebida especial del bartender con frutas de temporada.",
    price: 9.0,
    image: img("1544145945-f90425340c7e"),
    rating: 4.6,
    prepTime: 5,
    calories: 180,
    ingredients: ["Frutas de temporada", "Hielo", "Jarabe natural"],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

export const getDish = (slug: string) => dishes.find((d) => d.slug === slug);

export const getCategory = (id: string) => categories.find((c) => c.id === id);
