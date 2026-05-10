/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap, 
  Utensils, 
  Stethoscope, 
  Briefcase,
  CheckCircle2,
  Share2,
  Instagram,
  Facebook,
  Mail,
  Lock,
  ArrowRight
} from 'lucide-react';

// --- Types ---
type View = 'home' | 'donate' | 'success';

// --- Components ---

const Header = ({ onViewChange, currentView }: { onViewChange: (v: View) => void, currentView: View }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-surface/80 backdrop-blur-md border-b border-outline-variant h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <button 
          onClick={() => onViewChange('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className={`font-display font-bold text-lg hidden sm:block ${isScrolled ? 'text-primary' : 'text-on-surface'}`}>
            Instituto Edson Royer
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onViewChange('home')} className={`font-medium hover:text-primary transition-colors ${currentView === 'home' ? 'text-primary' : 'text-on-surface-variant'}`}>Início</button>
          <button className="font-medium text-on-surface-variant hover:text-primary transition-colors">Programas</button>
          <button className="font-medium text-on-surface-variant hover:text-primary transition-colors">Transparência</button>
          <button 
            onClick={() => onViewChange('donate')}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-primary-hover transition-all active:scale-95"
          >
            Contribuir
          </button>
        </nav>

        <button className="md:hidden p-2 text-primary">
          <Menu />
        </button>
      </div>
    </header>
  );
};

const Footer = ({ onDonate }: { onDonate: () => void }) => (
  <footer className="bg-surface-container-highest border-t border-outline-variant mt-20">
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="lg:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="text-primary" size={24} fill="currentColor" />
          <span className="font-display font-bold text-xl text-primary">Instituto Edson Royer</span>
        </div>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          Dedicados a transformar vidas através da educação e assistência social desde 2009. Sua transparência é nossa prioridade.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-primary uppercase text-sm tracking-widest">Institucional</h4>
        <ul className="space-y-2 text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Transparência</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Documentários</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Relatórios Anuais</a></li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-primary uppercase text-sm tracking-widest">Ações</h4>
        <ul className="space-y-2 text-on-surface-variant">
          <li><button onClick={onDonate} className="hover:text-primary transition-colors font-bold text-primary underline">Doar Agora</button></li>
          <li><a href="#" className="hover:text-primary transition-colors">Seja Voluntário</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Nossos Projetos</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Impacto Social</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="font-bold text-primary uppercase text-sm tracking-widest">Contato</h4>
        <p className="text-on-surface-variant">Fale conosco pelo WhatsApp ou mande um e-mail para parcerias.</p>
        <button className="w-full bg-white text-primary border-2 border-primary py-3 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          WhatsApp Oficial
        </button>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-8 border-t border-outline-variant/30 text-center text-on-surface-variant text-sm opacity-70">
      © 2026 Instituto Edson Royer. Transformando realidades há 16 anos.
    </div>
  </footer>
);

// --- Content Views ---

