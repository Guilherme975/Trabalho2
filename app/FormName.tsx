'use client';

import React, { useState } from 'react';

export const FormName: React.FC = () => {
  // Estado para armazenar o texto digitado no input
  const [name, setName] = useState<string>('');

  // Estado para armazenar o objeto de resultado da validação
  const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    const trimmedName = name.trim();

    // Validações
    if (trimmedName.length < 2) {
      setFeedback({
        message: 'O nome precisa ter pelo menos 2 caracteres',
        isError: true,
      });
    } else if (trimmedName.length > 20) {
      setFeedback({
        message: 'O nome precisa ter até 20 caracteres',
        isError: true,
      });
    } else {
      setFeedback({
        message: 'Formulário enviado com sucesso',
        isError: false,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        width: '300px',
      }}
    >
      <div style={{ width: '100%' }}>
        <label htmlFor="nameInput" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
          Nome:
        </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome..."
          style={{
            width: '100%',
            padding: '8px 12px',
            fontSize: '14px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px 16px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Enviar
      </button>

      {/* Exibição da mensagem logo abaixo do botão de enviar */}
      {feedback && (
        <p
          style={{
            color: feedback.isError ? '#ef4444' : '#22c55e', // Vermelho para erro, Verde para sucesso
            fontWeight: 'bold',
            marginTop: '8px',
            textAlign: 'center',
          }}
        >
          {feedback.message}
        </p>
      )}
    </form>
  );
};

export default FormName;