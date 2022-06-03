/**
 *  This file is part of typewriter.
 *
 * @Description Say something for this file.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/2 06:58
 */
import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';

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

const printHandler = (
    content: string,
    cycleNum:number,
    speed: number,
    callBack: (newContent: string) => void
) => {
  let currentCycleNum: number = 0;
  let typingAction: TypingActionType = TypingActionType.TYPING;
  let currentContent: string = ''
  let intervalHandler: ReturnType<typeof setInterval>;
  let timeoutHandler: ReturnType<typeof setTimeout>;
  const sleep = () => {
    timeoutHandler = setTimeout(print, 1000)
  }
  const handler = () => {
    if (typingAction === TypingActionType.TYPING) {
      currentContent = content.substring(0, currentContent.length + 1)
      if (currentContent.length === content.length) {
        typingAction = TypingActionType.DELETE
        clearInterval(intervalHandler)
        currentCycleNum < cycleNum && sleep()
      }
    } else {
      currentContent = currentContent.substring(0, currentContent.length - 1)
      if (currentContent.length === 0) {
        currentCycleNum += 1
        typingAction = TypingActionType.TYPING
        clearInterval(intervalHandler)
        sleep()
      }
    }
    callBack(currentContent)
  }
  const print = () => {
    intervalHandler = setInterval(() => handler(), speed)
  }
  print()

}

const Typewriter: React.FC<TypewriterProps> = ({
  content,
  cycleNum = 1,
  speed = 100,
  className,
}) => {
  const [visibleContent, setVisibleContent] = useState<string>('');
  useEffect(() => {
    printHandler(
        content,
        cycleNum,
        speed,
        setVisibleContent
    )
  }, []);

  return (
    <span className={`${prefixCls} ${className || ''}`}>
      {visibleContent}
      <span>|</span>
    </span>
  );
};

export default Typewriter;
