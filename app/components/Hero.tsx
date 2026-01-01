import Sponsors from "./partner";

export default function HackathonHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden" id="about">
      {/* Earth's Crust Background - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] pointer-events-none">
        {/* Gradient overlay for smooth transition */}
        
        {/* Earth texture/crust image */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url('assets/earth.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        />
        
        {/* Atmospheric glow effect */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-transparent to-transparent z-20" />
        
        {/* Subtle horizontal lines for depth */}
        <div className="absolute inset-0 z-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.02) 50px, rgba(255,255,255,0.02) 51px)',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <span className="text-xs text-white/70 font-medium">COIMBATORE</span>
            </div>

            <h1 className="text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
              ZEPH
            </h1>

            <div className="w-20 h-0.5 bg-white/30" />

            <p className="text-xl text-white font-extrabold max-w-md">
              24-Hour Sustainable Development Hackathon
            </p>

            <div className="pt-4">
              <img 
                src="https://www.texus.io/_next/image?url=%2Fassets%2Fdeptpics%2Fsrm_white_logowebp.webp&w=256&q=75" 
                alt="SRM Logo"
                className="w-40 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>

                    <Sponsors/>

          </div>

          {/* Right: Text and Highlights */}
          <div className="space-y-12 lg:pt-8">
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-white/70 leading-relaxed">
                Code for the planet. Build solutions that address the UN's 17 Sustainable Development Goals. 
                Join 100+ innovators in creating technology that makes a real-world impact.
              </p>
              <p className="text-base text-white/50 leading-relaxed">
                From climate action to zero hunger, quality education to clean energy—your code can change lives.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 border-l border-white/20 pl-4 backdrop-blur-sm bg-white/5 p-3 rounded-r">
                <div className="text-3xl font-bold text-white">24hrs</div>
                <div className="text-sm text-white/50">Non-stop Innovation</div>
              </div>

              <div className="space-y-2 border-l border-white/20 pl-4 backdrop-blur-sm bg-white/5 p-3 rounded-r">
                <div className="text-3xl font-bold text-white">17 SDGs</div>
                <div className="text-sm text-white/50">Global Impact Areas</div>
              </div>

              <div className="space-y-2 border-l border-white/20 pl-4 backdrop-blur-sm bg-white/5 p-3 rounded-r">
                <div className="text-3xl font-bold text-white">Real Impact</div>
                <div className="text-sm text-white/50">Solutions that Matter</div>
              </div>

              <div className="space-y-2 border-l border-white/20 pl-4 backdrop-blur-sm bg-white/5 p-3 rounded-r">
                <div className="text-3xl font-bold text-white">Top Mentors</div>
                <div className="text-sm text-white/50">Industry Experts</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/register"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span>Register Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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