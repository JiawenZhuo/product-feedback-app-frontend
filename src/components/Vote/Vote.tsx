import React from 'react';

type VoteProps = {
    quantity: number
}

function Vote(props: VoteProps) {
  return (
    <div>{props.quantity}</div>
  )
}

export default Vote;