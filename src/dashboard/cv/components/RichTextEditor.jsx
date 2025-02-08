import { Button } from '@/components/ui/button';
import { CvInfoContext } from '@/context/CvInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo, Editor, EditorProvider, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModel';
import { toast } from 'sonner';

const PROMPT=`position title: {positionTitle}, Based on the position title, provide 5-7 bullet points for my experience in resume. 
Return the response as a JSON array of strings`;
/**
 * RichTextEditor component for editing text with formatting options.
 *
 * This component provides a rich text editor with a toolbar for formatting options
 * such as bold, italic, underline, and more. It also includes a button to generate
 * a summary from AI based on the position title in the user's experience.
 *
 * @param {Function} onRichTextEditorChange - Callback function to handle text change events.
 * @param {number} index - The index of the experience item in the CV information.
 * @param {string} defaultValue - The initial value of the editor.
 * @returns {JSX.Element} The rendered RichTextEditor component.
 */

function RichTextEditor({onRichTextEditorChange,index,defaultValue}) {
    const [value,setValue] = useState(defaultValue);
    const {cvInfo,setCvInfo}=useContext(CvInfoContext);
    const [loading,setLoading]=useState(false);
    /**
     * Generates a summary from AI based on the position title in the user's experience.
     * 
     * This function sends a message to the AI chat session with the prompt to generate a summary
     * based on the position title in the user's experience. It then replaces the current value of the
     * rich text editor with the response from the AI and sets the loading state to false.
     * 
     * If the position title is empty, it shows a toast message to add the position title.
     */
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
        setValue(resp.replace('[','').replace(']',''));
        setLoading(false);
    }

    return (
        <div>
            <div className='flex justify-between my-2'>
                <label className='text-sm'>Summary</label>
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
