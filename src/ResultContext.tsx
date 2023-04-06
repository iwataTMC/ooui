import React, { createContext, useContext, useState } from 'react';

interface Result {
  elapsedTime: number;
  errorCount: number;
}

interface ResultContextValue {
  result: Result | null;
  setResult: (result: Result) => void;
}

const ResultContext = createContext<ResultContextValue>({
  result: null,
  setResult: () => {
  }
});

export const useResult = () => {
  return useContext(ResultContext);
};

interface Props {
  children: React.ReactNode;
}

export const ResultProvider: React.FC<Props> = ({ children }) => {
  const [result, setResult] = useState<Result | null>(null);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};
