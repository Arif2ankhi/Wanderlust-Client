import Image from "next/image"
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export interface DestinationCardProps {
  image: string
  rating: number
  location: string
  title: string
  price: number
  duration: string
  href?: string
}

export function DestinationCard({
  image,
  rating,
  location,
  title,
  price,
  duration,
  href = "#",
}: DestinationCardProps) {
  return (
    <Card className="p-0 transition-shadow hover:shadow-md">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={320}
          height={180}
          className="aspect-[11/4] w-full object-cover"
        />
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-sm font-bold text-neutral-900 shadow-sm">
          {rating}
          <Star className="size-3.5 fill-current text-neutral-900" />
        </div>
      </div>

      <CardContent className="space-y-2.5 px-4 pb-4">
        <div className="flex items-center gap-1.5 text-sm text-neutral-500">
          <MapPin className="size-4" />
          {location}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="shrink-0">
            <span className="text-lg font-bold text-neutral-900">${price}</span>
            <span className="text-sm text-neutral-500">/person</span>
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-neutral-500">
          <CalendarDays className="size-4" />
          {duration}
        </div>

        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-500 transition-colors hover:text-sky-600"
        >
          Book Now
          <ArrowUpRight className="size-3.5" />
        </a>
      </CardContent>
    </Card>
  )
}
