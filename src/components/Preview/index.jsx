import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <div>No data available for preview.</div>;
  }

  return (
    <div>
      {formData.map((item) => {
        switch (item.type) {
          case 'text':
            return (
              <div key={item.id}>
                <label>{item.value}</label>
                <input type="text" />
              </div>
            );
          case 'textarea':
            return (
              <div key={item.id}>
                <label>{item.value}</label>
                <textarea></textarea>
              </div>
            );
          case 'number':
            return (
              <div key={item.id}>
                <label>{item.value}</label>
                <input type="number" />
              </div>
            );
          case 'radio':
            return (
              <div key={item.id}>
                <label>{item.value}</label>
                {item.options.map((option) => (
                  <label key={option.id}>
                    <input type="radio" name={item.id} value={option.value} />
                    {option.value}
                  </label>
                ))}
              </div>
            );
          case 'date':
            return (
              <div key={item.id}>
                <label>{item.value}</label>
                <input type="date" />
              </div>
            );
          case 'time':
            return (
              <div key={item.id}>
                <label>{item.value}</label>
                <input type="time" />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Preview;
