
import { createClient } from '@supabase/supabase-js';

// Define TeamMember interface for use throughout the app
export interface TeamMember {
  name: string;
  rollNo: string;
  email: string;
}

// Define registration data interface
export interface RegistrationData {
  hasTeam: string | null;
  member1: TeamMember;
  member2?: TeamMember;
  member3?: TeamMember;
  wantsCollaboration: boolean;
  createdAt: string;
}

// Create a mock function for local development
export const submitRegistration = async (data: RegistrationData): Promise<void> => {
  // In a real app, this would send data to Supabase
  console.log('Registration data submitted:', data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return success (would normally return the data from Supabase)
  return Promise.resolve();
};

// Note: To use actual Supabase, uncomment and configure with your credentials
/*
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export const submitRegistration = async (data: RegistrationData): Promise<void> => {
  const { error } = await supabase
    .from('registrations')
    .insert([data]);
  
  if (error) throw error;
};
*/
