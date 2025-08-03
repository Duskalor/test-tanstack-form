'use client';

import { Check, ChevronsUpDown, SearchIcon } from 'lucide-react';
import { useDebounce } from '@uidotdev/usehooks';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useEffect, useState } from 'react';
import { useFieldContext } from './form-context';
import { Input } from '@/components/ui/input';

interface Pokemon {
  name: string;
  url: string;
}

export const InputCombobox = () => {
  const field = useFieldContext<string>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const valueDebounced = useDebounce(value, 300);
  // console.log(field.state);

  useEffect(() => {
    if (value.length >= 2) {
      const URL = 'http://localhost:4000/';
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          name: valueDebounced,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPokemons(data);
        });
    }
  }, [valueDebounced]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {field.state.value ? field.state.value : 'Select framework...'}
          <ChevronsUpDown className='opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          {/* <div
            data-slot='command-input-wrapper'
            className='flex h-9 items-center gap-2 border-b px-3'
          >
            <SearchIcon className='size-4 shrink-0 opacity-50' />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              data-slot='command-input'
              className={cn(
                'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50'
              )}
            />
          </div> */}
          <CommandInput
            value={value}
            onValueChange={setValue}
            placeholder='Search pokemon...'
            className='h-9'
          />
          <CommandList>
            <CommandEmpty>No role found.</CommandEmpty>
            <CommandGroup className=''>
              {pokemons.map((framework) => (
                <CommandItem
                  key={framework.name}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    field.setValue(
                      currentValue === field.state.value ? '' : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  {framework.name}
                  <Check
                    className={cn(
                      'ml-auto',
                      field.state.value === framework.name
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
