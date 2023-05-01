import React from 'react'
import SectionLine from '../SectionLine/SectionLine'
import ScrollToTopButton from '../ScrollToTop/ScrollToTop'

function Copyright() {
  return (
    <>
        <div>
            <SectionLine/>
            <div className="container">
                <div className="pt-8 pb-12">
                    <p className="text-gray  text-base font-light text-center">© 2022. All rights reserved by <a href="/" className="text-primary underline">Sultan Ahmed</a></p>
                </div>
            </div>
            <ScrollToTopButton/>
        </div>
    </>
  )
}

export default Copyright