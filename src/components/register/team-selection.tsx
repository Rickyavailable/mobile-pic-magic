
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface TeamSelectionProps {
  value: string | null;
  onChange: (value: string) => void;
}

const TeamSelection = ({ value, onChange }: TeamSelectionProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-white/70">Do you have a team?</Label>
      <RadioGroup 
        value={value || ''} 
        onValueChange={onChange}
        className="flex space-x-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="team-yes" />
          <Label htmlFor="team-yes">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="team-no" />
          <Label htmlFor="team-no">No</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default TeamSelection;
