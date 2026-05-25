"use client";

import { BasePage } from "@/components/BasePage";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulando envio de formulário
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <BasePage>
      {/* Hero Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container-pad text-center">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-6 text-on-surface">
            Contact <span className="text-brand">Us</span>
          </h1>
          <p className="text-xl text-on-surface/70 max-w-2xl mx-auto leading-relaxed">
            Ready to join The Dog Club? Have a question? We're here to help you and your pup.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-surface">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-background rounded-card border border-semantic-success/30 p-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-semantic-success/10 text-semantic-success rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-on-surface mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-lg text-on-surface/70 mb-8">
                    Thank you for your message! A member of our team will be in contact with you
                    shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="uppercase font-bold"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Your Name" placeholder="Enter your name" required />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <Input label="Subject" placeholder="How can we help?" />
                  <Textarea
                    label="Message"
                    placeholder="Tell us about your pup..."
                    rows={6}
                    required
                  />
                  <Button
                    type="submit"
                    loading={isLoading}
                    className="h-14 uppercase font-bold gap-2"
                  >
                    Submit Message <Send size={18} />
                  </Button>
                </form>
              )}
            </div>

            {/* Info and Map */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-display font-bold text-on-surface">Get in Touch</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-on-brand transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">Our Location</h3>
                      <p className="text-on-surface/70">62b Morrin Road, St Johns, Auckland</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-on-brand transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">Email Us</h3>
                      <p className="text-on-surface/70">admin@thedogclub.co.nz</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-on-brand transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">Call Us</h3>
                      <p className="text-on-surface/70">09-574 5125</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Map Placeholder */}
              <div className="flex-1 bg-background rounded-card border border-border overflow-hidden relative min-h-[300px]">
                <div className="absolute inset-0 flex items-center justify-center bg-brand/5">
                  <div className="text-center px-8">
                    <MapPin size={48} className="text-brand mx-auto mb-4 animate-bounce" />
                    <p className="text-on-surface font-bold">St Johns, Auckland</p>
                    <p className="text-sm text-on-surface/60 mt-1">Visit us at 62b Morrin Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BasePage>
  );
};

export default ContactPage;
