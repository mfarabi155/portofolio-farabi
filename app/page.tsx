"use client"

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Kamus Konten (Dictionary)
  const content = {
    id: {
      nav: { about: "Tentang", exp: "Pengalaman", port: "Portofolio", edu: "Pendidikan", contact: "Kontak" },
      hero: {
        badge: "Tersedia untuk Peluang Baru & Kolaborasi",
        role: "Senior System Analyst & Full-Stack Engineer",
        desc: <>Berpengalaman selama 5 tahun dalam merancang arsitektur sistem <span className="font-bold text-slate-200">enterprise</span>, integrasi ESB, dan pengembangan aplikasi web, mobile, serta desktop yang <span className="font-bold text-slate-200">scalable</span>.</>,
        btn: "Lihat Rekam Jejak",
        btnDownload: "Unduh CV"
      },
      about: {
        title: "Tentang Saya",
        p1: "Dengan gelar Magister Ilmu Komputer dari Universitas Brawijaya (IPK 3.59), saya memiliki fondasi yang kuat di bidang Rekayasa Perangkat Lunak dan Sistem Informasi. Saya terbiasa membedah masalah yang kompleks dan mengubahnya menjadi aplikasi yang efisien, aman, dan mudah digunakan.",
        p2: <>Selain mendedikasikan waktu di dunia profesional dan <span className="italic text-slate-200 font-medium">ngoding</span> menggunakan <span className="italic text-cyan-400 font-medium">tech stack</span> seperti Laravel, Django, maupun Flutter, saya sangat menikmati aktivitas organisasi. Saat ini saya mengemban amanah sebagai Ketua Ikatan Alumni Pendidikan Teknologi Informasi (IAPTI), di mana kami rutin merancang program dan menyiapkan acara kebersamaan untuk mempererat tali silaturahmi.</>,
        p3: <>Di luar kesibukan tersebut, saya juga mengisi waktu luang dengan menikmati <span className="italic text-slate-200 font-medium">game</span> kompetitif, merakit desain virtual, atau mencoba navigasi di <span className="italic text-slate-200 font-medium">flight simulator</span>. Saya adalah individu yang cepat beradaptasi di lingkungan baru dan sangat menghargai komunikasi yang baik dalam sebuah tim.</>,
        skillsTitle: "Keahlian & Teknologi",
        progLang: "Bahasa Pemrograman"
      },
      exp: {
        title: "Pengalaman Profesional",
        jobs: [
          {
            title: "Senior System Analyst", company: "Indonesia Eximbank", date: "Maret 2025 – Sekarang", active: true,
            desc: [
              <>Memimpin analisis dan perencanaan implementasi arsitektur ESB menggunakan Software AG webMethods.</>,
              <>Menangani 10 project <span className="font-bold text-slate-200">enterprise</span> termasuk ESB Middleware, MPS, EOD Monitoring, Control Tower, E-Billing, hingga Inatrade.</>,
              <>Mereview dokumen TSD & FSD serta berkolaborasi dengan IT architect dan vendor pihak ketiga untuk solusi integrasi.</>
            ]
          },
          {
            title: "Full Stack Engineer", company: "PT. Mekar Investama Technology", date: "Juli 2024 – Desember 2024", active: false,
            desc: [
              <>Mengembangkan aplikasi pinjaman berbasis <span className="font-bold text-slate-200">mobile</span> (Flutter) dan backend (Django).</>,
              <>Mengoptimalkan <span className="font-bold text-slate-200">query</span> database (MySQL & PostgreSQL) untuk transaksi tinggi serta merancang sistem kontainerisasi via Docker.</>,
              <>Melakukan <span className="font-bold text-slate-200">code review</span> rutin dan mengelola alur kerja tim menggunakan Jira.</>
            ]
          },
          {
            title: "Senior Full Stack Developer", company: "PT. Anggara Tehnik (Melkhior)", date: "Sept 2023 – Mei 2024", active: false,
            desc: [
              <>Mengembangkan CMS Digital Lounge website untuk CIMB Niaga menggunakan CodeIgniter 3.</>,
              <>Mengembangkan aplikasi desktop pendukung menggunakan NW.js.</>,
              <>Mengoordinasikan <span className="font-bold text-slate-200">testing</span> dengan tim Marketing dan QA.</>
            ]
          },
          {
            title: "Full-Stack Developer", company: "CV. Aliensky.ID", date: "Des 2019 – Juli 2023", active: false,
            desc: [
              <>Membangun aplikasi <span className="font-bold text-slate-200">billing</span> warnet (C# & Django) dan sistem manajemen hotel (C# & Laravel).</>,
              <>Bertindak sebagai mentor teknis bagi mahasiswa magang dalam pengembangan sistem manajemen indekos berbasis Laravel, Flutter, dan MySQL.</>
            ]
          }
        ]
      },
      portfolio: {
        title: "Karya & Portofolio",
        items: [
          {
            name: "Portal Resmi LLDIKTI Wilayah VII",
            desc: "Pengembangan website resmi Lembaga Layanan Pendidikan Tinggi (LLDIKTI) Wilayah VII Kemdiktisaintek. Platform ini berfungsi sebagai pusat informasi, pengumuman, dan portal layanan terintegrasi bagi seluruh perguruan tinggi di wilayah Jawa Timur.",
            link: "https://lldikti7.kemdiktisaintek.go.id/",
            img: "/logo_lldikti7.png",
            tags: ["Web Development", "PHP / Laravel", "CMS Integration"]
          }
        ]
      },
      edu: {
        titleEdu: "Riwayat Pendidikan",
        titleOrg: "Organisasi",
        s2: "Magister Ilmu Komputer (S2)", s2Desc: "Sept 2020 – Juli 2023 | Asisten Peneliti bidang Rekayasa Perangkat Lunak.",
        s1: "S1 Pend. Teknologi Informasi", s1Desc: "Sept 2016 – Jan 2020 | Aktif dalam kepanitiaan dan organisasi kemahasiswaan.",
        org1: "Ketua IAPTI", org1Sub: "Ikatan Alumni Pendidikan Teknologi Informasi", org1Desc: "April 2023 – Sekarang | Merancang program kerja dan mewadahi aspirasi para alumni.",
        org2: "Ketua Badan Pengurus Internal", org2Sub: "Eksekutif Mahasiswa PTI (EMPTI)", org2Desc: "Des 2018 – Des 2019 | Memantau kinerja anggota dan merencanakan program pengembangan SDM."
      },
      contact: {
        title: "Mari Berkolaborasi.",
        desc: <>Terbuka untuk diskusi mengenai arsitektur sistem, peluang karier, atau sekadar berbagi <span className="font-bold text-slate-200">insight</span> seputar <span className="font-bold text-slate-200">software engineering</span>.</>,
        btnEmail: "Email Saya"
      }
    },
    en: {
      nav: { about: "About", exp: "Experience", port: "Portfolio", edu: "Education", contact: "Contact" },
      hero: {
        badge: "Available for New Opportunities",
        role: "Senior System Analyst & Full-Stack Engineer",
        desc: <>5+ years of experience in designing <span className="font-bold text-slate-200">enterprise</span> system architectures, ESB integrations, and developing <span className="font-bold text-slate-200">scalable</span> web, mobile, and desktop applications.</>,
        btn: "View Experience",
        btnDownload: "Download CV"
      },
      about: {
        title: "About Me",
        p1: "Holding a Master's Degree in Computer Science from Brawijaya University (GPA: 3.59), I possess a strong foundation in Software Engineering and Information Systems. I thrive on dissecting complex problems and transforming them into efficient, secure, and user-friendly applications.",
        p2: <>Beyond dedicating my time to the professional world and <span className="italic text-slate-200 font-medium">coding</span> using <span className="italic text-cyan-400 font-medium">tech stacks</span> like Laravel, Django, or Flutter, I highly enjoy organizational activities. Currently, I serve as the Chairman of the Information Technology Education Alumni Association (IAPTI), where we routinely design programs and organize gatherings to strengthen our alumni network.</>,
        p3: <>Outside of these commitments, I spend my free time enjoying competitive <span className="italic text-slate-200 font-medium">games</span>, building virtual designs, or navigating a <span className="italic text-slate-200 font-medium">flight simulator</span>. I am highly adaptable to new environments and deeply value good communication within a team.</>,
        skillsTitle: "Skills & Technologies",
        progLang: "Programming Languages"
      },
      exp: {
        title: "Professional Experience",
        jobs: [
          {
            title: "Senior System Analyst", company: "Indonesia Eximbank", date: "March 2025 – Present", active: true,
            desc: [
              <>Leading the analysis and planning of ESB architecture implementation using Software AG webMethods.</>,
              <>Handling 10 <span className="font-bold text-slate-200">enterprise</span> projects including ESB Middleware, MPS, EOD Monitoring, Control Tower, E-Billing, and Inatrade.</>,
              <>Reviewing TSD & FSD documents and collaborating with IT architects and third-party vendors for integration solutions.</>
            ]
          },
          {
            title: "Full Stack Engineer", company: "PT. Mekar Investama Technology", date: "July 2024 – Dec 2024", active: false,
            desc: [
              <>Developing a <span className="font-bold text-slate-200">mobile</span>-based loan application (Flutter) and backend (Django).</>,
              <>Optimizing database <span className="font-bold text-slate-200">queries</span> (MySQL & PostgreSQL) for high transactions and designing containerization systems via Docker.</>,
              <>Conducting regular <span className="font-bold text-slate-200">code reviews</span> and managing team workflows using Jira.</>
            ]
          },
          {
            title: "Senior Full Stack Developer", company: "PT. Anggara Tehnik (Melkhior)", date: "Sept 2023 – May 2024", active: false,
            desc: [
              <>Developing a CMS Digital Lounge website for CIMB Niaga using CodeIgniter 3.</>,
              <>Developing supporting desktop applications using NW.js.</>,
              <>Coordinating <span className="font-bold text-slate-200">testing</span> with the Marketing and QA teams.</>
            ]
          },
          {
            title: "Full-Stack Developer", company: "CV. Aliensky.ID", date: "Dec 2019 – July 2023", active: false,
            desc: [
              <>Building internet cafe <span className="font-bold text-slate-200">billing</span> applications (C# & Django) and hotel management systems (C# & Laravel).</>,
              <>Acting as a technical mentor for interns in developing a boarding house management system using Laravel, Flutter, and MySQL.</>
            ]
          }
        ]
      },
      portfolio: {
        title: "Featured Projects",
        items: [
          {
            name: "LLDIKTI Region VII Official Portal",
            desc: "Developed the official website for the Higher Education Service Institution (LLDIKTI) Region VII. This platform serves as a centralized hub for information, public announcements, and integrated services for all universities in East Java.",
            link: "https://lldikti7.kemdiktisaintek.go.id/",
            img: "/logo_lldikti7.png",
            tags: ["Web Development", "PHP / Laravel", "CMS Integration"]
          }
        ]
      },
      edu: {
        titleEdu: "Education History",
        titleOrg: "Organization",
        s2: "Master of Computer Science", s2Desc: "Sept 2020 – July 2023 | Research Assistant in Software Engineering.",
        s1: "Bachelor of IT Education", s1Desc: "Sept 2016 – Jan 2020 | Active in committees and student organizations.",
        org1: "Chairman of IAPTI", org1Sub: "Information Technology Education Alumni Association", org1Desc: "April 2023 – Present | Designing work programs and accommodating alumni aspirations.",
        org2: "Chairman of Internal Management Board", org2Sub: "IT Student Executive (EMPTI)", org2Desc: "Dec 2018 – Dec 2019 | Monitoring member performance and planning HR development programs."
      },
      contact: {
        title: "Let's Collaborate.",
        desc: <>Open for discussions regarding system architecture, career opportunities, or simply sharing <span className="font-bold text-slate-200">insights</span> about <span className="font-bold text-slate-200">software engineering</span>.</>,
        btnEmail: "Email Me"
      }
    }
  };

  const t = content[lang]; 

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500 selection:text-white scroll-smooth overflow-hidden">

      {/* Navbar */}
      <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="fixed w-full z-50 top-0 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-slate-100 tracking-tighter hover:text-cyan-400 transition cursor-pointer">
            Farabi <span className="text-cyan-500">.</span>
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#tentang" className="hover:text-cyan-400 transition">{t.nav.about}</a>
              <a href="#pengalaman" className="hover:text-cyan-400 transition">{t.nav.exp}</a>
              <a href="#portofolio" className="hover:text-cyan-400 transition">{t.nav.port}</a>
              <a href="#pendidikan" className="hover:text-cyan-400 transition">{t.nav.edu}</a>
              <a href="#kontak" className="hover:text-cyan-400 transition">{t.nav.contact}</a>
            </div>
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500 transition-colors text-xs font-bold text-slate-300">
              <span className={lang === 'id' ? 'text-cyan-400' : ''}>ID</span>
              <span className="text-slate-600">|</span>
              <span className={lang === 'en' ? 'text-cyan-400' : ''}>EN</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="relative max-w-5xl mx-auto px-6 pt-40 pb-24 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>

        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Teks Hero */}
          <motion.div className="w-full md:w-2/3 flex flex-col items-start" variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-slate-800 bg-slate-900 text-sm font-semibold text-cyan-400 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {t.hero.badge}
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-4 tracking-tight">
              Muhammad Farabi Ismail
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
              {t.hero.role}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              {t.hero.desc}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center mb-8 md:mb-0">
              <a href="#pengalaman" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                {t.hero.btn}
              </a>
              
              <a href="/cv-farabi.pdf" download="CV_Muhammad_Farabi_Ismail.pdf" className="flex items-center gap-2 border border-slate-700 hover:border-cyan-500 bg-slate-900 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                {t.hero.btnDownload}
              </a>

              <div className="flex gap-4 items-center ml-4 mt-4 sm:mt-0 w-full sm:w-auto">
                <a href="https://github.com/mfarabi155" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110 hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-farabi-ismail/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-all hover:scale-110 hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Foto Profil */}
          <motion.div className="w-full md:w-1/3 flex justify-center md:justify-end" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img src="/foto-profil.png" alt="Foto Profil Muhammad Farabi Ismail" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10 bg-slate-900" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Farabi+Ismail&background=0D1117&color=06B6D4&size=256" }} />
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="tentang" className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span> {t.about.title}
            </motion.h2>
            <div className="text-slate-400 leading-relaxed space-y-4 text-justify">
              <motion.p variants={fadeInUp}>{t.about.p1}</motion.p>
              <motion.p variants={fadeInUp}>{t.about.p2}</motion.p>
              <motion.p variants={fadeInUp}>{t.about.p3}</motion.p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-semibold text-slate-100 mb-6">{t.about.skillsTitle}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">{t.about.progLang}</h4>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'Python', 'C#', 'C++', 'Java', 'Kotlin', 'JavaScript', 'UML'].map(skill => (
                    <motion.span whileHover={{ scale: 1.1 }} key={skill} className="cursor-default px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-cyan-100">{skill}</motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Django', 'Flutter', 'Next.js', 'React.js', 'Express.js', 'Node.js', 'CodeIgniter 3', 'NW.js'].map(skill => (
                    <motion.span whileHover={{ scale: 1.1 }} key={skill} className="cursor-default px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-blue-100">{skill}</motion.span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Database & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'SQL Server', 'PostgreSQL', 'Firebase', 'Machine Learning (NLP)', 'Ontology Eng.'].map(skill => (
                    <motion.span whileHover={{ scale: 1.1 }} key={skill} className="cursor-default px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm text-slate-300">{skill}</motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="pengalaman" className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-500 rounded-full"></span> {t.exp.title}
        </motion.h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {t.exp.jobs.map((job, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${job.active ? 'is-active' : ''}`}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 ${job.active ? 'text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'text-slate-500'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-110`}>
                {job.active ? <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : <div className="w-2 h-2 bg-slate-600 rounded-full"></div>}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-slate-900 cursor-default">
                <div className="flex flex-col mb-4">
                  <span className={`${job.active ? 'text-cyan-400' : 'text-slate-100 group-hover:text-cyan-200'} font-bold text-xl transition-colors`}>{job.title}</span>
                  <span className="text-slate-300 font-medium">{job.company}</span>
                  <span className="text-slate-500 text-sm mt-1">{job.date}</span>
                </div>
                <ul className="text-slate-400 text-sm space-y-2 list-disc pl-4 text-justify leading-relaxed">
                  {job.desc.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portofolio" className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <span className="w-8 h-1 bg-green-500 rounded-full"></span> {t.portfolio.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.portfolio.items.map((port, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: idx * 0.2 }} className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)]">
              {/* Visual dengan Logo */}
              <div className="h-48 w-full bg-slate-800 relative overflow-hidden border-b border-slate-800 flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-slate-900 group-hover:scale-105 transition-transform duration-700"></div>
                <img src={port.img} alt={port.name} className="relative z-10 w-auto h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
              </div>
              
              {/* Teks */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-green-400 transition-colors">{port.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow text-justify">{port.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {port.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md border border-slate-700">{tag}</span>
                  ))}
                </div>

                <a href={port.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-green-500 hover:text-green-400 transition-colors">
                  Visit Website 
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education & Organization */}
      <section id="pendidikan" className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-900 grid md:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <span className="w-6 h-1 bg-purple-500 rounded-full"></span> {t.edu.titleEdu}
          </motion.h2>
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:-translate-y-1 hover:border-purple-500/50 transition-all duration-300 cursor-default">
              <h3 className="font-bold text-lg text-slate-100">{t.edu.s2}</h3>
              <p className="text-slate-400 text-sm mb-2">Universitas Brawijaya • GPA: 3.59</p>
              <p className="text-slate-500 text-sm">{t.edu.s2Desc}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-1 hover:border-purple-500/50 transition-all duration-300 cursor-default">
              <h3 className="font-bold text-lg text-slate-100">{t.edu.s1}</h3>
              <p className="text-slate-400 text-sm mb-2">Universitas Brawijaya • GPA: 3.03</p>
              <p className="text-slate-500 text-sm">{t.edu.s1Desc}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <span className="w-6 h-1 bg-pink-500 rounded-full"></span> {t.edu.titleOrg}
          </motion.h2>
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="bg-slate-900 border border-slate-800 p-6 rounded-xl border-l-4 border-l-pink-500 hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <h3 className="font-bold text-lg text-slate-100">{t.edu.org1}</h3>
              <p className="text-slate-400 text-sm mb-2">{t.edu.org1Sub}</p>
              <p className="text-slate-500 text-sm">{t.edu.org1Desc}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:-translate-y-1 hover:border-pink-500/50 transition-all duration-300 cursor-default">
              <h3 className="font-bold text-lg text-slate-100">{t.edu.org2}</h3>
              <p className="text-slate-400 text-sm mb-2">{t.edu.org2Sub}</p>
              <p className="text-slate-500 text-sm">{t.edu.org2Desc}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">{t.contact.title}</h2>
          <p className="text-lg text-slate-400 mb-10">{t.contact.desc}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:mfarabi155@gmail.com" className="bg-slate-100 hover:bg-white text-slate-950 px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto">
              {t.contact.btnEmail}
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/6282154729848" target="_blank" rel="noreferrer" className="border border-slate-700 hover:border-cyan-500 text-slate-300 px-8 py-4 rounded-full font-bold transition-colors w-full sm:w-auto">
              WhatsApp (+62)
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Farabi Ismail (SetsunaF). All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">West Jakarta, Jakarta 11530</p>
      </footer>

    </main>
  );
}