import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Sankranti Festival 2025",
    date: "January 14, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Southend Community Center",
    description: "Celebrate the harvest festival with traditional rangoli, bhogi mantalu, and cultural performances",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Telugu New Year - Ugadi",
    date: "March 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "STA Community Hall",
    description: "Welcome the new year with Ugadi pachadi, cultural programs, and traditional celebrations",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Summer Cultural Fest",
    date: "July 15, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Southend Park Arena",
    description: "A day filled with dance, music, food stalls, and traditional games for all ages",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    color: "from-blue-500 to-cyan-600",
  },
];

export const Events = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">Upcoming Events</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Join Our Celebrations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the vibrancy of Telugu culture through our exciting events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                {/* Details */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full mt-4 group/btn bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View All Events
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
