
import { termsSchema } from "@repo/app-schema";
import LegalPage from "./LegalPage";

export default function TermsPage() {
  return <LegalPage {...termsSchema} />;
}
