"use client";

import { BasePage } from "@/components/BasePage";
import { Button } from "@/components/Button";
import { AlertCircle, Info, Moon, Sun } from "lucide-react";
import Link from "next/link";

const BoardingPage = () => {
  const boardingRates = [
    { plan: "1 Dog", price: "$60" },
    { plan: "2 Dogs (sharing room)", price: "$95" },
    { plan: "3 Dogs (sharing room)", price: "$120" },
  ];

  const rules = [
    "Price is for a 24-hour period.",
    "Dogs must be checked into reception before 9:30am and picked up before 9:30am the following morning.",
    "Check-outs after 9:30am will be charged at regular daycare rates.",
    "A 10% surcharge applies to total booking for public holidays.",
    "Owners must provide enough of their dog's own food for the stay.",
    "First stays longer than 1 week require a mandatory 2-night trial.",
    "Dogs must be active members of The Dog Club for boarding. If not a member, start with an application.",
  ];

  return (
    <BasePage>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://static.wixstatic.com/media/c844cd_d45a20cf021a43c8b00a17b908b6754a~mv2.jpg"
            alt="Dog Boarding Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-pad relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-4">
            BOARDING
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand">Play and Stay</p>
          <div className="w-24 h-2 bg-brand mx-auto mt-6 mb-8" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-surface">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-on-surface/80 leading-relaxed font-display italic">
              "Play and Stay in our exclusive boarding rooms, only for members of The Dog Club."
            </p>
            <div className="mt-12 text-lg text-on-surface/70 space-y-4">
              <p>
                During the day your dog will spend their time in our daycare playing with their
                friends. At night, a member of our team stays overnight to ensure all dogs are cared
                for and well settled in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Rules Section */}
      <section className="py-24 bg-background">
        <div className="container-pad grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Rates */}
          <div>
            <h2 className="text-3xl font-display font-bold text-on-surface mb-8 flex items-center gap-3">
              <Moon className="text-brand" /> Boarding Rates
            </h2>
            <div className="space-y-4">
              {boardingRates.map((rate, idx) => (
                <div
                  key={idx}
                  className="bg-surface p-6 rounded-card border border-border flex justify-between items-center shadow-sm"
                >
                  <span className="text-xl font-bold text-on-surface">{rate.plan}</span>
                  <span className="text-2xl font-bold text-brand">
                    {rate.price} <span className="text-sm font-normal text-muted">/ night</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4">
              <Link href="/book-online" className="flex-1">
                <Button wfull className="h-12 uppercase font-bold">
                  Book a Tour
                </Button>
              </Link>
              <Link href="/application" className="flex-1">
                <Button variant="secondary" wfull className="h-12 uppercase font-bold text-brand">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-surface p-8 rounded-card border border-border shadow-sm">
            <h2 className="text-3xl font-display font-bold text-on-surface mb-8 flex items-center gap-3">
              <AlertCircle className="text-semantic-warning" /> Rules & Conditions
            </h2>
            <ul className="space-y-4">
              {rules.map((rule, idx) => (
                <li key={idx} className="flex gap-4 text-on-surface/70 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-brand/5 rounded-custom border border-brand/20 flex gap-4">
              <Info className="text-brand shrink-0" />
              <p className="text-sm text-on-surface/80">
                <strong>Important:</strong> All boarding guests must have completed an assessment
                day and be active daycare members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine Preview */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-on-surface mb-4">
              The Best of Both Worlds
            </h2>
            <p className="text-on-surface/60">
              A perfect balance of social play and peaceful rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-background rounded-card border border-border">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Day: Active Play</h3>
              <p className="text-on-surface/60">
                Spent in our daycare with friends, balls, bubbles, and pools.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-background rounded-card border border-border">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-6">
                <Moon size={32} />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Night: Safe Rest</h3>
              <p className="text-on-surface/60">
                Settled in exclusive boarding rooms with on-site overnight supervision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
};

export default BoardingPage;
