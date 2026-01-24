"use client"

import { Field } from "@/app/components/ui/field"
import { Input } from "@/app/components/ui/input"
import { UploadIcon, XIcon } from "lucide-react"
import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"

const ImagePicker = ({ id, name }: { id: string, name: string }) => {
    const [image, setImage] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    const handleClick = useCallback(() => {
        ref.current?.click();
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImage(fileReader.result as string);
            }
            fileReader.readAsDataURL(file);
        }
    }, []);

    const handleRemove = useCallback(() => {
        setImage(null);
        if (ref.current) ref.current.value = "";
    }, []);

  return (
    <Field className="flex flex-col gap-4 relative w-40">
        <Input ref={ref} id={id} name={name} type="file" accept="image/*" className="w-full sr-only" onChange={handleChange} />
        {image ? (
            <div className="relative h-40" >
                <Image src={image} alt="Image" fill className="object-cover rounded-md cursor-pointer"/>
                <Button variant={"destructive"} type="button" size="sm" onClick={handleRemove} className="absolute top-2 right-2"><XIcon className="w-4 h-4" /></Button>
            </div>
        ):(
            <div className="relative h-40 border-2 border-dashed border-primary rounded-md flex items-center justify-center" onClick={handleClick}>
                <UploadIcon className="w-4 h-4" />
            </div>
        )}  
    </Field>
  )
}

export default ImagePicker