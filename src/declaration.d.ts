/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-28 16:48:33
 * @LastEditTime : 2022-03-31 23:45:43
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-travel-site\src\declaration.d.ts
 */
import { CSSProp } from "styled-components";

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
