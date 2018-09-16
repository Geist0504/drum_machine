import React from 'react'
import Switch from 'react-toggle-switch'
import scss from './css/main.scss'


const bankOne = [{
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  id: 'Kick-n-Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}
]

const bankTwo = [ {
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}]

function updateDisplay(text) {
	console.log(text)
  this.setState({text:text})
}

class DrumButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	pressed: false
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.playAudio = this.playAudio.bind(this)
    this.audio = new Audio(this.props.audio)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
    document.addEventListener('keyup', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
    document.addEventListener('keyup', this.handleKeyPress)
  }
  playAudio() {
  	updateDisplay(this.props.audioName)
  	this.audio.play()
  }
  handleKeyPress(target) {
	    if (target.key === this.props.press | target.key === this.props.press.toLowerCase()) {
	        this.setState({pressed: !this.state.pressed})
	        this.playAudio()
	    }
  }
  render() {
  	return (
  		<button className={this.state.pressed ? 'drum-button drum-button-pushed' : 'drum-button'}
  		onClick = {this.playAudio} id={this.props.press}><p>{this.props.press}</p></button>
  		)
  }
}

class DrumButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {  		  	
    	const buttons = this.props.bank.map((obj) => (<DrumButton press = {obj.keyEvent}
    		audio = {obj.url} id = {obj.keyEvent} audioName = {obj.id} />))
  	return (
  		<div id='drum-buttons'>{buttons }</div>
  		)
  }
}

class MachineButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	text: '',
    	powered: true
    }
    updateDisplay = updateDisplay.bind(this)
    this.toggleSwitch = this.toggleSwitch.bind(this)
  }
  toggleSwitch() {
    this.setState({
      powered: !this.state.powered
    })
  }

  render() {
  	return (
  		<div id='machine-buttons'>
  		 <Switch onClick={this.toggleSwitch} on={this.state.powered}/>
  		  <div id='display'><p>{this.state.text}</p></div>
  		</div>
  		)
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	drumKit: bankOne
    }
  }
  render() {
  	const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  	let bank = this.state.drumKit.slice()
  	bank.map((obj, i) => {
  	  		obj.keyEvent = keys[i];
  	  		return obj
  	  	})
  	return (<div id='drum-machine'>
  		<DrumButtons bank = {bank}/>
  		<MachineButtons />
  		</div>)
  }
}

export default Application;