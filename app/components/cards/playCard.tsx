import { Dispatch, SetStateAction } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { EyeIcon } from "lucide-react";

interface Props {
  title: string | undefined
  text: string | undefined
  viewRes: boolean
  setViewRes: Dispatch<SetStateAction<boolean>>
}

export default function PlayCard({ title, text, viewRes, setViewRes }: Props) {
  return (
    <Card className="m-10">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        {
          viewRes ?
            <div className="flex justify-center items-center">
              <img src={text} alt={title} className="w-1/2" />
            </div>
            :
            <Button variant={"secondary"} onClick={() => setViewRes(!viewRes)}>
              <EyeIcon className="size-4" />
            </Button>
        }
      </CardContent>
    </Card>
  )
}