import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "./../components/MyHeader";

import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  // 날짜에 따라 가공된 일기 리스트 생성
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // 날짜가 변경될 시 리스트가 변경되어야 하므로
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text={"<"} onClick={decreaseMonth}></MyButton>}
        head_text={headText}
        rightChild={<MyButton text={">"} onClick={increaseMonth}></MyButton>}
      ></MyHeader>
      <DiaryList diaryList={data}></DiaryList>
    </div>
  );
};

export default Home;
