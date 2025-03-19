import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <span className="inline-block px-3 py-1 bg-orange-600 text-black font-semibold rounded-sm text-sm tracking-wide mb-4">
            OUR SPECIALTIES
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Customer Favorites</h2>
          <p className="text-orange-200 max-w-2xl mx-auto">
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
            <span className="inline-block px-3 py-1 bg-orange-600 text-black font-semibold rounded-sm text-sm tracking-wide mb-4">
              OUR STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Passion for Great Food & Drinks</h2>
            <p className="text-orange-200 mb-4">
              Founded with a love for good food and community, Stones Bar and Grill brings classic American and international flavors to your table. Our recipes combine traditional methods with creative twists.
            </p>
            <p className="text-orange-200 mb-6">
              Every dish is prepared with the finest and freshest ingredients. Our chefs combine traditional methods with innovative techniques to create an unforgettable dining experience.
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
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-orange-900/30">
                <img
                  src="/images/stones-gallery/2021-06-27.jpg"
                  alt="Stones Bar and Grill chef"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-black rounded-lg shadow-md w-40 md:w-52 hidden md:block border border-orange-900/30">
                <h3 className="font-serif text-lg font-medium mb-1 text-orange-500">30+</h3>
                <p className="text-sm text-orange-200">Years of culinary excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section container-custom bg-black py-16 rounded-lg border border-orange-900/30">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-orange-600 text-black font-semibold rounded-sm text-sm tracking-wide mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">What Our Customers Say</h2>
            <p className="text-orange-200 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our satisfied customers have to say about their dining experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                text: "The best bar and grill in town! The burgers are juicy and cooked to perfection. The fries are crispy and well-seasoned. It's become our weekly date night spot!",
                author: "Michael Rodriguez",
                role: "Food Critic",
              },
              {
                text: "I hosted my anniversary dinner here and everything was perfect. The staff went above and beyond to make our night special. The desserts are to die for!",
                author: "Emily Johnson",
                role: "Local Resident",
              },
              {
                text: "Their grilled steaks are the real deal. Tender, juicy, and with the perfect amount of char. The sides are delicious too - definitely try the mac and cheese!",
                author: "Sophie Chen",
                role: "Food Enthusiast",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/80 p-6 rounded-lg shadow-md border border-orange-800/30"
              >
                <div className="text-orange-500 mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="mb-4 text-orange-200">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-orange-400">{testimonial.author}</p>
                  <p className="text-sm text-orange-300/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section container-custom">
        <div className="bg-black rounded-xl overflow-hidden border border-orange-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <span className="inline-block px-3 py-1 bg-orange-600 text-black font-semibold rounded-sm text-sm tracking-wide mb-4">
                SPECIAL EVENTS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Join Us For Fun Events</h2>
              <p className="text-orange-200 mb-6">
                From our weekly Karaoke Night every Saturday to seasonal celebrations, there's always something exciting happening at Stones Bar and Grill. Come experience the best food and entertainment!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-orange-600 p-2 rounded mr-4">
                    <span className="text-black font-medium">SAT</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-orange-400">Karaoke Night</h3>
                    <p className="text-sm text-orange-200">Every Saturday, 7:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-600 p-2 rounded mr-4">
                    <span className="text-black font-medium">1st</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-orange-400">Wine Tasting</h3>
                    <p className="text-sm text-orange-200">First Friday Monthly, 6:00 PM - 8:00 PM</p>
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
                src="/images/stones-gallery/2021-12-08-2.jpg"
                alt="Karaoke night at Stones Bar and Grill"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container-custom">
        <div className="bg-black text-orange-200 rounded-xl p-8 md:p-12 border border-orange-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Reserve Your Table Today</h2>
              <p className="text-orange-200 mb-6">
                Experience delicious food in a welcoming atmosphere. Book your table now to avoid disappointment.
              </p>
              <Link to="/reservation" className="btn-primary">
                Make a Reservation
              </Link>
            </div>
            <div className="hidden md:flex justify-end">
              <img
                src="/images/stones-food/2021-12-23.jpg"
                alt="Restaurant interior"
                className="w-full max-w-md rounded-lg border border-orange-900/40"
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
