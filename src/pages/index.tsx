import React, { useEffect, useState } from 'react'
import { Block } from '../components/Block';
import { CheckTheme } from '../components/CheckTheme';
import contents from '../../contents.json'
import Footer from '../components/Footer';
import { CheckThemeWrapper, Component, Section, SectionTitle } from '../styles/homeStyle';

export default function Home () {
  const [ amountScrolled, setAmountScrolled ] = useState(-1)

  function onScroll () {
    setAmountScrolled(window.pageYOffset)
    console.log(window.pageYOffset)
  }
  
  useEffect(() => {
    const interval = setInterval(onScroll, 500)
  },[])

  return (
      
      <Component className='Components'>      
        <CheckThemeWrapper amountScrolled={amountScrolled}>
          <CheckTheme />
        </CheckThemeWrapper>

        <div>               
          { contents.map(content => (
            <Section key={content.title}>
              <SectionTitle>
                {content.title}
              </SectionTitle>          
              { content.items.map( item => (
                // eslint-disable-next-line react/no-unknown-property
                <div key={item.title} >
                  <Block  title={item.title} text={item.text} link={item.link} isGithub={item.isGithub}/>
                </div>
              ))}
            </Section>
          ))}
        </div>

        <Footer />
      </Component>      
  )
}

