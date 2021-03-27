import { createContext } from "react";
import C from "./C";
import "./styles.css";

export const UserContext = createContext();
export const ChannelContext = createContext();

export default function App() {
  
  return (
    <div className="App">
  <UserContext.Provider value={'John Doe'}>
    <ChannelContext.Provider value={"5 news"}>
      <C />
    </ChannelContext.Provider >
    </UserContext.Provider>
    </div>
  );
}
