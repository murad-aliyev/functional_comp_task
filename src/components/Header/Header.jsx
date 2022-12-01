import React,{Component} from 'react'
import "./Header.css"

const Modal1 = (props) => {
  const {class1, func} =props
 
  return (
    <div className={class1}>
      Modal111111111111111111
            <button type="button" onClick={func}>
              Закрыть
            </button>
    </div>
  )
}


class App extends Component {
  state = { click: "close" };

  onClick = () => {
    this.setState({ click: "open"});
  };
  onClick2 = () => {
    this.setState({ click: "close"});
  };

  render() {
    return (
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" onClick={this.onClick} className="btn btn-primary">
              Уведомления
            </button>
          </div>

        <Modal1 class1={this.state.click} func={this.onClick2} />
      </div>
    );
  }
}

export default App;