import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EventsPage = () => {
  // Sample recurring events
  const recurringEvents = [
    {
      id: 1,
      title: "Karaoke Night",
      description: "Join us every Saturday for a night of music and fun! Show off your vocal talents or just enjoy the performances.",
      day: "Every Saturday",
      time: "7:00 PM - 10:00 PM",
      image: "/stons bar and grill images/event/2021-12-08 (4).jpg"
    },
    {
      id: 2,
      title: "Wine Tasting",
      description: "Sample our finest Italian wines with expert commentary from our sommelier. Perfect for wine enthusiasts and beginners alike.",
      day: "First Friday of Every Month",
      time: "6:00 PM - 8:00 PM",
      image: "/stons bar and grill images/event/unnamed (3).jpg"
    },
    {
      id: 3,
      title: "Pizza Making Class",
      description: "Learn how to make authentic Italian pizza from our master chefs. Take home skills to impress your friends and family!",
      day: "Last Sunday of Every Month",
      time: "3:00 PM - 5:00 PM",
      image: "/stons bar and grill images/event/2022-04-15.jpg"
    }
  ];

  // Sample special events for the year
  const specialEvents = [
    {
      id: 1,
      title: "Easter Special Brunch",
      description: "A special Easter menu featuring traditional Italian Easter dishes and treats.",
      date: "March 31, 2024",
      image: "/stons bar and grill images/event/2020-10-18.jpg"
    },
    {
      id: 2,
      title: "Summer Food Festival",
      description: "A weekend celebration of Italian summer cuisine with special dishes, drinks, and live music.",
      date: "July 20-21, 2024",
      image: "/stons bar and grill images/event/unnamed (1).jpg"
    },
    {
      id: 3,
      title: "Halloween Pizza Party",
      description: "Spooky themed pizzas and desserts, costume contest with prizes!",
      date: "October 31, 2024",
      image: "/stons bar and grill images/event/unnamed (4).jpg"
    },
    {
      id: 4,
      title: "Christmas Eve Dinner",
      description: "Traditional Italian Christmas Eve dinner with seafood specialties and festive desserts.",
      date: "December 24, 2024",
      image: "/stons bar and grill images/event/2021-12-08 (4).jpg"
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
        className="pt-28 pb-12 md:pt-36 md:pb-20 bg-black border-b border-orange-900/30"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-orange-500">Special Events</h1>
              <p className="text-lg text-orange-200 mb-8">
                Join us for our exciting lineup of events throughout the year. From weekly karaoke nights to seasonal celebrations, there's always something happening at Stones Bar and Grill!
              </p>
              <div className="relative rounded-lg overflow-hidden max-w-2xl mx-auto border border-orange-900/30 shadow-lg">
                <img 
                  src="/stons bar and grill images/event/unnamed (4).jpg" 
                  alt="Stones Bar and Grill Events" 
                  className="w-full aspect-video object-cover"
                />
              </div>
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
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-orange-500">Regular Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recurringEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card overflow-hidden border border-orange-900/30"
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
                  <div className="flex items-center text-orange-500 mb-3">
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
      <section className="section container-custom bg-black py-16 rounded-lg border border-orange-900/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center text-orange-500">Upcoming Special Events</h2>
          
          <div className="space-y-8">
            {specialEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black rounded-lg shadow-md overflow-hidden border border-orange-900/30"
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
                    <div className="text-orange-500 font-medium mb-2">{event.date}</div>
                    <h3 className="text-2xl font-semibold mb-3 text-orange-400">{event.title}</h3>
                    <p className="text-orange-200">{event.description}</p>
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
        <div className="bg-black rounded-xl p-8 md:p-12 text-center border border-orange-900/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Host Your Own Event</h2>
            <p className="text-orange-200 mb-6 max-w-3xl mx-auto">
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