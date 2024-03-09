export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar?: string | null;
  bio?: string | null;
  address: Address[];
  phone?: string | null;
  birthdate?: Date | null;
  gender?: string | null;
  active: boolean;
  products: Product[];
  carts: Cart[];
  orders: Order[];
  resetToken?: string | null;
  resetTokenExpires?: Date | null;
  verifyToken?: string | null;
  verifyTokenExpires?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: number;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  userId: number;
  User?: User | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  description?: string | null;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  image: string;
  stock: number;
  reviews: Review[];
  cartItems: CartItem[];
  orderItems: OrderItem[];
  categoryId: number;
  category: Category;
  userId: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: number;
  text: string;
  rating: number;
  productId: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}

export interface Cart {
  id: number;
  userId: number;
  user: User;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  cartId: number;
  cart: Cart;
  productId: number;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: number;
  userId: number;
  user: User;
  total: number;
  status: string;
  paymentMethod: string;
  transactionId?: string | null;
  deliveryDate?: Date | null;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: number;
  orderId: number;
  order: Order;
  productId: number;
  product: Product;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
