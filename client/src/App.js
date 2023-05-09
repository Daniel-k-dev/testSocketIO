
import { useEffect } from 'react';
import FileUpload from './uploadIMG';
import {socket} from "./socket"
// "undefined" means the URL will be computed from the `window.location` object



function App() {
  const clicked = () =>{  
    socket.emit("join", "joined")
  };
  useEffect(() => {
    socket.connect();
    socket.on('join', (msg) => console.log(msg));
    socket.on('msg', (msg) => console.log(msg))
  }, []);
  return (
    <div>
      <FileUpload></FileUpload>
      <button onClick={clicked}>click</button>
    </div>
  );
}

export default App;
