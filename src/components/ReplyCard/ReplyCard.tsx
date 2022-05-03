import React from 'react'

type Props = {}

const ReplyCard = (props: Props) => {
    // const [replyComment, setReplyComment] = React.useState<string>('');

   
    
  return (
    <div>
        <input type="text" value="Add a comment"></input>
        <input type="submit" value="Reply">Reply</input>
       
    </div>
  )
}

export default ReplyCard