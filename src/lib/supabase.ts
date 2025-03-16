
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Registration form data types
export interface TeamMember {
  name: string;
  rollNo: string;
  email: string;
}

export interface RegistrationData {
  hasTeam: string;
  member1: TeamMember;
  member2?: TeamMember;
  member3?: TeamMember;
  wantsCollaboration: boolean;
  createdAt: string;
}

// Function to submit registration data
export const submitRegistration = async (data: RegistrationData) => {
  const { error } = await supabase.from('registrations').insert([data]);
  
  if (error) {
    throw error;
  }
  
  return { success: true };
};
