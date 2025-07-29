'use client';
import { useAppForm } from '@/app/(components)/form-context';
import { delay } from '@/lib/delay';
import { boolean, minLength, object, pipe, string } from 'valibot';

const ProductSchema = object({
  name: pipe(string(), minLength(1)),
  description: string(),
  active: boolean(),
});

export const FormList = () => {
  const form = useAppForm({
    defaultValues: {
      name: '',
      description: '',
      active: true,
    },
    validators: {
      onChange: ProductSchema,
    },
    onSubmit: async ({ value }) => {
      await delay(5000);
      console.log({ value });
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      {<form.AppField name='name' children={(field) => <field.InputText />} />}

      {
        <form.AppForm>
          <form.SuscribeButton label='enviar' />
        </form.AppForm>
      }
    </form>
  );
};
