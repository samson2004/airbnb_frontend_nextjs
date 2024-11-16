'use client';

import React,{useState} from 'react'
import { Input } from "@/components/ui/input"
import {DatePickerWithRange} from '@/components/ui/Datepicker';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const Bookingcomponent = ({className}) => {
    const [adultposition, setadultPosition] = useState("1");
    const [childposition, setchildPosition] = useState("1");
    const listofnumbers=["1","2","3","4","5","6"]
  return (
    <div className={className}>
        <Card className='w-[450px] shadow-2xl'>
            <CardHeader>
                <h2 className='font-bold text-4xl'>Find places to stay on Airbnb</h2>
                <CardDescription>Discover entire homes and rooms perfect for any trip.</CardDescription>
            </CardHeader>
            <div className='block'>
                <div className='mx-4 rounded-md border '>
                    <p className='ml-2 mt-1 font-semibold'>Location</p>
                    <Input type='Location' placeholder='Anywhere' 
                    className="border-none focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-lg" />
                </div>
                <div className='mx-4 my-4
                 rounded-md border'>
                    <p className='font-semibold ml-2 mt-1'>Check In-Out</p>
                    <DatePickerWithRange className={`border-none`}/>
                </div>
                <div className='mx-4 my-4 rounded-md border flex justify-evenly'>
                    <div className='mb-4 mt-1 '>
                        <p className='font-semibold text-lg'>Adults</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{adultposition}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup value={adultposition} onValueChange={setadultPosition}>
                                    {listofnumbers.map((val)=>{
                                        return(
                                            <DropdownMenuRadioItem key={val} value={val}>{val}</DropdownMenuRadioItem>
                                        );
                                    })}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <div className='w-[1px] max-h-full my-3 bg-gray-400'></div>
                    <div className='mb-4 mt-1'>
                    <p className='font-semibold text-lg'>Children</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{childposition}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup value={childposition} onValueChange={setchildPosition}>
                                    {listofnumbers.map((val)=>{
                                        return(
                                            <DropdownMenuRadioItem key={val} value={val}>{val}</DropdownMenuRadioItem>
                                        );
                                    })}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <CardFooter >
                <Button className='font-semibold w-full h-[50px] btn-hover color-11 text-xl shadow-2xl shadow-pink-500/50'>Search</Button>
            </CardFooter>
        </Card>

    </div>
  )
}

export default Bookingcomponent