import { Shield, Building2, Scale, Users, GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-ivory-100 min-h-screen">
      <section className="bg-navy-900 text-ivory-100 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif mb-4 text-gold-500">
            About Advocate Vineet Kumar Misra
          </motion.h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-serif text-navy-900 mb-6">Professional Biography</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">Established in legal practice in 1995, Advocate Vineet Kumar Misra brings approximately 30+ years of steadfast legal experience to his clients in Lucknow. With a foundation built on trust, clear communication, and an unwavering commitment to the law, his chambers handle a diverse range of complex legal matters.</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">His extensive practice encompasses the High Court, Civil Court, Criminal Court, and District & Sessions Courts in Lucknow. He has a particular professional focus on matrimonial and family-related matters, as well as Will-related legal work.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-center gap-4 bg-white p-4 rounded shadow-sm border border-gold-500/20"><Calendar className="text-gold-500" size={32} /><div><h4 className="font-serif text-navy-900 font-bold">Established</h4><p className="text-gray-600">1995 (30+ Years)</p></div></div>
                <div className="flex items-center gap-4 bg-white p-4 rounded shadow-sm border border-gold-500/20"><GraduationCap className="text-gold-500" size={32} /><div><h4 className="font-serif text-navy-900 font-bold">Education</h4><p className="text-gray-600">LL.B., University of Lucknow</p></div></div>
                <div className="flex items-center gap-4 bg-white p-4 rounded shadow-sm border border-gold-500/20"><Award className="text-gold-500" size={32} /><div><h4 className="font-serif text-navy-900 font-bold">Association</h4><p className="text-gray-600">Balaji Association</p></div></div>
                <div className="flex items-center gap-4 bg-white p-4 rounded shadow-sm border border-gold-500/20"><Building2 className="text-gold-500" size={32} /><div><h4 className="font-serif text-navy-900 font-bold">Primary Practice</h4><p className="text-gray-600">High Court, Civil Court, Lucknow</p></div></div>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-[3/4] bg-navy-800 rounded shadow-2xl relative overflow-hidden border-4 border-white"><img src="/portrait.jpg" alt="Advocate Vineet Kumar Misra" className="w-full h-full object-cover" /></div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 w-32 h-32 rounded -z-10"></div>
              <div className="absolute -top-6 -right-6 bg-navy-900 w-32 h-32 rounded -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white border-y border-gold-500/20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-navy-900 mb-12">Professional Timeline</h2>
          <div className="relative border-l-2 border-gold-500/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0 text-left">
            <div className="md:absolute md:left-1/2 md:h-full md:border-l-2 md:border-gold-500/30 md:-ml-px"></div>
            <div className="mb-12 relative md:flex md:justify-between md:items-center">
              <div className="md:w-5/12 text-right pr-8 hidden md:block"><h3 className="text-2xl font-serif text-navy-900">Commencement of Practice</h3><p className="text-gray-600 mt-2">Established legal practice in Lucknow.</p></div>
              <div className="absolute -left-10 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-gold-500 border-4 border-white shadow-sm"></div>
              <div className="md:w-5/12 md:pl-8"><span className="text-gold-600 font-bold tracking-widest uppercase text-sm bg-gold-500/10 px-3 py-1 rounded inline-block mb-2">1995</span><h3 className="text-2xl font-serif text-navy-900 md:hidden">Commencement of Practice</h3><p className="text-gray-600 mt-2 md:hidden">Established legal practice in Lucknow.</p></div>
            </div>
            <div className="mb-12 relative md:flex md:justify-between md:items-center md:flex-row-reverse">
              <div className="md:w-5/12 text-left pl-8 hidden md:block"><h3 className="text-2xl font-serif text-navy-900">Present Day</h3><p className="text-gray-600 mt-2">Over 30+ years of dedicated legal representation across High Court, Civil, Criminal, and District courts.</p></div>
              <div className="absolute -left-10 md:left-1/2 md:-ml-4 w-8 h-8 rounded-full bg-navy-900 border-4 border-white shadow-sm"></div>
              <div className="md:w-5/12 md:pr-8 md:text-right"><span className="text-gold-600 font-bold tracking-widest uppercase text-sm bg-gold-500/10 px-3 py-1 rounded inline-block mb-2">2026</span><h3 className="text-2xl font-serif text-navy-900 md:hidden">Present Day</h3><p className="text-gray-600 mt-2 md:hidden">Over 30+ years of dedicated legal representation across High Court, Civil, Criminal, and District courts.</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;