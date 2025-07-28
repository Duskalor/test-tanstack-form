import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { SuscribeButton } from '../(components)/button-submit';
import { InputCombobox } from '../(components)/input-select';
import ImputCheckbox from '../(components)/input-checkbox';
import { InputText } from '../(components)/input-text';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: { InputText, InputCombobox, ImputCheckbox },
  formComponents: { SuscribeButton },
  fieldContext,
  formContext,
});
