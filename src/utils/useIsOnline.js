import React from "react";

export default function useIsOnline() {
  const [isOnline, setIsOnline] = React.useState(true);

  React.useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
}
