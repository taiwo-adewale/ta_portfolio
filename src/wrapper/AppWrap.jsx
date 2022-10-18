import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import { images } from '../constants'

const  AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div
      id={idName}
      className={`w-full min-h-screen flex flex-row ${classNames}`}
      style={ idName === 'home' ? {backgroundImage: `url(${images.bgIMG})`} : {} }
    >
      <SocialMedia />

      <div className="flex-center flex-col flex-1 w-full px-4 pt-16 pb-12 sm:pb-16 sm:px-8">
        <Component />

        { idName !== 'home' && 
          <div className="w-full pt-8 px-8 sm:px-0 flex flex-col justify-end items-end">
            <p className="p-text uppercase text-custBlack">©2022 ADEWALE</p>
            <p className="p-text uppercase text-custBlack">All rights reserved.</p>
          </div>
        }
      </div>

      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap