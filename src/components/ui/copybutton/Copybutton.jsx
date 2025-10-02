import { useState } from "react";
import { Check, Copy } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip";
import { Button } from "./Button";

function Copybutton() {
    const [copied, setCopied] = useState(false);
    const email = "shahbaznadeem889@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="disabled:opacity-100 relative"
                        onClick={handleCopy}
                        aria-label={copied ? "Copied" : "Copy to clipboard"}
                        disabled={copied}
                    >
                        {copied ? (
                            <Check className="stroke-emerald-500 transition-all scale-100 opacity-100" size={16} strokeWidth={2} />
                        ) : (
                            <Copy className="transition-all scale-100 opacity-100" size={15} strokeWidth={2} />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent className="px-2 py-2 text-xs">
                    {copied ? "Copied!" : "Click to copy my Email"}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default Copybutton;
