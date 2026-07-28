import React, { createContext, useContext, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ResumeContext = createContext();

const initialState = {
  personalInfo: {
    fullName: 'Alex Morgan',
    jobTitle: 'Senior Product Designer',
    email: 'alex.morgan@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexmorgan.design',
    summary: 'Creative product designer with 8+ years of experience crafting user-centered digital experiences. Passionate about solving complex problems through elegant, intuitive design solutions.'
  },
  experience: [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'TechCorp Inc.',
      date: '2021 - Present',
      description: 'Lead design for core product suite. Established design system used across 5 product teams. Improved user satisfaction scores by 34%.'
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'StartupXYZ',
      date: '2018 - 2021',
      description: 'Designed mobile app from concept to launch. Conducted user research with 200+ participants. Achieved 4.8 star App Store rating.'
    }
  ],
  education: [
    {
      id: 1,
      degree: 'BFA in Interaction Design',
      school: 'California College of the Arts',
      date: '2014 - 2018'
    }
  ],
  skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Design Systems', 'HTML/CSS', 'JavaScript', 'React'],
  template: 'classic',
  device: 'desktop'
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };
    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, { ...action.payload, id: Date.now() }] };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map(exp => exp.id === action.payload.id ? { ...exp, ...action.payload.data } : exp)
      };
    case 'REMOVE_EXPERIENCE':
      return { ...state, experience: state.experience.filter(exp => exp.id !== action.payload) };
    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, { ...action.payload, id: Date.now() }] };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map(edu => edu.id === action.payload.id ? { ...edu, ...action.payload.data } : edu)
      };
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter(edu => edu.id !== action.payload) };
    case 'UPDATE_SKILLS':
      return { ...state, skills: action.payload };
    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };
    case 'SET_DEVICE':
      return { ...state, device: action.payload };
    case 'LOAD_STATE':
      return action.payload;
    default:
      return state;
  }
}

export function ResumeProvider({ children }) {
  const [savedState, setSavedState] = useLocalStorage('resumeData', null);
  const [state, dispatch] = useReducer(resumeReducer, savedState || initialState);

  React.useEffect(() => {
    setSavedState(state);
  }, [state, setSavedState]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) throw new Error('useResume must be used within ResumeProvider');
  return context;
}
