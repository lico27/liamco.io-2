import React from 'react'

const About = () => {
  return (
    <div className='w-50 mx-auto mb-5'>
      <h1 className='mb-4 text-capitalize text-general'>Hi, I'm Liam</h1>
      <img src="src/assets/img/pfp1.png" id="pfp" className='mx-auto'/>
            <p class="text-center" id="bio-text">
                  Welcome to my portfolio! I'm an aspiring Data Scientist from the UK, doing whatever I can to gain the skills I need in data and coding to make this my career. 
                  I'm a graduate of edX's Front-End Web Development bootcamp, which taught me fundamental skills including HTML, CSS, JavaScript and React.
                  And I just completed a 12-week front-end internship at <a href="https://socialwebstrategy.com/" target="_blank">Social Web Strategy</a>. <br />
                  Feel free to take a look at my recent projects below, and don't hesitate to get in touch! 
                </p>
    </div>
  )
}

export default About