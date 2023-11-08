import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'



export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>    
        <NavBar/>
        <div className={styles.container}>
            <Head>
                <title>home-Jero</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

         
            <main className={styles.main}>

                {children}

            </main>

        </div>
        </>
    )
}
