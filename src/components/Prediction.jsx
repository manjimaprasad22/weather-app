import React from 'react'
import '../assets/style.css'

const Prediction = ({data}) => {
    console.log(data);
    const firstFiveTime = data?.hourly?.time.slice(0, 7);
    const firstFiveTemp = data?.hourly?.temperature_2m.slice(0, 7);
    const combinedData1 = firstFiveTime?.map((time, index) => ({
        time,
        temperature: firstFiveTemp[index]
      }));
    const nextFiveTime = data?.hourly?.time.slice(7,14);
    const nextFiveTemp = data?.hourly?.temperature_2m.slice(7,14);
    const combinedData2 = nextFiveTime?.map((time, index) => ({
        time,
        temperature: nextFiveTemp[index]
      }));
      
  return (
    <div className='row'>
       <div className="col-12 prediction-card d-block">
       <div className="col-12 d-flex">
  {combinedData1?.map((obj, index) => {
    const date = new Date(obj?.time);

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    const time = date.toLocaleString('en-US', options);

    return (
      <div key={index} className="prediction-item p-2">
        {time}<br />
        <i className="fa-solid fa-cloud"></i> {obj?.temperature} &deg;
      </div>
    );
  })}

  
</div>
<hr />
<div className="col-12 d-flex">
  {combinedData2?.map((obj, index) => {
    const date = new Date(obj?.time);

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    const time = date.toLocaleString('en-US', options);

    return (
      <div key={index} className="prediction-item p-2">
        {time}<br />
        <i className="fa-solid fa-cloud"></i> {obj?.temperature} &deg;
      </div>
    );
  })}

  
</div>


</div>

        <div className="col-12 news">
            <h3 className='m-4'>Are temperatures set to rise next week?</h3>
            <p className='m-4'><b>July looks set to end on a warm note for many in the UK with temperatures climbing above average and reaching the high 20Cs in the hottest areas.</b><br/>

The transition to warmer weather takes place this weekend and is brought about by a significant change in the Atlantic jet stream.

Scotland, England and Wales will have a fine start to Saturday with some sunshine. However, a rapidly weakening weather front will bring showers or longer spells of rain to Northern Ireland.

Through the morning, cloud will bubble up and by the afternoon showers will develop and become quite widespread across the UK. The heaviest will be in east Scotland and north-east England where there may be a rumble of thunder or two.

Maximum temperatures will reach 18 to 23C, close to the average for the time of year, and it will feel warm in any July sunshine.</p>
        </div>
      
    </div>
  )
}

export default Prediction
