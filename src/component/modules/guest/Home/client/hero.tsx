"use client";
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import gem1 from '../../../../../assests/edz-norton-fgy3lrj4TRQ-unsplash.jpg';
import gem2 from '../../../../../assests/CGS_BROWSEGRID_HERO.jpeg';
import gem3 from '../../../../../assests/CGS_BROWSEGRID_HERO.jpeg';

interface Gem {
  id: number;
  src: string;
  alt: string;
}

const gems: Gem[] = [
  { id: 1, src: {gem1}, alt: 'Gem 1' },
  { id: 2, src: gem2, alt: 'Gem 2' },
  { id: 3, src: gem3, alt: 'Gem 3' },
];

const Hero = () => {
  const [currentGem, setCurrentGem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGem((prev) => (prev === gems.length ? 1 : prev + 1));
    }, 3000); // 3 second auto scroll

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex justify-center items-center h-screen bg-gradient-to-r from-white via-blue-100 to-white">
      <div className="relative w-full max-w-6xl flex items-center justify-center overflow-hidden">
        {gems.map((gem) => (
          <div
            key={gem.id}
            className={`absolute transition-opacity duration-700 ${
              gem.id === currentGem ? 'opacity-100 scale-110 z-20' : 'opacity-50 scale-90'
            } ${gem.id === currentGem - 1 || (gem.id === gems.length && currentGem === 1) ? 'left-10' : ''} ${
              gem.id === currentGem + 1 || (currentGem === gems.length && gem.id === 1) ? 'right-10' : ''
            }`}
          >
            <Image
              src={gem.src}
              alt={gem.alt}
              width={gem.id === currentGem ? 400 : 250}
              height={gem.id === currentGem ? 400 : 250}
              className={`transition-transform duration-500 ${
                gem.id === currentGem ? 'shadow-lg' : 'shadow-none'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 text-center">
        <h1 className="text-4xl font-bold text-black">Sri Lankan Blue Sapphire</h1>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-800 transition duration-300">
            Explore More
          </button>
          <button className="border bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-800 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
