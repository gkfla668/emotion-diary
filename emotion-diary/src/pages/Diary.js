import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";
import EmotionItem from "../components/EmotionItem";

const Diary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(data.emotion) === parseInt(it.emotion_id)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          leftChild={
            <MyButton
              text={"< 뒤로가기"}
              onClick={() => {
                navigate(-1);
              }}
            ></MyButton>
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
            ></MyButton>
          }
          head_text={`${getStringDate(new Date(data.date))}의 기록`}
        ></MyHeader>

        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={["EmotionItem", `EmotionItem_on_${data.emotion}`].join(
                " "
              )}
            >
              <img src={curEmotionData.emotion_img}></img>
              <span>{curEmotionData.emotion_descript}</span>
            </div>
          </section>

          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
