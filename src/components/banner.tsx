import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const searchFields = [
  { name: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { name: "dates", label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { name: "budget", label: "Budget", placeholder: "$0-$3000" },
  { name: "people", label: "People", placeholder: "5-10" },
]

export function Banner() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a coastal bay"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="mx-auto flex min-h-[80vh] max-w-screen-2xl flex-col items-center justify-center px-6 pt-20 pb-44 text-center">
        <h1 className="text-5xl font-medium leading-tight text-white md:text-6xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-sky-500 px-9 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-sky-600"
          >
            Explore Now
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center border border-white/50 bg-white/15 px-9 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            View Destination
          </Link>
        </div>
      </div>

      {/* Search bar pinned to the bottom of the banner */}
      <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-stretch">
          {searchFields.map((field, index) => (
            <div
              key={field.name}
              className={`min-w-48 flex-1 px-7 py-4 ${
                index > 0 ? "border-l border-white/20" : ""
              }`}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-bold text-white"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type="text"
                placeholder={field.placeholder}
                className="mt-1 w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            className="bg-sky-500 px-14 text-base font-semibold text-white transition-colors hover:bg-sky-600"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
