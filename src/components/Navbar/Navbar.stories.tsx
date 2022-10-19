import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Meta, StoryObj } from "@storybook/react";
import { Text } from '../Text/Text';
import { Navbar, NavbarRootProps } from "./Navbar";

export default {
    title: 'Components/Navbar',
    component: Navbar.Root,
    args: {
        children: [
            <NavigationMenu.Item className='outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500'>
                <NavigationMenu.Trigger className='p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2'>
                    Painel
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <NavigationMenu.Content>
                        {/* contentlist */}
                        <ul className='flex flex-col p-5 m-0 gap-y-2'>
                            {/* ContentListItem */}
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            {/* ContentListItem */}
                        </ul>
                        {/* contentlist */}
                    </NavigationMenu.Content>
                </NavigationMenu.Content>
            </NavigationMenu.Item>,
            <NavigationMenu.Item className='outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500'>
                <NavigationMenu.Trigger className='p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2'>
                    Clientes
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <NavigationMenu.Content>
                        {/* contentlist */}
                        <ul className='flex flex-col p-5 m-0 gap-y-2'>
                            {/* ContentListItem */}
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            {/* ContentListItem */}
                        </ul>
                        {/* contentlist */}
                    </NavigationMenu.Content>
                </NavigationMenu.Content>
            </NavigationMenu.Item>,
            <NavigationMenu.Item className='outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500'>
                <NavigationMenu.Trigger className='p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2'>
                    Serviços
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <NavigationMenu.Content>
                        {/* contentlist */}
                        <ul className='flex flex-col p-5 m-0 gap-y-2'>
                            {/* ContentListItem */}
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            {/* ContentListItem */}
                        </ul>
                        {/* contentlist */}
                    </NavigationMenu.Content>
                </NavigationMenu.Content>
            </NavigationMenu.Item>,
            <NavigationMenu.Item className='outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500'>
                <NavigationMenu.Trigger className='p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2'>
                    Fornecedores
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <NavigationMenu.Content>
                        {/* contentlist */}
                        <ul className='flex flex-col p-5 m-0 gap-y-2'>
                            {/* ContentListItem */}
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            {/* ContentListItem */}
                        </ul>
                        {/* contentlist */}
                    </NavigationMenu.Content>
                </NavigationMenu.Content>
            </NavigationMenu.Item>,
            <NavigationMenu.Item className='outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500'>
                <NavigationMenu.Trigger className='p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2'>
                    Estoque
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <NavigationMenu.Content>
                        {/* contentlist */}
                        <ul className='flex flex-col p-5 m-0 gap-y-2'>
                            {/* ContentListItem */}
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            {/* ContentListItem */}
                        </ul>
                        {/* contentlist */}
                    </NavigationMenu.Content>
                </NavigationMenu.Content>
            </NavigationMenu.Item>,
            <NavigationMenu.Item className='outline-none rounded text-blue-500 transition-all focus:relative focus:shadow-lg hover:bg-gray-500'>
                <NavigationMenu.Trigger className='p-2 outline-none rounded text-blue-500 transition-all flex items-center justify-between gap-2 focus:relative focus:shadow-lg hover:bg-gray-500 hover:p-2'>
                    Fiscal
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                    <NavigationMenu.Content>
                        {/* contentlist */}
                        <ul className='flex flex-col p-5 m-0 gap-y-2'>
                            {/* ContentListItem */}
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            <li className='grid-rows-3'>
                                <NavigationMenu.Link className='flex flex-col justify-end w-full h-full rounded p-6'>
                                    <Text>Children</Text>
                                </NavigationMenu.Link>
                            </li>
                            {/* ContentListItem */}
                        </ul>
                        {/* contentlist */}
                    </NavigationMenu.Content>
                </NavigationMenu.Content>
            </NavigationMenu.Item>
        ]
    }
} as Meta<NavbarRootProps>

export const Default: StoryObj<NavbarRootProps> = {}