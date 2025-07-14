import { lazy } from "react";

const CompareSection = lazy(() => import("./CompareSection"));
const HowTo = lazy(() => import("./HowTo"));
const Hero = lazy(() => import("./Hero"));
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const CustomDivider = lazy(() => import("./CustomDivider"));
const Loader = lazy(() => import("./Loader"));
const Button = lazy(() => import("./Button"));
const TagInput = lazy(() => import("./TagInput"));
const ConfirmBox = lazy(() => import("./ConfirmBox"));

export {
    CompareSection, 
    CustomDivider, 
    Hero, Header,
    Footer, HowTo, 
    Loader, Button, 
    TagInput, ConfirmBox
};