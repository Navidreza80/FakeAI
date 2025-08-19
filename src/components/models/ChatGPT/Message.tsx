import Icon from "./Icon";

const Message = ({
  content,
  sender,
  index,
}: {
  content: string;
  sender: string;
  index: number;
}) => {
  return (
    <div
      className={`w-full flex flex-col group ${
        sender == "User" ? "items-end" : "items-start"
      } ${index == 0 ? "pt-3" : sender == "User" ? "pt-12" : "pt-0"}`}
    >
      <div className="max-w-[70%] px-4 py-1.5 rounded-[18px] data-[multiline]:py-3 bg-[#303030] text-white">
        {content}
      </div>
      <div className="h-10 flex items-center justify-end w-full">
        {sender == "User" && <Icon />}
      </div>
    </div>
  );
};
export default Message;
