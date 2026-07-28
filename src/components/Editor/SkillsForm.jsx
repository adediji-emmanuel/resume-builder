import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Tag } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export default function SkillsForm() {
  const { state, dispatch } = useResume();

  const handleChange = (e) => {
    const skills = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
    dispatch({ type: 'UPDATE_SKILLS', payload: skills });
  };

  const skillsString = state.skills.join(', ');

  return (
    <motion.div 
      className="editor-card"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3><Wand2 size={16} /> Skills</h3>
      <div className="form-group">
        <label>Skills (comma separated)</label>
        <div className="input-with-icon">
          <Tag size={14} />
          <input
            type="text"
            value={skillsString}
            onChange={handleChange}
            placeholder="e.g. UI Design, Figma, JavaScript..."
          />
        </div>
        <span className="input-hint">Separate skills with commas</span>
      </div>
      <div className="skills-preview">
        {state.skills.map((skill, i) => (
          <motion.span
            key={skill}
            className="skill-chip"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
