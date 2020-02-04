import { withRouter } from 'next/router'

export default class Podacst extends React.Component{
  render() {
    const { altTitle, audioClip, clipImg, box } = this.props

    return(
      <React.Fragment>
        <div className="podcast-container">
            <img src={ clipImg } alt={ altTitle } className="hero" />
            <audio controls autoPlay>
              <source src={ audioClip } type="audio/mpeg" />
            </audio>
            <p>
              { `comments: ${box.comments} likes: ${box.likes} plays: ${box.plays}` }
            </p>
        </div>

          <style jsx>{`
          .hero{
              background-color: black;
              width: 250px;
              height: 250px;
            }
            .podcast-container{
              height: 350px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              background-color: #000;
            }
            audio{
              outline: 0;
            }
            p{
              color: whitesmoke;
            }
          `}</style>
      </React.Fragment>
    )
  }
}