import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32">
      <Image
        src="/images/CTA.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-medium text-white md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-sm text-white/85 md:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-9 inline-flex items-center gap-3 rounded-sm bg-white px-9 py-4 text-xs font-semibold uppercase tracking-widest text-neutral-900 shadow-md transition-colors hover:bg-neutral-100"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
