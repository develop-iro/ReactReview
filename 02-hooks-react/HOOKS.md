# React Hooks Implementation Guide

This document provides an overview of how different React hooks5. **State Management Patterns**: Appropriate use of useState vs useReducer based on complexity

## useMemo and useCallback Hooks

### MemoHook Component

Located in `05-use-memo/MemoComponentHook.tsx`

This component demonstrates the use of `useCallback` for memoizing functions:

```typescript
const handleMyAPICall = useCallback(() => {
  console.log("Llamar a mi API - ", subTitle);
}, [subTitle]);
```

- Prevents unnecessary re-renders of child components
- Memoizes the function based on dependencies
- Used in combination with memoized components

## useOptimistic Hook

### SocialMediaApp Component

Located in `06-use-optimistic/SocialMediaApp.tsx`

Implements optimistic updates for better user experience:

```typescript
const [optimisticComments, addOptimisticComment] = useOptimistic(
  comments,
  (currentComments, newCommentText: string) => {
    return [
      ...currentComments,
      {
        id: lastId + 1,
        text: newCommentText,
        optimistic: true,
      },
    ];
  }
);
```

- Used in conjunction with `useTransition` for managing loading states
- Provides immediate feedback while waiting for server response
- Handles optimistic updates in social media-like interactions

## use Hook (React Suspense)

### ClientInformation Component

Located in `07-use-x-suspense/ClientInformation.tsx`

Demonstrates the new `use` hook for data fetching:

```typescript
const user = use(getUser);
```

- Works with Suspense for handling async data
- Provides a more straightforward way to handle promises
- Replaces traditional useEffect + useState patterns for data fetching

## Advanced Patterns

1. **Optimistic Updates**: Implementation of optimistic UI updates for better UX
2. **Suspense Integration**: Modern data fetching patterns with Suspense
3. **Performance Optimization**: Usage of memo and callback patterns
4. **Type Safety**: Strong TypeScript integration across all hooksare implemented across various components in the project.

## useState Hook

### TrafficLight Component

Located in `01-use-state/TrafficLight.tsx`

The `useState` hook is used to manage the traffic light's current color state:

```typescript
const [light, setLight] = useState<TrafficLightColors>("red");
```

- Manages a single piece of state for the traffic light color
- Uses TypeScript to ensure type safety with `TrafficLightColors` type
- State changes are handled through the `handleColorChange` function

## useEffect Hook

### TrafficLightWithEffect Component

Located in `02-use-effect/TrafficLightWithEffect.tsx`

This component demonstrates multiple `useEffect` implementations:

1. Countdown Timer Effect:

```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setCountDown((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [countDown]);
```

- Sets up an interval to update countdown
- Includes cleanup function to prevent memory leaks
- Dependencies array ensures effect runs when countdown changes

2. Light Change Effect:

```typescript
useEffect(() => {
  if (countDown > 0) return;
  // Logic for changing traffic light colors
}, [light, countDown]);
```

- Manages automatic light changes based on countdown
- Dependencies include both light and countdown states

### PokemonPage Component

Located in `02-use-effect/PokemonPage.tsx`

Implements custom hooks that use `useEffect` internally:

- `useCounter` for managing Pokemon ID
- `usePokemon` for fetching Pokemon data

## useRef Hook

### FocusScreen Component

Located in `03-use-ref/FocusScreen.tsx`

Demonstrates the use of `useRef` for DOM manipulation:

```typescript
const inputRef = useRef<HTMLInputElement>(null);
```

- Used to reference and manipulate an input element directly
- Provides functionality to select/focus the input
- TypeScript integration with proper type definition

## useReducer Hook

### ScrambleWords Component

Located in `04-use-reducer/ScrambleWords.tsx`

Implements complex state management using `useReducer`:

```typescript
const [state, dispatch] = useReducer(scrambleWordsReducer, getInitialState());
```

- Manages complex game state including:
  - Words list
  - Current word
  - Error counter
  - Points
  - Game status
- Uses actions to modify state:
  - CHECK_ANSWER
  - SKIP_WORD
  - START_NEW_GAME

## Custom Hooks

The project includes several custom hooks that combine the basic React hooks:

1. `useCounter` - Custom hook for number incrementing/decrementing
2. `usePokemon` - Custom hook for fetching Pokemon data
3. `useTrafficLight` - Custom hook for traffic light state management

## Best Practices Demonstrated

1. **Cleanup in useEffect**: Proper cleanup implementation in interval-based effects
2. **TypeScript Integration**: Strong typing throughout hooks implementation
3. **Custom Hook Abstraction**: Common functionality extracted into reusable hooks
4. **State Management Patterns**: Appropriate use of useState vs useReducer based on complexity
5. **Effect Dependencies**: Careful management of useEffect dependency arrays
