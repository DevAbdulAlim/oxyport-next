// PrimaryButton.tsx
import Link from "next/link";

type LinkType = {
  href?: string;
  text?: string;
};

type PrimaryButtonProps = LinkType & {
  onClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ href="/", text="Button", onClick }) => {
  return (
    <div className="mt-6">
      {onClick ? (
        <button onClick={onClick} className="bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-950">
          {text}
        </button>
      ) : (
        <Link href={href} className="bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-950">
          {text}
        </Link>
      )}
    </div>
  );
};

export default PrimaryButton;
