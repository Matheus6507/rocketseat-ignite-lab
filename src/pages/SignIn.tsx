import { At, Lock, SignIn as SignInIcon } from "phosphor-react";
import { Button } from "../components/Button/Button";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Heading } from "../components/Heading/Heading";
import { Text } from "../components/Text/Text";
import { TextInput } from "../components/TextInput/TextInput";
import { Logo } from "../Logo";

export function SignIn() {
    return (
        <div className="w-full max-w-sm">
            <header className="flex flex-col items-center">
                <Logo />
                <Heading size="lg" className="mt-4">
                    Login
                </Heading>
                <Text size="lg" className="text-gray-600 mt-1">
                    Entre com suas credenciais abaixo
                </Text>
            </header>
            <form className="flex flex-col gap-4 items-stretch justify-center w-full mt-10">
                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text>e-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <At />
                        </TextInput.Icon>

                        <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text>senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>

                        <TextInput.Input type="password" id="password" placeholder="******" />
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className="flex items-center gap-2">
                    <Checkbox />
                    <Text size="sm" className="text-gray-200">Manter conectado</Text>
                </label>

                <div className="mt-4">
                    <Button type="submit">
                        Entrar
                        <SignInIcon className="w-6 h-6" />
                    </Button>
                </div>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text asChild size="sm">
                    <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
                </Text>
                <Text asChild size="sm">
                    <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    )
}