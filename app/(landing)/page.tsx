import { Button } from "@/components/ui/button"
import Link from "next/link";
import {Card} from "@/components/ui/card"

const LandingPage = () => {
  return (
  <div className="w-1/2 y-1/2 p-4 mx-auto text-center border">
    landing page (unprotected)
    <Card className="w-1/2 y-1/2 p-4 mx-auto text-center border">

    <div>
      <Link href = "/sign-in">
    <Button className="flex pr-5">
      Login
    </Button>
      </Link> 
      <br></br>
      <Link href = "/sign-up">
    <Button className="flex pl-5">
      register
    </Button>
      </Link> 
  </div>
    </Card>
  </div>
);
}

export default LandingPage;