import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { RoomCard } from "./components/RoomCard";
import { RoomDetailModal } from "./components/RoomDetailModal";
import { UploadForm } from "./components/UploadForm";
import { SEED_ROOMS } from "./data/seedData";
import type { Filters, Room } from "./types";

const DEFAULT_FILTERS: Filters = {
  location: "",
  maxPrice: 15000,
  roomTypes: [],
};

export default function App() {
  const [rooms, setRooms] = useState<Room[]>(SEED_ROOMS);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchMaxPrice, setSearchMaxPrice] = useState("");
  const uploadRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = () => {
    setFilters((prev) => ({
      ...prev,
      location: searchLocation,
      maxPrice: searchMaxPrice ? Number.parseInt(searchMaxPrice) : 15000,
    }));
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (
        filters.location &&
        !room.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        !room.area.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }
      if (room.price > filters.maxPrice) return false;
      if (
        filters.roomTypes.length > 0 &&
        !filters.roomTypes.includes(room.roomType)
      ) {
        return false;
      }
      return true;
    });
  }, [rooms, filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" richColors />
      <Navbar onUploadClick={scrollToUpload} onAboutClick={scrollToAbout} />

      <main className="flex-1">
        <HeroSection
          searchLocation={searchLocation}
          searchMaxPrice={searchMaxPrice}
          onLocationChange={setSearchLocation}
          onMaxPriceChange={setSearchMaxPrice}
          onSearch={handleSearch}
        />

        <section id="listings" className="py-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="text-2xl font-bold font-display text-foreground">
                Latest Room Listings
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredRooms.length} room
                {filteredRooms.length !== 1 ? "s" : ""} found
              </span>
            </div>

            {filteredRooms.length === 0 ? (
              <div
                className="text-center py-20 text-muted-foreground"
                data-ocid="listing.empty_state"
              >
                <p className="text-4xl mb-4">🏠</p>
                <p className="font-semibold text-lg text-foreground">
                  No rooms found
                </p>
                <p className="text-sm mt-1">
                  Try adjusting your search or{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setFilters(DEFAULT_FILTERS);
                      setSearchLocation("");
                      setSearchMaxPrice("");
                    }}
                    className="text-primary hover:underline"
                  >
                    reset filters
                  </button>
                </p>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {filteredRooms.map((room, i) => (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        delay: Math.min(i * 0.06, 0.3),
                        duration: 0.25,
                      }}
                      layout
                    >
                      <RoomCard
                        room={room}
                        index={i + 1}
                        onViewDetails={setSelectedRoom}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>

        <HowItWorks />

        <div ref={uploadRef}>
          <UploadForm
            onSubmit={(room) => setRooms((prev) => [room, ...prev])}
          />
        </div>

        <div ref={aboutRef}>
          <AboutSection />
        </div>
      </main>

      <Footer />

      <RoomDetailModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />
    </div>
  );
}
