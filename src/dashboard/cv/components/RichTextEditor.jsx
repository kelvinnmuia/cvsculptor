import React, { useState } from 'react'
import { Editor, EditorProvider } from 'react-simple-wysiwyg'

function RichTextEditor() {
    const [value,setValue]=useState();
  return (
    <div>
      <EditorProvider>
      <Editor value={value} onChange={()=>{
        setValue(e.target.value)
      }}>

      </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor
