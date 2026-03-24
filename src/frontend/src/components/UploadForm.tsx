import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { AMENITY_OPTIONS } from "../data/seedData";
import type { Room, RoomType } from "../types";

interface UploadFormProps {
  onSubmit: (room: Room) => void;
}

export function UploadForm({ onSubmit }: UploadFormProps) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [roomType, setRoomType] = useState<RoomType>("Single");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [taggedBy, setTaggedBy] = useState("");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const blobUrls = useRef<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 5) {
      toast.error("Maximum 5 photos allowed");
      return;
    }
    const newUrls = files.map((f) => {
      const url = URL.createObjectURL(f);
      blobUrls.current.push(url);
      return url;
    });
    setPhotos((prev) => [...prev, ...newUrls]);
  };

  const removePhoto = (idx: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== idx));
  };

  const toggleAmenity = (a: string) => {
    setAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!price || !location || !area || !taggedBy) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (photos.length === 0) {
      toast.error("Please upload at least one photo");
      return;
    }
    setIsSubmitting(true);
    const newRoom: Room = {
      id: `room-${Date.now()}`,
      photos,
      price: Number.parseInt(price),
      location,
      area,
      roomType,
      amenities,
      description,
      taggedBy,
      createdAt: new Date(),
    };
    setTimeout(() => {
      onSubmit(newRoom);
      setPhotos([]);
      setPrice("");
      setLocation("");
      setArea("");
      setDescription("");
      setTaggedBy("");
      setAmenities([]);
      setRoomType("Single");
      setIsSubmitting(false);
      toast.success("Room listed successfully! 🎉");
      document
        .getElementById("listings")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 600);
  };

  return (
    <section id="upload" className="py-16 px-6 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          List Your Room
        </h2>
        <p className="text-muted-foreground mb-8 text-sm">
          Tag a hostel room to help fellow students find great accommodation.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          data-ocid="upload.panel"
        >
          {/* Photo upload */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Photos (up to 5) *</Label>
            <div className="flex flex-wrap gap-3">
              {photos.map((url, i) => (
                <div
                  key={url}
                  className="relative w-24 h-20 rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={url}
                    alt={`Selected room view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 hover:bg-black/80"
                    data-ocid={`upload.photo.delete_button.${i + 1}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {photos.length < 5 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-24 h-20 rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-accent/30 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  data-ocid="upload.upload_button"
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-xs">Add</span>
                </button>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="price" className="text-sm font-semibold">
                Monthly Rent (₹) *
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g. 5000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                data-ocid="upload.price.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="room-type" className="text-sm font-semibold">
                Room Type *
              </Label>
              <Select
                value={roomType}
                onValueChange={(v) => setRoomType(v as RoomType)}
              >
                <SelectTrigger
                  id="room-type"
                  data-ocid="upload.roomtype.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Single">Single</SelectItem>
                  <SelectItem value="Double">Double</SelectItem>
                  <SelectItem value="Dormitory">Dormitory</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="location" className="text-sm font-semibold">
                Area / Locality *
              </Label>
              <Input
                id="location"
                placeholder="e.g. Koramangala"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                data-ocid="upload.location.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="area" className="text-sm font-semibold">
                Full Address *
              </Label>
              <Input
                id="area"
                placeholder="e.g. Koramangala 5th Block, Bangalore"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                data-ocid="upload.area.input"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="tagger" className="text-sm font-semibold">
                Your Name *
              </Label>
              <Input
                id="tagger"
                placeholder="Your full name"
                value={taggedBy}
                onChange={(e) => setTaggedBy(e.target.value)}
                data-ocid="upload.name.input"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label htmlFor="description" className="text-sm font-semibold">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe the room, nearby facilities, transport links, etc."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              data-ocid="upload.description.textarea"
            />
          </div>

          {/* Amenities */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Amenities</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {AMENITY_OPTIONS.map((a) => {
                const amenityId = `amenity-${a.toLowerCase().replace(/ /g, "-")}`;
                return (
                  <div key={a} className="flex items-center gap-2">
                    <Checkbox
                      id={amenityId}
                      checked={amenities.includes(a)}
                      onCheckedChange={() => toggleAmenity(a)}
                      data-ocid={`upload.${a.toLowerCase().replace(/ /g, "-")}.checkbox`}
                    />
                    <label
                      htmlFor={amenityId}
                      className="text-sm text-foreground cursor-pointer"
                    >
                      {a}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-5"
            data-ocid="upload.submit_button"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Submit Room Listing
              </span>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
