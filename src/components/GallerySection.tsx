import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cafe.jpg";
import coffeeLatte from "@/assets/coffee-latte.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import cafeDesserts from "@/assets/cafe-desserts.jpg";
import cafeStaff from "@/assets/cafe-staff.jpg";
import hotChocolate from "@/assets/hot-chocolate.jpg";
import cafeCustomers from "@/assets/cafe-customers.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import cafeSandwich from "@/assets/cafe-sandwich.jpg";

const galleryImages = [
  { src: heroImage, alt: "Cafe interior with warm lighting", span: "lg:col-span-2 lg:row-span-2" },
  { src: coffeeLatte, alt: "Latte art coffee", span: "" },
  { src: cafeInterior, alt: "Cozy seating area", span: "" },
  { src: cafeDesserts, alt: "Fresh pastries", span: "" },
  { src: cafeCustomers, alt: "Happy customers", span: "lg:row-span-2" },
  { src: hotChocolate, alt: "Hot chocolate", span: "" },
  { src: coldBrew, alt: "Cold brew coffee", span: "" },
  { src: cafeStaff, alt: "Friendly staff", span: "" },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-cafe-caramel font-medium tracking-wider uppercase text-sm">
            Our Space
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            A Glimpse of <span className="text-cafe-mocha">Café Aroma</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Step inside through our gallery and feel the warmth before you even arrive.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-cafe-cream font-medium transition-opacity duration-300">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cafe-mocha font-semibold hover:text-cafe-caramel transition-colors group"
          >
            Follow us on Instagram
            <span className="group-hover:translate-x-1 transition-transform">@cafearoma</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
