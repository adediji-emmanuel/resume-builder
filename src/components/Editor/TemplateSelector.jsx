import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Minimize2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const templates = [
  { id: 'classic', label: 'Classic', icon: Layout, desc: 'Traditional & professional' },
  { id: 'modern', label: 'Modern', icon: Palette, desc: 'Bold & contemporary' },
  { id: 'minimal', label: 'Minimal', icon: Minimize2, desc: 'Clean & simple' }
];

export default function TemplateSelector() {
  const { state, dispatch } = useResume();

  return (
    <motion.div 
      className="editor-card"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3>Choose Template</h3>
      <div className="template-grid">
        {templates.map(({ id, label, icon: Icon, desc }) => (
          <motion.div
            key={id}
            className={`template-card ${state.template === id ? 'active' : ''}`}
            onClick={() => dispatch({ type: 'SET_TEMPLATE', payload: id })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon size={20} strokeWidth={1.5} />
            <div className="template-info">
              <span className="template-name">{label}</span>
              <span className="template-desc">{desc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
