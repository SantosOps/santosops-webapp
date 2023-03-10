import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Santos Ops</title>
        <meta name="description" content="Santos Ops Landpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/infinidade.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/SantosOps.svg"
            alt="Next.js Logo"
            width={300}
            height={40}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/ArthurMaverick"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Here you can see my current projects&nbsp;.
            </p>
          </a>

          <a
            href="https://registry.terraform.io/namespaces/easy-modules"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              See the opensource &nbsp;projects that I have contributed!
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/arthurmcsantos/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Likendin <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Find me on LinkedIn for exceptional &nbsp;services.
            </p>
          </a>

          <a
            href="https://twitter.com/Dev__Maverick"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Twitter <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Follow me on Twitter to stay updated on my thoughts and insights.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
