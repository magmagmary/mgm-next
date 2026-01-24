import { Metadata } from "next";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
    title: "Meals page",
    description: 'Meals page',
}

export default function MealsLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}