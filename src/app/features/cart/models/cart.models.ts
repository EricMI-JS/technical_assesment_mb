export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: {
    value: number;
    count: number;
  };
  isFavorite: boolean;
}

export interface OrderItem {
  id: string;
  quantity: number;
  name: string;
  price: number;
}

export interface PaymentDetails {
  method: string;
  cardNumber: string;
  cardHolder: string;
}

export interface ShippingDetails {
  address: string;
  city: string;
  country: string;
} 