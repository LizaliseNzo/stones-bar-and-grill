import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

const MenuPage = () => {
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center md:text-left md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-orange-500">Our Menu</h1>
              <p className="text-lg text-orange-200">
                Discover our delicious dishes prepared with love and care. 
                From juicy burgers to sizzling steaks, every dish is crafted with the finest ingredients.
              </p>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="rounded-lg overflow-hidden shadow-lg border border-orange-900/30">
                <img 
                  src="/stons bar and grill images/food/2025-02-18 (1).jpg" 
                  alt="Delicious food from our menu" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <Menu />

      {/* Special Dietary Needs */}
      <section className="section container-custom">
        <div className="bg-black rounded-xl p-8 md:p-12 border border-orange-900/30">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Special Dietary Requirements</h2>
              <p className="text-orange-200 mb-6">
                We're happy to accommodate special dietary needs. Please inform your server about any allergies or dietary restrictions, and our chefs will prepare suitable options for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
