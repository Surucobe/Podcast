import Podcast from '../component/Podcast'

import Layout from '../component/Layout'

export default class extends React.Component{
  static async getInitialProps({ query }){
    const podcastId = query.id

    let reqClip = await fetch(`https://api.audioboom.com/audio_clips/${podcastId}}`)
    let dataClip = await reqClip.json()
    let audioClip = dataClip.body.audio_clip

    return audioClip
  }

  render(){
    const audioClip = this.props

    return(
      <Layout title={ audioClip.title } >

          <h1>{ audioClip.title }</h1>

          <Podcast 
          clipImg={ audioClip.urls.image || audioClip.urls.wave_img }
          altTitle={ audioClip.title }
          audioClip={ audioClip.urls.high_mp3 }
          box={ audioClip.counts }
          />

          <style jsx>{`
            h1{
              text-align: center;
              color: whitesmoke;
            }
          `}</style>
      </Layout>
    )
  }
}