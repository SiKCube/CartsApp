import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface Props {
  title: string | undefined
  desc: string | undefined
}

export default function InfoCard({ title, desc }: Props) {
  return (
    <>
      {
        title && desc ?
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
          </Card>
          :
          <Card>
            <CardHeader>
              <CardTitle>NO</CardTitle>
              <CardDescription>NO</CardDescription>
            </CardHeader>
          </Card>
      }
    </>
  )
}