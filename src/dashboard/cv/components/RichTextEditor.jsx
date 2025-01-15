import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import React, { useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'

function RichTextEditor({onRichTextEditorChange}) {
    const [value, setValue] = useState();
    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button variant='outline'className='flex gap-2 border-primary text-primary'>
                    <Brain className='h-4 w-4' /> Generate from AI</Button>
            </div>
            <EditorProvider>
                <Editor value={value} onChange={(e)=> {
                    setValue(e.target.value)
                    onRichTextEditorChange(e)
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
