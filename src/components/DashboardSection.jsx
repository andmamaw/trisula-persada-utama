import { motion } from 'framer-motion';
import { Layers, BarChart3, MapPin, Activity, Eye, Download, Search, ChevronRight } from 'lucide-react';

function MiniChart({ data, color }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-[2px] h-8">
      {data.map((v, i) => (
        <div
          key={i}
          className="w-[4px] rounded-sm transition-all hover:opacity-100"
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            opacity: 0.5 + (v / max) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

export default function DashboardSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-cyan-glow/40" />
            <span className="text-cyan-glow/70 text-xs font-mono tracking-[0.3em] uppercase">Platform</span>
            <div className="w-12 h-[1px] bg-cyan-glow/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kelola Data. Pantau Proyek.{' '}
            <span className="gradient-text-cyan">Dalam Satu Dashboard.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm">
            Platform WebGIS terintegrasi untuk visualisasi, analisis, dan monitoring data geospasial secara real-time.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-white/5 bg-navy-950/80 backdrop-blur-sm shadow-2xl shadow-black/40"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-navy-950">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-white/30 text-[10px] font-mono">Trisula GIS Dashboard v2.4</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-md">
                <Search className="w-3 h-3 text-white/30" />
                <span className="text-white/20 text-[10px]">Search project...</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-cyan-glow/20 flex items-center justify-center">
                <span className="text-cyan-glow text-[8px] font-bold">TP</span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[400px] lg:min-h-[500px]">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-48 lg:w-56 border-r border-white/5 bg-navy-950/50 p-3 gap-1">
              {[
                { icon: Layers, label: 'Layer Control', active: true },
                { icon: MapPin, label: 'Survey Points' },
                { icon: BarChart3, label: 'Analytics' },
                { icon: Activity, label: 'Monitoring' },
                { icon: Eye, label: 'Visualization' },
                { icon: Download, label: 'Export Data' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                      item.active
                        ? 'bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/20'
                        : 'text-white/30 hover:text-white/50 hover:bg-white/3'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                    {item.active && <ChevronRight className="w-3 h-3 ml-auto" />}
                  </div>
                );
              })}

              {/* Layer toggles */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-white/20 text-[10px] font-mono uppercase tracking-wider mb-3 px-2">Layers</p>
                {['Topography', 'Contour', 'Boundary', 'Roads', 'Heatmap'].map((layer, i) => (
                  <div key={i} className="flex items-center gap-2 px-2 py-1.5 text-[11px]">
                    <div className={`w-3 h-3 rounded-sm border ${i < 3 ? 'bg-cyan-glow/30 border-cyan-glow/50' : 'border-white/15'}`} />
                    <span className="text-white/40">{layer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main map area */}
            <div className="flex-1 relative">
              {/* Map background */}
              <div className="absolute inset-0 topo-bg opacity-60" />
              <div className="absolute inset-0 grid-overlay-dense opacity-50" />
              <div className="absolute inset-0 terrain-gradient opacity-30" />

              {/* Map pins */}
              {[
                { top: '20%', left: '30%', label: 'Site A', color: '#00e5ff' },
                { top: '45%', left: '55%', label: 'Site B', color: '#00ff88' },
                { top: '65%', left: '35%', label: 'Site C', color: '#00e5ff' },
                { top: '30%', left: '70%', label: 'Site D', color: '#f59e0b' },
              ].map((pin, i) => (
                <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
                  <div className="relative">
                    <div
                      className="w-3 h-3 rounded-full animate-pulse-glow"
                      style={{ background: pin.color, boxShadow: `0 0 12px ${pin.color}` }}
                    />
                    <div
                      className="absolute -top-6 left-3 px-2 py-0.5 rounded text-[9px] font-mono whitespace-nowrap"
                      style={{ background: `${pin.color}20`, color: pin.color, border: `1px solid ${pin.color}30` }}
                    >
                      {pin.label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Heatmap overlay */}
              <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-cyan-glow/5 blur-[40px]" />
              <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-neon/5 blur-[30px]" />

              {/* Coordinate bar */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-navy-950/80 border-t border-white/5 flex justify-between">
                <span className="text-cyan-glow/40 text-[10px] font-mono">LAT: -6.2088° | LON: 106.8456°</span>
                <span className="text-white/20 text-[10px] font-mono">Zoom: 14x | CRS: WGS 84</span>
              </div>
            </div>

            {/* Right panel */}
            <div className="hidden lg:flex flex-col w-52 border-l border-white/5 bg-navy-950/50 p-3 gap-3">
              <div className="glass-card rounded-xl p-3">
                <p className="text-white/30 text-[10px] font-mono uppercase mb-2">Active Projects</p>
                <p className="text-white font-heading text-2xl font-bold">24</p>
                <MiniChart data={[4, 7, 5, 8, 6, 9, 7, 10, 8, 12]} color="#00e5ff" />
              </div>

              <div className="glass-card rounded-xl p-3">
                <p className="text-white/30 text-[10px] font-mono uppercase mb-2">Data Points</p>
                <p className="text-neon font-heading text-2xl font-bold">48.2K</p>
                <MiniChart data={[3, 5, 8, 4, 9, 6, 11, 7, 8, 10]} color="#00ff88" />
              </div>

              <div className="glass-card rounded-xl p-3">
                <p className="text-white/30 text-[10px] font-mono uppercase mb-2">Coverage</p>
                <p className="text-cyan-glow font-heading text-2xl font-bold">87%</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full mt-2">
                  <div className="h-full w-[87%] bg-gradient-to-r from-cyan-glow to-neon rounded-full" />
                </div>
              </div>

              <div className="glass-card rounded-xl p-3">
                <p className="text-white/30 text-[10px] font-mono uppercase mb-2">Status</p>
                <div className="space-y-2">
                  {[
                    { label: 'Completed', value: '18', color: '#00ff88' },
                    { label: 'In Progress', value: '4', color: '#00e5ff' },
                    { label: 'Pending', value: '2', color: '#f59e0b' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                        <span className="text-white/40 text-[10px]">{s.label}</span>
                      </div>
                      <span className="text-white/60 text-[10px] font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
