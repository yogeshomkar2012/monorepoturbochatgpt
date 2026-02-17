import { resolveData } from "@repo/utils";
import { userHeaderSchema} from "@repo/schema";
export const useUserHeader = () => { 
    const getHeaderData = (serverData) =>
      resolveData(serverData, userHeaderSchema);
    return {
        getHeaderData
    }
    
}