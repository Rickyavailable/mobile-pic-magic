
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, Mail, BookOpen } from 'lucide-react';
import { TeamMember } from '@/lib/supabase';

interface TeamMemberInputProps {
  member: TeamMember;
  memberIndex: number;
  updateMember: (memberIndex: number, field: keyof TeamMember, value: string) => void;
  isOptional?: boolean;
}

const TeamMemberInput = ({ 
  member, 
  memberIndex, 
  updateMember,
  isOptional = false 
}: TeamMemberInputProps) => {
  return (
    <div className="p-4 border border-white/10 rounded-lg space-y-3">
      <h4 className="font-medium">
        {memberIndex === 1 ? 'Your Details' : 
         `Team Member ${memberIndex}${isOptional ? ' (Optional)' : ''}`}
      </h4>
      
      <div className="space-y-2">
        <Label className="text-sm text-white/70" htmlFor={`name${memberIndex}`}>
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
          <Input
            id={`name${memberIndex}`}
            value={member.name}
            onChange={(e) => updateMember(memberIndex, 'name', e.target.value)}
            placeholder={`Enter full name${isOptional ? ' (optional)' : ''}`}
            className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label className="text-sm text-white/70" htmlFor={`rollNo${memberIndex}`}>
          Roll Number
        </Label>
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
          <Input
            id={`rollNo${memberIndex}`}
            value={member.rollNo}
            onChange={(e) => updateMember(memberIndex, 'rollNo', e.target.value)}
            placeholder={`Enter roll number${isOptional ? ' (optional)' : ''}`}
            className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label className="text-sm text-white/70" htmlFor={`email${memberIndex}`}>
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
          <Input
            id={`email${memberIndex}`}
            type="email"
            value={member.email}
            onChange={(e) => updateMember(memberIndex, 'email', e.target.value)}
            placeholder={`Enter email address${isOptional ? ' (optional)' : ''}`}
            className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberInput;
