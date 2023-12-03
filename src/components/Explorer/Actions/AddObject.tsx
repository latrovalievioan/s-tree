import { FormSubmitButton } from '@/components/UI/Buttons/FormSubmitButton';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { Form } from '@/components/UI/Form';
import { EXISTING_NAME_MESSAGE, OBJECT_NAME_REGEX } from '@/constants';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { usePutObject } from '@/hooks/usePutObject';
import { useClientStore, useAppStore } from '@/store';
import { useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';

type Props = {
  formName: string;
  type: 'directory' | 'file';
  closeDialog: () => void;
};

export const AddObject: React.FC<Props> = ({ formName, type, closeDialog }) => {
  const queryClient = useQueryClient();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { data: objects } = useGetObjectNames();

  const { selectedObject } = useAppStore();
  const { bucket } = useClientStore();
  const [name, setName] = useState('');
  const [invalidName, setInvalidName] = useState<string | undefined>(undefined);

  const invalidNameMesssage = `s3//:${bucket}/${invalidName} ${EXISTING_NAME_MESSAGE}`;

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ['objects'] });
    setName('');
    closeDialog();
  };

  const { mutateAsync, isPending, error } = usePutObject(onSuccess);

  const createObject = () => {
    const objectKey = selectedObject + name + (type === 'directory' ? '/' : '');

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
      {(error || invalidName) && <ErrorMessage message={invalidNameMesssage} />}
      <Form name={formName} onSubmit={createObject}>
        <div>
          <input
            maxLength={50}
            value={name}
            placeholder="Name"
            type="text"
            pattern={OBJECT_NAME_REGEX}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <em>*Should not contain "/" or an empty space</em>
        </div>
        {type === 'file' && (
          <textarea
            maxLength={50_000}
            ref={textAreaRef}
            placeholder="Content of your file"
          />
        )}
        <FormSubmitButton isPending={isPending} />
      </Form>
    </>
  );
};
