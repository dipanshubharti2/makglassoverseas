/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MAK GLASS OVERSEAS - CONFIGURATION & DATA SOURCE
 * ==========================================================
 * All placeholder texts, contact details, product catalogs,
 * metrics, and certificates are defined here. Easily editable
 * for live production updates.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: 'Glass Bottles' | 'Glass Jars' | 'Candle Holders' | 'Drinkware' | 'Decorative Glass' | 'Custom Glass Products';
  shortDesc: string;
  fullDesc: string;
  image: string;
  capacity?: string;
  dimensions?: string;
  neckFinish?: string;
  glassType: string;
  colors: string[];
  moq: string;
  leadTime: string;
  packaging: string;
  applications: string[];
  features: string[];
}

export interface ClientPartnerItem {
  name: string;
  category: string;
  country: string;
  logo: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Factory & Process' | 'Finished Products' | 'Packaging & Logistics';
  image: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/* EDITABLE COMPANY CONTACT & METRICS                                          */
/* -------------------------------------------------------------------------- */

export const COMPANY_INFO = {
  name: 'MAK GLASS OVERSEAS',
  logo: '/assets/aistudio/image_2cf29fbb.png',
  tagline: 'Premium Glass Products, Manufactured in Firozabad and Exported Worldwide.',
  subheading: 'Direct manufacturer and global exporter of high-grade glass bottles, cosmetic jars, luxury candle containers, and bespoke OEM glassware from Firozabad — the renowned Glass City of India.',
  
  // EDITABLE: Contact Numbers
  phone: '+91 98370 12345',
  phoneDisplay: '+91 98370 12345',
  altPhone: '+91 98370 54321',
  
  // EDITABLE: WhatsApp direct chat number
  whatsappNumber: '919837012345',
  whatsappPrefillText: 'Hello MAK Glass Overseas, I am interested in your glassware products and would like to request an export quotation.',
  
  // EDITABLE: Email Addresses
  salesEmail: 'exports@makglassoverseas.com',
  infoEmail: 'info@makglassoverseas.com',
  
  // EDITABLE: Physical Address
  addressLine1: 'Plot No. 42-45, Industrial Glass Estate',
  addressLine2: 'Bypass Road, Near Agra-Lucknow Expressway',
  city: 'Firozabad',
  state: 'Uttar Pradesh',
  pincode: '283203',
  country: 'India',
  
  // EDITABLE: Business Operating Hours
  businessHours: 'Monday - Saturday: 9:00 AM – 7:30 PM IST (GMT+5:30)',
  sundayHours: 'Sunday: Closed (Emergency export enquiries handled on WhatsApp)',
  
  // EDITABLE: Trust Strip Statistics
  stats: {
    yearsInBusiness: '25+',
    countriesServed: '42+',
    mouldsAvailable: '600+',
    monthlyCapacity: '2.5M+',
    onTimeDeliveryRate: '99.2%',
  },
  
  // Exact Google Maps Embed URL with pinpoint marker on MAK GLASS OVERSEAS, Firozabad
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=MAK+GLASS+OVERSEAS,+Industrial+Area,+Firozabad,+Uttar+Pradesh+283203,+India&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=MAK+GLASS+OVERSEAS,+Industrial+Area,+Firozabad,+Uttar+Pradesh+283203',
  coordinates: '27.1593° N, 78.3957° E',
};

/* -------------------------------------------------------------------------- */
/* PRODUCT CATEGORIES & ITEMS                                                  */
/* -------------------------------------------------------------------------- */

export const PRODUCT_CATEGORIES = [
  'All',
  'Glass Bottles',
  'Glass Jars',
  'Candle Holders',
  'Drinkware',
  'Decorative Glass',
  'Custom Glass Products',
] as const;

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'prod-spirit-bottle-750',
    name: 'Nordic Heavy-Base Spirit & Liquor Bottle (750ml)',
    category: 'Glass Bottles',
    shortDesc: 'Extra-flint high transparency glass bottle with a thick punt base, ideal for premium spirits and oils.',
    fullDesc: 'Crafted from high-purity extra-flint glass, this 750ml Nordic bottle features an ultra-thick crystal base and a smooth T-top cork neck. Designed for whiskey, rum, artisan gin, and premium gourmet condiments. Resists thermal and transport stresses with uniform wall distribution.',
    image: '/src/assets/images/product_bottles_jars_1793431962805.jpg',
    capacity: '750 ml (also available in 500ml & 1000ml)',
    dimensions: 'Height: 228mm | Diameter: 86mm',
    neckFinish: 'GPI 30/315 cork finish or GPI screw cap',
    glassType: 'High-Purity Super Flint Glass',
    colors: ['Super Flint Clear', 'Frosted Matte', 'Amber UV-Protect'],
    moq: '5,000 pcs (FCL discounts apply)',
    leadTime: '15-20 days for ready moulds, 30 days custom',
    packaging: 'Export pallet with honeycomb dividers & shrink wrap',
    applications: ['Whiskey & Gin', 'Liqueurs', 'Craft Beverages', 'Cold Pressed Oils'],
    features: ['Thick punted base', 'Thermal shock resistant', 'FDA / LFGB food safe', 'Screen printing ready'],
  },
  {
    id: 'prod-cosmetic-cream-jar',
    name: 'Luxury Opal & Flint Cosmetic Cream Jar (50ml / 100ml)',
    category: 'Glass Jars',
    shortDesc: 'Double-walled heavy glass cosmetic jars with aluminium screw caps for creams and skincare serums.',
    fullDesc: 'Engineered for luxury skincare and cosmetics brands, these heavy-weight cosmetic glass jars offer superior chemical inertness and oxygen-barrier protection. Available with gold, silver, matte black, or bamboo caps with airtight PE liners.',
    image: '/src/assets/images/product_bottles_jars_1793431962805.jpg',
    capacity: '50 ml / 100 ml',
    dimensions: 'Height: 48mm | Diameter: 62mm',
    neckFinish: '53-400 continuous thread with inner liner',
    glassType: 'Grade-A Soda Lime Flint Glass',
    colors: ['Clear Flint', 'Frosted White', 'Amber', 'Gloss Black'],
    moq: '3,000 pcs',
    leadTime: '12-18 days',
    packaging: 'Individual compartment cartons inside seaworthy pallets',
    applications: ['Anti-aging creams', 'Face balms', 'Luxury salves', 'Body butter'],
    features: ['100% recyclable', 'Zero leach guarantee', 'Heavy glass bottom', 'Custom silk-screening'],
  },
  {
    id: 'prod-ribbed-candle-jar',
    name: 'Fluted Ribbed Scented Candle Glass Vessel (300ml)',
    category: 'Candle Holders',
    shortDesc: 'Architectural ribbed texture candle tumbler designed for even wax burning and high thermal stability.',
    fullDesc: 'Specially annealed to withstand high thermal cycling from burning soy, coconut, and beeswax blends. The exterior features crisp vertical fluting that produces a mesmerizing refraction when illuminated, popular among luxury home fragrance brands worldwide.',
    image: '/src/assets/images/product_candle_drinkware_1793431963113.jpg',
    capacity: '300 ml / 10 oz wax fill',
    dimensions: 'Height: 95mm | Top Outer Diameter: 82mm',
    neckFinish: 'Wide open mouth with optional wooden/metal lid',
    glassType: 'Heat-Annealed Thermal Glass',
    colors: ['Crystal Clear', 'Matte Black', 'Amber Gold', 'Smoky Grey'],
    moq: '2,500 pcs',
    leadTime: '14-21 days',
    packaging: 'Drop-tested 5-ply cartons with corrugated cell partitions',
    applications: ['Aromatherapy Candles', 'Luxury Home Decor', 'Spa Collections'],
    features: ['High thermal resistance', 'Flat interior base for easy wick centering', 'Uniform wall thickness'],
  },
  {
    id: 'prod-crystal-whiskey-tumbler',
    name: 'Diamond Cut Glass Tumbler & Bar Drinkware (320ml)',
    category: 'Drinkware',
    shortDesc: 'Handcrafted pressed crystal drinkware tumbler with intricate diamond-cut facets for hospitality.',
    fullDesc: 'Inspired by Firozabad’s historic glass cutting traditions, this bar tumbler is crafted from lead-free brilliant glass. Boasting an ergonomic weight in hand and laser-treated smooth rim, it is preferred by international hotel chains, restaurants, and retail distributors.',
    image: '/src/assets/images/product_candle_drinkware_1793431963113.jpg',
    capacity: '320 ml / 11 oz',
    dimensions: 'Height: 98mm | Diameter: 84mm',
    neckFinish: 'Laser-cut fire-polished rim',
    glassType: 'Lead-Free High Clarity Crystal Glass',
    colors: ['Ultra Clear', 'Ocean Teal tint', 'Amber Bronze'],
    moq: '3,000 pcs',
    leadTime: '15-25 days',
    packaging: '6-pack gift boxes or bulk commercial master cartons',
    applications: ['Hotels & Resorts', 'Cocktail Bars', 'Corporate Gift Sets'],
    features: ['Dishwasher safe', 'Chip-resistant rim', 'Weighted base', 'Lead & cadmium free'],
  },
  {
    id: 'prod-artisan-mouthblown-vase',
    name: 'Artisanal Mouth-Blown Decorative Urn & Centerpiece',
    category: 'Decorative Glass',
    shortDesc: 'Handcrafted mouth-blown centerpiece vase showcasing traditional Firozabad glassblowing excellence.',
    fullDesc: 'Each piece is individually mouth-blown by veteran artisans in our Firozabad workshops. Featuring subtle organic bubbles and soft fluid contours, this artisanal vase elevates modern interior spaces, luxury boutique hotels, and high-end home decor boutiques.',
    image: '/src/assets/images/about_glass_craft_1793431962373.jpg',
    capacity: 'Decorative / 2.5 Litre volume',
    dimensions: 'Height: 310mm | Base: 120mm | Max Dia: 180mm',
    neckFinish: 'Hand-sheared fire-rolled opening',
    glassType: 'Artisanal Borosilicate / Soda Lime Blend',
    colors: ['Smoky Olive', 'Ocean Azure', 'Topaz Honey', 'Pristine Clear'],
    moq: '500 pcs',
    leadTime: '20-30 days',
    packaging: 'Custom EPE foam fitted boxes with corner protectors',
    applications: ['Interior Design', 'Hospitality Lobbies', 'Luxury Floral Displays'],
    features: ['100% Handcrafted', 'Unique artisan character', 'Heavy stable footing'],
  },
  {
    id: 'prod-custom-oem-moulding',
    name: 'Custom OEM/ODM Mould Development & Private Label Glass',
    category: 'Custom Glass Products',
    shortDesc: 'Turnkey custom glass tooling, bespoke 3D CAD engineering, embossed brand logos, and custom finishes.',
    fullDesc: 'We turn your proprietary sketches and CAD files into mass-produced custom glass containers. Our in-house mould workshop creates rapid sampling within 14 days, followed by commercial furnace runs. Full decoration capabilities: acid etching, metallic sputtering, decal firing, and silk screening.',
    image: '/src/assets/images/hero_glass_factory_1793431959968.jpg',
    capacity: '10ml to 5000ml (Fully customizable)',
    dimensions: 'Custom engineered per client 2D/3D specifications',
    neckFinish: 'RoPP, Crown, Cork, Screw, Spray, or Pump',
    glassType: 'Formulated to custom density and clarity specs',
    colors: ['Custom Pantone spray', 'Frosted', 'Full Metallic Electroplate'],
    moq: '10,000 pcs for custom moulds (Sample batch: 12-24 pcs)',
    leadTime: 'Moulding: 15 days | Mass Production: 25 days',
    packaging: 'Tailored carton dimensions and pallet configuration',
    applications: ['Proprietary Fragrance Brands', 'Bespoke Beverage Bottles', 'Patented Jars'],
    features: ['Exclusive client mould ownership', 'Confidentiality NDA backed', 'In-house 3D simulation'],
  },
];

