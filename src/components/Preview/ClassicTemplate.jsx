import React from 'react';
import { motion } from 'framer-motion';

export default function ClassicTemplate({ data }) {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="template-classic">
      <header className="resume-header">
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
          className="contact-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[personalInfo.location, personalInfo.email, personalInfo.phone, personalInfo.website]
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
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
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
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
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
        <div className="skills-list">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-tag"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.03, type: 'spring', stiffness: 300 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}
