import React from 'react'

/**
 * A component to preview the skills in a CV.
 * 
 * The component renders a heading in the theme color, and then a grid of skills. Each skill is rendered as a flexbox with the skill name on the left and the skill rating on the right. The skill rating is rendered as a horizontal bar with the length of the bar proportional to the rating.
 * 
 * @param {{cvInfo: {themeColor: string, skills: {name: string, rating: number}[]}}} props The theme color and the skills to render.
 * @returns {JSX.Element} The rendered SkillsPreview component.
 */
function SkillsPreview({cvInfo}) {
  return (
    <div className='my-6'>
      <h2 className={`text-center font-bold text-sm mb-2 {}`}
      style={{
        color:cvInfo?.themeColor
      }}
      >Skills</h2>
      <hr style={{
        borderColor:cvInfo?.themeColor
      }} />

      <div className='grid grid-cols-2 gap-3 my-4'>
        {cvInfo?.skills.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h2 className='text-xs'>{skill.name}</h2>
                <div className='h-2 bg-gray-200 w-[120px]'>
                    <div className='h-2'
                    style={{
                        backgroundColor:cvInfo?.themeColor,
                        width:skill?.rating+'%'
                    }}
                    >

                    </div>
            </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPreview
