
# Deployment Instructions

This guide will help you deploy your website with Supabase as the database backend.

## Step 1: Create a Supabase Account and Project

1. Sign up for a free account at [Supabase](https://supabase.com)
2. Create a new project
3. Note your Supabase project URL and anon key from the API settings

## Step 2: Set Up the Database Table

1. In the Supabase Dashboard, go to the SQL Editor
2. Run the following SQL to create your registrations table:

```sql
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  has_team TEXT NOT NULL,
  member1 JSONB NOT NULL,
  member2 JSONB,
  member3 JSONB,
  wants_collaboration BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone
CREATE POLICY "Allow anonymous inserts" ON registrations
FOR INSERT TO anon
WITH CHECK (true);
```

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root with the following:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

2. Add these environment variables to your deployment platform as well.

## Step 4: Deploy to a Hosting Service

You can deploy to any of these services:

### Netlify:
1. Push your code to a GitHub repository
2. Create an account on [Netlify](https://netlify.com)
3. Create a new site from your Git repository
4. Add your environment variables in the site settings
5. Deploy your site

### Vercel:
1. Push your code to a GitHub repository
2. Create an account on [Vercel](https://vercel.com)
3. Import your Git repository
4. Add your environment variables in the project settings
5. Deploy your site

## Step 5: Test Your Deployment

After deployment, test the registration form to make sure data is being submitted to your Supabase database.

## Step 6: View Submitted Data

You can view submitted registrations in the Supabase Dashboard under:
1. Table Editor
2. Select the "registrations" table
3. View all submitted entries
