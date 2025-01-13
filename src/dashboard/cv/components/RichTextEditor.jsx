import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'

function RichTextEditor() {
    const [value, setValue] = useState();
    return (
        <div>
            <EditorProvider>
                <Editor value={value} onChange={()=> {
                    setValue(e.target.value)
                }}>
                    <Toolbar>
                        <BtnUndo />
                        <BtnRedo />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>

                </Editor>
            </EditorProvider>
        </div>
    )
}

export default RichTextEditor
