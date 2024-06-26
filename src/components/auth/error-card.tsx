import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
    Card,
    CardHeader,
    CardFooter
} from "@/components/ui/card";

export const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label="Oops! Something went wrong!" />
            </CardHeader>
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
            <CardFooter>
                <BackButton
                    label="Back to login"
                    href="/auth/login" 
                />
            </CardFooter>
        </Card>
    );
};