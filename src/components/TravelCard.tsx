import React from 'react';
import { Link } from 'react-router-dom';

export interface TravelPackage {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  description: string;
  type: string; // Added the type property
}

interface TravelCardProps {
  package: TravelPackage;
}

const TravelCard: React.FC<TravelCardProps> = ({ package: pkg }) => {
  return (
    <div className="card-travel group h-full flex flex-col animate-on-scroll">
      <div className="relative overflow-hidden h-48 md:h-64">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <div className="flex justify-between items-center">
            <span className="text-white text-sm font-medium">{pkg.location}</span>
            <span className="flex items-center bg-accent/90 text-white px-2 py-0.5 rounded-full text-xs">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < pkg.rating ? 'text-yellow-300' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{pkg.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{pkg.duration}</span>
            <span className="font-semibold text-lg">${pkg.price}<span className="text-xs text-muted-foreground font-normal">/person</span></span>
          </div>
          <Link to={`/packages/${pkg.id}`} className="btn-primary text-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
