import Head from 'next/head';
import styles from '../styles/index.module.css';

export default function Index() {
    return (
        <div className={styles.content}>
            <Head>
                <title>Pyram3d Studio</title>
                <meta key="description" name="description" content="Pyram3d Studio is an app focused on teaching basic geometry, specifically for pyramids and triangles." />
                <link key="icon" rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <h1 className={styles.title}>
                    &#60;Pyram3d <span>Studio</span>/&#62;
                </h1>

                <p className={styles.description}>
                    Descubre conceptos básicos de geometría con nuestra aplicación móvil.
                </p>
                <a href="https://install.appcenter.ms/orgs/pyram3d/apps/pyram3d/distribution_groups/beta%20testers" className={styles.downloadLink}>
                    Descargar
                </a>
            </header>
        </div>
    )
}
