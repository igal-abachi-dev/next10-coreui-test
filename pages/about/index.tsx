import Head from "next/head";
import {CBreadcrumbRouter, CButton} from "@coreui/nextjs";
import styles from '../../styles/Home.module.scss';
import {routes} from '../_routes';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CBreadcrumbRouter
                className="border-0 c-subheader-nav m-0 px-0 px-md-3"
            />
            <main className={styles.main}>
                about
            </main>

        </div>
    );
}
