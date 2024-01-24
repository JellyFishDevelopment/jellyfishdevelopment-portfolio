import logo from '../../public/Logo_Polvo.svg'
import Image from 'next/image';
import instagramLogo from '../../public/svg-tec/instagram_logo.svg';
import linkedinLogo from '../../public/svg-tec/linkedin_logo.svg';
import whatsappLogo from '../../public/svg-tec/whatsapplogo.svg';

export function FooterMain(){
    return (
        <div className="grid grid-cols-3 mt-10">

            <div className='mr-40'>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" zoomAndPan="magnify" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="e62f4d81d7"><path d="M 73.304688 122.160156 L 301.691406 122.160156 L 301.691406 356.613281 L 73.304688 356.613281 Z M 73.304688 122.160156 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#e62f4d81d7)"><a href="/"><path fill="#ffffff" d="M 96.425781 288.050781 C 90.867188 239.042969 158.914062 225.574219 153.441406 172.839844 C 148.59375 193.914062 127.097656 203.214844 108.820312 214.273438 C 103.144531 217.707031 97.421875 221.523438 92.636719 226.148438 C 87.554688 231.058594 83.527344 236.878906 81.75 244.101562 C 78.101562 258.90625 85.546875 274.386719 96.425781 288.050781 Z M 278.566406 288.050781 C 284.125 239.042969 216.078125 225.574219 221.554688 172.839844 C 226.402344 193.914062 247.894531 203.214844 266.175781 214.273438 C 271.847656 217.707031 277.570312 221.523438 282.355469 226.148438 C 287.441406 231.058594 291.464844 236.878906 293.246094 244.101562 C 296.890625 258.90625 289.445312 274.386719 278.566406 288.050781 Z M 186.003906 356.59375 C 160.691406 355.886719 139.121094 336.039062 136.519531 310.84375 C 135.15625 297.609375 138.816406 283.816406 144.441406 270.1875 C 154.441406 245.953125 169.320312 222.195312 167.695312 196.8125 C 157.097656 241.929688 94.839844 248.683594 101.144531 297.207031 C 87.71875 287.023438 77.417969 272.582031 74.296875 257.484375 C 70.972656 241.417969 76.089844 227.09375 88.1875 216.121094 C 97.296875 207.859375 109.058594 202.109375 119.238281 194.695312 C 131.691406 185.625 141.238281 173.84375 139.164062 150.710938 C 138.820312 146.839844 138.804688 144.636719 140.625 141.109375 C 146.109375 130.488281 164.296875 122.617188 186.078125 122.285156 C 187.023438 122.273438 187.96875 122.273438 188.917969 122.285156 C 210.695312 122.617188 228.886719 130.488281 234.367188 141.109375 C 236.191406 144.636719 236.175781 146.839844 235.828125 150.710938 C 233.753906 173.84375 243.304688 185.625 255.753906 194.695312 C 265.933594 202.109375 277.699219 207.859375 286.808594 216.121094 C 298.90625 227.09375 304.019531 241.417969 300.695312 257.484375 C 297.574219 272.582031 287.273438 287.023438 273.851562 297.207031 C 280.152344 248.683594 217.898438 241.929688 207.296875 196.8125 C 205.675781 222.195312 220.550781 245.953125 230.550781 270.1875 C 236.179688 283.816406 239.839844 297.609375 238.472656 310.84375 C 235.875 336.039062 214.300781 355.886719 188.992188 356.59375 C 187.996094 356.621094 187 356.621094 186.003906 356.59375 Z M 187.496094 196.828125 C 186.425781 237.300781 149.261719 274.597656 146.347656 309.945312 C 144.441406 333.03125 163.519531 353.222656 186.054688 354.054688 C 187.015625 354.089844 187.976562 354.089844 188.9375 354.054688 C 211.476562 353.222656 230.550781 333.03125 228.648438 309.945312 C 225.730469 274.597656 188.570312 237.300781 187.496094 196.828125 " fill-opacity="1" fill-rule="evenodd"/> </a></g><a href="/"><path fill="#ffffff" d="M 192.167969 101.207031 C 229.480469 102.480469 259.003906 118.925781 259.003906 139.027344 C 259.003906 147.007812 254.347656 154.410156 246.402344 160.515625 C 258.671875 157.605469 268.46875 152.699219 275.144531 145.871094 C 288.574219 132.136719 286.695312 113.324219 280.035156 96.851562 C 274.808594 83.933594 266.300781 71.695312 257.859375 62.761719 C 215.941406 18.394531 159.054688 18.394531 117.136719 62.761719 C 108.695312 71.695312 100.1875 83.933594 94.960938 96.851562 C 88.300781 113.324219 86.421875 132.136719 99.847656 145.871094 C 106.523438 152.699219 116.324219 157.605469 128.59375 160.515625 C 120.648438 154.410156 115.988281 147.007812 115.988281 139.027344 C 115.988281 118.925781 145.511719 102.480469 182.828125 101.207031 C 185.9375 101.097656 189.054688 101.097656 192.167969 101.207031 " fill-opacity="1" fill-rule="evenodd"/></a></svg>

            </div>

            <div>
                <h1></h1>
                <ul className='font-normal text-center grid'>
                    <li> <a href="/" className='hover:scale-105 ease-in-out duration-300 inline-block'>Inicio</a></li>
                    <li> <a href="/projects" className='hover:scale-105 ease-in-out duration-300 inline-block mt-2' >Projetos</a></li>
                    <li> <a href="/contact" className='hover:scale-105 ease-in-out duration-300 inline-block mt-2'>Contato</a></li>
                </ul>
            </div>

            <div className='flex-row ml-20'>
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