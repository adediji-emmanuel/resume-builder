import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

const devices = [
  { id: 'desktop', icon: Monitor, label: 'Desktop' },
  { id: 'tablet', icon: Tablet, label: 'Tablet' },
  { id: 'mobile', icon: Smartphone, label: 'Mobile' }
];

export default function DeviceToggle() {
  const { state, dispatch } = useResume();

  return (
    <div className="device-toggle">
      {devices.map(({ id, icon: Icon, label }) => (
        <motion.button
          key={id}
          className={`device-btn ${state.device === id ? 'active' : ''}`}
          onClick={() => dispatch({ type: 'SET_DEVICE', payload: id })}
          whileTap={{ scale: 0.92 }}
          title={label}
        >
          <Icon size={16} strokeWidth={1.5} />
        </motion.button>
      ))}
    </div>
  );
}
