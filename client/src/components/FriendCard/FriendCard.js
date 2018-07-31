import React from "react";
import "./FriendCard.css";

const fstyles = img => {
  return { "backgroundImage": `url(${img})` }
}

const FriendCard = props => {
  return (
    <div role="img" className={props.className} style={fstyles(props.image)} onClick={() => props.handleClickItem(props.id)}>
    </div>
  )
};

export default FriendCard;
