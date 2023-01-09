const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
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
