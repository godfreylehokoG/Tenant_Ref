import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  TextFieldInput,
  TextArea,
  NumberInput,
  RadioInput,
  DateInput,
  TimeInput,
} from '../FormBuilder/elements/index.jsx'; // Adjust the path as needed

const Preview = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  const renderElements = (item) => {
    switch (item.type) {
      case 'text':
        return <TextFieldInput item={item} />;
      case 'textarea':
        return <TextArea item={item} />;
      case 'number':
        return <NumberInput item={item} />;
      case 'radio':
        return <RadioInput item={item} />;
      case 'date':
        return <DateInput item={item} />;
      case 'time':
        return <TimeInput item={item} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {formData.map(item => renderElements(item))}
    </div>
  );
};

export default Preview;
