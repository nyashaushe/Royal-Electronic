
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover hover-effect ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-royal-black mb-1">{name}</h3>
        <p className="text-royal-charcoal text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-royal-blue">
            ${price.toFixed(2)}
          </span>
          <button className="hover-effect p-2 rounded-full bg-royal-gray hover:bg-royal-blue hover:text-white">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

