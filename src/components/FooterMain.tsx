import logo from '../../public/Logo_Polvo.svg'
import Image from 'next/image';
import instagramLogo from '../../public/svg-tec/instagram_logo.svg';
import linkedinLogo from '../../public/svg-tec/linkedin_logo.svg';
import whatsappLogo from '../../public/svg-tec/whatsapplogo.svg';

export function FooterMain(){
    return (
        <div className="grid grid-cols-3 mt-10">

            <div className='mr-40'>
                <a href="#">
                    <Image 
                        src={logo}
                        width={200}
                        height={200}
                        alt="Picture of a JellyFish"
                    />
                </a>
            </div>

            <div>
                <h1></h1>
                <ul className='font-normal text-center grid'>
                    <li> <a href="#" className='hover:scale-105 ease-in-out duration-300 inline-block'>Inicio</a></li>
                    <li> <a href="#" className='hover:scale-105 ease-in-out duration-300 inline-block mt-2' >Projetos</a></li>
                    <li> <a href="#" className='hover:scale-105 ease-in-out duration-300 inline-block mt-2'>Contato</a></li>
                </ul>
            </div>

            <div className='flex-row ml-20'>
                <p className='mb-3 text-center font-normal'>Redes Sociais</p>

                <div className='flex gap-4 justify-center'>

                <a href="https://www.instagram.com/jellyfishdevelopment/" target="_blank">
                    <Image
                        className='hover:scale-105 ease-in-out duration-300'
                        src={instagramLogo}
                        width={40}
                        height={40}
                        alt="instagram logo"
                    />
                </a>
                <a href="https://www.linkedin.com/in/leticiaboza/" target='_blank'>
                    <Image
                        className='hover:scale-105 ease-in-out duration-300'
                        src={linkedinLogo}
                        width={40}
                        height={40}
                        alt="linkedin logo"
                    />
                </a>

                <a href="https://wa.me/5513991063173" target='_blank'>
                    <Image
                        className='hover:scale-105 ease-in-out duration-300'
                        src={whatsappLogo}
                        width={40}
                        height={40}
                        alt="whatsapp logo"
                    />
                </a>
            </div>
            </div>

            
   
    </div>  
  
    );
}