/* -------------------------------------------------------------------------- */
/* WHY CHOOSE US (6 PILLARS)                                                   */
/* -------------------------------------------------------------------------- */

export const WHY_CHOOSE_US_ITEMS = [
  {
    iconName: 'Factory',
    title: 'Direct Manufacturer Pricing',
    description: 'Zero broker markups. As a direct Firozabad furnace operator, our ex-factory rates guarantee maximum margins for your supply chain.',
    highlight: 'Save 18-25% vs trading agents',
  },
  {
    iconName: 'Palette',
    title: 'Custom Designs & Private Labeling',
    description: 'In-house CAD design and tooling workshop. We execute custom embossed logos, frosted finishes, electrostatic spray, and gold foil decals.',
    highlight: 'Rapid 14-day mould prototyping',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Strict Multi-Stage Quality Checks',
    description: 'Continuous thermal shock testing, laser wall-thickness inspection, annealing polariscope checks, and 100% visual defect screening.',
    highlight: 'Defect rate < 0.2% verified',
  },
  {
    iconName: 'Box',
    title: 'Safe Export Packaging Standards',
    description: 'Heavy-duty 5 & 7-ply master cartons, individual honeycomb cell dividers, fumigated ISPM-15 wooden pallets, and waterproof stretch wrapping.',
    highlight: 'Zero-breakage container record',
  },
  {
    iconName: 'Truck',
    title: 'On-Time Global Delivery',
    description: 'Direct logistics corridors via Mundra and Nhava Sheva (JNPT) seaports. We handle customs documentation, bill of lading, and certificate of origin.',
    highlight: '99.2% on-time vessel dispatch',
  },
  {
    iconName: 'Layers',
    title: 'Flexible Order Sizes (FCL & LCL)',
    description: 'From 20ft and 40ft High Cube containers for major volume contracts down to consolidated LCL pallet orders for growing brands.',
    highlight: 'Adaptable to your inventory cycle',
  },
];

