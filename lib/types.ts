type NimiProps = {
  company_name: string;
  company_address: string;
  company_province: string;
  company_district: string;

  site_name: string;
  site_domain: string;
  site_title: string;
  site_description: string;
  keywords: string[];
  authors: {
    name: string;
    url: string;
  }[];

  site_instagram_link: string;
  site_facebook_link: string;
  site_github_link: string;
  site_x_link: string;
  site_linkedin_link: string;

  posts_per_page: number;
  wordpress_url: string;
  google_analytics_id: string;

  logo: string;
  logo_primary?: string;
  logo_dark_mode?: string;

  hero_title: string;
  hero_description: string;

  menu: {
    main: {
      "Ana Sayfa": string;
      "Hakkımızda": string;
      "İletişim": string;
    };
    cta?: string;
  };

  nav_menu: {
    title: string;
    items: {
      title: string;
      href: string;
      description: string;
    }[];
  };

  legal_menu: {
    title: string;
    items: {
      title: string;
      href: string;
      description: string;
    }[];
  };

  sectory_menu: {
    title: string;
    items: {
      id: string;
      title: string;
      href: string;
      imageURL: string;
      description: string;
      content: string;
    }[];
  };


};

type NavProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

type PageProps = {
  id: number;
  slug: string;
  title: string;
  description: string;
  detail: {
    title: string;
    imageURL: string;
    content: string;
  };
};

type faqProps = {
  question: string;
  answer: string;
  link?: string;
};
