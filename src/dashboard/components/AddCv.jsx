import { PlusSquare } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
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
                            <Input className="my-2" placeholder="E.g. Software Engineer CV"/>
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button variant="ghost">Cancel</Button>
                            <Button>Create</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddCv
