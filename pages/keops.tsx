import styles from './../styles/index.module.css';
import Head from 'next/head';

export default function Keops() {
    return (
        <div className={styles.content}>
            <Head>
                <title>Pyram3d Studio - Keops</title>
                <meta key="description" name="description" content="Pyram3d Studio is an app focused on teaching basic geometry, specifically for pyramids and triangles." />
                <link key="icon" rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <header>
                <h1 className={styles.title}>
                    &#60;Pirámide de <span>Keops</span>/&#62;
                </h1>
            </header>
        </div>
    )
}