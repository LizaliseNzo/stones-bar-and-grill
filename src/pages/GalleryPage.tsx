import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const GalleryPage = () => {
  // Array of image details with descriptions
  const [imageDetails, setImageDetails] = useState<Array<{src: string, description: string}>>([]);

  useEffect(() => {
    // Images are stored in public/images/gallery
    const imageFiles = [
      { file: "2017-01-06.jpg", description: "Our signature wood-fired pizzas are made with the freshest ingredients and traditional techniques." },
      { file: "2017-09-09.jpg", description: "Enjoy our outdoor dining area, perfect for casual meals with friends and family." },
      { file: "2017-09-09 (1).jpg", description: "Our cozy outdoor seating provides a relaxed atmosphere for any occasion." },
      { file: "2018-10-11.jpg", description: "Indulge in our authentic Italian pasta dishes made with homemade sauces." },
      { file: "2021-02-10.jpg", description: "Our calzones are stuffed with premium ingredients and baked to perfection." },
      { file: "2021-04-18.jpg", description: "Try our selection of freshly prepared appetizers to start your meal." },
      { file: "2021-04-21.jpg", description: "Our desserts are made in-house daily for the perfect sweet ending." },
      { file: "2021-05-26.jpg", description: "Sample our wine selection, carefully curated to complement our menu." },
      { file: "20211107_132041.jpg", description: "Our specialty pizzas feature unique topping combinations for adventurous palates." },
      { file: "20211107_140530.jpg", description: "Join us for a memorable dining experience with authentic Italian flavors." },
      { file: "2023-05-14.jpg", description: "Our chefs prepare each dish with care, using traditional recipes." },
      { file: "2023-05-14 (1).jpg", description: "Family-style dining with generous portions to share with loved ones." },
      { file: "2024-03-22.jpg", description: "Our restaurant offers a warm, inviting atmosphere for casual dining." },
      { file: "2025-01-02.jpg", description: "Enjoy our handcrafted cocktails made with premium spirits and fresh ingredients." },
      { file: "2025-01-06.jpg", description: "Our pasta is made fresh daily for the ultimate authentic taste." },
      { file: "2025-03-15.jpg", description: "Weekend brunch options available with Italian-inspired breakfast dishes." },
      { file: "2025-03-15 (1).jpg", description: "Private dining areas available for special events and celebrations." },
      { file: "IMG_20211030_124413.jpg", description: "Our friendly staff is dedicated to providing exceptional service." },
      { file: "IMG_20211030_134030.jpg", description: "Each dish is artfully presented for a feast for the eyes and palate." },
    ];
    
    setImageDetails(imageFiles.map(img => ({
      src: `/images/gallery/${img.file}`,
      description: img.description
    })));
  }, []);

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
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imageDetails.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 % 0.5 }}
              className="break-inside-avoid mb-4"
            >
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative group">
                <img 
                  src={image.src} 
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Brown translucent overlay with description that appears on hover */}
                <div className="absolute inset-0 bg-amber-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center font-medium text-sm md:text-base">
                    {image.description}
                  </p>
                </div>
              </div>
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
};

export default GalleryPage; 