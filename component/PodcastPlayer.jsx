import { withRouter } from 'next/router'

export default class Podacst extends React.Component{
  render() {
    const { onClose, clip } = this.props

    return(
      <React.Fragment>
        <div className="podcast-container">
          <a onClick={ onClose } className="close" > Back </a>

            <img src={ clip.urls.image || clip.urls.wave_img } 
            alt={ clip.title } className="hero" />
            <audio controls autoPlay>
              <source src={ clip.urls.high_mp3 } type="audio/mpeg" />
            </audio>
            <p>
              { `comments: ${clip.counts.comments} likes: ${clip.counts.likes} plays: ${clip.counts.plays}` }
            </p>
        </div>

          <style jsx>{`
          .hero{
              background-color: black;
              width: 250px;
              height: 250px;
            }
            .podcast-container{
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              position: relative;
            }
            .close{
              justify-self: left;
              position: absolute;
              left: 15px;
              top: 15px;
            }
            audio{
              outline: 0;
              margin: 20px 0;
            }
            p{
              color: whitesmoke;
            }
            a{
              cursor: pointer;
            }
          `}</style>
      </React.Fragment>
    )
  }
}