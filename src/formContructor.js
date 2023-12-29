import React, { useState } from 'react';

const DynamicSelector = ({ elements, groupName, toExecute }) => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedElement(value);
    toExecute(value)

  };

  return (
    <div>
      <div>
        {elements.map((element) => (
          <div key={element.value}>
            <label>
              <input
                type="radio"
                name={`${groupName}_${element.value}`}  // Use a unique name for each group
                value={element.value}
                checked={selectedElement === element.value}
                onChange={() => handleOptionClick(element.value)}
              />
              {element.label}
            </label>
          </div>
        ))}
      </div>
      {selectedElement && (
        <p>You selected: {selectedElement}</p>
      )}
    </div>
  );
};

export default DynamicSelector;



// import React from 'react';
// import { useState } from 'react';

// const DynamicSelector = ({ elements }) => {
//   const [selectedElement, setSelectedElement] = useState(null);

//   const handleOptionClick = (value) => {
//     setSelectedElement(value);
//   };

//   return (
//     <div>
//       <div>
//         {elements.map((element) => (
//           <div key={element.value}>
//             <label>
//               <input
//                 type="radio"
//                 name="element"
//                 value={element.value}
//                 checked={selectedElement === element.value}
//                 onChange={() => handleOptionClick(element.value)}
//               />
//               {element.label}
//             </label>
//           </div>
//         ))}
//       </div>
//       {selectedElement && (
//         <p>You selected: {selectedElement}</p>
//       )}
//     </div>
//   );
// };

// export default DynamicSelector;