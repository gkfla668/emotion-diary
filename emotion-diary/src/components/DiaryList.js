import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it) => (
        <option value={it.value}>{it.name}</option>
      ))}
    </select>
  );
};
const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");

  return (
    <div className="DiaryList">
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      ></ControlMenu>
      {diaryList.map((it) => (
        <div ket={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
