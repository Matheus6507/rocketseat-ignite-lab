import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text';
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size="sm">Manter conectado</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}