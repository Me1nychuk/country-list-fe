import { MainPageContent } from "@/shared/components/shared";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader2 className="animate-spin" />}>
      <MainPageContent />
    </Suspense>
  );
}
