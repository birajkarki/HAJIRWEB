// need to add country picker

// // /src/components/Auth/PhoneNumberInput.js
// import React from "react";
// import PhoneInput from "react-phone-number-input";
// import flags from "react-phone-number-input/flags"; // Import flag icons
// import "react-phone-number-input/style.css"; // Import the default styles

// const PhoneNumberInput = ({ value, onChange }) => {
//   return (
//     <PhoneInput
//       placeholder="Enter your number"
//       value={value}
//       onChange={onChange}
//       defaultCountry="NP" // ISO country code for Nepal
//       flags={flags}
//       countrySelectComponent={({ toggleDropdown, ...rest }) => (
//         <div
//           onClick={toggleDropdown}
//           style={{ display: "flex", alignItems: "center" }}
//           {...rest}
//         >
//           {rest.selectedCountry && (
//             <>
//               <span style={{ marginRight: "8px" }}>
//                 {rest.selectedCountry.country}
//               </span>
//               <img
//                 src={flags[rest.selectedCountry.country]}
//                 alt={rest.selectedCountry.country}
//                 style={{ width: "24px", height: "16px" }}
//               />
//             </>
//           )}
//         </div>
//       )}
//     />
//   );
// };

// export default PhoneNumberInput;
