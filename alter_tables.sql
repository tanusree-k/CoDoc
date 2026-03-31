ALTER TABLE public.documents 
ADD COLUMN comments jsonb default '[]'::jsonb,
ADD COLUMN versions jsonb default '[]'::jsonb;
