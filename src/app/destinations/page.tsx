import { Suspense } from "react"

import {
  DestinationCard,
  type DestinationCardProps,
} from "@/components/destination-card"
import { Skeleton } from "@/components/ui/skeleton"

const DESTINATIONS_API_URL =
  process.env.DESTINATIONS_API_URL ?? "http://localhost:8000/destinations"

interface ApiDestination {
  _id: string
  name: string
  country: string
  category: string
  price: string
  duration: string
  departureDate: string
  imageUrl: string
  description: string
}

type PackageRow = DestinationCardProps & { id: string }

async function fetchDestinations(): Promise<PackageRow[]> {
  try {
    const res = await fetch(DESTINATIONS_API_URL, { cache: "no-store" })
    if (!res.ok) {
      throw new Error(`Destinations API responded with ${res.status}`)
    }
    const data: ApiDestination[] = await res.json()
    return data.map((item) => ({
      id: item._id,
      image: item.imageUrl,
      // The API has no rating field yet; default so the badge matches the design.
      rating: 4.5,
      location: item.country?.trim() ?? "",
      title: item.name,
      price: Number(item.price) || 0,
      duration: item.duration,
      href: "#",
    }))
  } catch (error) {
    console.error("Failed to load destinations:", error)
    return []
  }
}

async function DestinationGrid() {
  const packages = await fetchDestinations()

  if (packages.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-neutral-300 p-10 text-center text-sm text-neutral-500">
        No destinations available right now. Please try again later.
      </div>
    )
  }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.map(({ id, ...travelPackage }) => (
        <DestinationCard key={id} {...travelPackage} />
      ))}
    </div>
  )
}

function GridSkeleton() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border border-neutral-200 bg-white"
        >
          <Skeleton className="aspect-[11/4] w-full rounded-none" />
          <div className="space-y-3 p-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function DestinationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-medium text-neutral-900 md:text-5xl">
        Destinations
      </h1>
      <p className="mt-4 text-sm text-neutral-500 md:text-base">
        Handpicked travel packages for every kind of traveler.
      </p>

      <Suspense fallback={<GridSkeleton />}>
        <DestinationGrid />
      </Suspense>
    </main>
  )
}
