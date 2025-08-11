import { useEffect, useState } from 'react'
import FlippingCard from '../components/FlippingCard'
import '../styles/zup.css'
import mediaLogo from '../assets/logos/logo_zup_media.png'
import dispatchLogo from '../assets/logos/logo_zup_dispatch.png'

const words = [
  'platforms',
  'brands',
  'experiences',
  'stories',
  'interfaces',
  'tools',
  'campaigns',
  'products'
]

export default function ZupHome() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2500
    )
    return () => clearInterval(id)
  }, [])

  return (
    <div className="zup-home">
      <h1 className="hero-title">
        We build <span className="changing-word">{words[index]}</span> that matter.
      </h1>
      <div className="card-container">
        <FlippingCard
          front={<img src={mediaLogo} alt="ZUP! MEDIA" />}
          back={<span>Marketing that converts. For brands that matter.</span>}
          direction="left"
        />
        <FlippingCard
          front={<img src={dispatchLogo} alt="ZUP! DISPATCH" />}
          back={<span>One app. All taxis. Across Romania.</span>}
          direction="right"
        />
      </div>
    </div>
  )
}
