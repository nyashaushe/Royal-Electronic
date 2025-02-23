import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BookingForm = () => {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="device">Device</Label>
          <Input type="text" id="device" placeholder="iPhone, Samsung, etc." />
        </div>
        <div>
          <Label htmlFor="problem">Problem</Label>
          <Input type="text" id="problem" placeholder="Screen cracked, battery issue, etc." />
        </div>
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Calendar />
      </div>
      <div>
        <Label htmlFor="time">Time</Label>
        <Input type="time" id="time" />
      </div>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Your Name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Your Email" />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Book Appointment</button>
    </div>
  );
};

export default BookingForm;
