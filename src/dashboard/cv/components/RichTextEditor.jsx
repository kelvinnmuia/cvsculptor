import { Button } from '@/components/ui/button';
import { CvInfoContext } from '@/context/CvInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModel';
import { toast } from 'sonner';

const PROMPT=`position title: {positionTitle}, Based on the position title, provide 5-7 bullet points for my experience in resume. 
Return the response as a JSON array of strings`;
function RichTextEditor({onRichTextEditorChange,index}) {
    const [value,setValue] = useState('<ul><li>Developed and maintained a customer portal, resulting in a 15% increase in customer satisfaction.</li> <li>Implemented responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript, enhancing the user experience </li> </ul>');
    const {cvInfo,setCvInfo}=useContext(CvInfoContext);
    const [loading,setLoading]=useState(false);
    const GenerateSummaryFromAI=async()=>{
        setLoading(true);
        if (!cvInfo.experience[index].title)
            {
                toast('Please Add Position Title');
                return;
            }
        const prompt=PROMPT.replace('{positionTitle}',cvInfo.experience[index].title);
        const result=await AIChatSession.sendMessage(prompt);
        console.log(result.response.text());
        const resp=result.response.text()
        setValue(resp);
        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-xs'>Summary</label>
                <Button variant='outline' size='sm'
                onClick={GenerateSummaryFromAI}
                className='flex gap-2 border-primary text-primary'>
                    {loading?
                    <LoaderCircle className='animate-spin'/>:
                    <>
                    <Brain className='h-4 w-4' /> Generate from AI
                    </>
                }
                    </Button>
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
