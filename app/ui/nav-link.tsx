import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { UrlObject } from "url";

export default function NavLink(props: {
  className?: string | undefined | null;
  linkTo: string | UrlObject;
  children:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | ReactPortal
        | ReactElement<unknown, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
}) {
  return (
    <li
      className={`nav-item hover:text-vert cursor-pointer transition-all duration-700 ${props.className}`}
    >
      <Link href={props.linkTo}>{props.children}</Link>
    </li>
  );
}
