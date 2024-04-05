import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import nimi from "@/nimi.config";

import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";

const Social = () => {
  return (
    <div className="flex gap-2 mt-4">
      <Button variant="outline" asChild size="icon">
        <Link href={nimi.site_facebook_link}>
          <FacebookIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Visit Facebook</span>
        </Link>
      </Button>

      <Button variant="outline" asChild size="icon">
        <Link href={nimi.site_instagram_link}>
          <InstagramIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Visit Instagram</span>
        </Link>
      </Button>

      <Button variant="outline" asChild size="icon">
        <Link href={nimi.site_x_link}>
          <TwitterIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Visit Twitter</span>
        </Link>
      </Button>

      <Button variant="outline" asChild size="icon">
        <Link href={nimi.site_linkedin_link}>
          <LinkedinIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Visit LinkedIn</span>
        </Link>
      </Button>

      <Button variant="outline" asChild size="icon">
        <Link href={nimi.site_github_link}>
          <GithubIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Visit Github</span>
        </Link>
      </Button>
    </div>
  );
};

export default Social;


/*

*/
