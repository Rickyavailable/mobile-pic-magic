
import { useState } from 'react';
import { toast } from 'sonner';
import { submitRegistration, TeamMember } from '@/lib/supabase';

export const useRegistrationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTeam, setHasTeam] = useState<string | null>(null);
  const [member1, setMember1] = useState<TeamMember>({ name: '', rollNo: '', email: '' });
  const [member2, setMember2] = useState<TeamMember>({ name: '', rollNo: '', email: '' });
  const [member3, setMember3] = useState<TeamMember>({ name: '', rollNo: '', email: '' });
  const [wantsCollaboration, setWantsCollaboration] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const updateMember = (memberIndex: number, field: keyof TeamMember, value: string) => {
    if (memberIndex === 1) {
      setMember1({ ...member1, [field]: value });
    } else if (memberIndex === 2) {
      setMember2({ ...member2, [field]: value });
    } else if (memberIndex === 3) {
      setMember3({ ...member3, [field]: value });
    }
  };
  
  const handleRegister = async () => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    
    // Form validation
    if (hasTeam === null) {
      toast.error("Please select whether you have a team");
      return;
    }
    
    if (hasTeam === 'yes') {
      // Validate team registration
      if (!member1.name || !member1.rollNo || !member1.email) {
        toast.error("Please fill in all required fields for the first team member");
        return;
      }
      if (!member2.name || !member2.rollNo || !member2.email) {
        toast.error("Please fill in all required fields for the second team member");
        return;
      }
      // Member 3 is optional
    } else {
      // Validate individual registration
      if (!member1.name || !member1.rollNo || !member1.email) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    
    try {
      setIsSubmitting(true);
      
      // Prepare the data
      const registrationData = {
        hasTeam,
        member1,
        member2: hasTeam === 'yes' ? member2 : undefined,
        member3: hasTeam === 'yes' && (member3.name || member3.rollNo || member3.email) ? member3 : undefined,
        wantsCollaboration: hasTeam === 'yes' ? wantsCollaboration : false,
        createdAt: new Date().toISOString(),
      };
      
      // Submit to Supabase
      await submitRegistration(registrationData);
      
      toast.success("Registration successful", {
        description: "We'll be in touch with more details soon.",
        duration: 5000,
      });
      
      // Reset the form
      setHasTeam(null);
      setMember1({ name: '', rollNo: '', email: '' });
      setMember2({ name: '', rollNo: '', email: '' });
      setMember3({ name: '', rollNo: '', email: '' });
      setWantsCollaboration(false);
      setIsOpen(false);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    isOpen,
    hasTeam,
    member1,
    member2,
    member3,
    wantsCollaboration,
    isSubmitting,
    setHasTeam,
    updateMember,
    setWantsCollaboration,
    handleRegister
  };
};
