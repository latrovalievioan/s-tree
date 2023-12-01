import { FormSubmitButton } from '@/components/UI/Buttons/FormSubmitButton';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { Form } from '@/components/UI/Form';
import { EXISTING_NAME_MESSAGE, OBJECT_NAME_REGEX } from '@/constants';
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
  const [invalidName, setInvalidName] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ['objects'] });
    setDirName('');
    closeDialog();
  };
  const { mutateAsync, isPending, error } = usePutObject(onSuccess);

  const createObject = () => {
    const objectKey =
      selectedObject + dirName + (type === 'directory' ? '/' : '');

    if (objects?.includes(objectKey)) {
      setInvalidName(objectKey);
      return;
    }

    mutateAsync({
      key: objectKey,
      body: textAreaRef.current?.value || '',
    });
  };

  return (
    <>
      {(error || invalidName) && (
        <ErrorMessage message={`${invalidName} ${EXISTING_NAME_MESSAGE}`} />
      )}
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
          <em className="inputRule">
            *Should not contain "/" or an empty space
          </em>
        </div>
        {type === 'file' && (
          <textarea ref={textAreaRef} placeholder="Content of your file" />
        )}
        <FormSubmitButton isPending={isPending} />
      </Form>
    </>
  );
};
