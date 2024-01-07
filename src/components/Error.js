import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops !</h1>
      <h3>Something went wrong!!!</h3>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
}
