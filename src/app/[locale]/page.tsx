import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
export default function HomePage() {
  const tIndex = useTranslations('Index');
  const tAbout = useTranslations('About');
  const tEdu = useTranslations('Education');
  const tExp = useTranslations('Experience');
  const tProj = useTranslations('Projects');

  // Explicit hardcoded tags array from CV expertise to save JSON nesting space
  const tools = ['Ansys (CFD & Structural)', 'STAR-CCM+', 'SOLIDWORKS', 'LIGGGHTS', 'Abaqus', 'MATLAB', 'Python', 'C'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      
      {/* HEADER / NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tight text-lg text-slate-900">Erfan Bensaeed</span>          <div className="flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">{useTranslations('Navbar')('about')}</a>
            <a href="#experience" className="hover:text-blue-600 transition">{useTranslations('Navbar')('experience')}</a>
            <a href="#projects" className="hover:text-blue-600 transition">{useTranslations('Navbar')('projects')}</a>
            <div className="h-4 w-px bg-slate-300 mx-2" />
            <Link href="/" locale="en" className="hover:text-blue-600 transition text-xs tracking-wider font-bold">EN</Link>
            <Link href="/" locale="de" className="hover:text-blue-600 transition text-xs tracking-wider font-bold">DE</Link>
          </div>
        </div>
      </nav>

      {/* HERO / INTRO SECTION */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-none">
            {tIndex('title')}
          </h1>
          <p className="mt-4 text-xl font-bold text-blue-600">
            {tIndex('subtitle')}
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
            {tIndex('description')}
          </p>
          <div className="mt-4 text-sm text-slate-500 space-y-1">
            <p>📍 Magdeburg, Germany</p>
            <p>📧 erfanbensaeed@gmail.com | 📞 +49 157 5515 4668</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#projects" className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 shadow-sm transition text-sm">
              {tIndex('viewProjects')}
            </a>
            <a href="mailto:erfanbensaeed@gmail.com" className="px-6 py-2.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 shadow-sm transition text-sm">
              {tIndex('contactMe')}
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-0 flex justify-center">
          {/* Replace it with this: */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl overflow-hidden relative bg-slate-100">
          <Image 
            src="/profile.png"          // Looks directly inside your public/ folder
            alt="Erfan Bensaeed" 
            fill                        // Tells the image to completely fill the circle
            className="object-cover"    // Prevents stretching; clips it nicely like an engineering profile
            priority                    // Tells the browser to load this immediately (good for performance)
          />
          </div>

        </div>
      </header>

      {/* ABOUT & SKILLS SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{tAbout('heading')}</h2>
            <p className="text-slate-600 leading-relaxed">{tAbout('text')}</p>
            
              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-4">{tEdu('heading')}</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-slate-900 text-sm md:text-base">{tEdu('mscTitle')}</h4>
                <p className="text-slate-600 text-sm">{tEdu('mscUni')}</p>
                <span className="text-xs text-blue-600 font-semibold">{tEdu('mscDate')}</span>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h4 className="font-bold text-slate-900 text-sm md:text-base">{tEdu('bscTitle')}</h4>
                <p className="text-slate-600 text-sm">{tEdu('bscUni')}</p>
                <span className="text-xs text-slate-500 font-semibold">{tEdu('bscDate')}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm h-fit">
            <h3 className="font-bold text-slate-900 mb-3">{tAbout('skillsHeading')}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {tools.map((tool) => (
                <span key={tool} className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200/40">
                  {tool}
                </span>
              ))}
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{tAbout('languagesHeading')}</h3>
            <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
              <li>🇬🇧 {tAbout('en')}</li>
              <li>🇩🇪 {tAbout('de')}</li>
              <li>🇮🇷 {tAbout('fa')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* JOB EXPERIENCE SECTION */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{tExp('heading')}</h2>
        <div className="space-y-8 max-w-3xl">
          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-bold text-slate-900">{tExp('boardTitle')}</h3>
              <span className="text-xs font-semibold text-slate-500">{tExp('boardDate')}</span>
            </div>
            <p className="text-xs text-blue-600 font-medium mb-2">{tExp('boardCompany')}</p>
            <p className="text-sm text-slate-600">{tExp('boardDesc')}</p>
          </div>

          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-bold text-slate-900">{tExp('researchTitle')}</h3>
              <span className="text-xs font-semibold text-slate-500">{tExp('researchDate')}</span>
            </div>
            <p className="text-xs text-blue-600 font-medium mb-2">{tExp('researchCompany')}</p>
            <p className="text-sm text-slate-600">{tExp('researchDesc')}</p>
          </div>

          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-slate-400 before:rounded-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-bold text-slate-900">{tExp('internTitle')}</h3>
              <span className="text-xs font-semibold text-slate-500">{tExp('internDate')}</span>
            </div>
            <p className="text-xs text-slate-500 font-medium mb-2">{tExp('internCompany')}</p>
            <p className="text-sm text-slate-600">{tExp('internDesc')}</p>
          </div>
        </div>
      </section>

      {/* CALCULATED SIMULATION PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200 pb-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{tProj('heading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-wider font-extrabold uppercase px-2 py-0.5 bg-blue-50 text-blue-600 rounded">LIGGGHTS (DEM) · SolidWorks</span>
              <h3 className="font-bold text-lg text-slate-900 mt-2 mb-3">{tProj('p1Title')}</h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                <li>{tProj('p1Desc1')}</li>
                <li>{tProj('p1Desc2')}</li>
              </ul>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] tracking-wider font-extrabold uppercase px-2 py-0.5 bg-blue-50 text-blue-600 rounded">Ansys Mechanical (FEM)</span>
              <h3 className="font-bold text-lg text-slate-900 mt-2 mb-3">{tProj('p2Title')}</h3>
              <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                <li>{tProj('p2Desc1')}</li>
                <li>{tProj('p2Desc2')}</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}