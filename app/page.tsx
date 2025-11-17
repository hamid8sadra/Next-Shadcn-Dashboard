import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React from 'react'

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="default" className="rounded-full" size="lg">
        <CirclePlus/>
        click me
      </Button>
    </div>
  )
}

export default Home