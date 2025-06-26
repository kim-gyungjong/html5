import { useState } from 'react'

function App() {
  const [lat, set_lat] = useState()

   navigator.geolocation.getCurrentPosition( (position) => {
        const lat0 = position.coords.latitude;
        const lon0 = position.coords.longitude;
        const accuracy0 = position.coords.accuracy;
               set_lat(lat0)
   })



  return (
    <div>
      위도: {lat} <br/>
      경도: {lon} <br/>
      정확도 : {accuracy}
    </div>

 )

}




export default App
