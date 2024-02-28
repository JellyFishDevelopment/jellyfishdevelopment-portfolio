import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import MarqueeLooper from "./marquee-looper"

export function ProjectsCard() {
  return (
    <div className="flex flex-row">
      <Card className="w-[350px]">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <Image 
            src={"/sds-wiki.png"}
            width={500}
            height={500}
            alt="sds wiki project"
            className="rounded"
          />
          <CardTitle className="text-2xl font-extrabold pt-4">SDS Wiki</CardTitle>
          <CardDescription className="py-2">Site dinâmico e minimalista de busca e documentação sobre Software Defined Storage baseado em Astro, utilizando arquivos em markdown.</CardDescription>
          <MarqueeLooper/>
          
        </CardContent>
        <CardFooter className="flex justify-between">
        </CardFooter>
      </Card>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">JM Elétrica</CardTitle>
          <CardDescription>Site institucional sobre elétrica e soluções em energia, usando API de envio de e-mail, baseado em React.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image 
            src={"/jm-eletrica.png"}
            width={500}
            height={500}
            alt="jm eletrica project"
            className="rounded"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
        </CardFooter>
      </Card>

      <Card className="w-[350px]">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <Image 
            src={"/luciana-advogada.png"}
            width={500}
            height={500}
            alt="luciana advogada project"
            className="rounded"
          />
          <CardTitle className="text-2xl font-extrabold pt-4">Luciana Advocacia</CardTitle>
          <CardDescription>Site estático desenvolvido para assessoria e consultoria de advocacia jurídica.</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>

  )
}
