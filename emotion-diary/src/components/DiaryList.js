import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const filterOptionList = [
  { value: "all", name: "모두" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "나쁜 감정만" },
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
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      }

      return parseInt(item.emotion) > 3;
    };

    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      }

      return parseInt(a.date) - parseInt(b.date);
    };

    // 원본 배열 건드리지 않기 위해 깊은 복사
    const copyList = JSON.parse(JSON.stringify(diaryList)); // 문자열로 바꼈다가 배열로

    const filterList =
      filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filterList.sort(compare);

    return sortedList;
  };

  return (
    <div className="DiaryList">
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      ></ControlMenu>
      <ControlMenu
        value={filter}
        onChange={setFilter}
        optionList={filterOptionList}
      ></ControlMenu>
      {getProcessedDiaryList().map((it) => (
        <div ket={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
