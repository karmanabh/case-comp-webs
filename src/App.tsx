/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TodaysMenu } from './components/TodaysMenu';
import { WeeklyRotation } from './components/WeeklyRotation';
import { BuildYourMeal } from './components/BuildYourMeal';
import { WhyGKK } from './components/WhyGKK';
import { MissHomeSection } from './components/MissHomeSection';
import { DeliverySection } from './components/DeliverySection';
import { GkkPromise } from './components/GkkPromise';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishDetailModal } from './components/DishDetailModal';
import { CheckoutModal } from './components/CheckoutModal';
import { MobileBottomBar } from './components/MobileBottomBar';

import { MENU_ITEMS } from './data/menuData';
import { DELIVERY_HUBS } from './data/locationsData';
import { FoodItem, CartItem, DeliveryHub } from './types';

export default function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'ghar-ki-thali',
      foodItem: MENU_ITEMS[0], // Pre-populate with 1 Ghar Ki Thali for immediate lively feel
      quantity: 1
    }
  ]);

  // Selected Location (Default: Delhi University North Campus)
  const [selectedLocation, setSelectedLocation] = useState<DeliveryHub>(DELIVERY_HUBS[0]);

  // Modal & Drawer toggles
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedDishForDetails, setSelectedDishForDetails] = useState<FoodItem | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState(30);
  const [kitchenNote, setKitchenNote] = useState('');

  // Cart operations
  const handleAddToCart = (item: FoodItem) => {
    setCartItems(prev => {
      const existing = prev.find(c => c.foodItem.id === item.id);
      if (existing) {
        return prev.map(c => c.foodItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { id: item.id, foodItem: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev
        .map(c => {
          if (c.id === id || c.foodItem.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddCustomMeal = (customItem: FoodItem, customDetails: string) => {
    setCartItems(prev => [
      ...prev,
      {
        id: customItem.id,
        foodItem: customItem,
        quantity: 1,
        customDetails
      }
    ]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDelivery = () => {
    const el = document.getElementById('delivery-areas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProceedToCheckout = (discount: number, note: string) => {
    setAppliedDiscount(discount);
    setKitchenNote(note);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const getQuantityForDish = (id: string) => {
    const found = cartItems.find(c => c.foodItem.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] selection:bg-[#C5221F] selection:text-white flex flex-col font-sans">
      
      {/* Top Banner Alert for Hostels & PGs */}
      <div className="bg-[#1C1917] text-[#FAF7F2] py-2 px-4 text-center text-xs font-semibold tracking-wide border-b border-[#2C2724]">
        <span>🔥 Flat ₹30 OFF on your first dabba with code </span>
        <span className="font-extrabold text-[#EAA221] bg-white/10 px-1.5 py-0.5 rounded ml-1">PGVALA</span>
        <span className="hidden sm:inline"> • Zero delivery fee above ₹199</span>
      </div>

      {/* 1. Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        availableHubs={DELIVERY_HUBS}
      />

      <main className="flex-1 pb-16 md:pb-0">
        {/* 2. Hero Section */}
        <Hero
          onSeeMenu={scrollToMenu}
          onOrderNow={() => {
            if (cartItems.length > 0) {
              setIsCartOpen(true);
            } else {
              scrollToMenu();
            }
          }}
          selectedLocation={selectedLocation}
          onSelectLocationClick={scrollToDelivery}
        />

        {/* 3. Today's Menu (Main Section) */}
        <TodaysMenu
          items={MENU_ITEMS}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          onOpenDetails={(item) => setSelectedDishForDetails(item)}
        />

        {/* 4. What's Cooking? / Daily Rotation */}
        <WeeklyRotation
          onOrderNow={scrollToMenu}
        />

        {/* 5. Build Your Meal (Interactive Thali Builder) */}
        <BuildYourMeal
          onAddCustomMealToCart={handleAddCustomMeal}
        />

        {/* 6. Why GKK? */}
        <WhyGKK />

        {/* 7. For People Who Miss Home */}
        <MissHomeSection
          onOrderNow={scrollToMenu}
        />

        {/* 8. Delivery / Location Section */}
        <DeliverySection
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />

        {/* 9. GKK Promise (Bold Red Section) */}
        <GkkPromise />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Sliding Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onProceedToCheckout={handleProceedToCheckout}
        selectedLocation={selectedLocation}
      />

      {/* Dish Nutritional & Ingredients Modal */}
      <DishDetailModal
        item={selectedDishForDetails}
        onClose={() => setSelectedDishForDetails(null)}
        quantityInCart={selectedDishForDetails ? getQuantityForDish(selectedDishForDetails.id) : 0}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* Checkout & Order Placement Simulation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        selectedLocation={selectedLocation}
        discount={appliedDiscount}
        kitchenNote={kitchenNote}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Mobile Sticky Bar */}
      <MobileBottomBar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onSeeMenu={scrollToMenu}
      />

    </div>
  );
}
