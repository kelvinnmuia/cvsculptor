import { PlusSquare } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function AddCv() {

    const [openDialog, setOpenDialog]=useState(false)
    const [cvTitle, setCvTitle]=useState();

    const onCreate=()=>{
        const uuid=uuidv4();
        console.log(cvTitle, uuid);
    }
    return (
        <div>
            <div className='p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={() => setOpenDialog(true)}>
                <PlusSquare />
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New CV</DialogTitle>
                        <DialogDescription>
                            <p>Add a title for your new cv</p>
                            <Input className="my-2" 
                            placeholder="E.g. Software Engineer CV"
                            onChange={(e)=>setCvTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button onClick={()=>setOpenDialog(false)}variant="ghost">Cancel</Button>
                            <Button
                              disabled={!cvTitle} 
                            oncClick={()=>onCreate()}>Create</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddCv
