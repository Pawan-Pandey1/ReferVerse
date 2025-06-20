import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
   const links = [
    { name: "Find Referrals", url: "find-referrals" },
    { name: "Offer Referrals", url: "offer-referrals" },
    { name: "Post Opportunities", url: "post-opportunities" },
    { name: "About Us", url: "about-us" },
  ];

  const location = useLocation();

  return <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => <div className={`${
            location.pathname == "/" + link.url
              ? "border-royal-purple-400 text-royal-purple-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link key={index} to={`/${link.url}`}>{link.name}</Link>

        </div>
      )}
    </div>
};

export default NavLinks;
