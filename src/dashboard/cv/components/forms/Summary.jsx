import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Summary() {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Summary</h2>
        <p>Add Summary for your job title</p>

        <div className="mt-7">
            <div className="flex justify-between items-end">
                <label>Add Summary</label>
                <Button variant="outline"size="sm" className="border-primary text-primary">Generate from AI</Button>
            </div>
            <Textarea className="mt-5" />
        </div>
      </div>
    </div>
  )
}

export default Summary
