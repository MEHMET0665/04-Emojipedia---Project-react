import React from 'react';
class Entry extends React.Component{
  render(){
    return(
     
      <div className="term">
       <h2>EMOJIES</h2>
        <div className="dt">
          <span>{this.props.name}</span>
          <span className="emoji">{this.props.emoji}</span>
        </div>
        <div className="dd">
        <p>{this.props.id}</p>
        <p>{this.props.meaning}</p>
        </div>
       
    </div>)
  }
}
export default Entry