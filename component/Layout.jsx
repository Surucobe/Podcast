import Link from 'next/link'
import Head from 'next/head'
import nProgress from 'nprogress'
import Router from 'next/router'



export default class Layout extends React.Component {
  render(){
    const { children, title } = this.props

    Router.events.on('routeChangeStart', () =>{
      nProgress.start()
    })
    Router.events.on('routeChangeComplete', () =>{
      nProgress.done()
    })
    Router.events.on('routeChangeError', () => NProgress.done )

    return(
      <React.Fragment>
        <Head>
          <title> {`Podcast - ${title}` } </title>
        </Head>
        
        <header>
          <Link href="/">
            <a>Podcast</a>
          </Link>
        </header>
          { children }

        <style jsx>{`
        header{
          color: #fff;
          background: #8756ca;
          padding: 15px;
          font-size: 1.5em;
          font-weight: bold;
          padding-left: 10px;
          text-align: center;
        }
        header a{
          color: #fff;
        }
      `}</style>
        
        <style jsx global>{`
          body{
            margin: 0;

            background-color: #234050;
          }
          a{
            text-decoration: none;
          }
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #29d;
          position: fixed;

          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 4px;
        }

/* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #29d, 0 0 5px #29d;
          opacity: 1.0;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }

/* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 28px;
          height: 28px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: #29d;
          border-left-color: #29d;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0%   { -webkit-transform: rotate(0deg); }
          100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}</style>
      </React.Fragment>
    )
  }
}