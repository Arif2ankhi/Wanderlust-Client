import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    photo: "/images/person2.png",
    photoWidth: 218,
    photoHeight: 264,
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations! The Mountain Views Were Breathtaking, And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    photo: "/images/person1.png",
    photoWidth: 218,
    photoHeight: 264,
  },
  {
    quote:
      '"The Machu Picchu Trek Blew Us Away! Our Guide Shared Fascinating Stories At Every Stop And The Views Were Simply Unforgettable."',
    name: "David Müller",
    location: "Munich, Germany",
    photo: "/images/destinations/image3.png",
    photoWidth: 320,
    photoHeight: 180,
  },
  {
    quote:
      '"The Maldives Overwater Villa Exceeded Every Expectation! Waking Up To Turquoise Water And Stunning Sunsets Was Pure Magic."',
    name: "Priya Sharma",
    location: "Mumbai, India",
    photo: "/images/destinations/image5.png",
    photoWidth: 320,
    photoHeight: 180,
  },
  {
    quote:
      '"A Desert Sunset Getaway Was Exactly What I Needed. Peaceful Trails, Star-Filled Nights And The Most Beautiful Skies I Have Ever Seen."',
    name: "Carlos Rivera",
    location: "Mexico City, Mexico",
    photo: "/images/destinations/image1.png",
    photoWidth: 320,
    photoHeight: 180,
  },
  {
    quote:
      '"From The Flight To The Beach, Everything Was Seamlessly Organized. Cancun Was Gorgeous And We Did Not Have To Worry About A Thing."',
    name: "Emma Larsen",
    location: "Copenhagen, Denmark",
    photo: "/images/destinations/image6.png",
    photoWidth: 320,
    photoHeight: 180,
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Carousel opts={{ align: "start" }}>
        <div className="flex items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-medium text-neutral-900 md:text-5xl">
              What Travelers Say
            </h2>
            <p className="mt-4 text-sm text-neutral-500 md:text-base">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <CarouselPrevious className="static my-0 size-11 border-neutral-200 text-neutral-400 hover:border-sky-500 hover:text-sky-500" />
            <CarouselNext className="static my-0 size-11 border-neutral-200 text-neutral-400 hover:border-sky-500 hover:text-sky-500" />
          </div>
        </div>

        <CarouselContent className="mt-10 ml-0 gap-6">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="pl-0 sm:basis-1/2">
              <figure className="flex h-full gap-6 rounded-xl border border-neutral-200 bg-white p-7">
                <div className="flex flex-1 flex-col justify-between gap-6">
                  <blockquote className="text-base leading-relaxed text-neutral-900 md:text-lg">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="text-sky-500">— {testimonial.name}</span>
                    <span className="mt-1 block text-neutral-400">
                      {testimonial.location}
                    </span>
                  </figcaption>
                </div>
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={testimonial.photoWidth}
                  height={testimonial.photoHeight}
                  className="h-full w-32 shrink-0 rounded-lg object-cover sm:w-44"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
