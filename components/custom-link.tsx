'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

export interface IProps extends LinkProps {
    href: string;
    children: ReactNode | string;
    className?: string;
}

const CustomLink: FC<IProps> = (props) => {
    const { href, children, className, ...others } = props;
    const pathname = usePathname();

    // Verifica si la ruta actual es la página de inicio
    const isHomePage = pathname === '/';

    // Ajusta la URL dependiendo de si estás en la página de inicio o no
    const adjustedTo = isHomePage ? href : '/' + href;

    // Utiliza el componente de enlace de React Router
    return (
        <Link href={adjustedTo} className={className} {...others}>
            {children}
        </Link>
    );
};

export default CustomLink;
