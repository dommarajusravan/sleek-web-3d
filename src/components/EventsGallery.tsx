import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, Calendar } from "lucide-react";

// Import gallery images
import ugadi1_2025 from "@/assets/gallery/ugadi-1-2025.webp";
import ugadi2_2025 from "@/assets/gallery/ugadi-2-2025.webp";
import sankranthi1_2025 from "@/assets/gallery/sankranthi-1-2025.webp";
import sankranthi2_2025 from "@/assets/gallery/sankranthi-2-2025.webp";
import sankranthi3_2025 from "@/assets/gallery/sankranthi-3-2025.webp";
import ugadi1_2024 from "@/assets/gallery/ugadi-1-2024.webp";
import ugadi2_2024 from "@/assets/gallery/ugadi-2-2024.webp";
import ugadi3_2024 from "@/assets/gallery/ugadi-3-2024.webp";

interface GalleryImage {
  src: string;
  title: string;
  event: string;
  link: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: ugadi1_2025,
    title: "Ugadi 2025",
    event: "Ugadi Celebrations",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: ugadi2_2025,
    title: "Ugadi 2025",
    event: "Ugadi Celebrations",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: sankranthi1_2025,
    title: "Sankranthi 2025",
    event: "Sankranthi Festival",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: sankranthi2_2025,
    title: "Sankranthi 2025",
    event: "Sankranthi Festival",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: sankranthi3_2025,
    title: "Sankranthi 2025",
    event: "Sankranthi Festival",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: ugadi1_2024,
    title: "Ugadi 2024",
    event: "Ugadi Celebrations",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: ugadi2_2024,
    title: "Ugadi 2024",
    event: "Ugadi Celebrations",
    link: "https://www.gallery.snapu.photography",
  },
  {
    src: ugadi3_2024,
    title: "Ugadi 2024",
    event: "Ugadi Celebrations",
    link: "https://www.gallery.snapu.photography",
  },
];

export const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-lg border border-primary/20">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Memories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Events <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Relive the beautiful moments from our community celebrations and cultural events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay - Always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-medium mb-1">{image.event}</p>
                  <p className="text-white/80 text-xs">{image.title}</p>
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-white text-xs hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Gallery <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="p-6 bg-background">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.event}</h3>
                <p className="text-muted-foreground mb-4">{selectedImage.title}</p>
                <a
                  href={selectedImage.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View Full Gallery <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
