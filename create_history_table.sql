CREATE TABLE IF NOT EXISTS public.document_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  document_id UUID NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Note: user_id references profiles(id) instead of auth.users temporarily to avoid RLS/Foreign Key constraint issues if profiles is standalone.
-- If standard supabase auth is used, REFERENCES auth.users(id) is best. I'm using profiles(id) for broader compatibility with CoDoc.

CREATE INDEX IF NOT EXISTS idx_document_history_user_id ON public.document_history(user_id);
CREATE INDEX IF NOT EXISTS idx_document_history_doc_id ON public.document_history(document_id);
