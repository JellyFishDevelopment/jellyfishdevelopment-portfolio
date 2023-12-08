import logo from '../../public/Logo_Polvo.svg'
import Image from 'next/image';
import instagramLogo from '../../public/svg-tec/instagram_logo.svg';
import linkedinLogo from '../../public/svg-tec/linkedin_logo.svg';
import whatsappLogo from '../../public/svg-tec/whatsapplogo.svg';

export function FooterMain(){
    return (
        <div className="grid grid-cols-3 gap-96 mt-10">

            <div>
                <Image 
                    src={logo}
                    width={200}
                    height={200}
                    alt="Picture of a JellyFish"
                />
            </div>

            <div>
                <h1></h1>
                <ul className='text-center font-normal'>
                    <li>Inicio</li>
                    <li className='mt-5'>Projetos</li>
                    <li className='mt-5'>Contato</li>
                </ul>
            </div>

            <div className='flex-row'>
                <p className='mb-3 text-center font-normal'>Redes Sociais</p>

                <div className='flex gap-4 justify-center'>

                <Image
                    src={instagramLogo}
                    width={40}
                    height={40}
                    alt="instagram logo"
                />

                <Image
                    src={linkedinLogo}
                    width={40}
                    height={40}
                    alt="linkedin logo"
                />

                <Image
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