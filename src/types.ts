export type MenuCategory = 
  | 'TODAY' 
  | 'COMBOS' 
  | 'DAL' 
  | 'SABZI' 
  | 'ROTI & RICE' 
  | 'REGIONAL SPECIALS';

export interface FoodItem {
  id: string;
  name: string;
  hindiName?: string;
  category: MenuCategory;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpecial?: boolean;
  serves?: string;
  calories?: number;
  protein?: string;
  prepTime?: string;
  homestyleNote?: string;
  ingredients?: string[];
}

export interface CartItem {
  id: string; // unique item id or custom thali id
  foodItem: FoodItem;
  quantity: number;
  customDetails?: string;
}

export interface CustomMealState {
  base: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  dal: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  sabzi: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  extras: Array<{
    id: string;
    name: string;
    price: number;
  }>;
}

export interface DailyMenuItem {
  day: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
  theme: string;
  lunchCombo: string;
  lunchDetail: string;
  dinnerSpecial: string;
  specialBadge: string;
}

export interface DeliveryHub {
  id: string;
  name: string;
  region: 'Delhi' | 'Delhi NCR' | 'Upcoming';
  pincodePrefix: string[];
  status: 'Active' | 'High Demand' | 'Coming Soon';
  estimatedTime: string;
  landmark: string;
}
