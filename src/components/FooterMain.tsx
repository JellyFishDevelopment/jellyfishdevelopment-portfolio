import logo from '../../public/Logo_Polvo.svg'
import Image from 'next/image';
import instagramLogo from '../../public/svg-tec/instagram_logo.svg';
import linkedinLogo from '../../public/svg-tec/linkedin_logo.svg';
import whatsappLogo from '../../public/svg-tec/whatsapplogo.svg';

export function FooterMain(){
    return (
        <div className="grid grid-cols-3 mt-10">

            <div>
                <Image 
                    src={logo}
                    width={100}
                    height={100}
                    alt="Picture of a JellyFish"
                />
            </div>

            <div>
                <ul className='text-center'>
                    <li>Inicio</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>

            <div className='flex-row'>
                <p className='mb-3 text-center'>Redes sociais</p>

                <div className='flex gap-4'>

                <Image
                    className='justify-items-start'
                    src={instagramLogo}
                    width={40}
                    height={40}
                    alt="instagram logo"
                />

                <Image
                    className='justify-items-start'
                    src={linkedinLogo}
                    width={40}
                    height={40}
                    alt="linkedin logo"
                />

                <Image
                    className='justify-items-end'
                    src={whatsappLogo}
                    width={40}
                    height={40}
                    alt="whatsapp logo"
                />
            </div>
            </div>

            
   
    </div>  
  
    );
}