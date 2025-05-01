import { TravelPackage } from '../components/TravelCard';

export const travelPackages: TravelPackage[] = [
  {
    id: 'paris-romance',
    title: '7 Days in Paris',
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '7 days',
    price: 1299,
    rating: 5,
    description: 'Experience the city of love with guided tours of iconic landmarks, wine tastings, and Seine river cruise.',
    type: 'city'
  },
  {
    id: 'bali-paradise',
    title: 'Bali Beach Escape',
    location: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '10 days',
    price: 1499,
    rating: 5,
    description: 'Relax on pristine beaches, visit ancient temples, and enjoy luxury accommodations in this tropical paradise.',
    type: 'beach'
  },
  {
    id: 'japan-explorer',
    title: 'Japan Culture Tour',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '12 days',
    price: 2199,
    rating: 5,
    description: 'Discover the perfect blend of ancient traditions and modern wonders across Tokyo, Kyoto, and Osaka.',
    type: 'cultural'
  },
  {
    id: 'egypt-wonders',
    title: 'Ancient Egypt Adventure',
    location: 'Cairo, Egypt',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '9 days',
    price: 1799,
    rating: 4,
    description: 'Explore the pyramids, cruise the Nile River, and uncover the mysteries of ancient Egyptian civilization.',
    type: 'cultural'
  },
  {
    id: 'safari-kenya',
    title: 'Kenyan Safari Adventure',
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '8 days',
    price: 2499,
    rating: 5,
    description: 'Witness the incredible wildlife of Africa in their natural habitat with expert guides and luxury camping.',
    type: 'safari'
  },
  {
    id: 'santorini-getaway',
    title: 'Santorini Island Getaway',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '6 days',
    price: 1599,
    rating: 5,
    description: 'Stay in iconic white-washed villas, enjoy breathtaking views, and experience authentic Greek cuisine.',
    type: 'beach'
  },
  {
    id: 'amazon-expedition',
    title: 'Amazon Rainforest Expedition',
    location: 'Amazon, Brazil',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '7 days',
    price: 1899,
    rating: 4,
    description: 'Journey deep into the world\'s largest rainforest to discover incredible biodiversity and indigenous cultures.',
    type: 'adventure'
  },
  {
    id: 'new-york-city',
    title: 'New York City Explorer',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&h=600&auto=format&fit=crop',
    duration: '5 days',
    price: 1299,
    rating: 4,
    description: 'Take a bite out of the Big Apple with Broadway shows, iconic landmarks, and world-class dining experiences.',
    type: 'city'
  },
];

export const destinations = [
  {
    id: 'europe',
    name: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&h=600&auto=format&fit=crop',
    description: 'Explore historic cities, stunning architecture, and diverse cultures.',
    featured: true,
  },
  {
    id: 'asia',
    name: 'Asia',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&h=600&auto=format&fit=crop',
    description: 'Discover ancient traditions alongside futuristic metropolises.',
    featured: true,
  },
  {
    id: 'africa',
    name: 'Africa',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&h=600&auto=format&fit=crop',
    description: 'Experience breathtaking wildlife and diverse landscapes.',
    featured: true,
  },
  {
    id: 'north-america',
    name: 'North America',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&h=600&auto=format&fit=crop',
    description: 'From bustling cities to natural wonders and everything in between.',
    featured: false,
  },
  {
    id: 'south-america',
    name: 'South America',
    image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=800&h=600&auto=format&fit=crop',
    description: 'Vibrant cultures, lush rainforests, and ancient civilizations.',
    featured: false,
  },
  {
    id: 'oceania',
    name: 'Oceania',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=800&h=600&auto=format&fit=crop',
    description: 'Pristine beaches, unique wildlife, and laid-back lifestyle.',
    featured: false,
  },
];

export const detailedPackage = {
  id: 'paris-romance',
  title: '7 Days in Paris',
  location: 'Paris, France',
  images: [
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1499856871958-5b9357976b82?q=80&w=800&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?q=80&w=800&h=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?q=80&w=800&h=600&auto=format&fit=crop'
  ],
  duration: '7 days',
  price: 1299,
  rating: 5,
  description: 'Experience the city of love with guided tours of iconic landmarks, wine tastings, and a romantic Seine river cruise. This carefully curated package gives you the perfect balance of organized tours and free time to explore on your own.',
  itinerary: [
    {
      day: 1,
      title: 'Arrival & Welcome Dinner',
      description: 'Arrive in Paris, transfer to your hotel, and settle in. In the evening, enjoy a welcome dinner at a local restaurant with views of the Eiffel Tower.'
    },
    {
      day: 2,
      title: 'Louvre & Seine River Cruise',
      description: 'Morning guided tour of the Louvre Museum. Afternoon at leisure. Evening Seine River dinner cruise with live entertainment.'
    },
    {
      day: 3,
      title: 'Eiffel Tower & Montmartre',
      description: 'Morning visit to the Eiffel Tower with skip-the-line access. Afternoon walking tour of the artistic Montmartre district, including Sacré-Cœur Basilica.'
    },
    {
      day: 4,
      title: 'Palace of Versailles',
      description: 'Full day excursion to the Palace of Versailles, including the palace interior, gardens, and Marie-Antoinette\'s Estate.'
    },
    {
      day: 5,
      title: 'French Cuisine Day',
      description: 'Morning cooking class with a French chef. Afternoon wine and cheese tasting experience.'
    },
    {
      day: 6,
      title: 'Notre-Dame & Latin Quarter',
      description: 'Morning visit to Notre-Dame Cathedral area and Île de la Cité. Afternoon exploring the Latin Quarter and free time for shopping.'
    },
    {
      day: 7,
      title: 'Farewell & Departure',
      description: 'Morning at leisure for last-minute shopping. Farewell lunch at a local bistro before transfer to the airport for departure.'
    }
  ],
  inclusions: [
    'Accommodation in a 4-star hotel (6 nights)',
    'Daily breakfast, 2 lunches, and 3 dinners',
    'Airport transfers and transportation for scheduled activities',
    'Professional English-speaking guides',
    'Skip-the-line access to major attractions',
    'Seine River dinner cruise',
    'Wine and cheese tasting',
    'Cooking class with a French chef',
    '24/7 emergency assistance'
  ],
  exclusions: [
    'International airfare',
    'Travel insurance',
    'Optional activities',
    'Meals not mentioned in the inclusions',
    'Personal expenses and gratuities'
  ],
  mapLocation: {
    lat: 48.856614,
    lng: 2.3522219
  }
};

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    content: 'My trip to Santorini was absolutely magical! GlobeTrotter handled everything perfectly from the hotel to the local tours. I didn\'t have to worry about a thing!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    content: 'The safari adventure in Kenya exceeded all my expectations. Our guide was incredibly knowledgeable and we saw all the Big Five! Will definitely book with GlobeTrotter again.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    content: 'From the moment we landed in Bali to our departure, everything was seamless. Beautiful accommodations, friendly staff, and amazing excursions!',
    rating: 4,
  }
];
