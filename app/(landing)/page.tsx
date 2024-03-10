import { Button } from "@/components/ui/button"
import Link from "next/link";

const LandingPage = () => {
  return (
  <div>
    landing page (unprotected)
    <div>
      <Link href = "/sign-in">
    <Button>
      Login
    </Button>
      </Link> 
  </div>
  <br></br>
  <div>
      <Link href = "/sign-up">
    <Button>
      register
    </Button>
      </Link> 
  </div>
  </div>
);
}

export default LandingPage;