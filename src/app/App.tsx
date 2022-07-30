import { Rts } from "./routes";
import { UserLogProvider } from "./shared/contexts/UserLog";




export const  App = () => {
  return (
    
   <UserLogProvider>
    <Rts/>
    </UserLogProvider>
    
  );
}


