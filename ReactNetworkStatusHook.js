import { useState } from "react";

const useNetworkStatus = (url = "https://dns.google/", interval = 500) => {
  const [isOnline, setIsOnline] = useState(true);

  setInterval(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const promise = fetch(url, { signal, cache: "no-store", mode: "no-cors" });
    const timeout = setTimeout(() => controller.abort(), interval);
    promise
      .then(() => {
        clearTimeout(timeout);
        setIsOnline(true);
      })
      .catch(() => setIsOnline(false));
  }, interval);

  return isOnline;
};

export default useNetworkStatus;