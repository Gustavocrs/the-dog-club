"use client";

import { BasePage } from "@/components/BasePage";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ExternalLink, User, Users } from "lucide-react";
import Link from "next/link";

const ApplicationPage = () => {
  return (
    <BasePage>
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container-pad text-center">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-6 text-on-surface">
            Join the <span className="text-brand">Club</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface/70 max-w-2xl mx-auto leading-relaxed">
            The first step to becoming a Dog Club member is booking an assessment day for your pup.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-surface">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-card border border-border p-8 md:p-12 shadow-sm">
              <h2 className="text-3xl font-display font-bold text-on-surface mb-8">
                What is an Assessment Day?
              </h2>
              <div className="space-y-6 text-lg text-on-surface/70 leading-relaxed">
                <p>
                  Assessment days are full-day trials allowing us to monitor your dog's body
                  language and interaction with other dogs. We pride ourselves on taking the time to
                  ease your dog into the club environment.
                </p>
                <p>
                  It's about making sure we're the right fit for each other. We want every dog at
                  the club to feel happy, safe, and comfortable.
                </p>
                <div className="bg-brand/5 p-6 rounded-custom border border-brand/20 flex flex-col sm:flex-row items-center gap-6 mt-8">
                  <div className="text-4xl font-bold text-brand">$50</div>
                  <div className="text-on-surface/80 text-center sm:text-left">
                    The assessment day is charged at our casual full day rate.
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Options */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-display font-bold text-on-surface mb-12">
                Ready to book?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:border-brand transition-colors">
                  <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                    <User size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">1 Dog Assessment</h3>
                  <p className="text-on-surface/60 mb-8">
                    Book a full-day assessment for a single dog.
                  </p>
                  <Link
                    href="https://thedogclub.youcanbook.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button wfull className="gap-2">
                      Book Now <ExternalLink size={18} />
                    </Button>
                  </Link>
                </Card>

                <Card className="hover:border-brand transition-colors">
                  <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface mb-4">2 Dogs Assessment</h3>
                  <p className="text-on-surface/60 mb-8">
                    Book a full-day assessment for two dogs from the same family.
                  </p>
                  <Link
                    href="https://thedogclub2.youcanbook.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button wfull className="gap-2">
                      Book Now <ExternalLink size={18} />
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-20 bg-background">
        <div className="container-pad text-center">
          <p className="text-on-surface/60 italic max-w-2xl mx-auto">
            "We take the time to ease your dog into the club environment. It's about making sure
            we're the right fit for each other."
          </p>
        </div>
      </section>
    </BasePage>
  );
};

export default ApplicationPage;
