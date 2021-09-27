import { useEffect, useRef } from 'react';

interface UseConfigInterface {
  isContinue: boolean;
  isSorting: boolean;
  useRAF: boolean;
  delay: number;
}

export function useConfig({ isContinue, isSorting, useRAF, delay }: UseConfigInterface) {
  const isSortingRef = useRef(false);
  const isContinueRef = useRef(true);
  const useRAFRef = useRef(false);
  const delayRef = useRef(100);

  useEffect(() => {
    isContinueRef.current = isContinue;
  }, [isContinue]);

  useEffect(() => {
    isSortingRef.current = isSorting;
  }, [isSorting]);

  useEffect(() => {
    useRAFRef.current = useRAF;
  }, [useRAF]);

  useEffect(() => {
    delayRef.current = delay;
  }, [delay]);

  return { isSortingRef, isContinueRef, useRAFRef, delayRef };
}
