import { allow } from '@toolz/allow';
import { useRef } from 'react';

const an = {
   empty: {
      function: () => {
      }
   }
};

export const useConstructor = (callBack = an.empty.function) => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   allow.aFunction(callBack);
   const hasBeenCalled = useRef(false);
   if (hasBeenCalled.current)
      return;
   callBack();
   hasBeenCalled.current = true;
};
