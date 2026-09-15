'use client';

import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

export default function Home() {
  // --- EXERCÍCIO 2 (Botão ON/OFF) ---
  const [isButtonOn, setIsButtonOn] = useState<boolean>(false);
  const handleToggle = (): void => {
    setIsButtonOn((prevState) => !prevState);
  };

  // --- EXERCÍCIO 3 (Validação de Nome) ---
  const [name, setName] = useState<string>('');
  const [nameFeedback, setNameFeedback] = useState<{ message: string; isError: boolean } | null>(null);

  const handleNameSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const trimmedName = name.trim();

    if (trimmedName.length < 2) {
      setNameFeedback({ message: 'O nome precisa ter pelo menos 2 caracteres', isError: true });
    } else if (trimmedName.length > 20) {
      setNameFeedback({ message: 'O nome precisa ter até 20 caracteres', isError: true });
    } else {
      setNameFeedback({ message: 'Formulário enviado com sucesso', isError: false });
    }
  };

  // --- EXERCÍCIO 6 (Validação no Re-render) ---
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  let passwordFeedback: { message: string; isError: boolean } | null = null;
  if (password !== '' || confirmPassword !== '') {
    if (password === confirmPassword) {
      passwordFeedback = { message: 'Formulário enviado com sucesso', isError: false };
    } else {
      passwordFeedback = { message: 'As senhas precisam ser iguais', isError: true };
    }
  }

  // --- EXERCÍCIO 7 (Inverter Texto) ---
  const [textToReverse, setTextToReverse] = useState<string>('');

  const handleReverseText = (): void => {
    const reversed = textToReverse.split('').reverse().join('');
    setTextToReverse(reversed);
  };

  // --- EXERCÍCIO 8 (Radio Buttons - Gender) ---
  const [selectedGender, setSelectedGender] = useState<string>('');

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedGender(e.target.value);
  };

  // --- EXERCÍCIO 9 (Select Box - Fruits) ---
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleFruitChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedFruit(e.target.value);
  };

  // --- EXERCÍCIO 10 (Tabs ativadas no Hover com onMouseEnter) ---
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'center',
        minHeight: '100vh',
        gap: '30px',
        padding: '40px 20px',
        fontFamily: 'sans-serif',
        backgroundColor: '#f9fafb',
      }}
    >
      <h1 style={{ fontSize: '28px', color: '#111827', marginBottom: '10px' }}>
        Painel de Exercícios React
      </h1>

      {/* EXERCÍCIO 2 */}
      <section style={cardStyle}>
        <h2 style={titleStyle}>Exercício 2: Botão ON / OFF</h2>
        <ToggleButton isOn={isButtonOn} onToggle={handleToggle} />
        <p style={{ marginTop: '12px', color: '#4b5563', fontSize: '14px' }}>
          Estado: <strong>{isButtonOn ? 'LIGADO' : 'DESLIGADO'}</strong>
        </p>
      </section>

      {/* EXERCÍCIO 3 */}
      <section style={cardStyle}>
        <h2 style={titleStyle}>Exercício 3: Validação de Nome</h2>
        <form onSubmit={handleNameSubmit} style={formStyle}>
          <div>
            <label htmlFor="nameInput" style={labelStyle}>Nome:</label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome..."
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>Enviar</button>
          {nameFeedback && (
            <p style={{ ...feedbackStyle, color: nameFeedback.isError ? '#ef4444' : '#22c55e' }}>
              {nameFeedback.message}
            </p>
          )}
        </form>
      </section>

      {/* EXERCÍCIO 6 */}
      <section style={cardStyle}>
        <h2 style={titleStyle}>Exercício 6: Senhas (No Re-render)</h2>
        <div style={formStyle}>
          <div>
            <label htmlFor="passwordInput" style={labelStyle}>Senha:</label>
            <input
              id="passwordInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha..."
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="confirmPasswordInput" style={labelStyle}>Confirmar Senha:</label>
            <input
              id="confirmPasswordInput"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirme sua senha..."
              style={inputStyle}
            />
          </div>
          {passwordFeedback && (
            <p style={{ ...feedbackStyle, color: passwordFeedback.isError ? '#ef4444' : '#22c55e' }}>
              {passwordFeedback.message}
            </p>
          )}
        </div>
      </section>

      {/* EXERCÍCIO 7 */}
      <section style={cardStyle}>
        <h2 style={titleStyle}>Exercício 7: Inverter Texto</h2>
        <div style={formStyle}>
          <div>
            <label htmlFor="reverseInput" style={labelStyle}>Texto:</label>
            <input
              id="reverseInput"
              type="text"
              value={textToReverse}
              onChange={(e) => setTextToReverse(e.target.value)}
              placeholder="Digite um texto..."
              style={inputStyle}
            />
          </div>
          <button type="button" onClick={handleReverseText} style={buttonStyle}>
            Inverter
          </button>
        </div>
      </section>

      {/* EXERCÍCIO 8 */}
      <section style={cardStyle}>
        <h2 style={{ ...titleStyle, color: '#2563eb' }}>Gender</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={selectedGender === 'Female'}
              onChange={handleGenderChange}
            />
            Female
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={selectedGender === 'Male'}
              onChange={handleGenderChange}
            />
            Male
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={selectedGender === 'Other'}
              onChange={handleGenderChange}
            />
            Other
          </label>
        </div>
      </section>

      {/* EXERCÍCIO 9 */}
      <section style={cardStyle}>
        <div style={{ width: '100%' }}>
          <select
            value={selectedFruit}
            onChange={handleFruitChange}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="" disabled hidden>
              Select a Fruit
            </option>
            <optgroup label="Fruits">
              <option value="Apple">Apple</option>
              <option value="Banana">Banana</option>
              <option value="Blueberry">Blueberry</option>
              <option value="Grapes">Grapes</option>
              <option value="Pineapple">Pineapple</option>
            </optgroup>
          </select>
        </div>
      </section>

      {/* EXERCÍCIO 10: Tabs ao passar o mouse (onMouseEnter) */}
      <section style={{ ...cardStyle, padding: '0', overflow: 'hidden', maxWidth: '450px' }}>
        {/* Cabeçalho das Tabs */}
        <div style={{ display: 'flex', width: '100%', backgroundColor: '#f3f4f6', borderBottom: '1px solid #d1d5db' }}>
          {[1, 2, 3].map((tabNum) => (
            <button
              key={tabNum}
              onMouseEnter={() => setActiveTab(tabNum)} // Ativa ao passar o cursor
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                borderRight: tabNum !== 3 ? '1px solid #d1d5db' : 'none',
                backgroundColor: activeTab === tabNum ? '#ffffff' : '#e5e7eb',
                fontWeight: activeTab === tabNum ? 'bold' : 'normal',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#374151',
                transition: 'background-color 0.2s ease',
              }}
            >
              Tab #{tabNum}
            </button>
          ))}
        </div>

        {/* Conteúdo da Tab */}
        <div style={{ padding: '20px', width: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#111827' }}>
            Tab content #{activeTab}
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#4b5563', lineHeight: '1.5' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </main>
  );
}

// Estilos Reutilizáveis
const cardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  border: '1px solid #949494',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(102, 102, 102, 0.51)',
  width: '100%',
  maxWidth: '350px',
};

const titleStyle: React.CSSProperties = {
  marginBottom: '16px',
  fontSize: '18px',
  color: '#060996',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 'px',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#000641',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  fontSize: '14px',
  borderRadius: '6px',
  border: '1px solid #7088ad',
  boxSizing: 'border-box',
  outline: 'none',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 16px',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '14px',
};

const feedbackStyle: React.CSSProperties = {
  fontWeight: 'bold',
  marginTop: '8px',
  textAlign: 'center',
  fontSize: '14px',
};