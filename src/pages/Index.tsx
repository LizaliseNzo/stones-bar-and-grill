import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { menuItems } from "@/assets/data";
import MenuItem from "@/components/MenuItem";
import Navbar from "@/components/Navbar";

const Index = () => {
  // Get popular menu items
  const popularItems = menuItems.filter(item => item.popular).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Featured Section */}
      <section className="section container-custom pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-olive-100 text-olive-800 rounded-sm text-sm tracking-wide mb-4">
            OUR SPECIALTIES
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Customer Favorites</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the dishes that our customers can't get enough of. Made with love and the finest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {popularItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <span className="inline-block px-3 py-1 bg-terra-100 text-terra-800 rounded-sm text-sm tracking-wide mb-4">
              OUR STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Passion for Authentic Italian Cuisine</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 1985, Bella Italia brings the authentic flavors of Italy to your table. Our recipes have been passed down through generations, preserving the true essence of Italian cooking.
            </p>
            <p className="text-muted-foreground mb-6">
              Every dish is prepared with the finest and freshest ingredients, just as it would be in the heart of Italy. Our chefs combine traditional methods with innovative techniques to create an unforgettable dining experience.
            </p>
            <Link to="/reservation" className="btn-primary">
              Book a Table
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588280991458-d759882787cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Italian restaurant chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-md w-40 md:w-52 hidden md:block">
                <h3 className="font-serif text-lg font-medium mb-1">30+</h3>
                <p className="text-sm text-muted-foreground">Years of Italian culinary excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section container-custom bg-olive-50 py-16 rounded-lg">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-olive-800 text-white rounded-sm text-sm tracking-wide mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our satisfied customers have to say about their dining experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "The best Italian food I've had outside of Italy. The pasta is perfectly al dente and the sauces are incredibly flavorful. It's become our weekly date night spot!",
                author: "Michael Rodriguez",
                role: "Food Critic",
              },
              {
                text: "I hosted my anniversary dinner here and everything was perfect. The staff went above and beyond to make our night special. The tiramisu is to die for!",
                author: "Emily Johnson",
                role: "Local Resident",
              },
              {
                text: "Their wood-fired pizzas are the real deal. Thin, crispy crust with the perfect amount of char. The margherita pizza is sublime in its simplicity.",
                author: "Sophie Chen",
                role: "Pizza Enthusiast",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-terra-800 mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="mb-4 text-foreground">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section container-custom">
        <div className="bg-terra-50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <span className="inline-block px-3 py-1 bg-terra-100 text-terra-800 rounded-sm text-sm tracking-wide mb-4">
                SPECIAL EVENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Join Us For Fun Events</h2>
              <p className="text-muted-foreground mb-6">
                From our weekly Karaoke Night every Saturday to seasonal celebrations, there's always something exciting happening at Wise Crax. Come experience the best of Italian food and entertainment!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-terra-100 p-2 rounded mr-4">
                    <span className="text-terra-800 font-medium">SAT</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Karaoke Night</h3>
                    <p className="text-sm text-muted-foreground">Every Saturday, 7:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-terra-100 p-2 rounded mr-4">
                    <span className="text-terra-800 font-medium">1st</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Wine Tasting</h3>
                    <p className="text-sm text-muted-foreground">First Friday Monthly, 6:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              <Link to="/events" className="btn-primary self-start">
                View All Events
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative min-h-[300px] md:min-h-full"
            >
              <img
                src="/images/events/karaoke.jpg"
                alt="Karaoke night at Wise Crax"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container-custom">
        <div className="bg-terra-800 text-white rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Reserve Your Table Today</h2>
              <p className="text-terra-100 mb-6">
                Experience the true flavors of Italy in an elegant and welcoming atmosphere. Book your table now to avoid disappointment.
              </p>
              <Link to="/reservation" className="btn-primary bg-white text-terra-800 hover:bg-terra-50">
                Make a Reservation
              </Link>
            </div>
            <div className="hidden md:flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Restaurant interior"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
