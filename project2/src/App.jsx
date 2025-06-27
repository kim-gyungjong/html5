import {useState} from 'react';



function App() {
  const [did_time, set_did_time] = useState("");
  function getdate()
  {
    const date = new Date();
    const a = date.toLocaleDateString('ko-KR')
    const b = date.toLocaleTimeString('ko-KR')
    
    console.log("a=",a)
    console.log("b=",b)

    function checkTime()
    {let current_time = getdate()
      set_did_time(current_time)
    }
   
    return a + ' ' + b
  }

  return (
    <>  <div>
    <div><button onClick={checkTime}>차키</button></div>
      <div>{did_time}</div>
      </div>
    </>
  )
}

export default App