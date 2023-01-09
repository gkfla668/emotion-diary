import { useState } from "react";
import MyButton from "../components/MyButton";
import MyHeader from "./../components/MyHeader";

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text={"<"}></MyButton>}
        head_text={headText}
        rightChild={<MyButton text={">"}></MyButton>}
      ></MyHeader>
    </div>
  );
};

export default Home;
