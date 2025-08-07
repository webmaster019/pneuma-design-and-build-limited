//import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
// import 'owl.carousel'
import 'swiper/css/free-mode';
export const metadata = {
    title: 'Pneuma Design & Build',
    description: 'Architectural Solutions',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                  rel="stylesheet"/>
            <title></title>
        </head>
        <body>{children}</body>
        </html>
    )
}
