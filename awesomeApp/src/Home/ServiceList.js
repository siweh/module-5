import img1 from '../../assets/img1Service.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/photographer.jpg'
import img4 from '../../assets/img2Service.png'

const ServiceList = [
    {
        name: "Clean withUS",
        email: "clean@gmail.com",
        review: '3',
        avatar:img1,
        coord:{latitude:-26.118079,longitude:28.038936}
    },
    {
        name: "HairStyle by Me",
        email: "hairstyles@gmail.com",
        review: '4',
        avatar:img2,
        coord:{latitude:-26.100750,longitude:28.070340}


    }, {
        name: "Photographer",
        email: "photos@gmail.com",
        review: '4',
        avatar:img3,
        coord:{latitude:-26.097687,longitude:28.056401}


    },
    {
        name: "Plumbing Service",
        email: "plumbing@gmail.com",
        review: '5',
        avatar:img4,
        coord:{latitude:-26.107167,longitude:28.044634}


    }
]

export default ServiceList;