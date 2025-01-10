import React from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function FormSection() {
  return (
    <div>
      <div>
        <Button>Theme</Button>
        <div>
          <Button className="flex gap-2" size="sm"> Next <ArrowRight/> </Button>
        </div>
      </div>
      {/* Personal Detail */}
      <PersonalDetail/>
      {/* Summary */}

      {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}

    </div>
  )
}

export default FormSection
