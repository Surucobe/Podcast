import Error from 'next/error'

import Layout from '../component/Layout'
import Series from '../component/Series'
import Clips from '../component/Clips'
import PodacastPlayer from '../component/PodcastPlayer'

export default class extends React.Component {
  constructor(props){
    super(props)

    this.state = { openPodcast: null }
  }

  static async getInitialProps({ query, res }){
    let idChannel = query.id

    try{
      let [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
      ])

      if( reqChannel.status >= 400 ) {
        res.statusCode = reqChannel.status
        return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
      }

      let dataChannel = await reqChannel.json()
      let channel = dataChannel.body.channel

      let dataAudios = await reqAudios.json()
      let audioClips = dataAudios.body.audio_clips

      let dataSeries = await reqSeries.json()
      let series = dataSeries.body.channels

      return { channel, audioClips, series, statusCode: 200 }
    } catch(e) {
      return { channel: null, audioClips: null, series: null, statusCode: 503 }
    }

  }

  openPodcast = (event, podcast) => {
    event.preventDefault()
    this.setState({
      openPodcast: podcast
    })
  }

  closePodcast = (event) => {
    event.preventDefault()
    this.setState({
      openPodcast: null
    })
  }

  render() {
  
    const { channel, audioClips, series, statusCode } = this.props
    const { openPodcast } = this.state

    if( statusCode !== 200 ){
      return <Error statusCode={ statusCode } />
    }

    return(
      <React.Fragment>
        <Layout title={ channel.title } >

            <div className="hero" style={{ backgroundImage: `url(${channel.urls.logo_image.original}` }} ></div>

            { openPodcast && 
            <div className="modal">
              <PodacastPlayer clip={ openPodcast }
              onClose={ this.closePodcast } />
            </div> }

            <h1> { channel.title } </h1>

            { audioClips.length > 0 &&
                <Series
                arr = { audioClips }
                onClickPodcast = { this.openPodcast }
                />
            }

            { series.length > 0 &&
                <Clips 
                arr={ series }
                onClickPodcast = { this.openPodcast }
                />
             }
            

            <style jsx>{`
              header{
                color: #fff;
                background: #8756ca;
                padding: 15px;
                font-size: 1.5em;
                font-weight: bold;
                text-align: center;
              }
              .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
              }
              .channel {
                display: block;
                border-radius: 3px;
                box-shadow 0px 2px 6px rgba(0,0,0,0.15);
                margin-bottom: 0.5em;
                text-align: center;
              }
              .channel img {
                width: 100%;
              }
              h1 {
                text-align: center;
                font-weight: 600;
                padding: 15px;
                color: whitesmoke;
              }
              h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weigth: 600;
                margin: 0;
                color: whitesmoke;
                text-align: center;
              }
              h4{
                color: black;
              }
              .hero{
                height: 250px;
                width: 100%;
                background-position: center;
              }

              .modal{
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: #8756ca;
                z-index: 9999;
              }
            `}</style>

            <style jsx global>{`
              a{
                color: whitesmoke;
                text-decoration: none;
              }
              li{
                list-style: none;
                color: whitesmoke;
              }
            `}</style>
        </Layout>
      </React.Fragment>
    )
  }
}