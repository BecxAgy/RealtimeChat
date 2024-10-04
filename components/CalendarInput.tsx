"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePickerDemo } from "./ui/time-picker-demo";

interface CalendarInputProps {
  value: Date;
  onChange: (date: Date | undefined) => void;
}

const CalendarInput: React.FC<CalendarInputProps> = ({ value, onChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "min-w-96 justify-start text-left font-normal rounded-xl bg-dark-3",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4  text-blue-1" />
          {value ? (
            format(value, " dd 'de' MMMM', às ' HH:mm'h'", {
              locale: ptBR,
            })
          ) : (
            <span>Selecione a data e horário</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-dark-1 border-none text-white"
        align="start"
      >
        {/* Data e hora calendar */}

        <Calendar
          className=""
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={(date) =>
            date < new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
        <div className="p-3 border-t border-dark-3">
          <TimePickerDemo date={value} setDate={onChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarInput;
