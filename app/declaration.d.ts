declare module "*.module.css";
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.json" {
    const value: any;
    export default value;
}