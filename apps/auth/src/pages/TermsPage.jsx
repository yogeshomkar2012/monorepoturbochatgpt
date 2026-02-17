import { termsSchema } from "@repo/app-schema";
import LegalPage from "./LegalPage";
import { MainWrapper } from "@repo/ui";

export default function TermsPage() {
  return (
    <>
      <MainWrapper className="pt-5! ">
        <LegalPage {...termsSchema} />
      </MainWrapper>
    </>
  );
}
