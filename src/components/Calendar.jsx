import React from 'react'
import Events from './Events'

const Calendar = () => {
  return (
    <div className='calendar'>
      <table>
  <thead>
    <tr>
      <th></th>
      <th>Sunday</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td className="time">8am</td>
      <Events event = "Fancy Dinner 🎩" color = "green" location = "1723 chicago Avenue" />
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <Events event = "Starbucks" color = "blue" location = "1820 Lamu avenue" />
      <td></td>
    </tr>
    <tr>
    <td className="time">9am</td>
      <td></td>
      <Events event = "The Bean" color = "green" location = "1829 Mrisho avenue"/>
      <td></td>
      <td></td>
      <Events event = "Subway" color = "pink" location = "1850 Mpoto avenue"/>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td className="time">10am</td>
      <Events event = "Conservancy" color = "blue" location = "1900 shimo la avenue"/>
      <td></td>
      <td></td>
      <Events event = "Lupaso" color = "green" location = "1920 Maralal avenue"/>
      <td></td>
      <td></td>
      <Events event = "Guest house" color = "pink" location = "2820 Mtaro avenue"/>
    </tr>
    <tr>
      <td className="time">11am</td>
      <td></td>
      <Events event = "Kenyatta stadium" color = "blue" location = "3821 Barsaloi avenue"/>
      <td></td>
      <td></td>
      <td></td>
      <Events event = "Lodokojek" color = "pink" location = "1720 Twenzetu avenue"/>
      <td></td>
    </tr>
    <tr>
      <td className="time">12pm</td>
      <td></td>
      <Events event = "Loosuk" color = "blue" location = "3434 sobua avenue"/>
      <td></td>
      <Events event = "Malaso" color = "pink" location = "9878 Tendete avenue"/>
      <td></td>
      <Events event = "Wamba" color = "green" location = "2143 wacha avenue"/>
      <td></td>
    </tr>
    <tr>
    <td className="time">1pm</td>
      <td></td>
      <Events event = "Marti" color = "green" location = "1543 Rangau avenue"/>
      <td></td>
      <td></td>
      <Events event = "Njarda" color = "blue" location = "1570 SokoMjinga avenue"/>
      <td></td>
    </tr>
    <tr>
      <td className="time">2pm</td>
      <td></td>
      <td></td>
      <Events event = "Barsaloi" color = "pink" location = "1530 Loikas avenue"/>
      <td></td>
      <Events event = "Serian" color = "green" location = "1834 Koden avenue"/>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td className="time">3pm</td>
      <td></td>
      <td></td>
      <Events event = "Allamano" color = "blue" location = "7520 Mopao avenue"/>
      <td></td>
      <Events event = "Rangau" color = "green" location = "1421 Mombasa avenue"/>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td className="time">4pm</td>
      <td></td>
      <Events event = "Mtito Andei" color = "green" location = "1820 Masaka avenue"/>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <Events event = "Diani" color = "pink" location = "1650 kasese avenue"/>
    </tr>
    <tr>
      <td className="time">5pm</td>
      <Events event = "Lelengeju" color = "green" location = "1820 kwakwaru avenue"/>
      <td></td>
      <td></td>
      <Events event = "Lelesoito" color = "blue" location = "1990 lpartuk avenue"/>
      <td></td>
      <td></td>
      <Events event = "Leleito" color = "pink" location = "1320 zaire avenue"/>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default Calendar