import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-ivory-100 min-h-screen pb-24">
      <section className="bg-navy-900 text-ivory-100 py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-serif mb-4 text-gold-500">Contact Advocate</motion.h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Schedule a consultation or reach out for legal assistance.</p>
        </div>
      </section>
      <div className="container mx-auto px-6 max-w-6xl mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-serif text-navy-900 mb-8">Get In Touch</h2>
            <div className="flex gap-4 items-start"><div className="w-12 h-12 rounded bg-white shadow flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20"><Phone size={24} /></div><div><h4 className="font-serif text-navy-900 text-lg font-bold mb-1">Phone</h4><a href="tel:9415467284" className="block text-gray-600 hover:text-gold-600">+91 94154 67284</a><a href="tel:8795634699" className="block text-gray-600 hover:text-gold-600">+91 87956 34699</a></div></div>
            <div className="flex gap-4 items-start"><div className="w-12 h-12 rounded bg-white shadow flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20"><MessageCircle size={24} /></div><div><h4 className="font-serif text-navy-900 text-lg font-bold mb-1">WhatsApp</h4><a href="https://wa.me/919415467284" target="_blank" rel="noreferrer" className="block text-gray-600 hover:text-gold-600">+91 94154 67284</a></div></div>
            <div className="flex gap-4 items-start"><div className="w-12 h-12 rounded bg-white shadow flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20"><Mail size={24} /></div><div><h4 className="font-serif text-navy-900 text-lg font-bold mb-1">Email</h4><a href="mailto:vineetkumarmisra402@gmail.com" className="block text-gray-600 hover:text-gold-600">vineetkumarmisra402@gmail.com</a></div></div>
            <div className="flex gap-4 items-start"><div className="w-12 h-12 rounded bg-white shadow flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20"><MapPin size={24} /></div><div><h4 className="font-serif text-navy-900 text-lg font-bold mb-1">Office Address</h4><p className="text-gray-600 leading-relaxed">C-1875 HIG, Rajaji Puram,<br />Lucknow – 226017,<br />Uttar Pradesh</p></div></div>
            <div className="flex gap-4 items-start"><div className="w-12 h-12 rounded bg-white shadow flex items-center justify-center flex-shrink-0 text-gold-500 border border-gold-500/20"><Clock size={24} /></div><div><h4 className="font-serif text-navy-900 text-lg font-bold mb-1">Office Hours</h4><p className="text-gray-600">9:00 AM – 5:00 PM</p><p className="text-gray-500 text-sm">All days of the week</p></div></div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded shadow-sm border border-gold-500/20">
              <h3 className="text-2xl font-serif text-navy-900 mb-6">Request a Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">Full Name</label><input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded bg-ivory-100" placeholder="John Doe" /></div>
                  <div><label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">Phone Number</label><input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded bg-ivory-100" placeholder="+91 98765 43210" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">Email Address</label><input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded bg-ivory-100" placeholder="john@example.com" /></div>
                  <div><label htmlFor="matter" className="block text-sm font-medium text-navy-900 mb-2">Matter / Practice Area</label><select id="matter" className="w-full px-4 py-3 border border-gray-300 rounded bg-ivory-100 text-gray-700"><option>Select an area...</option><option>Matrimonial & Family Matters</option><option>Will Drafting & Matters</option><option>High Court Matters</option><option>Civil Court Matters</option><option>Criminal Court Matters</option><option>District & Sessions Court</option><option>Other</option></select></div>
                </div>
                <div><label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">Message</label><textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded bg-ivory-100 resize-none" placeholder="Briefly describe your legal situation..."></textarea></div>
                <button type="button" className="w-full md:w-auto bg-navy-900 hover:bg-gold-500 text-ivory-100 hover:text-navy-900 px-8 py-3 rounded font-semibold transition-colors">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white p-2 rounded border border-gold-500/20 shadow-sm"><div className="w-full h-96 bg-gray-200 rounded flex flex-col items-center justify-center text-gray-500"><MapPin size={48} className="text-gold-500 mb-4 opacity-50" /><p className="font-serif text-lg">Interactive Map Placeholder</p><p className="text-sm mt-2">Exact map pin pending confirmation.</p></div></div>
      </div>
    </div>
  );
};
export default Contact;