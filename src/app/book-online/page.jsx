"use client";

import { BasePage } from "@/components/BasePage";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Calendar, Clock, MapPin } from "lucide-react";

const BookOnlinePage = () => {
  return (
    <BasePage>
      <section className="py-24 bg-background">
        <div className="container-pad text-center">
          <h1 className="text-5xl font-display font-bold text-on-surface mb-6">Book a Tour</h1>
          <p className="text-xl text-on-surface/70 max-w-2xl mx-auto mb-12">
            We'd love to show you around our facility. Come visit us and see where your pup will
            play and stay!
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="text-left p-8 md:p-12">
              <h2 className="text-2xl font-bold text-on-surface mb-8">Tour Information</h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="text-brand">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Location</p>
                    <p className="text-on-surface/70">62b Morrin Road, St Johns, Auckland</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-brand">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">Best Times for Tours</p>
                    <p className="text-on-surface/70">
                      Between 10:00am and 2:00pm (by appointment)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand/5 rounded-custom border border-brand/20 mb-10">
                <p className="text-on-surface/80 leading-relaxed">
                  Tours are by appointment only to ensure we can give you our full attention and
                  maintain the safety of the dogs currently in our care.
                </p>
              </div>

              <a href="mailto:admin@thedogclub.co.nz?subject=Tour Request" className="block">
                <Button wfull className="gap-2 h-14 text-lg">
                  <Calendar size={20} /> Request a Tour Date
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </BasePage>
  );
};

export default BookOnlinePage;
