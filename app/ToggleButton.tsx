import React from 'react';

// Tipamos as propriedades (props) que o botão vai receber da página pai
interface ToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ isOn, onToggle }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: isOn ? '#22c55e' : '#ef4444', // Verde se ON, Vermelho se OFF
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button style={buttonStyle} onClick={onToggle}>
      {isOn ? 'Ligado' : 'Desligado'}
    </button>
  );
};

export default ToggleButton;