# React Network Status Hook

A simple React Hook to check if browser is online or offline

# Installation

To install the package run the following command

```
npm install react-network-status-hook
```

# Usage

Just import the Hook and use it to detect offline or online status

```
import React from "react";
import useNetworkState from "react-network-status-hook";

const MyComponent = () => {
  const isOnline = useNetworkState();

  return (
    isOnline ? <span>Online</span> : <span>Offline</span>
  )
};
```