/* -------------------------------------------------------------------------- */
/* CLIENT PARTNERS & SMALL LOGOS (CLIENT SECTION)                             */
/* -------------------------------------------------------------------------- */

export const CLIENT_PARTNERS: ClientPartnerItem[] = [
  {
    name: 'Aura Home Fragrances',
    category: 'Luxury Candle Jars',
    country: 'United Kingdom',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="%231e293b"/><circle cx="40" cy="40" r="24" stroke="%23d4af37" stroke-width="2.5"/><path d="M40 22v12m0 12v12M28 34l8.5 6-8.5 6M52 34l-8.5 6 8.5 6" stroke="%23d4af37" stroke-width="2" stroke-linecap="round"/><circle cx="40" cy="40" r="3" fill="%23d4af37"/></svg>',
  },
  {
    name: 'Oasis Artisan Beverages',
    category: 'Craft Spirits & Syrups',
    country: 'United Arab Emirates',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="%230f172a"/><path d="M30 54V34a10 10 0 0120 0v20" stroke="%23d4af37" stroke-width="3" stroke-linecap="round"/><path d="M26 54h28" stroke="%23d4af37" stroke-width="3" stroke-linecap="round"/><circle cx="40" cy="30" r="4" fill="%23e5c158"/></svg>',
  },
  {
    name: 'Veritas Botanicals',
    category: 'Cosmetic Flint Jars',
    country: 'United States',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="%231e293b"/><path d="M40 22c-9 9-14 18-14 26a14 14 0 0028 0c0-8-5-17-14-26z" stroke="%23d4af37" stroke-width="2.5" fill="%23d4af37" fill-opacity="0.2"/><path d="M40 32v18" stroke="%23d4af37" stroke-width="2" stroke-linecap="round"/></svg>',
  },
  {
    name: 'Le Grand Cellier',
    category: 'Wine & Aperitif Bottles',
    country: 'France',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="%230f172a"/><rect x="24" y="24" width="32" height="32" rx="4" transform="rotate(45 40 40)" stroke="%23d4af37" stroke-width="2.5"/><circle cx="40" cy="40" r="8" fill="%23d4af37" fill-opacity="0.3"/></svg>',
  },
  {
    name: 'Sovereign Tableware',
    category: 'Hospitality Drinkware',
    country: 'Australia',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="%231e293b"/><path d="M26 28l14 28 14-28M26 44h28" stroke="%23d4af37" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    name: 'Al-Noor Attar & Oudh',
    category: 'Decorative Perfume Urns',
    country: 'Saudi Arabia',
    logo: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="%230f172a"/><path d="M40 22v36M28 32c6-4 18-4 24 0M28 48c6 4 18 4 24 0" stroke="%23d4af37" stroke-width="2.5" stroke-linecap="round"/><circle cx="40" cy="22" r="3" fill="%23d4af37"/></svg>',
  },
];

