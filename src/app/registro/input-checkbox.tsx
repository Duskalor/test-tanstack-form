import React from 'react';
import { useFieldContext } from './form-context';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const ImputCheckbox = ({ label }: { label: string }) => {
  const field = useFieldContext<boolean>();
  console.log(field.state.value);
  return (
    <div className='flex items-center gap-3'>
      <Checkbox
        id={label}
        checked={field.state.value}
        onCheckedChange={(checked) => {
          field.setValue(!checked);
        }}
      />
      <Label htmlFor={label}>Accept terms and conditions</Label>
    </div>
  );
};

export default ImputCheckbox;
