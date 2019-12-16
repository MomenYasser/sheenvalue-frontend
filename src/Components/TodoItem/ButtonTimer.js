import React from 'react';

class ButtonTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
       
        this.interval = setInterval(
          () =>this.setState((prevState) => { return { timer: prevState.timer+ 1 } }),
          1000
        );
       
      }
    
      componentWillUnmount(){
       clearInterval(this.interval);
      }
      
    render() {

        const { on, onPress, id } = this.props;

        return (
            <div >
                <button onClick={() => { onPress(id, on , this.state.timer ) } } style={{ float: 'right' }}>
                    <i aria-hidden="true"> {on === true ? "pause_timer_button" : "start_timer_button"}</i>
                </button>
                { on && 
                 <p> {this.state.timer}</p>
                }

            </div>
        );
    }
}

export default ButtonTimer;