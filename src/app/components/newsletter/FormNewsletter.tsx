'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  nome: string;
  email: string;
  celular: string;
}

const FormNewsletter = () => {
  const { control, handleSubmit, register, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const resposta = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (resposta.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar os dados para a API:', resposta.statusText);
      }
    } catch (erro) {
      console.error('Erro ao enviar os dados:', erro);
    }
  };

  return (
    <div className="flex flex-col w-full items-start gap-6 rounded-2xl border border-solid border-gray-700 bg-[#131516] py-16 px-14 max-w-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-6 flex flex-col">
        <div className="flex flex-col p-13 pb-19 self-stretch rounded-4 border border-solid border-gray-700 bg-[#222729]">
          <input
            type="text"
            placeholder="Nome"
            {...register('nome', { required: true })}
            className="w-full p-2 text-[#878D96] placeholder-[#878D96] font-red-hat-display text-lg font-normal border border-solid border-gray-700 rounded-md bg-[#222729]"
          />
        </div>

        <div className="flex flex-col p-13 pb-19 self-stretch rounded-4 border border-solid border-gray-700 bg-[#222729]">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            {...register('email', { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
            className="w-full p-2 text-[#878D96] placeholder-[#878D96] font-red-hat-display text-lg font-normal border border-solid border-gray-700 rounded-md bg-[#222729]"
          />
          {errors.email && <p className="text-red-500">Insira um e-mail válido</p>}
        </div>

        <div className="flex flex-col p-13 pb-19 self-stretch rounded-4 border border-solid border-gray-700 bg-[#222729]">
          <input
            type="tel"
            placeholder="Celular"
            {...register('celular', { required: true, pattern: /^[0-9]{11}$/ })}
            className="w-full p-2 text-[#878D96] placeholder-[#878D96] font-red-hat-display text-lg font-normal border border-solid border-gray-700 rounded-md bg-[#222729]"
          />
          {errors.celular && <p className="text-red-500">Insira um número de celular válido</p>}
        </div>

        <button type="submit" className="flex h-12 p-2 pl-6 pr-6 justify-center items-center self-stretch rounded-4 border border-solid border-[#FAFAFA] bg-[#19C819] text-black text-lg font-normal whitespace-nowrap">
          QUERO ME INSCREVER
        </button>
      </form>
    </div>
  );
};

export default FormNewsletter;
