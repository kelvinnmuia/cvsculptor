import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'

const PROMPT='position title: {positionTitle} , Depends on position title give me 5-7 bullet points for my experience in resume, give me result in HTML format'

function RichTextEditor({onRichTextEditorChange,index}) {
    const [value,setValue] = useState('<ul> <li> Developed and maintained a customer portal, resulting in a 15% increase in customer satisfaction. </li> </ul>');
    const {cvInfo,setCVInfor}=useContext(CvInfoContext);
    const GenerateSummaryFromAI=()=>{
        const prompt=PROMPT.replace('{positionTitle}',cvInfo.experience[index].title)
    }

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
