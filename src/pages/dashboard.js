
import Link from "next/link";
import styles from '@/styles/dashboard.module.css'
import Head from 'next/head'


function Dashboard(){
    return ( 
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Sign In" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.navbarcontainer}>
                    <div className={styles.navbar}>
                        <Link href= "/dashboard" className={styles.navbarcontent}>Dashboard</Link>
                        <Link href="" className={styles.navbarcontent}>Log-Out</Link>
                    </div>
                </div>
                <div className={styles.contentContainer} >

                </div>
            </main>
        </>
    )
}
 
export default Dashboard ;