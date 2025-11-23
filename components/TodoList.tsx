"use client"
import { useState } from "react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"
import { Calendar } from "@/components/ui/calendar"
import {format} from "date-fns"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { Calendar1Icon } from "lucide-react"

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open,setOpen] = useState(false)
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon/>
            {date ? format(date,"ppp") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date)=>{
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[400] mt-4 overflow-y-auto">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="item1" />
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
      </ScrollArea>
    </div>
  )
}

export default TodoList
