import { Suspense } from "react";
import EditPromptForm from "@components/EditPromptForm";

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPromptForm />
    </Suspense>
  );
}
