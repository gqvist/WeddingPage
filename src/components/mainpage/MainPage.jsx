import './MainPage.css'
import mainpageImage from '../../assets/images/mainPageImg.jpg'
import MarriedText from '../../assets/images/marriedText.svg'
import MainButton from '../mainbutton/MainButton.jsx'

function MainPage(props) {
  const { bottomRef, contentRef } = props

  return (
    <section id="mainpage" className="mainpage">
      <div className="mainpage__panel mainpage__panel--top" />
      <div ref={bottomRef} id="mainpage-bottom" className="mainpage__panel mainpage__panel--bottom">
        <img src={mainpageImage} alt="Main page image" className="mainpage__image" />
        <div ref={contentRef} className="mainpage__text-container">
          <img src={MarriedText} alt="Married text" className="mainpage__text" />
          <p className="mainpage__text-subtitle">
            Den 14 augusti 2027 säger vi ja till varandra på Wenngarns slott.
            Vi ser fram emot att fira dagen med er, våra nära och kära. <br /><br />
            Här finns all information ni behöver inför bröllopet.
          </p>
          <MainButton className="mainpage__button" backgroundColor="#7E8243">
            Om bröllopet
          </MainButton>
        </div>
      </div>
    </section>
  )
}

export default MainPage
