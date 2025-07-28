import React from 'react';
import { useFieldContext } from '../registro/form-context';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const ImputCheckbox = () => {
  const field = useFieldContext<boolean>();
  return (
    <div className='flex items-center gap-3'>
      <Checkbox
        id={field.name}
        checked={field.state.value}
        onCheckedChange={(checked) => {
          field.setValue(checked as boolean);
        }}
      />
      <Label htmlFor={field.name}>Accept terms and conditions</Label>
    </div>
  );
};

export default ImputCheckbox;
