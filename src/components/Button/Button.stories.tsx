import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from 'phosphor-react';
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Fazer login',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: [
            'Fazer login',
            <SignIn className="w-6 h-6" />
        ]
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const Danger: StoryObj<ButtonProps> = {
    args: {
        context: "danger"
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        context: "secondary"
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const Confirm: StoryObj<ButtonProps> = {
    args: {
        context: "confirm"
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}