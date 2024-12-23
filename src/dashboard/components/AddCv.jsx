import { Loader2, PlusSquare } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useUser } from '@clerk/clerk-react'


function AddCv() {

    const [openDialog, setOpenDialog] = useState(false)
    const [cvTitle, setCvTitle] = useState();
    const { user } = useUser();
    const [loading, setLoading] = useState(false)

    const onCreate = async () => {
        setLoading(true);
        const uuid = uuidv4();
        const data = {
            data: {
                title: cvTitle,
                cvid: uuid,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            }
        }
        GlobalApi.CreateNewCv(data).then(resp => {
            console.log(resp);
            if (resp) {
                setLoading(false);
            }
        }, (error) => {
            setLoading(false);
        })
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
                                onChange={(e) => setCvTitle(e.target.value)}
                            />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
                            <Button
                                disabled={!cvTitle || loading}
                                oncClick={() => onCreate()}>
                                {loading ?
                                    <Loader2 className='animate-spin' /> : 'Create'
                                }
                            </Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddCv
