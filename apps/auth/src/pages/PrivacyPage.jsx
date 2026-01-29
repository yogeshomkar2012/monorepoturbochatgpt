import LegalPage from "./LegalPage";
import { privacySchema } from "@repo/app-schema";
import { MainWrapper } from "@repo/ui";
import FooterContainer from "../containers/FooterContainer";

export default function PrivacyPage() {
  return (
    <>
      <MainWrapper className="pt-5! ">
        <LegalPage {...privacySchema} />
      </MainWrapper>
      <FooterContainer />
    </>
  );
}
