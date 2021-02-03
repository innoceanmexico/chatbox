import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="container inicio m-0 p-0">
        <div align="center">
          <img src="/images/logo-blanco.png" alt="INNOCEAN MÉXICO" title="INNOCEAN MÉXICO" />
        </div>
        <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
          <h1>[ CHATBOX IMPLEMENTACIÓN ]</h1>
        </Link>
      </div>
      <style jsx>{`
        .container.inicio {
          background: #f0582a;
          margin: 0;
          padding: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        h1 {
          color: #333333;
          cursor: pointer;
          transition: all 1s;
        }
        h1:hover {
          color: #ffffff;
        }
      `}</style>
    </Layout>
  )
}
