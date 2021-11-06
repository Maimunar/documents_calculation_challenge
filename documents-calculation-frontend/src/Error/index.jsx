import React, { useEffect } from "react";

export const Error = ({ error, setError }) => {
  const classes = ["error-container"];
  error ? classes.push("show") : classes.push("hidden");

  const handleClick = () => setError(null);

  useEffect(() => {
    if (error)
      setTimeout(() => {
        if (error) setError(null);
      }, 5000);
  }, [error]);
  //? There is a package for the classes concat
  return (
    <div className={classes.join(" ")} onClick={handleClick}>
      {error}
    </div>
  );
};
