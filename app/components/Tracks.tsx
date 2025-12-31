import { useState, useEffect, useRef } from 'react';

export default function HackathonTracks() {
  const [visibleTracks, setVisibleTracks] = useState([]);
  const [hoveredTrack, setHoveredTrack] = useState(null);
  const trackRefs = useRef([]);

  const tracks = [
    {
      sdg: "SDG 3",
      title: "Good Health & Well-being",
      subtitle: "Low-Bandwidth Cancer Risk Awareness",
      description: "Privacy-first system enabling symptom-based cancer risk awareness and screening guidance for underserved populations",
      image: "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/02/SDG-3-800x800.gif",
      color: "#4C9F38"
    },
    {
      sdg: "SDG 4",
      title: "Quality Education",
      subtitle: "Accessible Quantum Education",
      description: "Learning framework for blind and deaf learners to access advanced quantum concepts through inclusive design",
      image: "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-04.png",
      color: "#C5192D"
    },
    {
      sdg: "SDG 10",
      title: "Reduced Inequalities",
      subtitle: "Disability-Inclusive Access Intelligence",
      description: "Breaking systemic barriers for disabled individuals to access public services, infrastructure, and emergency systems",
      image: "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-10.png",
      color: "#DD1367"
    },
    {
      sdg: "SDG 13",
      title: "Climate Action",
      subtitle: "Invasive Aquatic Plant Control",
      description: "Non-toxic systems to control invasive species growth and monitor ecosystem recovery in freshwater bodies",
      image: "https://www.nrcmec.org/NRCM-SDG/SDG_13_Climate_Action.png",
      color: "#3F7E44"
    },
    {
      sdg: "SDG 14",
      title: "Life Below Water & On Land",
      subtitle: "Geo-Biodiversity Intelligence",
      description: "Satellite-based platform using geospatial data to track species presence and habitat health across ecosystems",
      image: "https://s3-eu-west-1.amazonaws.com/snv-wp/wp-content/uploads/sites/63/2018/10/02134411/E_SDG-goals_icons-individual-cmyk-14-1080x1080.jpg",
      color: "#0A97D9"
    },
    {
      sdg: "SDG 17",
      title: "Partnerships for the Goals",
      subtitle: "Collaborative SDG Action Platform",
      description: "Cross-sector platform enabling resource sharing, partnerships, and impact tracking across SDG initiatives",
      image: "https://s3-eu-west-1.amazonaws.com/snv-wp/wp-content/uploads/sites/63/2018/10/02133730/E_SDG-goals_icons-individual-cmyk-17-1080x1080.jpg",
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
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `url('assets/sky.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-xs text-white/70 font-medium">PROBLEM TRACKS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Challenge Areas
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose your track aligned with UN Sustainable Development Goals
          </p>
        </div>

        {/* Tracks Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tracks.map((track, index) => (
            <div
              key={index}
              ref={el => trackRefs.current[index] = el}
              onMouseEnter={() => setHoveredTrack(index)}
              onMouseLeave={() => setHoveredTrack(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                visibleTracks.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                aspectRatio: '1/1'
              }}
            >
              {/* SDG Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={track.image} 
                  alt={track.sdg}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* SDG Badge */}
                <div className="inline-block self-start px-3 py-1.5 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 mb-3">
                  {track.sdg}
                </div>

                {/* Title - Always Visible */}
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {track.title}
                </h3>

                {/* Hover Content */}
                <div className={`transition-all duration-500 ${
                  hoveredTrack === index 
                    ? 'opacity-100 max-h-48 translate-y-0' 
                    : 'opacity-0 max-h-0 translate-y-4'
                }`}>
                  <h4 className="text-sm font-semibold text-teal-300 mb-2">
                    {track.subtitle}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 2px ${track.color}40, 0 0 30px ${track.color}60`
                }}
              />
            </div>
          ))}
        </div>

        {/* Concise Info Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
                  1
                </div>
                <span>Choose Track</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
                  2
                </div>
                <span>Build Solution</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs">
                  3
                </div>
                <span>Make Impact</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

            {/* Own Ideas Note */}
            <p className="text-sm text-white/70 mb-6 max-w-2xl mx-auto">
              <span className="font-bold text-white">💡 Own Ideas Welcome:</span> Students can submit their own SDG-aligned solutions during Phase 1
            </p>

            {/* CTA Button */}
            <a
              href="/register"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <span>View All Problem Statements</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}