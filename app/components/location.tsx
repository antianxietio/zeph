import React, { useState, useEffect } from "react";
import { MapPin, Calendar, Users, Navigation } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80",
];

export default function LocationDetails() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((p) => (p + 1) % images.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-transparent py-32 overflow-hidden" id="venue">
      {/* Background */}
<div className="absolute inset-0 pointer-events-none">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('assets/sea.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
</div>


      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs text-white/60 font-semibold tracking-widest uppercase">Venue</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Location & Event Details
          </h2>
          
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Where innovation meets infrastructure at SRM Institute
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Image Carousel - Takes 3 columns */}
          <div className="lg:col-span-3 relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group border border-white/10">
            {/* Image Stack */}
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt="Venue"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Image indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentImage
                      ? "w-8 bg-white"
                      : "w-1 bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Venue Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-sm font-semibold text-white">
              Premium Venue
            </div>
          </div>

          {/* Info Cards - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Venue Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      SRM Institute
                    </h3>
                    <p className="text-sm text-white/50">
                      Chennai, Ramapuram Campus
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/60">
                    <Calendar className="w-5 h-5 text-white/40" />
                    <span className="text-sm">February 14-15, 2025</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/60">
                    <Users className="w-5 h-5 text-white/40" />
                    <span className="text-sm">500+ Innovators Expected</span>
                  </div>
                </div>

                {/* Map Button */}
                <button className="mt-6 w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <div className="w-1 h-1 bg-white rounded-full" />
                What's Included
              </h4>
              
              <div className="space-y-3 text-sm text-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  <span>High-speed WiFi & power outlets</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  <span>Meals & refreshments provided</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  <span>24/7 mentorship & support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                  <span>Networking opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats
        
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Capacity", value: "500+" },
            { label: "Duration", value: "24hrs" },
            { label: "Mentors", value: "20+" },
            { label: "Prizes", value: "₹5L+" },
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-white/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                <div className="text-3xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
       
      </div>
    </section>
  );
}