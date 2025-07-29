import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { SuscribeButton } from './button-submit';
import { InputCombobox } from './input-select';
import ImputCheckbox from './input-checkbox';
import { InputText } from './input-text';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: { InputText, InputCombobox, ImputCheckbox },
  formComponents: { SuscribeButton },
  fieldContext,
  formContext,
});