const HomeView = ({ onDonate }: { onDonate: () => void }) => {
  const programs = [
    {
      title: "EDUCAÇÃO INFANTIL",
      desc: "Reforço escolar e atividades pedagógicas para crianças de 6 a 14 anos.",
      icon: <GraduationCap size={24} />,
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      color: "text-blue-600"
    },
    {
      title: "ALIMENTAÇÃO",
      desc: "Garantia de segurança alimentar com cestas básicas nutritivas mensais.",
      icon: <Utensils size={24} />,
      img: "https://images.unsplash.com/photo-1488459739036-ed228059fa21?auto=format&fit=crop&q=80&w=800",
      color: "text-orange-600"
    },
    {
      title: "SAÚDE BUCAL",
      desc: "Tratamento odontológico completo e preventivo para toda a família.",
      icon: <Stethoscope size={24} />,
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      color: "text-emerald-600"
    },
    {
      title: "CAPACITAÇÃO",
      desc: "Cursos profissionalizantes para jovens e adultos entrarem no mercado.",
      icon: <Briefcase size={24} />,
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Impacto Social"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-white/30">
              Campanha 16 Anos
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight">
              Sua doação <br />
              <span className="text-secondary-container">Transforma</span> vidas.
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Há 16 anos transformando apoio em sorrisos, educação de qualidade e dignidade para centenas de famílias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onDonate}
                className="bg-secondary-container hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Contribuir agora <ChevronRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Nossa História
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Stats */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-12 rounded-3xl border border-outline-variant shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">Celebrando 16 anos</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                O Instituto Edson Royer nasceu do sonho de transformar a realidade de crianças em vulnerabilidade. 
                Hoje, somos referência em assistência social, oferecendo muito mais do que recursos físicos: 
                oferecemos esperança e um futuro com novos horizontes.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-surface-container overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i*10}`} alt="Person" />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white font-bold text-sm">
                  +5k
                </div>
              </div>
              <span className="font-bold text-primary text-xl">Pessoas impactadas em 2025</span>
            </div>
          </div>

          <div className="bg-primary p-12 rounded-3xl text-white shadow-2xl flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-8">Meta para este mês</h3>
            <div className="relative w-40 h-40 flex items-center justify-center mb-8">
              <svg className="w-full h-full -rotate-90">
                <circle cx="80" cy="80" r="74" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                <motion.circle 
                  initial={{ strokeDashoffset: 465 }}
                  whileInView={{ strokeDashoffset: 465 * 0.25 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  cx="80" cy="80" r="74" fill="none" stroke="#fc7127" strokeWidth="12" strokeDasharray="465"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-4xl font-extrabold block leading-none">75%</span>
                <span className="text-xs uppercase tracking-widest opacity-80">Concluído</span>
              </div>
            </div>
            <p className="font-medium opacity-90 mb-8 leading-snug">
              Faltam apenas R$ 4.250 para completarmos as cestas básicas de Maio.
            </p>
            <button 
              onClick={onDonate}
              className="w-full bg-white text-primary font-bold py-4 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Quero Ajudar
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display font-bold mb-4">Nossa atuação</h2>
              <p className="text-lg text-on-surface-variant">
                Trabalhamos de forma holística para garantir que cada indivíduo assistido tenha acesso ao básico e ao extraordinário.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden border border-outline-variant shadow-sm group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-primary shadow-lg">
                    {p.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-primary mb-3 text-sm tracking-widest">{p.title}</h4>
                  <p className="text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                    {p.desc}
                  </p>
                  <button className="flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
                    Ver Projeto <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const DonateView = ({ onComplete }: { onComplete: () => void }) => {
  const [amount, setAmount] = useState('30');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-surface-container-low">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-3xl border border-outline-variant shadow-lg"
          >
            <h1 className="text-4xl font-display font-bold text-primary mb-6">Sua generosidade faz história</h1>
            <p className="text-lg text-on-surface-variant mb-12">
              Ao doar, você ajuda a manter nossos 16 anos de trabalho social ativos e vibrantes. Escolha a melhor forma de contribuir.
            </p>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant">
                  <span className="text-primary block font-bold mb-2">Impacto Direto</span>
                  <p className="text-sm text-on-surface-variant">R$ 50 fornece materiais pedagógicos para um mês de aula de uma criança.</p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant">
                  <span className="text-primary block font-bold mb-2">Segurança Alimentar</span>
                  <p className="text-sm text-on-surface-variant">R$ 100 garante uma cesta básica completa e nutritiva para uma família.</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-56">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43552e?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover"
                  alt="Testimonial"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <p className="text-white font-medium italic text-lg leading-relaxed">
                    "O instituto não só me deu alimento, mas me deu as ferramentas para eu mesma conquistar o meu sustento."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <aside className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32 bg-white p-10 rounded-3xl border border-outline-variant shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">Contribuir agora</h3>
            <p className="text-on-surface-variant mb-8">Todos os dados são criptografados.</p>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onComplete(); }}>
              <div>
                <label className="block font-bold text-sm text-primary uppercase tracking-widest mb-2">Nome Completo</label>
                <input 
                  required
                  className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Seu nome"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-sm text-primary uppercase tracking-widest mb-2">E-mail</label>
                  <input 
                    required
                    type="email"
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="E-mail"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm text-primary uppercase tracking-widest mb-2">WhatsApp</label>
                  <input 
                    required
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="(00) 00000-0000"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-sm text-primary uppercase tracking-widest mb-4">Escolha o valor</label>
                <div className="grid grid-cols-3 gap-3">
                  {['30', '50', '100'].map(val => (
                    <button 
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-3 rounded-xl border-2 font-bold transition-all ${amount === val ? 'bg-primary border-primary text-white scale-105 shadow-md' : 'border-outline-variant text-on-surface-variant hover:border-primary'}`}
                    >
                      R$ {val}
                    </button>
                  ))}
                </div>
                <div className="relative mt-4">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">R$</span>
                  <input 
                    type="number"
                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-12 pr-4 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Outro valor"
                    onChange={(e) => setAmount(e.target.value)}
                    value={!['30', '50', '100'].includes(amount) ? amount : ''}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:bg-primary-hover active:scale-95 transition-all"
              >
                Ir para Pagamento <ArrowRight size={20} />
              </button>

              <div className="flex items-center justify-center gap-2 text-on-surface-variant opacity-60 text-sm font-medium">
                <Lock size={14} /> Ambiente de doação 100% seguro
              </div>
            </form>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

const SuccessView = ({ onReturn }: { onReturn: () => void }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-surface">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-2xl w-full bg-white p-16 rounded-[40px] border border-outline-variant shadow-2xl text-center"
      >
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <CheckCircle2 size={48} strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">Muito obrigado!</h1>
        <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
          Sua generosidade faz a diferença no Instituto Edson Royer. Cada contribuição é um passo fundamental para transformar vidas através da educação e assistência.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          <div className="p-6 bg-surface-container rounded-2xl">
            <span className="text-primary block font-bold mb-2">Impacto Real</span>
            <p className="text-sm text-on-surface-variant italic leading-relaxed">
              Você receberá um e-mail com fotos e o relatório de impacto desta campanha.
            </p>
          </div>
          <div className="p-6 bg-surface-container rounded-2xl">
            <span className="text-primary block font-bold mb-2">Transparência</span>
            <p className="text-sm text-on-surface-variant italic leading-relaxed">
              Cada centavo é rastreado e auditado por parceiros independentes.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={onReturn}
            className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            Voltar ao Início
          </button>
          <button className="flex items-center justify-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <Share2 size={18} /> Compartilhar esta causa
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<View>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col font-sans select-none">
      <Header onViewChange={setView} currentView={view} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'home' && <HomeView onDonate={() => setView('donate')} />}
            {view === 'donate' && <DonateView onComplete={() => setView('success')} />}
            {view === 'success' && <SuccessView onReturn={() => setView('home')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onDonate={() => setView('donate')} />
    </div>
  );
}
