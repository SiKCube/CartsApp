import { Link } from "@remix-run/react";

interface Props {
  text: string
  icon: JSX.Element
}

export default function LinkTo({ text, icon }: Props) {
  return (
    <ul>
      <Link className="flex gap-1 items-center text-sm" to={"/"}>
        {icon}
        {text}
      </Link>
    </ul>
  )
}