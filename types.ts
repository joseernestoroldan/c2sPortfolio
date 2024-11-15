export type ContainerProps = {
    children: React.ReactNode;
  };

  export type workDataType =  {
    image: string;
    language: string;
    _id: string;
    _createdAt: string; // Assuming it's a string representation of a date
    title: string;
    netlify: null | string; // Can be null or a string URL
    contenido: null | string; // Can be null or a string
    externalLink:null | string;
    description: string;
    git: null | string;
    vercel: null | string; // Can be null or a string URL
  }

  export type WorkIconsProps = {
    icon: string;
  };

  export type workCardType = {
    image: string;
    language: string;
    title: string;
    netlify: null | string; // Can be null or a string URL
    externalLink: null | string;
    description: string;
    git: null | string;
    vercel: null | string; // Can be null or a string URL
  };