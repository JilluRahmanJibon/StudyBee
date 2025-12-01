import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  padding?: string;
  customClassName?: string;
  bgLinearGradient?: boolean;
  border?: string;
  borderLinearGradient?: boolean;
  borderLinearGradientPadding?: string;
  rightIcon?: boolean;
  customTextSize?: string;
}
const Button: React.FC<ButtonProps> = ({
  text = "Button",
  link,
  onClick,
  rightIcon = true,
  customClassName = 'flex',
  bgLinearGradient = false,
  border = "p-[2px]",
  borderLinearGradient = false,
  padding = "xl:p-[14px_37px] md:p-[14px_30px] p-[10px_14px]",
  borderLinearGradientPadding = "xl:p-[12px_35px] md:p-[12px_28px] p-[8px_12px]",
  customTextSize = "md:text-[14px] sm3:text-[13px] text-[12px]"
}) => {
  return (
    <>
      {/* With Link */}
      <Link
        href={`${link}`}
        className={`${
          link ? "" : "hidden!"
        } ${customClassName} justify-center items-center ${customTextSize} ${
          bgLinearGradient
            ? `bg-linear3 bg-size-[200%] bg-left hover:bg-right text-white! ${padding}`
            : borderLinearGradient
            ? `bg-linear3 bg-size-[200%] bg-left hover:bg-right text-black! hover:text-white! ${border} group`
            : `bg-primary ${padding}`
        }  font-medium rounded-2xl cursor-pointer leading-6 transition-all duration-500 button_icon_effect`}
      >
        {/* With Border Linear Gradient */}
        <div
          className={`${
            borderLinearGradient &&
            `w-full h-full bg-white group-hover:bg-transparent rounded-[15px] ${borderLinearGradientPadding}`
          } flex items-center justify-center transition-all duration-500 uppercase`}
        >
          {text}
          <div
            className={`w-[9px] h-[18px] sm3:ml-[9px] ml-[5px] ${
              rightIcon ? "" : "hidden"
            }`}
          >
            <FaAngleRight className="sm3:text-[17px] text-[13px] sm3:mt-0 mt-0.5 button_icon" />
          </div>
        </div>
      </Link>

      {/* WithOut Link */}
      <button
        onClick={onClick}
        className={`${
          link ? "hidden!" : ""
        } justify-center items-center ${customTextSize} ${customClassName} ${
          bgLinearGradient
            ? `bg-linear3 bg-size-[200%] bg-left hover:bg-right text-white! ${padding}`
            : borderLinearGradient
            ? `bg-linear3 bg-size-[200%] bg-left hover:bg-right text-black! hover:text-white! p-0.5 group`
            : `bg-primary ${padding}`
        }  font-medium rounded-2xl cursor-pointer leading-6 transition-all duration-500 button_icon_effect`}
      >
        {/* With Border Linear Gradient */}
        <div
          className={`${
            borderLinearGradient &&
            `w-full h-full bg-white group-hover:bg-transparent rounded-[15px] ${borderLinearGradientPadding}`
          } flex items-center justify-center transition-all duration-500 uppercase`}
        >
          {text}
          <div
            className={`w-[9px] h-[18px] sm3:ml-[9px] ml-[5px] ${
              rightIcon ? "" : "hidden"
            }`}
          >
            <FaAngleRight className="sm3:text-[17px] text-[13px] sm3:mt-0 mt-0.5 button_icon" />
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
