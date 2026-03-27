'use client'

import { SubmitFormButtonProps } from "@/types"
import { Button } from "../ui/button"

export default function SubmitFormButton({onClick, description}: SubmitFormButtonProps) {
  return (
    <Button onClick={onClick}>
      {description || "Submit"}
    </Button>
  )
}