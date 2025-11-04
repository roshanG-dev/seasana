// pages/HomePage.jsx
import React , {useEffect , useState} from 'react';
import { technologyOverview, contactInfo } from '../data/seasanaData';
import MainBgImage from '../asserts/main.jpg'; 

// 1. IMPORT THE 5 CAROUSEL IMAGES
import OneImage from '../asserts/one.jpg'; 
import TwoImage from '../asserts/two.jpg'; 
import ThreeImage from '../asserts/three.jpg'; 
import FourImage from '../asserts/four.jpg'; 
import FiveImage from '../asserts/five.jpg';

// List of all 5 images for the carousel
const carouselImages = [
    OneImage,
    TwoImage,
    ThreeImage,
    FourImage,
    FiveImage,
];

// --- NEW PREMIUM CAROUSEL COMPONENT ---
const ImageCarousel = () => {
    // State to track the starting image index (0 to 5, where 5 is the first clone)
    const totalItems = carouselImages.length; // 5
    const [currentIndex, setCurrentIndex] = useState(0); 

    // Effect for auto-rotation
    useEffect(() => {
        // Start the continuous scroll interval
        const interval = setInterval(() => {
            // Increment the index to start the next slide transition
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, []);

    // Side effect to handle the instant reset from the cloned item (index 5) back to the original start (index 0)
    useEffect(() => {
        if (currentIndex === totalItems) { // Check if we have transitioned to the first clone
            // Wait for the transition duration (700ms) before instantly resetting
            const timeout = setTimeout(() => {
                setCurrentIndex(0); // Instantly reset the index to 0 (no CSS transition will apply here)
            }, 700); 

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, totalItems]);

    // Calculate translation percentage (33.333% is one image width, or 100% / 3 visible items)
    const translateValue = `-${currentIndex * (100 / 3)}%`;
    
    // Toggle the CSS transition class: apply transition for sliding (0 to 4), apply none for instant reset (5 to 0)
    const transitionClass = currentIndex === totalItems ? 'transition-none' : 'transition-transform duration-700 ease-in-out';

    return (
        <section className="py-12 bg-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h3 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-wide">
                    Applications Gallery
                </h3>
                
                {/* Carousel Viewport: Defines the visible area */}
                <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
                    
                    {/* Carousel Track: Holds all images (5 original + 2 clones for smooth loop) */}
                    <div 
                        className={`flex ${transitionClass}`}
                        style={{ transform: `translateX(${translateValue})` }}
                    >
                        {/* Map over all 5 original images */}
                        {carouselImages.map((src, index) => (
                            <div 
                                key={index} 
                                // Each item takes up 1/3 of the viewport width. Use min-w-[33.333%] for flexible yet fixed width.
                                className="min-w-[33.333%] p-3" 
                            >
                                <img
                                    src={src}
                                    alt={`Sorting Example ${index + 1}`}
                                    // Premium styling: h-72 for standard height, object-cover for crop, rounded-xl, prominent shadow, subtle scale on hover
                                    className="w-full h-72 object-cover rounded-xl shadow-lg border-b-4 border-amber-500 transition duration-300 transform hover:scale-[1.03]"
                                />
                            </div>
                        ))}
                        
                        {/* Add 2 clones of the first 2 images to enable the smooth loop back to the start */}
                        {carouselImages.slice(0, 2).map((src, index) => (
                            <div 
                                key={`clone-${index}`} 
                                className="min-w-[33.333%] p-3" 
                            >
                                <img
                                    src={src}
                                    alt={`Sorting Example Clone ${index + 1}`}
                                    className="w-full h-72 object-cover rounded-xl shadow-lg border-b-4 border-amber-500 transition duration-300 transform hover:scale-[1.03]"
                                />
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
// --- END OF NEW CAROUSEL COMPONENT ---


// Placeholder for sorting examples (you would need to expand this component)
const SortingExamples = () => (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                Sorting Examples
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Example 1: Quartz Sorting */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                    <h4 className="text-2xl font-bold text-blue-700 mb-4">QUARTZ COLOR SORTING</h4>
                    <p className="text-gray-600">Shows the separation of Raw material into Accepts and Rejects.</p>
                </div>

                {/* Example 2: Glass Sorting */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                    <h4 className="text-2xl font-bold text-blue-700 mb-4">GLASS COLOR SORTING</h4>
                    <p className="text-gray-600">Demonstrates sorting Raw material into Accepts and Rejects.</p>
                </div>

                {/* Example 3: Waste Metal Scraps */}
                <div className="p-6 bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                    <h4 className="text-2xl font-bold text-blue-700 mb-4">WASTE METAL SCRAPS COLOR SORTING </h4>
                    <p className="text-gray-600">Separates Raw material into Copper, Zine, Brass, and Aluminum.</p>
                </div>
            </div>
            <p className="mt-12 text-center text-gray-700">
                *Numerous other examples are available including FELDSPAR, PET, PELLETS, and PE sorting.
            </p>
        </div>
    </section>
);


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="pt-24 pb-0 bg-white shadow-inner">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-6xl font-black text-gray-900 animate-fadeInUp">
            {technologyOverview.title}
          </h2>
          <p className="mt-4 text-2xl text-blue-600 font-light italic animate-slideIn">
            "{contactInfo.tagline}"
          </p>
          <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
            {technologyOverview.description[0]} {technologyOverview.description[1]}
          </p>
          
          <div className="mt-12 flex justify-center space-x-8"> 
          </div>
        </div>
      </section>

    {/* --- NEW SECTION: IMAGE CAROUSEL (Animated, Premium Design) --- */}
    <ImageCarousel />
    <section 
        // Sets a fixed height (h-72) and makes it full width
        className="relative h-72 bg-gray-900 overflow-hidden" 
    >
        {/* Layer 1: Background Image */}
        <div 
            // Positioned absolutely to cover the entire section
            className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-105"
            // Uses JS to set the image source
            style={{ backgroundImage: `url(${MainBgImage})` }}
        >
        </div>
        
        {/* Layer 2: Dark Overlay (Mutes image, improves contrast for text) */}
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div> 
        
        {/* Layer 3: Text Content (Centered on top) */}
        <div className="relative h-full max-w-7xl mx-auto flex items-center justify-center px-4">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white text-center tracking-tight border-b-4 border-amber-500 pb-2">
                Precision Sorting in Action
            </h3>
        </div>
    </section>


      {/* Sorting Examples */}
      <SortingExamples />

      {/* Footer Contact Snippet */}
      <section className="bg-blue-800 text-white p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready for Intelligent Sorting?</h3>
        <p className="mb-6 text-lg">Contact Seasana Machinery Private Ltd. today.</p>
        <a 
          href="/contact" 
          className="bg-amber-500 text-blue-800 px-8 py-3 rounded-full font-extrabold hover:bg-amber-400 transition duration-300 transform hover:scale-110 shadow-lg"
        >
          View Contact Details
        </a>
      </section>
    </div>
  );
};

export default HomePage;