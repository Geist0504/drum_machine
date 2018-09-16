import React from 'react'
import scss from './css/main.scss'


class DrumButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	pressed: false
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  handleKeyPress(target) {
	    if (target.key === this.props.press | target.key === this.props.press.toLowerCase()) {
	        console.log(target.key)
	        this.setState({pressed: true})
	        console.log(this.state)
	    }
  }
  render() {
  	return (
  		<button className={this.state.pressed ? 'drum-button drum-button-pushed' : 'drum-button'}>
  		<p>{this.props.press}</p></button>
  		)
  }
}

class DrumButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}  
  }
  render() {
  	  	const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    	const buttons = keys.map((key) => <DrumButton press = {key} />)
  	return (
  		<div id='drum-buttons'>{buttons }</div>
  		)
  }
}

class MachineButtons extends React.Component{
	constructor(props) {
    super(props)
    this.state = {}
	}
  render(){
  	return(
  		<div id='machine-buttons'></div>
  		)
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
	}
  render(){
  	return(<div id='drum-machine'>
  		<DrumButtons />
  		<MachineButtons />
  		</div>)
  }
}

export default Application;