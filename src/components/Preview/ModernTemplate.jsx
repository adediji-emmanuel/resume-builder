import React from 'react';
import { motion } from 'framer-motion';

export default function ModernTemplate({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="template-modern">
      <header className="resume-header">
        <motion.div 
          className="accent-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {personalInfo.fullName}
        </motion.h1>
        <motion.p 
          className="job-title"
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {personalInfo.jobTitle}
        </motion.p>
        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
          <span>{personalInfo.website}</span>
        </motion.div>
      </header>

      <section className="resume-section">
        <h2>About</h2>
        <p>{personalInfo.summary}</p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        {experience.map((exp, i) => (
          <motion.div 
            key={exp.id} 
            className="experience-item"
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="item-header">
              <h3>{exp.title}</h3>
              <span className="date-badge">{exp.date}</span>
            </div>
            <p className="company">{exp.company}</p>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        {education.map((edu, i) => (
          <motion.div 
            key={edu.id} 
            className="education-item"
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="item-header">
              <h3>{edu.degree}</h3>
              <span className="date-badge">{edu.date}</span>
            </div>
            <p className="school">{edu.school}</p>
          </motion.div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="skill-pill"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.04, type: 'spring' }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
