import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-900 border-2 border-gray-600 rounded transition-all outline-none'>
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-4 w-4 text-gray-200' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}