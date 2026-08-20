import { useEffect, useRef, useState } from 'react'
import Header from './components/header/Header.jsx'
import Mainpage from './components/mainpage/MainPage.jsx'
import SecondPage from './components/secondpage/SecondPage.jsx'
import WelcomePage from './components/welcomepage/WelcomePage.jsx'

function App() {
  const headerRef = useRef(null)
  const welcomeRef = useRef(null)
  const mainpageBottomRef = useRef(null)
  const mainpageContentRef = useRef(null)
  const [headerMode, setHeaderMode] = useState('transparent')

  useEffect(() => {
    const updateHeaderMode = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      const triggerRef = isMobile ? mainpageContentRef.current : mainpageBottomRef.current
      const triggerTop = triggerRef?.getBoundingClientRect().top ?? Infinity

      setHeaderMode(triggerTop <= headerHeight - 20 ? 'solid' : 'transparent')
    }

    updateHeaderMode()
    window.addEventListener('scroll', updateHeaderMode, { passive: true })
    window.addEventListener('resize', updateHeaderMode)

    return () => {
      window.removeEventListener('scroll', updateHeaderMode)
      window.removeEventListener('resize', updateHeaderMode)
    }
  }, [])

  return (
    <main>
      <Header ref={headerRef} mode={headerMode} />
      <WelcomePage ref={welcomeRef} />
      <Mainpage bottomRef={mainpageBottomRef} contentRef={mainpageContentRef} />
      <SecondPage />
    </main>
  )
}

export default App
