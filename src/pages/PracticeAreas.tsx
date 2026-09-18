import { Shield, Building2, Scale, Users, Gavel, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const AreaSection = ({ title, icon: Icon, description, index }: { title: string, icon: any, description: string, index: number }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded shadow-sm border border-gold-500/20 group hover:border-gold-500/50 transition-colors">
    <div className="w-16 h-16 rounded bg-ivory-200 text-navy-900 flex items-center justify-center flex-shrink-0 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors"><Icon size={32} /></div>
    <div><h3 className="text-2xl font-serif text-navy-900 mb-4">{title}</h3><p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      {title === "Will Drafting & Matters" && <div className="mt-6 bg-ivory-100 p-4 border border-gold-500/30 rounded text-sm text-gray-600"><strong>Note:</strong> A downloadable checklist for documents and information commonly needed for Will preparation will be available here soon.</div>}
    </div>
  </motion.div>
);

const PracticeAreas = () => (
  <div className="bg-ivory-100 min-h-screen">
    <section className="bg-navy-900 text-ivory-100 py-20"><div className="container mx-auto px-6 max-w-4xl text-center"><h1 className="text-4xl md:text-6xl font-serif mb-4 text-gold-500">Practice Areas</h1><div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div><p className="text-xl text-gray-300">Comprehensive legal services backed by 30+ years of experience.</p></div></section>
    <section className="py-24"><div className="container mx-auto px-6 max-w-5xl space-y-8">
      <AreaSection index={0} title="Matrimonial & Family Matters" icon={Users} description="Our primary specialization. We provide discreet and professional legal counsel for matrimonial disputes, divorce-related matters, and other family-related legal issues. We focus on understanding the nuances of your specific situation to guide you through the consultation and subsequent legal processes with clarity." />
      <AreaSection index={1} title="Will Drafting & Matters" icon={FileText} description="Expert assistance in Will drafting and related legal matters. We ensure that your testamentary intentions are clearly articulated in legally sound documents, providing peace of mind and structured succession planning for your family and assets." />
      <AreaSection index={2} title="High Court Matters" icon={Building2} description="Robust representation in the High Court. Leveraging decades of established practice to navigate complex appellate and constitutional matters with thorough legal research and authoritative advocacy." />
      <AreaSection index={3} title="Civil Court Matters" icon={Gavel} description="Handling a wide spectrum of civil legal proceedings. We represent clients in civil disputes, ensuring that property, contractual, and other civil rights are vigorously defended and pursued within the legal framework." />
      <AreaSection index={4} title="Criminal Court Matters" icon={Shield} description="Dedicated criminal legal representation. We handle criminal defense and proceedings, ensuring fair representation and protection of legal rights throughout the criminal justice process." />
      <AreaSection index={5} title="District & Sessions Court Matters" icon={Scale} description="Active representation in the District & Sessions Courts in Lucknow. We handle both civil and criminal matters at the district level with local expertise and steadfast commitment." />
    </div></section>
    <section className="py-16 bg-white border-t border-gold-500/20 text-center"><div className="container mx-auto px-6 max-w-3xl"><h2 className="text-3xl font-serif text-navy-900 mb-6">Need Legal Assistance?</h2><p className="text-gray-600 mb-8 text-lg">Contact our chambers to schedule a consultation regarding your legal matters.</p><a href="tel:9415467284" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3 rounded font-semibold transition-colors">Call Now</a></div></section>
  </div>
);
export default PracticeAreas;