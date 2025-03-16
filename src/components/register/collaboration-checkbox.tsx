
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface CollaborationCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const CollaborationCheckbox = ({ checked, onCheckedChange }: CollaborationCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2 pt-2">
      <Checkbox 
        id="collab" 
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked === true)}
        className="data-[state=checked]:bg-primary/50 border-white/20"
      />
      <Label 
        htmlFor="collab" 
        className="text-sm text-white/70 cursor-pointer"
      >
        I want to collaborate with other people
      </Label>
    </div>
  );
};

export default CollaborationCheckbox;
