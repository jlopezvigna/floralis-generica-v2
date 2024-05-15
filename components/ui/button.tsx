import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';

export interface IButton extends LinkProps {
    className?: string;
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'link';
}

const ButtonVariant = {
    primary: 'text-white bg-orange-500 hover:bg-orange-600',
    outline: 'text-orange-500 border-orange-500 bg-white hover:bg-orange-100',
    link: 'text-orange-500 hover:bg-orange-200',
};

const Button: FC<IButton> = ({ className = null, children, variant = 'primary', ...others }) => {
    const variantClass = ButtonVariant[variant];
    return (
        <Link
            {...others}
            className={clsx('btn-sm rounded-md shadow transition duration-150 ease-in-out', variantClass, className)}
        >
            {children}
        </Link>
    );
};
export default Button;
