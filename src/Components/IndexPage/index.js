import Head from 'next/head'

function IndexPage(){
    return(
        <div>
            <Head>
                <title>Quiz CSS da Alura</title>
                <meta name="title" content="Quiz CSS da Alura" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://imersao-alura-v2.etoledo44.vercel.app/"/>
                <meta property="og:title" content="Quiz CSS da Alura"/>
                <meta property="og:description" content=""/>
                <meta property="og:image" content=""/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://imersao-alura-v2.etoledo44.vercel.app/"/>
                <meta property="twitter:title" content="Quiz CSS da Alura"/>
                <meta property="twitter:description" content=""/>
                <meta property="twitter:image" content=""/>
            </Head>
        </div>
    )
}
export default IndexPage