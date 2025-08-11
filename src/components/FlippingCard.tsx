import React from 'react'

interface Props {
  front: React.ReactNode
  back: React.ReactNode
  direction?: 'left' | 'right'
}

export default function FlippingCard({ front, back, direction = 'left' }: Props) {
  return (
    <div className={`flip-card ${direction === 'right' ? 'right' : ''}`}>
      <div className="flip-inner">
        <div className="flip-front">{front}</div>
        <div className="flip-back">{back}</div>
      </div>
    </div>
  )
}
