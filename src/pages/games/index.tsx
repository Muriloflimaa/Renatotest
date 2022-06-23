import Head from 'next/head'

export default function Games() {
    return (
        <>
            <Head>
                <title>Games | Murilo</title>
            </Head>

            <a href="/jogo exe" download="name">
                Download Game
            </a>

            <div className="carousel w-full min-h-screen flex justify-center items-center">
                <div
                    id="slide1"
                    className="carousel-item relative w-full flex flex-col justify-center items-center gap-5"
                >
                    <h1 className="text-white font-bold text-2xl text-center flex justify-center">
                        Clique em alguma opção abaixo e o download irá começar!
                    </h1>
                    <a
                        className="bg-verde rounded-lg p-3 text-black font-bold uppercase hover:scale-125 ease-in-out duration-150"
                        href="https://drive.google.com/u/1/uc?id=14AZuJovCUSK_4dlF7KjjAixIfcFh27yG&export=download"
                        download="Game"
                    >
                        Link automático
                    </a>

                    <a
                        className="bg-verde rounded-lg p-3 text-black font-bold uppercase hover:scale-125 ease-in-out duration-150"
                        href="https://drive.google.com/file/d/14AZuJovCUSK_4dlF7KjjAixIfcFh27yG/view?usp=sharing"
                        download="Game"
                        target="_blank"
                    >
                        Link manual
                    </a>
                </div>
            </div>
        </>
    )
}
