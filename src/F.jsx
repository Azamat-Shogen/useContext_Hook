import React, {useContext} from 'react';
import { UserContext, ChannelContext } from './App';


function F(){
  
const user = useContext(UserContext);
const channel = useContext(ChannelContext);
 
  return(
    <div>
     {user} - {channel}
    </div>
  )
}

export default F;