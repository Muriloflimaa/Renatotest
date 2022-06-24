import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'
import logoImg from '../../../public/images/logo.png'
import styles from './styles.module.scss'
import React, { useState, useEffect, FormEvent } from 'react' //
import { sendContactMail } from '../../services/sendMail'
import toast from 'react-hot-toast'

export function Header() {
    const [navbar, setNavbar] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [loading, setLoading] = useState(false)

    async function HandleSubmit(event: FormEvent) {
        event.preventDefault()

        if (loading) return

        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            toast.error('Preencha todos os campos para enviar sua mensagem !!!')
            return
        }

        try {
            setLoading(true)
            await sendContactMail(nome, email, mensagem)
            setEmail('')
            setNome('')
            setMensagem('')
            toast.success(
                'Mensagem enviada com sucesso, confira também sua caixa de span'
            )
        } catch (err) {
            toast.error('Ocorreu um erro tente novamente')
        } finally {
            setLoading(false)
        }

        // await sendContactMail(nome, email, mensagem)
    }
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <div className="w-44 h-auto">
                        <a href="https://www.instagram.com/muriloflimaa">
                            <Image
                                src={logoImg}
                                alt="Murilo Dev"
                                layout="intrinsic"
                                placeholder="blur"
                            />
                        </a>
                    </div>
                    <nav className="flex items-center">
                        <section className="MOBILE-MENU flex lg:hidden">
                            <div
                                className="HAMBURGER-ICON space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                            >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </div>

                            <div
                                className={
                                    isNavOpen
                                        ? styles.showMenuNav
                                        : styles.hideMenuNav
                                }
                            >
                                <div
                                    className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                    <ActiveLink
                                        activeClassName={styles.active}
                                        href="/"
                                    >
                                        <a>Home</a>
                                    </ActiveLink>
                                    <ActiveLink
                                        activeClassName={styles.active}
                                        href="/fotos"
                                    >
                                        <a>Fotos</a>
                                    </ActiveLink>
                                    <ActiveLink
                                        activeClassName={styles.active}
                                        href="/embed"
                                    >
                                        <a>Videos</a>
                                    </ActiveLink>
                                    <ActiveLink
                                        activeClassName={styles.active}
                                        href="/games"
                                    >
                                        <a>Games</a>
                                    </ActiveLink>
                                    <a
                                        href="#my-modal-2"
                                        className="btn h-2 leading-none flex !important hover:scale-125 ease-in-out duration-150 bg-verde text-black hover:text-white"
                                    >
                                        Enviar email
                                    </a>

                                    <div className="modal" id="my-modal-2">
                                        <div className="modal-box">
                                            <form
                                                className="w-3/ flex flex-col p-4 py-8 ronded"
                                                onSubmit={HandleSubmit}
                                            >
                                                <input
                                                    placeholder="Seu nome"
                                                    value={nome}
                                                    onChange={({ target }) =>
                                                        setNome(target.value)
                                                    }
                                                    className="border border-blue-300 text-black"
                                                    type="text"
                                                />
                                                <input
                                                    placeholder="Seu Email"
                                                    value={email}
                                                    onChange={({ target }) =>
                                                        setEmail(target.value)
                                                    }
                                                    className="border border-blue-300 mt-4 text-black"
                                                    type="text"
                                                />
                                                <textarea
                                                    placeholder="sua mensagem"
                                                    value={mensagem}
                                                    onChange={({ target }) =>
                                                        setMensagem(
                                                            target.value
                                                        )
                                                    }
                                                    className="border border-blue-400 mt-4 text-black"
                                                ></textarea>

                                                <button
                                                    className="flex justify-center font-bold uppercase w-full bg-verde text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300"
                                                    type="submit"
                                                    disabled={loading}
                                                >
                                                    Enviar
                                                </button>
                                                <div className="modal-action mb-0 p-0 flex items-center justify-center mx-auto rounded-xl h-[50px] w-full bg-red-600 hover:scale-105 ease-in-out duration-300">
                                                    <a
                                                        className="uppercase leading-0 text-white font-bold"
                                                        href="#"
                                                    >
                                                        Fechar Modal
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </section>

                        <ul className="DESKTOP-MENU hidden items-center gap-[3rem] lg:flex">
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/"
                            >
                                <a>Home</a>
                            </ActiveLink>
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/fotos"
                            >
                                <a>Fotos</a>
                            </ActiveLink>
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/embed"
                            >
                                <a>Videos</a>
                            </ActiveLink>
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/games"
                            >
                                <a>Games</a>
                            </ActiveLink>
                            <a
                                href="#my-modal-1"
                                className="btn h-2 leading-none flex !important hover:scale-125 ease-in-out duration-150 bg-verde text-black hover:text-white"
                            >
                                Enviar email
                            </a>

                            <div className="modal" id="my-modal-1">
                                <div className="modal-box">
                                    <form
                                        className="w-3/ flex flex-col p-4 py-8 ronded"
                                        onSubmit={HandleSubmit}
                                    >
                                        <input
                                            placeholder="Seu nome"
                                            value={nome}
                                            onChange={({ target }) =>
                                                setNome(target.value)
                                            }
                                            className="border border-blue-300 text-black"
                                            type="text"
                                        />
                                        <input
                                            placeholder="Seu Email"
                                            value={email}
                                            onChange={({ target }) =>
                                                setEmail(target.value)
                                            }
                                            className="border border-blue-300 mt-4 text-black"
                                            type="text"
                                        />
                                        <textarea
                                            placeholder="sua mensagem"
                                            value={mensagem}
                                            onChange={({ target }) =>
                                                setMensagem(target.value)
                                            }
                                            className="border border-blue-400 mt-4 text-black"
                                        ></textarea>

                                        <button
                                            className="flex justify-center font-bold uppercase w-full bg-verde text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            Enviar
                                        </button>
                                        <div className="modal-action mb-0 p-0 flex items-center justify-center mx-auto rounded-xl h-[50px] w-full bg-red-600 hover:scale-105 ease-in-out duration-300">
                                            <a
                                                className="uppercase leading-0 text-white font-bold"
                                                href="#"
                                            >
                                                Fechar Modal
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <div className="w-44 h-auto">
                        <a href="https://www.instagram.com/muriloflimaa">
                            <Image
                                src={logoImg}
                                alt="Murilo Dev"
                                layout="responsive"
                                placeholder="blur"
                            />
                        </a>
                    </div>
                    <div>
                        <nav className="flex mx-auto items-center">
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/"
                            >
                                <a>Home</a>
                            </ActiveLink>
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/fotos"
                            >
                                <a>Fotos</a>
                            </ActiveLink>
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/embed"
                            >
                                <a>Videos</a>
                            </ActiveLink>
                            <ActiveLink
                                activeClassName={styles.active}
                                href="/games"
                            >
                                <a>Games</a>
                            </ActiveLink>
                            <a
                                href="#my-modal-2"
                                className="btn w-[24%] h-2 leading-none flex !important hover:scale-125 ease-in-out duration-150 bg-verde text-black hover:text-white"
                            >
                                Enviar email
                            </a>
                            <div className="modal" id="my-modal-2">
                                <div className="modal-box">
                                    <form
                                        className="w-3/ flex flex-col p-4 py-8 ronded"
                                        onSubmit={HandleSubmit}
                                    >
                                        <input
                                            placeholder="Seu nome"
                                            value={nome}
                                            onChange={({ target }) =>
                                                setNome(target.value)
                                            }
                                            className="border border-blue-300 text-black"
                                            type="text"
                                        />
                                        <input
                                            placeholder="Seu Email"
                                            value={email}
                                            onChange={({ target }) =>
                                                setEmail(target.value)
                                            }
                                            className="border border-blue-300 mt-4 text-black"
                                            type="text"
                                        />
                                        <textarea
                                            placeholder="sua mensagem"
                                            value={mensagem}
                                            onChange={({ target }) =>
                                                setMensagem(target.value)
                                            }
                                            className="border border-blue-400 mt-4 text-black"
                                        ></textarea>

                                        <button
                                            className="flex justify-center font-bold uppercase w-full bg-verde text-xl py-3 mt-2 rounded-xl hover:scale-105 ease-in-out duration-300"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            Enviar
                                        </button>
                                        <div className="modal-action mb-0 p-0 flex items-center justify-center mx-auto rounded-xl h-[50px] w-full bg-red-600 hover:scale-105 ease-in-out duration-300">
                                            <a
                                                className="uppercase leading-0 text-white font-bold"
                                                href="#"
                                            >
                                                Fechar Modal
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header> */}
        </>
    )
}
