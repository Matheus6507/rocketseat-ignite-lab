import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
    children: ReactNode;
    label?: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div>
            {props.label}
            <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-transparent border-2 border-gray-600 w-full transition-all focus-within:ring-2 ring-gray-600'>
                {props.children}
            </div>
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-600'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputIputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputIputProps) {
    return (
        <input
            className={clsx(
                'bg-transparent flex-1 text-gray-200 text-xs outline-none placeholder:text-gray-600', {
                    'appearance-none': props.type === 'number'
                }
            )}
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}