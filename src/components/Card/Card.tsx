import React from 'react'
import Vote from '../Vote/Vote'

type CardProps = {
    infos: {
        username: string,
        comment: string,
    }[]
}

export default function Card(props: CardProps) {
  return (
    <div>
        <Vote quantity={20}/>
        {props.infos.map(info => {
            return (
                <div>{info.username}{info.comment}</div>
            )
        })}
    </div>
  )
}