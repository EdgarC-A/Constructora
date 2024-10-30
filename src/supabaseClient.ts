import { createClient, User, AuthResponse } from "@supabase/supabase-js";

// Tu código de inicialización de Supabase
export const supabase = createClient(
  "https://tzzdhfdvbfeouwqeemdn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6emRoZmR2YmZlb3V3cWVlbWRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTc4NTI2MCwiZXhwIjoyMDQ1MzYxMjYwfQ.Xqw22vUTCxDwqwNT8AVCD0sFD_yX2dPmNGZ_GW3ffVI"
);
