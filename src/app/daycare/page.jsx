"use client";

import { BasePage } from "@/components/BasePage";
import { Button } from "@/components/Button";
import { Calendar, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

const DaycarePage = () => {
  const pricing = [
    { plan: "Casual Half Day", dog1: "$37", dog2: "$70" },
    { plan: "Casual Full Day", dog1: "$50", dog2: "$87" },
    { plan: "5x Full Day Pass", dog1: "$240", dog2: "$390", detail: "Expires in 3 months" },
    { plan: "10x Full Day Pass", dog1: "$400", dog2: "$685", detail: "Expires in 5 weeks" },
    { plan: "10x Full Day Pass", dog1: "$430", dog2: "$715", detail: "Expires in 12 weeks" },
    { plan: "10x Full Day Pass", dog1: "$450", dog2: "$740", detail: "Expires in 6 months" },
  ];

  return (
    <BasePage>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://static.wixstatic.com/media/c844cd_6d8b2d8563c74e01bd19219b52fa06a3~mv2.jpg"
            alt="Doggy Daycare Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-pad relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-4">
            DAYCARE
          </h1>
          <div className="w-24 h-2 bg-brand mx-auto mb-8" />
          <Link href="/application">
            <Button className="h-12 px-8 text-lg uppercase font-bold tracking-wide">
              Join the Club
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-surface">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-on-surface mb-8">
              A Safe and Fun Environment
            </h2>
            <div className="space-y-6 text-xl text-on-surface/70 leading-relaxed">
              <p>
                We are one of Auckland's most established doggie daycare and boarding facilities
                exclusively for dogs! Our team has created a safe and fun environment where dogs
                come to be socialized while being mentally and physically stimulated.
              </p>
              <p>
                To enquire about our availability or to enrol your pup in our daycare, please fill
                our application form below to book an assessment day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="container-pad">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-on-surface mb-4">Daycare Rates</h2>
            <p className="text-on-surface/60">
              Choose the best plan for your furry friend's needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-card border border-border shadow-sm">
            <table className="w-full text-left bg-surface">
              <thead className="bg-brand/5 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-bold text-on-surface">Plan</th>
                  <th className="px-6 py-4 font-bold text-on-surface text-center">1 Dog</th>
                  <th className="px-6 py-4 font-bold text-on-surface text-center">2 Dogs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pricing.map((item, idx) => (
                  <tr key={idx} className="hover:bg-brand/5 transition-colors">
                    <td className="px-6 py-6">
                      <div className="font-bold text-on-surface">{item.plan}</div>
                      {item.detail && <div className="text-sm text-muted mt-1">{item.detail}</div>}
                    </td>
                    <td className="px-6 py-6 text-center text-lg font-semibold text-brand">
                      {item.dog1}
                    </td>
                    <td className="px-6 py-6 text-center text-lg font-semibold text-brand">
                      {item.dog2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Joining Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="container-pad grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-display font-bold text-on-surface mb-8">
              Joining The Dog Club
            </h2>
            <div className="space-y-6 text-on-surface/70 leading-relaxed text-lg">
              <p>
                The daycare environment is quite simply not for all dogs. Dogs all have their own
                personalities, and some personalities and temperaments are simply better suited than
                others to the large group environment of daycare.
              </p>
              <p>
                Please complete our application form and we will be in contact with you to book an
                assessment day. Assessment days are full-day trials allowing us to monitor your
                dog's body language and interaction with other dogs.
              </p>
              <p className="bg-brand/5 p-4 rounded-custom border-l-4 border-brand text-on-surface font-medium">
                The assessment day is charged at our casual full day rate of $50.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/book-online">
                <Button className="h-12 px-8 uppercase font-bold">Book a Tour</Button>
              </Link>
              <Link href="/application">
                <Button variant="outline" className="h-12 px-8 uppercase font-bold">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-card p-10 border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-on-surface mb-8">Why Assessment?</h3>
            <ul className="space-y-6">
              {[
                {
                  icon: <CheckCircle2 />,
                  title: "Safety First",
                  desc: "Ensures all dogs are compatible and safe together.",
                },
                {
                  icon: <Calendar />,
                  title: "Full-day Trial",
                  desc: "A comprehensive look at your dog's social behavior.",
                },
                {
                  icon: <Clock />,
                  title: "Gradual Entry",
                  desc: "We take the time to ease your dog into the environment.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="text-brand shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-on-surface/60">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </BasePage>
  );
};

export default DaycarePage;
