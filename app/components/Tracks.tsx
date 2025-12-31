import { useState, useEffect, useRef } from "react";

export default function HackathonTracks() {
  const [visibleTracks, setVisibleTracks] = useState([]);
  const trackRefs = useRef([]);

  const tracks = [
    {
      sdg: "SDG 3",
      title: "Good Health & Well-being",
      subtitle: "Low-Bandwidth Cancer Risk Awareness",
      description:
        "Privacy-first system enabling symptom-based cancer risk awareness and screening guidance for underserved populations",
      image:
        "https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/02/SDG-3-800x800.gif",
    },
    {
      sdg: "SDG 4",
      title: "Quality Education",
      subtitle: "Accessible Quantum Education",
      description:
        "Learning framework for blind and deaf learners to access advanced quantum concepts through inclusive design",
      image:
        "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-04.png",
    },
    {
      sdg: "SDG 10",
      title: "Reduced Inequalities",
      subtitle: "Disability-Inclusive Access Intelligence",
      description:
        "Breaking systemic barriers for disabled individuals to access public services, infrastructure, and emergency systems",
      image:
        "https://www.unoosa.org/images/ourwork/SDGs/E_SDG_goals_icons-individual-rgb-10.png",
    },
    {
      sdg: "SDG 13",
      title: "Climate Action",
      subtitle: "Invasive Aquatic Plant Control",
      description:
        "Non-toxic systems to control invasive species growth and monitor ecosystem recovery in freshwater bodies",
      image:
        "https://www.nrcmec.org/NRCM-SDG/SDG_13_Climate_Action.png",
    },
    {
      sdg: "SDG 14",
      title: "Life Below Water",
      subtitle: "Geo-Biodiversity Intelligence",
      description:
        "Satellite-based platform using geospatial data to track species presence and habitat health across ecosystems",
      image:
        "https://s3-eu-west-1.amazonaws.com/snv-wp/wp-content/uploads/sites/63/2018/10/02134411/E_SDG-goals_icons-individual-cmyk-14-1080x1080.jpg",
    },
    {
      sdg: "SDG 17",
      title: "Partnerships for the Goals",
      subtitle: "Collaborative SDG Action Platform",
      description:
        "Cross-sector platform enabling resource sharing, partnerships, and impact tracking across SDG initiatives",
      image:
        "https://s3-eu-west-1.amazonaws.com/snv-wp/wp-content/uploads/sites/63/2018/10/02133730/E_SDG-goals_icons-individual-cmyk-17-1080x1080.jpg",
    },
  ];

  useEffect(() => {
    const observers = trackRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleTracks((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          }
        },
        { threshold: 0.1 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

return (
    <section className="relative min-h-screen bg-black py-24 overflow-hidden" id="tracks">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "url('assets/sky.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center min-h-[80vh]">
          {/* Right: Grid of SDG images */}
          <div className="w-full lg:w-1/2 grid grid-cols-3 lg:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={index}
                ref={(el) => (trackRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleTracks.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative group">
                  <img
                    src={track.image}
                    alt={track.sdg}
                    className="w-full aspect-square rounded-2xl border-2 border-white/10 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:border-white/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Left: Text content */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                Tracks
              </h2>
              <p className="text-sm text-white/70 leading-relaxed max-w-xl">
                Choose from six SDG-aligned challenges. Build solutions that address real global problems and create lasting impact.
              </p>
            </div>

            <div className="space-y-8">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    visibleTracks.includes(index)
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="group cursor-pointer">
                    <div className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-white/5 border border-white/20 text-white/80 mb-2 group-hover:bg-white/10 transition-colors">
                      {track.sdg}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                      {track.title}
                    </h3>
                    <h4 className="text-lg text-white/60 font-medium mb-2">
                      {track.subtitle}
                    </h4>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {track.description}
                    </p>
                  </div>
                  {index < tracks.length - 1 && (
                    <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
