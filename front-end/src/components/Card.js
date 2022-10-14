import React from "react";
const Card = (props) => {
  let { data, show } = props ? props : {};
  return (
    <div className={!show && `animate__animated animate__fadeInTopLeft`}>
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data ? data.setup : "None"}
          </h5>
        </div>
        {show && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 animate__animated animate__tada">
            {data ? data.punchline : "None"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
