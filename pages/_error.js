import React from'react'
import Link from 'next/link'

import Layout from '../component/Layout';

export default class Error extends React.Component{
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <Layout title="chiavez!!!" >
        { statusCode === 404 ?
          <div className="message" >
            <h1>Esta pagina no existe</h1>
            <Link href="">
              <a>Volver a la home</a>
            </Link>
          </div>
          :
          <div className="message">
            <h1>Hubo un problema</h1>
            <p>Intenta nuevamente en unos segundos</p>
          </div>
         }
         <style jsx>{`
         .message {
           padding: 100px 30px;
           text-align: center;
         }
         h1{
           margin-bottom: 2em;
         }
         a{
           color: #8756ca;
           text-decoration: none;
         }
         `}</style>
      </Layout>
    )
  }
}