/* -------------------------------------------------------------------------- */
/* EXPORT COUNTRIES & GLOBAL REACH                                             */
/* -------------------------------------------------------------------------- */

export const EXPORT_REGIONS = [
  {
    region: 'North America',
    countries: ['United States', 'Canada', 'Mexico'],
    flag: '🌎',
    description: 'Supplying perfume bottles, candle vessels, and spirits packaging to USA & Canadian distributors.',
  },
  {
    region: 'Europe & UK',
    countries: ['United Kingdom', 'Germany', 'France', 'Italy', 'Netherlands', 'Spain'],
    flag: '🌍',
    description: 'Food-grade compliant glassware for European beverage houses, tabletop retailers, and luxury spas.',
  },
  {
    region: 'Middle East (GCC)',
    countries: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait'],
    flag: '🕌',
    description: 'High-end attar bottles, decorative crystal vessels, and heavy-base hospitality drinkware.',
  },
  {
    region: 'Oceania & Asia-Pacific',
    countries: ['Australia', 'New Zealand', 'Singapore', 'Malaysia', 'Japan'],
    flag: '🌏',
    description: 'Sustainable glass packaging solutions replacing single-use plastics for FMCG brands.',
  },
  {
    region: 'Africa & South America',
    countries: ['South Africa', 'Kenya', 'Brazil', 'Chile'],
    flag: '🌐',
    description: 'Durable pharmaceutical jars, beverage bottles, and industrial glass containers.',
  },
];

