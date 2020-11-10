import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import addDays from 'date-fns/addDays';
import './Common.css';
import 'semantic-ui-css/semantic.min.css'

const Today = new Date();
registerLocale('ja', ja);

const Home = () => {
  const [date, setDate] = React.useState(addDays(new Date(), 14));
  const [budget, setbudget] = React.useState('12000');
  const [departure, setDeparture] = React.useState('1');
  const [duration, setDuration] = React.useState('90');
  console.debug(date);
  console.debug(budget);
  console.debug(departure);
  console.debug(duration);

  return (
    <div className="ui container" id="container">
    <div className="Search__Form">
      <form className="ui form segment">
        <div className="field">
          <label><i className="calendar alternate outline icon"></i>プレー日</label>
          <DatePicker
            locale="ja"
            dateFormat="yyyy/MM/dd"
            selected={date}
            onChange={e => setDate(e)}
            minDate={Today}
          />
        </div>
        <div className="field">
          <label><i className="yen sign icon"></i>上限金額</label>
          <select 
            lassName="ui dropdown"
            name="dropdown"
            value={budget}
            onChange={e => setbudget(e.target.value)}
          >
            <option value="8000">8,000円</option>
            <option value="12000">12,000円</option>
            <option value="16000">16,000円</option>
          </select>
        </div>
        <div className="field">
          <label><i className="map pin icon"></i>移動時間計算の出発地点（自宅から近い地点をお選びください）</label>
          <select
            className="ui dropdown"
            name="dropdown"
            value={departure}
            onChange={e => setDeparture(e.target.value)}
          >
            <option value="1">東京駅</option>
            <option value="2">横浜駅</option>
          </select>
        </div>
        <div className="field">
          <label><i className="car icon"></i>車での移動時間の上限</label>
          <select
            className="ui dropdown"
            name="dropdown"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
            <option value="60">60分</option>
            <option value="90">90分</option>
            <option value="120">120分</option>
          </select>
        </div>
        <div className="Search__Button">
          <button type="submit" className="Search__Button__Design">
            <i className="search icon"></i>ゴルフ場を検索する
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Home;
