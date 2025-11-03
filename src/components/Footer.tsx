import { Heart, Facebook, Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Southend Telugu Association</h3>
            <p className="text-white/70 text-sm">Celebrating culture, building community</p>
          </div>

          {/* Follow Us Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61558150487748" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/southendteluguassociation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-2 text-white/70 text-sm">
              <a href="mailto:sta.southend@gmail.com" className="flex items-center justify-center md:justify-end gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>sta.southend@gmail.com</span>
              </a>
              <a href="tel:+447123456789" className="flex items-center justify-center md:justify-end gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+44 7123 456789</span>
              </a>
            </div>
          </div>
        </div>

        {/* Made With Love */}
        <div className="flex justify-center items-center gap-2 text-white/90 mb-6">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
          <span className="text-sm">by STA Team</span>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Southend Telugu Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
