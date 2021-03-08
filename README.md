# use-constructor

`use-constructor` is a custom Hook that provides constructor-like functionality to functional React components. Functional components are not classes. As such, they have no true equivalent to a constructor.

`useEffect()` is typically touted as the replacement for all lifecycle methods. But `useEffect()` always fires _after_ the component has rendered. Any code block that is called directly within the body of a functional component will fire every time that component is called (which can happen many successive times during React's reconciliation process).

By leveraging a simple ref variable, we can fire a code block before the component renders and ensure that it's only ever fired once for the life of the component.

## Usage

After installation, import the package as follows:

```javascript
import { useConstructor } from '@toolz/use-constructor';
```

## Methods

### useConstructor()

```javascript
const API = {
   arguments: {
      callBack: {
         required,
         format: Function,
      },
   },
   returns: void
}
```

**Examples:**

```javascript
const SomeComponent = () => {
   useConstructor(() => {
      /*
         This code runs once, and only once, for the lifecycle of 
         this component.  This code also runs before the render 
         cycle.
      */
   });
   
   return <>Some JSX</>
}
```

Since this is a type of "faux-constructor" functionality, there is no magic that ensures the logic inside `useConstructor()` will run before _anything else_ happens in your functional component. So it's perfectly possible to process _other_ logic before you call `useConstructor()`. If you want it to act as a "true" constructor, you would need to ensure that it's called at the very top of the functional component.
