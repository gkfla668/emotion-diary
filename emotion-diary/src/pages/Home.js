import { useState } from "react";
import MyButton from "../components/MyButton";
import MyHeader from "./../components/MyHeader";

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

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
    </div>
  );
};

export default Home;