export const CLIENT_SEGMENTS = [
  { name: 'Beverage & Spirits Distilleries', count: '120+ Brands' },
  { name: 'Home Fragrance & Candle Makers', count: '85+ Studios' },
  { name: 'Cosmetics & Skincare Formulators', count: '90+ Lines' },
  { name: '5-Star Hospitality & Restaurants', count: '65+ Chains' },
  { name: 'International Wholesale Importers', count: '140+ Importers' },
];

/* -------------------------------------------------------------------------- */
/* TESTIMONIALS (B2B CLIENTS WITH SMALL AVATARS)                              */
/* -------------------------------------------------------------------------- */

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Julian Vance',
    role: 'Procurement Director',
    company: 'Aura Home Fragrances Ltd.',
    country: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format',
    quote: 'We have sourced over 250,000 ribbed candle jars from MAK Glass Overseas over the past three years. Their thermal annealing is flawless — zero cracking during our hot pour tests, and the export palletizing prevented any sea transit damage.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Tariq Al-Mansoor',
    role: 'Supply Chain Operations',
    company: 'Oasis Artisan Beverages & Syrups',
    country: 'Dubai, United Arab Emirates',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&auto=format',
    quote: 'MAK Glass executed our custom 500ml embossed glass bottle mould in just under three weeks. Direct factory pricing gave us a substantial edge, and their container turnaround through Mundra port was exceptionally punctual.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Clara Zimmerman',
    role: 'Packaging Development Head',
    company: 'Veritas Botanicals Skincare',
    country: 'Portland, Oregon, USA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces&auto=format',
    quote: 'Finding a reliable Indian manufacturer with international quality consistency was our priority. MAK Glass provided batch-by-batch FDA compliance documentation and their frosted cosmetic jars elevate our entire product line.',
    rating: 5,
  },
];

/* -------------------------------------------------------------------------- */
/* GALLERY ITEMS                                                               */
/* -------------------------------------------------------------------------- */

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Continuous Lehr Annealing & Conveyor Line',
    category: 'Factory & Process',
    image: '/src/assets/images/hero_glass_factory_1793431959968.jpg',
    description: 'Automated glass forming line transporting pristine bottles through the annealing lehr to eliminate internal thermal stresses.',
  },
  {
    id: 'gal-2',
    title: 'Artisan Glassblowing Heritage in Firozabad',
    category: 'Factory & Process',
    image: '/src/assets/images/about_glass_craft_1793431962373.jpg',
    description: 'Master glassmaker measuring mouth-blown glass neck diameter with vernier calipers against furnace illumination.',
  },
  {
    id: 'gal-3',
    title: 'Premium Cosmetic & Spirit Glass Collection',
    category: 'Finished Products',
    image: '/src/assets/images/product_bottles_jars_1793431962805.jpg',
    description: 'Heavy-base spirit bottles and double-walled cosmetic jars with gold brushed metal caps and high-clarity flint walls.',
  },
  {
    id: 'gal-4',
    title: 'Fluted Candle Jars & Crystal Cut Drinkware',
    category: 'Finished Products',
    image: '/src/assets/images/product_candle_drinkware_1793431963113.jpg',
    description: 'Luxury ribbed scented candle vessels and hand-cut bar tumblers showcasing brilliant refractive clarity.',
  },
  {
    id: 'gal-5',
    title: 'Seaworthy Palletization & Warehouse Dispatch',
    category: 'Packaging & Logistics',
    image: '/src/assets/images/export_packaging_pallets_1793431962201.jpg',
    description: 'Neatly shrink-wrapped export pallets with heavy-duty 7-ply cartons and corner edge boards ready for container loading.',
  },
  {
    id: 'gal-6',
    title: 'Custom Moulding & Tooling Precision',
    category: 'Factory & Process',
    image: '/src/assets/images/hero_glass_factory_1793431959968.jpg',
    description: 'CNC-machined alloy steel bottle moulds undergoing high-tolerance dimensional calibration before furnace fitting.',
  },
];



