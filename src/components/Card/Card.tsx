import React from 'react';
import Vote from '../Vote/Vote';
import ReplyCard from '../ReplyCard/ReplyCard';

type CardProps = {
    infos: {
        username: string,
        comment: string,
        quantity: number,
    }[]
}

export default function Card(props: CardProps) {
    const [reply, setReply] = React.useState<boolean>(false);

    const replyComment = () => {
        setReply(reply => !reply);
    }
  return (
    <div>
        {props.infos.map(info => {
            return (
                <>
                <Vote quantity={info.quantity} />
                <div>{info.username}{info.comment}</div>
                <button onClick={replyComment}>reply</button>
                {
                reply ?
                <ReplyCard /> : null
                }
                </>
            )
        })}
    </div>
  )
}