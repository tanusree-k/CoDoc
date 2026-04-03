-- Enable RLS on profiles and document_permissions
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_permissions ENABLE ROW LEVEL SECURITY;

-- Allow users to read all profiles (needed for user list, awareness, and avatars)
CREATE POLICY "Profiles are viewable by everyone."
  ON public.profiles FOR SELECT
  USING ( true );

-- Allow users to insert/update their own profile
CREATE POLICY "Users can insert their own profile."
  ON public.profiles FOR INSERT
  WITH CHECK ( auth.uid() = id );

CREATE POLICY "Users can update their own profile."
  ON public.profiles FOR UPDATE
  USING ( auth.uid() = id );

-- Document Permissions RLS
-- Users can see permissions for documents they are a part of (owner, editor, commenter, viewer)
CREATE POLICY "Users can view permissions for their documents"
  ON public.document_permissions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.documents d
      WHERE d.id = doc_id AND d.owner_id = auth.uid()
    )
    OR user_id = auth.uid()
  );

-- Only owners/editors should really be modifying permissions, but to enable basic functionality:
CREATE POLICY "Users can manage permissions for their documents"
  ON public.document_permissions FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.documents d
      WHERE d.id = doc_id AND d.owner_id = auth.uid()
    )
  );

-- For robust RLS, we would need more complex policies checking the roles, but these basic
-- policies will resolve the 403 / 406 errors on the frontend for authenticated users.
