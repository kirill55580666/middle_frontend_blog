import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModalHandler = useCallback(() => {
        // setIsAuthModal((prevState) => !prevState);
        setIsAuthModal(false);
    }, []);

    const onOpenModalHandler = useCallback(() => {
        // setIsAuthModal((prevState) => !prevState);
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModalHandler}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModalHandler}
            />
        </div>
    );
};
