// projects.ts
export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      title: 'Biashara Assistant',
      description: 'Your Smart WhatsApp Assistant for Business. Biashara-Assistant helps Kenyan businesses automate customer service, handle bookings, and accept M-Pesa payments directly through WhatsApp. Built for salons, restaurants, service providers, and retail shops to save time and never miss a customer.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
      link: 'https://biashara.business/',
    },
    {
      title: 'Landlord-Tenant Management App',
      description: 'A robust solution designed to simplify property management for landlords and enhance the renting experience for tenants. The app offers tools for lease agreements, payment tracking, maintenance requests, and communication between tenants and landlords.',
      image: '/assets/project.png',
      link: 'https://cityrealtykenya.com/',
    },
    {
      title: 'Topnotch Books',
      description: 'KCSE revision made simple, visual, and deeply memorable. Topnotch Books is an e-commerce store built around the Octopus Revision Method—turning dense past papers into clear, visual study paths. Students get structured, exam-aligned practice with featured titles, educational videos, and a blog for revision tips and study strategies.',
      image: '/assets/topnotch.png',
      link: 'https://topnotch-ecom-store.vercel.app/',
    },
    {
      title: 'Code Kenya',
      description: 'Code Kenya is an education platform offering career-focused bootcamps and internships in the tech industry. We provide hands-on training in fields such as Software Engineering, Artificial Intelligence, and Entrepreneurship. Our unique program combines intensive bootcamps with internship placements, ensuring students gain valuable real-world experience. Whether online or in Nairobi, our programs equip students with the skills needed to succeed in their tech careers, backed by mentorship, networking opportunities, and a supportive community.',
      image: '/assets/codekenya.svg',
      link: 'https://www.codekenya.org/', // Replace with your live project URL
    },
    {
      title: 'Golden Sail Rong Da Logistics',
      description: 'Golden Sail App is a digital solution designed to optimize cargo transportation, fleet management, and supply chain operations. It connects shippers, carriers, and drivers on a unified platform, ensuring real-time tracking, efficient route planning, and seamless communication between stakeholders.',
      image: '/assets/dashboard.svg',
      link: 'https://goldensail.de/',
    },
    {
      title: 'Murphy Merchants Auctioneers',
      description: 'Murphy Merchants Auctioneers runs live auctions for office furniture, commercial property, vehicles, land, and electronics. Browse items, place bids, and contact the team for questions—all through a clear, secure platform designed for buyers and sellers across Kenya.',
      image: '/assets/murphy.png',
      link: 'https://murphy-tau.vercel.app/auctions.html',
    },
    {
      title: 'P.C.E.A Makupa Parish',
      description: "Welcome to P.C.E.A Makupa Parish, a place where faith and community come together to create a profound spiritual journey. We have been a steadfast presence in the lives of our congregation, nurturing and fostering spiritual growth. As we continue to evolve and adapt to the changing world, our commitment to spreading the message of love and hope remains unwavering. Join us in our journey of faith and be part of a community that makes a positive impact in the world. Learn about our services, leadership, and find opportunities to engage with us both in person and virtually.",
      image: '/assets/pceamakupaparish.svg',
      link: 'https://pcea-makupa.vercel.app/index.html',
    },
    {
      title: 'Prudence Showroom',
      description: 'Prudence Showroom is a dynamic platform designed for buying and selling cars. It connects car buyers and sellers in a seamless and efficient marketplace. Whether you are looking to purchase a new or used vehicle, or you want to sell your car, Prudence Showroom offers a user-friendly interface, detailed listings, and secure transaction options. With a wide range of vehicles available, Prudence Showroom is your one-stop destination for all your car buying and selling needs.',
      image: '/assets/prudence.svg',
      link: 'https://prudenceshowroom.com/',
    },
  ];
  