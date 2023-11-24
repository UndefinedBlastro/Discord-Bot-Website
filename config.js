import {BsFacebook, BsYoutube } from "react-icons/bs";
import {IoRocketSharp} from "react-icons/io5";
import {FaDiscord} from "react-icons/fa";
import {MdOutlineAddModerator} from "react-icons/md";
import {GiTrophyCup} from "react-icons/gi";
import {BiSolidMessageSquareEdit} from "react-icons/bi";
import {SiWelcometothejungle} from "react-icons/si";
import {SiFunimation} from "react-icons/si";
const config = {
  name: "Ayra",
  //BotName
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=1090567188227817523&permissions=178616284561198&scope=bot&redirect_uri=https://docs.markos.ga&response_type=code",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdOutlineAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <IoRocketSharp className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Want to automate your posts? We got you",
      logo: <BiSolidMessageSquareEdit className="h-10 w-10" />,
    },
    {
      name: "Welcomer",
      description:
        "Welcome new members in your style",
      logo: <SiWelcometothejungle className="h-10 w-10" />,
    },
    {
       name: "Leveling",
      description:
        "Spice up your server by our overhauled leveling system",
      logo: <GiTrophyCup className="h-10 w-10" />,
    },
    {
      name: "Fun, Actions and More..",
      description:
        "Replace many bots with ayra and enjoy",
      logo: <SiFunimation  className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 300, //-  - Your
  memberCount: 700, //--   - Bot
  executedCommand: 27000, //--  - Stats
  availableCommand: 400, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
   //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/UndefinedBlastro",
  twitterLink: "https://twitter.com",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.gg/ayra",

};

export default config;
