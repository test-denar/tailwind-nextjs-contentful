import Link from 'next/link';
import Logo from './svgs/logo';
import ReactMarkdown from 'react-markdown';
import Twitter from './svgs/twitter';
import Instagram from './svgs/instagram';
import Facebook from './svgs/facebook';

function CompanyContacts(props) {
  return (
    <div className="space-y-2 text-sm">
      {props.title && <p className="text-base font-bold tracking-wide text-gray-900">{props.title}</p>}
      {props.phoneLabel && props.phoneNumber && (
        <div className="flex">
          <p className="mr-1 text-gray-800">{props.phoneLabel}</p>
          <a
            href={`tel:${props.phoneNumber}`}
            aria-label={props.phoneAlt}
            title={props.phoneAlt}
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {props.phoneNumber}
          </a>
        </div>
      )}
      {props.emailLabel && props.email && (
        <div className="flex">
          <p className="mr-1 text-gray-800">{props.emailLabel}</p>
          <a
            href={`mailto:${props.email}`}
            aria-label={props.emailAlt}
            title={props.emailAlt}
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {props.email}
          </a>
        </div>
      )}
      {props.addressLabel && props.address && (
        <div className="flex">
          <p className="mr-1 text-gray-800">{props.addressLabel}</p>
          <a
            href={`https://www.google.com/maps/search/${props.address}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={props.addressAlt}
            title={props.addressAlt}
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            {props.address}
          </a>
        </div>
      )}
    </div>
  );
}

function CompanySocial(props) {
  const iconMap = {
    twitter: Twitter,
    instagram: Instagram,
    facebook: Facebook
  };
  return (
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900">{props.title}</span>
      {props.links && props.links.length > 0 && (
        <div className="flex items-center mt-1 space-x-3">
          {props.links.map((link, idx) => {
            const IconComponent = iconMap[link.icon];
            if (!IconComponent) {
              return null;
            }
            return (
              <a key={idx} href={link.url} className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <IconComponent />
              </a>
            );
          })}
        </div>
      )}
      {props.description && (
        <div className="mt-4 text-sm text-gray-500 prose">
          <ReactMarkdown>{props.description}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default function Footer(props) {
  const companyName = props.siteConfig.companyName;
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/">
            <a aria-label="Go home" title={companyName} className="inline-flex items-center">
              <Logo />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">{companyName}</span>
            </a>
          </Link>
          {props.siteConfig.companyInfo && (
            <div className="mt-6 lg:max-w-sm text-sm text-gray-800 prose">
              <ReactMarkdown>{props.siteConfig.companyInfo}</ReactMarkdown>
            </div>
          )}
        </div>
        {props.siteConfig.companyContacts && <CompanyContacts {...props.siteConfig.companyContacts} />}
        {props.siteConfig.companySocial && <CompanySocial {...props.siteConfig.companySocial} />}
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        {props.siteConfig.copyrightText && <p className="text-sm text-gray-600">{props.siteConfig.copyrightText}</p>}
        {props.siteConfig.legalLinks && props.siteConfig.legalLinks.length > 0 && (
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            {props.siteConfig.legalLinks.map((link, idx) => (
              <li key={idx}>
                <a key={idx} href={link.url} className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
