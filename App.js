import React from "react";
import "./App.css"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phoneNumber, email } = this.state;
    console.log({ fullName, phoneNumber, email });
    this.setState({ fullName: '', phoneNumber: '', email: '' });
  };

  render() {
    const { fullName, phoneNumber, email } = this.state;

    return (
      <div className="App">
        <h1>User Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}




// export default class Form extends React.Component{
//     handleSubmitClick = () => {
//         const name = this._name.value;
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={input => this._name = input}/>
//                 <button onClick={this.handleSubmitClick}>Sign Up!</button>
//             </div>
//         )
//     }
// }

//
// class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {seconds: 0}
//     }
//
//     tick() {
//         this.setState(state => ({
//             seconds: state.seconds + 1
//         }))
//     }
//
//     componentDidMount() {
//         this.interval = setInterval(() => this.tick(), 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }
//
//     render() {
//         return (
//             <div>
//                 Seconds: {this.state.seconds}
//             </div>
//         )
//     }
// }
//
// export default Timer;
//
//
// import React, { useState } from 'react';
//
// function App() {
//   const [color1, setColor1] = useState('red');
//   const [color2, setColor2] = useState('blue');
//
//   const swapColors = () => {
//     setColor1(color2);
//     setColor2(color1);
//   };
//
//   return (
//     <div>
//       <div
//         style={{
//           width: '200px',
//           height: '200px',
//           backgroundColor: color1,
//           display: 'inline-block',
//           marginRight: '10px',
//             alignItems: 'center',
//         }}
//         onClick={swapColors}
//       ></div>
//       <div
//         style={{
//           width: '200px',
//           height: '200px',
//           backgroundColor: color2,
//           display: 'inline-block',
//             alignItems: 'center',
//         }}
//         onClick={swapColors}
//       ></div>
//     </div>
//   );
// }
//
// export default App;
//
