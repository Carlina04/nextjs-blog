import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Cat ipsum dolor sit amet, burmese abyssinian , but lynx. Leopard tabby kitty. Lion american bobtail so scottish fold, so burmese yet tabby or bengal or sphynx. Egyptian mau kitty so jaguar. Tiger kitty and cornish rex for siamese so munchkin or tiger. Bengal. Leopard cougar so donskoy. Jaguar birman and norwegian forest lion yet persian persian. Tabby mouser tom kitten donskoy. Jaguar savannah british shorthair panther yet bobcat. Siamese kitten turkish angora but panther yet kitten.</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}