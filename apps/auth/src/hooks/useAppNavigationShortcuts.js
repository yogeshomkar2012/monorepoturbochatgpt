import { useKeyboardShortCuts } from "@repo/utils";
import { useNavigate } from "react-router-dom";

export function useAppNavigationShortcuts() {
  const navigate = useNavigate();
  useKeyboardShortCuts((action) => {
    switch (action) {
      case "ABOUT":
        navigate("/about");
        break;
      case "SERVICES":
        navigate("/services");
        break;
      case "LOGIN":
        navigate("/login");
        break;
      case "CONTACT":
        navigate("/contact");
        break;
      case "HOME":
        navigate("/home");
        break;
      case "SIGNUP":
        navigate("/signup");
        break;
      case "SERVICE_DETAILS_ROAD":
        navigate("/services/road");
        break;
      case "SERVICE_DETAILS_AIR":
        navigate("/services/air");
        break;
      case "SERVICE_DETAILS_WAREHOUSE":
        navigate("/services/warehouse");
        break;
      case "SERVICE_DETAILS_OCEAN":
        navigate("/services/ocean");
        break;
      case "SERVICE_DETAILS_EXPRESS":
        navigate("/services/express");
        break;
      case "SERVICE_DETAILS_SUPLLY_CHAIN":
        navigate("/services/supply-chain");
        break;
      default:
        break;
    }
  });
}
