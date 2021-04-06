import Head from "next/head";
import {useRouter} from 'next/router';
import {CBreadcrumbRouter, CButton} from "@coreui/nextjs";
import styles from '../../../styles/Home.module.scss';

export default function Entity() {
    const router = useRouter();
    const {id, entity} = router.query;
    // /users/:id/:entity(posts|comments)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <CBreadcrumbRouter
                className="border-0 c-subheader-nav m-0 px-0 px-md-3"
            />
            <main className={styles.main}>
                <h1>id: {id}</h1>
                <h1>entity: {entity}</h1>
            </main>

        </div>
    );
}
