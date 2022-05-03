import React from 'react';

type VoteProps = {
  quantity: number
}

function Vote(props: VoteProps) {
  const [vote, setVote] = React.useState<VoteProps>({
    quantity: props.quantity
  });

  const increment = () => {
      setVote({
        quantity: vote.quantity + 1,
      });
  }

  const decrement = () => {
    setVote({
      quantity: vote.quantity -1
    });
  }

  return (
    <div className="">
      <button onClick = {increment}>+</button>
      {vote.quantity}
      <button onClick = {decrement}>-</button>
    </div>
  );
}



export default Vote;