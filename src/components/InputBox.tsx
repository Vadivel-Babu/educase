interface InputBoxProps {
  label: string;
  type: "text" | "email" | "password";
  value: string;
  name: string;
  placeholder: string;
  required: Boolean;
  handleChange: (e: any) => void;
}

const InputBox = ({
  label = "",
  type = "text",
  value = "",
  name = "",
  placeholder = "",
  required = false,
  handleChange,
}: InputBoxProps) => {
  return (
    <div className="relative">
      <label
        htmlFor=""
        className="text-primary capitalize text-xs font-semibold absolute bg-gray-50 px-2 left-5 -top-3"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        className="p-2 border border-gray-300 rounded-md w-full focus:outline-0 hover:border-primary hover:shadow-md hover:shadow-secondary"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
