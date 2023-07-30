type ConfigType = {
    NavBarLinks: {
        name: string;
        path: string;
    }[];
    Footer: {
        date: number;
        name: string;
        url: string;
    };
    Email: {
        sender: string;
        msgTo: string;
        subject: string;
    };
}