import React, {Component} from 'react'
import './UpcomingSessions.css'

class UpcomingSessions extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            
        }
    }
    
    render(){
        return (
            <div className="upcomingSessionsInfo">
                <h2> Upcoming Sessions: </h2>
                <div> No sessions this week, schedule one below! </div>
            </div>
        )
    }
}

export default UpcomingSessions