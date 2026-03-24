import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";
import type { Room } from "../types";

interface RoomCardProps {
  room: Room;
  index: number;
  onViewDetails: (room: Room) => void;
}

const ROOM_TYPE_COLORS: Record<string, string> = {
  Single: "bg-blue-100 text-blue-700",
  Double: "bg-purple-100 text-purple-700",
  Dormitory: "bg-orange-100 text-orange-700",
};

export function RoomCard({ room, index, onViewDetails }: RoomCardProps) {
  return (
    <article
      className="bg-card rounded-xl border border-border shadow-card overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-200"
      data-ocid={`listing.item.${index}`}
    >
      {/* Photo */}
      <div className="relative overflow-hidden h-48">
        <img
          src={room.photos[0]}
          alt={`Room in ${room.area}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Price badge */}
        <div className="absolute bottom-2 right-2 price-badge text-white text-sm font-semibold px-3 py-1 rounded-full">
          ₹{room.price.toLocaleString()}/mo
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-base text-foreground leading-snug">
              {room.area}
            </h3>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="text-xs text-muted-foreground">
              {room.location}
            </span>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-1.5">
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${ROOM_TYPE_COLORS[room.roomType]}`}
          >
            {room.roomType}
          </span>
          {room.amenities.slice(0, 3).map((a) => (
            <Badge key={a} variant="secondary" className="text-xs px-2 py-0">
              {a}
            </Badge>
          ))}
          {room.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs px-2 py-0">
              +{room.amenities.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              Tagged by:{" "}
              <span className="font-medium text-foreground">
                {room.taggedBy}
              </span>
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-7 px-3 border-primary text-primary hover:bg-accent"
            onClick={() => onViewDetails(room)}
            data-ocid={`listing.view.button.${index}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
