export default function HackathonTimeline() {
  const phases = [
    {
      phase: 1,
      title: "Problem Selection",
      subtitle: "Teams Choose an SDG Problem Statement",
      deliverables: [
        "Problem understanding doc",
        "SDG alignment justification",
        "Proposed solution overview"
      ],
      evaluation: [
        "Clarity of problem framing",
        "Correct SDG mapping",
        "Social relevance"
      ]
    },
    {
      phase: 2,
      title: "Research & Design",
      subtitle: "Validation Phase (Online)",
      deliverables: [
        "Data sources/datasets",
        "System architecture",
        "Ethical & accessibility considerations"
      ],
      evaluation: [
        "Research depth",
        "Realistic assumptions",
        "Innovation quality"
      ]
    },
    {
      phase: 3,
      title: "Prototype Development",
      subtitle: "Prototype Readiness (Online)",
      deliverables: [
        "Working prototype/simulation",
        "Impact metrics definition",
        "Deployment & scalability plan"
      ],
      evaluation: [
        "Technical credibility",
        "SDG impact measurement",
        "Execution readiness"
      ]
    },
    {
      phase: 4,
      title: "Grand Finale",
      subtitle: "Offline Event (12–24 Hours)",
      deliverables: [
        "Final iteration & polish",
        "Mentor check-ins",
        "Live demos",
        "Final pitch to jury"
      ],
      evaluation: [
        "End-to-end solution quality",
        "Demo stability",
        "Deployability",
        "Impact articulation"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen bg-black/10 py-32 overflow-hidden" id="roadmap">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514454529242-9e4677563e7b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2t5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-6">
            Journey to Impact
          </h2>
          <p className="text-xl text-white/50">
            Navigate through 4 phases from idea to implementation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-[200px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-white/20 via-white/40 to-white/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[200px] -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="w-6 h-6 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.7)]" />
                    <div className="absolute inset-0 w-6 h-6 bg-white rounded-full animate-ping opacity-40" />
                  </div>
                </div>

                {/* Connector */}
                <div
                  className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 ${
                    index % 2 === 0
                      ? "top-[200px] bottom-0 bg-gradient-to-b from-white/40 to-transparent"
                      : "top-0 bottom-[200px] bg-gradient-to-b from-transparent to-white/40"
                  }`}
                />

                {/* Card wrapper – z-index FIXED */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? "mt-[280px]" : "mb-[280px] lg:mt-0"
                  } group-hover:z-50`}
                >
                  <div className="flex justify-center mb-4">
                    <span className="px-4 py-1.5 bg-white text-black text-sm font-bold rounded-full">
                      PHASE {phase.phase}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="p-6 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-white/50">
                      {phase.subtitle}
                    </p>

                    {/* Hover content */}
                    <div className="mt-4 overflow-hidden max-h-0 opacity-0 translate-y-2 group-hover:max-h-[500px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <div className="mt-4">
                        <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">
                          Deliverables
                        </h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((d, i) => (
                            <li key={i} className="text-sm text-white/70 flex gap-2">
                              <span className="text-white/30">▸</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-xs uppercase tracking-wider text-white/60 mb-2">
                          Evaluation
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.evaluation.map((e, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/60"
                            >
                              {e}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Start */}
          <div className="absolute top-[185px] left-[12.5%] -translate-x-full flex items-center gap-3">
            <div className="w-4 h-4 bg-emerald-500 rounded-full" />
            <span className="text-xs text-white/60 uppercase">Start</span>
          </div>

          {/* Finale */}
          <div className="absolute top-[185px] right-[12.5%] translate-x-full flex items-center gap-3">
            <span className="text-xs text-white/60 uppercase">Finale</span>
            <div className="w-4 h-4 bg-red-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
