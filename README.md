# React Network Status Hook

A simple React Hook to check if browser is online or offline.

# Installation

To install the package run the following command.

```
npm install react-network-status-hook
```

# Usage with default parameters

Just import the Hook and use it to detect offline or online status.
The check will be done by send a request every `500` milliseconds to `https://dns.google/` but you can change parameters as described in the next section.

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

# Usage with custom parameters

You can specify custom parameters for the check as shown here.

```
import React from "react";
import useNetworkState from "react-network-status-hook";

const MyComponent = ("http://localhost:8000/", 1000) => {
  const isOnline = useNetworkState();

  return (
    isOnline ? <span>Online</span> : <span>Offline</span>
  )
};
```