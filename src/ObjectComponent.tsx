import React, { useEffect, useState } from 'react';
import { useResult } from './ResultContext';

interface Props {
  onTaskCompleted: (elapsedTime: number, errorCount: number) => void;
}

const ObjectComponent: React.FC<Props> = ({ onTaskCompleted }) => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const { setResult } = useResult();

  // タスク開始時の処理
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // エラー発生時の処理
  const handleError = () => {
    setErrorCount((prevErrorCount) => prevErrorCount + 1);
  };

  // タスク完了時の処理
  const handleTaskCompleted = () => {
    if (startTime) {
      const elapsedTime = Date.now() - startTime;
      onTaskCompleted(elapsedTime, errorCount);
      setResult({ elapsedTime, errorCount });
    }
  };

  return (
    <div>
      {/* タスクを実行するためのUI要素 */}
      {/* エラー発生時にhandleErrorを呼び出し、タスク完了時にhandleTaskCompletedを呼び出すように設定 */}
      <p>オブジェクト指向UI</p>
      <p>どのボタン？</p>
      <button>ボタン</button>
      <button>ボタン</button>
      <button onClick={handleError}>ボタン</button>
      <button onClick={handleError}>ボタン</button>
      <button>ボタン</button>
      <button onClick={handleError}>ボタン</button>
      <button onClick={handleError}>ボタン</button>
      <br></br>
      <button onClick={handleTaskCompleted}>完了</button>
    </div>
  );
};

export default ObjectComponent;