import FeedAbout from "@/components/common/Feed/FeedAbout";
import FeedContato from "@/components/common/Feed/FeedContato";
import FeedFeedback from "@/components/common/Feed/FeedFeedback";
import FeedHelp from "@/components/common/Feed/FeedHelp";
import FeedProjects from "@/components/common/Feed/FeedProjects";
import FeedServices from "@/components/common/Feed/FeedServices";
import HeroSlider from "@/components/common/Hero/HeroSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeedAbout />
      <FeedServices />
      <FeedHelp />
      <FeedProjects />
      <FeedFeedback />
      <FeedContato />
    </>
  );
}
