import Head from "next/head";
import {CBreadcrumbRouter, CButton} from "@coreui/nextjs";
import styles from '../../../styles/Home.module.scss';
import {useRouter} from "next/router";

export default function Id() {
    const router = useRouter();
    const {id} = router.query;
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
                <h1>id: {id}</h1>
            </main>

        </div>
    );
}
