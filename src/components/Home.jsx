import React from 'react';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import './Common.css';
import 'semantic-ui-css/semantic.min.css'
import Result from './Result';

const Today = new Date();
registerLocale('ja', ja);

const Home = () => {
  const [date, setDate] = React.useState(addDays(new Date(), 14));
  const [budget, setbudget] = React.useState('12000');
  const [departure, setDeparture] = React.useState('1');
  const [duration, setDuration] = React.useState('90');
  const [plans, setPlans] = React.useState([]);
  const [planCount, setPlanCount] = React.useState(0);

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get('https://l1kwik11ne.execute-api.ap-northeast-1.amazonaws.com/production/golf-courses', {
      params: { date: format(date, 'yyyyMMdd'), budget: budget, departure: departure, duration: duration }
    });
    setPlans(response.data.plans);
    setPlanCount(response.data.count);
  }

  return (
    <div className="ui container" id="container">
    <div className="Search__Form">
      <form className="ui form segment" onSubmit={onFormSubmit}>
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
      <Result plans={plans} planCount={planCount} />
    </div>
  </div>
  );
};

export default Home;
