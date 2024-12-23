import { Button } from "@/components/ui/button";

interface AuthButtonsProps {
  imgSrc: string;
  altText: string;
  buttonText: string;
}

export function AuthButtons({ imgSrc, altText, buttonText }: AuthButtonsProps) {
  return (
    <div className="my-3">
      <Button variant="outline" className="w-full  h-12 px-4" asChild>
        <a rel="stylesheet" href="#">
          <img src={imgSrc} alt={altText} className="mr-2" />
          {buttonText}
        </a>
      </Button>
    </div>
  );
}
