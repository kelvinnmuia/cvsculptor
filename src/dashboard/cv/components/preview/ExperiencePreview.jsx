import React from 'react'

/**
 * ExperiencePreview
 * 
 * This component renders a preview of the professional experience section of a CV.
 * 
 * It expects a cvInfo object as a prop, which should contain an array of experience entries.
 * Each experience entry should have a title, company name, city, state, start date, and end date.
 * 
 * The component renders a heading for the section, followed by a horizontal rule.
 * Then, it maps over the experience entries and renders a div for each one, containing the title, company name, city, and state.
 * The start and end dates are rendered in a span element.
 * The work summary is rendered as a div with the html content of the summary.
 * 
 * The component styles the text using tailwindcss classes, and uses the themeColor from the cvInfo object to style the text and borders.
 * 
 * @param {{experience: Array<{title: string, companyName: string, city: string, state: string, startDate: string, endDate: string, workSummary: string}>}} cvInfo 
 */
function ExperiencePreview({cvInfo}) {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 {}`}
      style={{
        color:cvInfo?.themeColor
      }}
      >Professional Experience</h2>
      <hr style={{
        borderColor:cvInfo?.themeColor
      }} />

      {cvInfo?.experience.map((experience,index)=>(
        <div key={index} className='my-5'>
          <h2 className='text-sm font-bold'
          style={{
            color:cvInfo?.themeColor
          }}
          >{experience?.title}</h2>
          <h2 className='text-xs flex justify-between'>{experience?.companyName}, 
            {experience?.city}, 
            {experience?.state}
            <span>{experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate}</span>
          </h2>
          {/* <p className='text-xs my-2'>
            {experience.workSummary}
          </p>*/}
          <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:experience?.workSummary}}/>
        </div>
      ))}
    </div>
  )
}

export default ExperiencePreview

