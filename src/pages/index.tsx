import Head from 'next/head'
import Image from 'next/image'

import testeLogo from '../assets/logo.png'

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>App</title>
            </Head>

            <main>
                <Image src={testeLogo}  />
                <h1>Hello World!</h1>
            </main>
        </div>
    )
}

export default Home
