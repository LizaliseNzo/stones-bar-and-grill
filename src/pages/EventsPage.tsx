import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const EventsPage = () => {
  // Sample recurring events
  const recurringEvents = [
    {
      id: 1,
      title: "Karaoke Night",
      description: "Join us every Saturday for a night of music and fun! Show off your vocal talents or just enjoy the performances.",
      day: "Every Saturday",
      time: "7:00 PM - 10:00 PM",
      image: "/images/events/karaoke.jpg"
    },
    {
      id: 2,
      title: "Wine Tasting",
      description: "Sample our finest Italian wines with expert commentary from our sommelier. Perfect for wine enthusiasts and beginners alike.",
      day: "First Friday of Every Month",
      time: "6:00 PM - 8:00 PM",
      image: "/images/events/wine-tasting.jpg"
    },
    {
      id: 3,
      title: "Pizza Making Class",
      description: "Learn how to make authentic Italian pizza from our master chefs. Take home skills to impress your friends and family!",
      day: "Last Sunday of Every Month",
      time: "3:00 PM - 5:00 PM",
      image: "/images/events/pizza-class.jpg"
    }
  ];

  // Sample special events for the year
  const specialEvents = [
    {
      id: 1,
      title: "Easter Special Brunch",
      description: "A special Easter menu featuring traditional Italian Easter dishes and treats.",
      date: "March 31, 2024",
      image: "/images/events/karaoke.jpg"
    },
    {
      id: 2,
      title: "Summer Food Festival",
      description: "A weekend celebration of Italian summer cuisine with special dishes, drinks, and live music.",
      date: "July 20-21, 2024",
      image: "/images/events/wine-tasting.jpg"
    },
    {
      id: 3,
      title: "Halloween Pizza Party",
      description: "Spooky themed pizzas and desserts, costume contest with prizes!",
      date: "October 31, 2024",
      image: "/images/events/pizza-class.jpg"
    },
    {
      id: 4,
      title: "Christmas Eve Dinner",
      description: "Traditional Italian Christmas Eve dinner with seafood specialties and festive desserts.",
      date: "December 24, 2024",
      image: "/images/events/karaoke.jpg"
    }
  ];

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
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Special Events</h1>
              <p className="text-lg text-muted-foreground">
                Join us for our exciting lineup of events throughout the year. From weekly karaoke nights to seasonal celebrations, there's always something happening at Wise Crax!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recurring Events Section */}
      <section className="section container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Regular Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recurringEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card overflow-hidden"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="flex items-center text-terra-800 mb-3">
                    <span className="font-medium">{event.day}</span>
                    <span className="mx-2">•</span>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Special Events Section */}
      <section className="section container-custom bg-olive-50 py-16 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Upcoming Special Events</h2>
          
          <div className="space-y-8">
            {specialEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                      style={{ minHeight: "250px" }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="text-terra-800 font-medium mb-2">{event.date}</div>
                    <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                    <button className="btn-primary mt-4">Learn More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="section container-custom">
        <div className="bg-terra-50 rounded-xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Host Your Own Event</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Looking for a venue for your special occasion? Whether it's a birthday celebration, anniversary dinner, or corporate event, we can create a customized experience for you and your guests.
            </p>
            <a href="/reservation" className="btn-primary">Contact Us</a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage; 