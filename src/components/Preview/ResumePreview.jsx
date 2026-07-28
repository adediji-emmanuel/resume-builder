import React from 'react';
import { useResume } from '../../context/ResumeContext';
import ClassicTemplate from './ClassicTemplate';
import ModernTemplate from './ModernTemplate';
import MinimalTemplate from './MinimalTemplate';

const templates = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate
};

export default function ResumePreview() {
  const { state } = useResume();
  const Template = templates[state.template] || ClassicTemplate;

  return (
    <div className="preview-container">
      <div className={`resume-page ${state.device}`} id="resume-preview">
        <Template data={state} />
      </div>
    </div>
  );
}
