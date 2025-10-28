// import React from "react";
// const Card = (properties)=> {
//   console.log(properties);
//   return (
//     <div className="card">
//       <div>{properties.definition}</div>
//     </div>
//   );
// };
// export default Card;

// import React from "react";

// const Card = ({name , age}) =>{
//    return (
//     <div className="card">
//         <p>{name}</p>
//         <p>{age}</p>
//     </div>
//    )
// }

// export default Card;

// import React from "react";

// const Card = ({data , isStudent}) =>{
//    return (
//     <div className="card">
//      <p>{data.name}</p>
//      <p>{data.age}</p>
//      <p>{isStudent ? "Yes, I am Student" : "No , not a Student"}</p>
//     </div>
//    )
// }

// export default Card;

import Raect from "react";

const Card = ({ data, isStudent, name, age, definition, array, content }) => {
  return (
    <div className="card">
      {definition && <p>{definition}</p>}
      {data ? (
        <>
          <p>{data.name}</p>
          <p>{data.age}</p>
        </>
      ) : (
        <>
          {name && <p>{name}</p>}
          {age && <p>{age}</p>}
          {content}
        </>
      )}
      {isStudent !== undefined && (
        <p>{isStudent ? "Yes, I am Student" : "No , not a Student"}</p>
      )}

      {array && (
        <ul>
          {array.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
