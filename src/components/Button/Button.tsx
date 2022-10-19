import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    context?: string
}

export function Button(props: ButtonProps) {
    const Comp = props.asChild ? Slot : 'button';

    return (
        <Comp className={
            clsx('py-4 px-3 bg-blue-500 rounded font-semibold text-gray-200 text-sm w-full transition-colors hover:bg-blue-700 focus:ring-2 ring-blue-500', {
                'bg-red-500 hover:bg-red-700 focus:ring-red-500': props.context === 'danger',
                'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500': props.context === 'secondary',
                'bg-green-600 hover:bg-green-800 focus:ring-green-600': props.context === 'confirm',
            })
        } {...props}>
            <div className='flex items-center justify-center gap-2'>
                {props.children}
            </div>
        </Comp>
    )
}