# React Query (TanStack Query) Flow Mock

## Overview

This project provides a simplified demonstration of how React Query (now known as TanStack Query) works, focusing on query reusability across components. The goal is to prevent unnecessary data fetching and optimize the performance of React applications.

By centralizing query logic in a context, components can share and reuse queries efficiently, ensuring a more responsive and performant UI.

## Key Concepts

### 1. **Query Reusability**
- Queries are managed in a centralized context.
- Components check if a query already exists before creating a new one.
- If the query exists, they subscribe to it; if not, they create and subscribe to a new query.
  
### 2. **State Synchronization**
- When a query's state changes, all subscribed components re-render automatically to reflect the updated data.

### 3. **Observers**
- Components subscribing to a query use an "observer" to track changes in the query state.
- When a query is updated (e.g., due to new data), the observer notifies the component, triggering a re-render.

## Why React Query?

React Query solves several common issues when managing server-side state in React applications:

- **No Unnecessary Fetching:** Queries are cached and reused, reducing redundant API calls.
- **Automatic Synchronization:** When data changes on the server or a new component mounts, queries update automatically.
- **Improved Performance:** By caching and reusing queries, React Query helps to boost app performance significantly.

## How It Works

### 1. **Query Context**
A centralized context stores and manages all queries within the application.

### 2. **Component Subscription**
- When a component needs data, it first checks if the required query exists in the context.
- If the query exists, the component subscribes to it.
- If it doesn't exist, the component creates the query, adds it to the context, and subscribes to it.

### 3. **Observers**
- Each subscribed component has an observer that listens for changes in the query's state.
- When the query changes (e.g., due to new data or state changes), the observer ensures that the component re-renders with the latest information.

## Core Dependencies

- **[React](https://reactjs.org/):** To build the user interface.
- **Context API:** To manage and centralize queries across components.

## Features to Explore

- Efficient query creation and subscription mechanism.
- Avoiding unnecessary data fetches by reusing existing queries.
- Automatic re-rendering of components upon query state changes.

## Future Improvements

- Add examples for **mutations** to handle server-side updates.
- Integrate **query invalidation** logic to ensure stale data is refreshed when necessary.
- Explore **background synchronization** to keep data up to date without user intervention.

## Known Issues

### Unsubscribing Observers
**Issue:**  
Currently, there is a memory leak caused by observers not unsubscribing correctly when components unmount, leading to performance issues.

**Potential Fixes:**
- Ensure that observers are properly cleaned up on component unmount by utilizing `useEffect` with a cleanup function.
  
## Conclusion

This project provides a foundational understanding of how TanStack Query works, focusing on query reusability and the observer pattern. By centralizing query logic and sharing it across multiple components, you can optimize data fetching and enhance application performance.

---

Feel free to explore the code, and contribute if you have ideas for improvements!

