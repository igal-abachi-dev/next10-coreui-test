import Head from "next/head";
import {CButton} from "@coreui/nextjs";
import styles from '../styles/Home.module.scss';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                about
            </main>

        </div>
    );
}
