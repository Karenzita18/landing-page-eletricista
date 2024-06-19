"use client";

import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
};

const FeedForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  let [isOpen, setIsOpen] = useState(false);
  const [mouse, setMouse] = useState("");
  const [telefone, setTelefone] = useState("");
  const [msgPP, setMsgPP] = useState("hidden");
  const [pp, setPP] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setMouse("cursor-progress");

    const envioEmail = {
      nome: data.nome,
      email: data.email,
    };

    fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost:3000",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setMouse("");
        setIsOpen(true);
        setTelefone("");
        reset();
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        setTelefone("");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="relative">
                <label htmlFor="nome" className="text-brand-100 relative font-medium">
                    Nome
                </label>
                <input
                    {...register("nome", {
                    required: "Nome é obrigatório",
                    })}
                    type="text"
                    placeholder="Digite seu nome"
                    className="border-2 border-zinc-200 w-full pt-3 pb-1 px-3 outline-none focus:border-brand-200 transition duration-500 rounded-md "
                />
                {errors.nome && (
                    <p className={"absolute translate-y-full bottom-0 text-brand-300 text-xs"}>
                    {errors.nome.message}
                    </p>
                )}
                </div>

                <div className="relative">
                    <label htmlFor="email" className="text-brand-100 relative font-medium">
                        E-mail
                    </label>
                    <input
                        {...register("email", {
                        required: "E-mail é obrigatório",
                        })}
                        type="text"
                        placeholder="Digite seu e-mail"
                        className="border-2 border-zinc-200 w-full pt-3 pb-1 px-3 outline-none focus:border-brand-200 transition duration-500 rounded-md "
                    />
                    {errors.email && (
                        <p className={"absolute translate-y-full bottom-0 text-brand-300 text-xs"}>
                        {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="relative">
                    <label htmlFor="telefone" className="text-brand-100 relative font-medium">
                        Telefone
                    </label>
                    <input
                        type="tel"
                        {...register('telefone', {
                        required: 'Digite seu número de telefone',
                        pattern: {
                            value: /^[0-9]+/g,
                            message: 'Número de telefone inválido',
                        },
                        })}
                        className="border-2 border-zinc-200 w-full pt-3 pb-1 px-3 outline-none focus:border-brand-200 transition duration-500 rounded-md "
                        placeholder="Digite seu telefone"
                    />
                    {errors.telefone && (
                        <p className={"absolute translate-y-full bottom-0 text-brand-300 text-xs"}>
                        {errors.telefone.message}
                        </p>
                    )}
                </div>

                <div className="relative">
                    <label htmlFor="assunto" className="text-brand-100 relative font-medium">
                        Assunto
                    </label>
                    <input
                        {...register("assunto", {
                        required: "Assunto é obrigatório",
                        })}
                        type="text"
                        placeholder="Digite seu assunto"
                        className="border-2 border-zinc-200 w-full pt-3 pb-1 px-3 outline-none focus:border-brand-200 transition duration-500 rounded-md "
                    />
                    {errors.assunto && (
                        <p className={"absolute translate-y-full bottom-0 text-brand-300 text-xs"}>
                        {errors.assunto.message}
                        </p>
                    )}
                    </div>
                </div>

            <div className="relative pt-3 mt-2">
                <label htmlFor="mensagem" className="text-brand-100 relative font-medium">
                    Mensagem
                </label>
                <textarea
                    {...register("mensagem", {
                    required: "Mensagens é obrigatório",
                    })}
                    placeholder="Digite sua mensagem"
                    className="border-2 border-zinc-200 w-full pt-3 pb-1 px-3 outline-none focus:border-brand-200 transition duration-500 rounded-md "
                />
                {errors.mensagem && (
                    <p
                    className={
                        "absolute translate-y-full bottom-0 text-brand-300 text-xs"
                    }
                    >
                    {errors.mensagem.message}
                    </p>
                )}
            </div>
            <div className="flex gap-x-1 flex-nowrap mt-5 text-faiz-100 text-sm">
                <input
                    type="checkbox"
                    name="pp"
                    onChange={(e) => setPP(e.target.checked)}
                />
                <label htmlFor="pp">
                    Eu concordo com as{" "}
                <a
                    href="/"
                    target="_blank"
                    className="underline text-brand-50 hover:text-faiz-300 transition duration-500"
                >
                    Políticas de Privacidade
                </a>
                </label>
            </div>
            <p className={`${msgPP} text-faiz-400 text-sm mt-1`}>
                Para enviar, você precisa concordar as com as políticas de privacidade.
            </p>

            <div className="mt-8 hover:-translate-y-2 transition duration-500 flex place-content-center">
                <button className="py-4 px-5 w-48 block text-white shadow-lg text-lg text-center font-bold bg-brand-200 hover:bg-brand-300 transition duration-500">
                Enviar
                </button>
            </div>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                                <div className="mt-2">
                                    <h2 className="font-semibold text-brand-300 text-center">
                                    Entraremos em contato com você em breve.
                                    </h2>
                                </div>

                                <div className="mt-4">
                                    <button
                                    type="button"
                                    className="flex max-w-max  bg-brand-300 rounded-md duration-500 hover:shadow-2xl text-white py-2 px-6 md:px-10 font-semibold shadow-xl mt-3 group mx-auto"
                                    onClick={closeModal}
                                    >
                                    OK
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </form>
  );
};

export default FeedForm;