import React from 'react'

type Props = {
    id: string,
    title: string,
    body: string
}

export default function Post(props: Props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}
