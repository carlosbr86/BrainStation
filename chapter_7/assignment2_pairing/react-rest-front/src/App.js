import React, { Component } from 'react';
import * as d3 from 'd3';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

// import './App.css';
// import {Link} from 'react-router';
class Calendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: moment(this.props.date)
    };
    this.handleChange = this.handleChange.bind(this);

 }
 handleChange(date) {
    this.setState({
      date: date,
    });
  }

 render() {
  return (
    <div>
      <DatePicker id={this.props.definingID}
        dateFormat="YYYY-MM-DD"
        selected={this.state.date}
        onChange={this.handleChange}
      />
    </div>)
  }
} 

class D3Component extends Component { 
  constructor (props){
    super (props);
    this.const = {
      margin:{top: 30, right: 20, bottom: 30, left: 50},
      parseTime: d3.time.format("%Y-%m-%d").parse,
      data: ''
    }
  }
  
  setContext() {
    let svg=d3.select(this.refs.d3Ref).append("svg")
      .attr("width", '650px') //width + margin.left + margin.right
              .attr("height", '350px') //height + margin.top + margin.bottom
          .append("g")
              .attr("transform",
                    "translate(70,70 )"); //" + margin.left + "," + margin.top + ")"
    return svg
  }

  setGraph(context) {
     
    let  width=550 - this.const.margin.left - this.const.margin.right;           //600 hardCode Data
    let  height=270 - this.const.margin.top - this.const.margin.bottom;           //270 hardCode Data
  
    // Set the ranges
    let x=d3.time.scale().rangeRound([0, width]);         
    let y=d3.scale.linear().rangeRound([height, 0]);

    // Define the axis
    let xAxis=d3.svg.axis().scale(x).orient("bottom").ticks(5);
    let yAxis=d3.svg.axis().scale(y).orient("left").ticks(5);

    // Define the line
    let valueline=d3.svg.line()                             
      .x(function(d) { return x(d.date); }) 
      .y(function(d) { return y(d.value); });

    // Get the data
    d3.csv("data.csv", (error, data)=> {  
      data.forEach((d)=> {
          d.date = this.const.parseTime(d.date);
          d.value = +d.value;
      });

      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d.date; })); 
      y.domain( d3.extent(data, function(d) { return d.value; }));

      //Appending the Line
      context.append("path")
        .attr("class", "line")           
        .datum(data)  
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", valueline(data));

      //Appending the X Axis
      context.append("g")
        .attr("class", "x axis")             //different
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
 
      //Appending the Y Axis
      context.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")        // all attributes bellow are NEW 
      .attr("fill", "#000") // 
      .attr("transform", "rotate(-90)")  // 
      .attr("y", 6) // 
      .attr("dy", "0.71em") // 
      .attr("text-anchor", "end") // 
      .text("Rate");

    }) 
  }

  
  componentDidMount() { // Component Did Update?
    const context = this.setContext();
    this.setGraph(context);
  }

  render() {

    return (
      <div className="d3">
        <div ref="d3Ref"></div>
      </div>
    )
  }
}

