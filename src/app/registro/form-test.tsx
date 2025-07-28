import { useAppForm } from './form-context';
import { pipe, object, string, boolean, minLength } from 'valibot';
import { Combobox } from './input-select';

const UserSchema = object({
  name: pipe(string(), minLength(3)),
  isValid: pipe(boolean()),
  role: pipe(string()),
});

const FormTest = () => {
  const form = useAppForm({
    validators: {
      onChange: UserSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
    defaultValues: {
      name: '',
      isValid: false,
      role: '',
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {
        <form.AppField
          name='name'
          children={(field) => <field.FormInput field={field} label='name' />}
        />
      }

      {<form.AppField name='role' children={(field) => <field.Combobox />} />}

      {
        <form.AppField
          name='isValid'
          children={(field) => <field.ImputCheckbox label='isValid' />}
        />
      }
      <form.AppForm>
        <form.SuscribeButton label='submit' />
      </form.AppForm>
    </form>
  );
};

export default FormTest;
