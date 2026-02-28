import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const specs = [
    {
      title: '100% MIUSA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      )
    },
    {
      title: '45° KNURLING',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 3l18 18M3 21L21 3M9 3l12 12M3 9l12 12M15 3l6 6M3 15l6 6" />
        </svg>
      )
    },
    {
      title: '32" UNIVERSAL',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M7 7v10M17 7v10" />
        </svg>
      )
    },
    {
      title: '600LB RATING',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M7 10l5-5 5 5M12 5v14M7 14l5 5 5-5" />
        </svg>
      )
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Oswald:wght@500;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0f0f0f;
            color: #f5f5f5;
            margin: 0;
        }

        h1, h2, h3, .brand-font {
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .accent-border {
            border-color: #262626;
        }

        .cta-button {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: #f5f5f5;
            color: #000;
        }

        .cta-button:hover {
            background: #ffffff;
            transform: scale(1.02);
        }

        .knurl-pattern {
            background-image: radial-gradient(#222 1px, transparent 1px);
            background-size: 6px 6px;
        }

        .knurled-separator {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 300px;
            margin: 0 auto 2.5rem auto;
        }

        .knurled-end {
            width: 40px;
            height: 2px;
            background-image: repeating-linear-gradient(45deg, #444, #444 1px, transparent 1px, transparent 3px);
            background-size: 4px 4px;
        }

        .center-line {
            flex-grow: 1;
            height: 1px;
            background-color: #222;
        }
      `}</style>

      <div className="antialiased">
        <nav className="flex justify-between items-center px-6 md:px-10 py-8 border-b accent-border sticky top-0 bg-[#0f0f0f]/95 backdrop-blur-md z-50">
          <div className="text-3xl md:text-4xl font-bold tracking-tighter brand-font">
            ACERO<span className="text-gray-500">.</span>
          </div>
          
          <div className="hidden md:flex space-x-10 lg:space-x-14 text-[14px] font-semibold tracking-[0.2em] uppercase text-gray-400">
            <a href="#product" onClick={(e) => scrollToSection(e, 'product')} className="hover:text-white transition">The Steel</a>
            <a href="#specs" onClick={(e) => scrollToSection(e, 'specs')} className="hover:text-white transition">Engineering</a>
            <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-white transition">Wellness</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#buy" onClick={(e) => scrollToSection(e, 'buy')} className="text-[12px] md:text-[14px] bg-white text-black font-bold px-6 md:px-9 py-3 md:py-4 hover:bg-gray-200 transition uppercase tracking-[0.15em]">
              Buy Acero Bar
            </a>
          </div>
        </nav>

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b accent-border py-20">
          <div className="absolute inset-0 opacity-40 knurl-pattern"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="knurled-separator">
                <div className="knurled-end"></div>
                <div className="center-line"></div>
                <div className="knurled-end"></div>
            </div>
            
            <h1 className="text-5xl md:text-[120px] font-bold mb-8 leading-[0.9] tracking-tighter">PURE STEEL.<br/>UNCOMPROMISED.</h1>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 tracking-[0.05em] leading-relaxed uppercase font-light">
                The only 100% MIUSA cold-pressed raw steel pullup bar.<br/>
                <span className="text-white font-medium mt-2 block">No synthetic coatings. No foam. Just performance.</span>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="#buy" onClick={(e) => scrollToSection(e, 'buy')} className="cta-button px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] w-full md:w-auto cursor-pointer">
                  Shop the Acero Bar — $85
                </a>
            </div>
          </div>
        </section>

        <section id="product" className="py-20 md:py-32 bg-white text-black">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">AN HONEST<br/>APPROACH TO TOOLS.</h2>
                <p className="text-base md:text-lg mb-12 text-gray-600 leading-relaxed font-light">
                  Fitness equipment should be as resilient as the people using it. We avoid powder coats and plastic coverings to highlight the natural structural integrity of American steel.
                </p>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-lg font-bold mb-4 tracking-widest flex items-center">
                      <span className="mr-4 w-10 h-[2px] bg-black"></span> COLD-PRESSED STEEL
                    </h3>
                    <p className="text-gray-600 ml-14 font-light">Increased density allows a lightweight hollow tube to safely withstand 600+ lbs of tension.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 tracking-widest flex items-center">
                      <span className="mr-4 w-10 h-[2px] bg-black"></span> ORGANIC BUTCHER'S WAX
                    </h3>
                    <p className="text-gray-600 ml-14 font-light">Natural wax protection avoids chemical off-gassing found in lacquers.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden rounded-sm border border-neutral-200">
                <img src="https://www.lionscool.com/cdn/shop/files/4-3.jpg?v=1748329643&width=1500" alt="Steel" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="specs" className="py-20 md:py-32 border-y accent-border bg-[#0a0a0a]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-20 tracking-tight uppercase">Engineered Standards</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {specs.map((spec) => (
                <div key={spec.title} className="flex flex-col items-center group cursor-default">
                  <div className="w-16 h-16 mb-6 border border-gray-800 rounded-full flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-gray-600 transition-all duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="font-bold text-xs tracking-[0.2em] uppercase">{spec.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-16 border-t accent-border text-[9px] text-gray-600 tracking-[0.4em] uppercase px-6 text-center">
          &copy; 2024 ACERO STRENGTH | BUILT IN USA
        </footer>
      </div>
    </>
  );
};

export default App;
