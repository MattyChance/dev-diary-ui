import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Posts from "../components/posts";

export default function ClientSide() {
    return (
        <div>
            <main>
                <h1>
                    All Posts
                </h1>
                <ClientOnly>
                    <Posts />
                </ClientOnly>
            </main>
        </div>
    );
}
