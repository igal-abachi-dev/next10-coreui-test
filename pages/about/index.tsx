import Head from "next/head";
import {CBreadcrumbRouter, CButton} from "@coreui/nextjs";
import styles from '../../styles/Home.module.scss';

export default function About() {
    const routes = [
    {path: '/', exact: true, name: 'Home'},
    {path: '/about', name: 'About'}
];
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CBreadcrumbRouter
                className="border-0 c-subheader-nav m-0 px-0 px-md-3"
                routes={routes}
            />
            <main className={styles.main}>
                about
            </main>

        </div>
    );
}
