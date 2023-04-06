import React, { useEffect, useState } from 'react';

interface Props {
  onTaskCompleted: (elapsedTime: number, errorCount: number) => void;
}

const TaskComponent: React.FC<Props> = ({ onTaskCompleted }) => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errorCount, setErrorCount] = useState(0);

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
    }
  };

  return (
    <div>
      {/* タスクを実行するためのUI要素 */}
      {/* エラー発生時にhandleErrorを呼び出し、タスク完了時にhandleTaskCompletedを呼び出すように設定 */}
      <p>タスク: ボタンをクリックして完了</p>
      <button onClick={handleTaskCompleted}>タスク完了</button>
      <button onClick={handleError}>エラー発生</button>
    </div>
  );
};

export default TaskComponent;