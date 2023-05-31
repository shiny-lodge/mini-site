declare module 'rodal' {
    import { MouseEventHandler, ReactNode } from 'react';

    type RodalProps = {
        children?: ReactNode;
        width?: number;
        height?: number;
        measure?: string;
        visible?: boolean;
        showMask?: boolean;
        closeOnEsc?: boolean;
        closeMaskOnClick?: boolean;
        showCloseButton?: boolean;
        animation?: string;
        enterAnimation?: string;
        leaveAnimation?: string;
        duration?: number;
        className?: string;
        customStyles?: { [key: string]: any };
        customMaskStyles?: { [key: string]: any };
        onClose?: MouseEventHandler<HTMLSpanElement>;
        onAnimationEnd?: () => never;
    };

    const Rodal = (_: RodalProps): JSX.Element => { };
    export = Rodal;
}

declare module "@editorjs/header" {
    import Header from "@editorjs/header";
    export = Header;
}

declare module "@editorjs/list" {
    import List from "@editorjs/list";
    export = List;
}

declare module "@editorjs/table" {
    import Table from "@editorjs/table";
    export = Table;
}