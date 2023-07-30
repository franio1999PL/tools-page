const Config: ConfigType = {
    NavBarLinks: [
        {
            name: 'Strona Główna',
            path: '/'
        },
        {
            name: 'QRCode Generator',
            path: '/generator'
        },
        {
            name: 'Kontakt',
            path: '/contact'
        }
    ],
    Footer: {
        date: 2023,
        name: 'bladywebdev.pl',
        url: 'https://bladywebdev.pl'
    },
    Email: {
        sender: 'noreply@bladywebdev.pl',
        msgTo: 'sikorafranek@gmail.com',
        subject: 'Nowa wiadomość z strony TOOLS'
    }
}

export default Config