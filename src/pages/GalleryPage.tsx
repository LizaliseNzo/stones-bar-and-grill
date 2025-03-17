import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const GalleryPage = () => {
  // Array of gallery images with descriptions
  const galleryImages = [
    { 
      src: "/images/gallery-new/2017-01-06.jpg", 
      description: "Our signature wood-fired pizzas are made with the freshest ingredients and traditional techniques." 
    },
    { 
      src: "/images/gallery-new/2017-09-09.jpg", 
      description: "Enjoy our outdoor dining area, perfect for casual meals with friends and family." 
    },
    { 
      src: "/images/gallery-new/2017-09-09 (1).jpg", 
      description: "Our cozy outdoor seating provides a relaxed atmosphere for any occasion." 
    },
    { 
      src: "/images/gallery-new/2018-10-11.jpg", 
      description: "Indulge in our authentic Italian pasta dishes made with homemade sauces." 
    },
    { 
      src: "/images/gallery-new/2021-02-10.jpg", 
      description: "Our calzones are stuffed with premium ingredients and baked to perfection." 
    },
    { 
      src: "/images/gallery-new/2021-04-18.jpg", 
      description: "Try our selection of freshly prepared appetizers to start your meal." 
    },
    { 
      src: "/images/gallery-new/2021-04-21.jpg", 
      description: "Our desserts are made in-house daily for the perfect sweet ending." 
    },
    { 
      src: "/images/gallery-new/2021-05-26.jpg", 
      description: "Sample our wine selection, carefully curated to complement our menu." 
    },
    { 
      src: "/images/gallery-new/20211107_132041.jpg", 
      description: "Our specialty pizzas feature unique topping combinations for adventurous palates." 
    },
    { 
      src: "/images/gallery-new/20211107_140530.jpg", 
      description: "Join us for a memorable dining experience with authentic Italian flavors." 
    },
    { 
      src: "/images/gallery-new/2023-05-14.jpg", 
      description: "Our chefs prepare each dish with care, using traditional recipes." 
    },
    { 
      src: "/images/gallery-new/2023-05-14 (1).jpg", 
      description: "Family-style dining with generous portions to share with loved ones." 
    },
    { 
      src: "/images/gallery-new/2024-03-22.jpg", 
      description: "Our restaurant offers a warm, inviting atmosphere for casual dining." 
    },
    { 
      src: "/images/gallery-new/2025-01-02.jpg", 
      description: "Enjoy our handcrafted cocktails made with premium spirits and fresh ingredients." 
    },
    { 
      src: "/images/gallery-new/2025-01-06.jpg", 
      description: "Our pasta is made fresh daily for the ultimate authentic taste." 
    },
    { 
      src: "/images/gallery-new/2025-03-15.jpg", 
      description: "Weekend brunch options available with Italian-inspired breakfast dishes." 
    },
    { 
      src: "/images/gallery-new/2025-03-15 (1).jpg", 
      description: "Private dining areas available for special events and celebrations." 
    },
    { 
      src: "/images/gallery-new/IMG_20211030_124413.jpg", 
      description: "Our friendly staff is dedicated to providing exceptional service." 
    },
    { 
      src: "/images/gallery-new/IMG_20211030_134030.jpg", 
      description: "Each dish is artfully presented for a feast for the eyes and palate." 
    },
    { 
      src: "/images/gallery-new/2025-01-26.png", 
      description: "Explore our menu featuring a variety of authentic Italian dishes." 
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
        className="pt-28 pb-12 md:pt-36 md:pb-20 bg-olive-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Take a visual journey through Wise Crax's atmosphere, delicious dishes, and memorable moments.
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
                  <div className="absolute inset-0 bg-amber-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-center font-medium text-sm md:text-base">
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
      <section className="section bg-olive-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="inline-block px-3 py-1 bg-terra-100 text-terra-800 rounded-sm text-sm tracking-wide mb-4">
              MEMORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Share Your Experience</h2>
            <p className="text-muted-foreground">
              Tag us on social media with #WiseCraxMemories and your photo might be featured in our gallery!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default GalleryPage; 