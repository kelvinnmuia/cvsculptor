import React from 'react'

function PersonalDetailPreview(cvInfo) {
  return (
    <div>
      <h2>{cvInfo?.firstName} {cvInfo?.lastName}</h2>
    </div>
  )
}

export default PersonalDetailPreview
