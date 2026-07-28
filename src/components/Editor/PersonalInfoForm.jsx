import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Globe, FileText } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';

export default function PersonalInfoForm() {
  const { state, dispatch } = useResume();
  const { personalInfo } = state;

  const handleChange = (field, value) => {
    dispatch({ 
      type: 'UPDATE_PERSONAL_INFO', 
      payload: { [field]: value } 
    });
  };

  return (
    <motion.div 
      className="editor-card"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.15 }}
    >
      <h3><User size={16} /> Personal Information</h3>
      <div className="form-grid">
        <Input
          label="Full Name"
          value={personalInfo.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          icon={<User size={14} />}
        />
        <Input
          label="Job Title"
          value={personalInfo.jobTitle}
          onChange={(e) => handleChange('jobTitle', e.target.value)}
          icon={<FileText size={14} />}
        />
        <Input
          label="Email"
          value={personalInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
          icon={<Mail size={14} />}
        />
        <Input
          label="Phone"
          value={personalInfo.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          icon={<Phone size={14} />}
        />
        <Input
          label="Location"
          value={personalInfo.location}
          onChange={(e) => handleChange('location', e.target.value)}
          icon={<MapPin size={14} />}
        />
        <Input
          label="Website"
          value={personalInfo.website}
          onChange={(e) => handleChange('website', e.target.value)}
          icon={<Globe size={14} />}
        />
      </div>
      <Textarea
        label="Professional Summary"
        value={personalInfo.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
        rows={4}
      />
    </motion.div>
  );
}
