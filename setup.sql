-- Create users profile table to store custom info (username, color)
CREATE TABLE public.profiles (
  id uuid references auth.users not null primary key,
  username text unique not null,
  color text
);

-- Trigger to automatically create a profile when a new user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, color)
  values (new.id, new.raw_user_meta_data->>'username', '#10b981');
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create documents table
CREATE TABLE public.documents (
  id uuid default uuid_generate_v4() primary key,
  title text not null default 'Untitled Document',
  content text default '',
  owner_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create document permissions table
CREATE TABLE public.document_permissions (
  doc_id uuid references public.documents(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  role text not null check (role in ('editor', 'commenter', 'viewer')),
  primary key (doc_id, user_id)
);

-- Enable Supabase Realtime for documents
alter publication supabase_realtime add table public.documents;
