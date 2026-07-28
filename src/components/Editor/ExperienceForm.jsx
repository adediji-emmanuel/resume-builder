import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';

export default function ExperienceForm() {
  const { state, dispatch } = useResume();
  const [expandedId, setExpandedId] = React.useState(null);

  const addExperience = () => {
    dispatch({
      type: 'ADD_EXPERIENCE',
      payload: {
        title: 'New Position',
        company: 'Company Name',
        date: 'Year - Year',
        description: 'Describe your responsibilities and achievements.'
      }
    });
    setExpandedId(Date.now());
  };

  const updateExperience = (id, field, value) => {
    dispatch({
      type: 'UPDATE_EXPERIENCE',
      payload: { id, data: { [field]: value } }
    });
  };

  const removeExperience = (id) => {
    dispatch({ type: 'REMOVE_EXPERIENCE', payload: id });
  };

  return (
    <motion.div 
      className="editor-card"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h3><Briefcase size={16} /> Experience</h3>
      <AnimatePresence>
        {state.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="list-item"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="list-item-header"
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div>
                <span className="list-item-title">{exp.title}</span>
                <span className="list-item-subtitle">{exp.company}</span>
              </div>
              <div className="list-item-actions">
                {expandedId === exp.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>
            
            <AnimatePresence>
              {expandedId === exp.id && (
                <motion.div
                  className="list-item-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="form-grid">
                    <Input
                      label="Job Title"
                      value={exp.title}
                      onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                    />
                    <Input
                      label="Company"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    />
                    <Input
                      label="Date Range"
                      value={exp.date}
                      onChange={(e) => updateExperience(exp.id, 'date', e.target.value)}
                    />
                  </div>
                  <Textarea
                    label="Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    rows={3}
                  />
                  <motion.button
                    className="remove-btn"
                    onClick={() => removeExperience(exp.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Trash2 size={14} />
                    Remove
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <motion.button
        className="add-btn"
        onClick={addExperience}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Plus size={16} />
        Add Experience
      </motion.button>
    </motion.div>
  );
}
