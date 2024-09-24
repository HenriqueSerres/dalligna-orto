'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 px-4">
      <h1 className="text-3xl font-bold text-blue-950 mb-6 text-center">Entre em Contato</h1>

      <form className="w-full max-w-md bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Mensagem
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Escreva sua mensagem"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar E-mail
          </button>
        </div>
      </form>

      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-950 mb-4 text-center">Ou entre em contato via WhatsApp</h2>
        <a
          href="https://wa.me/5551992539490"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full w-full max-w-xs shadow-md mb-8"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
