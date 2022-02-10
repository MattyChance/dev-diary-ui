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
          <form>
            <label>
              Title:
            </label>
            <input type="text" name="title" />
            <button type="submit">Save</button>
          </form>
        </div>

        <div className="notes">
          <form>
            <label>
              Notes:
            </label>
            <input type="text" name="notes" />
            <button type="submit">Save</button>
          </form>
        </div>

        <div className="tags">
          <form>
            <label>
              tags:
            </label>
            <input type="text" name="tags" />
            <button type="submit">Save</button>
          </form>
        </div>

        <div>
          <h2>
            Code
          </h2>
          <CodeEditor />
        </div>

        <div>
          <button>Save</button>
        </div>


      </main>

    </div>
  )
}
