import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="content-overlay">
      {/* Left Side (Sticky Hero) */}
      <div className="hero-section">
        <div>
          <div className="subtitle">SOHIL | CAFFIENATED DEVELOPER</div>
          <div style={{ marginTop: '2rem' }}></div>
        </div>

        <motion.div style={{ opacity: heroOpacity }}>
          <h1>MY PERSONAL<br />PORTFOLIO</h1>
        </motion.div>

        <div>
          <p style={{ textTransform: 'uppercase', fontWeight: 600, color: 'white', maxWidth: '400px' }}>
            FULL-STACK DEVELOPER, UI/UX DESIGNER, AND TECH STRATEGIST
          </p>
          <div className="nav-footer" style={{ marginTop: '4rem' }}>
            <span>© SOHIL 2026</span>
            <div className="nav-links">
              <a href="#about">ABOUT</a>
              <a href="#projects">PROJECTS</a>
              <a href="#contact">CONTACT</a>
              <a href="https://www.linkedin.com/in/sohil-chavhan-3a8307406/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="https://github.com/SohilChavhan" target="_blank" rel="noopener noreferrer">GITHUB</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Scrollable Content) */}
      <div className="scroll-section">

        {/* About Me Section */}
        <section id="about">
          <h2 className="section-title">ABOUT ME</h2>
          <p style={{ marginBottom: '1rem' }}>
            Hi, I'm <strong style={{ color: 'var(--text-main)' }}>Sohil Chavhan</strong>, a 2nd-year B.Tech student studying CSE-AIML at VIT Bhopal University. I am always hungry for a learning experience and pride myself on being a "live with no regrets" kinda guy.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            My core skills include Python development, C++ development, Machine Learning, and AI. Beyond the code, I draw inspiration from the armed forces, the gym and music. I have a strong inclination towards creating something entirely new and thrive when leading a small, driven team.
          </p>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy">
          <h2 className="section-title">MY PHILOSOPHY</h2>
          <p>
            Driven by clean code, intuitive design, and an obsession with the intersection of technology and human experience. I build tools that empower and inspire, leveraging modern web technologies, AI, and strategic thinking.
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="projects">
          <h2 className="section-title">PORTFOLIO</h2>
          <div className="portfolio-grid">

            <Link to="/project/krater" className="project-card">
              <div className="glass-card" style={{ padding: 0 }}>
                <img src="/krater_thumb.png" alt="KRATER Project" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <h3 style={{ position: 'absolute', zIndex: 1, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>KRATER</h3>
              </div>
              <p style={{ fontSize: '0.9rem' }}>AI-Powered Infrastructure Management for Safer Roads.</p>
            </Link>

            <Link to="/project/sahara" className="project-card">
              <div className="glass-card" style={{ padding: 0 }}>
                <img src="/sahara_thumb.png" alt="Sahara Project" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <h3 style={{ position: 'absolute', zIndex: 1, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>SAHARA</h3>
              </div>
              <p style={{ fontSize: '0.9rem' }}>Scheme-Aware Health Access & Relief Assistant.</p>
            </Link>

          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">CAPABILITIES INCLUDE:</h2>
          <p style={{ maxWidth: '300px' }}>
            Full-Stack Web Development, UI/UX Design, Tech Strategy, Blockchain Architectures, AI & ML Solutions, Data Engineering.
          </p>

          <div className="id-card">
            <img src="/sohil-pic.jpeg" alt="Sohil" />
            <div className="id-card-caption">SOHIL | ASPIRING AI/ML ENGINEER</div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
              <strong>Email:</strong> <a href="mailto:sohilchavhan22@gmail.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>sohilchavhan22@gmail.com</a>
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem' }}>
              <strong>Phone:</strong> <a href="tel:+917770011695" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>+91 7770011695</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
