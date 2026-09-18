import { FoodItem } from '../types';

import thaliSpecialImg from '../assets/images/thali_special_meal_1789751984115.jpg';
import hostelerComboImg from '../assets/images/hosteler_combo_thali_1789752129239.jpg';
import miniGharMealImg from '../assets/images/mini_ghar_meal_1789752142162.jpg';
import dalTadkaImg from '../assets/images/dal_tadka_bowl_1789752001962.jpg';
import yellowDalFryImg from '../assets/images/yellow_dal_fry_1789752115685.jpg';
import dalMakhaniMaaImg from '../assets/images/dal_makhani_maa_1789752084464.jpg';
import alooGobiMatarImg from '../assets/images/aloo_gobi_matar_1789752015400.jpg';
import paneerBhurjiImg from '../assets/images/paneer_bhurji_plate_1789752028911.jpg';
import bhindiMasalaImg from '../assets/images/bhindi_masala_crisp_1789752070180.jpg';
import tawaPhulkaImg from '../assets/images/tawa_phulka_ghee_1789752043276.jpg';
import jeeraRiceImg from '../assets/images/jeera_rice_bowl_1789752097650.jpg';
import moongDalKhichdiImg from '../assets/images/moong_dal_khichdi_1789752055852.jpg';
import gattaCurryImg from '../assets/images/rajasthani_gatta_curry_1789752154731.jpg';
import sindhiKadhiImg from '../assets/images/sindhi_kadhi_chawal_1789752168808.jpg';
import pithlaBhakriImg from '../assets/images/pithla_bhakri_dish_1789752193165.jpg';

