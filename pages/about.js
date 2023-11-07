import Navbar from "./components/Navbar";
import Image from "next/image";
import Head from "next/head";

const about = ({data}) =>{
    return(
        <>
            <Head>
            <title>About | Belajar Next JS</title>
            <meta name="description" content="Belajar Next JS"/>
            </Head>
            <Navbar/>
            <Image src="/vercel.svg" alt="Logo Vercel" width={300} height={200} />
            <h1>Ini Halaman About</h1>
            {data.map((waifu) => (
                <div key={waifu.id}>
                    <h2>{waifu.name}</h2>
                </div>
            ))}
        </>
    );
}
export default about;

export const getStaticProps = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};