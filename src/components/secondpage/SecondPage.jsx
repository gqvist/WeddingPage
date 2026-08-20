import './SecondPage.css'
import MainButton from '../mainbutton/MainButton.jsx'
import invitationText from '../../assets/images/InbjudanText.svg'
import letterImage from '../../assets/images/BrevImage.svg'
import faqImage from '../../assets/images/FAQ-Image.svg'

function SecondPage() {
  return (
    <section className="secondpage">
      <div className="secondpage__panel secondpage__panel--top">
        <div className="secondpage__hero">
          <img className="secondpage__letter" src={letterImage} alt="Letter illustration" />
          <img className="secondpage__title" src={invitationText} alt="Svara på inbjudan" />
          <p className="secondpage__subtitle">Vi hoppas att ni vill fira med oss!</p>
          <MainButton
            className="secondpage__button"
            backgroundColor="#FFF5E1"
            style={{ color: '#7E8243' }}
          >
            Svara
          </MainButton>
        </div>
      </div>
      <div className="secondpage__panel secondpage__panel--bottom">
        <div className="secondpage__faq-wrap">
          <img className="secondpage__faq-title" src={faqImage} alt="Frågor och svar" />
        </div>
      </div>
    </section>
  )
}

export default SecondPage
