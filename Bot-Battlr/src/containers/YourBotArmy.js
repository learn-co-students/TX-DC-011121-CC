import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map((bot) => <BotCard deleteAction={this.props.deleteCard} clickAction={this.props.removeBot} bot={bot} key={bot.id}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
