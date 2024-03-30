"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {UserButton} from "@clerk/nextjs"
import { ArrowRight, CodeSquare, EditIcon, FlashlightIcon, GemIcon, GrabIcon, ImagesIcon, MessageCircle, MessageCircleCodeIcon, MessagesSquareIcon, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Chat",
    icon: MessagesSquareIcon,
    color:"text-violet-500",
    bgcolor: "bg-violet-500/10",
    href:"/chat"

  },
  {
    label: "TryOn",
    icon: GrabIcon,
    color: "text-red-800",
    bgcolor: "bg-red-800/10",
    href: "/TryOn"

  },
 
  {
    label: "Image Generation",
    icon: ImagesIcon,
    color:"text-yellow-500",
    bgcolor: "bg-yellow-500/10",
    href:"/image"

  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color:"text-emerald-500",
    bgcolor: "bg-emerald-500/10",
    href:"/video"

  },

  {
    label: "Music generation",
    icon: Music,
    color:"text-red-500",
    bgcolor: "bg-red-500/10",
    href:"/music"

  },
  {
    label: "Code Generation",
    icon: CodeSquare,
    color:"text-pink-500",
    bgcolor: "bg-pink-500/10",
    href:"/code"

  }

]


const DashboardPage = () => {
  const router =  useRouter();
  return (
    <div>
      <div className = "mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Mobius-AI.
        </h2>
        <p className="text-muted-foreground font-light textsm md:text-lg text-center">
          Engage with the most Inteligent AI in the world.
        </p>

      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
          onClick={() => router.push(tool.href)} 
          key={tool.href}
          className = "p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fir rounded-md", tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)}/>
            </div>
            <div className="font-bold">
              {tool.label}
            </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
      
    </div>
   
  );
}

export default DashboardPage;