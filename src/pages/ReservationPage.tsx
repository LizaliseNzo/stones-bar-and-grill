import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";
import { motion } from "framer-motion";

const ReservationPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

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
            className="bg-black p-6 rounded-lg shadow-sm border border-orange-900/30"
          >
            <h3 className="text-xl font-serif mb-3 text-orange-500">Large Groups</h3>
            <p className="text-orange-200">
              For parties of 8 or more, we recommend calling us directly to discuss your needs and ensure we can accommodate your group comfortably.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-black p-6 rounded-lg shadow-sm border border-orange-900/30"
          >
            <h3 className="text-xl font-serif mb-3 text-orange-500">Private Events</h3>
            <p className="text-orange-200">
              We offer private dining options for special occasions. Contact our events team to plan your celebration, corporate event, or family gathering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black p-6 rounded-lg shadow-sm border border-orange-900/30"
          >
            <h3 className="text-xl font-serif mb-3 text-orange-500">Cancellation Policy</h3>
            <p className="text-orange-200">
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
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-orange-500">Find Us</h2>
          <p className="text-orange-200 max-w-2xl mx-auto">
            Stones Bar and Grill<br/>
            Corner Soutpansberg and, Steve Biko Rd, Prinshof, Pretoria, 0028<br/>
            Phone: 012 001 7950
          </p>
        </motion.div>

        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-md border border-orange-900/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0404133817466!2d28.208149000000003!3d-25.728525999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e93617831bc5a77%3A0x13d575a96a79e62f!2sCorner%20Soutpansberg%20and%2C%20Steve%20Biko%20Rd%2C%20Prinshof%2C%20Pretoria%2C%200028!5e0!3m2!1sen!2sza!4v1711012551116!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Stones Bar and Grill location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReservationPage;
