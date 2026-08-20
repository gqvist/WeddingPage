import { forwardRef } from 'react'
import './WelcomePage.css'
import welcomeImage from '../../assets/images/welcomeImage.svg'
import welcomeImageMobile from '../../assets/images/welcomeImageMobile.svg'

const WelcomePage = forwardRef(function WelcomePage(props, ref) {
  const scrollToMainpage = (event) => {
    if (event.deltaY <= 0) return
    document.getElementById('mainpage')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="welcomepage" onWheel={scrollToMainpage}>
      <picture>
        <source media="(max-width: 768px)" srcSet={welcomeImageMobile} />
        <img className="welcomepage__image" src={welcomeImage} alt="Welcome page image" />
      </picture>
    </section>
  )
})

export default WelcomePage
