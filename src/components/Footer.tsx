import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Southend Telugu Association</h3>
            <p className="text-white/70 text-sm">Celebrating culture, building community</p>
          </div>

          <div className="flex items-center gap-2 text-white/90">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
            <span className="text-sm">by STA Team</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Southend Telugu Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
