import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white tracking-wide text-center font-bold">
        The URL <span className="text-orange-500">Shortner</span> Place <br />
        that&rsquo;ll you need! <span className="text-2xl sm:text-6xl">👇</span>
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
        type="url"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter URL that is to be shorten...."
        className="h-full flex-1 py-4 px-4"
        />
        <Button
          type="submit"
          className="h-full py-4 px-6 font-bold bg-orange-500 text-white text-xl tracking-wider"
        >
          Sort It
        </Button>
      </form>
      

      <Accordion type="multiple" collapsible className="w-full mt-10 md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">
            What is the purpose of this Website ?
          </AccordionTrigger>
          <AccordionContent className="text-xl">
            The idea is to minimize the web page address into something that's
            easier to remember and track.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">How to use this ?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Go to a website and select the URL in the address bar and Copy the URL<br />
            Go to the URL shortener website and paste the URL into the space
            provided  <br />Click a button to shorten the URL <br />Copy the shortened URL<br />
            Share the shortened URL in emails, chats, or on sites.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">Do i need to login ?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, you have to create an account, so that you can manage all the links you provided for!
          </AccordionContent>
        </AccordionItem>
      </Accordion>


    </div>
  );
};

export default LandingPage;
