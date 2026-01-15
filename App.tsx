
import React, { useState, useEffect } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  AreaChart, Area
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Brain, Sparkles, Heart, ShieldCheck, 
  ArrowRight, Globe, Download, Copy, CheckCircle2,
  TrendingUp, FileText, Share2, Info, Menu
} from 'lucide-react';
import { reportData } from './data';
import { Trait } from './types';

const App: React.FC = () => {
  const [activeTrait, setActiveTrait] = useState<Trait | null>(reportData.traits[0]);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyId = () => {
    navigator.clipboard.writeText(reportData.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const radarData = reportData.traits.map(t => ({
    subject: t.nameZh,
    A: t.totalScore,
    fullMark: 120,
    color: t.color
  }));

  const comparisonData = reportData.traits.map(t => ({
    name: t.nameZh,
    score: t.totalScore,
    fill: t.color
  }));

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Think Tank Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b border-slate-100">
        <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center text-white rotate-3">
                <FileText size={20} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold tracking-tighter uppercase">Persona</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400">RESEARCH HUB</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <a href="#analytical-overview" className="hover:text-slate-900 transition-colors">Analytical Overview</a>
              <a href="#dimension-deep-dive" className="hover:text-slate-900 transition-colors">Dimension Deep Dive</a>
              <a href="#methodology" className="hover:text-slate-900 transition-colors">Methodology</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end text-[9px] font-bold text-slate-400 tracking-tighter">
              <span className="opacity-50 uppercase">Accession No.</span>
              <span className="text-slate-900 tracking-normal">{reportData.id.slice(0, 8)}</span>
            </div>
            <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>
            <button className="text-slate-500 hover:text-slate-900 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="lg:hidden text-slate-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">
        
        {/* Editorial Hero Section */}
        <section className="mb-24 border-b border-slate-100 pb-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="px-2 py-0.5 bg-slate-900 text-[10px] font-bold text-white uppercase tracking-widest">Psychometric Insight</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Volume 26 • Issue 01</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[0.95] mb-10 tracking-tighter">
                The Anatomy of <br/>
                <span className="italic text-slate-400">Modern Identity.</span>
              </h1>
              
              <div className="flex flex-col md:flex-row gap-8 md:items-end border-l-2 border-slate-900 pl-8 mb-12">
                <div className="flex-1">
                  <p className="text-xl font-body-serif text-slate-600 leading-relaxed max-w-lg">
                    An empirical analysis of your Big Five traits reveals a profile defined by high cognitive complexity and structured execution.
                  </p>
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Analysis By</span>
                  <span className="font-bold text-slate-900 border-b border-slate-900 pb-1">Persona Core AI Engine</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#analytical-overview" 
                  className="bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-3 group"
                >
                  Full Briefing <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={handleCopyId}
                  className="border border-slate-200 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3"
                >
                  {copied ? 'ID Copied' : 'Access Key'} {copied ? <CheckCircle2 size={16} className="text-green-600" /> : <Copy size={16} />}
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 bg-slate-50 p-10 relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-slate-200 translate-x-4 -translate-y-4"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-slate-200 -translate-x-4 translate-y-4"></div>
              
              <div className="mb-6 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Radar</span>
                  <span className="text-xl font-serif italic text-slate-900">Psychometric Spectrum</span>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-serif font-bold text-slate-900 leading-none">82%</span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consistency</p>
                </div>
              </div>

              <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#cbd5e1" strokeDasharray="4 4" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em' }} />
                    <Radar
                      name="Profile"
                      dataKey="A"
                      stroke="#0f172a"
                      fill="#0f172a"
                      fillOpacity={0.15}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Analytical Overview Section */}
        <section id="analytical-overview" className="mb-32">
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-slate-900">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Section 01</span>
              <h2 className="text-4xl font-serif font-bold">Analytical Overview</h2>
            </div>
            <div className="hidden md:block text-right text-[10px] font-bold text-slate-400 max-w-[200px] leading-relaxed">
              DETERMINING COMPARATIVE STRENGTHS ACROSS ALL PRIMARY PSYCHOMETRIC DIMENSIONS.
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Trait Comparison Chart */}
            <div className="lg:col-span-2 bg-white border border-slate-100 p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
                <TrendingUp size={16} className="text-slate-400" /> Dimension Distribution
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }} width={80} />
                    <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', boxShadow: 'none' }} />
                    <Bar dataKey="score" radius={[0, 2, 2, 0]} barSize={32}>
                      {comparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.8} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Insight Briefing */}
            <div className="bg-slate-900 text-white p-10 flex flex-col justify-between">
              <div>
                <Info size={24} className="text-slate-500 mb-6" />
                <h3 className="text-2xl font-serif italic mb-6">Executive Summary</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-body-serif mb-8">
                  Your profile exhibits an exceptional balance between <strong>Empathetic Collaboration</strong> and <strong>Strategic Rigor</strong>. While your sensitivity is higher than the average population, it is tempered by a strong drive for order and achievement.
                </p>
              </div>
              <div className="pt-8 border-t border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Growth Trajectory</span>
                  <span className="text-[10px] font-bold text-green-400">+12% vs. Baseline</span>
                </div>
                <div className="w-full bg-slate-800 h-1">
                  <div className="bg-green-400 h-full w-[82%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dimension Deep Dive */}
        <section id="dimension-deep-dive" className="mb-32">
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-slate-900">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Section 02</span>
              <h2 className="text-4xl font-serif font-bold">Dimension Deep Dive</h2>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 hover:bg-slate-50 transition-all"><ChevronRight size={20} className="rotate-180" /></button>
              <button className="p-2 border border-slate-200 hover:bg-slate-50 transition-all"><ChevronRight size={20} /></button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-slate-100 mb-12">
            {reportData.traits.map((trait) => (
              <button
                key={trait.id}
                onClick={() => setActiveTrait(trait)}
                className={`p-6 text-left transition-all duration-300 border-r last:border-r-0 border-slate-100 ${
                  activeTrait?.id === trait.id ? 'bg-slate-900 text-white shadow-lg' : 'bg-white hover:bg-slate-50'
                }`}
              >
                <div className={`w-8 h-8 flex items-center justify-center mb-4 ${activeTrait?.id === trait.id ? 'text-white' : 'text-slate-400'}`}>
                  {trait.id === 'neuroticism' && <Brain size={20} />}
                  {trait.id === 'extraversion' && <Globe size={20} />}
                  {trait.id === 'openness' && <Sparkles size={20} />}
                  {trait.id === 'agreeableness' && <Heart size={20} />}
                  {trait.id === 'conscientiousness' && <ShieldCheck size={20} />}
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">{trait.name}</h4>
                <p className={`text-xl font-serif font-bold ${activeTrait?.id === trait.id ? 'text-white' : 'text-slate-900'}`}>{trait.totalScore}</p>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTrait && (
              <motion.div
                key={activeTrait.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid lg:grid-cols-2 gap-20 p-12 bg-slate-50 border border-slate-100"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-px bg-slate-900"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Detail Briefing</span>
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">{activeTrait.nameZh} / {activeTrait.name}</h3>
                  <p className="text-lg font-body-serif text-slate-600 leading-relaxed mb-8">
                    {activeTrait.description}
                  </p>
                  <p className="text-slate-400 italic font-body-serif mb-10 pb-10 border-b border-slate-200">
                    {activeTrait.descriptionZh}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Rank</span>
                      <p className="text-2xl font-serif font-bold text-slate-900">Top 15%</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Stability</span>
                      <p className="text-2xl font-serif font-bold text-slate-900">Consistent</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Facet Breakdown (Analytical Score 0-20)</h4>
                  <div className="space-y-6">
                    {activeTrait.facets.map((facet, idx) => (
                      <div key={idx} className="group cursor-help relative">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">{facet.nameZh} <span className="text-slate-400 font-normal">/ {facet.name}</span></span>
                          <span className="text-xs font-bold text-slate-900">{facet.score}</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(facet.score / 20) * 100}%` }}
                            className="h-full bg-slate-900"
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </div>
                        {/* Tooltip on hover */}
                        <div className="absolute top-full left-0 mt-2 bg-white border border-slate-200 p-4 shadow-xl text-[10px] opacity-0 group-hover:opacity-100 transition-opacity z-10 w-64 pointer-events-none">
                          <p className="font-bold mb-1 text-slate-900 uppercase">Description</p>
                          <p className="text-slate-500 leading-normal">{facet.descriptionZh}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Methodology Footer Section */}
        <section id="methodology" className="border-t border-slate-900 pt-20 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Methodology & Ethics</h3>
            <p className="text-sm font-body-serif text-slate-500 leading-relaxed mb-6">
              This assessment utilizes the <strong>IPIP-NEO-120</strong> psychometric model, a world-standard framework for evaluating the Big Five personality domains. Scores are normalized against a global database of over 1.5 million participants to ensure statistical relevance.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold">DR</div>)}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified by 3 Peer Analysts</span>
            </div>
          </div>
          <div className="bg-slate-50 p-8 flex flex-col justify-center">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Request Data Access</h4>
            <p className="text-xs text-slate-400 mb-6">To access the full dataset including raw response latencies and cross-trait correlations, please contact our institutional partner portal.</p>
            <button className="underline text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">Partner Portal Login</button>
          </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white text-slate-900 flex items-center justify-center font-bold">P</div>
              <span className="font-serif text-2xl font-bold tracking-tighter uppercase">PersonaInsight</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Leading the global discourse on psychometric integrity and individual behavioral modeling through advanced data visualization.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">Navigation</h5>
            <ul className="space-y-3 text-xs font-medium text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">Legal</h5>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              All results are for research purposes. We adhere to the standard of psychometric data protection and GDPR compliance.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 mt-20 pt-10 border-t border-slate-800 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <span>© 2026 PersonaInsight Global Research</span>
          <span>Tokyo • London • New York</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
