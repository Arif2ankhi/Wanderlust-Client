"use client";
import { ArrowRight,  Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { IDestination } from "@/lib/types/destination";
import { authClient } from "@/lib/auth-client";
import { Input } from "../ui/input";
// import { formatDay } from "react-day-picker";
import { IDestination } from "@/lib/types/destination";

const BookingCard = ({ destination }: { destination: IDestination }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  // console.log(user);
  // console.log(destination);

const handleBooking = async(e: React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault()

    const departureDate = e.target.departureDate.value
    console.log(departureDate);

    const data = {
        username: user?.name,
        email: user?.email,
        image: user?.image,
        ...destination,
        departureDate: departureDate,
        bookingDate: new Date()
        
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const bookingRes = await res.json()
    console.log(bookingRes);

}

  return (
    <Card className="sticky top-6 rounded-2xl border-neutral-200 shadow-sm">
      <CardContent className="space-y-6 p-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            Starting from
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-bold text-sky-600">
              ${destination.price}
            </span>
            <span className="text-sm text-neutral-500">per person</span>
          </div>
        </div>

        {/* Date Selector Preview Box */}
        {/* <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800">
                  <span>{destination.departureDate || "05/15/2026"}</span>
                  <CalendarDays className="size-4 text-neutral-500" />
                </div>
              </div> */}

        <form onSubmit={handleBooking}>
          <Input
            type="date"
            name="departureDate"
            aria-label="Departure Date"
            // defaultValue={formatDay(destination.departureDate)}
              defaultValue= {destination.departureDate}
            className="mt-4"
          />

          {/* Book Now Button */}
          <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-6 rounded-xl flex items-center justify-center gap-2">
            Book Now
            <ArrowRight className="size-4" />
          </Button>
        </form>

        <hr className="border-neutral-100" />

        {/* Perks List */}
        <div className="space-y-3 text-sm text-neutral-600">
          <div className="flex items-center gap-2.5">
            <Check className="size-4 text-emerald-600 shrink-0" />
            <span>Free cancellation up to 7 days</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="size-4 text-emerald-600 shrink-0" />
            <span>Travel insurance included</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="size-4 text-emerald-600 shrink-0" />
            <span>24/7 customer support</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
