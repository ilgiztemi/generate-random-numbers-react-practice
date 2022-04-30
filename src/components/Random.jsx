import React from "react";

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      lower: "",
      upper: "",
      isEmpty: false,
      prevNumbers: []
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (Number(value)) {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: "" });
    }
  };

  handleGenerate = () => {
    const { lower, upper, prevNumbers } = this.state;
    if (lower !== "" && upper !== "" && !isNaN(lower) && !isNaN(upper)) {
      const randomNumber = this.getRandomIntInclusive(lower, upper);
      const newArr = [...prevNumbers];
      newArr.push(randomNumber);
      this.setState({
        number: randomNumber,
        isEmpty: false,
        isString: false,
        prevNumbers: newArr
      });
    } else {
      this.setState({ isEmpty: true });
    }
  };

  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };

  handlClear = () => {
    this.setState({ lower: "", upper: "", number: 0 });
  };

  render() {
    const { number, lower, upper, isEmpty, prevNumbers } = this.state;
    return (
      <div className="random">
        <h1>{number}</h1>
        {isEmpty ? <div className="error">Please enter numbers</div> : null}
        <div>
          <label htmlFor="fname">Lower Limit </label>
          <input
            onChange={this.handleChange}
            type="text"
            id="lower"
            name="lower"
            value={lower}
          />
          <br />
          <label htmlFor="lname">Upper Limit </label>
          <input
            onChange={this.handleChange}
            type="text"
            id="upper"
            name="upper"
            value={upper}
          />
        </div>
        <div>
          <button onClick={this.handleGenerate}>Generate</button>
          <button onClick={this.handlClear}>Clear</button>
        </div>
        <ul>
          <p>Previous Numbers</p>
          {prevNumbers.map((num, ind) => {
            return <li key={ind}>{num}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Random;
