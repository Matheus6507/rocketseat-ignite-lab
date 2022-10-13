import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="email@exemplo.com" />
        ],
        label: (
            <TextInput.Label displayText='e-mail' />
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        label: {
            table: {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder="email@exemplo.com" />
        ]
    },
}

export const WithoutLabel: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="email@exemplo.com" />
        ],
        label: (
            null
        )
    },
}