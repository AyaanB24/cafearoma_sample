import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-cafe-espresso text-cafe-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cafe-caramel flex items-center justify-center">
                <Coffee className="w-5 h-5 text-cafe-foam" />
              </div>
              <span className="font-display text-2xl font-semibold">
                Café Aroma
              </span>
            </a>
            <p className="text-cafe-latte text-sm leading-relaxed mb-6">
              Where every sip tells a story. Serving happiness one cup at a time
              since 2019.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cafe-cream/10 hover:bg-cafe-caramel flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cafe-cream/10 hover:bg-cafe-caramel flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cafe-cream/10 hover:bg-cafe-caramel flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Menu", "Gallery", "Reviews", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-cafe-latte hover:text-cafe-caramel transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cafe-caramel shrink-0 mt-0.5" />
                <span className="text-cafe-latte text-sm">
                  123, Cafe Street, Koramangala
                  <br />
                  Bangalore, Karnataka 560034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cafe-caramel shrink-0" />
                <a
                  href="tel:12345"
                  className="text-cafe-latte hover:text-cafe-caramel transition-colors text-sm"
                >
                  12345
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cafe-caramel shrink-0" />
                <a
                  href="mailto:hello@cafearoma.in"
                  className="text-cafe-latte hover:text-cafe-caramel transition-colors text-sm"
                >
                  hello@cafearoma.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-cafe-latte">Monday - Friday</span>
                <span className="text-cafe-cream">7AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-cafe-latte">Saturday</span>
                <span className="text-cafe-cream">8AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-cafe-latte">Sunday</span>
                <span className="text-cafe-cream">8AM - 11PM</span>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-cafe-cream/10">
              <p className="text-xs text-cafe-latte">
                🎉 Happy Hour: 3PM - 5PM Daily
                <br />
                20% off on all beverages!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cafe-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cafe-latte text-sm">
            © 2024 Café Aroma. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-cafe-latte hover:text-cafe-caramel transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cafe-latte hover:text-cafe-caramel transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
