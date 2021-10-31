import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Welcome = ({name}) => {
  return <h1>{name}</h1>
}
// const Date = ({date}) => {
//   return (
//     <div className="date__block">
//       <h1>Date is : </h1>
//       <span>{date.toLocaleTimeString()}</span>
//     </div>
//   ) 
// }

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state= {date: "new Date()"};
  }
  componentDidMount() {
        this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }
  render() {
    return (
         <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date}.</h2>
      </div>
    )
  }
}
  const element = (
    <div>
     <Welcome name="lishu gupta"/>
     <Date date='something' />
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));

