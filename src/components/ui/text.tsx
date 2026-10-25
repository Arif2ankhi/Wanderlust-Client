import React from 'react';

const text = () => {
    return (
        <div>
          <Card className="sticky top-6 rounded-2xl border-neutral-200 shadow-sm">
            <CardContent className="space-y-6 p-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  Starting from
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold text-sky-600">${destination.price}</span>
                  <span className="text-sm text-neutral-500">per person</span>
                </div>
              </div>

              {/* Date Selector Preview Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800">
                  <span>{destination.departureDate || "05/15/2026"}</span>
                  <CalendarDays className="size-4 text-neutral-500" />
                </div>
              </div>

              {/* Book Now Button */}
              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-6 rounded-xl flex items-center justify-center gap-2">
                Book Now
                <ArrowRight className="size-4" />
              </Button>

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
        </div>
    );
};

export default text;