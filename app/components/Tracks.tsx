import { useState, useEffect, useRef } from 'react';

export default function HackathonTracks() {
  const [visibleTracks, setVisibleTracks] = useState([]);
  const trackRefs = useRef([]);

  const tracks = [
    {
      sdg: "SDG 3",
      title: "Good Health & Well-being",
      subtitle: "Low-Bandwidth Cancer Risk Awareness",
      description: "Privacy-first system enabling symptom-based cancer risk awareness and screening guidance for underserved populations",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2015/12/english_SDG_17goals_poster_all_languages_with_UN_emblem_1.png",
      color: "#4C9F38"
    },
    {
      sdg: "SDG 4",
      title: "Quality Education",
      subtitle: "Accessible Quantum Education",
      description: "Learning framework for blind and deaf learners to access advanced quantum concepts through inclusive design",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/4.jpg",
      color: "#C5192D"
    },
    {
      sdg: "SDG 10",
      title: "Reduced Inequalities",
      subtitle: "Disability-Inclusive Access Intelligence",
      description: "Breaking systemic barriers for disabled individuals to access public services, infrastructure, and emergency systems",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/10.jpg",
      color: "#DD1367"
    },
    {
      sdg: "SDG 13",
      title: "Climate Action",
      subtitle: "Invasive Aquatic Plant Control",
      description: "Non-toxic systems to control invasive species growth and monitor ecosystem recovery in freshwater bodies",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/13.jpg",
      color: "#3F7E44"
    },
    {
      sdg: "SDG 14 + 15",
      title: "Life Below Water & On Land",
      subtitle: "Geo-Biodiversity Intelligence",
      description: "Satellite-based platform using geospatial data to track species presence and habitat health across ecosystems",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/14.jpg",
      color: "#0A97D9"
    },
    {
      sdg: "SDG 17",
      title: "Partnerships for the Goals",
      subtitle: "Collaborative SDG Action Platform",
      description: "Cross-sector platform enabling resource sharing, partnerships, and impact tracking across SDG initiatives",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2016/08/17.jpg",
      color: "#19486A"
    }
  ];

  useEffect(() => {
    const observers = trackRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleTracks(prev => [...new Set([...prev, index])]);
            }, index * 100);
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden" id="tracks">
      {/* Continuing Earth texture background */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black z-10" />


      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url('assets/sky.jpg')`, //https://images.pexels.com/photos/4870656/pexels-photo-4870656.jpeg
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Tracks Grid (2 columns) */}
          <div className="space-y-6">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-4">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-xs text-white/70 font-medium">PROBLEM TRACKS</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-3">
                Challenge Areas
              </h2>
              
              <p className="text-base text-white/60">
                Choose your track aligned with UN Sustainable Development Goals
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  ref={el => trackRefs.current[index] = el}
                  className={`group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${
                    visibleTracks.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-20'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative space-y-3">
                    {/* SDG Icon Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={track.image} 
                        alt={track.sdg}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* SDG Label */}
                    <div className="inline-block px-2 py-1 text-[10px] font-bold rounded bg-white/10 text-white/80 border border-white/10">
                      {track.sdg}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {track.title}
                    </h3>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Information */}
          <div className="lg:pt-32 space-y-8">
            <div className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">How It Works</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Choose Your Track</h4>
                    <p className="text-sm text-white/60">Select one of the 6 SDG-aligned problem statements</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Build Your Solution</h4>
                    <p className="text-sm text-white/60">Develop prototypes, simulations, or working systems over 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Make Real Impact</h4>
                    <p className="text-sm text-white/60">Present solutions that address critical sustainability challenges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm">
              <p className="text-sm text-white/70 mb-4">
                <span className="font-semibold text-white">Own Ideas Welcome:</span> Students can also submit their own SDG-aligned solutions during Phase 1
              </p>
              
              <a
                href="/register"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm"
              >
                <span>View All Problem Statements</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}