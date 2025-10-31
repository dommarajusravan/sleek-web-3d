import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/#events" },
  { name: "Contact", path: "/#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (location.pathname !== route) {
        navigate(route);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleJoinNow = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/STA-logo.webp" 
              alt="STA Logo" 
              className="w-14 h-14 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="hidden md:block">
              <div className="font-bold text-base leading-tight text-foreground">SOUTHEND TELUGU ASSOCIATION</div>
              <div className="text-sm text-muted-foreground font-medium" style={{ fontFamily: 'Noto Sans Telugu, sans-serif' }}>సౌతెండ్ తెలుగు అసోసియేషన్</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.path.includes("#") ? (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-4 py-2 transition-all ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </Button>
              ) : (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`relative px-4 py-2 transition-all ${
                      isActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                    )}
                  </Button>
                </Link>
              )
            ))}
            <Button onClick={handleJoinNow} className="ml-4 bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            {navItems.map((item) => (
              item.path.includes("#") ? (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full justify-start ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              )
            ))}
            <Button onClick={handleJoinNow} className="w-full bg-gradient-to-r from-primary to-primary-glow">
              Join Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
