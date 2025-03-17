import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";
import { motion } from "framer-motion";

const ReservationPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Reserve a Table</h1>
            <p className="text-lg text-muted-foreground">
              Book your table online and enjoy an authentic Italian dining experience. For special events 
              or large groups, please contact us directly by phone.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Reservation Form */}
      <Reservation />

      {/* Additional Information */}
      <section className="section container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-muted"
          >
            <h3 className="text-xl font-serif mb-3">Large Groups</h3>
            <p className="text-muted-foreground">
              For parties of 8 or more, we recommend calling us directly to discuss your needs and ensure we can accommodate your group comfortably.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-muted"
          >
            <h3 className="text-xl font-serif mb-3">Private Events</h3>
            <p className="text-muted-foreground">
              We offer private dining options for special occasions. Contact our events team to plan your celebration, corporate event, or family gathering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-muted"
          >
            <h3 className="text-xl font-serif mb-3">Cancellation Policy</h3>
            <p className="text-muted-foreground">
              If you need to cancel or modify your reservation, please do so at least 24 hours in advance. For same-day changes, please call us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="section container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Find Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wise Crax<br/>
            Highveld Shopping Centre, 19 Logan Ave, Highveld, Centurion, 0169<br/>
            Plenty of parking available at the shopping centre.
          </p>
        </motion.div>

        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.6880967818307!2d28.1818417!3d-25.8611951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956618eeaf5091%3A0x4cda42b3eb809b73!2sHighveld%20Shopping%20Centre%2C%2019%20Logan%20Ave%2C%20Highveld%2C%20Centurion%2C%200169!5e0!3m2!1sen!2sza!4v1710863437195!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wise Crax location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReservationPage;
