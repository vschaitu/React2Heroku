import React from "react";
import "./FriendCard.css";

const fstyles = img => {
  return { "backgroundImage": `url(${img})` }
}

const FriendCard = props => {
  return (
    <div role="img" className={`click-item`} style={fstyles(props.image)} onClick={() => props.handleClickItem(props.id)}>
    </div>
  )
};

export default FriendCard;
