import reactlogo from "../../public/svg-tec/reactlogo.svg";
import nextjslogo from "../../public/svg-tec/nextjslogo.svg";
import tslogo from "../../public/svg-tec/tslogo.svg";
import twlogo from "../../public/svg-tec/twlogo.svg";
import jslogo from "../../public/svg-tec/jslogo.svg";
import exlogo from "../../public/svg-tec/exlogo.svg";
import mongodblogo from "../../public/svg-tec/mongodblogo.svg";
import phplogo from "../../public/svg-tec/phplogo.svg";
import postgrelogo from "../../public/svg-tec/postgrelogo.svg";
import mysqllogo from "../../public/svg-tec/mysqllogo.svg";
import pythonlogo from "../../public/svg-tec/pythonlogo.svg";
import dockerlogo from "../../public/svg-tec/dockerlogo.svg";
import Image from "next/image";

export default function LogosTech() {
  return (
    <>
      <div className="mt-11 gap-4 grid grid-flow-col">
        <div className="">
          <Image
            className="ml-2 object-cover transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={reactlogo}
            width={70}
            height={70}
            alt="react logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={nextjslogo}
            width={70}
            height={70}
            alt="next logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={tslogo}
            width={70}
            height={70}
            alt="typescript logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={jslogo}
            width={70}
            height={70}
            alt="javascript logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={exlogo}
            width={70}
            height={70}
            alt="express logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={mysqllogo}
            width={70}
            height={70}
            alt="mysql logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={mongodblogo}
            width={70}
            height={70}
            alt="mongodb logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={postgrelogo}
            width={70}
            height={70}
            alt="postgre logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={phplogo}
            width={70}
            height={70}
            alt="php logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={twlogo}
            width={70}
            height={70}
            alt="tailwind logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={pythonlogo}
            width={70}
            height={70}
            alt="python logo"
          />
        </div>

        <div>
          <Image
            className="transition ease-in-out duration-500 react-logo hover:-translate-y-2"
            src={dockerlogo}
            width={70}
            height={70}
            alt="docker logo"
          />
        </div>
      </div>
    </>
  );
}