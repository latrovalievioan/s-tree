import { FormSubmitButton } from '@/components/UI/Buttons/FormSubmitButton';
import { Form } from '@/components/UI/Form';
import { OBJECT_NAME_REGEX } from '@/constants';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { usePutObject } from '@/hooks/usePutObject';
import { useStore } from '@/store';
import { useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';

type Props = {
  formName: string;
  type: 'directory' | 'file';
  closeDialog: () => void;
};

export const AddObject: React.FC<Props> = ({ formName, type, closeDialog }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { selectedObject } = useStore();
  const { data: objects } = useGetObjectNames();
  const [dirName, setDirName] = useState('');
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ['objects'] });
    setDirName('');
    closeDialog();
  };
  const { mutateAsync, isPending } = usePutObject(onSuccess);

  const createObject = () => {
    const dirKey = selectedObject + dirName + (type === 'directory' ? '/' : '');

    if (objects?.includes(dirKey)) {
      console.log('TODO HANDLE THIS');
      return;
    }

    mutateAsync({
      key: dirKey,
      body: textAreaRef.current?.value || '',
    });
  };

  return (
    <Form name={formName} onSubmit={createObject}>
      <div>
        <span>Location:&nbsp;</span>
        <span>
          <em>{selectedObject}</em>
        </span>
      </div>
      <div>
        <input
          value={dirName}
          placeholder="Name"
          type="text"
          pattern={OBJECT_NAME_REGEX}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDirName(e.target.value)
          }
        />
        <em className="inputRule">*Should not contain "/" or an empty space</em>
      </div>
      {type === 'file' && (
        <textarea ref={textAreaRef} placeholder="Content of your file" />
      )}
      <FormSubmitButton isPending={isPending} />
    </Form>
  );
};