class Form extends Component {
  render(){
    return(
      <div>
        <p className="inline"> Base Currency:  </p>
        <select id ="baseCurrency" name="baseCurrency" defaultValue={this.props.formData.baseCurrency}>
          <option value="AUD"> AUD - Australian Dollar </option>
          <option value="BGN">BGN - Bulgarian Lev </option>
          <option value="BRL">BRL - Brazlian Real </option>
          <option value="CAD">CAD - Canadian Dollar </option>  
          <option value="CHF">CHF - Swiss Franc </option>
          <option value="CNY">CNY - Chinese Yuan </option>
          <option value="CZK">CZK - Czech Republic Koruna</option>
          <option value="DNK">DNK - Danish Krone </option>
          <option value="GBP">GBP - British Pound </option>
          <option value="HKD">HKD - Hong Kong Dollar </option>
          <option value="HRK">HRK - Croatian Kuna </option>
          <option value="HUF">HUF - Hungarian Forint </option>
          <option value="IDR">IDR - Indonesian Rupiah </option>
          <option value="ILS">ILS - Isralei New Sheket </option>
          <option value="INR">INR - Indian Rupee </option>
          <option value="JPY">JPY - Japanese Yen </option>
          <option value="KRW">KRW - South Korean Won </option>
          <option value="MXN">MXN - Mexican Peso </option>
          <option value="MYR">MYR - Malaysian Ringgit </option>
          <option value="NOK">NOK - Norwegian Krone </option>
          <option value="NZD">NZD - New Zealand Dollar </option>
          <option value="PHP">PHP - Philippine Peso </option>
          <option value="PLN">PLN - Polish Zloty </option>
          <option value="RON">RON - Romanian Leu </option>
          <option value="RUB">RUB - Russian Ruble </option>
          <option value="SEK">SEK - Swedish Krona </option>
          <option value="SGD">SGD - Singapore Dollar </option>
          <option value="THB">THB- Thai Baht </option>
          <option value="TRY">TRY -Turkish Lira </option>
          <option value="USD">USD - United States Dollar </option>
          <option value="ZAR">ZAR - South African Rand </option>
    </select>
    <p></p>
        <p className="inline"> Symbol Currency: </p>
        <select id ="symbolCurrency" name="symbolCurrency" defaultValue={this.props.formData.symbolCurrency}>
          <option value="AUD">AUD - Australian Dollar </option>
          <option value="BGN">BGN - Bulgarian Lev </option>
          <option value="BRL">BRL - Brazlian Real </option>
          <option value="CAD">CAD - Canadian Dollar </option>  
          <option value="CHF">CHF - Swiss Franc </option>
          <option value="CNY">CNY - Chinese Yuan </option>
          <option value="CZK">CZK - Czech Republic Koruna</option>
          <option value="DNK">DNK - Danish Krone </option>
          <option value="GBP">GBP - British Pound </option>
          <option value="HKD">HKD - Hong Kong Dollar </option>
          <option value="HRK">HRK - Croatian Kuna </option>
          <option value="HUF">HUF - Hungarian Forint </option>
          <option value="IDR">IDR - Indonesian Rupiah </option>
          <option value="ILS">ILS - Isralei New Sheket </option>
          <option value="INR">INR - Indian Rupee </option>
          <option value="JPY">JPY - Japanese Yen </option>
          <option value="KRW">KRW - South Korean Won </option>
          <option value="MXN">MXN - Mexican Peso </option>
          <option value="MYR">MYR - Malaysian Ringgit </option>
          <option value="NOK">NOK - Norwegian Krone </option>
          <option value="NZD">NZD - New Zealand Dollar </option>
          <option value="PHP">PHP - Philippine Peso </option>
          <option value="PLN">PLN - Polish Zloty </option>
          <option value="RON">RON - Romanian Leu </option>
          <option value="RUB">RUB - Russian Ruble </option>
          <option value="SEK">SEK - Swedish Krona </option>
          <option value="SGD">SGD - Singapore Dollar </option>
          <option value="THB">THB- Thai Baht </option>
          <option value="TRY">TRY -Turkish Lira </option>
          <option value="USD">USD - United States Dollar </option>
          <option value="ZAR">ZAR - South African Rand </option>
    </select>
    <p></p>
      <button id="submitForm" onClick={(e)=>{this.props.handleSubmit(e)}} > Submit</button>
    </div>
    )
  }
}

class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      startDate: "2017-04-30",
      finalDate: "2017-05-20",
      baseCurrency: "CAD",
      symbolCurrency: "BRL",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let startDate = document.getElementById("datepickerStart").value;
    let finalDate = document.getElementById("datepickerFinal").value;
    let e = document.getElementById("baseCurrency");
    let baseCurrency = e.options[e.selectedIndex].value;
    let f = document.getElementById("symbolCurrency");
    let symbolCurrency = f.options[f.selectedIndex].value;
    if(finalDate>startDate){
      console.log("Axios.Post=>",startDate,finalDate,baseCurrency,symbolCurrency);
      this.setState({
        startDate: startDate,
        finalDate: finalDate,
        baseCurrency: baseCurrency,
        symbolCurrency: symbolCurrency
      })
      let localData= {
        startDate: startDate,
        finalDate: finalDate,
        baseCurrency: baseCurrency,
        symbolCurrency: symbolCurrency
      }
      localStorage.setItem("data",JSON.stringify(localData));

      axios.post("http://localhost:2222/postdata",
        {
            startDate: startDate,
            finalDate: finalDate,
            baseCurrency: baseCurrency,
            symbolCurrency: symbolCurrency
        }
      );
    }
    else alert("Incompatible Dates! Please correct")  
  }
  
  componentWillMount(){
    let str = localStorage.getItem("data")
    this.setState({
        ...JSON.parse(str)
      })
  }

  render() {
    return (
      <div className="App">
        <h2>Currency Graph </h2>
        <h3> {this.state.baseCurrency} vs. {this.state.symbolCurrency}</h3>
        <h3> From: {this.state.startDate} To: {this.state.finalDate} </h3>
        <D3Component className="d3"data={this.state.data}/>
        <div className="form">
          <p className="inline">Start Date:</p> <Calendar className="inline" definingID={"datepickerStart"} date={this.state.startDate} /> 
          <p className="inline"> Final Date:</p> <Calendar className="inline" definingID={"datepickerFinal"} date={this.state.finalDate} />
          <Form handleSubmit={this.handleSubmit} formData={this.state} />
        </div>
      </div>
    );
  };
};

export default App;