import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Check, Edit, MapPin, Star, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"

import EditDestinationDialog from "@/components/EditDestinationDialog"
import DeleteDestinationDialog from "@/components/DeleteDestinationDialog"
import BookingCard from "@/components/booking/BookingCard"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { getTokenServer } from "@/lib/getTokenFromServer"

// const DESTINATIONS_API_URL =
  // process.env.DESTINATIONS_API_URL ?? "http://localhost:8000"

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

async function getDestination(id: string): Promise<ApiDestination | null> {
  try {
    // const res = await fetch(`${DESTINATIONS_API_URL}/destination/${id}`, {
    // const jwtToken = await auth.api.getToken({
    //   headers: await headers()

    // })
    
    // const token = jwtToken?.token;

    const token = await getTokenServer()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_UR}/destination/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    // {cache: "no-store",}
    )
    if (!res.ok) return null
    return await res.json()
  } catch (error) {
    console.error("Failed to fetch destination details:", error)
    return null
  }
}

export default async function DestinationsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const destination = await getDestination(id)

  if (!destination) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold text-neutral-900">Destination not found</h2>
        <p className="mt-2 text-sm text-neutral-500">The destination you are looking for does not exist or has been removed.</p>
        <Button  className="mt-6">
        {/* <Button asChild className="mt-6"> */}
          <Link href="/destinations">Back to Destinations</Link>
        </Button>
      </div>
    )
  }

  // Fallback defaults for missing fields in the backend model
  const rating = 4.9
  const reviewsCount = 234
  const highlights = [
    "Luxury beachfront accommodation",
    "Traditional Balinese spa treatment",
    "Sunrise trek to Mount Batur",
    "Visit Uluwatu Temple at sunset",
    "Private beach dinner experience",
  ]

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Top Navigation & Action Buttons */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">

          {/* Edit and delete function */}
          
          <EditDestinationDialog destination ={destination}/>
          <DeleteDestinationDialog id= {id}/>
         
        </div>
      </div>

      {/* Hero Banner Image */}
      <div className="relative mb-10 h-[380px] w-full overflow-hidden rounded-2xl shadow-sm">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Column: Details, Overview & Highlights */}
        <div className="space-y-8 lg:col-span-2">
          <div>
            <div className="flex items-center gap-1.5 text-sm text-neutral-500">
              <MapPin className="size-4" />
              <span>{destination.country}</span>
            </div>

            <h1 className="mt-1 text-4xl font-normal tracking-tight text-neutral-900 md:text-5xl">
              {destination.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
                <Star className="size-4 fill-neutral-900 text-neutral-900" />
                <span>{rating}</span>
                <span className="font-normal text-neutral-500">({reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-600">
                <CalendarDays className="size-4 text-neutral-500" />
                <span>{destination.duration}</span>
              </div>
            </div>
          </div>

          <hr className="border-neutral-200" />

          {/* Overview Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-neutral-900">Overview</h2>
            <p className="leading-relaxed text-neutral-600">
              {destination.description ||
                "Discover the magic of this destination with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets."}
            </p>
          </div>

          {/* Highlights Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-neutral-900">Highlights</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-neutral-700">
                  <div className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="size-3" />
                  </div>
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Booking Widget Card */}
        
        {/* Booking card imported  */}
        
        <BookingCard destination={destination}/>
      </div>
    </main>
  )
}