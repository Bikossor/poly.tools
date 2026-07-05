import { useCallback, useMemo, useState } from "react";

type UseClipboard = {
  hasCopied: boolean;
  onCopy: () => void;
  setValue: (text: string) => void;
  value: string;
};

export const useClipboard = (initValue: string): UseClipboard => {
  const [value, setValue] = useState(initValue);
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setHasCopied(true);
    });
  }, [value, setHasCopied]);

  useMemo(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [hasCopied]);

  return { hasCopied, onCopy, setValue, value };
};
