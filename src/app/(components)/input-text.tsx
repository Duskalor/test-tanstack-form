import { AnyFieldApi } from '@tanstack/react-form';
import React from 'react';
import { useFieldContext } from '../registro/form-context';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ErrorMessage = ({ field }: { field: AnyFieldApi }) => {
  const fi = field.state.meta;
  return (
    <>
      {fi.isTouched && fi.errors.length > 0 ? (
        <div>
          {fi.errors.map((e, i) => (
            <div key={i}>{e.message}</div>
          ))}
        </div>
      ) : null}
    </>
  );
};

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputText = ({ label, ...props }: FormInputProps) => {
  const field = useFieldContext<string>();
  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        {...props}
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.setValue(e.target.value)}
      />
      <ErrorMessage field={field} />
    </>
  );
};
