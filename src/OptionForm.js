import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const MyForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle form submission with the selected option value
    console.log('Selected Option:', data.selectedOption);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Option 1
        <Controller
          name="selectedOption"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="radio"
              value="option1"
              {...field}
              checked={field.value === 'option1'}
            />
          )}
        />
      </label>

      <label>
        Option 2
        <Controller
          name="selectedOption"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="radio"
              value="option2"
              {...field}
              checked={field.value === 'option2'}
            />
          )}
        />
      </label>

      <label>
        Option 3
        <Controller
          name="selectedOption"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="radio"
              value="option3"
              {...field}
              checked={field.value === 'option3'}
            />
          )}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;