import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Select, { components } from "react-select";
import { FaBlackTie } from 'react-icons/fa';

const Control = ({ children, ...props }) => (
    <components.Control {...props}>
     Currency {children}
    </components.Control>
  );

const Currency = () => {
    const {currency,dispatch} = useContext(AppContext);
    const currencies = [
        {  
          label: "$ Dollar",
          value: "$",
        },
        {
          label: "£ Pound",
          value: "£",
        },
        {
          label: "€ Euro",
          value: "€",
        },
        {
          label: "₹ Ruppee",
          value: "₹",
        },
      ];
      
      const customStyles = {
        singleValue: (base) => ({
          ...base,
          borderRadius: 5,
          background: "#50C878",
          color: "white",
        }),
        container: (base) => ({
            ...base,
            borderRadius: 5,
            background: "#50C878",
            color: "black",
          }),
          dropdownIndicator:(base) => ({
            background: " #50C878",
          }),
          option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            padding: 20,
          }),
          menuList:(base) => ({
            background: "#50C878",
            color:'black',
          }),
          control:(props) => ({
              ...props,
              color:"white",
            background: "#50C878",
          }),

      };
    
      const [selected, setSelected] = useState("");
      var handleChange = (selected) => {
        setSelected(selected.value);
      };
    
    return (
        <div className='alert alert-secondary'>
            <span>
            <Select
          onChange={handleChange}
          styles={customStyles}
          components={{ Control }}
          options={currencies}
        />
            </span>
        </div>
    );
};
export default Currency;