export const MENU_ITEMS: FoodItem[] = [
  // COMBOS
  {
    id: 'ghar-ki-thali',
    name: 'Ghar Ki Thali',
    hindiName: 'घर की थाली',
    category: 'COMBOS',
    description: 'Dal Tadka + Seasonal Sabzi + 4 Tawa Phulkas + Steamed Basmati Rice + Salad & Pickle. Simple, wholesome, no drama.',
    price: 190,
    originalPrice: 220,
    image: thaliSpecialImg,
    isVeg: true,
    isBestseller: true,
    serves: '1 Person',
    calories: 580,
    protein: '18g',
    prepTime: '20-25 mins',
    homestyleNote: 'Made just like maa packs it in a stainless steel dabba: freshly puffed phulkas brushed with pure desi ghee.',
    ingredients: ['Toor dal', 'Fresh seasonal vegetables', 'Sharbati whole wheat flour', 'Aged basmati', 'Desi cow ghee', 'Jeera', 'Ginger-garlic']
  },
  {
    id: 'hosteler-comfort-combo',
    name: "Hosteler's Survival Combo",
    hindiName: 'हॉस्टल स्पेशल थाली',
    category: 'COMBOS',
    description: 'Panchmel Dal + Sukhi Aloo Jeera Sabzi + 5 Tawa Roti + Jeera Rice + Boondi Raita. The cure for homesickness.',
    price: 210,
    originalPrice: 240,
    image: hostelerComboImg,
    isVeg: true,
    isSpecial: true,
    serves: '1-2 People',
    calories: 640,
    protein: '21g',
    prepTime: '20 mins',
    homestyleNote: 'Designed specifically for days when the mess food made you question your life choices.',
    ingredients: ['5-lentil mix', 'Baby potatoes with cumin', 'Whole wheat phulkas', 'Dahi with boondi', 'Rock salt & roasted cumin']
  },
  {
    id: 'mini-ghar-meal',
    name: 'Mini Ghar Meal (Quick Lunch)',
    hindiName: 'मिनी घर मील',
    category: 'COMBOS',
    description: 'Homestyle Dal Fry + 3 Soft Phulkas + Half Jeera Rice + Sirka Onion. Light on tummy, heavy on comfort.',
    price: 155,
    originalPrice: 180,
    image: miniGharMealImg,
    isVeg: true,
    serves: '1 Person',
    calories: 460,
    protein: '14g',
    prepTime: '18 mins',
    homestyleNote: 'Cooked with 60% less oil than commercial takeaway, so you don’t crash into an afternoon food coma.',
    ingredients: ['Yellow moong dal', 'Toor dal', 'Whole wheat', 'Basmati rice', 'Mustard seeds', 'Curry leaves']
  },

  // DAL
  {
    id: 'dal-tadka',
    name: 'Pahadi Dal Tadka',
    hindiName: 'दाल तड़का (देसी घी)',
    category: 'DAL',
    description: 'Slow-cooked yellow toor & chana dal tempered with double heeng, cumin, garlic, and Kashmiri whole red chillies.',
    price: 130,
    image: dalTadkaImg,
    isVeg: true,
    isBestseller: true,
    serves: '1-2 People',
    calories: 240,
    protein: '12g',
    prepTime: '15 mins',
    homestyleNote: 'Finished with a sizzling dhungar (charcoal ghee tadka) for that village home aroma.',
    ingredients: ['Toor dal', 'Chana dal', 'Desi ghee', 'Heeng (asafoetida)', 'Garlic', 'Kashmiri chillies']
  },
  {
    id: 'dal-fry-homestyle',
    name: 'Homestyle Yellow Dal Fry',
    hindiName: 'सिंपल पीली दाल',
    category: 'DAL',
    description: 'Gentle moong-masoor dal with ripe tomatoes, fresh coriander, and ginger. Subtle, digestive, and soothing.',
    price: 120,
    image: yellowDalFryImg,
    isVeg: true,
    serves: '1-2 People',
    calories: 210,
    protein: '11g',
    prepTime: '15 mins',
    homestyleNote: 'Zero restaurant additives. Exactly what nani prepares when you are recuperating.',
    ingredients: ['Yellow moong dal', 'Pink masoor dal', 'Tomatoes', 'Green chillies', 'Fresh coriander', 'Turmeric']
  },
  {
    id: 'maa-ki-dal-light',
    name: 'Maa Ki Dal (Slow-Cooked Overnight)',
    hindiName: 'मां की दाल (लाइट)',
    category: 'DAL',
    description: 'Whole black urad dal simmered for 12 hours with tomato puree and a touch of white butter. No heavy cream overload.',
    price: 160,
    originalPrice: 185,
    image: dalMakhaniMaaImg,
    isVeg: true,
    isSpecial: true,
    serves: '1-2 People',
    calories: 310,
    protein: '15g',
    prepTime: '20 mins',
    homestyleNote: 'Creaminess comes from 12 hours of slow clay-pot cooking, not artificial cream packets.',
    ingredients: ['Whole black urad', 'Rajma beans', 'Fresh tomato pulp', 'Desi makhan', 'Kasuri methi']
  },

  // SABZI
  {
    id: 'seasonal-sabzi',
    name: 'Mausami Sabzi (Aloo Gobi Matar)',
    hindiName: 'आलू गोभी मटर (घरवाली)',
    category: 'SABZI',
    description: 'Crisp cauliflower florets, farm peas, and tender potatoes tossed in homestyle dry-roasted garam masala.',
    price: 140,
    image: alooGobiMatarImg,
    isVeg: true,
    isBestseller: true,
    serves: '1-2 People',
    calories: 210,
    protein: '6g',
    prepTime: '15 mins',
    homestyleNote: 'Cooked with low flame in its own steam (dum) so vegetables keep their crunch and natural nutrition.',
    ingredients: ['Fresh cauliflower', 'Green peas', 'Potatoes', 'Mustard oil', 'Cumin', 'Amchur']
  },
  {
    id: 'paneer-bhurji-homestyle',
    name: 'Gharwali Paneer Bhurji',
    hindiName: 'पनीर भुर्जी',
    category: 'SABZI',
    description: 'Crumbled fresh malai paneer sauteed with caramelized onions, crunchy bell peppers, and mild green chillies.',
    price: 180,
    image: paneerBhurjiImg,
    isVeg: true,
    serves: '1-2 People',
    calories: 340,
    protein: '22g',
    prepTime: '18 mins',
    homestyleNote: '100% fresh buffalo milk paneer crumbled by hand each morning. No frozen blocks.',
    ingredients: ['Fresh artisanal paneer', 'Red onions', 'Tomatoes', 'Bell pepper', 'Coriander leaves', 'Butter']
  },
  {
    id: 'bhindi-masala-sukhi',
    name: 'Kurkuri Bhindi Masala',
    hindiName: 'मसाला भिंडी (क्रिस्पी)',
    category: 'SABZI',
    description: 'Tender baby okra pan-seared with fennel seeds, carom (ajwain), amchur, and roasted coriander powder.',
    price: 145,
    image: bhindiMasalaImg,
    isVeg: true,
    serves: '1-2 People',
    calories: 180,
    protein: '5g',
    prepTime: '15 mins',
    homestyleNote: 'Zero stickiness guaranteed. Made crisp on high cast-iron tava just like sunday dinners.',
    ingredients: ['Baby okra (bhindi)', 'Ajwain', 'Saunf', 'Dry mango powder', 'Turmeric', 'Mustard oil']
  },

  // ROTI & RICE
  {
    id: 'tawa-phulkas-ghee',
    name: 'Desi Ghee Tawa Phulkas (4 Pcs)',
    hindiName: 'तवा फुल्का (देसी घी)',
    category: 'ROTI & RICE',
    description: 'Piping hot whole wheat rotis, puffed on direct flame and brushed with 100% pure cow ghee.',
    price: 55,
    image: tawaPhulkaImg,
    isVeg: true,
    isBestseller: true,
    serves: '1 Person',
    calories: 280,
    protein: '9g',
    prepTime: '10 mins',
    homestyleNote: 'Made from 100% MP Sharbati wheat chakki atta. Zero maida. Wrapped in foil hot.',
    ingredients: ['Sharbati whole wheat atta', 'Pure desi cow ghee', 'Filtered water']
  },
  {
    id: 'jeera-rice-tadka',
    name: 'Tadka Jeera Rice',
    hindiName: 'जीरा राइस',
    category: 'ROTI & RICE',
    description: 'Fluffy long-grain basmati rice tossed with crackling shahjeera, fragrant bay leaves, and desi ghee.',
    price: 95,
    image: jeeraRiceImg,
    isVeg: true,
    serves: '1-2 People',
    calories: 290,
    protein: '6g',
    prepTime: '12 mins',
    homestyleNote: 'Each grain stays separate. No soggy rice, no heavy oils.',
    ingredients: ['Aged Dehradun Basmati', 'Shahjeera', 'Bay leaves', 'Green cardamom', 'Desi ghee']
  },
  {
    id: 'ghar-wali-khichdi',
    name: 'Ghar Wali Moong Dal Khichdi',
    hindiName: 'घर वाली खिचड़ी + घी',
    category: 'ROTI & RICE',
    description: 'The ultimate solace. Equal parts yellow moong dal and rice, soft-cooked with roasted heeng, cumin, and accompanied by pickle.',
    price: 135,
    image: moongDalKhichdiImg,
    isVeg: true,
    isSpecial: true,
    serves: '1 Person',
    calories: 360,
    protein: '14g',
    prepTime: '15 mins',
    homestyleNote: 'The antidote to long workdays, late-night study sessions, and weary tummies.',
    ingredients: ['Yellow moong dal', 'Tukda basmati', 'Desi ghee', 'Heeng', 'Cumin', 'Rock salt']
  },

  // REGIONAL SPECIALS
  {
    id: 'rajasthani-gatta-curry',
    name: 'Jodhpur Gatta Curry Combo',
    hindiName: 'जोधपुरी गट्टा करी मील',
    category: 'REGIONAL SPECIALS',
    description: 'Tender gram-flour dumplings poached in a spiced, velvety yogurt gravy. Served with 3 soft phulkas & steamed rice.',
    price: 215,
    image: gattaCurryImg,
    isVeg: true,
    isSpecial: true,
    serves: '1 Person',
    calories: 520,
    protein: '16g',
    prepTime: '22 mins',
    homestyleNote: 'Authentic Marwari household recipe with fennel-ajwain fragrant gatte that melt on your tongue.',
    ingredients: ['Gram flour (besan)', 'Fresh curd', 'Ajwain', 'Kashmiri red chillies', 'Coriander seeds']
  },
  {
    id: 'sindhi-kadhi-chawal',
    name: 'Sindhi Kadhi Chawal Meal',
    hindiName: 'सिंधी कढ़ी चावल',
    category: 'REGIONAL SPECIALS',
    description: 'Tangy roasted gram-flour gravy loaded with okra, drumsticks, cluster beans, and lotus stem. Served with jeera rice & sweet boondi.',
    price: 200,
    image: sindhiKadhiImg,
    isVeg: true,
    isSpecial: true,
    serves: '1 Person',
    calories: 490,
    protein: '13g',
    prepTime: '20 mins',
    homestyleNote: 'Roasted till nutty brown aroma fills the room, balanced with natural tamarind pulp.',
    ingredients: ['Besan', 'Tamarind pulp', 'Drumsticks', 'Okra', 'Lotus stem', 'Fenugreek seeds']
  },
  {
    id: 'pithla-bhakri-combo',
    name: 'Maharashtra Pithla Bhakri Special',
    hindiName: 'पिठलं भाकरी + ठेचा',
    category: 'REGIONAL SPECIALS',
    description: 'Rustic Maharashtrian spiced besan pithla served hot with 2 Jowar Bhakris, fiery green chilli Thecha, and sliced raw onion.',
    price: 195,
    image: pithlaBhakriImg,
    isVeg: true,
    serves: '1 Person',
    calories: 510,
    protein: '17g',
    prepTime: '22 mins',
    homestyleNote: 'Homestyle gluten-free dinner packed with fiber and comforting village warmth.',
    ingredients: ['Jowar flour', 'Besan', 'Green chilli thecha', 'Garlic', 'Mustard seeds', 'Coriander']
  }
];
