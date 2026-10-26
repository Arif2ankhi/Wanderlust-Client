"use client";
import Link from "next/link";
import { User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/destinations", label: "Destinations" },
  { href: "/add-destination", label: "Add Destination" },
  { href: "/my-bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" }
];

export function Navbar() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignout = () => {
    authClient.signOut();
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-6">
        <ul className="flex h-full items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href} className="h-full">
              <Link
                href={link.href}
                className={`flex h-full items-center border-b-2 text-sm font-medium transition-colors ${
                  link.active
                    ? "border-sky-500 text-sky-500"
                    : "border-transparent text-neutral-700 hover:text-sky-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold italic text-sky-500"
        >
          Wanderlast
        </Link>

        <div className="flex items-center gap-7 text-sm font-medium text-neutral-700">
          <Link
            href="/profile"
            className="flex items-center gap-1.5 transition-colors hover:text-sky-500"
          >
            <User className="size-4" />
            Profile
          </Link>
          {/* Avatar added from shadcn */}
          {/* <Avatar>
            <AvatarImage
              referrerPolicy="no-referrer"
              src={user?.image as string}
            />
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar> */}

          {/* Popover from shadchen */}
          {user ? (
            <Popover>
              <PopoverTrigger
                render={
                  <Avatar>
                    <AvatarImage
                      referrerPolicy="no-referrer"
                      src={user?.image as string}
                    />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                }
              >
                Open Popover
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>{user?.name}</PopoverTitle>
                  <PopoverDescription>
                    <p>{user?.email}</p>
                    <Button onClick={handleSignout} variant={"destructive"}>
                      Signout
                    </Button>
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Link
                href="/login"
                className="transition-colors hover:text-sky-500"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="transition-colors hover:text-sky-500"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
