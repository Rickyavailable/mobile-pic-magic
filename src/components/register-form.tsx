
import React, { useState } from 'react';
import { toast } from 'sonner';
import RegisterButton from './ui/register-button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { User, Mail, BookOpen, Loader2 } from 'lucide-react';
import { submitRegistration, TeamMember } from '@/lib/supabase';

const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTeam, setHasTeam] = useState<string | null>(null);
  const [member1, setMember1] = useState<TeamMember>({ name: '', rollNo: '', email: '' });
  const [member2, setMember2] = useState<TeamMember>({ name: '', rollNo: '', email: '' });
  const [member3, setMember3] = useState<TeamMember>({ name: '', rollNo: '', email: '' });
  const [wantsCollaboration, setWantsCollaboration] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const updateMember = (memberIndex: number, field: keyof TeamMember, value: string) => {
    if (memberIndex === 1) {
      setMember1({ ...member1, [field]: value });
    } else if (memberIndex === 2) {
      setMember2({ ...member2, [field]: value });
    } else if (memberIndex === 3) {
      setMember3({ ...member3, [field]: value });
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div 
        className={`
          glass-card rounded-2xl p-1 overflow-hidden transition-all duration-500 ease-out
          ${isOpen ? 'h-auto opacity-100' : 'h-auto opacity-100'}
        `}
      >
        <div className="p-6 flex flex-col items-center">
          {isOpen ? (
            <div className="w-full space-y-4 animate-fade-in">
              <h3 className="text-lg font-medium text-center mb-6">Complete Registration</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white/70">Do you have a team?</Label>
                  <RadioGroup 
                    value={hasTeam || ''} 
                    onValueChange={setHasTeam}
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
                
                {hasTeam && (
                  <div className="space-y-4 pt-2">
                    {/* Member 1 (Required for both team and individual) */}
                    <div className="p-4 border border-white/10 rounded-lg space-y-3">
                      <h4 className="font-medium">
                        {hasTeam === 'yes' ? 'Team Member 1 (You)' : 'Your Details'}
                      </h4>
                      
                      <div className="space-y-2">
                        <Label className="text-sm text-white/70" htmlFor="name1">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                          <Input
                            id="name1"
                            value={member1.name}
                            onChange={(e) => updateMember(1, 'name', e.target.value)}
                            placeholder="Enter full name"
                            className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm text-white/70" htmlFor="rollNo1">
                          Roll Number
                        </Label>
                        <div className="relative">
                          <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                          <Input
                            id="rollNo1"
                            value={member1.rollNo}
                            onChange={(e) => updateMember(1, 'rollNo', e.target.value)}
                            placeholder="Enter roll number"
                            className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm text-white/70" htmlFor="email1">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                          <Input
                            id="email1"
                            type="email"
                            value={member1.email}
                            onChange={(e) => updateMember(1, 'email', e.target.value)}
                            placeholder="Enter email address"
                            className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Team Members 2 & 3 (Only if hasTeam is yes) */}
                    {hasTeam === 'yes' && (
                      <>
                        {/* Member 2 (Required) */}
                        <div className="p-4 border border-white/10 rounded-lg space-y-3">
                          <h4 className="font-medium">Team Member 2</h4>
                          
                          <div className="space-y-2">
                            <Label className="text-sm text-white/70" htmlFor="name2">
                              Full Name
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                              <Input
                                id="name2"
                                value={member2.name}
                                onChange={(e) => updateMember(2, 'name', e.target.value)}
                                placeholder="Enter full name"
                                className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label className="text-sm text-white/70" htmlFor="rollNo2">
                              Roll Number
                            </Label>
                            <div className="relative">
                              <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                              <Input
                                id="rollNo2"
                                value={member2.rollNo}
                                onChange={(e) => updateMember(2, 'rollNo', e.target.value)}
                                placeholder="Enter roll number"
                                className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label className="text-sm text-white/70" htmlFor="email2">
                              Email
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                              <Input
                                id="email2"
                                type="email"
                                value={member2.email}
                                onChange={(e) => updateMember(2, 'email', e.target.value)}
                                placeholder="Enter email address"
                                className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Member 3 (Optional) */}
                        <div className="p-4 border border-white/10 rounded-lg space-y-3">
                          <h4 className="font-medium">Team Member 3 (Optional)</h4>
                          
                          <div className="space-y-2">
                            <Label className="text-sm text-white/70" htmlFor="name3">
                              Full Name
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                              <Input
                                id="name3"
                                value={member3.name}
                                onChange={(e) => updateMember(3, 'name', e.target.value)}
                                placeholder="Enter full name (optional)"
                                className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label className="text-sm text-white/70" htmlFor="rollNo3">
                              Roll Number
                            </Label>
                            <div className="relative">
                              <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                              <Input
                                id="rollNo3"
                                value={member3.rollNo}
                                onChange={(e) => updateMember(3, 'rollNo', e.target.value)}
                                placeholder="Enter roll number (optional)"
                                className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label className="text-sm text-white/70" htmlFor="email3">
                              Email
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                              <Input
                                id="email3"
                                type="email"
                                value={member3.email}
                                onChange={(e) => updateMember(3, 'email', e.target.value)}
                                placeholder="Enter email address (optional)"
                                className="pl-10 bg-white/5 border border-white/10 focus:ring-white/20"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                {hasTeam && (
                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id="collab" 
                      checked={wantsCollaboration}
                      onCheckedChange={(checked) => setWantsCollaboration(checked === true)}
                      className="data-[state=checked]:bg-primary/50 border-white/20"
                    />
                    <Label 
                      htmlFor="collab" 
                      className="text-sm text-white/70 cursor-pointer"
                    >
                      I want to collaborate with other people
                    </Label>
                  </div>
                )}
                
                <div className="pt-4">
                  <RegisterButton 
                    onClick={handleRegister}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </RegisterButton>
                </div>
              </div>
            </div>
          ) : (
            <RegisterButton 
              onClick={handleRegister}
              className="w-full py-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Register now'}
            </RegisterButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
