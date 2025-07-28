import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { FormInput } from './form-input';
import { SuscribeButton } from './button-submit';
import { Combobox } from './input-select';
import ImputCheckbox from './input-checkbox';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: { FormInput, Combobox, ImputCheckbox },
  formComponents: { SuscribeButton },
  fieldContext,
  formContext,
});
