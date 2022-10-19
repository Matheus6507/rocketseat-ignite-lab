import { Meta, StoryObj } from "@storybook/react";
import { Select, SelectRootProps } from "./Select";

export default {
    title: 'Components/Select',
    component: Select.Root,
    args: {
        children: [
            <Select.Item text="Opção 1" value="1" />, 
            <Select.Item text="Opção 2" value="2" />, 
            <Select.Item text="Opção 3" value="3" />, 
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<SelectRootProps>

export const Default: StoryObj<SelectRootProps> = {}