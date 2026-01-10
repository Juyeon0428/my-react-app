import { useState } from "react";
import WritePage from "./pages/WritePage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [receivedLetter, setReceivedLetter] = useState(null);

  const handleSubmit = async (nickname, content) => {
    // 지금은 가짜 데이터 (백엔드는 다음 단계)
    const fakeLetter = {
      nickname: "익명의 누군가",
      content: "어떤 날에는 이유 없이 마음이 무거웠다.",
    };

    setReceivedLetter(fakeLetter);
  };

  return (
    <div>
      {!receivedLetter && <WritePage onSubmit={handleSubmit} />}
      {receivedLetter && <ResultPage letter={receivedLetter} />}
    </div>
  );
}

export default App;
