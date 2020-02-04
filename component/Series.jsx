import Link from 'next/link'

export default class Series extends React.Component {

  render() {
    const { arr, onClickPodcast } = this.props
    
    return(
      <>
      <div className="series-container">
        <h2>Series</h2>
        <ul className="series-list-container">
          {arr.map((item) => (
            <li className="series-list-item" key={item.id}>
              <div className="li-conatiner" >
                <img className="item-image" src={item.urls.image} alt=""/>
                <p>
                  <strong> { item.title } </ strong>
                  { Math.ceil(item.duration / 60) } Minutes
                </p>
              </div>
              <button onClick={ event => onClickPodcast(event, item) } > Play </button>
            </li>
            ))
          }
        </ul>
      </div>

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
              width: ;
              display: grid;
              grid-template-columns: 450px;
              grid-row-gap: 12px;
              justify-content: flex-start;
              padding-left: 20px;
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
            .li-conatiner{
              display: flex;
            }
            .series-container{
              display: grid;
              justify-content: center;
            }
            li{
              justify-content: space-between;
              border-bottom: 1px solid black;
              width: auto;
            }
            button{
              cursor: pointer;
              background-color: red;
              padding: 15px;
              border: 0;
              border-radius: 8px;
            }
          `}</style>
      </>
    )
  }
}