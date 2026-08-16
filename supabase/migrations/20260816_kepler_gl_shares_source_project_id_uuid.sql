-- source_project_id values are UUID strings of saved dataviz projects.
-- Cast the column so it matches the other *_shares tables.

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'kepler_gl_shares'
      AND column_name = 'source_project_id'
      AND data_type = 'text'
  ) THEN
    IF EXISTS (
      SELECT 1
      FROM public.kepler_gl_shares
      WHERE source_project_id IS NULL
         OR source_project_id !~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
    ) THEN
      RAISE EXCEPTION 'kepler_gl_shares.source_project_id has non-uuid values';
    END IF;

    ALTER TABLE public.kepler_gl_shares
      ALTER COLUMN source_project_id TYPE uuid
      USING source_project_id::uuid;
  END IF;
END $$;
