import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ReactNode } from "react";

export interface SelectRootProps extends SelectPrimitive.SelectProps {
    children: ReactNode
}

function SelectRoot(props: SelectRootProps) {
    return (
        <div className='w-full max-w-xs'>
            <SelectPrimitive.Root {...props} defaultValue="2">
                <SelectPrimitive.Trigger className='flex items-center justify-between gap-3 h-12 py-4 px-3 rounded bg-transparent border-2 border-gray-600 w-full transition-all text-gray-600 focus-within:ring-2 ring-gray-600'>
                    <SelectPrimitive.Value />
                    <SelectPrimitive.Icon>
                        <ChevronDownIcon />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal className='relative flex items-start bg-gray-600 border-2 border-gray-600 transition-all text-gray-500 rounded shadow-xl overflow-hidden outline-none '>
                    <SelectPrimitive.Content className='flex items-start rounded focus:border-gray-600'>
                        <SelectPrimitive.Viewport className='rounded w-full outline-none'>
                            {props.children}
                        </SelectPrimitive.Viewport>
                    </SelectPrimitive.Content>
                </SelectPrimitive.Portal>
            </SelectPrimitive.Root>
        </div>
    )
}

SelectRoot.displayName = 'Select.Root'

export interface SelectItemProps {
    text: string,
    value: string
}

function SelectItem(props: SelectItemProps) {
    return (
        <SelectPrimitive.Item value={props.value} className='cursor-pointer w-full text-xs flex items-center rounded m-2 p-2 text-gray-200 transition-all outline-none hover:bg-gray-500'>
            <SelectPrimitive.ItemText>
                {props.text}
            </SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}

SelectItem.displayName = 'Select.Item'

export const Select = {
    Root: SelectRoot,
    Item: SelectItem
}