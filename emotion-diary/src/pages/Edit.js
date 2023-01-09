import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";
import { DiaryStateContext } from "./../App";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && (
        <DiaryEditor isEdit={true} originData={originData}></DiaryEditor>
      )}
    </div>
  );
};

export default Edit;
