import React, { Component } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {
            this.props.bots.map((bot) => <BotCard clickAction={this.props.addBot} killAction={this.props.killBot} bot={bot} key={bot.id} />)
          }
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;