import React from 'react';
import { motion } from 'framer-motion';

export default function MinimalTemplate({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="template-minimal">
      <header className="resume-header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {personalInfo.fullName}
        </motion.h1>
        <motion.p 
          className="job-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {personalInfo.jobTitle}
        </motion.p>
        <motion.div 
          className="contact-minimal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {[personalInfo.email, personalInfo.phone, personalInfo.location, personalInfo.website]
            .filter(Boolean).join(' · ')}
        </motion.div>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>{personalInfo.summary}</p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        {experience.map((exp, i) => (
          <motion.div 
            key={exp.id} 
            className="experience-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <div className="item-header">
              <h3>{exp.title}</h3>
              <span className="date">{exp.date}</span>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <div className="item-header">
              <h3>{edu.degree}</h3>
              <span className="date">{edu.date}</span>
            </div>
            <p className="school">{edu.school}</p>
          </motion.div>
        ))}
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-inline">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
            >
              {skill}{i < skills.length - 1 ? ' · ' : ''}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}
