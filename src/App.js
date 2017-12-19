import React, { Component } from 'react';
import './App.css';
import Chat from './Components/Chat'

class App extends Component {

    constructor(props)
    {
        super(props)
        this.state = {data: 'false'};
        this._getData = this._getData.bind(this);
    }



    componentDidMount()
    {
        this._getData();
    }



    _getData = () => {
      const url = 'http://localhost:8888/chats';

    fetch(url, { credentials: 'include' })
	    .then((resp) => resp.json())
	    .then(json => this.setState({ chats: json.chats }))

     }

     render() {

          return (
           <div className="App">
              {
               // console.log(this.props);
               this.state.chats &&
               this.state.chats.map( (item, key) =>
                  <div key={key}>
                  <div>

                    <div>{item.buddy}</div>
                    <div>{item.lastMessage}</div>
                    <div>{item.timestamp}</div>

                  </div>
                  </div>
               )}
                <Chat chats={this.state.chats} />
           </div>
     )}

  // render() {
  //   return (
  //     <div className="App">
  //     MY APP
  //     <Chat />
  //     </div>
  //   );
  // }

}

export default App;
