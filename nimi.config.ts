const nimi: NimiProps = {
  company_name: "Nimi Turizm Ticaret Ltd. Şti.",
  company_address: "Akarca Mahallesi, Yunus Nadi Cad. No:56",
  company_province: "Fethiye",
  company_district: "Muğla",

  site_name: "Nimi Tech", // site name: used in the header and footer
  site_domain: "https://www.nimi.com.tr", // site domain: used in the sitemap
  site_title: "Nimi.com.tr | Solar, Turizm, Villa Kiralama, İnşaat",
  site_description:
    "Yenilikçi vizyonumuzla ilk günümüzden itibaren turizm, gayrimenkul, enerji ve inşaat sektörlerinde öncü rol üstleniyoruz.",

  keywords: ["Solar", "Enerji", "Turizm", "Villa Kiralama", "İnşaat"],
  authors: [{ name: "nimi", url: "https://nimi.com.tr" }],

  site_instagram_link: "https://instagram.com/villacicom",
  site_facebook_link: "https://facebook.com/villacicom",
  site_github_link: "https://github.com/",
  site_x_link: "https://x.com/villacicom",
  site_linkedin_link: "https://www.linkedin.com",

  posts_per_page: 5,
  wordpress_url: "",
  google_analytics_id: "",

  logo: "../logo.svg",

  hero_title: "Değer bilir, değer katarız.",
  hero_description:
  "Yenilikçi vizyonumuzla, ilk günümüzden itibaren turizm, gayrimenkul, enerji ve inşaat sektörlerinde öncü rol üstleniyoruz.",

  menu: {
    main: {
      "Ana Sayfa": "/", // Don't Change
      "Hakkımızda": "/hakkimizda", // you can remove this if you don't want an about page
      "İletişim": "/iletisim", // you can remove this if you don't want a contact page
    },
    content: {
      authors: "/posts/authors", // default is `/posts/authors`
      categories: "/posts/categories", // default is `/posts/categories`
      tags: "/posts/tags", // default is `/posts/tags`
      pages: "/all", // default is `/all`
    },
    legal: {
      privacy_policy: "/privacy-policy", // default is `/privacy-policy`
      privacy_policy_text: "Privacy Policy", // default is `Privacy Policy`
      terms_of_service: "/terms-of-service", // default is `/terms-of-service`
      terms_of_service_text: "Terms of Service", // default is `Terms of Service`
    },
    cta: "#", // Link to CTA
  },

  nav_menu: {
    title: "Kurumsal",
    items: [
      {
        title: "Hakkımızda",
        href: "/hakkimizda",
        description:
          "Learn more about Fjord and how to use it for your next project.",
      },
      {
        title: "İletişim",
        href: "/iletisim",
        description:
          "Get in touch with us if you have any questions or feedback. We would love to hear from you.",
      },
      {
        title: "Kvkk",
        href: "/kvkk",
        description:
          "Get in touch with us if you have any questions or feedback. We would love to hear from you.",
      },
    ],
  },

  directory_menu: {
    title: "Learn Fjord",
    items: [
      {
        title: "Documentation",
        href: "#",
        description:
          "Styles for headings, paragraphs, lists, and other inline elements.",
      },
      {
        title: "Layout Components",
        href: "#",
        description:
          "Components that help you lay out your content, like Main, Craft.Section, and Craft.Container.",
      },
      {
        title: "Navigation",
        href: "#",
        description:
          "A Navigation component that helps you build accessible navigation menus.",
      },
    ],
  },

  sectory_menu: {
    title: "Sektörlerimiz",
    items: [
      {
        id: "0",
        title: "Enerji Sistemleri",
        href: "/enerji-sistemleri",
        imageURL: "../enerji.webp",
        description:
          "Mevzuata uygun, güvenli ve maksimum verimli lisanslı/lisanssız güneş enerji santralleri ve çatı üstü projeleriyle, anahtar teslim kurulum ve bakım-onarım hizmetlerinde öncüyüz.",
             content: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.",
      },
      {
        id: "1",
        title: "Turizm ve Acenta",
        href: "/turizm-acenta",
        imageURL: "../tourism.webp",
        description:
"Uzman ekibimiz ve yenilikçi yaklaşımımızla turizmde öncü rolümüzü sürdürüyoruz. Her gün büyüyerek, tatil hayali kuran misafirlerimizi aradıkları tatil ile buluşturuyoruz.",
        content: "Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan de Finibus Bonorum et Malorum (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan Lorem ipsum dolor sit amet 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.",
      },
      {
        id: "2",
        title: "Proje ve İnşaat",
        href: "/proje-insaat",
        imageURL: "../insaat.webp",
        description:
"Profesyonel ve uzman ekibimizle projelendirme, anahtar teslim inşaat, tadilat gibi inşaatın her alanında hizmetinizdeyiz. Geleceğe değer katıyoruz, adım adım inşa ediyoruz.",
        content: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.",
      },
    ],
  },
};

export default nimi;
