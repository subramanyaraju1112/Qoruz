import LinkIcon from '@qoruz/components/svg/linkIcon';
import MessageIcon from '@qoruz/components/svg/message';
import Link from 'next/link';
const ButtonPrimary = (props: any) => {
  const { text, redirectUrl, withLinkIcon, size, icon, withShadow } = props;
  return (
    <>
      {!redirectUrl ? (
        <Link
          href=''
          className={`button primary ${size} primary-button ${
            withShadow ? 'btn-shadow' : ''
          }`}
        >
          {text}
          {icon == 'messageIcon' && <MessageIcon />}
          {(icon == 'linkIcon' || withLinkIcon) && <LinkIcon />}
        </Link>
      ) : (
        <Link
          target='_blank'
          href={redirectUrl}
          className={`button primary ${size} primary-button ${
            withShadow ? 'btn-shadow' : ''
          }`}
        >
          {text}
          {icon == 'messageIcon' && <MessageIcon />}
          {icon == 'linkIcon' && <LinkIcon />}
        </Link>
      )}
    </>
  );
};

export default ButtonPrimary;
