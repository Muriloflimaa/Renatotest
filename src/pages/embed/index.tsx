import Head from 'next/head'
import styles from './styles.module.scss'

export default function Videos() {
    return (
        <>
            <Head>
                <title>Games | Murilo</title>
            </Head>
            <div className="flex justify-center items-center min-h-screen">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className={styles.box_embed}>
                            <div className={styles.embed_depoiments}>
                                <div className={styles.embed_dep}>
                                    <iframe
                                        placeholder="blur"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/IyTsxitQaAY"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className={styles.box_embed}>
                            <div className={styles.embed_depoiments}>
                                <div className={styles.embed_dep}>
                                    <iframe
                                        placeholder="blur"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/FBGWWr_UnMU"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className={styles.box_embed}>
                            <div className={styles.embed_depoiments}>
                                <div className={styles.embed_dep}>
                                    <iframe
                                        placeholder="blur"
                                        loading="lazy"
                                        src="https://www.youtube.com/embed/kGGRX6Id8Xg"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
