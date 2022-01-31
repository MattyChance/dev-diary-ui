import Head from 'next/head'
import dynamic from "next/dynamic";

const CodeEditor = dynamic(import("../components/codeEditor"), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Develeper Learning Diary App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          What have you learnt today?
        </h1>

        <div className='title'>
          <h2>
            Title
          </h2>
          <form>
            <input type="text"></input>
          </form>
        </div>

        <div className="notes">
        <h2>
          Notes
        </h2>
          <form>
            <input type="text"></input>
          </form>
        </div>

        <div className="tags">
        <h2>
          Tags
        </h2>
          <form>
            <input type="text"></input>
          </form>
        </div>

        <div>
          <h2>
            Code
          </h2>
          <CodeEditor/>
        </div>

        <div>
          <button>Save</button>
        </div>


      </main>

    </div>
  )
}
