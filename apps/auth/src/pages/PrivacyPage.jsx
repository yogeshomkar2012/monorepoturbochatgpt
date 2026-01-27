import LegalPage from "./LegalPage";
import { privacySchema } from "@repo/app-schema";

export default function PrivacyPage() {
  return <LegalPage {...privacySchema} />;
}
