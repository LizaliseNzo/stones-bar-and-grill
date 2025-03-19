import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  // Array of gallery images with descriptions
  const galleryImages = [
    { 
      src: "/stons bar and grill images/2022-02-06.jpg", 
      description: "Our cozy interior creates the perfect ambiance for a memorable dining experience." 
    },
    { 
      src: "/stons bar and grill images/IMG_20220119_193951.jpg", 
      description: "Evening atmosphere with perfect lighting sets the mood for a great night out." 
    },
    { 
      src: "/stons bar and grill images/20220430_201301.jpg", 
      description: "Live music nights at Stones Bar and Grill - join us for entertainment and great food." 
    },
    { 
      src: "/stons bar and grill images/unnamed (3).jpg", 
      description: "Casual yet elegant setting for your special celebrations and everyday dining." 
    },
    { 
      src: "/stons bar and grill images/2021-12-08.jpg", 
      description: "Friends gathering for drinks and meals - creating memories that last." 
    },
    { 
      src: "/stons bar and grill images/restaurant outside 2.jpg", 
      description: "Our welcoming exterior invites you to step in and experience Stones Bar and Grill." 
    },
    { 
      src: "/stons bar and grill images/IMG_20220408_120643_edit_103540231784721.jpg", 
      description: "Sunny days at our outdoor seating area - perfect for brunch with friends." 
    },
    { 
      src: "/stons bar and grill images/2022-04-30.jpg", 
      description: "Weekend events bring our community together for good times and great food." 
    },
    { 
      src: "/stons bar and grill images/unnamed (2).jpg", 
      description: "The bar area - where our skilled bartenders craft your favorite drinks." 
    },
    { 
      src: "/stons bar and grill images/unnamed (1).jpg", 
      description: "Indoor seating designed for comfort while you enjoy our menu selections." 
    },
    { 
      src: "/stons bar and grill images/unnamed.jpg", 
      description: "Catch the game with friends on our big screens while enjoying our famous appetizers." 
    },
    { 
      src: "/stons bar and grill images/2023-06-23 (3).jpg", 
      description: "Evening gatherings at Stones - where great conversations happen." 
    },
    { 
      src: "/stons bar and grill images/2023-06-23 (2).jpg", 
      description: "Our carefully designed space combines comfort with style." 
    },
    { 
      src: "/stons bar and grill images/2023-06-23 (1).jpg", 
      description: "The perfect spot for after-work drinks and appetizers with colleagues." 
    },
    { 
      src: "/stons bar and grill images/2023-06-23.jpg", 
      description: "Every detail of our interior is designed to enhance your dining experience." 
    },
    { 
      src: "/stons bar and grill images/2022-06-27.jpg", 
      description: "Weekend brunches at Stones - a local favorite tradition." 
    }
  ];

  // State to track image loading errors
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Handle image load error
  const handleImageError = (src: string) => {
    setFailedImages(prev => new Set(prev).add(src));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-28 pb-12 md:pt-36 md:pb-20 bg-black border-b border-orange-900/30"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-orange-500">Our Gallery</h1>
            <p className="text-lg text-orange-200">
              Take a visual journey through Stones Bar and Grill's welcoming atmosphere, vibrant ambiance, and memorable moments.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="section container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {!failedImages.has(image.src) ? (
                <div className="aspect-square">
                  <img 
                    src={image.src} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={() => handleImageError(image.src)}
                  />
                  {/* Brown translucent overlay with description that appears on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 border border-orange-600/40">
                    <p className="text-orange-300 text-center font-medium text-sm md:text-base">
                      {image.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Image not available</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Customer Photos Section */}
      <section className="section bg-black border-t border-orange-900/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="inline-block px-3 py-1 bg-orange-600 text-black font-semibold rounded-sm text-sm tracking-wide mb-4">
              MEMORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Share Your Experience</h2>
            <p className="text-orange-200">
              Tag us on social media with #StonesBarAndGrillMemories and your photo might be featured in our gallery!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default GalleryPage; 