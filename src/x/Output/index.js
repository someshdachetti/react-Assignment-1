import {Component} from 'react'
import './index.css'

class Output extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  DeleteIcon = () => {
    console.log('clicked')
  }

  render() {
    const {searchInput} = this.state
    const {HistoryList} = this.props

    const searchResults = HistoryList.filter(each =>
      each.title.includes(searchInput),
    )

    return (
      <div>
        <div className="blueCard">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />

          <input
            placeholder="Search history"
            type="search"
            onChange={this.onSearch}
          />
        </div>

        <h1>
          {searchResults.map(each => (
            <li className="xx" key={each.id}>
              <p className="time">{each.timeAccessed}</p>
              <img src={each.logoUrl} alt={each.title} />

              <h1 className="title">{each.title}</h1>
              <div className="delete-icon">
                <img
                  onClick={this.DeleteIcon}
                  className="delete"
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                  alt="delete"
                />
              </div>
            </li>
          ))}
        </h1>
      </div>
    )
  }
}
export default Output
