import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useResume } from '../../context/ResumeContext';
import PersonalInfoForm from '../Editor/PersonalInfoForm';
import ExperienceForm from '../Editor/ExperienceForm';
import EducationForm from '../Editor/EducationForm';
import SkillsForm from '../Editor/SkillsForm';
import TemplateSelector from '../Editor/TemplateSelector';
import ResumePreview from '../Preview/ResumePreview';

export default function SplitLayout() {
  const { state } = useResume();
  const [activeTab, setActiveTab] = React.useState('editor');

  return (
    <div className="split-layout">
      {/* Mobile Tab Toggle */}
      <div className="mobile-tabs">
        <button 
          className={activeTab === 'editor' ? 'active' : ''} 
          onClick={() => setActiveTab('editor')}
        >
          Editor
        </button>
        <button 
          className={activeTab === 'preview' ? 'active' : ''} 
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </div>

      {/* Editor Panel */}
      <AnimatePresence mode="wait">
        {(activeTab === 'editor' || window.innerWidth > 768) && (
          <motion.aside
            key="editor"
            className="editor-panel"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TemplateSelector />
            <PersonalInfoForm />
            <ExperienceForm />
            <EducationForm />
            <SkillsForm />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Preview Panel */}
      <AnimatePresence mode="wait">
        {(activeTab === 'preview' || window.innerWidth > 768) && (
          <motion.main
            key="preview"
            className={`preview-panel ${state.device}`}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResumePreview />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
