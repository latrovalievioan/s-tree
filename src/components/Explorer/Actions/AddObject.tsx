import { Spinner } from '@/components/UI/Spinner';
import { OBJECT_NAME_REGEX } from '@/constants';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { usePutObject } from '@/hooks/usePutObject';
import { useStore } from '@/store';
import { useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';

type Props = {
  type: 'directory' | 'file';
  closeDialog: () => void;
};

export const AddObject: React.FC<Props> = ({ type, closeDialog }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { selectedObject } = useStore();
  const objects = useGetObjectNames();
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

    if (objects.includes(dirKey)) {
      console.log('TODO HANDLE THIS');
      return;
    }

    mutateAsync({
      key: dirKey,
      body: textAreaRef.current?.value || '',
    });
  };

  return (
    <form
      className="modalContent"
      onSubmit={(e) => {
        e.preventDefault();
        createObject();
      }}
    >
      <div>
        <span>Location:&nbsp;</span>
        <span>
          <i>{selectedObject}</i>
        </span>
      </div>
      <div>
        <input
          id="dirName"
          value={dirName}
          placeholder="Name"
          type="text"
          pattern={OBJECT_NAME_REGEX}
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDirName(e.target.value)
          }
        />
        <div>
          <em className="inputRule">
            *Should not contain "/" or an empty space
          </em>
        </div>
      </div>
      {type === 'file' && (
        <textarea ref={textAreaRef} placeholder="Content of your file" />
      )}
      <button disabled={isPending} className={isPending ? 'innactive' : ''}>
        {isPending ? <Spinner width={24} height={24} border={2} /> : 'Done'}
      </button>
    </form>
  );
};
