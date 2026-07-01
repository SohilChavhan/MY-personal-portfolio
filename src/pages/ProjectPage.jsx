import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectData = {
  krater: {
    title: "KRATER",
    subtitle: "AI-POWERED INFRASTRUCTURE MANAGEMENT FOR SAFER ROADS",
    description: `The Challenge of Infrastructure Maintenance
- Slow Reporting: Citizens lack an intuitive, fast, and accessible way to report road hazards.
- Inefficient Inspections: Manual road inspections are time-consuming, expensive, and prone to human error.
- Resource Mismanagement: Authorities struggle to prioritize repairs and estimate budgets accurately without immediate, data-backed insights.

Why Krater?
Krater is a dedicated B2G (Business-to-Government) tool with built-in bureaucratic accountability. It uses automated triage using YOLOv8 to calculate damage and budget before human review.

Key Features:
- AI-Analysis: Integrated Computer Vision (YOLOv8) to analyze user uploads, automatically calculating damage dimensions and generating instant budget estimates.
- Deep Localization and ChatBot: Full support for 14 different languages and a live Llama-3 AI agent reading real-time FireBase databases to provide citizens with localized, contextual updates.
- Smart Workflow: Secure database workflow requiring mutual sign-off from both Admin and Field-Inspector before unlocking a ticket or allocating budgets.`,
    link: "https://krater-murex.vercel.app/",
    thumbnail: "/krater_thumb.png"
  },
  sahara: {
    title: "SAHARA",
    subtitle: "Scheme-Aware Health Access & Relief Assistant",
    description: `Problem Statement: HCI-03
In many healthcare systems globally — whether multi-payer insurance markets, government-funded health services, or mixed public-private models — patients face significant administrative barriers before they can access specialist treatments, medications, or procedures.

These barriers take different forms: pre-approval workflows in insurance-based systems, referral bottlenecks in public health systems, formulary restrictions in pharmacy systems, and documentation-heavy certification processes in regulated medical contexts. 

In each case, the administrative burden delays care, exhausts clinical staff, and creates inequitable access — with disadvantaged patients least equipped to navigate the system.

Solution:
SAHARA is designed to reduce the administrative friction between a clinical decision to treat and the patient's actual receipt of that treatment. It tackles administrative bottlenecks with approaches that are scalable, auditable, and protective of patient rights using automation, process redesign, and interoperability frameworks.`,
    link: "https://saharademo.vercel.app/",
    thumbnail: "/sahara_thumb.png"
  }
};

function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="content-overlay" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/" style={{ color: 'var(--accent-color)', marginTop: '1rem' }}>Go Back</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="content-overlay" 
      style={{ flexDirection: 'column', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}
    >
      <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← BACK TO PORTFOLIO
      </Link>
      
      <div className="glass-card" style={{ padding: 0, height: '400px', marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={project.thumbnail} alt={project.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '12px' }} />
      </div>

      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{project.title}</h1>
      <div className="subtitle" style={{ color: 'var(--accent-color)', marginBottom: '2rem' }}>{project.subtitle}</div>

      <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
        {project.description}
      </div>

      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: 'var(--accent-color)',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textAlign: 'center'
        }}
      >
        View Live Project
      </a>
    </motion.div>
  );
}

export default ProjectPage;
