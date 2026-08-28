export interface Category {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface Collection {
  id: string;
  title: string;
  discount: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice: string;
  rating: number;
  image: string;
  description?: string;
}

// FeaturedProduct is the same as Product (kept for backward compat)
export type FeaturedProduct = Product;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export interface SmartSaving {
  id: string;
  tagPercent: string;
  subtitle: string;
  title: string;
  image: string;
}

export interface Brand {
  id: string;
  image: string;
  discount: string;
}

export interface LatestUpdate {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  { id: "1", title: "Dogs", image: "category-item-image-1.jpg", link: "#" },
  { id: "2", title: "Cats", image: "category-item-image-2.jpg", link: "#" },
  { id: "3", title: "Birds", image: "category-item-image-3.jpg", link: "#" },
  { id: "4", title: "Rabbits", image: "category-item-image-4.jpg", link: "#" },
  { id: "5", title: "Hamsters", image: "category-item-image-5.jpg", link: "#" },
  { id: "6", title: "Fish", image: "category-item-image-6.jpg", link: "#" },
  { id: "7", title: "Ferrets", image: "category-item-image-7.jpg", link: "#" },
];

export const COLLECTIONS: Collection[] = [
  { id: "1", title: "Paw Style Corner", discount: "10% Off", image: "collection-item-image-1.jpg" },
  { id: "2", title: "Adventure Hub", discount: "20% Off", image: "collection-item-image-2.jpg" },
  { id: "3", title: "Premium Essentials", discount: "15% Off", image: "collection-item-image-3.jpg" },
  { id: "4", title: "Gentle Pet Care", discount: "05% Off", image: "collection-item-image-4.jpg" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Puppy Care Food",
    price: "$15.00",
    originalPrice: "$25.00",
    rating: 5,
    image: "product-image-1.jpg",
    description: "High-protein puppy care food enriched with essential vitamins, minerals, and DHA for optimal brain and bone development.",
  },
  {
    id: "p2",
    title: "Smart Feeding Bowl",
    price: "$18.00",
    originalPrice: "$20.00",
    rating: 5,
    image: "product-image-2.jpg",
    description: "Ergonomic stainless steel anti-spill feeding bowl designed for healthy digestion and easy cleaning.",
  },
  {
    id: "p3",
    title: "Pet Care Shampoo",
    price: "$24.00",
    originalPrice: "$30.00",
    rating: 5,
    image: "product-image-3.jpg",
    description: "Hypoallergenic organic shampoo formulated to nourish coat, relieve dry skin, and provide long-lasting fresh scent.",
  },
  {
    id: "p4",
    title: "Soft Puppy Blanket",
    price: "$18.00",
    originalPrice: "$22.00",
    rating: 5,
    image: "product-image-4.jpg",
    description: "Ultra-soft plush fleece blanket providing warmth, comfort, and security for puppies and small pets.",
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "fp1",
    title: "Puppy Care Food",
    price: "$15.00",
    originalPrice: "$25.00",
    rating: 5,
    image: "featured-product-image-1.jpg",
    description: "Premium puppy care food packed with nutrients, probiotics, and healthy fats.",
  },
  {
    id: "fp2",
    title: "Cat Scratching Tree",
    price: "$35.00",
    originalPrice: "$40.00",
    rating: 5,
    image: "featured-product-image-2.jpg",
    description: "Multi-level cat scratching tree featuring plush perches and durable natural sisal rope posts.",
  },
  {
    id: "fp3",
    title: "HappyTail Dog Toy",
    price: "$24.00",
    originalPrice: "$30.00",
    rating: 5,
    image: "featured-product-image-3.jpg",
    description: "Interactive bite-resistant squeaky toy built for hours of active playtime and dental health.",
  },
  {
    id: "fp4",
    title: "Tiny Hamster House",
    price: "$18.00",
    originalPrice: "$22.00",
    rating: 5,
    image: "featured-product-image-4.jpg",
    description: "Cozy natural wooden shelter for hamsters, gerbils, and small rodents with safe chewable finish.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sophia Miller",
    role: "Pet Owner",
    image: "author-1.jpg",
    rating: 5,
    review: "The pet food quality is amazing, and my dog absolutely loves it. Fast delivery and great customer service every time!",
  },
  {
    id: "t2",
    name: "Daniel Carter",
    role: "Dog Trainer",
    image: "author-2.jpg",
    rating: 5,
    review: "The pet food quality is amazing, and my dog absolutely loves it. Fast delivery and great customer service every time!",
  },
  {
    id: "t3",
    name: "Emma Wilson",
    role: "Animal Specialist",
    image: "author-3.jpg",
    rating: 5,
    review: "The pet food quality is amazing, and my dog absolutely loves it. Fast delivery and great customer service every time!",
  },
  {
    id: "t4",
    name: "James Anderson",
    role: "Pet Groomer",
    image: "author-4.jpg",
    rating: 5,
    review: "The pet food quality is amazing, and my dog absolutely loves it. Fast delivery and great customer service every time!",
  },
  {
    id: "t5",
    name: "Guy Hawkins",
    role: "Pet Owner",
    image: "author-5.jpg",
    rating: 5,
    review: "The pet food quality is amazing, and my dog absolutely loves it. Fast delivery and great customer service every time!",
  },
];

export const SMART_SAVINGS: SmartSaving[] = [
  { id: "ss1", tagPercent: "20", subtitle: "Back in Stock", title: "Adored by Dogs", image: "smart-savings-item-image-1.jpg" },
  { id: "ss2", tagPercent: "30", subtitle: "Adored By Dog", title: "Fresh Dog Food", image: "smart-savings-item-image-2.jpg" },
];

export const BRANDS: Brand[] = [
  { id: "b1", image: "our-brands-item-image-1.jpg", discount: "20% Off" },
  { id: "b2", image: "our-brands-item-image-2.jpg", discount: "30% Off" },
  { id: "b3", image: "our-brands-item-image-3.jpg", discount: "10% Off" },
  { id: "b4", image: "our-brands-item-image-4.jpg", discount: "8% Off" },
  { id: "b5", image: "our-brands-item-image-5.jpg", discount: "25% Off" },
  { id: "b6", image: "our-brands-item-image-6.jpg", discount: "28% Off" },
];

export const LATEST_UPDATES: LatestUpdate[] = [
  { id: "lu1", category: "Featured", title: "Up To 50% Off Pet Food", image: "latest-update-item-image-1.jpg" },
  { id: "lu2", category: "New Trending", title: "Buy One Get One Free", image: "latest-update-item-image-2.jpg" },
  { id: "lu3", category: "Premium", title: "Free Delivery On Every Order", image: "latest-update-item-image-3.jpg" },
];

export const FAQS: FAQItem[] = [
  { id: "faq1", question: "What products do you offer for pets?", answer: "We provide pet food, toys, grooming products, accessories, beds, feeders, aquarium supplies, and healthcare essentials for all pets." },
  { id: "faq2", question: "Are your pet products safe to use?", answer: "Yes, all our products undergo strict quality and safety standard checks before being offered to customers." },
  { id: "faq3", question: "Do you offer products for all pet types?", answer: "We cater to dogs, cats, birds, rabbits, hamsters, fish, ferrets, and small domestic animals." },
  { id: "faq4", question: "Can I find grooming essentials here?", answer: "Absolutely! We offer organic shampoos, coat brushes, claw clippers, and full grooming care kits." },
  { id: "faq5", question: "Do you provide home delivery service?", answer: "Yes! We provide fast, reliable door-to-door delivery with free shipping on qualifying orders." },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: "bp1", date: "May 8, 2026", title: "Premium Nutrition For Happy Growing Puppies", image: "post-1.jpg" },
  { id: "bp2", date: "May 6, 2026", title: "Healthy Grooming Routine For Happy Fluffy Dogs", image: "post-2.jpg" },
  { id: "bp3", date: "May 4, 2026", title: "Creating Comfortable Homes For Happy Indoor Pets", image: "post-3.jpg" },
];
