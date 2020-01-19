import Link from 'next/link'

export default class Series extends React.Component {

  render() {
    const { arr, onClickPodcast } = this.props
    
    return(
      <React.Fragment>
        <h2>Series</h2>
        <ul className="series-list-container">
          {arr.map((item) => (
            <Link href={`/podcast?id=${ item.id }`} key={ item.id }>
              <a onClick={ event => onClickPodcast(event, item) } >
                <li className="series-list-item" >
                  <img className="item-image" src={item.urls.image} alt=""/>
                  <p>
                    <strong> { item.title } </ strong>
                    { Math.ceil(item.duration / 60) } Minutes
                  </p>
                </li>
              </a>
            </Link>
            ))
          }
        </ul>

          <style jsx>{`
            header{
              color: #fff;
              background: #8756ca;
              padding: 15px;
              font-size: 1.5em;
              font-weight: bold;
              text-align: center;
            }
            h2 {
              padding: 5px;
              font-size: 1.9em;
              font-weight: 600;
              margin: 0;
              color: whitesmoke;
              text-align: center;
            }
            h4{
              color: black;
            }
            .item-image {
              height: 55px;
              width: 85px;
              margin-right: 15px;
            }
            .series-list-container{
              display: grid;
              grid-template-columns: 750px;
              grid-row-gap: 12px;
              justify-content: center;
            }
            .series-list-item {
            height: 55px;
            font-size: 15px;
            display: flex;
            color: whitesmoke;
            align-items: center;
            }
            .series-list-item p {
              display: flex;
              flex-direction: column;
              margin: 0;
            }
            a{
              border-bottom: 1px solid black;
              width: auto;
            }
          `}</style>
      </React.Fragment>
    )
  }
}