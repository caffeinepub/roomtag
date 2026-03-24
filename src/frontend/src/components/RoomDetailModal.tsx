import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  IndianRupee,
  MapPin,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Room } from "../types";

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
}

const ROOM_TYPE_COLORS: Record<string, string> = {
  Single: "bg-blue-100 text-blue-700",
  Double: "bg-purple-100 text-purple-700",
  Dormitory: "bg-orange-100 text-orange-700",
};

export function RoomDetailModal({ room, onClose }: RoomDetailModalProps) {
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!room) return null;

  const prevPhoto = () =>
    setPhotoIndex((i) => (i - 1 + room.photos.length) % room.photos.length);
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % room.photos.length);

  return (
    <Dialog open={!!room} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-2xl p-0 overflow-hidden"
        data-ocid="room.modal"
      >
        {/* Photo carousel */}
        <div className="relative h-72 bg-muted">
          <img
            src={room.photos[photoIndex]}
            alt={`Room in ${room.area} - view ${photoIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {room.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                data-ocid="room.photo.prev.button"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                data-ocid="room.photo.next.button"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {room.photos.map((_, i) => (
                  <button
                    key={`dot-${_}`}
                    type="button"
                    onClick={() => setPhotoIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === photoIndex ? "bg-white" : "bg-white/50"
                    }`}
                    data-ocid={`room.photo.dot.${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          {/* Price badge */}
          <div className="absolute bottom-3 right-3 price-badge text-white text-base font-bold px-4 py-1.5 rounded-full">
            ₹{room.price.toLocaleString()}/mo
          </div>
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
            data-ocid="room.modal.close_button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail strip */}
        {room.photos.length > 1 && (
          <div className="flex gap-2 px-6 py-3 bg-muted/40 border-b border-border overflow-x-auto">
            {room.photos.map((photo, i) => (
              <button
                key={`thumb-${photo}`}
                type="button"
                onClick={() => setPhotoIndex(i)}
                className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                  i === photoIndex ? "border-primary" : "border-transparent"
                }`}
                data-ocid={`room.thumbnail.${i + 1}`}
              >
                <img
                  src={photo}
                  alt={`View ${i + 1} of ${room.area}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Details */}
        <div className="p-6 space-y-4">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-foreground">
              {room.area}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{room.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IndianRupee className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">
                {room.price.toLocaleString()}/month
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{room.taggedBy}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${ROOM_TYPE_COLORS[room.roomType]}`}
            >
              {room.roomType} Room
            </span>
            {room.amenities.map((a) => (
              <Badge key={a} variant="secondary" className="text-xs">
                {a}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {room.description}
          </p>

          <Button
            type="button"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            data-ocid="room.contact.primary_button"
          >
            Contact for Booking
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
