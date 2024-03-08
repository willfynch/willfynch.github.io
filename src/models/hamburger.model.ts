export interface HamburgerModel {
    fill: string;
    svgClasses: string;
    lineOneClasses: string;
    lineTwoClasses: string;
    isOpen: boolean;
    onOpen: ()=>void;
    
}