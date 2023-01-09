import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date()));

  return (
    <div className="DiaryEditor">
      <MyHeader
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)}></MyButton>
        }
        head_text={"새 일기쓰기"}
      ></MyHeader>
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
        </section>
        <section>
          <h4>오늘의 감정은?</h4>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default DiaryEditor;
