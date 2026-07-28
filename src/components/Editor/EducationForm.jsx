import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import Input from '../UI/Input';

export default function EducationForm() {
  const { state, dispatch } = useResume();
  const [expandedId, setExpandedId] = React.useState(null);

  const addEducation = () => {
    dispatch({
      type: 'ADD_EDUCATION',
      payload: {
        degree: 'Degree Name',
        school: 'School Name',
        date: 'Year - Year'
      }
    });
    setExpandedId(Date.now());
  };

  const updateEducation = (id, field, value) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: { id, data: { [field]: value } }
    });
  };

  const removeEducation = (id) => {
    dispatch({ type: 'REMOVE_EDUCATION', payload: id });
  };

  return (
    <motion.div 
      className="editor-card"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <h3><GraduationCap size={16} /> Education</h3>
      <AnimatePresence>
        {state.education.map((edu) => (
          <motion.div
            key={edu.id}
            className="list-item"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="list-item-header"
              onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
            >
              <div>
                <span className="list-item-title">{edu.degree}</span>
                <span className="list-item-subtitle">{edu.school}</span>
              </div>
              <div className="list-item-actions">
                {expandedId === edu.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>
            
            <AnimatePresence>
              {expandedId === edu.id && (
                <motion.div
                  className="list-item-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="form-grid">
                    <Input
                      label="Degree"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    />
                    <Input
                      label="School"
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    />
                    <Input
                      label="Date Range"
                      value={edu.date}
                      onChange={(e) => updateEducation(edu.id, 'date', e.target.value)}
                    />
                  </div>
                  <motion.button
                    className="remove-btn"
                    onClick={() => removeEducation(edu.id)}
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
        onClick={addEducation}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Plus size={16} />
        Add Education
      </motion.button>
    </motion.div>
  );
}
