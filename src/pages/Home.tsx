import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowRight, Gavel, FileText, Building2, Scale, Users, Shield } from 'lucide-react';

const PracticeAreaCard = ({ title, icon: Icon, description }: { title: string, icon: any, description: string }) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded shadow-sm border border-gold-500/20 flex flex-col items-center text-center group">
    <div className="w-16 h-16 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors"><Icon size={32} /></div>
    <h3 className="text-xl font-serif text-navy-900 mb-3">{title}</h3><p className="text-gray-600 mb-4">{description}</p>
    <Link to="/practice-areas" className="text-gold-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto">Read More <ArrowRight size={16} /></Link>
  </motion.div>
);

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-navy-900 text-ivory-100 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500 via-navy-900 to-navy-900"></div>
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-serif mb-4 leading-tight text-gold-500">{t('heroTitle')}</motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl font-light mb-8 text-ivory-200">{t('heroSubtitle')}</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">{t('heroSupport')}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4">
              <a href="tel:9415467284" className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3 rounded font-semibold transition-colors flex items-center gap-2"><Phone size={20} /> {t('callNow')}</a>
              <a href="https://wa.me/918795634699" target="_blank" rel="noreferrer" className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 px-8 py-3 rounded font-semibold transition-colors flex items-center gap-2"><MessageCircle size={20} /> {t('whatsapp')}</a>
              <Link to="/contact" className="border-b border-transparent hover:border-ivory-100 text-ivory-100 px-4 py-3 font-medium transition-all">{t('requestConsultation')}</Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex-1 w-full max-w-md">
            <div className="aspect-[3/4] bg-navy-800 rounded-sm border-2 border-gold-500/30 p-2 shadow-2xl relative">
              <img src="/portrait.jpg" alt="Advocate Vineet Kumar Misra" className="w-full h-full object-cover rounded-sm" />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 px-6 py-4 rounded-sm font-serif shadow-lg"><div className="text-3xl font-bold">30+</div><div className="text-sm font-semibold tracking-wider uppercase">Years of Practice</div></div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="bg-white border-y border-gray-200 py-8"><div className="container mx-auto px-6 max-w-6xl"><div className="flex flex-wrap justify-center gap-12 text-center text-navy-900 font-medium">
        <div className="flex items-center gap-2"><Shield className="text-gold-500" size={24} /> 30+ Years of Practice</div>
        <div className="flex items-center gap-2"><Building2 className="text-gold-500" size={24} /> LL.B., University of Lucknow</div>
        <div className="flex items-center gap-2"><Scale className="text-gold-500" size={24} /> High Court Practice</div>
        <div className="flex items-center gap-2"><Users className="text-gold-500" size={24} /> Lucknow-based</div>
      </div></div></section>
      <section className="py-24 bg-ivory-100"><div className="container mx-auto px-6 max-w-6xl"><div className="text-center mb-16"><h2 className="text-4xl font-serif text-navy-900 mb-4">Principal Practice Areas</h2><div className="w-24 h-1 bg-gold-500 mx-auto"></div></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PracticeAreaCard title="Matrimonial & Family Matters" icon={Users} description="Navigating sensitive family disputes, divorce, and matrimonial issues with professionalism and care." />
          <PracticeAreaCard title="Will Drafting & Matters" icon={FileText} description="Clear, legally sound Will preparation and assistance with related legal procedures." />
          <PracticeAreaCard title="High Court Matters" icon={Building2} description="Experienced representation in High Court proceedings." />
          <PracticeAreaCard title="Civil Court Matters" icon={Gavel} description="Handling civil disputes and legal proceedings effectively." />
          <PracticeAreaCard title="Criminal Court Matters" icon={Shield} description="Dedicated criminal defense and representation in criminal courts." />
          <PracticeAreaCard title="District & Sessions Court" icon={Scale} description="Representation in Lucknow District & Sessions court cases." />
        </div>
      </div></section>
      <section className="py-24 bg-navy-900 text-ivory-100"><div className="container mx-auto px-6 max-w-4xl text-center"><h2 className="text-4xl font-serif text-gold-500 mb-8">About Vineet Kumar Misra</h2><p className="text-lg text-gray-300 leading-relaxed mb-10">Established in legal practice in 1996, Advocate Vineet Kumar Misra brings 30+ years of steadfast legal experience to his clients in Lucknow. With a foundation built on trust, clear communication, and an unwavering commitment to the law, his chambers handle a diverse range of complex legal matters across the High Court, Civil Court, Criminal Court, and District & Sessions Courts.</p><Link to="/about" className="inline-block border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 px-8 py-3 rounded font-semibold transition-all">Read Full Profile</Link></div></section>
      <section className="py-24 bg-white"><div className="container mx-auto px-6 max-w-6xl"><div className="flex flex-col lg:flex-row gap-16 items-center"><div className="flex-1"><h2 className="text-4xl font-serif text-navy-900 mb-6">How The Practice Works</h2><div className="w-16 h-1 bg-gold-500 mb-8"></div><p className="text-gray-600 mb-8 leading-relaxed">We believe in providing clear, professional, and transparent legal assistance. Our process is designed to ensure you understand your legal position without making false promises or guarantees.</p><div className="space-y-6">
        <div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-ivory-200 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/30">1</div><div><h4 className="text-xl font-serif text-navy-900 mb-2">Consultation</h4><p className="text-gray-600 text-sm">Initial discussion to thoroughly understand the facts and nuances of your situation.</p></div></div>
        <div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-ivory-200 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/30">2</div><div><h4 className="text-xl font-serif text-navy-900 mb-2">Legal Position</h4><p className="text-gray-600 text-sm">Analyzing and discussing the legal position based on facts, without setting unrealistic expectations.</p></div></div>
        <div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-ivory-200 text-navy-900 flex items-center justify-center font-bold flex-shrink-0 border border-gold-500/30">3</div><div><h4 className="text-xl font-serif text-navy-900 mb-2">Next Steps</h4><p className="text-gray-600 text-sm">Identifying appropriate legal actions and maintaining professional, clear communication throughout the process.</p></div></div>
      </div></div><div className="flex-1 bg-ivory-100 p-12 rounded-lg border border-gold-500/20 text-center shadow-sm"><Shield size={48} className="text-gold-500 mx-auto mb-6" /><h3 className="text-2xl font-serif text-navy-900 mb-4">Integrity & Transparency</h3><p className="text-gray-600 italic">"Our practice is built on factual accuracy and professional counsel. We do not guarantee outcomes, but we do guarantee our unwavering commitment to your legal representation."</p></div></div></div></section>
      <section className="py-24 bg-ivory-200 border-y border-gold-500/10"><div className="container mx-auto px-6 max-w-4xl text-center"><MessageCircle size={40} className="text-gold-500 mx-auto mb-6" /><h2 className="text-3xl font-serif text-navy-900 mb-4">Client Feedback</h2><div className="w-16 h-1 bg-gold-500 mx-auto mb-8"></div><div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100"><p className="text-gray-500 italic text-lg">Client testimonials coming soon.</p></div></div></section>
    </div>
  );
};
export default Home;