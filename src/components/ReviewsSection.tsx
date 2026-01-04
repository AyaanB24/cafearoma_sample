import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    review:
      "Absolutely love this place! The latte is the best I've had in the city. The cozy ambiance makes it perfect for remote work or catching up with friends. The staff remembers my order now!",
    date: "2 weeks ago",
  },
  {
    name: "Rahul Mehta",
    avatar: "RM",
    rating: 5,
    review:
      "Hidden gem in the neighborhood! My go-to cafe for meetings. Their cold brew is exceptional, and the croissants are always fresh. Fair prices for the quality you get.",
    date: "1 month ago",
  },
  {
    name: "Ananya Patel",
    avatar: "AP",
    rating: 5,
    review:
      "Brought my family here for weekend brunch and we were blown away. Kid-friendly, great food portions, and the hot chocolate my daughter had was amazing. Will definitely return!",
    date: "3 weeks ago",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 lg:py-32 bg-cafe-cream">
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            What Our <span className="text-cafe-mocha">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from our beloved regulars.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div key={review.name} variants={itemVariants}>
              <Card
                variant="elevated"
                className="h-full bg-background relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-cafe-caramel" />
                </div>

                <CardContent className="pt-6 relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-cafe-caramel text-cafe-caramel"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 rounded-full bg-cafe-caramel flex items-center justify-center text-cafe-foam font-semibold">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-background rounded-full px-6 py-3 shadow-warm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-cafe-caramel text-cafe-caramel"
                />
              ))}
            </div>
            <span className="text-foreground font-medium">
              4.8 rating on Google
            </span>
            <span className="text-muted-foreground">(200+ reviews)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
