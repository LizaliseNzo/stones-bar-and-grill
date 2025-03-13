
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { motion } from "framer-motion";

const MenuPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Menu</h1>
            <p className="text-lg text-muted-foreground">
              Discover our authentic Italian dishes prepared with love and tradition. 
              From hand-made pasta to wood-fired pizzas, every dish tells a story of Italy.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Section */}
      <Menu />

      {/* Special Dietary Needs */}
      <section className="section container-custom">
        <div className="bg-olive-50 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Special Dietary Requirements</h2>
              <p className="text-muted-foreground mb-6">
                We understand that many guests have specific dietary needs. Our chefs are happy to accommodate vegetarian, 
                vegan, gluten-free, and other dietary requirements. Please inform your server about any allergies or 
                preferences when you visit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Vegetarian", "Vegan Options", "Gluten-Free Options", "Nut-Free"].map((item, index) => (
                  <div key={index} className="px-4 py-2 bg-white rounded-full text-olive-800 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
