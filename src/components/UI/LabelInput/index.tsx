import { Info } from '@/assets/Info';

type Props = {
  title: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  pattern?: string;
  note?: string;
};

export const LabelInput: React.FC<Props> = ({
  title,
  required,
  value,
  onChange,
  maxLength,
  pattern,
  note,
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
        maxLength={maxLength}
        pattern={pattern}
      />
      {note && (
        <em>
          <Info />
          {note}
        </em>
      )}
    </div>
  );
};
