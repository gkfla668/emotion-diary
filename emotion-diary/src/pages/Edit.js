import { useState, useContext, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import DiaryEditor from "../components/DiaryEditor";
import { DiaryStateContext } from "./../App";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [originData, setOriginData] = useState();
  const diaryList = useContext(DiaryStateContext);

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
