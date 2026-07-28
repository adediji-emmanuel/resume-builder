import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import { exportToPDF } from '../../utils/exportUtils';
import DeviceToggle from './DeviceToggle';

export default function Header() {
  const { state } = useResume();

  const handleExport = async () => {
    const resumeElement = document.getElementById('resume-preview');
    if (resumeElement) {
      await exportToPDF(resumeElement, `${state.personalInfo.fullName.replace(/\s+/g, '_')}_Resume`);
    }
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="header-left">
        <FileText size={22} strokeWidth={1.5} />
        <h1>Resume Builder</h1>
      </div>
      <div className="header-right">
        <DeviceToggle />
        <motion.button
          className="export-btn"
          onClick={handleExport}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Download size={16} />
          <span>Export PDF</span>
        </motion.button>
      </div>
    </motion.header>
  );
}
