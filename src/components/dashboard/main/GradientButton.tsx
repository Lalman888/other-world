import React from 'react';

type GradientButtonProps = {
  label: React.ReactNode;
  onClick: () => void;
  width?: string;
  height?: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({ label, onClick, width = '236px', height = '54px' }) => {
  return (
    <button
      style={{
        display: 'flex',
        width: width,
        height: height,
        // padding: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px',
        borderRadius: '105px',
        border: '1.314px solid #000',
        background: 'linear-gradient(180deg, #18F7A7 -18.52%, #078456 89.19%)',
        boxShadow:
          '0px 8px 0px 0px rgba(0, 0, 0, 0.40), 0px -7px 0px 0px rgba(0, 0, 0, 0.25) inset',
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: '18px',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        textShadow: '0 1px 0 rgba(0,0,0,0.4)',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default GradientButton;