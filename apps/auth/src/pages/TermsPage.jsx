import { termsSchema } from "@repo/app-schema";
import LegalPage from "./LegalPage";
import { MainWrapper } from "@repo/ui";
import FooterContainer from "../containers/FooterContainer";

export default function TermsPage() {
  return (
    <>
      <MainWrapper className="pt-5! ">
        <LegalPage {...termsSchema} />
      </MainWrapper>
      <FooterContainer />
    </>
  );
}
