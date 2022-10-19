import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ReactNode } from 'react';

export interface NavbarRootProps extends NavigationMenu.PrimitiveNavProps {
    children: ReactNode[];
}

function NavbarRoot(props: NavbarRootProps) {
    return (
        <NavigationMenu.Root className='relative flex justify-center w-full z-10'>
            <NavigationMenu.List className='flex w-full w-max-[400px] justify-center bg-gray-200 p-2 rounded list-none shadow-lg'>
                {props.children}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}

NavbarRoot.displayName = 'Navbar.Root'

export interface NavbarItemProps extends NavigationMenu.PrimitiveNavProps {

}

function NavbarItem(props: NavbarItemProps) {

}

NavbarRoot.displayName = 'Navbar.Item'

export const Navbar = {
    Root: NavbarRoot,
    Item: NavbarItem,
}

// export function Navbar(props: NavbarProps) {
//     return (
//         <NavigationMenu.Root className='flex justify-center w-full z-10 bg-gray-900 p-4 gap-2'>
//             <NavigationMenu.List className='flex w-full flex-row justify-center gap-2 bg-gray-200 rounded list-none shadow-lg'>
//                 <NavigationMenu.Item className='py-2 px-3 outline-none text-blue-500'>
//                     <NavigationMenu.Trigger className='flex items-center justify-between gap-2'>
//                         Clientes
//                     </NavigationMenu.Trigger>
//                     <NavigationMenu.Content className='absolute top-12 left-0 rounded bg-gray-900 text-gray-200'>
//                         Item one content
//                     </NavigationMenu.Content>
//                 </NavigationMenu.Item>
//                 <NavigationMenu.Item className='outline-none py-1'>
//                     <NavigationMenu.Trigger className='flex items-center justify-between gap-2 py-1 px-3 rounded transition-all text-gray-900 hover:bg-gray-500 hover:text-gray-200'>
//                         Item two
//                     </NavigationMenu.Trigger>
//                     <NavigationMenu.Content className='absolute top-12 left-0 rounded bg-gray-900 text-gray-200'>
//                         Item two content
//                     </NavigationMenu.Content>
//                 </NavigationMenu.Item>
//                 <NavigationMenu.Item className='py-2 px-3 outline-none text-blue-500'>
//                     <NavigationMenu.Trigger className='flex items-center justify-between gap-2'>
//                         Item three
//                     </NavigationMenu.Trigger>
//                     <NavigationMenu.Content className='absolute top-12 left-0 rounded bg-gray-900 text-gray-200'>
//                         Item three content
//                     </NavigationMenu.Content>
//                 </NavigationMenu.Item>
//             </NavigationMenu.List>
//         </NavigationMenu.Root>
//     )
// } 