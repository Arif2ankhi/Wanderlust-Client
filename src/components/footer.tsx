import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/profile", label: "My Profile" },
]

const supportLinks = [
  { href: "/help", label: "Help Center" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
]

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-neutral-400 transition-colors hover:text-white"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        {children}
      </svg>
    </a>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
      {children}
    </h3>
  )
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div>
          <p className="text-6xl font-bold md:text-7xl">Wanderlast</p>
          <p className="mt-4 text-sm text-neutral-400">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <FooterHeading>Newsletter</FooterHeading>
            <p className="mt-4 text-sm text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <InputGroup className="mt-5 h-11 max-w-md rounded-sm border-white/30 bg-transparent">
              <InputGroupInput
                type="email"
                placeholder="Enter email"
                className="text-sm text-white placeholder:text-white/40"
              />
              <InputGroupAddon align="inline-end">
                <ArrowUpRight className="size-4 text-white/70" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Support</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="mt-5 space-y-3.5 text-sm text-neutral-400">
              <li>
                <a
                  href="tel:+17865011622"
                  className="transition-colors hover:text-white"
                >
                  786 501 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderland.com"
                  className="transition-colors hover:text-white"
                >
                  info@wanderland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-neutral-500 sm:flex-row">
          <p>© 2026 Wanderlust. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <SocialLink href="#" label="X">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-10.16a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32z"
              />
              <circle cx="17.3" cy="6.7" r="1.3" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
