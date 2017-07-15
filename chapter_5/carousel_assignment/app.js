let imagesUrlArray = ['http://imgur.com/9itd49u.png','http://imgur.com/n19BXfZ.png',
					'http://imgur.com/VBwQmzA.png','http://imgur.com/nawDxVv.png']
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			imageDisplayed: 1
		}
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
	}

	handleNextClick() {
            this.setState({
                imageDisplayed: this.state.imageDisplayed + 1
            })
	}
	handlePreviousClick() {
            this.setState({
                imageDisplayed: this.state.imageDisplayed - 1
            })
	}

	render() {

		return (
			<div>
				<h1>Calvin Carousel</h1>
			    <div>
					<button onClick={this.handlePreviousClick} disabled={this.state.imageDisplayed===1?true:false}>Previous</button>
			      	<span>{this.state.imageDisplayed} of 4</span>
					<button onClick={this.handleNextClick} disabled={this.state.imageDisplayed===4?true:false}>Next</button>
			    </div>
				<div>
					{/*<img src={imagesUrlArray[this.state.imageDisplayed-1]}  /> Before Dive Depper*/}
					{imagesUrlArray.map((image,i)=>{
						return <img src={image}  className={this.state.imageDisplayed-1!==i?'hidden':null}/>
						})
                    }
				</div>
			</div>			
		)
	}
}
ReactDOM.render(<App />, document.getElementById('app'));