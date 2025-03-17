
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-3 py-1 bg-olive-100 text-olive-800 rounded-sm text-sm tracking-wide mb-4">
              OUR STORY
            </span>
            <h1 className="text-3xl md:text-5xl font-serif mb-6">About Bella Italia</h1>
            <p className="text-muted-foreground">
              Where passion, tradition, and authentic Italian flavors come together to create a memorable dining experience.
            </p>
          </motion.div>
        </section>

        {/* Founder's Story */}
        <section className="container-custom mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl md:text-3xl font-serif mb-6">The Founder's Journey</h2>
              <p className="text-foreground mb-4">
                Bella Italia was born from the culinary passion of Marco Rossi, who emigrated from a small village near Naples, Italy, to America in 1980 with nothing but his grandmother's recipes and a dream.
              </p>
              <p className="text-foreground mb-4">
                Growing up in his family's modest kitchen in southern Italy, Marco learned the art of crafting authentic Neapolitan pizza from his grandfather, a third-generation pizzaiolo. Every Sunday, he would watch in awe as his grandmother prepared handmade pasta and simmered rich tomato sauces for hours, filling their home with aromas that would later become the signature of Bella Italia.
              </p>
              <p className="text-foreground mb-4">
                "Food is not just sustenance; it's a story, a memory, a connection to our heritage," Marco often says. This philosophy guided him when he opened the first Bella Italia restaurant in 1985, starting with just six tables and a small wood-fired oven that he built himself.
              </p>
              <p className="text-foreground">
                Today, Bella Italia has grown into a beloved establishment, but Marco's commitment to authenticity remains unchanged. He still visits local markets personally to select the freshest ingredients, imports specialty products directly from Italy, and trains every chef in the traditional techniques passed down through generations of his family.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512485694455-bde62f11ad69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Italian restaurant founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-olive-50 py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Bella Italia, our philosophy is built on these core principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authenticity",
                  description: "We never compromise on traditional recipes and techniques. Our dishes reflect the true essence of Italian regional cooking.",
                },
                {
                  title: "Family",
                  description: "Just as Italian culture centers around family, we treat our staff and customers as part of the Bella Italia family.",
                },
                {
                  title: "Quality",
                  description: "We source only the finest ingredients, from imported Italian flour for our pizzas to locally grown organic produce.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-serif mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a beloved culinary destination.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "1980", event: "Marco Rossi arrives in America with his family recipes" },
              { year: "1985", event: "The first Bella Italia restaurant opens with just six tables" },
              { year: "1992", event: "Expanded to include a full bar and private dining room" },
              { year: "2005", event: "Marco's son Antonio joins the business, bringing modern influences" },
              { year: "2010", event: "Celebrated 25 years of serving authentic Italian cuisine" },
              { year: "2018", event: "Opened a culinary school to share traditional Italian cooking techniques" },
              { year: "Present", event: "Continuing the tradition of authentic Italian hospitality" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 last:mb-0"
              >
                <div className="w-24 flex-shrink-0 font-serif text-lg font-medium text-terra-800">
                  {item.year}
                </div>
                <div className="flex-grow relative pl-8 border-l-2 border-olive-200">
                  <div className="absolute w-4 h-4 bg-terra-800 rounded-full -left-[9px] top-1"></div>
                  <p className="pb-2">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container-custom">
          <div className="bg-terra-800 text-white rounded-xl p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Come Experience Our Story</h2>
              <p className="text-terra-100 mb-6">
                Join us for a meal and become part of our continuing story. We look forward to sharing our passion for authentic Italian cuisine with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/reservation" className="btn-primary bg-white text-terra-800 hover:bg-terra-50">
                  Make a Reservation
                </a>
                <a href="/menu" className="btn-primary bg-transparent border border-white hover:bg-terra-700">
                  View Our Menu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
