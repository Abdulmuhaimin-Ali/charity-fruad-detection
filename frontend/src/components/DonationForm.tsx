"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const PRESET_AMOUNTS = [10, 25, 50, 100, 500]

export function DonationForm() {
  const [amount, setAmount] = useState(600)
  const [customAmount, setCustomAmount] = useState(false)

  return (
    <form className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-2">Rating</h2>
        <div className="h-4 w-full rounded-full bg-gradient-to-r from-[#986d12] to-[#005316] mb-2" />
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Rating</span>
          <span className="font-medium">XX%</span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Donation Amount</h2>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {PRESET_AMOUNTS.map((preset) => (
            <Button
              key={preset}
              type="button"
              variant={amount === preset ? "default" : "outline"}
              onClick={() => {
                setAmount(preset)
                setCustomAmount(false)
              }}
              className="text-lg"
            >
              ${preset}
            </Button>
          ))}
          <Button
            type="button"
            variant={customAmount ? "default" : "outline"}
            onClick={() => setCustomAmount(true)}
            className="bg-[#005316] text-white hover:bg-[#005316]/90"
          >
            CUSTOM AMOUNT
          </Button>
        </div>
        {customAmount && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">$</span>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="text-xl"
            />
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="Email Address" />
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="text-sm text-[#374151]">Donation Total:</div>
          <div className="text-2xl font-bold text-[#005316]">${amount}</div>
        </div>
        <Button type="submit" className="bg-[#005316] text-white hover:bg-[#005316]/90 px-8">
          ADD TO CART
        </Button>
      </div>
    </form>
  )
}

