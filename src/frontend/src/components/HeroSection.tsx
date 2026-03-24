import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee, MapPin, Search } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  searchLocation: string;
  searchMaxPrice: string;
  onLocationChange: (v: string) => void;
  onMaxPriceChange: (v: string) => void;
  onSearch: () => void;
}

export function HeroSection({
  searchLocation,
  searchMaxPrice,
  onLocationChange,
  onMaxPriceChange,
  onSearch,
}: HeroSectionProps) {
  return (
    <section className="hero-bg py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">
            🏷️ Tag. Browse. Move In.
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight mb-4">
            Find Your Perfect <span className="text-primary">Student Room</span>
          </h1>
          <p className="text-base text-muted-foreground mb-10 max-w-lg mx-auto">
            Real rooms tagged by real students — with actual prices and exact
            locations. No agents, no guesswork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-card rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-3 items-center border border-border"
        >
          <div className="flex-1 flex items-center gap-2 border border-border rounded-lg px-3 py-2 w-full">
            <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
            <Input
              className="border-0 shadow-none p-0 h-auto text-sm focus-visible:ring-0"
              placeholder="Enter location (e.g. Koramangala)"
              value={searchLocation}
              onChange={(e) => onLocationChange(e.target.value)}
              data-ocid="hero.search_input"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 border border-border rounded-lg px-3 py-2 w-full">
            <IndianRupee className="w-4 h-4 text-muted-foreground shrink-0" />
            <Input
              className="border-0 shadow-none p-0 h-auto text-sm focus-visible:ring-0"
              placeholder="Max rent (e.g. 6000)"
              type="number"
              value={searchMaxPrice}
              onChange={(e) => onMaxPriceChange(e.target.value)}
              data-ocid="hero.price.input"
            />
          </div>
          <Button
            onClick={onSearch}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 w-full md:w-auto shrink-0"
            data-ocid="hero.search.primary_button"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Rooms
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <span>
            <strong className="text-foreground">200+</strong> Rooms Listed
          </span>
          <span>
            <strong className="text-foreground">15+</strong> Locations
          </span>
          <span>
            <strong className="text-foreground">500+</strong> Students Helped
          </span>
        </motion.div>
      </div>
    </section>
  );
}
