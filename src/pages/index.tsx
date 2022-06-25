import Head from 'next/head'
export default function Home() {
    return (
        <>
            <Head>
                <title>Home Murilo</title>
            </Head>
            <div className="flex flex-col text-center justify-between items-center mx-auto pt-36 pb-36 w-[80%] md:flex-row md:text-left">
                <section className="md:w-2/3 md:pr-10">
                    <span className="text-2xl font-semibold">
                        Seja bem vindo ao porfólio do Murilo | Aula do Renato
                    </span>
                    <h1 className="text-5xl leading-[4.5rem] font-bold mt-10">
                        Para acessar as páginas{' '}
                        <span className="uppercase text-verde">clique</span> nas
                        opções do menu acima{' '}
                    </h1>
                    <p className="text-2xl font-bold leading-[2.25rem] mt-[1.5rem]">
                        Site feito em Next / TS / JS / TailWind
                        <br />
                    </p>
                    <div className="flex gap-2 items-center justify-center md:justify-start hover:opacity-50 transition delay-100">
                        <img
                            className="w-4 h-4 flex items-center"
                            src="/images/174855.png"
                            alt="icon instagram"
                        />
                        <a
                            className="text-2xl text-verde font-bold"
                            href="https://www.instagram.com/muriloflimaa"
                            target="_blank"
                        >
                            Clique aqui para visitar meu IG
                            <br />
                        </a>
                    </div>
                </section>

                <img
                    className="pt-10 md:w-3/6 md:pt-0"
                    src="/images/undraw_developer_activity_re_39tg (1).svg"
                    alt="Girl coding"
                />
            </div>
        </>
    )
}
