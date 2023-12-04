type Props = {
  title: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const LabelInput: React.FC<Props> = ({
  title,
  required,
  value,
  onChange,
}) => {
  return (
    <div className="labelInput">
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        type="text"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
