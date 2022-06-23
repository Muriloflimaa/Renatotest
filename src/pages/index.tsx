import Head from 'next/head'
export default function Home() {
    return (
        <>
            <Head>
                <title>Home Murilo</title>
            </Head>
            <div className="flex flex-col text-center justify-between items-center mx-auto pt-36 w-[80%] md:flex-row md:text-left">
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
                </section>

                <img
                    className="pt-10 md:pt-0"
                    src="/images/avatar.svg"
                    alt="Girl coding"
                />
            </div>
        </>
    )
}
