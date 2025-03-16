
import React from 'react';
import { Loader2 } from 'lucide-react';
import RegisterButton from './ui/register-button';
import TeamSelection from './register/team-selection';
import TeamMemberInput from './register/team-member-input';
import CollaborationCheckbox from './register/collaboration-checkbox';
import { useRegistrationForm } from './register/use-registration-form';

const RegisterForm = () => {
  const {
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
  } = useRegistrationForm();
  
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
                <TeamSelection 
                  value={hasTeam} 
                  onChange={setHasTeam} 
                />
                
                {hasTeam && (
                  <div className="space-y-4 pt-2">
                    {/* Member 1 (Required for both team and individual) */}
                    <TeamMemberInput 
                      member={member1}
                      memberIndex={1}
                      updateMember={updateMember}
                    />
                    
                    {/* Team Members 2 & 3 (Only if hasTeam is yes) */}
                    {hasTeam === 'yes' && (
                      <>
                        {/* Member 2 (Required) */}
                        <TeamMemberInput 
                          member={member2}
                          memberIndex={2}
                          updateMember={updateMember}
                        />
                        
                        {/* Member 3 (Optional) */}
                        <TeamMemberInput 
                          member={member3}
                          memberIndex={3}
                          updateMember={updateMember}
                          isOptional={true}
                        />
                      </>
                    )}
                  </div>
                )}
                
                {hasTeam === 'yes' && (
                  <CollaborationCheckbox 
                    checked={wantsCollaboration}
                    onCheckedChange={setWantsCollaboration}
                  />
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
