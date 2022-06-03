/**
 *  This file is part of typewriter.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/2 06:58
 */
import React, { useCallback, useEffect, useReducer, useState } from 'react';

const prefixCls = 'type-writer';
interface TypewriterProps {
  /**
   * @description 要打印的内容
   * @default ''
   */
  content: string;

  /**
   * @description 打印次数 `-1` 无限 `0`停止
   * @default 1
   */
  cycleNum?: number;

  /**
   * @description 打印速度(s)
   * @default 100
   */
  speed?: number;

  /**
   * @description 类名
   * @default ''
   */
  className?: string;
}

enum TypingActionType {
  TYPING,
  DELETE,
}
const sleep = (timeout: number): Promise<void> =>
  new Promise((resolve) => setTimeout(() => resolve(), timeout));

const Typewriter: React.FC<TypewriterProps> = ({
  content,
  cycleNum = 1,
  speed = 100,
  className,
}) => {
  const [visibleContent, setVisibleContent] = useState<string>('');
  const [currentCycleNum, setCurrentCycleNum] = useState<number>(0);
  const [typingAction, setTypingAction] = useReducer(
    (_: any, newType: TypingActionType): TypingActionType => {
      if (newType === TypingActionType.TYPING) {
        setVisibleContent(() => content.substring(0, visibleContent.length + 1));
      } else {
        setVisibleContent(() => visibleContent.substring(0, visibleContent.length - 1));
      }

      return newType;
    },
    TypingActionType.TYPING,
  );
  const isPrint = cycleNum >= currentCycleNum || currentCycleNum === -1;
  const pause = async (): Promise<void> => await sleep(1500);
  const handlerPrint = useCallback(async () => {
    if (content.length === visibleContent.length) {
      await pause();
      if (isPrint) setTypingAction(TypingActionType.DELETE);
    } else if (visibleContent.length === 0) {
      if (isPrint) {
        await pause();
        setTypingAction(TypingActionType.TYPING);
        setCurrentCycleNum(() => currentCycleNum + 1);
      }
    } else {
      setTypingAction(typingAction);
    }
  }, [visibleContent]);
  useEffect(() => {
    if (isPrint) {
      const intervalHandler = setInterval(() => handlerPrint(), speed);
      return () => clearInterval(intervalHandler);
    }
  }, [visibleContent]);
  useEffect(() => {
    handlerPrint().then(() => {});
  }, []);

  return (
    <span className={`${prefixCls} ${className || ''}`}>
      {visibleContent}
      <span>|</span>
    </span>
  );
};

export default Typewriter;
